import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text here..");
    const handleUpClick=()=>{
        console.log("upperCAse Was Clicked");
        setText("You have Clicked button");
    }
    const handleOnChange=()=>{
        console.log("OnChange")
    }
  return (
    <div>
        <form>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className='form-control' id="myBox" rows="8"value={text} onChange={handleOnChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </form>
    </div>
  )
}
