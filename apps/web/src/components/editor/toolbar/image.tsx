import { useCurrentEditor } from "@tiptap/react";
import ToolbarButton from "../primitives/button";
import { Icon } from "@medium/design/components";

export default function Image() {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt("URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <ToolbarButton
      onClick={() => addImage()}
      aria-checked={editor.isActive("image")}
    >
      <Icon name="Image" />
    </ToolbarButton>
  );
}
