import phone from "../images/image-mockups.png"
import desktop from "../images/bg.svg"
import mobile from "../images/bg-intro-mobile.svg"

const Header = () => {
  return (
    <div className="flex relative justify-between items-center z-[-90px] pl-32 overflow-x-clip ">
        <div className="basis-[40%]  flex flex-col items-start gap-6">
            <h1 className="text-[50px] leading-tight">Next Generation digital banking</h1>
            <p className="text-gray-300 text-[19px]"> Take your financial life online, your Easybank account
                will be a one-stop-shop for spending, saving, buggeting,
                investing, and much more.
            </p>
            <button className="bg-gradient-to-r from-LimeGreen to-BrightCyan font-bold py-2 px-4 text-white rounded-full">
                Request Invite
            </button>
        </div>

        <div className="relative basis-[70%] mr-[-140px] mt-[-1%]">
            <img src={desktop} alt="desktop" className="mr-[-900px]"/>
            <img src={phone} alt="phone" className="absolute top-0 w-[80%] right-0 "/>
            <img src={mobile} alt="mobile" className="hidden "/>

        </div>
      
    </div>
  )
}

export default Header
