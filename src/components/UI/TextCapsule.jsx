import React from "react";

const TextCapsule = React.forwardRef(function TextCapsuleComponents({ capsuleColor = null, textColor = null, opacity = null, children }, ref) {
    const TEXTCAPSULE_CSS_CLASS = 
        `p-1 px-4 rounded-full w-fit uppercase
        ${ capsuleColor || 'bg-blue-200' } 
        ${ textColor || 'text-strongblue' } 
        ${ opacity || 'bg-opacity-40' }`
    ;

    return <h1 ref={ref} className={ TEXTCAPSULE_CSS_CLASS }>{ children }</h1>
})

export default TextCapsule;