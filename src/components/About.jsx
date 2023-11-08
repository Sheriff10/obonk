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
                           ABOUT <br /> K AZUWEEN
                        </span>{" "}
                        <br />
                        <span className="text-light">
                           Kazukween is a mysterious and enigmatic Halloween
                           character, known for their spine-chilling presence
                           and eerie charm. With a striking appearance that
                           combines elegance with fright, Kazukween boasts
                           ghostly white skin, midnight-black cascading hair,
                           and piercing electric blue eyes that seem to radiate
                           an otherworldly light. They are always seen donning
                           dark, flowing robes adorned with silver-threaded
                           spiderwebs and hauntingly beautiful embroidery, their
                           face concealed behind a haunting mask.
                        </span>{" "}
                        <br /> <br />
                        <span className="text-light">
                           Kazukween is a playful and mischievous character,
                           embodying the spirit of Halloween with a penchant for
                           lighthearted pranks and spectral tricks. Despite
                           their haunting presence, they are not malevolent but
                           rather aim to spread the joy of the season with their
                           supernatural abilities, which include levitation and
                           the creation of ghostly illusions. This enigmatic
                           character adds an extra layer of mystique to the
                           spookiest time of the year, leaving a lasting
                           impression on all who encounter them.
                        </span>
                     </div>
                  </div>
                  <div className={`col-lg-6 zuki mb-3 `}>
                     <div
                        className={`img-wrap  text-center ${
                           isImgWrapIntersecting ? "slide-in" : ""
                        }`}
                        ref={imgWrapRef}
                     >
                        <img
                           src="/asset/kuzuki.png"
                           alt="Kuzuki"
                           className="img-fluid"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
