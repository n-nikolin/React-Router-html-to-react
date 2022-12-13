import { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

export default function PostEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div>
      <h1>HALLO this is an editor thingy</h1>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
      />
     </div>
  );
}
