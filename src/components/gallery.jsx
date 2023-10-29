import React from "react";

export default function Gallery() {
   const img = [
      "/asset/g1.jpeg",
      "/asset/g2.jpeg",
      "/asset/g3.jpeg",
      "/asset/g4.jpeg",
      "/asset/g5.jpeg",
   ];
   return (
      <div className="gallery py-5 mt-2">
         <div className="container">
            <div className="row">
               {img.map((image, index) => (
                  <div className="col-lg-4 col-6 gap-3 mb-3 text-center" key={index}>
                     <img
                        src={image}
                        alt="KUZUKI"
                        className="img-fluid"
                     />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
