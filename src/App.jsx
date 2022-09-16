import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, Videodetail, Channeldetail, Searchfeed } from './components'

const App = () => {
    return (
        <Router>
            <Box sx={{ backgroundColor: '#202020' }}>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Feed />} />
                    <Route exact path='/video/:id' element={<Videodetail />} />
                    <Route exact path='/channel/:id' element={<Channeldetail />} />
                    <Route exact path='/search/:searchterm' element={<Searchfeed />} />
                </Routes>
            </Box>
        </Router>
    )
}

export default App