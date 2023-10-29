import React from "react";
import {FaTelegram, FaTwitter} from 'react-icons/fa'

export default function Intro() {
   return (
      <div className="intro">
         <div className="bg-wrap col-12">
            <div className="col-lg-6 wrap text-center mx-auto bg-">
               <div className="socials d-flex gap-3 justify-content-center">
                  <span className="fs-2 text-halo">
                     <FaTelegram />
                  </span>
                  <span className="fs-2 text-halo">
                     <FaTwitter />
                  </span>
               </div>
               <span className="h1">HOME OF TERROR</span> <br />
               <span className="slogan fs-4">Ai generated 🎃 <span className="text-halo">meme coin</span></span>
               <div className="btn-wrap mt-3 container">
                  <button className="btn col-lg-6"> BUY  <img src="/asset/bat.png" alt="Bat" /> </button>
               </div>
               <div className="btn-wrap mt-4 container">
                  <button className="btn col-lg-6">  <img src="/asset/bat.png" alt="Bat" /> Chart  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
