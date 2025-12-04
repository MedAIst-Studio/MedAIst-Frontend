import {Metadata} from "next";

import {Chat} from "@/features/chat";

type Props = {
  params: Promise<{id: string}>;
};

export const metadata: Metadata = {
  title: "Dosya - MedAIst",
  description: "PDF dosyanızla yapay zeka destekli sohbet edin.",
};

const FileChatPage = async ({params}: Props) => {
  const {id} = await params;

  return <Chat fileId={id} />;
};

export default FileChatPage;
