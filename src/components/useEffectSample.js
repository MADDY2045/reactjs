import React,{useState,useEffect} from 'react';
import axios from 'axios';

const useEffectSample = () => {

    const [resourceType,setResourceType] = useState(()=>'posts');
    const [items,setItems] = useState(()=>[])
    const [ windowWidth,setWindowWidth] =useState(window.innerWidth);

    const handleResize =()=>{
        setWindowWidth(window.innerWidth);
    }


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/${resourceType}/?_limit=5`).then(docs=>{
            console.log(docs.data);
            setItems(docs.data);
        }).catch(err=>console.log(err));
    },[resourceType]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, [windowWidth])

    return (
        <div>
            <h1>This is useEffect Tutorial </h1>
            <button onClick={()=>setResourceType('posts')}>Posts</button>
            <button onClick={()=>setResourceType('users')}>Users</button>
            <button onClick={()=>setResourceType('comments')}>Comments</button>
            <div>
                <h1>{items.map((item,index)=>{
                    return <pre key={index}>{JSON.stringify(item)}</pre>
                })}</h1>
            </div>
            <div>
                <h1>{windowWidth}</h1>
            </div>
        </div>
    );
}

export default useEffectSample;
