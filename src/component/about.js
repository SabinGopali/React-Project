import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';




export default function About(props) {

  const [text, setText] = useState();

  
  const [count, setCount] = useState(0);
  
  const handleLike=()=>{

    const like = count+1;
    setCount(like)
  }
  const handleUpper=()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","success")
  }
  

  const handleclear=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space Removed","success")
  }

  const onchangehandler=(event)=>{

    setText(event.target.value)
    
  }

  const clearText=()=>{

    setText("")

  }
  
  return (
    <>
    <div
      style={{
        color: props.mode.color, 
        backgroundColor: props.mode.backgroundColor, 
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Type Here Anything
        </label>
        <textarea
          className="form-control my-4" id="exampleFormControlTextarea1" rows="6" value={text}
          onChange={onchangehandler}
        ></textarea>

        <button className="mx-2 btn btn-primary" onClick={handleUpper}>
          Convert to Uppercase
        </button>
        <button className="mx-2 btn btn-warning" onClick={handleclear}>
          Remove Extra Spaces
        </button>
        <button className="mx-2 btn btn-danger" onClick={clearText}>
          Clear Text
        </button>

        

        <div>
          <h2>Preview</h2>
          <p>{text || "Nothing to preview..."}</p>
          <p>Character Count: </p>
          <p>Word Count: </p>
        </div>
      <div>
      <img src="./e.jpg" className="img-fluid" alt="No image"></img>
      <p>Like:  {count} </p>

      </div>
      <h3   onClick={handleLike}><FontAwesomeIcon style={{ cursor:'pointer' }} icon = {faHeart} /></h3>
      </div>
    </div>

    </>
  );
}
