import Link from "next/link";
import React from "react";
import { FaBus } from "react-icons/fa";

import { PiPhoneCallFill } from "react-icons/pi";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
export default function Footer() {
    return (
        <footer className="mt-16 ">
            <div className="container mx-auto px-4">
                <Link href='/' className="text-xl font-black text-tertiary-dark ">HOTEL</Link>
                <h4 className="font-semibold text-[40px] py-6">Contact</h4>
                <div className="flex flex-wrap gap-16 items-center justify-between">
                    <div className="flex-1">
                        <p className="">123 Road</p>
                        <div className="flex items-center py-4">
                            <FaBus />
                            <p className="ml-2 ">CodeWithlari</p>
                        </div>
                        <div className="flex items-center">
                            <PiPhoneCallFill />
                            <p className="ml-2 ">0179999999</p>
                        </div>
                        <div className="flex items-center pt-4">
                            <BiSolidMessageSquareDetail />
                            <p className="ml-2 ">WhatsApp</p>
                        </div>
                    </div>
                    <div className="flex-1 md:text-right">
                        <p className="pb-4">Our Story</p>
                        <p className="pb-4">Get it Touch</p>
                        <p className="pb-4">Our Privacy Commitement</p>
                        <p className="pb-4">Team of Service</p>
                        <p className=" "> Customer Assistent</p>
                    </div>
                    <div className="flex-1 md:text-right">
                        <p className="pb-4">Dining Exprience</p>
                        <p className="pb-4">wellness</p>
                        <p className="pb-4">Fitness</p>
                        <p className="pb-4">Events</p>
                        <p className="">Sports</p>
                    </div>
                </div>
            </div>
            <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0 "></div>
        </footer>);
}
