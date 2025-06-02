import { useCurrentEditor } from "@tiptap/react";
import ToolbarButton from "../primitives/button";
import { Icon } from "@medium/design/components";

export default function Italic() {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  return (
    <ToolbarButton
      onClick={() => editor.chain().focus().toggleItalic().run()}
      disabled={!editor.can().chain().focus().toggleItalic().run()}
      aria-checked={editor.isActive("italic")}
    >
      <Icon name="Italic" />
    </ToolbarButton>
  );
}
