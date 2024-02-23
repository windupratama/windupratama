// Modules
import React, { forwardRef, useContext, useEffect, useRef } from "react";

// Context
import { CursorContext } from "../../App";

import CustomCursor from "./components/CustomCursor";
import CursorInfo from "./components/CursorInfo";

const blockedList = navigator.userAgent.match(
    /Android|iPhone|iPad|wearOS|watchOS/i
);


const centerElementPosition = (ref) => {
    // Ambil size panjang dan pendek element
    const elementSize = getCenterElementPosition(ref);

    // Kalkulasi bagi 2 width dan height element 
    ref.current.style.top = `-${ elementSize.width }px`;
    ref.current.style.left = `-${ elementSize.height }px`;
}


// Menghitung setengah panjang element width dan height
const getCenterElementPosition = (ref) => {
    return {
        width: ref.current.offsetWidth / 2,
        height: ref.current.offsetHeight / 2,
    }
}

// Mengubah posisi cursor custom menjadi sama dengan posisi cursor user dan menempatkannya di tengah
const moveCursor = (ref, cursorPositionState) => {
    // Manipulasi posisi cursor
    ref.current.style.transform = `translate(${cursorPositionState.x}px, ${cursorPositionState.y}px)`
    
    // Center posisi custom cursor dalam cursor user 
    centerElementPosition(ref);
}

const Cursor = () => {
    const { cursorPosition, cursorOnWindow, cursorIsIn } = useContext(CursorContext);

    const smallCursorRef = useRef(null);
    const bigCursorRef = useRef(null);
    
    useEffect(() => {
        // Check jika state cursorIsIn terjadi
        if(cursorIsIn) { moveCursor(bigCursorRef, cursorPosition); }

        moveCursor(smallCursorRef, cursorPosition)
        moveCursor(bigCursorRef, cursorPosition);
    }, [cursorIsIn, cursorPosition]);
    
    // Mengubah visibility cursor custom
    const hideCursor = [
        `${ blockedList ? 'hidden' : 'block' }`,
        `${ cursorOnWindow ? 'opacity-100' : 'opacity-0' }`
    ]
    .join(' ');

    // membuat cursor menjadi besar
    const largeCursor = [
        `${ cursorIsIn ? 'w-20' : 'w-4' }`,
        `${ cursorIsIn  ? 'w-20' : 'w-4' }`
    ]
    .join(' ');

    const CSS_CLASS_SMALL_CURSOR = `
        w-2 h-2 flex fixed aspect-square bg-yellow-450 mix-blend-difference pointer-events-none z-[1000] transform-gpu
    `;

    const CSS_CLASS_BIG_CURSOR = `
        flex fixed aspect-square bg-yellow-450 mix-blend-difference pointer-events-none z-[999] transition-[all] duration-700 ease-out transform-gpu
    `;

    return (
        <>
            {/* Small Cursor */}
            <CustomCursor 
                ref={ smallCursorRef } 
                className={ CSS_CLASS_SMALL_CURSOR } 
                additional={ hideCursor }
            ></CustomCursor>

            {/* Big Cursor */}
            <CustomCursor 
                ref={ bigCursorRef } 
                className={ CSS_CLASS_BIG_CURSOR } 
                additional={[ hideCursor, largeCursor ]}
            >
                <CursorInfo></CursorInfo>
            </CustomCursor>
        </>
    )
}

export default Cursor;