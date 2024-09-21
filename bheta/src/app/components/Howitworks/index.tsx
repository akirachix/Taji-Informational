
import Image from "next/image";

const Howitworks = () => {
  
    return (
      <div id="about">
      <main className="flex flex-col justify-center items-center px-4 py-8">
  
        <div>
        <div className="text-center font-extrabold text-2xl md:text-4xl">
          <h1>How it Works</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
  
          <div className="flex flex-col items-center font-Darker Grotesque">
            <Image src="/images/drug.png" alt="" className="h-64 w-64 lg:w-72 lg:h-80 sm:h-60 sm:w-60 object-contain m" />
            <p className="text-lg mt-6 md:text-[24px]">1. Drug QR Code</p>
          </div>
          
          
          <div className="flex flex-col items-center font-Darker Grotesque">
            <Image src="/images/scan.png"alt="" className="h-64 w-64 lg:w-72 lg:h-80 sm:h-60 sm:w-60  mr-3.5 object-contain  " />
            <p className="text-lg mt-6 md:text-[24px]">2. Scan QR Code</p>
          </div>
  
  
          <div className="flex flex-col items-center">
            <Image src="/images/feedback.png" alt="" className="h-64 w-64 lg:w-72 lg:h-80 sm:h-60 sm:w-60 object-contain "  />
            <p className="text-lg mt-6  font-Darker Grotesque  md:text-[24px]" >3. Receive a Message</p>
          </div>
  
        </div>
       
        </div>
      </main>
      </div>
    );
  };
  
  export default Howitworks;
  
  