import React, { useEffect, useState } from 'react';

import SingleAirlines from './SingleAirlines';
const Home = () => {

    const [airlines, setAirlines] = useState([]);
    const [options, setOptions] = useState({ OW: false, ST: false, SA: false });
    const [displayAirlines, setDisplayAirlines] = useState([...airlines]);

    useEffect(() => {
        fetch("airlines.json")
            .then(res => res.json())
            .then(data => {
                setAirlines(data)
                setDisplayAirlines(data)
            })
    }, [])

    const handleChange = (e) => {
        const { value, checked } = e.target;
        console.log(value, checked)
        let newOptions = { ...options };
        newOptions[value] = checked
        console.log(newOptions)
        setOptions(newOptions)
        let allData = [];

        if (!newOptions.OW && !newOptions.ST && !newOptions.SA) {
            setDisplayAirlines([...airlines])
        } else {
            if (newOptions.OW) {
                let data = airlines.filter(d => d.alliance === "OW")
                allData = [...allData, ...data]
            }
            if (newOptions.ST) {
                let data = airlines.filter(d => d.alliance === "ST")
                allData = [...allData, ...data]
            }
            if (newOptions.SA) {
                let data = airlines.filter(d => d.alliance === "SA")
                allData = [...allData, ...data]
            }
            setDisplayAirlines(allData)
        }
    }



    return (
        <div className='airlines-area py-[60px]'>
            <div className="container">
                <div className="airlines-wrap">
                    <h2 className='text-4xl mb-[35px] font-bold' >Airlines</h2>
                    <div className="filter">
                        <h3 className='text-xl mb-[40px] font-bold'>Filter by Alliances</h3>
                        <div className="filter-content flex items-center gap-5">
                            <div className="one-world flex items-center">

                                <input onChange={handleChange} type="checkbox" name="OW" value="OW"></input>

                                <label className=' text-sm ml-2'>One World</label>
                            </div>
                            <div className="sky-team flex items-center">

                                <input onChange={handleChange} type="checkbox" name="ST" value="ST"></input>

                                <label className=' text-sm ml-2'>Sky Team</label>
                            </div>
                            <div className="Star-airline flex items-center">

                                <input onChange={handleChange} type="checkbox" name="SA" value="SA"></input>

                                <label className=' text-sm ml-2'>Star Alliance</label>
                            </div>
                        </div>
                        {
                            displayAirlines.length > 0 && <h1>{displayAirlines.length}</h1>
                        }
                        <div
                            className="
                        airlines-wrap grid xl:grid-cols-4
                         lg:grid-cols-3
                          md:grid-cols-2
                           grid-cols-1 gap-6
                            mt-12
                        ">

                            {
                                displayAirlines.length > 0 && displayAirlines?.map((airline, index) =>
                                    <SingleAirlines
                                        key={index}
                                        airline={airline}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;