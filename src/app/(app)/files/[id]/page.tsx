import {Chat} from "@/features/chat";

type Props = {
  params: Promise<{id: string}>;
};

const FileChatPage = async ({params}: Props) => {
  const {id} = await params;

  return <Chat fileId={id} />;
};

export default FileChatPage;
