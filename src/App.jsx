import './App.css'
import Body from './page/Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Body />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
