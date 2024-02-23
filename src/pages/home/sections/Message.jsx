import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Untitled = () => {    
    const untitledRef = useRef(null);
    const untitledTextRef = useRef([]);
    untitledTextRef.current = [];

    useGSAP(() => {
        document.fonts.ready.then(() => {
            const WINDOW_WIDTH = untitledRef.current.offsetWidth;
    
            untitledTextRef.current.forEach((_, index) => {
                const el = untitledTextRef.current[index];
    
                if(el && el.offsetWidth) {
                    const ELEMENT = el.offsetWidth;
                    const ENDPOINT = (ELEMENT - WINDOW_WIDTH)/2;
    
                    gsap.to(untitledTextRef.current[index], {
                        scrollTrigger: {
                        trigger: untitledRef.current,
                        start: '10% 95%',
                        end: 'top 15%',
                        scrub: true,
                        },
                        x: index % 2 ? -ENDPOINT : ENDPOINT,
                    });
                }
            });
        });
    }, { scope: untitledRef });



    const metadata = {
        contents: [
            "Less Art Is ⤷ Bore",
            "Less ✿ Art Is More",
        ]
    }

    return(
        <div ref={ untitledRef } className="wrapper left-right-full flex-col text-9xl">
            {
                metadata.contents.map(( value, index ) => {
                    const classes = `
                        font-felidae 
                        ${ index === 0 ? 'self-end' : 'self-start' }
                        ${ index === 1 && 'text-strongblue' }
                    `;

                    return <h1 key={ index } className={ classes } ref={(el) => untitledTextRef.current.push(el)}>
                        { value }
                    </h1>
                })
            }
        </div>
    );
};

export default Untitled;