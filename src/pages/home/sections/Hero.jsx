import { useRef, useContext } from "react";

// context
import { HomeContext } from "../Home";

// animation
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ui
import TextCapsule from "../../../components/UI/TextCapsule";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
    const { splitLetters } = useContext(HomeContext);

    const heroRef = useRef(null);
    const mainTitleWrapperRef = useRef(null)
    
    const mainTitleRef = useRef(null);
    mainTitleRef.current = [];

    const informationRef = useRef([]);
    informationRef.current = [];

    useGSAP(() => {
        gsap.from(mainTitleRef.current, {
            opacity: 0,
            y: -100,
            duration: 0.4,
            stagger: 0.2,
        });

        // Check if the font is loaded
        document.fonts.ready.then(() => {
            const WINDOW_WIDTH = heroRef.current.offsetWidth;
            const el = mainTitleWrapperRef.current;
            
            if(el && el.offsetWidth) {
                const MAIN_TITLE_WIDTH = el.offsetWidth;
                const MAIN_TITLE_ENDPOINT = MAIN_TITLE_WIDTH - WINDOW_WIDTH;
    
                gsap.to(mainTitleWrapperRef.current, {
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: '180% bottom',
                        scrub: true,            
                    },
                    x: -MAIN_TITLE_ENDPOINT
                });  
            } 
        });

        gsap.from(informationRef.current, {
            opacity: 0,
            delay: 0.4,
            y: -10,
            stagger: 0.2,
            clearProps: 'opacity y',
        });
    }, {scope: heroRef});

    const metadata = {
        title: "Windu-Pratama",
        description: [
            "Web Developer",
            "UI/UX",
            "University Student",
        ],
        scrollInformation: "Scroll Down ↴"
    }

    return(
        <div ref={heroRef} className="wrapper left-right-full flex-col h-svh justify-end">
            <div ref={mainTitleWrapperRef} className="wrapper">
                {
                    splitLetters(
                        mainTitleRef,
                        metadata.title,
                        "h-fit font-felidae text-main-title leading-[25.5vw] desktop:leading-[32.5rem] font-thin uppercase m-0 text-strongblue text-center pointer-events-none select-none"
                    )
                }
            </div>

            <div className="wrapper flex-row left-right-space py-8 items-center justify-between">
                <div className="wrapper flex-row w-fit gap-4 reset-format">
                    {
                        metadata.description.map((value) => {
                            return (
                                <TextCapsule ref={(el) => informationRef.current.push(el)} key={ value }>{ value }</TextCapsule>
                            );
                        })
                    }
                </div>
                <p ref={(el) => informationRef.current.push(el)} className="uppercase">{ metadata.scrollInformation }</p>
            </div>
        </div>
    );
}

export default Hero;