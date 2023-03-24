import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import './App.css'

function App() {
    const [code, setCode] = useState<string>('')
    const [str, setStr] = useState<string>('')

    const inputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        setCode(event.target.value)
    }

    const submit = (): void => {
        console.log(code)
    }

    const convertCodeToBody = (code: string): string[] => {
        let body: string[] = []
        return body
    }

    return (
        <div className="App">
            <Box sx={{ p: 5, display: 'flex', gap: 5 }}>
                <TextField
                    id='code-text'
                    label='Code'
                    fullWidth
                    value={code}
                    inputProps={{
                        autoComplete: 'off',
                        color: 'primary',
                        onChange: inputChange
                    }}
                />
                <Button sx={{ mt: 2 }} onClick={submit}>Submit</Button>
                <TextField
                    id='str-text'
                    label='Str'
                    fullWidth
                    value={str}
                    inputProps={{
                        autoComplete: 'off',
                        color: 'primary',
                        onChange: inputChange
                    }}
                />
            </Box>
        </div>
    )
}

export default App
