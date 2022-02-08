import React, {useState} from 'react'
export default function TextForm(props){
    const handleUpClick=()=>{
        console.log("Uppercase clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handlelowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText)
    }
    const handleCopy=()=>{
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        alert("Success! Copied to Clipboard!");
    }
    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/); //regex 
        setText(newText.join(" "))
    }

    const handleOnChange=(event)=>{
         console.log("On change")
       // setText=("something") wrong way 
        setText(event.target.value); //correct way
    }
    const [text, setText] = useState('');
    return (
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange}
                style={{ backgroundColor: props.mode ==='dark'?'#13466e':'white',color: props.mode ==='dark'?'white':'black'}} id='myBox' rows="8">
                </textarea>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2'  onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2'  onClick={handlelowClick}>Convert To Lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className='btn btn-warning my-2 mx-2'  onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className='container my-3' >
                <h1>
                    Your Text Summary
                </h1>
                <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </div>
    )
}