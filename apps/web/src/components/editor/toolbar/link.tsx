import { useCurrentEditor } from "@tiptap/react";
import ToolbarButton from "../primitives/button";
import { Icon } from "@medium/design/components";

export default function Link() {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  return (
    <ToolbarButton
      onClick={() =>
        editor
          .chain()
          .focus()
          //   .extendMarkRange("link")
          .setLink({ href: "https://medium.com/p/162601de38bf/edit" })
          .run()
      }
      disabled={!editor.can().chain().focus().toggleItalic().run()}
      aria-checked={editor.isActive("link")}
    >
      <Icon name="Unlink" />
    </ToolbarButton>
  );
}
