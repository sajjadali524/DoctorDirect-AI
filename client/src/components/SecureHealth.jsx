import React from 'react';
import { CiLock } from "react-icons/ci";

const SecureHealth = ({secureHealth = []}) => {
  return (
    <div className="lg:px-40 md:px-10 px-3 pt-28">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 bg-[#272a3d] gap-5 py-20 lg:px-28 md:px-10 px-5 rounded-2xl">
            <div className="flex flex-col items-center justify-center gap-5 text-white">
                <CiLock className="text-[50px]" />
                <h1 className="text-[40px]">Your health data</h1>
                <span className="bg-darkBlue rounded-md px-16 py-2 text-[30px] font-bold transform -rotate-6">Is safe</span>
            </div>

            <div className="">
                {secureHealth.map((items, index) => {
                    return(
                        <div key={index} className="flex items-center space-y-5 gap-3 text-white">
                            {items.image && (<items.image className="text-start w-[100px]" />)}
                            <p>{items.detail}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default SecureHealth;