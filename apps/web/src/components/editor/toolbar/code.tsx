import { useCurrentEditor } from "@tiptap/react";
import ToolbarButton from "../primitives/button";
import { Icon } from "@medium/design/components";

export default function Code() {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  return (
    <ToolbarButton
      onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      aria-checked={editor.isActive("codeBlock")}
    >
      <Icon name="CodeXml" />
    </ToolbarButton>
  );
}
