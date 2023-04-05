import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box, Link } from '@mui/material'

const Snippet = lazy(() => import('./pages/snippet'))

function App(): React.ReactElement {
    return (
        <Box sx={{
            padding: '30px 50px',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <Box sx={{
                width: '12%',
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px dashed gray'
            }}>
                <Link href='snippet'>snippet</Link>
            </Box>
            <Box sx={{
                width: '85%'
            }}>
                <Routes>
                    <Route path="snippet" element={<Snippet />} />
                </Routes>
            </Box>
        </Box>
    )
}

export default App
