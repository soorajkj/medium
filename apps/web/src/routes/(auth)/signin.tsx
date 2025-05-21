import { createFileRoute } from "@tanstack/react-router";
import SigninForm from "../../components/SigninForm";

export const Route = createFileRoute("/(auth)/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="max-w-md w-full flex flex-col items-center gap-6">
      <h2 className="text-3xl">Welcome back</h2>
      <SigninForm />
    </div>
  );
}
