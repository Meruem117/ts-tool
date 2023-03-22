import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import './App.css'

function App() {
    const [html, setHtml] = useState<string>('')
    // const [body, setBody] = useState<string>('')

    const inputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        setHtml(event.target.value)
    }

    const submit = (): void => {
        console.log(html)
    }

    const convertHtml = (html: string): string[] => {
        let body: string[] = []
        return body
    }

    return (
        <div className="App">
            <Box sx={{ p: 5 }}>
                <TextField
                    id='html-text'
                    label='Html'
                    fullWidth
                    value={html}
                    inputProps={{
                        autoComplete: 'off',
                        color: 'primary',
                        onChange: inputChange
                    }}
                />
                <Button sx={{ mt: 2 }} variant="outlined" onClick={submit}>Submit</Button>
            </Box>
        </div>
    )
}

export default App
