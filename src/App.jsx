import './App.css'
import FirstComponent from './component/FirstComponent.jsx'
import SecondComponent from './component/SecondComponent.jsx'
import ThirdComponent from './component/ThirdComponent.jsx'
import Navbar from './component/Navbar.jsx'
import { useState } from 'react'
import Alert from './component/Alert.jsx'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {

  const [colorMode, setColorMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const toggleColorMode = () => {
    if (colorMode === 'dark') {
      setColorMode('light');
    } else {
      setColorMode('dark');
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <HashRouter>
        <Navbar colorMode={colorMode} toggleColorMode={toggleColorMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<FirstComponent name="John Doe" />} />
          <Route path="/about" element={<ThirdComponent />} />
          <Route path="/email" element={<SecondComponent showAlert={showAlert} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
