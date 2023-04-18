import React, { useEffect, useState } from 'react';

import airlineLogo from '../../assets/airlines-logo/airlines-1.svg';
const Home = () => {

    const [airlines, setAirlines] = useState([]);


    useEffect(() => {
        fetch("airlines.json")
            .then(res => res.json())
            .then(data => setAirlines(data))
    }, [])

    console.log(airlines)


    return (
        <div className='airlines-area py-[60px]'>
            <div className="container">
                <div className="airlines-wrap">
                    <h2 className='text-4xl mb-[35px] font-bold' >Airlines</h2>
                    <div className="filter">
                        <h3 className='text-xl mb-[40px] font-bold'>Filter by Alliances</h3>
                        <div className="filter-content flex items-center gap-5">
                            <div className="one-world flex items-center">
                                <input type="checkbox" class="" />
                                <span className=' text-sm ml-2'>OneWorld</span>
                            </div>
                            <div className="sky-team flex items-center">
                                <input type="checkbox" class="default:ring-2 ..." />

                                <span className=' text-sm ml-2'>Sky Team</span>
                            </div>
                            <div className="Star-airline flex items-center">
                                <input type="checkbox" class="default:ring-2 ..." />

                                <span className=' text-sm ml-2'>Star Alliance</span>
                            </div>
                        </div>
                        <div
                            className="
                        airlines-wrap grid
                         lg:grid-cols-3
                          md:grid-cols-2
                           grid-cols-1 gap-6
                            mt-12
                        ">

                            {
                                airlines?.map(airline => <div className="single-airlines bg-white rounded-sm cursor-pointer p-[30px] flex items-center justify-center w-max-[252px]  w-full max-h-[185px] h-[185px]">
                                    <img className='basis-12' src={airlineLogo} alt="" />
                                    <div className='ml-[22px] w-[60%]'>
                                        <h3
                                            className='text-sm font-bold'
                                        >{airline?.name}</h3>
                                        <div className='airline-info'>
                                            <p className='text-sm text-[#000] my-2'>{airline?.alliance}</p>
                                            <p className='mb-2'><a className='text-sm text-[#000] ' href="tel:+18004337300">{airline?.phone}</a></p>

                                            <p><a className='text-sm text-[#000]' href="https://www.AA.com">
                                                {airline?.site}
                                            </a></p>
                                        </div>
                                    </div>
                                </div>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;