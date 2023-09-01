// import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx'
import { useState } from 'react';
import Dummy from './dummy/dummy';


function App() {
  const [state,setState]=useState(false)

  let value="Mishal"
  const dic=['abc','def','ghi','jkl']

  
  return (
    <div className="App">

      <h1 onClick={()=>setState(!state)}>show/hide</h1>
      {/* { state ? <Header/>:null} */}
      {state && <Header/>}
      
        <Dummy value={value} dic={dic}/>


        

    </div>
  );
}




export default App;
