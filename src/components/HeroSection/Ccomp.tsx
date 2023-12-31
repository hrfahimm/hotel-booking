'use client'
type Props = {
    heading1: React.ReactNode;
    section2: React.ReactNode;
};
import { FC } from "react";
import CountNumber from "./CountNumber";

const ClientComponent: FC<Props> = props => {
    const { heading1, section2 } = props;
    return <section className='flex px-4 justify-around items-center gap-12 container mx-auto'>
        <div className='pt-28 pb-32 h-full'>
            {heading1}
            <div className='flex justify-between mt-12'>
                <div className='flex gap-3 flex-col items-center justify-center'>
                    <p className='text-xs lg:text-xl text-center'>Basic Room</p>
                    {/* <CountUpNumber duration={5000} endValue={50} /> */}
                    <CountNumber duration={2000} endValue={213} />
                </div>
                <div className='flex gap-3 flex-col items-center justify-center'>
                    <p className='text-xs lg:text-xl text-center'>Luxury Room</p>
                    {/* <CountUpNumber duration={5000} endValue={120} /> */}
                    <CountNumber duration={2000} endValue={48} />

                </div>
                <div className='flex gap-3 flex-col items-center justify-center'>
                    <p className='text-xs lg:text-xl text-center'>Suite</p>
                    {/* <CountUpNumber duration={5000} endValue={60} /> */}
                    <CountNumber duration={2000} endValue={15} />

                </div>
            </div>
        </div>
        {/* img */}
        {section2}
    </section>
}


export default ClientComponent;