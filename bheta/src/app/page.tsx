import Navbar from "./components/Navbar";
import BhetaSolutions from "./components/Ourproduct";
import Homepage from "./components/Homepage";
import Howitworks from "./components/Howitworks";
import Footer from "./components/Footer";
import FaqSection from "@/app/components/Faqs";
import Contact from "./components/Contact_us";



export default function Home() {
  return (
    <main>
     <Navbar/>
     <Homepage/>
     <BhetaSolutions/>
      <Howitworks/> 
      <Contact/>
      <FaqSection/>     
      <Footer/>
    </main>
  );
}
