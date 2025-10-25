import {Palette, Shield, User} from "lucide-react";
import {Metadata} from "next";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {AppearanceTab, ProfileTab, SecurityTab} from "@/features/settings";

export const metadata: Metadata = {
  title: "Ayarlar - MedAIst",
  description: "Hesap ayarlarınızı ve tercihlerinizi yönetin.",
};

const SettingsPage = () => {
  return (
    <MaxWidthWrapper className="py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Ayarlar</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Hesap ayarlarınızı ve tercihlerinizi yönetin
          </p>
        </div>

        {/* Settings Tabs */}
        <Tabs className="space-y-6" defaultValue="profile">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger className="flex items-center gap-2" value="profile">
              <User size={16} />
              Profil
            </TabsTrigger>
            <TabsTrigger className="flex items-center gap-2" value="appearance">
              <Palette size={16} />
              Görünüm
            </TabsTrigger>
            {/* <TabsTrigger className="flex items-center gap-2" value="subscription">
              <CreditCard size={16} />
              Abonelik
            </TabsTrigger> */}
            <TabsTrigger className="flex items-center gap-2" value="security">
              <Shield size={16} />
              Güvenlik
            </TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <TabsContent value="profile">
            <ProfileTab />
          </TabsContent>

          <TabsContent value="appearance">
            <AppearanceTab />
          </TabsContent>

          {/* <TabsContent value="subscription">
            <SubscriptionTab />
          </TabsContent> */}

          <TabsContent value="security">
            <SecurityTab />
          </TabsContent>
        </Tabs>
      </div>
    </MaxWidthWrapper>
  );
};

export default SettingsPage;
