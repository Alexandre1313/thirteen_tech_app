"use client";
import { useState } from "react";
import FormPointer from "@/components/FormPoiner";
import Clock from "@/components/Clock";
import HeaderBar from "@/components/HeaderBar";

const PointRegister: React.FC = () => {
    const [timeValue, setTimeValue] = useState("");

    const handleTimeChange = (newValue: string) => {
        setTimeValue(newValue);
    };

    return (
        <>  
            <HeaderBar/>          
            <div
                className={`justify-start items-center min-h-screen  
                gap-8 flex flex-col pl-4 pr-4 pt-24 pb-16 bg-[#f5f5f5]`}
            >
                <div className={`lg:text-5xl text-4xl font-semibold text-black min-h-[55px]`}><Clock /></div>
                <FormPointer />
                <FormPointer />                
            </div>                        
        </>
    );
};

export default PointRegister;
