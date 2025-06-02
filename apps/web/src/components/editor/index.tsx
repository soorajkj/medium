import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, EditorContext, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapLink from "@tiptap/extension-link";
import EditorToolbar from "./toolbar";
import Bold from "./extensions/bold";

export default function Editor() {
  const editor = useEditor({
    content: null,
    autofocus: true,
    editorProps: {},
    editable: true,
    extensions: [
      StarterKit.configure({ bold: false }),
      Bold,
      TiptapLink.configure({
        linkOnPaste: true,
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https"],
      }),
      Placeholder.configure({
        placeholder: "Write your story....",
        emptyNodeClass: "md-editor__placeholder",
      }),
    ],
  });

  return (
    <div className="flex flex-col my-4 gap-4 w-full max-w-3xl mx-auto">
      <EditorContext.Provider value={{ editor }}>
        <EditorToolbar />
        <EditorContent
          editor={editor}
          role="presentation"
          className="md-editor *:focus-visible:outline-none p-6"
        />
      </EditorContext.Provider>
    </div>
  );
}
