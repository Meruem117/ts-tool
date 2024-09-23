import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Button } from '@mui/material'
import { Editor, EditorState, convertToRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'
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
            .replaceAll('$', '\\\\$')
        return regularText
    }

    return (
        <>
            <div className={style.editor}>
                <Editor editorState={editorState} onChange={setEditorState} />
            </div>
            <div className={style.button}>
                <CopyToClipboard text={copy()}>
                    <Button variant="outlined">Copy</Button>
                </CopyToClipboard>
            </div>
        </>
    )
}

export default Snippet
