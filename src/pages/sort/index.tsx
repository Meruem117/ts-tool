import React, { useState } from 'react'
import { Button } from '@mui/material'
import { Editor, EditorState, convertToRaw, Modifier } from 'draft-js'
import 'draft-js/dist/Draft.css'
import style from './index.module.css'

const Sort: React.FC = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    )

    const sort = (): void => {
        const { blocks } = convertToRaw(editorState.getCurrentContent())
        let blockList = blocks.map(block => block.text)
        let sortedList = split(blockList).sort()
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
                <Button variant="outlined" onClick={sort}>Sort</Button>
            </div>
        </>
    )
}

export default Sort
