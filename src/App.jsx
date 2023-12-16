
import About from "./component/About";
import Achivements from "./component/Achivements";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import Footer from "./component/Footer"

import Navber from "./component/Navber"
import Projects from "./component/Projects";



function App() {
  

  return (
    <>
     <div className="flex min-h-screen flex-col bg-[#1e051f]">
      <Navber></Navber>
      <div className="container mt-24 mx-auto px-12 py-4">
        <Banner></Banner>
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
