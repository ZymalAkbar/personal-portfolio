'use client'
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css"

function Contact() {
    return (<>
        <div className="bg-green-100 min-h-screen">
            <h1 className="text-6xl text-lime-700 font-bold animate-bounce text-center pt-48" >CONTACT ME</h1>
            <h2 className="text-3xl pt-8 text-lime-700 font-bold text-center">If you like my work,feel free to get in touch</h2>

            <div id="contact" className="p-32 container">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-8 pt-56">
                        <div className="flex flex-col items-center gap-3 text-3xl text-lime-600 ">
                            <AiOutlineMail size={50} /> abc@gmail.com
                            <IoCallOutline size={50} /> +92-000-000
                        </div>
                    </div>
                    <div className="space-y-8">
                    <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-2xl font-bold text-lime-600">Name </label>
                    <input type="text"  id="name" className="h-[50px] bg-green-50 border outline-lime-700 "></input>
                    </div>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-2xl font-bold text-lime-600">Email </label>
                    <input type="email"  id="email" className="h-[50px] bg-green-50 border outline-lime-700 "></input>
                    </div>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-2xl font-bold text-lime-600">Message </label>
                    <textarea id="message" className=" bg-green-50 border outline-lime-700 " rows={7} ></textarea>
                    </div>
                    <button type="button" className="btn btn-success btn-lg">SEND</button>
                    </div>
                   
            </div>
        </div>
        </div>
    </>
    )
}
export default Contact;