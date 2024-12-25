"use client"
import { CustomButtonProps } from "@/types"
import Image from "next/image"
import Link from "next/link"

const CustomButton = ({title, containerStyles, handleClick, btnType, textStyle, rightIcon, link}: CustomButtonProps) => {
  return (
    <button disabled={false} type={btnType || "button"} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
        <span className={`flex-1 ${textStyle || ""}`}>
            {link ? (<Link href={link}>{title}</Link>) : title}
        </span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image src={rightIcon} alt={rightIcon} fill className="object-contain"/>
          </div>
        )}
    </button>
  )
}

export default CustomButton