// Modules
import { useState, useEffect, useRef, createContext, useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useFetcher } from "react-router-dom";
import { useToggle } from "./hooks/useToggle";

// Components
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";

// React Pages
import Home from "./pages/home/Home";
import PageNotFound from "./pages/404/PageNotFound";

export const GlobalContext = createContext();
export const CursorContext = createContext();

export default function App() {
    const [ cursorPosition, setCursor ] = useState({
        x: -100,
        y: -100,
    });

    const [ cursorOnWindow, toggleCursorOnWindow ] = useToggle();
    const [ cursorIsIn, toggleCursorIsIn ] = useToggle();

    // Melacak posisi cursor user
    function checkCursorPosition(event) {
        return {
            cursorPositionX: event.clientX,
            cursorPositionY: event.clientY,
        }
    }

    // mengupdate state posisi cursor
    function updateCursor(event) {
        const { cursorPositionX, cursorPositionY } = checkCursorPosition(event);
        
        setCursor({
            x: cursorPositionX,
            y: cursorPositionY,
        });
    }

    // useEffect(() => {
    //     window.addEventListener("resize", () => {
    //         location.reload();
    //     });

    //     return () => {
    //         window.removeEventListener("resize", () => {});
    //     }
    // });
    
    return (
        <div 
            onMouseMove={ updateCursor } 
            onMouseLeave={ toggleCursorOnWindow } 
            onMouseEnter={ toggleCursorOnWindow } 
            className='min-h-screen justify-center'
        >
            <GlobalContext.Provider value={{ toggleCursorIsIn }}>
                <CursorContext.Provider value={{ cursorPosition, cursorOnWindow, cursorIsIn }}>
                    <Cursor />
                </CursorContext.Provider>
                
                <Navbar />
                <Router>
                <Routes>
                    <Route 
                        path='/' 
                        Component= { Home } 
                    />
                    <Route 
                        path='*' 
                        Component= { PageNotFound } 
                    />
                </Routes>
                </Router>
            </GlobalContext.Provider>
        </div>
    );
}