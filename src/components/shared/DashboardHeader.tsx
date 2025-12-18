"use client";

import {FileText, LogOut, Settings, Target, User} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {clearAuthTokens} from "@/features/auth";
import {AuthAPI} from "@/features/auth/api";
import {useChats, useDeleteChat} from "@/features/chat/hooks";
import {useUserDetails} from "@/features/users/hooks";

import {ChatItem} from "./ChatItem";
import Logo from "./Logo";

const menuItems = [
  {
    title: "Dosyalar",
    url: "/files",
    icon: FileText,
  },
  {
    title: "Quizler",
    url: "/quiz",
    icon: Target,
  },
];

export default function DashboardHeader() {
  const {open, state} = useSidebar();
  const pathname = usePathname();

  const {data: chats} = useChats();
  const deleteChatMutation = useDeleteChat();
  const {data: userDetails} = useUserDetails();

  const handleDeleteChat = async (chatId: string) => {
    await deleteChatMutation.mutateAsync(chatId);
  };

  const handleLogout = async () => {
    await AuthAPI.logout();
    clearAuthTokens();
    window.location.href = "/login";
  };

  // Check if a menu item is active
  const isActive = (url: string) => {
    return pathname === url || pathname.startsWith(url + "/");
  };

  const settingsItems = [
    {
      title: "Ayarlar",
      url: "/settings",
      icon: Settings,
    },
  ];

  return (
    <Sidebar className="border-r group" collapsible="icon">
      <SidebarHeader className="p-3 pt-4 flex flex-row items-center justify-between">
        <Link className="flex items-center space-x-2" href="/files">
          <Logo size={28} />
          {open && (
            <span className="text-xl font-bold">
              Med<span className="text-primary">AI</span>st
            </span>
          )}
        </Link>

        <SidebarTrigger
          className={open ? "" : "absolute top-4 left-[8px] hidden group-hover:flex"}
        />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Ana Menü</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Diğer</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.url ? (
                    <SidebarMenuButton asChild isActive={isActive(item.url)}>
                      <Link href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  ) : (
                    <SidebarMenuButton>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {chats && chats.length > 0 && state === "expanded" && (
          <SidebarGroup>
            <SidebarGroupLabel className="mt-auto">Sohbetler</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {chats?.map((chat) => (
                  <ChatItem
                    key={chat.id}
                    file_id={chat.file_id}
                    id={chat.id}
                    isActive={pathname === `/chat/${chat.id}`}
                    title={chat.title}
                    onDelete={handleDeleteChat}
                  />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  className="data-[state=open]:bg-gray-100 data-[state=open]:text-sidebar-accent-foreground"
                  size={"lg"}
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage alt="User" src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="rounded-lg bg-blue-100 text-blue-600">
                      {userDetails?.username ? (
                        userDetails.username.charAt(0).toUpperCase()
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {userDetails?.username || "Kullanıcı"}
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      {userDetails?.email || "email@example.com"}
                    </span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage alt="User" src="/placeholder-avatar.jpg" />
                      <AvatarFallback className="rounded-lg bg-blue-100 text-blue-600">
                        {userDetails?.username ? (
                          userDetails.username.charAt(0).toUpperCase()
                        ) : (
                          <User className="h-4 w-4" />
                        )}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {userDetails?.username || "Kullanıcı"}
                      </span>
                      <span className="truncate text-xs text-muted-foreground">
                        {userDetails?.email || "email@example.com"}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User />
                    Profil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Settings />
                    Ayarlar
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut />
                  Çıkış Yap
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
