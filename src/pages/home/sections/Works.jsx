import { useContext, useRef } from "react";
import { HomeContext } from "../Home";

import TextCapsule from "../../../components/UI/TextCapsule";

const Works = () => {
    const { linkLists } = useContext(HomeContext);

    const worksRef = useRef(null);

    const listLinkRef = useRef([]);
    listLinkRef.current = [];

    // contains featured works information
    const metadata = {
        title: "Featured Works",
        list: [
            'Personal Website',
            'Untitled',
            'Untitled',
            'Untitled',
        ],
        link: [
            '/',
        ],
        target: [
            '_self',
        ],
    };

    return(
        <div ref={ worksRef } className="wrapper left-right-space flex-col h-auto gap-4">
            <TextCapsule>{ metadata.title }</TextCapsule>
            <ul>
                <li ref={(el) => listLinkRef.current.push(el)} className="border-b border-black"></li>
                {
                    linkLists(
                        listLinkRef,
                        metadata.list,
                        metadata.link,
                        metadata.target,
                    )
                }
            </ul>
        </div>
    );
}

export default Works;