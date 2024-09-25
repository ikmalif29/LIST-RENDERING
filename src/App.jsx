import { useState } from "react";

function App() {
  const [bgColor , setBgColor] = useState("bg-white");
  const [textColor , setTextColor] = useState("text-black");

  const fruits = [
    {
      id: 1,
      fruitName: "gedang",
      fruitsColor: "yellow",
      image: "https://asset.kompas.com/crops/C3G6Hc4CF8OfG2LJGGuqCx-SHCU=/0x86:1000x753/750x500/data/photo/2021/05/11/6099df69ead68.jpeg"
    },
    {
      id: 2,
      fruitName: "water melon",
      fruitsColor: "pink",
      image: "https://img.pikbest.com/png-images/qiantu/hand-drawn-cartoon-cute-little-crocodile_2659609.png!w700wp"
    },
    {
      id: 3,
      fruitName: "mangga",
      fruitsColor: "cokelat",
      image: "https://media.licdn.com/dms/image/C5603AQFrxultdTKixQ/profile-displayphoto-shrink_200_200/0/1638435371122?e=2147483647&v=beta&t=EfkcY8bHE_0Zj66oZVhReuW7m4pQb3yvafF4ozuzJY8"
    },
  ]

  return (
    <>
      <div className={`flex w-full justify-center h-10 items-center ${bgColor}`}>
        <button className="bg-indigo-500 rounded-xl p-1" onClick={() => {
          setBgColor(bgColor === "bg-white" ? "bg-black" : "bg-white")
          setTextColor(textColor === "text-black" ? "text-white" : "text-black")
        }}>Click Me</button>
      </div>
      <div className={`flex w-full h-screen justify-center items-center gap-11 ${bgColor}`}>
        {fruits.map((f) => (
          <div className="flex g-10 flex-col h-32 w-44 justify-center items-center" key={f.id}>
            <h1 className={`text-2xl ${textColor}`}>{f.fruitName}</h1>
            <h2 className={`text-xl ${textColor}`}>{f.fruitsColor}</h2>
            <img src={f.image} alt="" className="w-32" />
          </div>
        ))}

      </div>
    </>
  )
}

export default App;
