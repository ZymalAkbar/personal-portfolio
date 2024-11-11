'use client'
import Image from "next/image";
import Link from "next/link"; 
 import "bootstrap/dist/css/bootstrap.min.css"

const Navbar=() =>{
    return ( <>
                                                             {/* NAVBAR */}
    <nav>
        <ul className="bg-lime-700 font-bold text-xl flex items-center justify-center  space-x-20  p-6" >
        <Image src='/logo.png' alt='img' height={100} width={100} className="rounded-full absolute left-6   "/>
        <li><Link href={'./home'}><button className="text-white">HOME</button></Link></li>
        <li><Link href={'./about'}><button className="text-white">ABOUT</button></Link></li>
        <li><Link href={'./projects'}><button className="text-white">PROJECTS</button></Link></li>
        <li><Link href={'./contact'}><button className="text-white">CONTACT</button></Link></li>
        </ul>
    </nav>
    </> );
}

export default Navbar;

