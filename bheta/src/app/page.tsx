import Image from "next/image";
import Navbar from "./component/Navbar";
import BhetaSolutions from "./component/Ourproduct";
import Homepage from "./component/Homepage";

export default function Home() {
  return (
    <div>
     <Navbar/>
     <Homepage/>
     <BhetaSolutions/>

      
    </div>
  );
}
