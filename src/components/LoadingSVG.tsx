'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
function LoadingSVG() {
    useEffect(() => {
        gsap.fromTo(
            '.loading-page',
            { opacity: 1 },
            {
                opacity: 0,
                duration: 1.5,
                delay: 3,
                onComplete: () => {
                    document.querySelector('.loading-page')?.remove();
                },
            }
        );
        gsap.fromTo(
            '.logo-name ',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                delay: 0.5,
            }
        );
    });

    return (
        <div className="body h-[100vh]">
            <div className="h-[100%] w-[100%] bg-black text-[#fff] flex items-center justify-center">
                <p>Welcome View!</p>
            </div>
            <div className="loading-page absolute top-0 left-0  bg-gradient-to-r from-[#2c5364] via-[#203a43] to-[#0f2027] h-[100%] w-[100%] flex flex-col items-center justify-center  gap-4 ">
                <svg
                    id="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-[150px] w-[150px] stroke-[#fff]   stroke-[3px] fill-none"
                >
                    <path d="M415.4 512h-95.1L212.1 357.5v91.1L125.7 512H28V29.8L68.5 0h108.1l123.7 176.1V63.5L386.7 0h97.7v461.5zM38.8 35.3V496l72-52.9V194l215.5 307.6h84.8l52.4-38.2h-78.3L69 13zm82.5 466.6l80-58.8v-101l-79.8-114.4v220.9L49 501.9h72.3zM80.6 10.8l310.6 442.6h82.4V10.8h-79.8v317.6L170.9 10.8zM311 191.7l72 102.8V15.9l-72 53v122.7z" />
                </svg>
                <div className="name-container">
                    <div className="logo-name font-mono text-white text-[20px] tracking-[12px] uppercase ml-[20px]">
                        nullx
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoadingSVG;
