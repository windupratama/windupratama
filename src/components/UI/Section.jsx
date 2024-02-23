import { forwardRef } from "react";

const Section = forwardRef(function SectionComponents({ children }, ref) {

    return (
        <div ref={ ref } className="wrapper left-right-space flex-col bg-strongblue rounded-2xl h-auto z-10 py-8">
            <div className="wrapper justify-center mb-24">
                <div className="w-[10vw] h-1 bg-white rounded-2xl"></div>
            </div>

            <div className="wrapper left-right-full flex-col gap-64">
                { children }
            </div>

            <div className="wrapper justify-center mt-24">
                <div className="w-[10vw] h-1 bg-white rounded-2xl"></div>
            </div>
        </div>
    )
});

export default Section;