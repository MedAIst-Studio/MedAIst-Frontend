import {useCallback, useState} from "react";

import {ProfileSettings} from "../types";

const initialProfileState: ProfileSettings = {
  username: "",
  email: "",
};

export const useProfileSettings = () => {
  const [profileSettings, setProfileSettings] = useState<ProfileSettings>(initialProfileState);

  const updateProfile = useCallback((updates: Partial<ProfileSettings>) => {
    setProfileSettings((prev) => ({...prev, ...updates}));
  }, []);

  const saveProfile = useCallback(async () => {
    try {
      // API call to save profile settings
      // await api.updateProfileSettings(profileSettings);
    } catch (error) {
      throw new Error("Failed to save profile settings");
    }
  }, [profileSettings]);

  return {
    profileSettings,
    updateProfile,
    saveProfile,
  };
};
