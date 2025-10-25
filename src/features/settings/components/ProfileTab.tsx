"use client";

import {User} from "lucide-react";
import {useEffect, useState} from "react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {useUpdateUserDetails, useUserDetails} from "@/features/users/hooks";

import {SettingsTabProps} from "../types";

import {SettingInput} from "./SettingInput";

export const ProfileTab = ({className}: SettingsTabProps) => {
  const {data: userDetails, isLoading} = useUserDetails();
  const updateUserDetailsMutation = useUpdateUserDetails();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // Initialize form data when user details are loaded
  useEffect(() => {
    if (userDetails) {
      setUsername(userDetails.username || "");
      setEmail(userDetails.email || "");
    }
  }, [userDetails]);

  const handleProfileSave = async () => {
    if (!username.trim()) {
      return;
    }

    await updateUserDetailsMutation.mutateAsync(username.trim());
  };

  const isFormChanged = userDetails && username !== userDetails.username;
  const isSubmitDisabled =
    !username.trim() || updateUserDetailsMutation.isPending || !isFormChanged;

  if (isLoading) {
    return (
      <div className={`grid gap-6 ${className}`}>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-muted-foreground">Profil bilgileri yükleniyor...</div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={`grid gap-6 ${className}`}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User size={20} />
            Profil Bilgileri
          </CardTitle>
          <CardDescription>
            Kişisel bilgilerinizi ve profil fotoğrafınızı güncelleyin
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SettingInput
              required
              id="username"
              label="Kullanıcı Adı"
              placeholder="Kullanıcı adınız"
              value={username}
              onChange={setUsername}
            />
            <SettingInput
              disabled
              id="email"
              label="E-posta"
              placeholder="ornek@email.com"
              type="email"
              value={email}
              onChange={setEmail}
            />
          </div>

          <Button
            className="w-full md:w-auto"
            disabled={isSubmitDisabled}
            onClick={handleProfileSave}
          >
            {updateUserDetailsMutation.isPending ? "Kaydediliyor..." : "Profil Bilgilerini Kaydet"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
