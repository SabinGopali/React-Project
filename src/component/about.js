import React, { useState } from 'react'

export default function About(props) {

  const [text, setText] = useState();

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
    <div
      style={{
        color: props.mode.color, // ✅ Fixed text color
        backgroundColor: props.mode.backgroundColor, // ✅ Fixed background color
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Type Here Anything
        </label>
        <textarea
          className="form-control my-4"
          id="exampleFormControlTextarea1"
          // style={{
          //   backgroundColor: props.mode.backgroundColor === "white" ? "#f0f0f0" : "#333", // ✅ Fixed check
          //   color: props.mode.backgroundColor === "white" ? "black" : "white", // ✅ Fixed text color
          //   border: "1px solid #ccc",
          // }}
          rows="6"
          value={text}
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
      </div>
    </div>
  );
}
