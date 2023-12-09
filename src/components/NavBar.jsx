import Logo from "../images/logo.svg";

const NavBar = () => {
  return (
    <>
    <div className=" z-[1000] w-full fixed flex py-4 px-40 shadow-lg justify-between items-center">
      <div>
        <img src={Logo} alt="logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex items-start gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>

      <div>
        <button className="bg-gradient-to-r from-LimeGreen to-BrightCyan font-bold py-2 px-4 text-white rounded-full">
          Request Invite
        </button>
      </div>

      <div className="bg-gradient-to-b from-black/80 h-screen w-full z-1 top-0 left-0 fixed  md:hidden">
     
      </div>

      <div className= "absolute top-[100%] left-[50%] flex flex-col items-center  justify-center mt-6 bg-white text-black px-20 md:hidden">
      <ul className=" items-center flex flex-col gap-6 ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
    </div> 

    </div>

   

    </>
  );
};

export default NavBar;
