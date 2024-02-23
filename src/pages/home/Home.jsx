// Modules
import { createContext, useRef } from "react";

import Footer from "../../components/footer/Footer";

import gsap from "gsap/all";

import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import Skills from "./sections/Skills";
import Works from "./sections/Works";
import Message from "./sections/Message";
import Message2 from "./sections/Message2";
import Section from "../../components/UI/Section";

import { useGSAP } from "@gsap/react";
import ListBox from "../../components/UI/ListBox";
import LinkBox from "../../components/UI/LinkBox";
import Message3 from "./sections/Message3";

export const HomeContext = createContext();

const Home = () => {
    const containerRef = useRef(null);

    // memecah text menjadi huruf-huruf
    function splitLetters(ref, text, className) {
        const letters = text.split("");

        return letters.map((letter, index) => (
            <span key={ index } ref={ (el) => ref.current.push(el) } className={ className }>
                { letter }
            </span>
        ));
    }

    // memecah paragraph menjadi kata-kata 
    function splitWords(ref, paragraph, classname) {
        const words = paragraph.split(" ");

        return words.map((word, index) => (
            <p key={ index } ref={ (el) => ref.current.push(el) } className={ classname }>
                <span>{ word }</span>
                <span>&nbsp;</span>
            </p>
        ));
    }

    // membuat element list box sesuai array text
    function descriptionBoxs(ref, title, description, backgroundColor, backgroundOpacity, textColor, numbering = false) {
        const boxs = title.map((title, index) => (
            <ListBox 
                key={ index }
                ref={ (el) => ref.current.push(el) }
                index={ index }
                title={ title } 
                description={ description } 
                backgroundColor={ backgroundColor } 
                backgroundOpacity={ backgroundOpacity }
                textColor={ textColor } 
                numbering={ numbering }
            />
        ));
        return boxs;
    }

    // membuat element list list sesuai array text dan link
    function linkLists(ref, title, link, target, numbering = false) {
        const links = title.map((title, index) => (
            <LinkBox 
                key={ index } 
                ref={ (el) => ref.current.push(el) }
                index={index }
                title={ title }
                link={ link }
                target={ target }
                numbering={ numbering }
            />
        ));
        return links;
    }

    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.to(sectionRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                end: '10% center',
                scrub: true,
                
            },
            width: '100%',
            y: -200,
            marginBottom: -200,
        });
    }, {scope: sectionRef});

    return(
        <main ref={ containerRef } className="container bg-avana gap-64">
            <HomeContext.Provider value={{ splitLetters, splitWords, descriptionBoxs, linkLists }}>
                <Hero />
                <Introduction />
                <Message />
                <Section ref={ sectionRef }>
                    <Skills ref={sectionRef} />
                    <Message2 ref={sectionRef}/>
                </Section>
                <Works />
                <Message3 />
                <Footer />
            </HomeContext.Provider>
        </main>
    );
}

export default Home;