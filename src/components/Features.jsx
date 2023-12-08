import icon from "../images/icon-budgeting.svg"

const Features = () => {

    const Features = [
        {
            id: 1,
            title: "Online Banking",
            description: "Our modern web and mobile applications allow you to keep track of your finances whereever you are in the world.",
            icon : "../images/icon-budgeting.svg",
            
        },

        {
            id: 2,
            title: "Online Banking",
            description: "Our modern web and mobile applications allow you to keep track of your finances whereever you are in the world.",
            icon : "../images/icon-budgeting.svg",
            
        },


        {
            id: 3,
            title: "Online Banking",
            description: "Our modern web and mobile applications allow you to keep track of your finances whereever you are in the world.",
            icon : "../images/icon-budgeting.svg",
            
        },


        {
            id: 4,
            title: "Online Banking",
            description: "Our modern web and mobile applications allow you to keep track of your finances whereever you are in the world.",
            icon : "../images/icon-budgeting.svg",
            
        },
    ]



  return (
    <div className="flex flex-col w-full items-start px-32 py-14 bg-gray-100">
        <h1 className="text-4xl  my-5">Why choose Easybank?</h1>
        <p className="w-[50%] text-gray-500 my-6 mb-8">We leverage Open Banking to turn your bank account
            into your financial hub. Control your finances
            like neber before
        </p>
        <div className="flex items-center ">
          {Features.map(feature =>(
            <div key={feature.id} className=" grid-cols-1 md:grid-cols-4 flex flex-col justify-start gap-5 mr-8">
                <img src={icon} alt="icon" className="w-fit" />
                <h1>{feature.title}</h1>
                <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Features
