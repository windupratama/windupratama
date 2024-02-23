import React, { useContext, useRef } from "react";
import { HomeContext } from "../Home";

import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TextCapsule from "../../../components/UI/TextCapsule";

gsap.registerPlugin(ScrollTrigger);

const Skills = React.forwardRef(function SkillsComponents(_, ref) {
    const { splitWords, descriptionBoxs } = useContext(HomeContext);

    const skillRef = useRef(null);
    const skillTitleWrapperRef = useRef(null);
    const skillListWrapperRef = useRef(null);

    
    const skillWordRef = useRef(null);
    skillWordRef.current = [];

    const skillListRef = useRef([]);
    skillListRef.current = [];

    useGSAP(() => {
        gsap.from(skillWordRef.current, {
            scrollTrigger: {
                trigger: skillTitleWrapperRef.current,
                start: "top bottom",
                end: "50% 60%",
                scrub: true
            },
            opacity: 0,
            y: 100,
            stagger: 0.5,
        });

        gsap.from(skillListRef.current, {
            scrollTrigger: {
                trigger: skillListWrapperRef.current,
                start: "top bottom",
                end: "top bottom"
            },
            opacity: 0,
            y: 100,
            stagger: 0.4,
            clearProps: "all",
        });
    }, {scope: skillRef});

    // contains skills list information
    const metadata = {
        title: "Fundamental",
        boxTitle: [
            "Web Development", 
            "UI/UX", 
            "Graphic Design", 
        ],
        boxDescription: [
            "Developing website using HTML, CSS, Javascript, and framework like React.js, GSAP, and Tailwind CSS.",
            "Creating minimalistic vagant display of visuals with ease of use for enduser.",
            "Creating eye catching visuals with modern design manifesto with tools like Photoshop and Illustrator.",
        ],
    }
    
    return (
        <div ref={skillRef} className="wrapper left-right-space flex-col gap-4">
            <TextCapsule capsuleColor={'bg-white'} textColor={'text-white'}>{ metadata.title }</TextCapsule>
            <div ref={skillTitleWrapperRef} className="wrapper flex flex-wrap w-full h-auto">
                {
                    splitWords(
                        skillWordRef,
                        `What I Do?`,
                        "font-felidae text-9xl tablet:text-8xl phone:text-7xl text-white"
                    )
                }
            </div>

            <ul ref={skillListWrapperRef} className="wrapper left-right-full flex-col gap-4">
                {
                    descriptionBoxs(
                        skillListRef,
                        metadata.boxTitle,
                        metadata.boxDescription,
                        'bg-white',
                        'bg-opacity-20',
                        'text-white',
                    )
                }
            </ul>
        </div>
    );
});

export default Skills;