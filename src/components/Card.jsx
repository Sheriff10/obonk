import React, { useEffect, useRef, useState } from "react";

// Custom Card component
function CardItem({ title, text }) {
  const cardRef = useRef();
  const [isCardIntersecting, setIsCardIntersecting] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Trigger when 30% of the element is visible
    };

    const cardObserver = new IntersectionObserver(
      ([entry]) => {
        setIsCardIntersecting(entry.isIntersecting);
      },
      options
    );

    if (cardRef.current) {
      cardObserver.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        cardObserver.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className={`card ${isCardIntersecting ? "slide-in" : ""}`} ref={cardRef}>
      <div className="wrap">
        <div className="img-con">
          <img src="/obonk/logo.png" alt="pumpkin" />
        </div>
        <div className="text-wrap">
          <span className="h text-halo fw-bold">{title}</span> <br />
          <span className="text-light">{text}</span>
        </div>
      </div>
    </div>
  );
}

export default function Card() {
  const cardArray = [
    {
      title: "Backed Community",
      text: "$OBK has strong community backing, Everything done is for the community by the community",
    },
    {
      title: "Based Dev",
      text: "Developers of $OBK are experienced in devving and an organized team.",
    },
    {
      title: "Locked Liquidity",
      text: "$OBK liquidity is locked, which enables safe trading",
    },
  ];

  return (
    <>
      <div className="card-con">
        <div className="bg-wrap">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              {cardArray.map((card, index) => (
                <div className="col-lg-4 mb-2" key={index}>
                  <CardItem title={card.title} text={card.text} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 hl">
        <img src="/asset/Halloween8.png" alt="lol" className="img-fluid position-fixed" />
      </div>
    </>
  );
}
