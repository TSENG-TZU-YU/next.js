'use client';
import React from 'react';
import ScrollPanels from '@/components/ScrollPanels';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function OnScrollPanels() {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
      const tl: GSAPTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".container",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    
      gsap.utils.toArray<HTMLElement>(".layer").forEach((layer, index) => {
        const depth = layer.dataset.depth as string;
    
        const data = layer.getBoundingClientRect();
    
        const move = data.y * parseInt(depth, 10);
    
        tl.to(layer, { y: -move, ease: "none" }, 0);
      });
    
      gsap.to(".windmill-top", {
        rotation: "360deg",
        transformOrigin: "50% 68%",
        repeat: -1,
        duration: 20,
      });

      gsap.utils.toArray<HTMLElement>(".leaf").forEach((leaf, index) => {
        gsap.to(leaf, {
          x: -1000,
          y: 180,
          rotate: (index + 1) * 50,
          duration: 10,
        });
      });
    
      gsap.utils.toArray<HTMLElement>(".cloud").forEach((cloud, index) => {
        gsap.to(cloud, {
          y: 10,
          x: 10,
          repeat: -1,
          duration: (index + 30) / (5 + index),
          yoyo: true,
          delay: 1 + index,
        });
      });
    });

    
    return (
      <>
        {/* <div className=" mx-auto h-screen w-screen bg-[#F3E0B5]"> */}
          <ScrollPanels />
        {/* </div> */}
        {/* <div className="relative h-screen bg-white "></div> */}
      </>
    );
}
