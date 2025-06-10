import { RouterProvider } from "@tanstack/react-router";
import { useAuth } from "./store/auth";
import { router } from "./main";

export function App() {
  const auth = useAuth();

  return <RouterProvider router={router} context={{ auth }} />;
}
