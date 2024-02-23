import { useRef, useContext, useEffect } from "react";

// context 
import { HomeContext } from "../Home";

// animation
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

// ui
import TextCapsule from "../../../components/UI/TextCapsule";

gsap.registerPlugin(ScrollTrigger);
const Introduction = () => {
    const { splitWords } = useContext(HomeContext);
    
    const introductionRef = useRef(null);
    const introductionWrapperRef = useRef(null);
    const introductionWordRef = useRef([]);
    introductionWordRef.current = [];

    useGSAP(() => {
        gsap.from(introductionWrapperRef.current, {
            scrollTrigger: {
                trigger: introductionWrapperRef.current,
                start: "top bottom",
                end: "top center",
                scrub: true,
            },
            opacity: 0,
            y: 50,
        });

        introductionWordRef.current.forEach((value, index) => {
            if(value.innerText.includes("Windu" || "Pratama,")) {
                gsap.to(introductionWordRef.current[index], {
                    color: 'blue'
                })
            }
        });
        
        gsap.to(introductionWordRef.current, {
            scrollTrigger: {
                trigger: introductionWrapperRef.current,
                start: "20% bottom",
                end: "center 60%",
                scrub: true,
            },
            opacity: 1,
            stagger: 1,
        });
    }, { scope: introductionRef });

    useEffect(() => {
        Array.from({length: 2}).forEach((_, index) => {
            introductionWordRef.current[index].style.color = "#0500EF"
        })
    }, []);

    const metadata = {
        title: "About",
        description: "👋🏻 Pratama, Windu is a passionate information system student 🧑🏻‍🎓 on the journey of web development 💻 with passion extends beyond just code, but also in crafting a visually stunning 💫 & seamless design 🌟."
    }

    return(
        <div ref={introductionRef} className="wrapper left-right-space flex-col h-auto gap-4">
            <TextCapsule>{ metadata.title }</TextCapsule>
            <div ref={ introductionWrapperRef } className="wrapper flex flex-wrap w-full">
                {
                    splitWords(
                        introductionWordRef,
                        metadata.description,
                        "text-6xl font-felidae tablet:text-5xl phone:text-5xl opacity-20",
                    )
                }
            </div>
        </div>
    );
}

export default Introduction;