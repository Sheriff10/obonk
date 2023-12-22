import React, { useEffect, useRef, useState } from "react";

// Custom Box component
function BoxItem({ img, title, text }) {
   const boxRef = useRef();
   const [isBoxIntersecting, setIsBoxIntersecting] = useState(false);

   useEffect(() => {
      const options = {
         root: null,
         rootMargin: "0px",
         threshold: 0.3, // Trigger when 30% of the element is visible
      };

      const boxObserver = new IntersectionObserver(([entry]) => {
         setIsBoxIntersecting(entry.isIntersecting);
      }, options);

      if (boxRef.current) {
         boxObserver.observe(boxRef.current);
      }

      return () => {
         if (boxRef.current) {
            boxObserver.unobserve(boxRef.current);
         }
      };
   }, []);

   return (
      <div
         className={`box ${isBoxIntersecting ? "slide-in" : ""} h-100`}
         ref={boxRef}
      >
         <div className="img-wrap text-center p-5">
            <img src={img} alt="Metamask" className="rounded-circle p-3" />
         </div> 
         <div className="body">
            <span className="h">{title}</span> <br />
            <span>{text}</span>
         </div>
      </div>
   );
}

export default function Htb() {
   const boxArr = [
      {
         img: "data:image/jpeg;base64,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",
         title: "Create Phantom Wallet",
         text: "Create a Phantom Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive $OBK",
      },
      {
         img: "/obonk/sol.png",
         title: "Send SOL to your wallet",
         text: "You can buy Solana (SOL) directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc.",
      },
      {
         img: "/asset/wallet.webp",
         title: "Connect your wallet",
         text: "Go to Raydium.io, launch app, Go to trade and swap $SOL to $OBK",
      },
      {
         img: "/obonk/logo.png",
         title: "Swap ETH for $OBK",
         text: "You can start swapping as soon as you have SOL is available! Press ‘Select a token’ and enter the token address or search for it on the tokens list.",
      },
   ];

   return (
      <div className="buy">
         <div className="bg-wrap">
            <div className="container">
               <div className="head py-3 text-center text-light">
                  <span className="head">
                     Buy <span className="text-halo"> OBONK </span> before it's
                     too late
                  </span>
               </div>
               <div className="row">
                  {boxArr.map((box, index) => (
                     <div
                        className="col-lg-3 col-md-4 px-lg-3 mb-3"
                        key={index}
                     >
                        <BoxItem
                           img={box.img}
                           title={box.title}
                           text={box.text}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
