import { Result } from "postcss";
import { useState } from "react";

function Form({nome,setNome,cart,setCart,showcart,dia,setDia,mes,setMes,cod,setCod}){
    const [invalido,setInvalido] = useState(false);
    function limit(length,variable,setVariable,isnum_cart,pos){

        if (isnum_cart === true){
            variable = variable.toString();
            let num_cart = []
            num_cart[0] = variable.slice(0,4)
            num_cart[1] = variable.slice(4,8)
            num_cart[2] = variable.slice(8,12)
            num_cart[3] = variable.slice(12,16)
            let resul = num_cart.join(' ')

            showcart(resul)
            
            
        }
        
        if (variable.length > length) {
            setVariable(variable.substring(0,length))
        }
        else {
            setVariable(variable)
        }
        let arr = [nome,cart,dia,mes,cod]
        let new_arr = []
        for (let x =0; x< arr.length ; x++){
            if (x == pos){
                new_arr[x] = false
            }
            else {
                new_arr[x] = invalido[x]
            }
        }
        setInvalido(new_arr);
        
        

    } 
    function button(){
        setInvalido([true,true,true,true,true]);
        
    }
      
    return (
        <div className="text-black  flex flex-col lg:items-end items-center lg:justify-center w-full h-full">
            <div className=" lg:w-6/12 h-full items-center flex">
                <div className=" w-fit  lg:mt-0 ">
                    <div className="flex flex-col">
                        <label className="font-semibold text-purple-950">NOME:</label>
                        <input required={invalido[0]} type="Text"  onChange={(e) => limit(24,e.target.value,setNome,false,0)} value={nome} placeholder="ex: Fulano César da Silva" className="peer focus:invalid:border-red-500 invalid:border-red-500 pl-2 p-1 transition-all duration-100 ease-in-out outline-none w-80 rounded-md  focus:border-purple-900  border border-gray-300" />
                        <p className=" peer-invalid:visible peer-invalid:h-auto text-red-500 h-0 invisible ">Não pode ser Vazio</p>
                    </div>
                    <div className="flex flex-col">
                        <label  className="mt-5 font-semibold text-purple-950">NÚMERO DO CARTÃO:</label>
                        <input required={invalido[1]}  type="number" placeholder="ex: 9384 6243 7245 5355" maxLength={19} value={cart}  onChange={(e) => limit(16,e.target.value,setCart,true,1)}   className="peer pl-2 p-1 transition-all duration-100 ease-in-out outline-none w-80 rounded-md invalid:border-red-500 focus:border-purple-900 focus:invalid:focus:border-red-500 border border-gray-300" />
                        <p className=" h-0 invisible peer-invalid:visible text-red-500 peer-invalid:h-auto">{ invalido[1] == true ?('Não pode ser Vazio'):('Campo Inválido')}</p>
                        
                    </div>
                    <div className="flex flex-col">
                        <div className=" flex justify-between">
                            <div className=" w-1/2 flex flex-col">
                            <label className="mt-3 font-semibold text-purple-950">Data da Expiração:</label>
                            <div className="">
                            <input type="number" required={invalido[2]}  min={1} max={12} placeholder='Mês' value={mes} onChange={(e) => limit(2,e.target.value,setMes,false,2)} className="peer p-1 pl-3 w-1/3 transition-all duration-100 ease-in-out outline-none  rounded-md invalid:border-red-500 focus:border-purple-900 invalid:focus:border-red-500 border border-gray-400 " />
                            <input type="number" required={invalido[3]} min={1} max={31} placeholder='Dia' value={dia} onChange={(e) => limit(2,e.target.value,setDia,false,3)} className="peer p-1 pl-3  mx-2 w-1/3 transition-all duration-100 ease-in-out outline-none  rounded-md invalid:border-red-500 focus:border-purple-900 invalid:focus:border-red-500  border border-gray-400" />
                            <p className="h-0 invisible peer-invalid:visible text-red-500  peer-invalid:h-auto">{ invalido[3] == true || invalido[2] == true ?(' Não pode ser Vazio'):('Campo Inválido')}</p>
                            </div>
                            
                            </div>
                            <div className=" w-1/2 flex flex-col">
                            <label className="mt-3 font-semibold text-purple-950">CVC:</label>
                            <input required={invalido[4]} type="number" placeholder="ex: 575" value={cod} onChange={(e) => limit(3,e.target.value,setCod,false,4)} min={1} max={999} className="peer p-1 pl-3 w-full transition-all duration-100 ease-in-out outline-none  rounded-md invalid:border-red-500 focus:border-purple-900 invalid:focus:border-red-500 border border-gray-400" />
                            <p className="h-0 invisible peer-invalid:visible text-red-500 peer-invalid:h-auto">{ invalido[4] == true ?('Não pode ser Vazio'):('Campo Inválido')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center my-4"><button onClick={button} className=" w-full bg-purple-950 text-white font-bold p-2 rounded-md">Confirmar</button></div>
                    </div>
                </div>
        </div>
    );
}

export default Form;