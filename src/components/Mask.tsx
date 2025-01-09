import React from 'react';

function Mask() {
    const img_1 = '/images/1.jpg';
    const img_2 = '/images/2.jpg';
    const img_3 = '/images/3.jpg';
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

    return (
        <div className="container bg-[#f2f2f2]">
            <div className="fixed flex flex-col gap-12 items-center justify-center h-screen w-[10%] ">
                {slides.map((bullet, index) => {
                    return (
                        <img
                            className={`bullet-${index + 1} w-12 h-12 rounded-full object-cover`}
                            src={bullet.img}
                            alt=""
                        />
                    );
                })}
            </div>
            {slides.map((slide) => {
                return (
                    <section className="h-screen flex snap-start">
                        <div className="w-[35%]">
                            <div className="flex flex-col leading-8 items-center justify-center h-full">
                                <h2 className={`${slide.color} text-[1.5rem] font-bold`}>{slide.title}</h2>
                                <h1 className="text-[2rem]">{slide.place}</h1>
                            </div>
                        </div>
                        <div className="w-[65%]">
                            <div
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
