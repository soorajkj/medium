import { useCurrentEditor } from "@tiptap/react";
import ToolbarButton from "../primitives/button";
import { Icon, type IconTypes } from "@medium/design/components";

const levels: Array<1 | 2 | 3 | 4 | 5 | 6> = [1, 2, 3, 4, 5, 6];

const icons: Record<number, IconTypes> = {
  1: "Heading1",
  2: "Heading2",
  3: "Heading3",
  4: "Heading4",
  5: "Heading5",
  6: "Heading6",
};

export default function Heading() {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  return (
    <div className="flex items-center gap-px">
      {levels.map((level) => (
        <ToolbarButton
          key={level}
          onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
          aria-checked={editor.isActive("heading", { level })}
        >
          <Icon name={icons[level]} />
        </ToolbarButton>
      ))}
    </div>
  );
}
