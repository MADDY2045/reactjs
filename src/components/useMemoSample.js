import React,{ useState,useMemo } from 'react';
import { Link } from 'react-router-dom';

//useMemo stands for memorization(caching)
//also useMemo is used for caching referential equality say objects

const useMemoSample = () => {
    const [number,setNumber] = useState(1);
    const [dark,setdark] = useState(false);
    const doubleNumber = useMemo(()=>{
        return slowfunction(number)
    },[number]);

    const themestyles = useMemo(()=>{
                    return  {
                        background: dark ? 'black':'white',
                        color: dark ? 'white' : 'black'
                    }
    },[dark])//very important to note that each time if we change number , themestyles object also re render no matter what. So to avoid that ,we are going in for caching memory for the objects




    return (
        <div>
            <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
            <button onClick={()=>setdark(prevtheme=>!prevtheme)}>Change Theme</button>
            <div style={themestyles}>{doubleNumber}</div>
            <Link to={"/useeffect"}>USE EFFECT</Link>
            <Link to={"/"}>USE STATE</Link>
            <Link to={"/useref"}>USE REF</Link>
        </div>
    );
}

function slowfunction(num){
    console.clear();
    console.log(`calling slow function `);
    for (let i=0;i<=99999999999999999999999;i++){
        return num*2;
    }
}

export default useMemoSample;
