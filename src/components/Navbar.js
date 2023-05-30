// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import Logo from "../assets/Logo.jpg"
// import "../styles/Navbar.css";

// function Navbar() {
// 	const navRef = useRef();

// 	const showNavbar = () => {
// 		navRef.current.classList.toggle(
// 			"responsive_nav"
// 		);
// 	};

// 	return (
// 		<header>
// 			<img className="logo" src={Logo} alt=""/>
// 			<nav ref={navRef}>
// 				<a href="/#">Home</a>
// 				<a href="/#">My work</a>
// 				<a href="/#">Blog</a>
// 				<a href="/#">About mee</a>
// 				<button
// 					className="nav-btn nav-close-btn"
// 					onClick={showNavbar}>
// 					<FaTimes />
// 				</button>
// 			</nav>
// 			<button
// 				className="nav-btn"
// 				onClick={showNavbar}>
// 				<FaBars />
// 			</button>
// 		</header>
// 	);
// }

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu" }>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
        <FaTimes size={20} style={{color: "#fff"}} />
        ) : (
        <FaBars size={20} style={{color: "#fff"}} />
        )}
      </div>
    </div>
  )
}

export default Navbar