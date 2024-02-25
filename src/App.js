import React, { useState } from "react";
import "./App.css";
import { clear } from "@testing-library/user-event/dist/clear";


const App =()=>{

const [result, setResult]=useState("");
const clickHandler=(event)=>{ setResult(result.concat(event.target.value)) }
const clearDisplay =()=>{ setResult(""); }
const calc =()=>{ setResult(eval(result).toString()) }




  return(

<div className="container" >
    <div className="original" >
    <div className="calc" >
    <div className=" calc1 " >
  <input type="text" placeholder="0" id="input" value={result} /> </div>
  <input type="button" value={9} className="but" onClick={clickHandler} />  
  <input type="button" value={8} className="but" onClick={clickHandler} />
  <input type="button" value={7}  className="but" onClick={clickHandler} />
  <input type="button" value={6}  className="but" onClick={clickHandler} />
  <input type="button" value={5}  className="but" onClick={clickHandler} />
  <input type="button" value={4}  className="but" onClick={clickHandler} />
  <input type="button" value={3}  className="but" onClick={clickHandler} />
  <input type="button" value={2}  className="but" onClick={clickHandler} />
  <input type="button" value={1}  className="but" onClick={clickHandler} />
  <input type="button" value={0}  className="but" onClick={clickHandler} />
  <input type="button" value={"."} className="but"  onClick={clickHandler} />
  <input type="button" value={"+"}  className="but" onClick={clickHandler} />
  <input type="button" value={"-"}  className="but" onClick={clickHandler} />
  <input type="button" value={"*"}  className="but" onClick={clickHandler} />
  <input type="button" value={"/"}  className="but" onClick={clickHandler} />
  <input type="button" value={"%"}  className="but" onClick={clickHandler} />

  <input type="button" value={"Clear"} className="but  but1 " onClick={clearDisplay} />
  <input type="button" value={"="}  className="but but1 " onClick={calc} />
  
    </div>
    </div>
    </div>
  )



}

export default App;