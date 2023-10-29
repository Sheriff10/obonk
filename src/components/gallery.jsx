import React from "react";

export default function Gallery() {
   const img = [
      "/asset/g5.jpeg",
      "/asset/g1.jpeg",
   ];
   return (
      <div className="gallery py-5 mt-2">
         <div className="container">
            <div className="row">
               {img.map((image, index) => (
                  <div className="col-lg-6 col-12 gap-3 mb-3 text-center" key={index}>
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
