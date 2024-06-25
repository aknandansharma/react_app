import React, { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNewspaper,
  faUser,
  faHandshake,
  faMessage,
  
} from '@fortawesome/free-regular-svg-icons'
import { IoSettings } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { FcBusinessman } from "react-icons/fc";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (index) => {
        setSelected(index);
    };

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-logo'>
                    <img src='' alt='AdvoCase' />
                </div>
                <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
                    <li className={selected === 0 ? "selected" : ""}>
                        <a href='#' onClick={() => handleSelect(0)}>
                        <FontAwesomeIcon icon={faNewspaper} size="1.5x" className="nav-icon"/>  
                          {" "}<span>News feed</span>
                        </a>
                    </li>
                    <li className={selected === 1 ? "selected" : ""}>
                        <a href='#' onClick={() => handleSelect(1)}>
                            <FontAwesomeIcon icon={faUser} size="1x" className="nav-icon"/>  
                          {" "}<span>Find lawyers</span>
                        </a>
                    </li>
                    <li className={selected === 2 ? "selected" : ""}>
                    <a href='#' onClick={() => handleSelect(2)}>
                    <AiOutlineHome size={"25px"}/> 
                  {" "}<span>Home</span>
                </a>
                    </li>
                    <li className={selected === 3 ? "selected" : ""}>
                        <a href='#' onClick={() => handleSelect(3)}>
                        <FontAwesomeIcon icon={faHandshake} size="1x" className="nav-icon"/> 
                          {" "}<span>Connections</span>
                        </a>
                    </li>
                    <li className={selected === 4 ? "selected" : ""}>
                        <a href='#' onClick={() => handleSelect(4)}>
                        <FontAwesomeIcon icon={faMessage} size="1x" className="nav-icon"/>  
                        {" "}<span>Chats</span>                            
                        </a>
                    </li>
                </ul>
                <div className='navbar-profile'>
                <IoSettings size={"25px"} />
                <IoIosNotifications size={"25px"}/>
                <FcBusinessman size={"30px"}/>
                </div>
                <div className='navbar-toggle' onClick={handleToggle}>
                    <span />
                    <span />
                    <span />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
