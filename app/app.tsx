'use client'
import "bootstrap/dist/css/bootstrap.min.css"
import { AppProps} from "next/app"

 function Myapp({Component,pageProps}:AppProps) {
    return <Component{...pageProps} />;
 }
 
 export default Myapp;