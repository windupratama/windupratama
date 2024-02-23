import { forwardRef, useEffect } from "react";

const ListBox = forwardRef(function ListBoxComponents({index = 0, title, description, backgroundColor, backgroundOpacity, textColor, numbering = false}, ref = null) {
    // check if description is array for multiple iteration
    const descriptionIsArray = Array.isArray(description);

    const PARENT_CSS_CLASS = `
        p-12 wrapper flex-col w-full bg-white bg-opacity-20 rounded-2xl gap-4
        ${ backgroundColor ||  'bg-white' }
        ${ backgroundOpacity || 'bg-opacity-100' }
    `

    const TITLE_CSS_CLASS = `
        font-felidae text-6xl phone:text-4xl
        ${textColor || `text-black`}
    `;

    const DESCRIPTION_CSS_CLASS = `
        font-helvetica text-xl phone:text-lg
        ${textColor || `text-black`}
    `;

    return (
        <li ref={ref} className={ PARENT_CSS_CLASS }>
            <h1 className={ TITLE_CSS_CLASS }>
                { numbering ? "0" + (index + 1) + ". " : "" } { title }
            </h1>
            <p className={ DESCRIPTION_CSS_CLASS }>
                { descriptionIsArray ? description[index] : description }
            </p>
        </li>
    );
});

export default ListBox;