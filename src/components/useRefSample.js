import React from 'react';
import { Link } from 'react-router-dom'
const useRefSample = () => {
    return (
        <div>
            useref
            <Link to={"/useeffect"}>UseEffect</Link>
            <Link to={"/"}>UseState</Link>
        </div>
    );
}

export default useRefSample;
