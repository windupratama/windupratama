export default function Footer() {

    function mailTo() {
        window.location.href = 'mailto:winduprtma@gmail.com'
    }

    return(
        <footer className="container left-right-full bg-avana flex z-[997] justify-end overflow">
            <div className="wrapper left-right-space items-center flex-col">
                <button onClick={() => mailTo()} className="bg-strongblue text-white p-16 rounded-2xl font-felidae text-9xl mb-8">CONTACT ME</button>
            </div>
            <div className="flex flex-row w-full">
                <div className="w-full">
                    <p>Credits</p>
                    <ul>
                        <li>
                            Font used : Felidae by...
                        </li> 
                        <li>
                            Font used : Nyght Serif by...
                        </li>
                    </ul>
                </div>

                <div className="w-full">
                    &copy; 2024 M Windu Pratama
                </div>
            </div>
        </footer>
    );
}