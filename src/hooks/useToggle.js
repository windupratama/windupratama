// Modules
import { useState } from "react";

export function useToggle(condition = false) {
    const [ state, setState ] = useState(condition);

    function toggle() {
        setState((prev) => !prev);
    }

    return [ state, toggle ];
}