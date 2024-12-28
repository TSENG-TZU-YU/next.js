'using client';

import React from 'react';

import Lenis from '@studio-freight/lenis';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import Column from 'antd/es/table/Column';
import { time } from 'console';

function ScrollPanels() {
    const img1 = '/images/1.jpg';
    const img2 = '/images/2.jpg';
    const img3 = '/images/3.jpg';
    const img4 = '/images/4.jpg';
    const img5 = '/images/5.jpg';
    const img6 = '/images/6.jpg';
    const img7 = '/images/7.jpg';
    const img8 = '/images/8.jpg';

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const dom = {
            column: document.querySelector('.section-col'),
            colummWrops: document.querySelectorAll('.section-col .column-wrap'),
            items: document.querySelectorAll('.section-cols .col-item'),
        }
        let lenis: any;
        const SmoothScroll = () => {
            lenis = new Lenis({
                lerp: 0.1, //滾動速度的平滑度
                smoothWheel: false,
            });

            const ScrollFn = (time: any) => {
                lenis.raf(time)
            }
            requestAnimationFrame(ScrollFn);
        }
        const ScrollAni = () => {
            gsap
                .timeline({
                    scrollTrigger: {
                        start: 0,
                        end: "max",
                        scrub: true,
                    }
                })
                .addLabel("start", 0)
                .to(
                    dom.column,
                    {
                        ease: "none",
                        startAt: { scale: 1.2 },
                        scale: 1,
                    },
                    'start'
                )
                .to(
                    dom.items,
                    {
                        scrollTrigger: {
                            start: 0,
                            end: 'top top',
                            scrub: true
                        },
                        ease: 'power1.inOut',
                        startAt: {
                            opacity: 0,
                            filter: 'brightness(0%)',
                        },
                        opacity: 1,
                        filter: 'brightness(100%)',
                        yoyo: true,
                        repeat: 1,
                    })
                .to(
                    dom.colummWrops,
                    {
                        ease: 'none',
                        yPercent: (pos) => pos * -15
                    },
                    'start'
                )
        }
        SmoothScroll(),
            ScrollAni()
    })
    return (
        <div>
            <section className="leading-none static top-0 w-full min-h-screen bg-[#171717] mb-[250vh] h-screen flex flex-col text-center items-center justify-center pt-32 pb-8">
                <h2 className="section-title  text-white">
                    PANELS <br />
                    effect
                </h2>
                <p className="m-0 max-w-[400px] text-white">BUILT USING NEXT.JS AND GSAP</p>
                <p className="m-0 max-w-[400px] mt-auto text-red-500 ">
                    <span>Scroll</span>
                </p>
            </section>
            <section className="section-col leading-none top-0 min-h-screen bg-[#171717] fixed left-0 right-0 bottom-0 z-[-1] w-full h-screen">
                <div className="columns w-full relative flex justify-center gap-[2.5vw] h-full -rotate-45 items-center bg-black ">
                    <div className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
                        <div className="column relative block">
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img1} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img3} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img5} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img7} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img2} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img4} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img6} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img8} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
                        <div className="column relative block">
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img1} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img2} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img3} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img4} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img5} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img6} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img7} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img8} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="column-wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1">
                        <div className="column relative block">
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img8} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img7} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img6} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img5} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img4} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img3} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img2} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img1} alt="" />
                            </div>
                            <div className="col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0 ">
                                <img className="col-img" src={img8} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section></section>
        </div>
    );
}

export default ScrollPanels;
