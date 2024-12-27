'use client';
import React from 'react';
import FallSVG from '@/components/FallSVG';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoadingSVG from '@/components/LoadingSVG';
import Link from 'next/link';

export default function Tosvg() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl: GSAPTimeline = gsap.timeline({
      delay: 5,
      scrollTrigger: {
        trigger: ".test",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.utils.toArray<HTMLElement>(".layer").forEach((layer) => {
      const depth = layer.dataset.depth as any;

      const data = layer.getBoundingClientRect();

      const move = data.y * depth;

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
      <nav className="bg-[#333] text-white p-[1rem] max-w-screen flex h-[70px] items-center">
        <div className="flex justify-star w-[65%] "></div>
        <ul className="flex justify-around list-none gap-3 w-[30%]">
          <li>
            <Link href="/animation">Home</Link>
          </li>
          <li>
            <Link href="/book">AllBooks</Link>
          </li>
        </ul>
        <div className="flex justify-around w-[10%]  ">
          <div className=" p-3 list-none rounded-full bg-[#2c5364]  w-[70px]">login</div>
        </div>
      </nav>
      <div className="test mx-auto h-screen w-screen bg-[#F3E0B5]">
        <FallSVG />
        <LoadingSVG />
      </div>
      <div className="relative h-screen bg-white "></div>
    </>
  );
}
