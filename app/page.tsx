import Home from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

function Main(){
    return(
        <div>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    )
}
export default Main;