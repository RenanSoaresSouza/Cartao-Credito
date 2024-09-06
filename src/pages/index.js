import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main  className="lg:w-screen lg:h-screen flex justify-center items-center ">

     <div className="flex lg:flex-row flex-col justify-between w-full h-full">
      <div className=" bg-gradient-to-tl from-purple-950 via-red-950 to-blue-950 lg:w-1/4 lg:h-full h-2/5 w-full flex lg:justify-end justify-center">
      <div className=" flex flex-col justify-evenly items-center absolute top-36 lg:top-16 lg:left-32 mr-20 bg-gradient-to-tl from-purple-700 via-red-700 to-blue-700  w-80 h-48 rounded-lg shadow-2xl">
        <div className="flex flex-row items-center w-full">
          <div className="rounded-full bg-white size-10  ml-4"></div>
          <div className="rounded-full bg-transparent border border-white size-6 m-2"></div>
        </div>
        <div className="flex justify-around mr-10 w-9/12 mt-8 text-white font-semibold text-xl"><span>0000</span><span>0000</span><span>0000</span><span>0000</span></div>
        <div className=" w-10/12 flex flex-row text-white justify-between"><span>Teste1</span><span>09/28</span></div>
      </div>
      <div className="bg-gray-300 rounded-lg w-80 h-48 ml-20 mt-8 lg:absolute lg:top-64 lg:left-32 lg:shadow-2xl flex flex-col items-center" ><div className="w-full h-8 bg-gray-800 mt-4"></div><div className="w-3/4 h-8 bg-gray-400 mt-5 rounded-lg text-white font-bold flex justify-end items-center"><span className="mr-3">000</span></div></div>
      </div>
      <div className="bg-white w-full h-full border">
        <form>
            
        </form>
      </div>
      </div>
    </main>
  );
}
