import {EditorState, EditorView, basicSetup } from "@codemirror/basic-setup"
import {javascript} from "@codemirror/lang-javascript"
import {oneDark} from "@codemirror/theme-one-dark"
import {defaultTabBinding} from "@codemirror/commands"
import {keymap} from "@codemirror/view"

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

document.getElementById('content').classList.add('d-none');

function install(){



  window.editor = new EditorView({
    state: EditorState.create({
      doc: document.getElementById('content').value,
      extensions: [basicSetup, javascript(), oneDark, keymap.of([defaultTabBinding]) ]
    }),
    parent: document.getElementById('editor')
  });


}

ready(install);
