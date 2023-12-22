import React from "react";

export default function Header() {
   const toggle = () => {
      document.querySelector(".mb.nav .menu-con").classList.toggle("open");
   };
   return (
      <>
         {/* Desktop Header */}
         <div className="nav row lg ">
            <div className="text-wrap col-4 d-flex align-items-center justify-content-between ps-5">
               <span>
                  <a href="#">Home</a>
               </span>
               <span>
                  <a href="#about">about</a>
               </span>
            </div>
            <div className="img-wrap col-4 text-center">
               <img src="/obonk/logo.png" width={30} alt="Kazuki" />
            </div>
            <div className="text-wrap col-4 d-flex align-items-center justify-content-between pe-5">
               <span>
                  <a href="#roadmap">roadmap</a>
               </span>
               <span>
                  <a href="#disclaimer">Disclaimer</a>
               </span>
            </div>
         </div>

         {/* Mobile Header */}
         <div className="nav mb  justify-content-between ">
            <div className="menu-icon" onClick={toggle}>
               <img src="/asset/NAV.png" alt="Menu"  />{" "}
               <span className="text-halo">Menu</span>
            </div>

            <div className="logo-con">
               <img src="/asset/logo.png" alt="Kazuki" />
            </div>

            <div className="menu-con">
               <div className="wrap">
                  <div className="img-wrap mb-5 d-flex justify-content-between align-items-center">
                     <img
                        src="/asset/logo.png"
                        alt="Kazuki"
                        className="sm-logo"
                     />
                     <div className="menu-icon">
                        <span className="text-halo">close</span>
                        <img
                           src="/asset/NAV1.png"
                           alt="Menu"
                           onClick={toggle}
                        />{" "}
                     </div>
                  </div>
                  <ul>
                     <li onClick={toggle}>
                        <a href="#">Home</a>
                     </li>
                     <li>
                        <a href="#about">About</a>
                     </li>
                     <li onClick={toggle}>
                        <a href="#roadmap">Roadmap</a>
                     </li>
                     <li onClick={toggle}>
                        <a href="#disclaimer">Disclaimer</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
}
