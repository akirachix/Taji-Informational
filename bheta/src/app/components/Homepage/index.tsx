import Image from "next/image";



const Homepage = ()  => {
  return (
    <div id="home">    
    
      <main>     
        <div  className="flex flex-col h-screen md:flex-row bg-[#FFF9EF] items-center p-4 md:p-8">

          <div className="flex-1 ml-[5%] md:ml-[5%] mr-[5%] mt-[4%] md:mb-[8%] flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-[30px] md:text-[60px] font-bold mt-8"
               style={{ color: '#031730', fontFamily: '"Darker Grotesque"' }} >
              Upload Now, Stay Safe!
            </h1>
            <p className="text-[24px] md:text-[40px] mt-6 md:mt-7 text-black darker-grotesque" 
             >
            Upload drug image now to ensure whether its recalled or not and protect your health!
            </p>

            <button
              className="mt-8 md:mt-10 text-white py-3 md:py-4 px-6 text-[16px] md:text-[18px]"
              style={{
                backgroundColor: '#031730',
                borderRadius: '10px',
              }}>
              Learn More
            </button>
          </div>

          <div className="flex-1 md:mt-10 md:ml-[5%]">
            <Image 
              src="/images/medication.png"
              alt="The landing page picture" 
              width={600}  
              height={400}
              className="rounded-md shadow-lg object-contain" 
            />
          </div>
        </div>
      </main>
    </div>
  );
}
export default Homepage;
