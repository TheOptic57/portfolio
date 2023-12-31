import {Link, Route, Routes} from "react-router-dom" 
import { useState } from 'react';
import Home from "./pages/Home.js"
import Words from "./pages/Words.js"
import Profile from "./pages/Profile.js"
//import PastWeb from "./pages/PastWebsite.js"
import UnityGame from "./pages/UnityGame.js"
import Dictionary from "./pages/Dict.js"
import NotFound from "./pages/NotFound.js"
import Resume from "./pdf/resume.pdf"
import "./css/App.css"


function App() {
  //used to change css
  const [style, setStyle] = useState("DropdownContentHidden");

  //onclick event to determine wheter to hide or display dropdown content
  const changeStyle = () => {
    if(style === "DropdownContentHidden") {
      setStyle("DropdownContent");
    }
    else {
      setStyle("DropdownContentHidden");
    }
  };

  //Hides DropdownContent when clicking on other links
  const HiddenContent = () => {
    setStyle("DropdownContentHidden");
  };

  return (
    <div className = "App">
      <div className = "NavBar font-semibold">
        <Link to ="/" className = "Blue"  onClick={HiddenContent}>Home</Link>
        <Link to ="/profile" onClick={HiddenContent}>About Me</Link>
        <a href = {Resume} target = "_blank" rel="noreferrer">Resume</a>
        <div className = "DropDown">
          <div className = "HoverDrop" onClick={changeStyle}>
            Projects
          </div>
          <div className={style} onClick={changeStyle}>
              <Link to ="/words">Word Game</Link>
              <Link to ="/dictionary">Dictionary</Link>
              <Link to ="/unity">Unity Game</Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/words" element = {<Words/>} />
        <Route path = "/profile" element = {<Profile/>} />
        <Route path = "/unity" element = {<UnityGame/>} />
        <Route path = "/dictionary" element = {<Dictionary/>} />
      </Routes>
    </div>
  );
}

export default App;
