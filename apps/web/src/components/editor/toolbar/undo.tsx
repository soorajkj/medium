import { useCurrentEditor } from "@tiptap/react";
import ToolbarButton from "../primitives/button";
import { Icon } from "@medium/design/components";

export default function Undo() {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  return (
    <ToolbarButton
      onClick={() => editor.chain().focus().undo().run()}
      disabled={!editor.can().chain().focus().undo().run()}
    >
      <Icon name="Undo" />
    </ToolbarButton>
  );
}
