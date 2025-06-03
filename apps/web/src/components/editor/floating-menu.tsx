import {
  FloatingMenu as TiptapFloatingMenu,
  useCurrentEditor,
} from "@tiptap/react";

export default function FloatingMenu() {
  const { editor } = useCurrentEditor();

  return (
    <TiptapFloatingMenu
      editor={editor}
      tippyOptions={{ placement: "left", maxWidth: "auto" }}
      className="flex items-center bg-neutral-800 h-12 rounded-xl shadow-2xs w-full"
    >
      {null}
    </TiptapFloatingMenu>
  );
}
