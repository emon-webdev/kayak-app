import React from 'react';
import logo from "../../assets/logo.svg";
const Header = () => {
    return (
        <header className='py-[30px] border-b border-[#D5D5D5]'>
            <div className="container">
                <div className="log0">
                    <img
                        src={logo}
                        class=""
                        alt="Main Logo"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;