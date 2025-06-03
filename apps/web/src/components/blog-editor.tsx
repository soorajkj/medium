import Editor from "./editor";
import PublishBlogForm from "./publish-blog-form";

export default function BlogEditor() {
  return (
    <div
      className="flex w-full mx-auto divide-x divide-neutral-100"
      style={{ maxWidth: "1336px" }}
    >
      <div className="flex-1 flex justify-center">
        <Editor />
      </div>
      <div className="w-sm">
        <div className="flex justify-center max-w-80 mx-auto py-16 sticky top-0">
          <PublishBlogForm />
        </div>
      </div>
    </div>
  );
}
