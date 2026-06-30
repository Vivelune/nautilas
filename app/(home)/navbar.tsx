"use client"

import Link from 'next/link'
import React from 'react'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

const poppins = Poppins({
    subsets:["latin"],
    weight:["700"],
})

interface NavbarItemProps{

    href:string
    children: React.ReactNode
    isActive?: boolean
}

const NavbarItem = ({href, children, isActive}: NavbarItemProps) => {

    return(
       
        <Button className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
            isActive && "bg-black text-white hover:bg-black hover:text-white"
        )} variant="outline">
             <Link href={href}>
            {children}
             </Link>
        </Button>
       

    )
}

const navbarItems =[
    {href:"/", children:"Home", },
    {href:"/about", children:"About", },
    {href:"/features", children:"Features", },
    {href:"/pricing", children:"Pricing", },
    {href:"/contact", children:"Contact", },
]

const Navbar = () => {
    
    const pathname = usePathname()

  return (
    <nav className="flex h-20 border-b justify-between font-medium bg-white">
      
    <Link href="/" className="flex pl-6 item-center">
    <span className={cn("text-5xl font-semibold", poppins.className)}>
        Cart Meridian
    </span>
    </Link>

    <div className="lg:flex items-center gap-4 hidden">
       {navbarItems.map((item)=>(

        <NavbarItem isActive={pathname===item.href} href={item.href} key={item.href}> {item.children} </NavbarItem>

       ))}
    </div>

    <div className="hidden lg:flex">

     <Button variant="secondary" className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"><Link href="/sign-in">Log In</Link></Button>

     <Button className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:text-black hover:bg-pink-400 transition-colors text-lg"><Link href="/sign-up">Start Selling</Link></Button>

    </div>

    </nav>
  )
}

export default Navbar
