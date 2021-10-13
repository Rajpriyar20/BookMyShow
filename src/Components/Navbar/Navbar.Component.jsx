import React from 'react';
import {BiSearch, BiChevronDown, BiMenu} from "react-icons/bi";

function ScreenSm(){
    return(
        <>
         <div className="text-white flex items-center justify-between">
             <div>
                 <h3 className="text-xl font-bold">It All Starts Here!</h3>
                 <span className="text-grayLike-100 text-xs flex items-center cursor-pointer hover:text-white">
                     Mumbai NCR <BiChevronDown/>
                 </span>
             </div>
             <div className="w-8 h-8">
                 <BiSearch className="w-full h-full"/>
             </div>
         </div>
        </>
    )
}

function ScreenMd(){
    return(
        <>
         <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
             <BiSearch/>
             <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
         </div>
        </>
    )
}

function ScreenLg(){
    return(
        <>
          <div className="container flex mx-auto px-4 items-center justify-between">
              <div className="flex items-center w-1/2 gap-3">
                  <div className="w-10 h-10">
                      <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full"/>
                  </div>
                  <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
                      <BiSearch/>
                      <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
                  </div>
              </div>
              <div className="flex items-center gap-3">
                  <span className="text-grayLike-100 text-base flex items-center cursor-pointer hover:text-white">
                     Mumbai NCR <BiChevronDown/>
                  </span>
                  <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
                      Sign in 
                  </button>
                  <div className="w-7 h-7 text-grayHamburgerMenu-100 cursor-pointer">
                      <BiMenu className="w-full h-full"/>
                  </div>
              </div>
          </div>
        </>
    );
};


const Navbar = () => {
    return (
        <>
          <nav className="bg-navcolor-700 px-4 py-3">
              <div className="md:hidden">
                  {/* Mobile Screen */}
                  <ScreenSm/>
              </div>
              <div className="hidden md:flex lg:hidden">
                  {/* Mediun/Tab Screen */}
                  <ScreenMd/>
              </div>
              <div className="hidden lg:flex w-full">
                  {/* Large Screen */}
                  <ScreenLg/>
              </div>
          </nav>
        </>
    );
};

export default Navbar;