import { handleClientScriptLoad } from 'next/script';
import React from 'react'

const LitBorderButton = ({
  title, icon, posistion, handleClick, otherClasses
}: {
  title: string; icon: React.ReactNode,  posistion: String; handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-sky-300 rounded-lg" />
        <div className={`inline-flex h-full w-full cursor-pointer items-center justify-center px-8 py-2  bg-black rounded-[6px] relative group transition duration-200
         text-white hover:bg-transparent gap-3 ${otherClasses}`}>
            {posistion === 'left' && icon}
            {title}
            {posistion === 'right' && icon}
        </div>
    </button>
  )
}

export default LitBorderButton