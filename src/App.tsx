import React, { useState, useRef } from 'react'
import { Box, Button } from '@mui/material'
import { Editor, EditorState } from 'draft-js'
import "draft-js/dist/Draft.css"
import './App.css'

function App() {
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    )
    const [code, setCode] = useState<string>('')
    const [str, setStr] = useState<string>('')

    const submit = (): void => {
        console.log(code)
        console.log(str)
    }

    const convertCodeToBody = (code: string): string[] => {
        let body: string[] = []
        return body
    }

    return (
        <div className="App">
            <Box sx={{ p: 5, display: 'flex', gap: 5 }}>
                <Editor editorState={editorState} onChange={setEditorState} />
                <Button sx={{ mt: 2 }} onClick={submit}>Submit</Button>
            </Box>
        </div>
    )
}

export default App
