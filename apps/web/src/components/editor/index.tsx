import Placeholder from "@tiptap/extension-placeholder";
import {
  EditorContent,
  EditorContext,
  ReactNodeViewRenderer,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapLink from "@tiptap/extension-link";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Image from "@tiptap/extension-image";

import { all, createLowlight } from "lowlight";
import Bold from "./extensions/bold";
import CodeBlock from "./components/code-block";
import FloatingMenu from "./floating-menu";
import BubbleMenu from "./bubble-menu";

const lowlight = createLowlight(all);

export default function Editor() {
  const editor = useEditor({
    content: null,
    autofocus: true,
    editorProps: {},
    editable: true,
    extensions: [
      StarterKit.configure({ bold: false, codeBlock: false }),
      Bold,
      Image,
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
      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(CodeBlock);
        },
      }).configure({
        lowlight,
      }),
    ],
    onCreate: () => {
      if (!editor) return;
      editor.commands.setHeading({ level: 1 });
    },
  });

  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
      <EditorContext.Provider value={{ editor }}>
        <BubbleMenu />
        <FloatingMenu />
        <EditorContent
          editor={editor}
          role="presentation"
          className="md-editor *:focus-visible:outline-none p-6"
        />
      </EditorContext.Provider>
    </div>
  );
}
