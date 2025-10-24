type Props = {
  params: Promise<{chat_id: string}>;
  searchParams: Promise<{[key: string]: string | string[] | undefined}>;
};

const ChatPage = async ({params, searchParams}: Props) => {
  const {chat_id} = await params;
  const {pdf_id} = await searchParams;

  return <div>ChatPage</div>;
};

export default ChatPage;
