import React, { useState } from 'react'
import { Editor, EditorState } from 'draft-js'
import 'draft-js/dist/Draft.css'
import style from './index.module.css'

const Snippet: React.FC = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    )

    return (
        <div className={style.editor}>
            <Editor editorState={editorState} onChange={setEditorState} />
        </div>
    )
}

export default Snippet
