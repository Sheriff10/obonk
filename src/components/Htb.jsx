import React from "react";

export default function Htb() {
   const dum = [1, 2, 3, 4];
   const boxFunc = (img, title, text) => {
    return {img, title, text}
   }
   const boxArr = [
    boxFunc("/asset/metamask.gif", "Create Metamask Wallet", "Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive HairyPlotterFTX"),
    boxFunc("/asset/eth.webp", "Send ETH to your wallet", "You can buy Ethereum (ETH) directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc."),
    boxFunc("/asset/wallet.webp", "Connect your wallet", "Access your wallet by clicking ‘Connect to a wallet’ and selecting MetaMask."),
    boxFunc("/asset/logo.png", "Swap ETH for $KZK", "You can start swapping as soon as you have ETH available! Press ‘Select a token’ and enter the token address or search for it on the tokens list."),
   ]
   return (
      <div className="buy">
         <div className="bg-wrap">
            <div className="container">
               <div className="head py-3 text-center text-light">
                  <span className="head">
                     Buy <span className="text-halo"> KAZUKI </span> before it's
                     too late
                  </span>
               </div>
               <div className="row">
                  {boxArr.map((box, index) => (
                     <div className="col-lg-3 col-md-4 px-lg-3 mb-3" key={index}>
                        <div className="box h-100">
                           <div className="img-wrap text-center">
                              <img src={box.img} alt="Metamask" />
                           </div>
                           <div className="body">
                              <span className="h">{box.title}</span>{" "}
                              <br />
                              <span>
                                 {box.text}
                              </span>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
