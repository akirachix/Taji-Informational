import React from 'react';

const BhetaSolutions = () => {
  return (
    <div id='ourproduct'>
    <div className="flex-col items-center  bg-[#FFF9EF]">
      <div className=" bg-gray-900 text-white py-8 px-4 md:px-8 text-center">
        <h1
          className="text-[28px] md:text-[48px] font-bold mb-4 darker-grotesque">
          We are Bheta Solutions
        </h1>
        <p
          className="text-[20px] md:text-[33px] ml-[7%] mr-[7%] darker-grotesque">
          Bheta Solution by Taji team is dedicated to safeguarding consumers in Kenya from recalled medications.
          The app delivers real-time alerts and comprehensive details on drug recalls, including manufacturer
          information, recall dates, and reasons for recalls, empowering users to make informed health
          decisions and combating the threat of recalled drugs.
        </p>
      </div>
      
      <div className="py-12 px-4 md:px-8 text-center">
        <h2
          className="text-[28px] md:text-[48px] font-semibold text-gray-800 mb-8 darker-grotesque" >
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mx-auto">
          <div className="bg-gray-50 p-6 md:p-8 shadow-xl rounded-lg">
            <h3
              className="text-[24px] md:text-[40px] font-semibold mb-4 text-gray-900 darker-grotesque"  >
              Pharmacy Finder
            </h3>
            <p
              className="text-[20px] md:text-[33px] text-gray-700"
              style={{ fontFamily: '"Darker Grotesque"' }}
            >
              We help consumers to make the right decision on which pharmacy is licensed for buying drugs.
            </p>
          </div>
          <div className="bg-gray-50 p-6 md:p-8 shadow-xl rounded-lg">
            <h3
              className="text-[24px] md:text-[40px] font-semibold mb-4 text-gray-900"
              style={{ fontFamily: '"Darker Grotesque"' }}
            >
              Upload
            </h3>
            <p
              className="text-[20px] md:text-[33px] text-gray-700 darker-grotesque">
              We help consumers to identify if the drug is recalled or not, ensuring our consumers' health is safe.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BhetaSolutions;