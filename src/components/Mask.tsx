import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Mask() {
    const img_1 = '/images2/2.jpg';
    const img_2 = '/images/2.jpg';
    const img_3 = '/images2/3.jpg';
    const container = useRef<HTMLDivElement>(null);
    const panel = useRef([]);
    panel.current = [];
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.defaults({
                toggleActions: 'restart pause resume pause',
                scroller: container.current,
            });
            gsap.utils.toArray(panel.current).forEach((panel, index) => {
                gsap.to(panel as Element, {
                    backgroundPosition: "-100px",
                    direction: 3,
                    scrollTrigger: {
                        trigger: panel as gsap.DOMTarget,
                        toggleActions: 'play reverse play reverse',
                    },
                });
                gsap.to(`.bullet-${index + 1}`, {
                    scale: 1.8,
                    scrollTrigger: {
                        trigger: panel as gsap.DOMTarget,
                        toggleActions: 'play reverse play reverse',
                    },
                });
            });
        });
        return () => ctx.revert();
    }, []);

    const slides = [
        {
            title: 'Day 1',
            place: 'NAYAPUL',
            color: 'text-red-600',
            img: img_1,
        },
        {
            title: 'Day 2',
            place: 'GHOREPANI',
            color: 'text-[#E9AB32]',
            img: img_2,
        },
        {
            title: 'Day 3',
            place: 'POONHILL',
            color: 'text-[#598FE1]',
            img: img_3,
        },
    ];

    const addToRef = (el: never) => {
        if (el && !panel.current.includes(el)) {
            panel.current.push(el);
        }
    };

    return (
        <div ref={container}  className="container bg-[#f2f2f2]">
            <div className="fixed flex flex-col gap-12 items-center justify-center h-screen w-[10%] ">
                {slides.map((bullet, index) => {
                    return (
                        <img
                            key={bullet.title}
                            className={`bullet-${index + 1} w-12 h-12 rounded-full object-cover`}
                            src={bullet.img}
                            alt=""
                        />
                    );
                })}
            </div>
            {slides.map((slide) => {
                return (
                    <section key={slide.title} className="h-screen flex snap-start">
                        <div className="w-[35%]">
                            <div className="flex flex-col leading-8 items-center justify-center h-full">
                                <h2 className={`${slide.color} text-[1.5rem] font-bold`}>{slide.title}</h2>
                                <h1 className="text-[2rem]">{slide.place}</h1>
                            </div>
                        </div>
                        <div className="w-[65%]">
                            <div
                                ref={addToRef}
                                className="mask"
                                style={{
                                    backgroundImage: `url(${slide.img})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    height: '100%',
                                }}
                            ></div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
}

export default Mask;
