
import React,{useState,useEffect,useReducer} from 'react'


function Dummy(props) {

    const reducer=(state,action)=>{
        switch(action.type){
            case 'add':
                return {count:state.count + 1};
       
            case 'sub':
                return {count:state.count - 1};

            default :
                return state
            }
    }

    
    var [val,setValue]=useState(props.value)
    let dics =props.dic
    const [num,setNum]=useState(0)
    const ini={count:0}
    const [state,dispatch]=useReducer(reducer,ini)
    useEffect(()=>{
        console.log('Mounting');

        return()=>{
            console.log('Unmounting')
        }
    },[])

    const negaHandler=()=>{
        if (num > 0){
            setNum(num-1)
        }
        else{
            alert('negative not allowed');
        }
    }

   
  return (
    <div>
    <h1> Dummy Here {val}  </h1>

    <p> count:{state.count} </p>
    <button onClick={()=>dispatch({type:'add'})}>add</button>
    <button onClick={()=>dispatch({type:'sub'})}>sub</button>
    <br /><br />
    <button onClick={()=>setValue('Ashique')} >Click here to Change</button>
    <h3>{num}</h3>
    <button onClick={()=>setNum(num+1)} >Add</button>
    <button onClick={negaHandler} >Sub</button>
    <br />
    <br />
    <input type="text" placeholder='Enter Something' />
    <i>Add</i>
    <h3>List of array items</h3>
    {
        dics.map((dics,index)=>{
            return(
                <div>
                    
                    <ul>
                        <li key={index}> {dics} </li>
                    </ul>
                    
                </div>
            )
        }

        )
    }



    </div>
  )
}

export default Dummy;
