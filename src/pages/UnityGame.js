import UnityImages from "./UnityImages";
function UnityGame() {
 
    return (
      <div className="UnityGame pt-20 h-screen">
        <div className=" md:grid grid-cols-2 h-full md:flex md:items-center md:justify-center ">
          <div className="pl-[5%]">
            <h1 className = "font-mono text-lg md:text-2xl lg:text-4xl font-bold text-blue-600 pb-[5%]">Determination Destination</h1>
            <p className="font-mono text-base md:text-lg lg:text-2xl font-medium pb-[5%]">
            Determination Destination is a space-themed puzzle mining game. <br/> <br/>
            Determination is a rover whose ship crashed and landed on an alien planet. 
            Determination meets good aliens that will offer help and bad aliens that want to kill them. 
            They must use their digging abilities to find parts, repair their ship, and return home. <br/> <br/>
            This game is composed of unique mining mechanics, NPC dialogue, custom cutscenes, an item management system, and different endings depending on the player's choices.
            </p>
            <a href = "https://optic57.itch.io/determinationdestination" className = "text-lg mx-auto font-semibold md:text-xl lg:text-2xl text-white rounded-full bg-blue-500 w-[50%] flex items-center justify-center shadow-md hover:scale-110 duration-300 md:w-[40%] lg:w-[30%]">
              Try it out
            </a>
            
          </div>
          <div className="p-[5%]">
            <UnityImages/>
          </div>
        </div>
      </div>
    );
  }
  
  export default UnityGame;
  