import React from "react";

export default function Footer() {
   return (
      <div className="footer">
         <div className="bg-wrap">
            <div className="spacing"></div>
         </div>
         <div className="disclaimer  py-5 text-warning" id="disclaimer">
            <div className="container">
               <span className="fs-1">
                  DISCLAIMER: iF yoU DON't FUkiN BUy Its' YoUr F**KiN LoSs. 
               </span>
            </div>
         </div>
         <div className="box fs-5">
            <div className="container d-flex flex-wrap gap-3 justify-content-between align-items-center py-5">
               <span>
                  Powered by <span className="text-halo">OBONK</span>
               </span>
               <span> Company Rights Reserved</span>
               <span>
               ©
                  <span className="text-halo tt"> 2023</span>
               </span>
            </div>
         </div>
      </div>
   );
}
