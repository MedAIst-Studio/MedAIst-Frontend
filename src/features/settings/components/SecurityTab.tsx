"use client";

import {Lock} from "lucide-react";
import {useState} from "react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";

import {SettingsTabProps} from "../types";
import {validatePassword} from "../utils";

import {SettingInput} from "./SettingInput";

export const SecurityTab = ({className}: SettingsTabProps) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const handlePasswordChange = async () => {
    const validation = validatePassword(newPassword);

    if (!validation.isValid) {
      setPasswordErrors(validation.errors);

      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordErrors(["Şifreler eşleşmiyor"]);

      return;
    }

    setPasswordErrors([]);

    try {
      // API call to change password
      // await api.changePassword(currentPassword, newPassword);
      // Show success message
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      // Show error message
    }
  };

  const handleDeleteAccount = async () => {
    // Show confirmation dialog
    const confirmed = window.confirm(
      "Bu işlem geri alınamaz. Hesabınız ve tüm verileriniz kalıcı olarak silinecek. Devam etmek istediğinizden emin misiniz?",
    );

    if (!confirmed) return;

    try {
      // API call to delete account
      // await api.deleteAccount();
      // Redirect to login page
    } catch (error) {
      // Show error message
    }
  };

  return (
    <div className={`grid gap-6 ${className}`}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock size={20} />
            Şifre Değiştir
          </CardTitle>
          <CardDescription>Hesabınızın güvenliği için güçlü bir şifre kullanın</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SettingInput
            id="currentPassword"
            label="Mevcut Şifre"
            type="password"
            value={currentPassword}
            onChange={setCurrentPassword}
          />
          <SettingInput
            error={passwordErrors.length > 0 ? passwordErrors[0] : undefined}
            id="newPassword"
            label="Yeni Şifre"
            type="password"
            value={newPassword}
            onChange={setNewPassword}
          />
          <SettingInput
            id="confirmPassword"
            label="Yeni Şifre (Tekrar)"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
          {passwordErrors.length > 0 && (
            <div className="space-y-1">
              {passwordErrors.map((error, index) => (
                <p key={index} className="text-sm text-red-500">
                  • {error}
                </p>
              ))}
            </div>
          )}
          <Button variant="destructive" onClick={handlePasswordChange}>
            Şifreyi Değiştir
          </Button>
        </CardContent>
      </Card>

      <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
        <CardHeader>
          <CardTitle className="text-red-800 dark:text-red-200">Tehlikeli Bölge</CardTitle>
          <CardDescription className="text-red-600 dark:text-red-300">
            Bu işlemler geri alınamaz. Dikkatli olun.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-red-800 dark:text-red-200">Hesabı Sil</Label>
            <p className="text-sm text-red-600 dark:text-red-300">
              Hesabınızı ve tüm verilerinizi kalıcı olarak silin
            </p>
            <Button className="mt-2" variant="destructive" onClick={handleDeleteAccount}>
              Hesabı Sil
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
