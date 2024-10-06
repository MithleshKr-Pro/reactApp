import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");  //text is state,setText is function & useState is a hook.
    const handleUpClick=()=>{
        // console.log("upperCase Was Clicked");
        // setText("You have Clicked button");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        let newLowText=text.toLowerCase();
        setText(newLowText);
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    let readTime=text.split(" ").length
  return (
    <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <textarea className='form-control my-5' id="myBox" rows="8"value={text} onChange={handleOnChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button type="submit" className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
            <button type="submit" className="btn btn-primary " onClick={handleClearClick}>Clear</button>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p className="my-3"> {text.split(" ").length} Words,{text.length} Characters</p>
                <p className="read my-3">Time to read this : {readTime*.48} Seconds</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
    </>
  )
}