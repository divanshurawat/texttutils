import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alerts from './components/Alerts';
// import About from './components/About';
// // import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// }from "react-router-dom"

function App() {
  const[Mode, setMode]= useState('light')
  const[Alert, setAlert]= useState(null)

  const showAlert=(message, type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setAlert(null)
     }, 1000);
  }

  const toggleMode = ()=>{
    if(Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert(" Dark mode has been enabled","Success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert(" Light mode has been enabled","Success")
    }
 

  }
  return (
      <>
{/* <Router>      */}
  <Navbar title="textUtils" mode={Mode} toggleMode={toggleMode}/>
    <Alerts alert={Alert}/>
    <div className='container'>
      {/* {/* <Routes>
        // <Route path="/about" element={<About />} /> */}
        {/* // <Route path="/" element={< }> */}
{/*        */}
 
        {/* </Route>
      </Routes> */} 
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={Mode}/>   
    </div>     
{/* </Router>  */}

      </>
  );
}

export default App;
