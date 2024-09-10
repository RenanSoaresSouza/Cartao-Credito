import { useState } from "react";
function Finalizado({icon,style}){

    return(
        <div className='bg-white h-full lg:justify-end justify-center flex md:items-start items-center '>
            <div className="w-fit h-fit  lg:w-6/12   flex justify-start">
                <div className="w-fit  bg-white">
                    <section className={style}>
                        <div className="size-24 lg:mt-0  rounded-full bg-gradient-to-tl from-purple-700 via-red-700 to-blue-700 flex justify-center items-center">{icon}</div>
                        <h1 className="text-black mb-6 mt-12 font-bold text-4xl">OBRIGADO!</h1>
                        <p className="text-gray-500 mb-12">Já Adicionamos as Informações do seu Cartão</p>
                        <button className="w-full bg-purple-950 text-white font-bold p-2 rounded-md">Continuar</button>
                    </section>
                </div>
            </div>
        </div>
    );
}
export default Finalizado