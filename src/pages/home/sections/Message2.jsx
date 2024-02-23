import { useRef, forwardRef } from "react";
import ImageLoading from "../../../components/UI/ImageLoading";


import Landscape from '../../../assets/images/Landscape.webp' 
import Flowers from '../../../assets/images/Flowers.webp' 
import Statue from '../../../assets/images/Statue.webp' 
import Art from '../../../assets/images/Art.webp'
import { Suspense } from "react";

const Untitled2 = forwardRef(function Untitled2Components(_, ref) {
    const untitledRef = useRef(null);

    const metadata = [
        {
            first: 'I Mix Tech and Art',
            image: Flowers,
            last: null
        },
        {
            first: 'To',
            image: Statue,
            last: 'Make A Vision'
        },
        {
            first: 'Became A',
            image: Art,
            last: 'Reality'
        }
    ]

    return(
        <div ref={untitledRef} className="left-right-space flex flex-col items-center">
            {
                metadata.map((value, index) => {
                    return (
                        <Content key={ index } first={ value.first } image={ value.image } last={ value.last } />
                    );
                })
            }
        </div>
    )
});

export default Untitled2;

const Content = (forwardRef(function ContentComponents({first, image, last}, ref) {
    
    return (
        <h1 className="font-felidae text-9xl text-white flex flex-row gap-8 items-center w-auto">
            { first }
            <span>
                <Suspense fallback={ <ImageLoading /> }>
                    <img src={ image } className="w-48 h-24 rounded-full bg-cover" alt="Content" loading="lazy"/>
                </Suspense>
            </span>
            { last }
        </h1>
    );
}));