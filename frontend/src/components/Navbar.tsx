import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='max-h-[8vh] flex justify-between items-center w-[80%] bg-amber-50 rounded-b-2xl ' style={{padding:"20px"}}>
        <h1 className="text-accent-foreground uppercase font-bold ">
            JobForge
        </h1>
        <ul className=" flex text-sm uppercase gap-10 [&>li]:cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <div className="">
            <Button className='cursor-pointer font-normal text-[0.75em] bg-accent-foreground' style={{padding:"12px"}}>
                <Link to={"/login"}>
                    Login/SignUp
                </Link>
            </Button>
        </div>
    </div>
  )
}

export default Navbar