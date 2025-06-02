import { FloatingMenu, useCurrentEditor } from "@tiptap/react";
import Blockquote from "./blockquote";
import Code from "./code";
import Redo from "./redo";
import Undo from "./undo";
import Heading from "./heading";
import Bold from "./bold";
import ToolbarSeparator from "../primitives/separator";
import Italic from "./italic";
import Link from "./link";

export default function EditorToolbar() {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  return (
    <FloatingMenu
      editor={editor}
      className="flex items-center bg-neutral-800 h-12 rounded-md border border-neutral-200 shadow-2xs w-full"
      shouldShow={() => !editor.isEmpty}
      tippyOptions={{ maxWidth: "auto" }}
    >
      <Undo />
      <Redo />
      <ToolbarSeparator orientation="vertical" />
      <Bold />
      <Italic />
      <Link />
      <ToolbarSeparator orientation="vertical" />
      <Heading />
      <ToolbarSeparator orientation="vertical" />
      <Code />
      <Blockquote />
    </FloatingMenu>
  );
}
