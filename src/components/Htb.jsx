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

    const boxObserver = new IntersectionObserver(
      ([entry]) => {
        setIsBoxIntersecting(entry.isIntersecting);
      },
      options
    );

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
    <div className={`box ${isBoxIntersecting ? "slide-in" : ""} h-100`} ref={boxRef}>
      <div className="img-wrap text-center">
        <img src={img} alt="Metamask" />
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
      img: "/asset/metamask.gif",
      title: "Create Metamask Wallet",
      text: "Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive HairyPlotterFTX",
    },
    {
      img: "/asset/eth.webp",
      title: "Send ETH to your wallet",
      text: "You can buy Ethereum (ETH) directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc.",
    },
    {
      img: "/asset/wallet.webp",
      title: "Connect your wallet",
      text: "Access your wallet by clicking ‘Connect to a wallet’ and selecting MetaMask.",
    },
    {
      img: "/asset/logo.png",
      title: "Swap ETH for $KZK",
      text: "You can start swapping as soon as you have ETH available! Press ‘Select a token’ and enter the token address or search for it on the tokens list.",
    },
  ];

  return (
    <div className="buy">
      <div className="bg-wrap">
        <div className="container">
          <div className="head py-3 text-center text-light">
            <span className="head">
              Buy <span className="text-halo"> KAZUWEEN </span> before it's too late
            </span>
          </div>
          <div className="row">
            {boxArr.map((box, index) => (
              <div className="col-lg-3 col-md-4 px-lg-3 mb-3" key={index}>
                <BoxItem img={box.img} title={box.title} text={box.text} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
