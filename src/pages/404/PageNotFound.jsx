import { useEffect } from "react";

const PageNotFound = () => {
    const PRODUCTIONS = "https://windupratama.github.io";
    const DEVELOPMENT = 'http://localhost:3000/';

    useEffect(() => {
        setTimeout(() => {
            window.location.href = DEVELOPMENT;
        }, 5000);
    }, []);

    const createLink = (ref, text, className) => { return <a href={ref} className={className}>{text}</a> } 

    return(
        <div className="container h-screen bg-avana">
            <div className="wrapper left-right-space h-screen max-h-svh flex-col gap-4 justify-center items-center">
                <h1 className="font-felidae text-9xl tablet:text-5xl phone:text-4xl text-strongblue uppercase">Page Not Found</h1>
                <p>
                    It seems like the page you`re looking for is nowhere to be found, you will be redirected to the home page in few seconds or { createLink(DEVELOPMENT, "click here", "text-strongblue link from-strongblue to-strongblue bg-from-left-thin hover:bg-to-right-thin") }
                </p>
            </div>
        </div>
    );
}

export default PageNotFound;