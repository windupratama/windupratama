import { Link } from "react-router-dom";
import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import { TfiArrowRight as ArrowRight } from "react-icons/tfi"
import { useToggle } from "../../hooks/useToggle";


const LinkBox = forwardRef(function LinkBoxComponents({index = 0, title, link, target = "_self", numbering = false}, ref) {
    // check jika link adalah array untuk iterasi
    const linkIsArray = Array.isArray(link);

    const [ cursor, setCursor ] = useState({
        x: undefined,
        y: undefined,
    });

    const [ isHover, toggleIsHover ] = useToggle();

    const LIST_CSS_CLASS = `
        wrapper justify-between font-felidae py-12 phone:py-4 tablet:py-5 text-6xl tablet:text-5xl phone:text-4xl
        border-b border-black bg-gradient-to-t from-strongblue to-strongblue bg-from-x hover:bg-to-full hover:text-white bg-no-repeat 
        transition-[background-size, color, border] duration-500 ease hover:pl-12

        ${linkIsArray ? 'bg-top' : 'bg-bottom'}
    `;

    const ARROW_CSS_CLASS = `
        reset-format duration-200 ease
        ${isHover ? 'rotate-0' : 'rotate-[-45deg]'}
    `;

    // Melacak posisi cursor user
    function checkCursorPosition(event) {
        return {
            cursorPositionX: event.clientX,
            cursorPositionY: event.clientY,
        }
    }

    const func = (event) => {
        toggleIsHover()

        const { cursorPositionX, cursorPositionY } = checkCursorPosition(event);
        setCursor({
            x: cursorPositionX,
            y: cursorPositionY
        })
    }

    return (
        <Link
            reloadDocument
            ref={ ref }
            to={ linkIsArray ? link[index] : link }
            target={ target }
            onMouseOver={ func }
            onMouseOut={ func }
        >
            <li className={ LIST_CSS_CLASS }>
                { numbering ? ("0" + (index + 1) + ". ") : "" }{ title } 
                <ArrowRight className={ ARROW_CSS_CLASS }/>
            </li>
        </Link>
    );
});

export default LinkBox;