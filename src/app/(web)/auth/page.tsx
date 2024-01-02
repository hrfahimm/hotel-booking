'use client'
import { signUp } from "next-auth-sanity/client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from 'next-auth/react';
import toast from "react-hot-toast";
import { IoArrowRedo } from "react-icons/io5";
import { useRouter } from "next/navigation";

const defaultFormData = {
    email: '',
    name: '',
    password: '',
}
export default function Auth() {

    const [formData, setFormData] = useState(defaultFormData);

    const inputService = "border border-gray-300 sm:text-sm text-black rounded-xl block w-full p-2.5 focus:outline-none"

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    };

    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) router.push("/")
    }, [router, session])

    const loginHandler = async () => {
        try {
            await signIn();
            router.push("/")
        } catch (error) {
            console.log(error);
            toast.error('something went wrong')

        }
    }



    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const user = await signUp(formData)
            if (user) { toast.success("Success. Please Sign in") }
        }
        catch (error) { toast.error("Something went wrong") }
        finally { setFormData(defaultFormData) }
    }

    return <section className="container mx-auto ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto ">
            <div className="!flex mb-8   flex-col md:flex-row items-center justify-between ">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                    Create an Account
                </h1>
                <p className="text-lg">  or</p>
                <span className="inline-flex items-center">
                    <AiFillGithub onClick={loginHandler} className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />
                    <span>|</span>
                    <FcGoogle onClick={loginHandler} className=" ml-3 text-4xl cursor-pointer" />
                </span>
            </div>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <input type="email" name="email" value={formData.email} placeholder="Write Your Email" required onChange={handleInputChange} className={inputService} />

                <input type="text" name="name" value={formData.name} placeholder="Name"
                    required onChange={handleInputChange} className={inputService} />

                <input type="password" name="password" value={formData.password} placeholder="Password" minLength={6} required onChange={handleInputChange} className={inputService} />

                <button type="submit" className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center " >SignUp</button>

                <button onClick={loginHandler} className=" underline font-semibold flex  gap-2 text-lg"> <span>LogIn</span> <IoArrowRedo className="justify-center items-center text-lg" /></button>
            </form>
        </div>
    </section>;
}
