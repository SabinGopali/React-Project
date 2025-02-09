
import Navbar from "./component/Navbar";
import About from "./component/About";
import Homepage from "./component/Homepage";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./component/Alert";
import Fetching from "./component/Fetching";
import Secondapi from "./component/Secondapi";
import Crud from "./component/Crud";
 function App() {


  const [mode, setMode] = useState({
     color:'black',
        backgroundColor:'white'
  })

  const [alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
  })

  setTimeout(() => {
    setAlert(null)
  }, 1500);

  }
  const toggle=()=>{
         
    if(mode.color === 'black'){
        setMode(
            {
                color:'white',
                backgroundColor:'black'
            })
            document.body.style.backgroundColor = "black"
            showAlert("Dark mode enabled","Success")
          }
    else{
        setMode({
            color:'black',
            backgroundColor:'white'
        })
        document.body.style.backgroundColor = "white"
        showAlert("Dark mode disabled","Success")
      }
}
function toggleblue(){
         
  if(mode.color === 'black'){
      setMode(
          {
              color:'white',
              backgroundColor:'cyan'
              
          })
          document.body.style.backgroundColor = "cyan"
          showAlert("Blue mode enabled","Success")
        }
          
  else{
      setMode({
          color:'black',
          backgroundColor:'white'
      })
      document.body.style.backgroundColor = "white"
      showAlert("Blue mode disabled","Success")
    }
      
}


  return (
      <>
        
        <Router>
        <Navbar title="Project" about ="About Us" mode={mode} toggle={toggle} toggleblue={toggleblue}/>
              <Alert alert = {alert}/>
            <Routes>
            <Route path="/Homepage" element={<Homepage mode = {mode} />} />
            <Route path="/"  element={<About mode={mode} showAlert={showAlert}  />} />
            <Route path="/Fetching"  element={<Fetching mode={mode}/>} />
            <Route path="/Secondapi"  element={<Secondapi mode={mode}/>} />
            <Route path="/Crud"  element={<Crud mode={mode}/>} />
            </Routes>
          
        </Router>
        
       </>
  
  )
}

export default App;