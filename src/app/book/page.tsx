'use client';

import { useState } from "react";


export default function Book() {
    const [test, setTest] = useState('')
    return (
        <div>
            <h1 className=' mt-2 font-bold text-[30px]' >測試</h1>
            <input type="text"
                className="border border-black" value={test} onChange={(e) => {
                    const value = e.target.value.trim().toUpperCase()
                    setTest(value)
                }} />
        </div>
    );
}
