import restaurant from "../images/image-restaurant.jpg"




const Articles = () => {

    const articles= [
        {
            id: 1,
            tag: "By Claire Robinson",
            title: "Receive money in any currenxy with no fees",
            description: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."
        },

        {
            id: 2,
            tag: "By Claire Robinson",
            title: "Receive money in any currenxy with no fees",
            description: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."
        },

        {
            id: 3,
            tag: "By Claire Robinson",
            title: "Receive money in any currenxy with no fees",
            description: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."
        },

        {
            id: 4,
            tag: "By Claire Robinson",
            title: "Receive money in any currenxy with no fees",
            description: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."
        },
    ]
  return (
    <div className=" px-32 mt-20">
        <h1 className="text-3xl">Latest Articles</h1>
      <div className="flex gap-10 mt-20">
        {articles.map(article =>(
            <div key={article.id} className="space-y-4">
                <img src={restaurant} alt="" />
                <p className="text-xs">{article.tag}</p>
                <h2 className="text-s">{article.title}</h2>
                <p className="text-gray-400 text-[14px] ">{article.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Articles
