
import Html from "../images/HTML5_logo_and_wordmark.png"
import Css from "../images/CSS3_logo_and_wordmark.png"
import Javascript from "../images/JavaScript-logo.png"
import Reactlogo from "../images/React-icon.png"
import Nodelogo from "../images/node-js-icon.png"
import Figma from "../images/1667px-Figma-logo.png"
import Github from "../images/GitHub_Invertocat_Logo.png"
import Tailwind from "../images/tailwind.png"
function Skills() {
  return (
    <div className="Skills h-screen">
      <h1 className = "font-mono text-2xl lg:text-4xl font-semibold text-blue-600 pl-8 pt-[5%]">
        Some Skills I have
      </h1>
      <div className = "flex justify-evenly">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center py-8 w-[90%] pt-[5%]">
          <div className="shadow-md hover:scale-110 duration-300 ">
            <img src ={Html} className = "w-40 mx-auto object-contain h-40" alt = "Html logo"></img>
            <p className = "font-mono">Html</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-300 ">
            <img src ={Css} className = "w-40 mx-auto object-contain h-40" alt = "Css logo"></img>
            <p className = "font-mono">Css</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-300 ">
            <img src ={Javascript} className = "w-40 mx-auto object-contain h-40" alt = "Javascript logo"></img>
            <p className = "font-mono">Javascript</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-300 ">
            <img src ={Reactlogo} className = "w-40 mx-auto object-contain h-40" alt = "React.js logo"></img>
            <p className = "font-mono">React.js</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-300 ">
            <img src ={Nodelogo} className = "w-40 mx-auto object-contain h-40" alt = "Node.js logo"></img>
            <p className = "font-mono">Node.js</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-300 ">
            <img src ={Figma} className = "w-40 mx-auto object-contain h-40" alt = "Figma logo"></img>
            <p className = "font-mono">Figma</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-300 ">
            <img src ={Github} className = "w-40 mx-auto object-contain h-40" alt = "Github logo"></img>
            <p className = "font-mono">Github</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-300 ">
            <img src ={Tailwind} className = "w-50 mx-auto object-cover h-40 " alt = "Tailwind logo"></img>
            <p className = "font-mono">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
}
  
  export default Skills;
  