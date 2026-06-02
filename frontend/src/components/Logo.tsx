import React from 'react'
import { ShoppingCart } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex gap-1 items-center">
          <div className="w-6 h-6 bg-[var(--red)] rounded-md flex items-center justify-center">
            <ShoppingCart size={15} className="text-white" />
          </div>
          <span className="text-xl leading-none text-white tracking-wide font-bold">
            food<span className="text-[var(--red)]">Kart</span>
          </span>
        </div>
  )
}

export default Logo;