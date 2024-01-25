"use client";

import { motion } from "framer-motion";
import React from "react";

import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import Toast from '@/libs/Toast'
export default function Contact() {





    return (
        <section
            id="contact"
            className=' px-16 w-2/4 mx-auto items-center text-center    '


        >



            <h2 className='text-4xl font-bold mb-8 uppercase'>Contacts</h2>
            <p className=" ">
                Please contact me direactly at
                <a className="underline text-fuchsia-500 -mt-3 px-2 dark:text-cyan-500 " href="mailto:hrfahimm@gmail.com"> {""} hrfahimm@gmail.com  {""}</a>
                or through this mail
            </p>



            <form className="mt-10 flex flex-col group "
                action={async formData => {


                    toast.success('Email sent successfully')
                }}
            >

                <input className="h-14 rounded-xl borderBlack p-4  dark:text-black   hover:border-gray-200 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 dark:hover:bg-opacity-100 transition-all dark:outline-none" type="email" placeholder="Your Email" name="senderEmail"
                    required maxLength={500}
                />

                <textarea className="h-52 my-3 rounded-xl borderBlack p-4 dark:text-black    hover:border-gray-200 dark:bg-white dark:bg-opacity-90  dark:focus:bg-opacity-100 dark:hover:bg-opacity-100  transition-all dark:outline-none  " placeholder="Your Massage" required maxLength={5000} name="message" />

                <button type='submit' className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110  hover:scale-110  active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65" >
                    <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white "></div>
                    Send
                    < FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />

                </button>
            </form>

        </section>)
}
