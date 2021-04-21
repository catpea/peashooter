import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {javascript} from "@codemirror/lang-javascript"

window.editor = new EditorView({
  state: EditorState.create({
    doc: "",
    extensions: [basicSetup, javascript()]
  }),
  parent: document.getElementById('editor')
})
