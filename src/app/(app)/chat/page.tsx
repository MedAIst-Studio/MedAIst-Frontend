"use client";

import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Textarea} from "@/components/ui/textarea";
import {
  ArrowUp,
  BookOpen,
  Brain,
  Copy,
  History,
  Loader2,
  MessageSquare,
  RotateCcw,
  Sparkles,
  Stethoscope,
  Trash2,
} from "lucide-react";
import {useEffect, useRef, useState} from "react";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

interface SavedChat {
  id: string;
  title: string;
  messages: Message[];
  lastUpdated: Date;
  messageCount: number;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your AI medical study assistant. I can help you understand medical concepts, explain procedures, review symptoms, and answer questions about anatomy, physiology, pathology, and more. What would you like to learn about today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Initialize with some mock saved chats
  const [savedChats, setSavedChats] = useState<SavedChat[]>([
    {
      id: "chat-1",
      title: "Cardiovascular System Discussion",
      messages: [
        {
          id: "1",
          content: "Can you explain how the heart works?",
          role: "user",
          timestamp: new Date("2024-01-15T10:00:00"),
        },
        {
          id: "2",
          content: "The heart is a muscular pump with four chambers...",
          role: "assistant",
          timestamp: new Date("2024-01-15T10:01:00"),
        },
      ],
      lastUpdated: new Date("2024-01-15T10:15:00"),
      messageCount: 8,
    },
    {
      id: "chat-2",
      title: "Respiratory System Questions",
      messages: [
        {
          id: "1",
          content: "How does gas exchange work in the lungs?",
          role: "user",
          timestamp: new Date("2024-01-14T14:00:00"),
        },
      ],
      lastUpdated: new Date("2024-01-14T14:30:00"),
      messageCount: 6,
    },
  ]);

  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Save current chat
  const saveCurrentChat = () => {
    if (messages.length <= 1) return; // Don't save if only welcome message

    const chatTitle = messages[1]?.content.slice(0, 50) + "..." || "New Chat";
    const newChat: SavedChat = {
      id: currentChatId || `chat-${Date.now()}`,
      title: chatTitle,
      messages: [...messages],
      lastUpdated: new Date(),
      messageCount: messages.length,
    };

    setSavedChats((prev) => {
      const existingIndex = prev.findIndex((chat) => chat.id === newChat.id);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = newChat;
        return updated;
      }
      return [newChat, ...prev];
    });

    setCurrentChatId(newChat.id);
  };

  // Load a saved chat
  const loadChat = (chatId: string) => {
    const chat = savedChats.find((c) => c.id === chatId);
    if (chat) {
      setMessages([...chat.messages]);
      setCurrentChatId(chatId);
      setIsHistoryOpen(false);
    }
  };

  // Delete a saved chat
  const deleteChat = (chatId: string) => {
    setSavedChats((prev) => prev.filter((chat) => chat.id !== chatId));
    if (currentChatId === chatId) {
      setCurrentChatId(null);
    }
  };

  // Start new chat
  const startNewChat = () => {
    setMessages([
      {
        id: "1",
        content:
          "Hello! I'm your AI medical study assistant. I can help you understand medical concepts, explain procedures, review symptoms, and answer questions about anatomy, physiology, pathology, and more. What would you like to learn about today?",
        role: "assistant",
        timestamp: new Date(),
      },
    ]);
    setCurrentChatId(null);
    setIsHistoryOpen(false);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage.trim(),
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateMockResponse(userMessage.content),
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => {
        const newMessages = [...prev, aiResponse];
        // Auto-save after AI response
        setTimeout(() => {
          if (newMessages.length > 1) {
            const chatTitle = newMessages[1]?.content.slice(0, 50) + "..." || "New Chat";
            const chatToSave: SavedChat = {
              id: currentChatId || `chat-${Date.now()}`,
              title: chatTitle,
              messages: [...newMessages],
              lastUpdated: new Date(),
              messageCount: newMessages.length,
            };

            setSavedChats((prev) => {
              const existingIndex = prev.findIndex((chat) => chat.id === chatToSave.id);
              if (existingIndex >= 0) {
                const updated = [...prev];
                updated[existingIndex] = chatToSave;
                return updated;
              }
              return [chatToSave, ...prev];
            });

            if (!currentChatId) {
              setCurrentChatId(chatToSave.id);
            }
          }
        }, 100);
        return newMessages;
      });
      setIsLoading(false);
    }, 1500);
  };

  const generateMockResponse = (userInput: string): string => {
    const responses = {
      heart:
        "The heart is a muscular organ that pumps blood throughout your body. It has four chambers: two atria (upper chambers) and two ventricles (lower chambers). The right side pumps deoxygenated blood to the lungs, while the left side pumps oxygenated blood to the rest of the body.\n\nKey points:\n• Right atrium → Right ventricle → Pulmonary circulation\n• Left atrium → Left ventricle → Systemic circulation\n• Heart rate is controlled by the SA node (natural pacemaker)\n• Normal resting heart rate: 60-100 bpm",

      blood:
        "Blood is composed of plasma (55%) and formed elements (45%). The main components are:\n\n**Red Blood Cells (Erythrocytes):**\n• Carry oxygen via hemoglobin\n• Lifespan: ~120 days\n• No nucleus when mature\n\n**White Blood Cells (Leukocytes):**\n• Immune system defense\n• Types: neutrophils, lymphocytes, monocytes, eosinophils, basophils\n\n**Platelets (Thrombocytes):**\n• Blood clotting\n• Lifespan: 8-12 days\n\n**Plasma:**\n• Water, proteins, nutrients, waste products\n• Contains clotting factors and antibodies",

      default:
        "I understand you're asking about a medical topic. As your AI study assistant, I'm here to help explain complex medical concepts in an easy-to-understand way.\n\nCould you be more specific about what you'd like to learn? For example:\n• Anatomy and physiology\n• Disease processes and pathology\n• Pharmacology and drug mechanisms\n• Diagnostic procedures\n• Treatment protocols\n\nFeel free to ask about any specific organ system, condition, or medical concept you're studying!",
    };

    const input = userInput.toLowerCase();
    if (input.includes("heart") || input.includes("cardiac") || input.includes("cardiovascular")) {
      return responses.heart;
    } else if (input.includes("blood") || input.includes("hematology")) {
      return responses.blood;
    } else {
      return responses.default;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    startNewChat();
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const quickQuestions = [
    "Explain the cardiac cycle",
    "What is diabetes mellitus?",
    "How does the respiratory system work?",
    "Difference between arteries and veins",
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="border-b bg-white/95 backdrop-blur-sm flex-shrink-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-gray-900">MedAI Assistant</h1>
                <p className="text-xs text-gray-500">Your personal medical study companion</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Dialog open={isHistoryOpen} onOpenChange={setIsHistoryOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" title="Chat history">
                    <History className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Chat History</DialogTitle>
                    <DialogDescription>Access your previous conversations</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {savedChats.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        <MessageSquare className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                        <p>No saved chats yet</p>
                        <p className="text-sm">Start a conversation and save it to see it here</p>
                      </div>
                    ) : (
                      savedChats.map((chat) => (
                        <div
                          key={chat.id}
                          className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50 group"
                        >
                          <div className="flex-1 cursor-pointer" onClick={() => loadChat(chat.id)}>
                            <h4 className="font-medium text-sm group-hover:text-blue-600">
                              {chat.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                              <span>{chat.messageCount} messages</span>
                              <span>•</span>
                              <span>{chat.lastUpdated.toLocaleDateString()}</span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 h-8 w-8 p-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteChat(chat.id);
                            }}
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="flex gap-2 pt-4 border-t">
                    <Button variant="outline" className="flex-1" onClick={startNewChat}>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      New Chat
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="ghost" size="sm" onClick={clearChat} title="Clear chat">
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4">
        <div className="max-w-4xl mx-auto py-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.role === "assistant" && (
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Brain className="w-4 h-4 text-white" />
                </div>
              )}

              <div className={`max-w-3xl ${message.role === "user" ? "order-1" : ""}`}>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-blue-600 text-white ml-12"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {message.content}
                  </div>
                </div>

                {/* Message Actions */}
                <div
                  className={`flex items-center gap-1 mt-2 text-xs text-gray-500 ${
                    message.role === "user" ? "justify-end mr-2" : "justify-start ml-2"
                  }`}
                >
                  <span>
                    {message.timestamp.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}
                  </span>

                  {message.role === "assistant" && (
                    <div className="flex items-center gap-1 ml-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-gray-200"
                        onClick={() => copyMessage(message.content)}
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Loading Message */}
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div className="max-w-3xl">
                <div className="rounded-2xl px-4 py-3 bg-gray-100">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">MedAI is thinking...</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Questions (only show when no messages except welcome) */}
          {messages.length === 1 && (
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Quick Questions to Get Started:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="text-left justify-start h-auto py-3 px-4 text-sm text-gray-700 hover:bg-blue-50 hover:border-blue-200"
                      onClick={() => setInputMessage(question)}
                    >
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span>{question}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Stethoscope className="w-3 h-3" />
                    <span>Medical Knowledge</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    <span>Study Support</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Brain className="w-3 h-3" />
                    <span>AI-Powered</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white flex-shrink-0 px-4">
        <div className="max-w-4xl mx-auto py-4">
          <div className="relative flex items-center border rounded-full pr-4">
            <Textarea
              ref={textareaRef}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask me about medical concepts, procedures, anatomy, or anything related to your studies..."
              className="resize-none focus-visible:ring-0 border p-6 shadow-none border-none"
              disabled={isLoading}
            />
            <Button
              size="lg"
              className="h-10 w-10 p-0 rounded-full"
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
            >
              <ArrowUp className="!w-5 !h-5" />
            </Button>
          </div>
          <div className="text-xs text-gray-500 mt-2 text-center">
            MedAI can make mistakes. Please verify important medical information.
          </div>
        </div>
      </div>
    </div>
  );
}
