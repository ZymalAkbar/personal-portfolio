
'use client';

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../components/Card";

function Projects() {
    return (
        <>
            <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center py-10">
                <h1 className="text-6xl text-lime-700 font-bold animate-bounce text-center">MY PROJECTS</h1>
                <h2 className="text-3xl pt-8 text-lime-700 font-bold text-center">
                    Focused on creating seamless, interactive experiences while ensuring performance and accessibility across all devices.
                </h2>

                {/* Grid container with 3 cards per row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 mt-12 animate-in fade-in-55 zoom-in-105">
                    {/* Cards with different images */}
                    <Card
                        title="Zymal's Cafe"
                        details="Created a website using HTML and CSS"
                        imageSrc="prj01.png"
                    />
                    <Card
                        title="Resume Builder"
                        details="Created a resume builder using HTML,CSS and TS"
                        imageSrc="prj2.png"
                    />
                    <Card
                        title="Website Clone"
                        details="Cloned a website using HTML and CSS"
                        imageSrc="prj3.png"
                    />
                    <Card
                        title="Handbag Gallery"
                        details="Created a gallery using HTML and CSS"
                        imageSrc="prj4.png"
                    />
                    <Card
                        title="Periodic Table"
                        details="Created a periodic table using HTML and CSS"
                        imageSrc="prj5.png"
                    />
                    <Card
                        title="Resume"
                        details="Created a resume using HTML,CSS and TS"
                        imageSrc="prj6.png"
                    />
                </div>
            </div>
        </>
    );
}

export default Projects;
