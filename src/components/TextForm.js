import React,{useState} from 'react'

export default function TextForm(props) {
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select(); 
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("All are copied!","success");
    }

    const handleUpClick =()=>{
    
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick =()=>{
      
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick =()=>{
      
        let newtext='';
        setText(newtext);
        props.showAlert("Clear all!","success");
    }
    const handleOnChange =(event)=>{
       
        setText(event.target.value);
    }
    const handleExtraSpaces =()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Removed extra spaces!","success");
    }
    const handleCapCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice();
            return newText;
        });
        setText(newText.join(" "));
        props.showAlert("Converted to capitalized!","success");
        
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleCapCase}>Capitalized</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy All</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear All</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split("/\s+/").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p> 
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.lenght>0?text:'Nothing to preview!'}</p>
        </div>
        </>
    )
}
