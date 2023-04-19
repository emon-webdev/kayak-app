import React from 'react';
import airlineLogo from "../../assets/airlines-logo/airlines-1.svg";
const SingleAirlines = ({ airline }) => {
    const { phone, site, name, alliance } = airline;

    return (
        <div className="single-airlines bg-white rounded-sm cursor-pointer p-[30px] flex items-center justify-center w-max-[252px]  w-full max-h-[185px] h-[185px]">
            <img className='basis-12' src={airlineLogo} alt="" />
            <div className='ml-[22px] w-[60%]'>
                <h3
                    className='text-sm font-bold'
                >{name}</h3>
                <p className='text-sm text-[#000] my-2'>{alliance}</p>
                <div className='airline-info'>
                    <p className='my-2'><a className='text-sm text-[#000] ' href="tel:+18004337300">{phone}</a></p>

                    <p><a className='text-sm text-[#000] break-words' href="https://www.AA.com">
                        {site}
                    </a></p>
                </div>
            </div>
        </div>
    );
};

export default SingleAirlines;