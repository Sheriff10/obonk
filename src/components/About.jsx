import React from "react";

export default function About() {
   return (
      <div className="about py-5" id="about">
         <div className="bg-wrap">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6 mb-3">
                     <div className="text-wrap glass">
                     <span className="h">
                           {" "}
                           ABOUT <br /> K AZUK I
                        </span> <br />
                        <span>
                           Lorem ipsum dolor sit amet consectetur, adipisicing
                           elit. Temporibus quas ducimus, aperiam quam
                           cupiditate autem eligendi quo blanditiis natus
                           facilis totam neque quasi et. Delectus placeat
                           reprehenderit voluptatibus nesciunt? Maiores!
                        </span>{" "}
                        <br /> <br />
                        <span>
                           Lorem ipsum dolor sit amet consectetur, adipisicing
                           elit. Temporibus quas ducimus, aperiam quam
                           cupiditate autem eligendi quo blanditiis natus
                           facilis totam neque quasi et. Delectus placeat
                           reprehenderit voluptatibus nesciunt? Maiores!
                        </span>
                     </div>
                  </div>
                  <div className="col-lg-6 zuki mb-3">
                     <div className="text-wrap text-center">
                        <img src="/asset/kuzuki.png" alt="Kuzuki" className="img-fluid" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
