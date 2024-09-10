import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Form from './components/formulario';
import { useState } from "react";
import Finalizado from './components/Finalizado';
import { FaCheck } from "react-icons/fa";

export default function Home() {
  const [nome,setNome] = useState('');
  const [dia,setDia] = useState('');
  const [mes,setMes] = useState('');
  const [cart,setCart] = useState('');
  const [cod,setCod] = useState('');
  const [showcart,setmoscart] = useState('');
  const [verify,setVerify] = useState("bg-white transition-all duration-300 ease-in-out absolute top-1 right-1 m-8 w-0 invisible p-5 border-t-4 shadow-md lg:shadow-gray-300 shadow-gray-800 border-red-500 rounded-sm ");
  const [redirect,setRedirect] = useState(false)

  function Send(e){
    e.preventDefault();
    let form = [nome,cart,dia,mes,cod]

    if (cart.length < 16 || cod.length < 3){
      setVerify("bg-white transition-all visible duration-300 ease-in-out absolute top-1 right-1 m-8 w-80 p-5 border-t-4 shadow-md lg:shadow-gray-300 shadow-gray-800 border-red-500 rounded-sm flex flex-row justify-between")
    }
    else if (nome.length !== 0 && dia.length !== 0 && mes.length !== 0 ) {
      setRedirect(true)

    }
  }


  return (
    <main  className=" w-screen h-screen  flex justify-center items-center ">

     <div className="flex lg:flex-row flex-col justify-between w-full h-full">
      <div className=" bg-gradient-to-tl from-purple-950 via-red-950 to-blue-950 lg:w-1/4 lg:h-full h-2/5 w-full flex lg:justify-end justify-center">
      <div className=" flex flex-col justify-evenly items-center absolute top-36 lg:top-16 lg:left-32 mr-10 bg-gradient-to-tl from-purple-700 via-red-700 to-blue-700  w-80 h-48 rounded-lg shadow-2xl">
        <div className="flex flex-row items-center w-full">
          <div className="rounded-full bg-white size-10  ml-4"></div>
          <div className="rounded-full bg-transparent border border-white size-6 m-2"></div>
        </div>
        <div className="flex justify-start mr-6 w-9/12 mt-8 text-white font-semibold text-xl"><span>{ cart.length == 0 ?('0000 0000 0000 0000'): showcart}</span></div>
        <div className=" w-10/12 flex flex-row text-white justify-between"><span>{nome.length > 0 ?(nome): 'Nome' }</span><span>{dia.length > 0 ?(dia): '00'}/{mes.length > 0 ?(mes): '00'}</span></div>
      </div>
      <div className="bg-gray-300 rounded-lg w-80 h-48 ml-10 mt-8 lg:absolute lg:top-64 lg:left-32 lg:shadow-2xl flex flex-col items-center" ><div className="w-full h-8 bg-gray-800 mt-4"></div><div className="w-3/4 h-8 bg-gray-400 mt-5 rounded-lg text-white font-bold flex justify-end items-center"><span className="mr-3">{cod.length > 0 ?(cod): '000'}</span></div></div>
      </div>
      <div className="bg-white  pt-28 lg:pt-0 w-full h-full border transition-all ease-in">
        {redirect == true ?(<Finalizado style={" flex flex-col items-center"} icon={<FaCheck className="size-10 text-white" />
} />):(
          <form className="h-full" onSubmit={Send}>
          <Form 
          nome={nome} setNome={setNome} 
          cart={cart} setCart={setCart} 
          cod={cod} setCod={setCod} showcart={setmoscart}
          dia={dia} setDia={setDia}
          mes={mes} setMes={setMes} 
          button={Send} verify={verify}
          setVerify={setVerify}
          />
        </form>
      )}
      </div>

      </div>
    </main>
  );
}
