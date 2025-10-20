import type {ChatMessage, Document} from "../types";

import {Send, X} from "lucide-react";
import {useEffect, useRef, useState} from "react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";

interface ChatInterfaceProps {
  document: Document;
  isOpen: boolean;
  onClose: () => void;
}

// Mock messages for demo
const mockMessages: ChatMessage[] = [
  {
    id: "1",
    content: "Merhaba! Bu döküman hakkında nasıl yardımcı olabilirim?",
    role: "assistant",
    timestamp: new Date().toISOString(),
    documentId: "1",
  },
];

export const ChatInterface = ({document, isOpen, onClose}: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: newMessage,
      role: "user",
      timestamp: new Date().toISOString(),
      documentId: document.id,
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: `Bu sorunuza göre ${document.title} dökümanından şu bilgiyi buldum: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bu bilgi dökümanın 2. sayfasında yer alıyor.`,
        role: "assistant",
        timestamp: new Date().toISOString(),
        documentId: document.id,
        sources: [
          {
            page: 2,
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
        ],
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl h-[80vh] flex flex-col">
        <CardHeader className="flex-shrink-0 border-b-2 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">{document.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{document.fileName}</p>
            </div>
            <Button size="icon-sm" variant="outline" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.role === "user" && "bg-primary text-primary-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>

                    {message.sources && message.sources.length > 0 && (
                      <div className="mt-2 pt-2 border-t-2">
                        <p className="text-xs text-slate-600 mb-1">Kaynak:</p>
                        {message.sources.map((source, index) => (
                          <Badge key={index} className="mr-1 text-xs" variant="secondary">
                            Sayfa {source.page}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <p className="text-xs opacity-70 mt-1">
                      {new Date(message.timestamp).toLocaleTimeString("tr-TR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start space-x-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-muted rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-muted rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Message Input */}
          <div className="border-t-2 p-4">
            <div className="flex space-x-2">
              <Input
                disabled={isLoading}
                placeholder="Döküman hakkında bir soru sorun..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Button
                className="!h-full"
                disabled={!newMessage.trim() || isLoading}
                onClick={handleSendMessage}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Enter ile gönder • {document.messageCount} önceki mesaj
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
