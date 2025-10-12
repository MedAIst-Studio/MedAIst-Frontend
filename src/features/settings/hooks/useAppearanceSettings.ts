import {useCallback, useState} from "react";

import {AppearanceSettings} from "../types";

const initialAppearanceState: AppearanceSettings = {
  darkMode: false,
};

export const useAppearanceSettings = () => {
  const [settings, setSettings] = useState<AppearanceSettings>(initialAppearanceState);

  const updateDarkMode = useCallback((darkMode: boolean) => {
    setSettings((prev) => ({...prev, darkMode}));
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  return {
    settings,
    updateDarkMode,
  };
};
