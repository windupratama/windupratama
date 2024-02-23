// Modules
import { useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";
import LinkBox from "../UI/LinkBox";

const Navbar = () => {

    const [ navbarIsToggle, toggleNavbar ]  = useToggle();

    const lineHeight    = 3; // Navbar menu toggle hamburger line height 
    const menuLabel     = navbarIsToggle ? "CLOSE" : "MENU"; // Navbar sign label

    const barGap        = { gap: navbarIsToggle ? '0' : '5px' }
    const barDivide     = { height: navbarIsToggle ? `${lineHeight/2}px` : `${lineHeight}px` }
    const openNavbar    = { height: navbarIsToggle ? '100vh' : '0' }

    useEffect(() => {
        // disable cursor movement Y when scrolling
        document.body.style.overflowY = navbarIsToggle ? "hidden" : "scroll";
    })

    // membuat element list list sesuai array text dan link
    function createListOfLinks(texts, links, classname, showNumbering = false) {
        return texts.map((value, index) => (
            <li key={ index }>
                <Link reloadDocument className={classname} to={ links[index] }>{showNumbering ? ("0" + (index + 1) + ". ") : ""}{ value }</Link>
            </li>
        ));
    }

    const objects = {
        title: [
            "HOME",
            "BLOG",
            "ABOUT",
            "CREDITS",
            "CONTACTS",
        ],
        link: [
            "/",
            "/Blog",
            "/About",
            "/Credits",
            "/Contacts",
        ],
    }

    return(
        <header>
            <nav className="container fixed z-[999] mix-blend-difference">
                <div className="wrapper left-right-space justify-end items-center h-[50px]">
                    <div className="flex flex-row self-end items-center m-0" onClick={ () => toggleNavbar()  }>
                        <h3 className="mr-[10px] text-yellow-450 select-none">{ menuLabel }</h3>
                        <div className="transition-[gap] ease-in-out duration-200 flex flex-col w-[50px] h-full justify-center m-0" style={{ ...barGap }}>
                            <div className="w-full bg-yellow-450" style={{ ...barDivide }}></div>
                            <div className="w-full bg-yellow-450" style={{ ...barDivide }}></div>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="container z-[998] fixed bg-strongblue">
                <div className="transition-[height] ease-in-out duration-500 wrapper left-right-space" style={{ ...openNavbar }}>
                    <div className="flex h-svh text-center items-center">
                        <BrowserRouter>
                            <ul className="flex flex-col gap-5 list-none">               
                                {
                                    objects.title.map((value, index) => {
                                        return (
                                            <Link
                                                key={ index }
                                                reloadDocument 
                                                className="link font-felidae text-7xl from-white to-white bg-from-left-thin hover:bg-to-right-thin"
                                                to={ objects.link[index] }
                                                >
                                                    { value }
                                            </Link>
                                        );
                                    }
                                    )
                                }
                            </ul>
                        </BrowserRouter>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;


// {
//     createListOfLinks(
//         [
//             "HOME",
//             "ABOUT",
//             "CREDITS",
//             "CONTACTS"
//         ],
//         [
//             "/",
//             "/About",
//             "/Credits",
//             "/Contacts"
//         ],
//         "link font-felidae text-7xl from-white to-white bg-from-left-thin hover:bg-to-right-thin",
//         false
//     )
// }