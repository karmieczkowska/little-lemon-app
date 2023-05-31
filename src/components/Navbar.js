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


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "../styles/Navbar.css";
// import { FaBars, FaTimes } from 'react-icons/fa';


// function Navbar() {

//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);

//   return (
//     <div className="header">
//       <Link to="/">
//         <h1>Logo</h1>
//       </Link>
//       <ul className={click ? "nav-menu active" : "nav-menu" }>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/menu">Menu</Link>
//         </li>
//         <li>
//           <Link to="/reservations">Reservations</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//       </ul>
//       <div className="hamburger" onClick={handleClick}>
//         {click ? (
//         <FaTimes size={20} style={{color: "#fff"}} />
//         ) : (
//         <FaBars size={20} style={{color: "#fff"}} />
//         )}
//       </div>
//     </div>
//   )
// }

// export default Navbar

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

import Logo from "../assets/Logo.jpg"

function Navbar() {
  const navRef = useRef();

  const location = useLocation();

  const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  const [color, setColor] = useState(false);
  const changeColor = () => {
	if(window.scrollY >= 100) {
		setColor(true);
	} else {
		setColor(false);
	}
  };

  window.addEventListener("scroll", changeColor);

  useEffect(() => {
    showNavbar(false);
  }, [location]);


	return (
		<header className={color ? "header-bg" : "header"}>
			<h3 className="logo"> <Link to="/"> <img src={Logo} alt="Little Lemon Logo" style={{maxWidth: 100}}/> </Link></h3>
			<nav ref={navRef} className="links">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/reservations"> Reservations </Link>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}
        >
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}
      >
				<FaBars />
			</button>
		</header>
	);
}



export default Navbar;