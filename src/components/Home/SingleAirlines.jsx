import React from 'react';

const SingleAirlines = () => {
    return (
        <div>
            <div className="single-airlines bg-white rounded-sm cursor-pointer p-[30px] flex items-center justify-center w-max-[252px]  w-full max-h-[185px] h-[185px]">
                <img src={airlines1} alt="" />
                <div className='ml-[22px]  '>
                    <h3
                        className='text-sm font-bold mb-3'
                    >American Airlines</h3>
                    <div className='airline-info'>
                        <p className='text-sm text-[#000] mb-2'>OW</p>
                        <p className='mb-2'><a className='text-sm text-[#000] ' href="tel:+18004337300">+1 800 433 7300</a></p>

                        <p><a className='text-sm text-[#000]' href="https://www.AA.com">
                            https://www.AA.com
                        </a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAirlines;