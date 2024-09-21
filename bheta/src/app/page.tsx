import Navbar from "./components/Navbar";
import BhetaSolutions from "./components/Ourproduct";
import Homepage from "./components/Homepage";
import Howitworks from "./components/Howitworks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
     <Navbar/>
     <Homepage/>
     <BhetaSolutions/>
      <Howitworks/>      
      <Footer/>
    </div>
  );
}
