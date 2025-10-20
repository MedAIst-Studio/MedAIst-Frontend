# React Query Entegrasyonu

Bu dokümanda MedAIst Frontend projesiyle React Query (TanStack Query) entegrasyonu detaylı olarak açıklanmaktadır.

## İçindekiler

1. [Genel Bakış](#genel-bakış)
2. [Kurulum](#kurulum)
3. [Yapılandırma](#yapılandırma)
4. [Query Kullanımı](#query-kullanımı)
5. [Mutation Kullanımı](#mutation-kullanımı)
6. [Cache Yönetimi](#cache-yönetimi)
7. [Best Practices](#best-practices)

## Genel Bakış

React Query, sunucu durumunu yönetmek için güçlü bir kütüphanedir ve şu avantajları sağlar:

- ✅ **Otomatik Cache Yönetimi**: Veriler otomatik olarak cache'lenir ve yeniden kullanılır
- ✅ **Background Refetch**: Veriler arka planda otomatik olarak güncellenir
- ✅ **Optimistic Updates**: Kullanıcı deneyimini iyileştirmek için optimistik güncellemeler
- ✅ **Request Deduplication**: Aynı anda yapılan aynı istekler birleştirilir
- ✅ **Garbage Collection**: Kullanılmayan cache verisi otomatik temizlenir
- ✅ **DevTools**: Geliştirme sırasında cache durumunu görüntüleme

## Kurulum

React Query ve ilgili bağımlılıklar zaten kurulmuştur:

\`\`\`json
{
"@tanstack/react-query": "^5.90.2",
"@tanstack/react-query-devtools": "^5.90.2",
"sonner": "^1.x.x"
}
\`\`\`

## Yapılandırma

### 1. QueryProvider

`src/providers/query-provider.tsx` dosyasında QueryClient yapılandırması:

\`\`\`tsx
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export function QueryProvider({children}: {children: React.ReactNode}) {
const [queryClient] = useState(
() =>
new QueryClient({
defaultOptions: {
queries: {
staleTime: 60 _ 1000, // 1 dakika
gcTime: 5 _ 60 \* 1000, // 5 dakika
retry: 1,
refetchOnWindowFocus: false,
},
mutations: {
retry: 1,
},
},
}),
);

return (
<QueryClientProvider client={queryClient}>
{children}
<ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
);
}
\`\`\`

**Önemli Parametreler:**

- **staleTime**: Cache'deki verinin ne kadar süre "fresh" (taze) olarak kabul edileceği
- **gcTime**: Cache'deki kullanılmayan verinin ne zaman silineceği (eski adı: cacheTime)
- **retry**: Başarısız isteklerin kaç kez tekrar deneneceği
- **refetchOnWindowFocus**: Pencere odaklandığında otomatik refetch yapılıp yapılmayacağı

### 2. Root Layout'a Ekleme

`src/app/layout.tsx`:

\`\`\`tsx
import {QueryProvider} from "@/providers/query-provider";
import {Toaster} from "@/components/ui/sonner";

export default function RootLayout({children}) {
return (

<html>
<body>
<QueryProvider>
<ThemeProvider>
{children}
<Toaster />
</ThemeProvider>
</QueryProvider>
</body>
</html>
);
}
\`\`\`

## Query Kullanımı

### Query Keys

Query keys, cache'de verileri tanımlamak için kullanılır. Tutarlı bir yapı kullanmak önemlidir:

\`\`\`typescript
// src/features/files/hooks/useFileQueries.ts
export const fileKeys = {
all: ["files"] as const,
lists: () => [...fileKeys.all, "list"] as const,
list: (filters?: string) => [...fileKeys.lists(), {filters}] as const,
details: () => [...fileKeys.all, "detail"] as const,
detail: (id: string) => [...fileKeys.details(), id] as const,
};
\`\`\`

**Key Hiyerarşisi:**
\`\`\`
["files"] // Tüm dosya query'leri
["files", "list"] // Tüm dosya listeleri
["files", "list", {filters: "..."}] // Filtrelenmiş dosya listesi
["files", "detail"] // Tüm dosya detayları
["files", "detail", "123"] // Belirli bir dosya detayı
\`\`\`

### useQuery Hook'u

Veri çekmek için `useQuery` kullanılır:

\`\`\`typescript
export const useDocuments = () => {
return useQuery({
queryKey: fileKeys.lists(),
queryFn: async () => {
const {data, error} = await fileAPI.getDocuments();

      if (error) {
        throw new Error(error.message || "Dökümanlar yüklenirken hata oluştu");
      }

      return data;
    },

});
};
\`\`\`

**Component'te Kullanım:**

\`\`\`tsx
function DocumentList() {
const {data, isLoading, error, refetch} = useDocuments();

if (isLoading) return <Skeleton />;
if (error) return <Error message={error.message} />;

return (

<div>
{data?.map(doc => (
<DocumentCard key={doc.id} document={doc} />
))}
</div>
);
}
\`\`\`

### Conditional Queries

Belirli koşullarda query'leri devre dışı bırakabilirsiniz:

\`\`\`typescript
export const useDocument = (fileId: string) => {
return useQuery({
queryKey: fileKeys.detail(fileId),
queryFn: async () => {
const {data, error} = await fileAPI.getDocument(fileId);

      if (error) throw new Error(error.message);
      return data;
    },
    enabled: !!fileId, // fileId yoksa query çalışmaz

});
};
\`\`\`

## Mutation Kullanımı

### useMutation Hook'u

Veri değiştirme işlemleri için `useMutation` kullanılır:

\`\`\`typescript
export const useUploadFile = () => {
const queryClient = useQueryClient();

return useMutation({
mutationFn: async ({file_title, file_data}: {file_title: string; file_data: File}) => {
const {data, error} = await fileAPI.uploadFile(file_title, file_data);

      if (error) throw new Error(error.message);
      return data;
    },
    onSuccess: () => {
      // Cache'i invalidate et ve refetch yap
      queryClient.invalidateQueries({queryKey: fileKeys.lists()});
      toast.success("Dosya başarıyla yüklendi");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },

});
};
\`\`\`

**Component'te Kullanım:**

\`\`\`tsx
function FileUploadForm() {
const {mutate, isPending} = useUploadFile();

const handleUpload = (file: File) => {
mutate({
file_title: file.name,
file_data: file,
});
};

return (
<button onClick={() => handleUpload(file)} disabled={isPending}>
{isPending ? "Yükleniyor..." : "Yükle"}
</button>
);
}
\`\`\`

### Async Mutation

Promise döndürmesi gereken durumlarda `mutateAsync` kullanın:

\`\`\`typescript
const {mutateAsync: uploadFile} = useUploadFile();

try {
await uploadFile({file_title, file_data});
// Başarılı
} catch (error) {
// Hata yönetimi
}
\`\`\`

## Cache Yönetimi

### Cache Invalidation

Cache'i geçersiz kılmak ve refetch tetiklemek:

\`\`\`typescript
// Tüm dosya query'lerini invalidate et
queryClient.invalidateQueries({queryKey: fileKeys.all});

// Sadece listeleri invalidate et
queryClient.invalidateQueries({queryKey: fileKeys.lists()});

// Belirli bir dosyayı invalidate et
queryClient.invalidateQueries({queryKey: fileKeys.detail("123")});
\`\`\`

### Manual Cache Update

Cache'i manuel olarak güncellemek:

\`\`\`typescript
queryClient.setQueryData(fileKeys.lists(), (oldData) => {
return [...oldData, newDocument];
});
\`\`\`

### Cache Silme

Cache'den veri silmek:

\`\`\`typescript
queryClient.removeQueries({queryKey: fileKeys.detail("123")});
\`\`\`

### Optimistic Updates

Kullanıcı deneyimini iyileştirmek için optimistic updates:

\`\`\`typescript
export const useDeleteDocument = () => {
const queryClient = useQueryClient();

return useMutation({
mutationFn: async (fileId: string) => {
const {data, error} = await fileAPI.deleteDocument(fileId);
if (error) throw new Error(error.message);
return data;
},
onMutate: async (fileId) => {
// İptal et mevcut refetch'leri
await queryClient.cancelQueries({queryKey: fileKeys.lists()});

      // Önceki değeri sakla
      const previousDocuments = queryClient.getQueryData(fileKeys.lists());

      // Optimistic update
      queryClient.setQueryData(fileKeys.lists(), (old) =>
        old?.filter((doc) => doc.id !== fileId)
      );

      return {previousDocuments};
    },
    onError: (err, fileId, context) => {
      // Hata durumunda geri al
      queryClient.setQueryData(fileKeys.lists(), context.previousDocuments);
    },
    onSettled: () => {
      // Her durumda refetch
      queryClient.invalidateQueries({queryKey: fileKeys.lists()});
    },

});
};
\`\`\`

## Best Practices

### 1. Query Key Yapısı

✅ **İyi Pratik:**
\`\`\`typescript
const userKeys = {
all: ["users"] as const,
lists: () => [...userKeys.all, "list"] as const,
list: (filters: string) => [...userKeys.lists(), {filters}] as const,
details: () => [...userKeys.all, "detail"] as const,
detail: (id: string) => [...userKeys.details(), id] as const,
};
\`\`\`

❌ **Kötü Pratik:**
\`\`\`typescript
// Tutarsız key yapısı
useQuery(["users"]);
useQuery(["user-list"]);
useQuery(["getUsers"]);
\`\`\`

### 2. Error Handling

✅ **İyi Pratik:**
\`\`\`typescript
queryFn: async () => {
const {data, error} = await api.getData();
if (error) {
throw new Error(error.message || "Bir hata oluştu");
}
return data;
}
\`\`\`

### 3. Loading States

✅ **İyi Pratik:**
\`\`\`tsx
const {data, isLoading, isFetching} = useDocuments();

// İlk yükleme
if (isLoading) return <Skeleton />;

// Arka planda yeniden yükleme
if (isFetching) return <RefreshIndicator />;
\`\`\`

### 4. Stale Time ve GC Time

\`\`\`typescript
// Sık değişen veriler için
useQuery({
queryKey: ["notifications"],
staleTime: 0, // Her zaman stale
gcTime: 0, // Cache'leme yok
});

// Nadiren değişen veriler için
useQuery({
queryKey: ["user-profile"],
staleTime: 5 _ 60 _ 1000, // 5 dakika
gcTime: 10 _ 60 _ 1000, // 10 dakika
});
\`\`\`

### 5. Pagination

\`\`\`typescript
const usePaginatedDocuments = (page: number) => {
return useQuery({
queryKey: [...fileKeys.lists(), {page}],
queryFn: () => fileAPI.getDocuments(page),
keepPreviousData: true, // Sayfa değişirken önceki veriyi göster
});
};
\`\`\`

### 6. Dependent Queries

\`\`\`typescript
// Önce kullanıcıyı al
const {data: user} = useUser(userId);

// Sonra kullanıcının dökümanlarını al
const {data: documents} = useUserDocuments(user?.id, {
enabled: !!user?.id, // user yüklenene kadar bekle
});
\`\`\`

## DevTools

React Query DevTools geliştirme sırasında aktiftir:

- **Ctrl + Shift + D**: DevTools'u aç/kapat
- Cache durumunu görüntüle
- Query'leri manuel olarak refetch et
- Cache'i temizle
- Query lifecycle'ı izle

## Örnek Kullanım Senaryoları

### Senaryo 1: Dosya Listesi ve Yükleme

\`\`\`tsx
function DocumentsPage() {
const {data: documents, isLoading} = useDocuments();
const {mutate: uploadFile, isPending} = useUploadFile();

const handleUpload = (file: File) => {
uploadFile({
file_title: file.name,
file_data: file,
});
};

if (isLoading) return <Skeleton />;

return (

<div>
<FileUpload onUpload={handleUpload} disabled={isPending} />
<DocumentList documents={documents} />
</div>
);
}
\`\`\`

### Senaryo 2: Dosya Detayı ve Silme

\`\`\`tsx
function DocumentDetailPage({id}: {id: string}) {
const {data: document, isLoading} = useDocument(id);
const {mutate: deleteDocument} = useDeleteDocument();
const router = useRouter();

const handleDelete = () => {
deleteDocument(id, {
onSuccess: () => {
router.push("/documents");
},
});
};

if (isLoading) return <Skeleton />;
if (!document) return <NotFound />;

return (

<div>
<h1>{document.title}</h1>
<button onClick={handleDelete}>Sil</button>
</div>
);
}
\`\`\`

## Sonuç

React Query entegrasyonu ile:

- ✅ Daha iyi cache yönetimi
- ✅ Otomatik background refetch
- ✅ Daha iyi kullanıcı deneyimi
- ✅ Daha az boilerplate kod
- ✅ Kolay hata yönetimi
- ✅ Optimistic updates
- ✅ Request deduplication

elde edilmiştir.
