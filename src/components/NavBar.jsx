import Logo from "../images/logo.svg"




const NavBar = () => {
  return (
    <div className=" z-[100] w-full bg-white fixed flex py-4 px-40 shadow-lg justify-between items-center">
        <div>
            <img src={Logo} alt="logo"/>
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
      
    </div>
  )
}

export default NavBar
