
import About from "./component/About";
import Achivements from "./component/Achivements";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import Footer from "./component/Footer"

import Navber from "./component/Navber"
import Projects from "./component/Projects";
import Skills from "./component/Skills";



function App() {
  

  return (
    <>
     <div className="flex min-h-screen flex-col bg-[#6e0b4f]">
      <Navber></Navber>
      <div className="container mt-24 mx-auto px-12 py-4">
        <Banner></Banner>
        <Skills></Skills>
        <About></About>
        <Achivements></Achivements>
        <Projects></Projects>
        <Contact></Contact>
       
      </div>
      <Footer />
    </div>
     
    </>
  )
}

export default App;
