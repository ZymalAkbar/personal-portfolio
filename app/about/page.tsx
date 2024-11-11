'use client'

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"


function ABOUT() {
  return (<>

    <div className="bg-green-100 min-h-screen">
      <div className="text-center pt-60 font-semibold font-mono">
        <h1 className="text-6xl text-lime-900">Hello,I am <i className="text-lime-500">Zymal</i></h1>
        <p className="text-3xl text-lime-700 pb-40">Student at GIAIC.Learning Artificial Intelligence, Web 3.0 & Metaverse to become skilled developer.</p>
        <h2 className="text-6xl text-lime-900 font-semibold ">MY SKILLS</h2>
        {/* skills images */}
        <div className="container text-center pt-11 animate-in fade-in-75 zoom-in-75">
          <div className="row">
            <div className="col">
              <img src="html.png" alt="img" height={200} width={200}></img>
            </div>
            <div className="col">
              <img src="css-3.svg" alt="img" height={200} width={200}></img>
            </div>
            <div className="col">
              <img src="ts.png" alt="img" height={200} width={200}></img>
            </div>
          </div>
        </div>
        <div className="container text-center pt-11 animate-in fade-in-75 zoom-in-75  ">
          <div className="row">
            <div className="col">
              <img src="bs.png" alt="img" height={200} width={200}></img>
            </div>
            <div className="col">
              <img src="njs.png" alt="img" height={200} width={200}></img>
            </div>
            <div className="col">
              <img src="react.png" alt="img" height={200} width={200}></img>
            </div>
          </div>
        </div>
        <div className="container text-center pt-11 animate-in fade-in-75 zoom-in-75">
          <div className="row">
            <div className="col">
              <img src="guthub.png" alt="img" height={200} width={200}></img>
            </div>
            <div className="col">
              <img src="git.png" alt="img" height={200} width={200}></img>
            </div>
            <div className="col">
              <img src="vscode.png" alt="img" height={200} width={200}></img>
            </div>
          </div>
        </div>
        <div className="container text-center pt-14 pb-52 animate-in fade-in-75 zoom-in-75  ">
          <div className="row">
            <div className="col">
              <img src="tw.png" alt="img" height={200} width={200}></img>
            </div>
            <div className="col">
              <img src="vercel.png" alt="img" height={200} width={200}></img>
            </div>
            <div className="col">
              <img src="shadcn.png" alt="img" height={200} width={200}></img>
            </div>
          </div>
        </div>
        {/* footer */}
      </div>
    </div>
  </>);
}

export default ABOUT;