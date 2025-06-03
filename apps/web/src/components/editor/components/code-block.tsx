import {
  NodeViewContent,
  NodeViewWrapper,
  type NodeViewProps,
} from "@tiptap/react";
import React from "react";

const CodeBlockComponent: React.FC<NodeViewProps> = ({
  node: {
    attrs: { language: defaultLanguage },
  },
  updateAttributes,
  extension,
}) => {
  return (
    <NodeViewWrapper className="relative">
      <select
        contentEditable={false}
        defaultValue={defaultLanguage}
        onChange={(event) => updateAttributes({ language: event.target.value })}
      >
        <option value="null">auto</option>
        <option disabled>—</option>
        {extension.options.lowlight
          .listLanguages()
          .map((lang: string, index: number) => (
            <option key={index} value={lang}>
              {lang}
            </option>
          ))}
      </select>
      <pre>
        <NodeViewContent as="code" />
      </pre>
    </NodeViewWrapper>
  );
};

export default CodeBlockComponent;
