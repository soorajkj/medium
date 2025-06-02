import { Bold as TiptapBold } from "@tiptap/extension-bold";

const Bold = TiptapBold.extend({
  addCommands() {
    return {
      toggleBold:
        () =>
        ({ commands, state }) => {
          const { $from } = state.selection;
          const parentNode = $from.node($from.depth);
          if (parentNode.type.name === "heading") {
            return false;
          }

          return commands.toggleMark(this.name);
        },
    };
  },
});

export default Bold;
