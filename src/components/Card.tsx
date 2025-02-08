import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { text } from 'stream/consumers';
import { FaAppleAlt } from "react-icons/fa";
import { GiCutLemon } from "react-icons/gi";
import { GiStrawberry } from "react-icons/gi";
import { PiOrangeSliceLight } from "react-icons/pi";

gsap.registerPlugin(ScrollTrigger);

function Card() {
    const [selected, setSelected] = React.useState(0);
    const cards = [
        {
            title: "APPLE",
            bgCardColor: "bg-[#CC1918]",
            bgColor: "#ff78070",
            textColor: "text-white",
            icon: <FaAppleAlt />,
            img: ""
        },
        {
            title: "LEMON",
            bgCardColor: "bg-[#fdff8f]",
            bgColor: "#fdff8f",
            textColor: "text-[#85822d]",
            icon: <GiCutLemon  color='black'/>,
            img: ""
        },
        {
            title: "BERRY",
            bgCardColor: "bg-[#FF2557]",
            bgColor: "#FF2557",
            textColor: "text-white",
            icon: <GiStrawberry/>,
            img: ""
        },
        {
            title: "ORANGE",
            bgCardColor: "bg-[#FFBA36]",
            bgColor: "#FFBA36",
            textColor: "text-white",
            icon: <PiOrangeSliceLight  color='black'/>,
            img: ""
        }
    ]
    const handleClick = (index: number) => {
        setSelected(index)
    }

    return <div className="h-screen flex items-center justify-center bg-green-100">
        {cards.map((card, key) => {
            return <div key={key} className={`${key === selected ? "w-[550px]" : "w-20"} h-96 w-20 cursor-pointer transition-all ease-in-out duration-[1000ms]`} onClick={() => handleClick(key)}>
                <Cards card={card} selected={selected} index={key} />
            </div>
        })}
    </div>

}

export default Card;

const Cards = ({ card, selected, index }: { card: any, selected: number, index: number }) => {
    return (
        <div className='h-full relative'>
            <div className={`${card.bgCardColor} h-full rounded-xl flex items-center justify-center`}>
                <span className='text-white text-[1.5rem] absolute top-5 left-5'>{card.icon}</span>
                <h1 className={`${card.textColor} ${selected === index ? "rotate-0 text-[7rem]" : "rotate-90 text-[2rem]"} font-bold text-[2rem] transition-all ease-in-out  duration-[1000ms]`}>{card.title}</h1>
            </div>
        </div>
    )
}