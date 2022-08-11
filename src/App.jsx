import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Listener from './pages/listener'
import Trigger from './pages/trigger'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {/* The rest of your app goes here */}
        <Routes>
          <Route path='/' element={<Listener />} />
          <Route path='/listener' element={<Listener />} />
          <Route path='/Trigger' element={<Trigger />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
