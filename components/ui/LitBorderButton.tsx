import { handleClientScriptLoad } from 'next/script';
import React from 'react'

const LitBorderButton = ({
  title, icon, posistion, handleClick, otherClasses
}: {
  title: string; icon: React.ReactNode,  posistion: String; handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            {title}
        </div>
    </button>
  )
}

export default LitBorderButton