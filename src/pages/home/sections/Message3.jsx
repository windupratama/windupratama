import { forwardRef } from "react";

const Message3 = forwardRef(function MessageComponent({_}, ref) {
    return (
        <div className="left-right-space">
            <h1 className="font-felidae text-9xl text-black">This is <span className="font-nyghtserif text-strongblue">just</span> the beginnings</h1>
        </div>
    );
});

export default Message3;