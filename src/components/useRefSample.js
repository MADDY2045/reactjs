import React,{useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';

//useRef is more or less similar to usestate but it persists with the component rerender unlike useState
//useRef is also used to reference an element used in our markup
//useRefs are also used to store the prvious state values
const useRefSample = () => {

    const [name,setName]=useState('');
    const renderCount = useRef(1);
    const inputRef = useRef();
    const prevName = useRef('')
    useEffect(() => {
        renderCount.current = renderCount.current +1;
        prevName.current = name;
    })

    const autofocus=()=>{
        inputRef.current.focus();
    }

    return (
        <div>
           <input ref={inputRef} onChange={(e)=>setName(e.target.value)} name="name"/>
            <h3>You have typed {renderCount.current} times</h3>
            <h1>Your current name is {name} and previousname is {prevName.current}</h1>
            <button onClick={autofocus}>FOCUS</button>
            <Link to={"/useeffect"}>UseEffect</Link>
            <Link to={"/"}>UseState</Link>
        </div>
    );
}

export default useRefSample;
