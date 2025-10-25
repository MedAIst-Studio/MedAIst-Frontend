"use client";

import {Lock} from "lucide-react";
import {useState} from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {useDeleteAccount, useUpdatePassword} from "@/features/users/hooks";

import {SettingsTabProps} from "../types";
import {validatePassword} from "../utils";

import {SettingInput} from "./SettingInput";

export const SecurityTab = ({className}: SettingsTabProps) => {
  const updatePasswordMutation = useUpdatePassword();
  const deleteAccountMutation = useDeleteAccount();

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

    await updatePasswordMutation.mutateAsync({
      oldPassword: currentPassword,
      newPassword: newPassword,
    });

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleDeleteAccount = async () => {
    await deleteAccountMutation.mutateAsync();

    window.location.href = "/login";
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
          <Button
            disabled={updatePasswordMutation.isPending}
            variant="destructive"
            onClick={handlePasswordChange}
          >
            {updatePasswordMutation.isPending ? "Değiştiriliyor..." : "Şifreyi Değiştir"}
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
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="mt-2" variant="destructive">
                  Hesabı Sil
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Hesabı silmek istediğinize emin misiniz?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Bu işlem geri alınamaz. Hesabınız, tüm verileriniz, dosyalarınız ve sohbet
                    geçmişiniz kalıcı olarak silinecektir. Bu işlem sonrasında verilerinizi geri
                    alamazsınız.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>İptal</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
                    disabled={deleteAccountMutation.isPending}
                    onClick={handleDeleteAccount}
                  >
                    {deleteAccountMutation.isPending ? "Siliniyor..." : "Evet, Hesabımı Sil"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
