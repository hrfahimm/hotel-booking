'use client';
import DatePicker from "react-datepicker";
import { Dispatch, FC, SetStateAction } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
type Props = {
    checkinDate: Date | null;
    setCheckinDate: Dispatch<SetStateAction<Date | null>>;
    checkoutDate: Date | null;
    setCheckoutDate: Dispatch<SetStateAction<Date | null>>;
    setAdults: Dispatch<SetStateAction<number>>;
    setNoOfChildren: Dispatch<SetStateAction<number>>;
    calcMinCheckoutDate: () => Date | null;
    price: number;
    discount: number;
    adults: number;
    noOfChildren: number;
    specialNote: string;
    isBooked: boolean;
    handleBookNowClick: () => void;

}


const BookRoomCta: FC<Props> = (props) => {
    const { price,
        discount,
        specialNote,
        checkinDate,
        setCheckinDate,
        checkoutDate,
        setCheckoutDate,
        calcMinCheckoutDate,
        setAdults,
        setNoOfChildren,
        adults,
        noOfChildren,
        isBooked,
        handleBookNowClick, } = props;


    const calcNoOfDays = () => {
        if (!checkinDate || !checkoutDate) return 0;
        const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
        const noOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
        return noOfDays
    }





    const discountPrice = price - (price / 100) * discount;

    return (
        <div className="px-7 py-10  ">
            <h3 className="text-center mb-4 ">
                <span className={`${discount ? " text-gray-400" : ''} font-bold text-xl`}>
                    $ {price}
                </span>
                {
                    discount ? (
                        <span className="font-bold text-xl">
                            {' '} | {' '}  Discount {discount}% Now {''}
                            <span className="text-tertiary-dark underline"> $ {discountPrice} </span>
                        </span>)
                        : (
                            " "
                        )
                }
            </h3>
            <div className="w-full border-b-2 border-b-secondary mb-4" />
            <h3 className="mb-4">{specialNote}</h3>
            <div className="flex mb-4">

                <div className="w-1/2 pr-2">
                    <label
                        htmlFor='check-in-date'
                        className='block text-sm font-medium text-gray-900 dark:text-gray-400'
                    >
                        Chake in Date
                    </label>
                    <DatePicker
                        selected={checkinDate}
                        onChange={date => setCheckinDate(date)}
                        dateFormat='dd/MM/yyyy'
                        // disabled={!checkoutDate}
                        minDate={new Date()}
                        id='check-in-date'
                        className='w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary '
                    />
                </div>
                <div className='w-1/2 pl-2'>
                    <label
                        htmlFor='check-out-date'
                        className='block text-sm font-medium text-gray-900 dark:text-gray-400'
                    >
                        Check Out date
                    </label>
                    <DatePicker
                        selected={checkoutDate}
                        onChange={date => setCheckoutDate(date)}
                        dateFormat='dd/MM/yyyy'
                        disabled={!checkinDate}
                        minDate={calcMinCheckoutDate()}
                        id='check-out-date'
                        className='w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary'
                    />
                </div>
            </div>
            <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                    <label htmlFor='check-in-date'
                        className='block text-sm font-medium text-gray-900 dark:text-gray-400'
                    >Adult {' '} <span className='text-xs'>(1-5)</span> </label>
                    <input
                        type='number'
                        id="adult"
                        value={adults}
                        min={1}
                        max={5}
                        onChange={e => setAdults(Number(+e.target.value))}
                        className='w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary '
                    />
                </div>
                <div className='w-1/2 pl-2'>
                    <label
                        htmlFor='children'
                        className='block text-sm font-medium text-gray-900 dark:text-gray-400'
                    >
                        Children {' '} <span className='text-xs'>(0-3)</span>
                    </label>
                    <input
                        type='number'
                        id='children'
                        value={noOfChildren}
                        onChange={e => setNoOfChildren(+e.target.value)}
                        min={0}
                        max={3}
                        className='w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary'
                    />
                </div>
            </div>
            {calcNoOfDays() > 0 ? (
                <p className='mt-3'>Total Price: $ {calcNoOfDays() * discountPrice}</p>
            ) : (
                <></>
            )}
            <button
                disabled={isBooked}
                onClick={handleBookNowClick}
                className='btn-primary w-full mt-6 disabled:bg-gray-500 disabled:cursor-not-allowed'
            >
                {isBooked ? 'Booked' : 'Book Now'}
            </button>
        </div>
    );
};

export default BookRoomCta;
