import { useState } from "react";

function Form(){
    const [invalido,setInvalido] = useState(false,false,false,false);
    
    
    
    return (
        <div className="text-black  flex flex-col lg:items-end items-center lg:justify-center w-full h-full">
            <div className=" lg:w-6/12 h-full items-center flex">
                <div className=" w-fit  lg:mt-0 ">
                    <div className="flex flex-col">
                        <label className="font-semibold text-purple-950">NOME:</label>
                        <input type="Text" placeholder="ex: Fulano César da Silva" className="pl-2 p-1 transition-all duration-100 ease-in-out outline-none w-80 rounded-md  focus:border-purple-900  border border-gray-300" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mt-5 font-semibold text-purple-950">NÚMERO DO CARTÃO:</label>
                        <input type="number" placeholder="ex: 9384 6243 7245 5355" min={1} max={9999999999999999} className="peer pl-2 p-1 transition-all duration-100 ease-in-out outline-none w-80 rounded-md invalid:border-red-500 focus:border-purple-900 invalid:focus:border-red-500 border border-gray-300" />
                        <p className="text-red-500 "></p>
                    </div>
                    <div className="flex flex-col">
                        <div className=" flex justify-between">
                            <div className=" w-1/2 flex flex-col">
                            <label className="mt-3 font-semibold text-purple-950">Data da Expiração:</label>
                            <div className="flex">
                            <input type="number"  min={1} max={12} placeholder='Mês' className="p-1 pl-3 w-1/2 transition-all duration-100 ease-in-out outline-none  rounded-md invalid:border-red-500 focus:border-purple-900 invalid:focus:border-red-500 border border-gray-400 " />
                            <input type="number" min={1} max={31} placeholder='Dia'className="p-1 pl-3  mx-2 w-1/2 transition-all duration-100 ease-in-out outline-none  rounded-md invalid:border-red-500 focus:border-purple-900 invalid:focus:border-red-500  border border-gray-400" />
                            </div>
                            <p className="text-red-500"></p>
                            </div>
                            <div className=" w-1/2 flex flex-col">
                            <label className="mt-3 font-semibold text-purple-950">CVC:</label>
                            <input type="number" placeholder="ex: 575" min={1} max={999} className="p-1 pl-3 w-full transition-all duration-100 ease-in-out outline-none  rounded-md invalid:border-red-500 focus:border-purple-900 invalid:focus:border-red-500 border border-gray-400" />
                            <p className="text-red-500"></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center my-4"><button className=" w-full bg-purple-950 text-white font-bold p-2 rounded-md">Confirmar</button></div>
                    </div>
                </div>
        </div>
    );
}

export default Form;