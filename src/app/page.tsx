import React from "react"
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service"
import Financial from "./components/Financial";
// import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";




export default function Home() {
  return (
    <>
    <div className="w-full">
    <Hero />
    <About />
    <Service />
    <Financial />
    <WhyChooseUs />
    {/* <Testimonial /> */}

    </div>
    </>
  );
}
