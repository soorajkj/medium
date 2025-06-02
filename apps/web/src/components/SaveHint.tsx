import { Icon } from "@medium/design/components";
import { Link } from "@tanstack/react-router";

export default function SaveHint() {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-normal">Reading list</h4>
      <p className="text-sm text-neutral-500 font-light">
        Click the{" "}
        <Link to="/" className="inline-flex items-center justify-center">
          <Icon name="BookmarkPlus" strokeWidth={1.5} className="size-4" />
        </Link>{" "}
        on any story to easily add it to your reading list or a custom list that
        you can share
      </p>
    </div>
  );
}
