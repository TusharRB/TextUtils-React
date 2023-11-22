// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  // Routes
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500)



  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");
      document.title = "TextUtils - Home (D Mode)"

      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      // },1000)

      // setInterval(() => {
      //   document.title = "TextUtils Now"
      // },2000)

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'Lavender';
      showAlert("Light mode has been enable", "success");
      document.title = "TextUtils - Home"
    }
  }
  return (

    <Router>
      <>

        <Navbar title="TextUtils" aboutText="aboutText" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3">

          <Switch>
            <Route exact path='/about'>
              <About />
            </Route>

            <Route exact path='/'>

              <TextForm heading="Enter to text analyze below" 
              showAlert={showAlert} mode={mode} />

            </Route>
          </Switch>


          {/* <About /> */}
        </div>

      </>
    </Router>


  );
}

export default App;
