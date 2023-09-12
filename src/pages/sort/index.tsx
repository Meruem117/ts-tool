import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Button } from '@mui/material'
import { Editor, EditorState, convertToRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'
import style from './index.module.css'

const Sort: React.FC = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    )

    const copy = (): string => {
        const { blocks } = convertToRaw(editorState.getCurrentContent())
        let body = ''
        let blockList = blocks.map(block => block.text)
        console.log(split(blockList).sort())
        return body
    }

    const split = (list: string[]): string[] => {
        let newList: string[] = []
        list.forEach(item => {
            if (item) {
                let arr = item.split(' ').slice(1)
                newList.push(arr.join(' '))
            }
        })
        return newList
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

export default Sort
