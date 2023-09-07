//https://www.npmjs.com/package/react-type-animation
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import {Link} from "react-router-dom" 
import profile from "../images/profilepic.jpg"
function Home() {
  const [textColor, setTextColor] = useState('text-amber-400 inline');
  /*
  'text-amber-400 inline', JavaScript
  'text-orange-500 inline', HTML
  'text-blue-500 inline', CSS
  'text-red-500 inline', Java
  'text-indigo-500 inline', C
  'text-sky-500 inline', C++
  'text-purple-500 inline', C#
  'text-green-500 inline' Python
  */
  return (
    <div className="Home">
      <div className= "grid md:grid-cols-5 gap-2 bg-grey h-screen w-full pt-[5%]">
        <div className="font-mono text-xl md:text-3xl lg:text-5xl font-semibold pl-16 pt-16 height-full md:col-span-3">
          <h1>Hi there, <br/>
          My name is Caleb Zhou <br/>
          Welcome to my website <br/>
          I am skilled in&nbsp;
            <div className = {textColor}>
              <TypeAnimation
                sequence={[
                'JavaScript', // Types 'One'
                1500, // Waits 1s
                () => setTextColor("text-orange-500 inline"),
                'HTML', 
                1500,
                () => setTextColor("text-blue-500 inline"), 
                'CSS', 
                1500,
                () => setTextColor("text-red-500 inline"),
                'Java', 
                1500,
                () => setTextColor("text-indigo-500 inline"),
                'C', 
                1500,
                () => setTextColor("text-sky-500 inline"),
                'C++', 
                1500,
                () => setTextColor("text-purple-500 inline"),
                'C#', 
                1500,
                () => setTextColor("text-green-500 inline"),
                'Python', 
                1500,
                () => setTextColor("text-amber-400 inline")
                ]}
                deletionSpeed={25}
                speed={50}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{display: 'inline-block' }}
                />
              </div>
            </h1>
          <div className="font-mono text-base md:text-xl lg:text-2xl pt-8 max-w-[80%] space-y-8">
            <h1>I am a hardworking computer science graduate with strong coding, design, and full-stack development skills.
            Currently searching for in-person or remote positions and open to relocation.
            </h1>
            <Link to ="/profile" className = "text-lg md:text-xl lg:text-2xl text-white rounded-full bg-blue-500 w-[75%] flex items-center justify-center shadow-md hover:scale-110 duration-300 md:w-[40%] lg:w-[30%]">About me</Link>

          </div>
        </div>
        <div className = "pt-16 md:col-span-2">
          <img src={profile} alt="Profile Pic" className = "rounded-full  mx-auto w-2/3 pb-2/3"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
