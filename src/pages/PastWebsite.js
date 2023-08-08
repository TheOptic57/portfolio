
function PastWebsite() {
 
  return (
    <div className="PastWebsite p-[5%]">
      <div className="md:grid md:grid-cols-2">
        <div className="w-[85%] rounded overflow-hidden shadow-lg bg-stone-300 p-[5%] m-[5%] mx-auto">
          <h1 className="font-mono text-xl md:text-3xl text-blue-500 font-semibold">TechThinkTank - 5/2022-12/2022</h1>
          <div className="font-mono text-sm md:text-lg lg:text-xl my-[3%]">
            <span className="font-semibold">Description: </span>I partnered with the company Think Tech Tank to create a Microsoft Outlook add-on to help
            businesses block unwanted spam. This data is then sent to a social media website that my team created.
          </div>
          <ul className="list-disc list-inside font-mono text-xs md:text-base lg:text-lg">
            <li className="">Prototyped the website using Figma and created the front-end using Tailwind CSS and React.</li>
            <li className="">Helped connect the API calls between the React front-end and Amazon DynamoDB.</li>
            <li className="">Used the Apex Chart library to display all statistics from the Microsoft add-on to the website.</li>
          </ul>
        </div>
        <div className="w-[85%] rounded overflow-hidden shadow-lg bg-stone-300 p-[5%] m-[5%] mx-auto">
          <h1 className="font-mono text-xl md:text-3xl text-blue-500 font-semibold">UCF Marketplace Website - 3/2022-5/2022</h1>
          <div className="font-mono text-sm md:text-lg lg:text-xl my-[3%]">
            <span className="font-semibold">Description: </span> I created a student marketplace with buying, selling, and sorting capabilities.
          </div>
          <ul className="list-disc list-inside font-mono text-xs md:text-base lg:text-lg">
            <li className="">Ideated the concept for a website of market listings with a team.</li>
            <li className="">Helped set up the outline of the database and frontend using MERN stack.</li>
            <li className="">Created the front-end using React, Bootstrap, and CSS and helped connect the back-end of the Firebase database to the front-end when transferring from MongoDB.</li>
          </ul>
        </div>
      </div> 
    </div>
    );
  }
  
  export default PastWebsite;
  