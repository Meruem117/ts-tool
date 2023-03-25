import React, { useState } from 'react'
import Snippet from './pages/snippet'
import './App.css'

function App(): React.ReactElement {
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
            <Snippet />
        </div>
    )
}

export default App
