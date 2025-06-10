import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  name: string;
  email: string;
  username: string;
} | null;

interface AuthActions {
  setUser: (user: User) => void;
}

interface AuthState {
  user: User;
  actions: AuthActions;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      actions: {
        setUser: (user) => set(() => ({ user })),
      },
    }),
    { name: "auth" }
  )
);

export const useAuth = () => useAuthStore((state) => state);
