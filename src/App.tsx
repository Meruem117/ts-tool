import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const Snippet = lazy(() => import('./pages/snippet'))

function App(): React.ReactElement {
    return (
        <div className="App">
            <Routes>
                <Route path="snippet" element={<Snippet />} />
            </Routes>
        </div>
    )
}

export default App
