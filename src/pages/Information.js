import pict1 from "../images/pict1edit.PNG"
import pict2 from "../images/pict2edit.PNG"
import pict3 from "../images/pict3.PNG"
function Information() {
  return (
    <div className="Information px-[5%] bg-grey font-mono md:grid md:grid-cols-9 md:pt-14">
        <div className = "text-left md:col-span-4 flex flex-col flex justify-center"> 
        <h1 className = "font-mono text-lg md:text-2xl lg:text-5xl font-bold text-blue-600">About me</h1>
          <p className = "pt-[3%] text-xs md:text-xl lg:text-2xl font-medium">
            I graduated from Univeristy of Central Florida with a B.S. in Computer Science degree with a 3.75 GPA.
            <br/> <br/>
            I am mostly skilled in frontend development with some knowledge in backend development. 
            I enjoy going through the development cycle because it gives me a feeling of accomplishment and pride 
            when I see progress being made while also being able to reflect on how much I have learned.
            <br/> <br/>
            I pride myself in being a fast learner, and I am willing to try new things when developing.
          </p>
        </div>
        <div className="col-span-0 md:col-span-1">

        </div>
        <div className="relative md:col-span-4"> 
          <div className="md:scale-75">
            <img src = {pict1} alt = "First prototype of a website" className="absolute hover:scale-100  translate-y-[25%] -rotate-12 hover:z-30 duration-300 hover:rotate-0"></img>
            <img src = {pict2} alt = "Second prototype of a website" className="absolute inset-x-0 translate-y-[70%] top-0 rotate-12 z-10 hover:scale-100 hover:z-30 duration-300 hover:rotate-0 -translate-x-[15%]"></img>
            <img src = {pict3} alt = "Third prototype of a website" className="absolute inset-x-0 translate-y-[100%] top-0 -rotate-12 z-20 hover:scale-100 hover:z-30 duration-300 hover:rotate-0"></img>
          </div>
        </div>
    </div>
  );
}
  
  export default Information;
  