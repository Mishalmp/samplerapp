import React, {useState,useEffect} from 'react'

function Header(){

   const [count,setCount]=useState(0)
   const [count2,setCount2]=useState(0)
   useEffect(()=>{
    console.log('mounting');

    console.log('updating',count);
    console.log('updating count 2',count2);

    
   },[count])

   const negHandler=()=>{
    if (count > 0){
        setCount(count-1)
    }
    else{
        alert('neg not allowed');
    }
   }

    return(
        <div>
        <h1>Header</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={negHandler}>decrement</button>
        <p>hai {count}</p>
        <p>..............</p>
        <button onClick={()=>setCount2(count2+1)}>increment</button>
        <button onClick={()=>setCount2(count2-1)}>decrement</button>
        <p>hello {count2}</p>
        </div>
    )
}

export default Header;