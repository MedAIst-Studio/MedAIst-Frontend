export interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export interface SavedChat {
  id: string;
  title: string;
  messages: Message[];
  lastUpdated: Date;
  messageCount: number;
}

export interface ChatState {
  messages: Message[];
  inputMessage: string;
  isLoading: boolean;
  savedChats: SavedChat[];
  currentChatId: string | null;
  isHistoryOpen: boolean;
}

export interface ChatActions {
  setMessages: (messages: Message[]) => void;
  setInputMessage: (message: string) => void;
  setIsLoading: (loading: boolean) => void;
  setSavedChats: (chats: SavedChat[] | ((prev: SavedChat[]) => SavedChat[])) => void;
  setCurrentChatId: (id: string | null) => void;
  setIsHistoryOpen: (open: boolean) => void;
}
