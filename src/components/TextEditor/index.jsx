import BlotFormatter from "quill-blot-formatter/dist/BlotFormatter";
import ImageResize from "quill-image-resize-module-react";
import ReactQuill, { Quill } from "react-quill";

Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/blotFormatter", BlotFormatter);

const toolbar = [
  [
    { font: [] },
    { header: [false, 1, 2, 3, 4, 5, 6] },
    { size: [false, "small", "large", "huge"] },
    {
      color: [
        "#212529",
        "#1A1D21",
        "#ced4da",
        "#878a99",
        "#C0C0C0",
        "#808080",
        "#000000",
        "#FFA500",
        "#A52A2A",
        "#800000",
        "#008000",
        "#808000",
        "#7FFFD4",
        "#FF0000",
        "#00FFFF",
        "#1585F6",
        "#00008B",
        "#ADD8E6",
        "#800080",
        "#FFFF00",
        "#00FF00",
        "#FF00FF",
        "#FFC0CB",
        "#040720",
      ],
    },
    {
      background: [
        "#212529",
        "#1A1D21",
        "#ced4da",
        "#878a99",
        "#C0C0C0",
        "#808080",
        "#000000",
        "#FFA500",
        "#A52A2A",
        "#800000",
        "#008000",
        "#808000",
        "#7FFFD4",
        "#FF0000",
        "#00FFFF",
        "#1585F6",
        "#00008B",
        "#ADD8E6",
        "#800080",
        "#FFFF00",
        "#00FF00",
        "#FF00FF",
        "#FFC0CB",
        "#040720",
        "#ffffff00",
      ],
    },
    "bold",
    "italic",
    "underline",
    { list: "ordered" },
    { list: "bullet" },
    { list: "check" },
    { align: [] },
    { indent: "-1" },
    { indent: "+1" },
    { lineHeight: [] },
    { script: "sub" },
    { script: "super" },
    "strike",
    "code-block",
    "link",
    "image",
  ],
];

const modules = {
  toolbar: toolbar,
  clipboard: {
    matchVisual: false,
  },
  imageResize: {
    parchment: Quill.import("parchment"),
    modules: ["Resize", "DisplaySize", "Toolbar"],
  },
  blotFormatter: {
    name: "blotFormatter",
    module: BlotFormatter,
    options: {},
  },
};

const TextEditor = ({
  content,
  onSetContent,
  readOnly = false,
  showToolbar = false,
  className,
  theme = "bubble",
}) => {
  return (
    <ReactQuill
      className={className}
      theme={theme}
      readOnly={readOnly}
      value={content}
      onChange={onSetContent}
      modules={{ ...modules, toolbar: showToolbar ? toolbar : showToolbar }}
    />
  );
};

export default TextEditor;
