import {Chat} from "@/features/chat";

type Props = {
  params: Promise<{id: string}>;
  searchParams: Promise<{[key: string]: string | undefined}>;
};

const ChatPage = async ({params, searchParams}: Props) => {
  const {id} = await params;
  const {file_id} = await searchParams;

  return <Chat chatId={id} fileId={file_id} />;
};

export default ChatPage;
