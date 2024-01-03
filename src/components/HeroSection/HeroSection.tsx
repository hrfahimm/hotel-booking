'use client'
import Image from "next/image";
import CountNumber from "../CountNumber/CountNumber";


export default function HeroSection() {
    return (
        <section className='flex px-4 justify-around items-center gap-12 container mx-auto'>
            <div className='py-10 h-full'>



                <h1 className="font-heading mb-6">
                    Explore Our  Hotel
                </h1>
                <p className="text-[#4a4a4a dark:text-[#ffffff] mb-12 max-w-lg ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maiores?
                </p>
                <button className="btn-primary">Get Start</button>




                <div className='flex justify-between mt-12'>
                    <div className='flex gap-3 flex-col items-center justify-center'>
                        <p className='text-xs lg:text-xl text-center'>Basic Room</p>
                        {/* <CountUpNumber duration={5000} endValue={50} /> */}
                        <CountNumber duration={4000} endValue={213} />
                    </div>
                    <div className='flex gap-3 flex-col items-center justify-center'>
                        <p className='text-xs lg:text-xl text-center'>Luxury Room</p>
                        {/* <CountUpNumber duration={5000} endValue={120} /> */}
                        <CountNumber duration={4000} endValue={48} />

                    </div>
                    <div className='flex gap-3 flex-col items-center justify-center'>
                        <p className='text-xs lg:text-xl text-center'>Suite</p>
                        {/* <CountUpNumber duration={5000} endValue={60} /> */}
                        <CountNumber duration={4000} endValue={15} />

                    </div>
                </div>
            </div>


            {/* img */}
            <div className='md:grid hidden gap-8 grid-cols-1'>
                <div className='rounded-2xl overflow-hidden h-48'>
                    <Image
                        src='/images/11.jpg'
                        alt='hero-1'
                        width={300}
                        height={300}
                        className='img scale-animation'
                    />
                </div>

                <div className='grid grid-cols-2 gap-8 h-48'>
                    <div className='rounded-2xl overflow-hidden'>
                        <Image
                            src='/images/2.jpg'
                            alt='hero-2'
                            width={300}
                            height={300}
                            className='img scale-animation'
                        />
                    </div>
                    <div className='rounded-2xl overflow-hidden'>
                        <Image
                            src='/images/1.jpg'
                            alt='hero-3'
                            width={300}
                            height={300}
                            className='img scale-animation'
                        />
                    </div>
                </div>
            </div>


        </section>
    )
}
