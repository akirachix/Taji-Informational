import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#131127] text-white py-6 px-16 text-2xl md:text-4xl lg:text-5xl sm:mt-6 md:mt-0 mt-[70%]">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-lg md:text-xl lg:text-2xl">
                    <div className="flex justify-center md:justify-start mb-4 md:mb-0">
                        <Image 
                            src="/images/image.png" 
                            alt="Logo" 
                            width={150}  
                            height={200} 
                            
                        />
                    </div>

                    <div className="flex justify-center space-x-4 mb-4 md:mb-0">
                        <Image src="/images/facebook.png" alt="Facebook" width={50} height={8}  />
                        <Image src="/images/instagram .png" alt="Instagram" width={50} height={8} />
                        <Image src="/images/linkedin .png" alt="LinkedIn" width={60} height={60} />
                    </div>

                    <div className="text-center md:text-left darker-grotesque md:text-2xl md:leading-10">
                        <h3 className="font-bold mb-2">Resources</h3>
                        <ul className="space-y-1 ">
                            <li>About Us</li>
                            <li>Our Product</li>
                            <li>FAQS</li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left md:text-2xl mr-2 mb-12 darker-grotesque md:leading-10">
                        <h3 className="font-bold">Contact</h3>
                        <p>+25494847640</p>
                        <p>
                            <a href="mailto:taji@gmail.com" className="hover:text-gray-400 darker-grotesque">
                                taji@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;