import React, { useEffect, useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// TODO: Prototype 
const Modal = React.forwardRef(function ModalComponents({title, description, buttonTitle, positionY, positionX, duration = null}, ref) {
    const [ isClosed, toggleIsClosed ] = useToggle();

    const MODAL_CSS_CLASS = `
        wrapper w-fit h-fit p-4 m-4 fixed right-0 z-[997] bg-strongblue text-white flex-col gap-4 rounded-xl border border-white
        ${positionY  || 'bottom-0'}
        ${positionX || 'right-0'}
    `;

    function animate() {
        gsap.to(ref.current, {
            opacity: 0,
            onComplete: () => {
                gsap.set(ref.current, {
                    display: 'none'
                });
            }
        })
    }

    useEffect(() => { if(isClosed) { animate(); }}, [isClosed]);

    useGSAP(() => {
        gsap.from(ref.current, {
            opacity: 0,
            duration: 1,
        });
    });
    
    if(duration !== null) {
        setTimeout(() => {
            if(ref.current) {
                toggleIsClosed();
            }
        }, duration)
    }

    return (
        <div ref={ref} className={ MODAL_CSS_CLASS }>
            <div className="w-full h-full text-2xl">
                {title}
            </div>
            <div className="w-full h-full text-lg">
                {description}
            </div>
            <div className="w-full h-full">
                <button 
                    onClick={() => toggleIsClosed()} 
                    className="text-black px-2 w-fit bg-white rounded-lg reset-format"
                >
                    {buttonTitle || 'Accept'}
                </button>
            </div>
        </div>
    );
}); 

export default Modal;