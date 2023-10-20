import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './pages/ScrollToTop'

const App = () => {
  return (<>
    <BrowserRouter>
      <ScrollToTop>

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>


      </ScrollToTop>
    </BrowserRouter>
  </>
  )
}

export default App