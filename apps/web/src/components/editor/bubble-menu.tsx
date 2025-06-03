import {
  BubbleMenu as TiptapBubbleMenu,
  useCurrentEditor,
} from "@tiptap/react";
import Undo from "./toolbar/undo";
import Redo from "./toolbar/redo";
import ToolbarSeparator from "./primitives/separator";
import Bold from "./toolbar/bold";
import Italic from "./toolbar/italic";
import Heading from "./toolbar/heading";
import Code from "./toolbar/code";
import Blockquote from "./toolbar/blockquote";

export default function BubbleMenu() {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  return (
    <TiptapBubbleMenu
      editor={editor}
      className="flex items-center bg-neutral-800 h-12 rounded-xl shadow-2xs w-full"
      tippyOptions={{ maxWidth: "auto" }}
    >
      <Undo />
      <Redo />
      <ToolbarSeparator orientation="vertical" />
      <Bold />
      <Italic />
      <ToolbarSeparator orientation="vertical" />
      <Heading />
      <ToolbarSeparator orientation="vertical" />
      <Code />
      <Blockquote />
    </TiptapBubbleMenu>
  );
}
