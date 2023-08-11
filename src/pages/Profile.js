import Skills from "./Skills"
import Information from "./Information";
function Profile() {
  return (
    <div className="Profile">
      <div className="snap-y snap-mandatory h-screen overflow-scroll scroll-smooth">
        <div className="lg:snap-start lg:grid lg:h-screen mt-10 md:mt-10">
          <Information/>
        </div>
        <div className="h-2/3 lg:h-full">

        </div>
        <div className="lg:snap-start lg:grid lg:h-screen">
          <Skills/>
        </div>
      </div>
    </div>
  );
}
  
  export default Profile;
  