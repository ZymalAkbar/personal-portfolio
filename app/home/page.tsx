'use client'

import Image from "next/image";

function Home() {
    return ( <>
    <div className="bg-green-100 min-h-screen">
    <div className="flex items-center space-x-4">
    <Image src={'/pic.png'} alt="img" height={2000} width={2000} className="pt-60"/>
    <div className="text-lime-700 font-bold text-center">
        <h1 className="text-6xl animate-bounce">Coder</h1>
        <h3><p className="pr-10 text-3xl pt-8">Front End Developer who designs website using CSS-3,HTML-5,Bootstrap-5 and learning Typescript and more in GIAIC </p></h3>
    </div>
    </div>
    </div>
    </> )
}

export default Home;
