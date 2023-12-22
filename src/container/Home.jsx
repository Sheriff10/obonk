import React from "react";
import About from "../components/About";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Gallery from "../components/gallery";
import Header from "../components/Header";
import Htb from "../components/Htb";
import Intro from "../components/Intro";
import Roadmap from "../components/Roadmap";

export default function Home() {
   return (
      <>
         <Header />
         <Intro />
         <About />
         <Card />
         <Htb />
         {/* <Roadmap /> */}
         {/* <Gallery /> */}
         <Footer />
      </>
   );
}
