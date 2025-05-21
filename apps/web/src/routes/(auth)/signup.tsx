import { createFileRoute } from "@tanstack/react-router";
import SignupForm from "../../components/SignupForm";

export const Route = createFileRoute("/(auth)/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="max-w-md w-full flex flex-col items-center gap-6">
      <h2 className="text-3xl">Sign up with email</h2>
      <SignupForm />
    </div>
  );
}
