
import { useState } from 'react/cjs/react.development';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      /*  setInterval(() => {
          document.title="TextUtils-Dark Mode";
        },1000);
        */
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      /*   setInterval(() => {
           document.title="TextUtils-Light Mode";
         },1000);
        */
    }
  }
  return (
    <>
      {/*<Navbar/>*/}
      <Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          </Route>
          </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
