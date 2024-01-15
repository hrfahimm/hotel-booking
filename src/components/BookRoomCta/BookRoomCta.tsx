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



    const discountPrice = price - (price / 100) * discount;
    return (
        <div className="px-7 py-6 bg-slate-100">
            <h3 className="text-center">
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
            <div className="w-full border-b-2 border-b-secondary my-2" />
            <h3 className="">{specialNote}</h3>
            <div className="flex">
                <div className="w-1/2 pr-2">
                    <label htmlFor='check-in-data' className='block text-xs font-medium text-gray-900 dark:text-gray-400'  >
                        Chake in Date
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
        </div>
    );
};

export default BookRoomCta;
