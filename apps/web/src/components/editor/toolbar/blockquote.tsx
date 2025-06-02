import { useCurrentEditor } from "@tiptap/react";
import ToolbarButton from "../primitives/button";
import { Icon } from "@medium/design/components";

export default function Blockquote() {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  return (
    <ToolbarButton
      onClick={() => editor.chain().focus().toggleBlockquote().run()}
      aria-checked={editor.isActive("blockquote")}
    >
      <Icon name="Quote" />
    </ToolbarButton>
  );
}
