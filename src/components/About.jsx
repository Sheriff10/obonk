import React, { useEffect, useRef, useState } from "react";

export default function About() {
   const glassRef = useRef();
   const imgWrapRef = useRef();
   const [isGlassIntersecting, setIsGlassIntersecting] = useState(false);
   const [isImgWrapIntersecting, setIsImgWrapIntersecting] = useState(false);

   useEffect(() => {
      const glassObserver = new IntersectionObserver(
         ([entry]) => {
            setIsGlassIntersecting(entry.isIntersecting); // Trigger when 30% of the element is visible
         },
         { threshold: 0.3 }
      );

      const imgWrapObserver = new IntersectionObserver(([entry]) => {
         setIsImgWrapIntersecting(entry.isIntersecting);
      });

      if (glassRef.current) {
         glassObserver.observe(glassRef.current);
      }

      if (imgWrapRef.current) {
         imgWrapObserver.observe(imgWrapRef.current);
      }

      return () => {
         if (glassRef.current) {
            glassObserver.unobserve(glassRef.current);
         }

         if (imgWrapRef.current) {
            imgWrapObserver.unobserve(imgWrapRef.current);
         }
      };
   }, []);

   return (
      <div className="about py-5" id="about">
         <div className="bg-wrap">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6 mb-3">
                     <div
                        className={`text-wrap glass ${
                           isGlassIntersecting ? "slide-in" : ""
                        }`}
                        ref={glassRef}
                     >
                        <span className="h">
                           {" "}
                           ABOUT OBONK ($OBK)
                        </span>{" "}
                        <br />
                        <span className="text-light fs-1">
                           Here's a F**kin intro about OBONK. <br /> IT'S A FUCKIN gEM DiCkHEad
                        </span>{" "}
                        <br /> <br />
                     </div>
                  </div>
                  <div className={`col-lg-6 zuki mb-3 `}>
                     <div
                        className={`img-wrap  text-center ${
                           isImgWrapIntersecting ? "slide-in" : ""
                        }`}
                        ref={imgWrapRef}
                     >
                        {/* <img
                           src="/asset/kuzuki.png"
                           alt="Kuzuki"
                           className="img-fluid"
                        /> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
