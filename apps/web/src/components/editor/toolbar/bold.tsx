import { useCurrentEditor } from "@tiptap/react";
import ToolbarButton from "../primitives/button";
import { Icon } from "@medium/design/components";

export default function Bold() {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  return (
    <ToolbarButton
      onClick={() => editor.chain().focus().toggleBold().run()}
      disabled={!editor.can().chain().focus().toggleBold().run()}
      aria-checked={editor.isActive("bold")}
    >
      <Icon name="Bold" />
    </ToolbarButton>
  );
}
