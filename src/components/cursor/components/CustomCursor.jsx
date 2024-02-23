import { forwardRef } from "react";

const CustomCursor = forwardRef(function CustomCursor({ className, additional, children }, ref) {
    const additionals = typeof(additional) === Array ? additional.join( '') : additional;

    return (
        <div
            ref={ ref }
            className={[ className, additionals ].join(' ')}
        >
            { children }
        </div>
    );
});

export default CustomCursor;