import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'MidnightBlue'
      document.title = 'TextUtils - DarkMode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.title = 'TextUtils - LightMode'
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3' >
      
      <Routes>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading="Enter the text to analyze" mode={mode} />
          </Route> */}
          <Route path="About"  element={<About/>}/>
          <Route path="/" element={<TextForm heading="TextUtils- Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>}/>

      </Routes>
        {/* <TextForm heading="Enter the text to analyze" mode={mode}/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
