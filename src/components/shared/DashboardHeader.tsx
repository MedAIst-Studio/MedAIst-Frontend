"use client";

import {Brain, Bug, FileText, LogOut, Settings, Target, User} from "lucide-react";
import Link from "next/link";
import {useState} from "react";

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
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
import {cn} from "@/lib/utils";

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
  const {open} = useSidebar();
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const handleLogout = () => {
    // Logout işlemi
    alert("Çıkış yapılıyor...");
  };

  const handleFeedback = () => {
    setFeedbackOpen(true);
  };

  const settingsItems = [
    {
      title: "Ayarlar",
      url: "/settings",
      icon: Settings,
    },
    {
      title: "Geri Bildirim",
      icon: Bug,
      onClick: handleFeedback,
    },
  ];

  return (
    <Sidebar className="border-r group" collapsible="icon">
      <SidebarHeader className="p-4 flex flex-row items-center justify-between">
        <Link className="flex items-center space-x-2" href="/dashboard">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg bg-primary",
              !open && "absolute top-4 left-[8px]",
            )}
          >
            <Brain className="h-5 w-5 text-white" />
          </div>
          {open && (
            <span className="text-xl font-bold">
              Med<span className="text-blue-600">AI</span>st
            </span>
          )}
        </Link>

        <SidebarTrigger
          className={open ? "" : "absolute top-4 left-[8px] hidden group-hover:flex"}
        />

        {!open && <div className="h-6" />}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Ana Menü</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
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
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  ) : (
                    <SidebarMenuButton onClick={item.onClick}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
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
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Ömer Faruk</span>
                    <span className="truncate text-xs text-muted-foreground">
                      omerfaruk@example.com
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
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">Ömer Faruk</span>
                      <span className="truncate text-xs text-muted-foreground">
                        omerfaruk@example.com
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    Profil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Ayarlar
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Çıkış Yap
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      {/* Feedback Dialog */}
      <Dialog open={feedbackOpen} onOpenChange={setFeedbackOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Geri Bildirim</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground mb-4">
              Görüşleriniz bizim için çok değerli! Yakında detaylı bir geri bildirim formu
              eklenecek.
            </p>
            <div className="space-y-2">
              <p className="text-sm">📧 E-posta: feedback@medaist.com</p>
              <p className="text-sm">💬 Discord: MedAIst Community</p>
              <p className="text-sm">🐦 Twitter: @MedAIst</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Sidebar>
  );
}
