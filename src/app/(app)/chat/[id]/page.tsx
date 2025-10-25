import {Metadata} from "next";

import {Chat} from "@/features/chat";

type Props = {
  params: Promise<{id: string}>;
  searchParams: Promise<{[key: string]: string | undefined}>;
};

export const metadata: Metadata = {
  title: "Sohbet - MedAIst",
  description:
    "Dosyalarınızla yapay zeka destekli sohbet edin ve tıbbi çalışmalarınızı geliştirin.",
};

const ChatPage = async ({params, searchParams}: Props) => {
  const {id} = await params;
  const {file_id} = await searchParams;

  return <Chat chatId={id} fileId={file_id} />;
};

export default ChatPage;
