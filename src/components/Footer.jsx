import Logo from "../images/logo.svg";

const Footer = () => {
  return (
    <div className="bg-DarkBlue  py-10 h-[200px] px-32 text-gray-300 mt-24 w-full flex justify-between">
   
        <div className="flex gap-5">
          <div>
            <img src={Logo} className="text-white" alt="logo" />
          </div>

          <ul className="grid grid-cols-2 gap-5 text-sm">
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>


      <div>
        <button className="bg-gradient-to-r from-LimeGreen to-BrightCyan font-bold py-2 px-4 text-white rounded-full">
          Request Invite
        </button>
        <p className="text-sm mt-5">EasyBank. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
