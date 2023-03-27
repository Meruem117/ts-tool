import React, { useState } from 'react'
import { Editor, EditorState, convertToRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'
import { Button } from '@mui/material'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import style from './index.module.css'

const Snippet: React.FC = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    )

    const copy = (): string => {
        const { blocks } = convertToRaw(editorState.getCurrentContent())
        let body = ''
        blocks.forEach(block => {
            body += `"${regular(block.text)}",`
        })
        return body
    }

    const regular = (text: string): string => {
        let regularText = text
            .replaceAll('\\', '\\\\')
            .replaceAll('"', '\\"')
        return regularText
    }

    return (
        <div className={style.editor}>
            <Editor editorState={editorState} onChange={setEditorState} />
            <div className={style.button}>
                <CopyToClipboard text={copy()}>
                    <Button variant="outlined">Copy</Button>
                </CopyToClipboard>
            </div>
        </div>
    )
}

export default Snippet
