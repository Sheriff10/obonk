import React from "react";

export default function Card() {
   const dum = [1, 2, 3];
   const cardFunc = (title, text) => {
      return { title, text };
   };
   const cardArray = [
      cardFunc("Backed Community", "$KZUKI has strong community backing, Everything done is for the comunity by the commmunity"),
      cardFunc("Based Dev", "Developer of $KZUKI are experienced in the crypto industry and organized team."),
      cardFunc("Locked Liquidity", "$KZUKI liquidity is locked, which enables safe trading"),
   ]
   return (
      <>
         <div className="card-con">
            <div className="bg-wrap">
               <div className="container h-100">
                  <div className="row align-items-center h-100">
                     {cardArray.map((card, index) => (
                        <div className="col-lg-4 mb-2" key={index} >
                           <div className="card">
                              <div className="wrap">
                                 <div className="img-con">
                                    <img
                                       src="/asset/pumpkin.png"
                                       alt="pumpkin"
                                    />
                                 </div>
                                 <div className="text-wrap">
                                    <span className="h text-halo fw-bold">
                                      {card.title}
                                    </span>{" "}
                                    <br />
                                    <span>
                                       {card.text}
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <div className="col-12 hl">
            <img
               src="/asset/Halloween8.png"
               alt="lol"
               className="img-fluid position-fixed"
            />
         </div>
      </>
   );
}
