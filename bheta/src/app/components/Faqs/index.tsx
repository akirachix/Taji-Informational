"use client";

import { useState } from 'react';

const faqData = [
  {
    question: 'What are recalled drugs?',
    answer: 'A recalled drug is a prescription or over-the-counter medication that has been removed from the market due to safety concerns, defects, or potential health risks.',
  },
  {
    question: 'What makes a drug to be recalled?',
    answer: 'A drug may be recalled due to contamination, incorrect labeling, incorrect dosage, or potential health risks identified after the drug has been released to the market.',
  },
  {
    question: 'How can I identify recalled drugs?',
    answer: 'You can identify recalled drugs by checking the FDA website, consulting with your pharmacist, or using medication scanning apps.',
  },
  {
    question: 'How does medication scanning work?',
    answer: 'Medication scanning uses barcode or QR code technology to provide information about the medication, including its recall status.',
  },
  {
    question: 'Can I report a pharmacy that I am not at its location?',
    answer: 'Yes, you can report a pharmacy remotely through online portals provided by regulatory authorities or by contacting the relevant agency.',
  },
  {
    question: 'What should I do if I have taken a recalled drug?',
    answer: 'If you have taken a recalled drug, contact your healthcare provider immediately. They will guide you on the next steps and help manage any potential side effects or risks.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState< number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (   
    <div id='faqs'>
    <div className="flex flex-col h-[600px] items-center font-mono w-full px-4 sm:px-[55px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl mt-10 mb-5 pb-16 font-extrabold" style={{ fontFamily: 'Darker Grotesque' }}>
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4 sm:gap-y-[68px] sm:gap-x-[177px] w-full">
        {faqData.map((faq, index) => (
          <div key={index} className="flex flex-col w-full">
            <div
              className="bg-gray-100 border border-gray-300 rounded-lg p-4 cursor-pointer hover:shadow-md"
              onClick={() => toggleFaq(index)}>
              <div className="flex justify-between items-center">
                <span className="text-lg sm:text-xl md:text-[30px] font-bold" style={{ fontFamily: 'Darker Grotesque' }}>
                  {faq.question}
                </span>
                <span className="text-lg">{openIndex === index ? '▲' : '▼'}</span>
              </div>
            </div>
            {openIndex === index && (
              <div className="mt-2 bg-white p-3 rounded-md text-black text-lg sm:text-xl md:text-[25px]" style={{ fontFamily: 'Darker Grotesque' }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FaqSection;
