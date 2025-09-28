export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface AppSettings {
  notifications: boolean;
  darkMode: boolean;
  autoUpdate: boolean;
}

export type NavigationScreens = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};