import './App.css'
import FirstComponent from './component/FirstComponent.jsx'
import SecondComponent from './component/SecondComponent.jsx'
import ThirdComponent from './component/ThirdComponent.jsx'
import Navbar from './component/Navbar.jsx'
import { useState } from 'react'
import Alert from './component/Alert.jsx'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import NewsClassComponent from './component/NewsClassComponent.jsx'

function App() {

  const [colorMode, setColorMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const toggleColorMode = () => {
    if (colorMode === 'dark') {
      setColorMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setColorMode('dark');
      document.body.style.backgroundColor = 'black';
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
          <Route path="/" element={<FirstComponent name="John Doe" colorMode={colorMode} />} />
          <Route exact path="/about" key="about" element={<ThirdComponent colorMode={colorMode} />} />
          <Route exact path="/email" key="email" element={<SecondComponent colorMode={colorMode} showAlert={showAlert} />} />
          <Route exact path="/news" key="news" element={<NewsClassComponent colorMode={colorMode} />} />
          <Route exact path="/pune"   key="news-pune" element={<NewsClassComponent colorMode={colorMode} city="Pune" />} />
          <Route exact path="/nashik" key="news-nashik" element={<NewsClassComponent colorMode={colorMode} city="Nashik" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
