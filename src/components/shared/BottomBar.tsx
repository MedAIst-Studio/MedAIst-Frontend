"use client";

import type {MenuItem} from "./navigation-config";

import {MessageSquare} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";

import {Badge} from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {SidebarMenu} from "@/components/ui/sidebar";
import {useChats, useDeleteChat} from "@/features/chat/hooks";
import {cn} from "@/lib/utils";

import {ChatItem} from "./ChatItem";
import {navigationItems} from "./navigation-config";

interface BottomBarProps {
  className?: string;
  items?: MenuItem[];
}

export default function BottomBar({className, items = navigationItems}: BottomBarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const {data: chats} = useChats();
  const deleteChatMutation = useDeleteChat();

  const handleDeleteChat = async (chatId: string) => {
    await deleteChatMutation.mutateAsync(chatId);
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 md:hidden",
        "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        "border-t border-border",
        "pb-safe",
        className,
      )}
    >
      <div className="flex items-center justify-around h-16 px-2">
        {items.map((item, index) => {
          const isActive = pathname === item.url || pathname.startsWith(item.url + "/");
          const Icon = item.icon;

          return (
            <Link
              key={index}
              className={cn(
                "flex flex-col items-center justify-center gap-1",
                "w-full h-full py-2",
                "text-muted-foreground transition-colors hover:text-foreground",
                isActive && "text-primary font-medium",
              )}
              href={item.url}
            >
              <div className="relative">
                <Icon className={cn("h-5 w-5", isActive && "stroke-[2.5px]")} />
                {item.badge && item.badge > 0 && (
                  <Badge
                    className="absolute -top-1.5 -right-1.5 h-4 w-4 p-0 flex items-center justify-center text-[10px]"
                    variant="destructive"
                  >
                    {item.badge > 9 ? "9+" : item.badge}
                  </Badge>
                )}
              </div>
              <span className="text-[10px]">{item.title}</span>
            </Link>
          );
        })}

        {/* Chats Sheet Trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className={cn(
                "flex flex-col items-center justify-center gap-1",
                "w-full h-full py-2",
                "text-muted-foreground transition-colors hover:text-foreground",
                (pathname.startsWith("/chat") || open) && "text-primary font-medium",
              )}
            >
              <MessageSquare
                className={cn(
                  "h-5 w-5",
                  (pathname.startsWith("/chat") || open) && "stroke-[2.5px]",
                )}
              />
              <span className="text-[10px]">Sohbetler</span>
            </button>
          </SheetTrigger>
          <SheetContent className="h-[80vh] flex flex-col p-0" side="bottom">
            <SheetHeader className="px-4 py-4 border-b">
              <SheetTitle>Sohbetler</SheetTitle>
              <SheetDescription>Geçmiş sohbetlerinize buradan erişebilirsiniz.</SheetDescription>
            </SheetHeader>
            <div className="flex-1 overflow-y-auto">
              <div className="px-4 py-4">
                {chats && chats.length > 0 ? (
                  <SidebarMenu>
                    {chats.map((chat) => (
                      <div key={chat.id} onClick={() => setOpen(false)}>
                        <ChatItem
                          file_id={chat.file_id}
                          id={chat.id}
                          isActive={pathname === `/chat/${chat.id}`}
                          title={chat.title}
                          onDelete={handleDeleteChat}
                        />
                      </div>
                    ))}
                  </SidebarMenu>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
                    <MessageSquare className="h-8 w-8 mb-2 opacity-50" />
                    <p>Henüz sohbet bulunmuyor.</p>
                  </div>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
