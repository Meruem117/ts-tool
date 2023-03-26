import React, { useState } from 'react'
import { Editor, EditorState, convertToRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'
import { Button } from '@mui/material'
import style from './index.module.css'

const Snippet: React.FC = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    )

    const submit = (): void => {
        let blocks = convertToRaw(editorState.getCurrentContent())
        console.log(blocks)
    }

    return (
        <div className={style.editor}>
            <Editor editorState={editorState} onChange={setEditorState} />
            <div className={style.button}>
                <Button variant="outlined" onClick={submit}>Submit</Button>
            </div>
        </div>
    )
}

export default Snippet
