import FirstComponent from './component/FirstComponent.jsx'
import SecondComponent from './component/SecondComponent.jsx'
import './App.css'
import ThirdComponent from './component/ThirdComponent.jsx'
import Navbar from './component/Navbar.jsx'
import React,{ useState } from 'react'
import Alert from './component/Alert.jsx'

function App() {

  const [colorMode, setColorMode] = React.useState('dark');
  const [alert, setAlert] = useState(null);

  const toggleColorMode = () => {
    if(colorMode === 'dark') {
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
      <Navbar colorMode={colorMode} setColorMode={setColorMode} toggleColorMode={toggleColorMode} />
      <div style={{backgroundColor: colorMode === 'dark' ? '#212529' : 'white', color: colorMode === 'dark' ? 'white' : 'black'}}>
        <Alert alert={alert}  />
        <FirstComponent name="John Doe" />
        <SecondComponent showAlert={showAlert} />
        <hr /> <br />
        <ThirdComponent />
      </div>
    </>
  )
}

export default App
