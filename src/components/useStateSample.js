import React,{ useState } from 'react';
import { Link } from 'react-router-dom'
// const getInitialdata=()=>{
//     console.log('entered');
//     return 12;
// }

const useStateSample = () => {

    // const [count,setCount] = useState(()=>{
    //     return getInitialdata();
    // });

    const [state,setState] = useState(()=>{
        console.log('useState initialstate');
        return {count:0,theme:'blue'}
    });
    const count= state.count;
    const theme=state.theme;

    const decrementCount =()=>{
        setState(prevState=>{
            return { ...prevState,count:prevState.count-1};
        });
    }

    const incrementCount=()=>{
        setState(prevState=>{
            return { ...prevState,count:prevState.count+1};
        });
    }
    return (
        <div>
            <h1>Use State Tutorial</h1>
           <button onClick={ decrementCount }>-</button>
           <span>{count}</span>
           <span>{theme}</span>
           <button onClick={ incrementCount }>+</button>
           <Link to={'/useeffect'}>UseEffect</Link>
           <Link to={'/useref'}>UseRef</Link>
        </div>
    );
}

export default useStateSample;
