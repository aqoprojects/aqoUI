import { useState } from 'react'
import Homepage from './Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from './Designs/shared assets/Banner'
import EmailTemplate from './Designs/shared assets/EmailTemplate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>} />
        <Route path='/banners' element={<Banner/>} />
        <Route path='/email' element={<EmailTemplate/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
