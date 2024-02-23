import { forwardRef } from "react";

const CursorInfo = forwardRef(function CursorInfoComponents({ children }, ref) {
    return (
        <p className="w-full h-full flex justify-center items-center">
            { children }
        </p>
    )
});

export default CursorInfo;