"use client";

import {Camera, User} from "lucide-react";

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

import {useProfileSettings} from "../hooks";
import {SettingsTabProps} from "../types";
import {generateAvatarFallback} from "../utils";

import {SettingInput} from "./SettingInput";

export const ProfileTab = ({className}: SettingsTabProps) => {
  const {profileSettings, updateProfile, saveProfile} = useProfileSettings();

  const handleProfileSave = async () => {
    try {
      await saveProfile();
      // Show success message
    } catch (error) {
      // Show error message
    }
  };

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
          {/* Profile Picture */}
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage
                alt="Profile"
                src={profileSettings.avatar || "/placeholder-avatar.jpg"}
              />
              <AvatarFallback className="text-lg">
                {generateAvatarFallback(profileSettings.firstName, profileSettings.lastName)}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Button className="flex items-center gap-2" variant="outline">
                <Camera size={16} />
                Fotoğraf Değiştir
              </Button>
              <p className="text-sm text-gray-500">JPG, PNG veya GIF formatında, maksimum 5MB</p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SettingInput
              required
              id="firstName"
              label="Ad"
              placeholder="Adınız"
              value={profileSettings.firstName}
              onChange={(value) => updateProfile({firstName: value})}
            />
            <SettingInput
              required
              id="lastName"
              label="Soyad"
              placeholder="Soyadınız"
              value={profileSettings.lastName}
              onChange={(value) => updateProfile({lastName: value})}
            />
            <SettingInput
              required
              id="email"
              label="E-posta"
              placeholder="ornek@email.com"
              type="email"
              value={profileSettings.email}
              onChange={(value) => updateProfile({email: value})}
            />
          </div>

          <Button className="w-full md:w-auto" onClick={handleProfileSave}>
            Profil Bilgilerini Kaydet
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
