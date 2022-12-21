import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import "./NavBar.css"

const NavBar = () => {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

    return (
        <div>
        <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
         <nav className="navbar" onClick={e => e.stopPropagation()}>
           <div className="nav-container">
             <NavLink exact to="/" className="nav-logo">
               LOGO
             </NavLink>
             <ul className={click ? "nav-menu active" : "nav-menu"}>
               <li className="nav-item">
                 <NavLink
                   exact
                   to="/"
                   activeClassName="active"
                   className="nav-links"
                   onClick={click ? handleClick : null}
                 >
                   Home
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink
                   exact
                   to="/about"
                   activeClassName="active"
                   className="nav-links"
                   onClick={click ? handleClick : null}
                 >
                   About
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink
                   exact
                   to="/blog"
                   activeClassName="active"
                   className="nav-links"
                   onClick={click ? handleClick : null}
                 >
                   Blog
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink
                   exact
                   to="/contact"
                   activeClassName="active"
                   className="nav-links"
                  onClick={click ? handleClick : null}
                 >
                   Contact Us
                 </NavLink>
               </li>
             </ul>
             <div className="nav-icon" onClick={handleClick}>
               {!click ? <Bars4Icon></Bars4Icon> : <XMarkIcon></XMarkIcon>}
             </div>
           </div>
         </nav>
       </ div>
    )
}

export default NavBar
