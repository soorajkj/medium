import { createFileRoute } from "@tanstack/react-router";
import UserProfile from "../../components/UserProfile";
import Blogs from "../../components/Blogs";

export const Route = createFileRoute("/_app/$user/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className="flex w-full mx-auto divide-x divide-neutral-100"
      style={{ maxWidth: "1336px" }}
    >
      <div className="flex-1 flex justify-center py-16">
        <Blogs />
      </div>
      <div className="w-sm">
        <div className="flex justify-center max-w-80 mx-auto py-16 sticky top-0">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}
