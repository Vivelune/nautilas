import Link from 'next/link'
import React from 'react'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

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

        <Button variant="outline">
            {children}
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
    
  return (
    <nav className="flex h-20 border-b justify-between font-medium bg-white">
      
    <Link href="/" className="flex pl-6 item-center">
    <span className={cn("text-5xl font-semibold", poppins.className)}>
        Cart Meridian
    </span>
    </Link>

    <div className="lg:flex items-center gap-4 hidden">
       {navbarItems.map((item)=>(

        <NavbarItem key={item.href} {...item}>{item.children}</NavbarItem>

       ))}
    </div>

    </nav>
  )
}

export default Navbar
