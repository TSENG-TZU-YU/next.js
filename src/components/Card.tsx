import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { text } from 'stream/consumers';
import { FaAppleAlt } from 'react-icons/fa';
import { GiCutLemon } from 'react-icons/gi';
import { GiStrawberry } from 'react-icons/gi';
import { PiOrangeSliceLight } from 'react-icons/pi';

gsap.registerPlugin(ScrollTrigger);

function Card() {
    const [selected, setSelected] = React.useState(0);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    cardsRef.current = [];
    const bg = useRef<HTMLDivElement>(null);

    const apple = '/images3/apple.png';
    const berry = '/images3/berry.png';

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray(cardsRef.current).forEach((card, index) => {
                if (`card-${index}` === `card-${selected}`) {
                    gsap.to(bg.current, {
                        backgroundColor: cards[index].bgColor,
                        duration: 0.5,
                        ease: 'none',
                    });
                    gsap.to('.img', {
                        top: '-140',
                        delay: 0.2,
                        duration: 0.5,
                        ease: 'none',
                    });
                }
            });
        });
        console.log(ctx);

        return () => ctx.revert();
    }, [selected]);

    const cards = [
        {
            title: 'APPLE',
            bgCardColor: 'bg-[#CC1918]',
            bgColor: '#ff7070',
            textColor: 'text-white',
            icon: <FaAppleAlt />,
            img: apple,
        },
        {
            title: 'LEMON',
            bgCardColor: 'bg-[#fdff8f]',
            bgColor: '#f7e35b',
            textColor: 'text-[#85822d]',
            icon: <GiCutLemon color="black" />,
            img: '',
        },
        {
            title: 'BERRY',
            bgCardColor: 'bg-[#FF2557]',
            bgColor: '#FF6286',
            textColor: 'text-white',
            icon: <GiStrawberry />,
            img: berry,
        },
        {
            title: 'ORANGE',
            bgCardColor: 'bg-[#FFBA36]',
            bgColor: '#f4a308',
            textColor: 'text-white',
            icon: <PiOrangeSliceLight color="black" />,
            img: '',
        },
    ];
    const handleClick = (index: number) => {
        setSelected(index);
    };
    const addToRef = (el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <div ref={bg} className="h-screen flex items-center justify-center ">
            {cards.map((card, key) => {
                return (
                    <div
                        ref={addToRef}
                        key={key}
                        className={`card-${key} ${
                            key === selected ? 'w-[550px]' : 'w-20'
                        } h-96 w-20 cursor-pointer transition-all ease-in-out duration-[1000ms]`}
                        onClick={() => handleClick(key)}
                    >
                        <Cards card={card} selected={selected} index={key} />
                    </div>
                );
            })}
        </div>
    );
}

export default Card;

const Cards = ({ card, selected, index }: { card: any; selected: number; index: number }) => {
    return (
        <div className="h-full relative">
            <div className={`${card.bgCardColor} z-10 relative h-full rounded-xl flex items-center justify-center `}>
                <span className="text-white text-[1.5rem] absolute top-5 left-5 ">{card.icon}</span>
                <h1
                    className={`${card.textColor} ${
                        selected === index ? 'rotate-0 text-[7rem]' : 'rotate-90 text-[2rem]'
                    } font-bold text-[2rem] transition-all ease-in-out  duration-[1000ms]`}
                >
                    {card.title}
                </h1>
            </div>
            <img
                src={card.img}
                alt=""
                className={`img z-1 ${selected === index ? 'opacity-1' : 'opacity-0'} w-60 absolute top-0 `}
            />
        </div>
    );
};
