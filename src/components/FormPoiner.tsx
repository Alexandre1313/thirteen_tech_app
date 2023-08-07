import React, { useState } from "react";
import TimeInput from "../components/TimeImput";

interface FormPointerProps {    
    date_front: Date;
    hours_front_1: string;
    hours_front_2: string;
    hours_tot_front_1: string;
    hours_front_3: string;
    hours_front_4: string;
    hours_tot_front_2: string;
    hours_tot_day_front: string;
    hours_fs_front: string;
    hours_tot_prev_day_front: string;
}

const FormPointer = () => {
    // Declaração do estado timeValue e da função setTimeValue
    const [timeValue, setTimeValue] = useState("");

    // Função de callback para atualizar o estado timeValue com o valor formatado
    const handleTimeChange = (newValue: string) => {
        const formattedValue = applyTimeMask(newValue);
        setTimeValue(formattedValue);
    };

    // Função para aplicar a máscara de formatação da hora
    const applyTimeMask = (inputValue: string): string => {
        // Implemente a lógica de máscara aqui
        // ...
        return inputValue; // Retorne o valor formatado aqui
    };

    return (      
      <div
      className={`p-2 lg:px-8 lg:py-2 rounded-lg grid h-auto md:px-8 shadow-2xl
          grid-cols-2 gap-2 bg-[#d9d8e0]  w-full lg:w-3/6 md:w-4/6`}
  >
      <div className={`grid col-span-2 grid-row-start-1`}>
          <h2 className={`text-start text-slate-900`}>Data: <span className={`text-slate-950 font-bold`}>{'17/10/2023'}</span></h2>
      </div>
      <div className={`grid col-span-2`}>
          <form className={`grid grid-cols-4 lg:gap-16 w-full gap-4`} action="">
              <div className={`grid col-span-2 gap-2`}>
                  <div className={`col-span-1 lg:col-start-1 gap-1`}>
                      <label className={`text-center text-[12px] md:text-sm lg:text-sm text-slate-900 
                      lg:grid-row-start-1 lg:grid-row-end-1`} htmlFor="">
                        Início
                      </label>
                      <div className={`lg:grid-row-start-2 lg:grid-row-end-2`}>
                        <TimeInput value={timeValue} onChange={handleTimeChange} />
                      </div>
                  </div>
                  <div className={`cols-span-2 lg:col-start-1  gap-1`}>
                      <label className={` text-slate-900 text-center text-[12px] md:text-sm lg:text-sm 
                      lg:grid-row-start-1 lg:grid-row-end-1`} htmlFor="">
                        Saída intervalo
                      </label>
                      <div className={`lg:grid-row-start-2 lg:grid-row-end-2 w-full`}>
                        <TimeInput value={timeValue} onChange={handleTimeChange} />
                      </div>
                  </div>
              </div>
              <div className={`grid col-span-2 gap-2`}>
                  <div className={`col-span-1 lg:col-start-1 gap-1`}>
                      <label className={` text-slate-900 text-center text-[12px] md:text-sm lg:text-sm 
                      lg:grid-row-start-1 lg:grid-row-end-1`} htmlFor="">
                        Retorno intervalo
                      </label>
                      <div className={`lg:grid-row-start-2 lg:grid-row-end-2`}>
                        <TimeInput value={timeValue} onChange={handleTimeChange} />
                      </div>
                  </div>
                  <div className={`cols-span-2 lg:col-start-1  gap-1`}>
                      <label className={` text-slate-900 text-center text-[12px] md:text-sm lg:text-sm 
                      lg:grid-row-start-1 lg:grid-row-end-1`} htmlFor="">
                        Saída
                      </label>
                      <div className={`lg:grid-row-start-2 lg:grid-row-end-2 w-full`}>
                        <TimeInput value={timeValue} onChange={handleTimeChange} />
                      </div>
                  </div>
              </div>                           
          </form>
      </div>
      <div className={`grid grid-cols-2 col-span-2`}>
        <div className={`grid-cols-1 text-center text-[12px] md:text-sm lg:text-sm
         text-slate-900`}>Total horas: <span className={`text-green-600 font-bold`}> {'17:00'}</span></div>
        <div className={`grid-cols-2 text-center text-[12px] md:text-sm lg:text-sm text-slate-900`}>Total horas: 
        <span className={`text-red-600 font-bold`}> {'-08:49'}</span></div>
      </div>
      <div className={`flex flex-col items-start gap-1`}>
        <h2 className={`text-center text-[12px] md:text-sm lg:text-sm text-slate-900`}>Total dia: 
        <span className={`text-slate-950 font-bold`}> {'179:45'}</span></h2>
        <h2 className={`text-center text-[12px] md:text-sm lg:text-sm text-slate-900`}>Saldo: 
        <span className={`text-slate-950 font-bold`}> {'-01:00'}</span></h2>
      </div>  
      <div className={`flex justify-end gap-4`}>              
        <button className={` p-1 rounded-full`}>
          <span className={`text-[12px] text-orange-700 hover:text-orange-900 font-bold`}>Editar</span>
        </button>
        <button className={` p-1 rounded-full `}>
          <span className={`text-[12px] text-green-700 hover:text-green-900 font-bold`}>Enviar</span>
        </button>
      </div>          
  </div>
    );
};

export default FormPointer;
