import Skills from "./Skills"
import Information from "./Information";
function Profile() {
  return (
    <div className="Profile">
      <div className="snap-y snap-mandatory h-screen overflow-scroll scroll-smooth">
        <div className="xl:snap-start xl:grid xl:h-screen mt-10 xl:mt-10">
          <Information/>
        </div>
        <div className="h-2/3 xl:h-full">

        </div>
        <div className="xl:snap-start xl:grid xl:h-screen">
          <Skills/>
        </div>
      </div>
    </div>
  );
}
  
  export default Profile;
  