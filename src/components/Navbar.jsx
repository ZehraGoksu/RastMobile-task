import React from "react";
import '../style/Navbar.scss';
import Logo from "./Logo";
import { Link } from "react-router-dom";
import {FaYoutubeSquare,FaInstagramSquare,FaBehanceSquare,FaLinkedin,FaBars} from "react-icons/fa"

const Navbar = () => {
    const navElements = [
        {
          name: "Hakkımızda",
          url: "/hakkimizda",
        },
        {
          name: "Jüri - Yarışma Yazılımı",
          url: "/juri",
        },
        {
          name: "Word Ninja",
          url: "/wordNinja",
        },
        {
          name: "Word Pyramids",
          url: "/wordPyramids",
        } 
      ];
  return ( 
    <div className="navbar navbar-expand-lg mx-4 mt-lg-3 mt-xl-3 mt-2"> 
        <Logo className="navbar-brand"/>  
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"><FaBars/></span>
       </button> 
       <div className="collapse navbar-collapse justify-content-between" id="navbarScroll">
        <ul className="navbar-nav navbar-nav-scroll mb-lg-2"> 
          {
            navElements.map((element, i)=>(
              <li className="nav-item" key={i}>
                <Link className="text pe-lg-3 pe-xl-5 px-xxl-5" to={element.url}>{element.name}</Link>
              </li>
            ))
          }
        </ul>  
        <div className="mt-md-3 ms-md-2 mt-lg-0 ms-lg-0">
          <FaYoutubeSquare className="icon"/>
          <FaInstagramSquare className="icon"/>
          <FaBehanceSquare className="icon"/>
          <FaLinkedin className="icon"/> </div>
       </div>   
    </div>
  );
};

export default Navbar;
