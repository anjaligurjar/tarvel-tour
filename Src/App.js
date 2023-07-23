import React from "react";
import "./Css/App.css";
import { Router} from "react-router-dom";
import Navbarmenu from "./Components/Navbarmenu";
import Headers from "./Components/Headers";

function App (){
    return (
      <div className="App">
       <Headers />
     
        <Navbarmenu />
        
      </div>
    );
  }


export default App;
