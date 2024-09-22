"use client";

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { userMessage } from '@/app/utils/fetchForm';




type FormData = {
    email: string;
    phonenumber: string;
    message: string;
  };

const schema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  phonenumber: yup.string().matches(/^[0-9]+$/, 'Must be only digits').min(10, 'Must be at least 10 digits').required('Phone number is required'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
}).required();

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

   const onSubmit = async (data: FormData) => {
    try {
      await userMessage(data);  
      setIsSubmitted(true);
      reset(); 
    } catch (err) {
      setFormError((err as Error).message);
    }
  };

  return (
    <div>
      <section
        id="contactus"
        className="min-h-[85vh] sm:min-h-screen md:min-h-[80vh] lg:min-h-[95vh] bg-[#0D1730] w-full text-white flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-36"
      >
        <h2 className="font-bold text-4xl sm:text-3xl md:text-4xl py-8 sm:py-12 md:py-16 text-center mt-0 mb-0" style={{ fontFamily: 'Darker Grotesque' }}>
          Contact Us
        </h2>

        <div className="flex flex-col sm:flex-row w-full mx-auto" style={{ fontFamily: 'Darker Grotesque' }}>
          <div className="flex flex-col justify-center p-4 sm:p-5 w-full sm:w-1/2 mb-6 sm:mb-0">
            <div className="mb-8 sm:mb-12 md:mb-16 flex text-lg sm:text-xl md:text-2xl items-center">
              <strong className="mr-2 min-w-[80px] sm:min-w-[100px]">Email:</strong>
              <span className="break-all">taji@gmail.com</span>
            </div>

            <div className="mb-8 sm:mb-12 md:mb-16 flex text-lg sm:text-xl md:text-2xl items-center">
              <strong className="mr-2 min-w-[80px] sm:min-w-[100px]">Phone no:</strong>
              <span>+254794847640</span>
            </div>

            <div className="mb-8 sm:mb-12 md:mb-16 flex text-lg sm:text-xl md:text-2xl items-center">
              <strong className="mr-2 min-w-[80px] sm:min-w-[100px]">Address:</strong>
              <span>616 Korongo Rd, Nairobi</span>
            </div>
          </div>

          <div className="w-px bg-white mx-4 sm:mx-5 hidden sm:block"></div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-4 sm:p-5 w-full sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            {isSubmitted && <p className="text-green-500 text-lg">Thank you! Your message has been sent.</p>}
            {formError && <p className="text-red-500 text-lg">{formError}</p>}

            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center">
              <label htmlFor="email" className="block text-lg sm:text-xl md:text-2xl mb-2 sm:mb-0 sm:w-1/3">
                Email address:
              </label>
              <div className="w-full sm:w-2/3">
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>}
              </div>
            </div>

            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center">
              <label htmlFor="phone" className="block text-lg sm:text-xl md:text-2xl mb-2 sm:mb-0 sm:w-1/3">
                Phone Number:
              </label>
              <div className="w-full sm:w-2/3">
                <input
                  type="tel"
                  id="phone"
                  {...register('phonenumber')}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                />
                {errors.phonenumber && <p className="text-red-500 text-sm mt-1">{errors.phonenumber?.message}</p>}
              </div>
            </div>

            <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-start">
              <label htmlFor="message" className="block text-lg sm:text-xl md:text-2xl mb-2 sm:mb-0 sm:w-1/3">
                Message:
              </label>
              <div className="w-full sm:w-2/3">
                <textarea
                  id="message"
                  {...register('message')}
                  rows={4}
                  className="w-full border border-gray-300 rounded px-3 py-2 resize-none text-black"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message?.message}</p>}
              </div>
            </div>

            <div className="flex justify-center mt-4 sm:mt-6">
              <button
                type="submit"
                className="bg-white text-[#0D1730] font-bold py-2 px-6 rounded-full cursor-pointer w-fit hover:bg-gray-200 text-lg sm:text-xl md:text-2xl transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
