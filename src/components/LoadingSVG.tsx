'use client';
import React, { useEffect, useRef } from 'react';
import { signIn, useSession } from 'next-auth/react'
import { gsap } from 'gsap';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc'
import { Button } from 'antd';
import { toast } from 'sonner'
import { FaNeos } from "react-icons/fa";

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
        gsap.fromTo(
            '#path',
            {},
            { fill: 'rgb(251, 240, 218)', duration: 2.5, delay: 0.5, }
        );
    });

    const socialAction = (action: string) => {
        void signIn(action, { redirect: false }).then((callback) => {
          if (callback?.error) {
            toast.error('Invalid credentials!')
          }
          if (callback?.ok) {
            // router.push('/deliver')
            toast.success('登入成功!')
          }
        })
      }

    const handleLogin = () => {
        signIn('google', {
            callbackUrl: '/protected',
        })
    }

    return (
        <div className="body h-[100vh]">
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
            <div className="h-[100%] w-[100%] bg-black text-[#fff] flex items-center justify-center">
                <p>Welcome View!</p>
                {/* <Button
                    className="h-[46px] w-[236px]"
                    onClick={() => socialAction('google')}
                >
                    <FcGoogle className="mr-2 h-4 w-4" /> Google 登入
                </Button> */}
                {/* <div>
                    <button onClick={handleLogin}>Login with Google</button>
                </div> */}
            </div>
            <div className="loading-page absolute top-0 left-0  bg-gradient-to-r from-[#2c5364] via-[#203a43] to-[#0f2027] h-[100%] w-[100%] flex flex-col items-center justify-center  gap-4 ">
                {/* <FaNeos id="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width={150}
                    height={150}
                    className="h-[150px] w-[150px] stroke-[#fff]   stroke-[3px] fill-none" /> */}
                <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 700 348" fill="none" data-loader="svg" className="h-[300px] w-[300px] "><path id='path' d="M322.825 57.1841C322.825 60.5587 319.907 61.3086 317.353 61.3086H195.156C182.024 61.3086 161.962 62.8084 148.1 65.433L139.346 49.3101C166.704 51.5598 193.332 52.3097 200.262 52.3097H277.958L290.36 36.5617C291.455 35.0619 294.008 32.0623 295.832 32.0623C297.656 32.0623 302.033 35.0619 302.762 35.8118L319.177 51.5598C321.366 53.8095 322.825 54.9344 322.825 57.1841ZM348.359 151.672C348.359 155.796 344.346 155.796 342.887 155.796H230.538C219.96 184.668 181.659 267.532 168.163 291.529C175.823 290.779 212.665 286.655 221.054 285.53C230.903 284.03 279.417 277.281 290.36 275.781C272.122 236.036 264.097 227.787 255.343 220.288L258.261 217.664C324.649 262.658 332.673 300.528 332.673 311.402C332.673 320.775 325.378 329.399 318.448 329.399C311.152 329.399 307.504 320.025 302.033 305.027C297.291 292.654 294.738 286.655 292.549 281.03C197.344 307.277 173.999 314.026 141.899 318.526C140.805 324.9 139.711 331.649 133.874 331.649C130.592 331.649 129.862 329.774 128.403 326.025L112.353 293.404C118.554 294.529 122.202 295.279 128.403 295.279C135.698 295.279 141.17 294.904 158.679 292.654C171.081 263.408 195.885 192.917 203.181 155.796H158.679C151.383 155.796 129.133 156.546 111.624 160.296L103.234 143.798C121.837 145.673 144.818 146.798 163.786 146.798H303.492L314.8 132.174C315.529 131.425 318.448 127.675 320.636 127.675C322.46 127.675 326.108 130.3 327.567 131.425L344.711 146.048C346.17 147.173 348.359 149.047 348.359 151.672ZM121.108 28.3128C121.108 32.8122 110.529 34.312 106.517 34.687C88.6432 73.682 78.0649 91.6797 67.4866 107.803L78.0649 112.677C81.7126 114.552 82.4421 116.052 82.4421 117.551C82.4421 121.301 78.7944 123.551 74.0524 126.55C74.0524 197.041 74.0524 230.787 74.4172 315.151C74.4172 317.776 75.1467 330.149 75.1467 332.774C75.1467 342.898 65.6627 347.397 59.4617 347.397C53.9901 347.397 50.3424 344.022 50.3424 336.523C50.3424 334.649 50.7072 325.275 51.072 323.4C52.8958 284.78 53.2606 262.283 54.7197 125.8C32.8335 155.422 15.3246 170.42 3.65204 180.918L0.733887 179.418C34.2926 136.674 59.8264 87.9302 80.983 37.3116C87.5489 21.1887 87.9136 17.8141 88.2784 0.191406L116.366 20.8137C119.284 23.0635 121.108 24.1883 121.108 28.3128Z" fill="none" stroke="currentColor" ></path>
                    <path id='path' d="M510.681 178.294C510.681 186.543 505.574 193.292 498.279 193.292C490.254 193.292 489.524 189.542 483.688 164.795C478.216 165.92 470.556 167.795 452.318 170.795V245.035C452.318 253.284 454.142 330.149 454.142 332.024C454.142 342.523 444.658 346.647 439.186 346.647C432.62 346.647 432.62 342.523 432.62 339.898C432.62 338.023 434.444 317.776 434.444 313.651C435.174 282.155 435.174 276.156 434.809 173.419C426.784 174.544 391.401 179.044 384.471 180.918C379.364 189.917 378.634 191.042 376.446 191.042C373.892 191.042 372.433 188.792 370.974 184.293L361.855 155.047C373.528 159.171 390.672 159.546 414.746 159.921C429.337 140.798 463.261 89.8049 470.556 73.307C473.474 66.183 473.474 63.9332 473.474 60.1837L501.561 78.1814C504.48 80.0562 504.48 80.0562 504.48 82.6808C504.48 84.9306 503.385 86.4303 501.561 86.8053C493.172 89.43 491.348 89.8049 486.971 90.1799C465.449 119.426 434.079 150.547 424.23 159.921C459.978 159.921 463.99 159.921 481.864 158.796C477.122 142.673 474.204 137.799 470.921 132.924V131.425C510.681 153.922 510.681 177.169 510.681 178.294ZM422.407 224.413C422.407 228.537 421.677 228.912 412.193 231.537C402.344 260.033 381.188 305.402 361.49 321.9L360.396 320.775C380.458 278.031 390.307 238.286 390.307 220.288C390.307 214.289 389.942 210.165 389.577 206.415L419.853 218.788C420.948 219.538 422.407 221.788 422.407 224.413ZM694.524 74.4319C694.524 78.1814 690.512 78.1814 689.053 78.1814H600.049C589.106 97.6789 578.892 116.052 556.642 143.798C596.401 143.048 620.111 141.923 644.186 139.299C641.268 135.549 625.583 119.051 621.935 115.302V113.427C635.432 118.676 653.305 126.175 664.978 134.424C668.626 137.049 686.134 149.797 686.134 162.546C686.134 173.419 679.933 177.544 673.732 177.544C664.613 177.544 660.965 169.67 658.412 163.67C654.764 155.047 651.117 149.422 647.469 144.548C632.513 148.672 555.912 162.546 538.768 166.295C535.85 175.294 535.12 177.169 531.108 177.169C528.554 177.169 526.366 176.044 524.542 170.795L512.869 140.423C526.366 144.923 536.944 144.923 551.9 144.173C562.843 123.926 571.597 95.0542 575.245 78.1814H563.937C556.642 78.1814 534.391 79.3063 516.882 82.6808L508.492 66.5579C527.095 68.0577 550.076 69.1826 569.044 69.1826H582.54C582.54 33.9371 582.54 28.3128 576.339 9.5652L609.533 19.314C613.181 20.4388 614.275 21.5637 614.275 23.4384C614.275 26.438 613.91 26.813 601.873 36.5617V69.1826H654.035L663.519 56.0592C666.802 51.5598 667.896 50.8099 669.72 50.8099C671.179 50.8099 671.909 51.5598 676.286 55.3093L690.876 68.8076C693.065 70.6824 694.524 71.8072 694.524 74.4319ZM699.266 317.026C699.266 323.4 694.159 326.025 692.336 327.15C681.757 333.524 654.4 335.024 641.268 335.024C609.533 335.024 604.426 329.399 604.061 310.277C603.332 290.779 603.697 203.04 602.238 185.793C601.873 179.793 600.414 174.919 597.496 167.045L631.054 177.919C632.513 178.294 635.432 179.793 635.432 182.043C635.432 183.918 634.337 185.043 633.243 186.168C631.784 187.667 623.759 194.417 622.3 195.541C622.3 216.539 621.57 237.536 621.57 258.533C621.57 269.032 621.935 289.654 622.3 299.403C622.3 306.527 622.665 314.401 640.538 314.401C672.273 314.401 672.273 313.651 683.216 264.908H685.04C685.77 271.282 689.782 300.528 691.241 305.027C691.971 307.652 693.43 308.777 695.983 311.027C697.807 312.526 699.266 314.401 699.266 317.026ZM466.544 23.4384C466.544 26.0631 464.72 27.1879 462.896 27.9379C459.613 29.4376 453.047 31.6874 450.494 32.4373C445.387 38.0615 442.104 42.561 432.62 55.3093C423.866 66.9328 418.029 72.9321 413.652 77.8064C425.325 85.3055 434.809 93.9294 434.809 105.178C434.809 114.177 430.067 117.176 423.501 117.176C417.3 117.176 416.57 115.677 407.816 101.803C394.684 80.0562 390.307 75.1818 377.175 62.8084V61.6835C383.012 63.5583 398.332 68.8076 410.004 75.5567C429.702 28.3128 433.35 19.314 431.161 2.81606L463.261 18.939C465.449 20.0639 466.544 21.1887 466.544 23.4384ZM588.012 184.293C588.012 186.168 586.553 188.042 585.094 188.792C580.352 191.792 579.987 191.792 577.798 194.042C566.855 268.282 541.321 318.526 473.474 335.773V333.524C519.8 313.651 555.912 254.034 555.912 188.792C555.912 178.294 555.182 175.294 554.453 170.42L583.634 179.418C587.647 180.543 588.012 183.543 588.012 184.293ZM511.41 254.784C511.41 264.533 504.844 269.407 499.373 269.407C489.889 269.407 488.43 259.658 487.7 255.534C484.782 240.161 479.311 225.913 469.827 213.539L470.921 211.664C489.889 222.913 511.41 235.286 511.41 254.784Z" fill="none" stroke="currentColor" ></path></svg>

                <div className="name-container">
                    <div className="logo-name font-mono text-white text-[20px] tracking-[12px] uppercase ml-[20px]">
                        nullx
                    </div>
                </div>

            </div>
        </div >
    );
}

export default LoadingSVG;
