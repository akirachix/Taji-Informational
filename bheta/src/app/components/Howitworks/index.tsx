


const Howitworks = () => {
    return (
      <main className="flex flex-col justify-center items-center px-4 py-8">
  
        <div>
        <div className="text-center font-extrabold text-2xl md:text-4xl">
          <h1>How it Works</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
  
          <div className="flex flex-col items-center font-Darker Grotesque">
            <img src="/images/drug.png" alt="" className="h-64 w-64 lg:w-72 lg:h-80 sm:h-60 sm:w-60 object-contain m" />
            <p className="text-lg mt-6 md:text-xl">1. Drug QR Code</p>
          </div>
          
          
          <div className="flex flex-col items-center font-Darker Grotesque">
            <img src="/images/scan.png"alt="" className="h-64 w-64 lg:w-72 lg:h-80 sm:h-60 sm:w-60  mr-3.5 object-contain  " />
            <p className="text-lg mt-6 md:text-xl">2. Scan QR Code</p>
          </div>
  
  
          <div className="flex flex-col items-center">
            <img src="/images/feedback.png" alt="" className="h-64 w-64 lg:w-72 lg:h-80 sm:h-60 sm:w-60 object-contain "  />
            <p className="text-lg mt-6  font-Darker Grotesque md:text-xl" >3. Receive a Message</p>
          </div>
  
        </div>
       
        </div>
      </main>
    );
  };
  
  export default Howitworks;
  
  