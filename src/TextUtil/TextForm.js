import React, {useState} from 'react';

const TextForm = (props) => {
  const [text, setText] = useState(''); 

  const handleUpClick =()=> {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success");
  }
  const handleLoClick = ()=>{ 
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value) 
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  return <div style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>Text-Utils </h1>
    <div style={{ margin: 8, display:'flex', justifyContent:'space-between'}}>
    <h2>A platform to analyze your text and play around it with various options given..</h2>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
    </div>
    </div>
    <div className="container mb-3 my-4">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button type="button" className="btn me-2 btn-primary" onClick={handleUpClick}>ToUpperCase</button>
    <button type="button" className="btn me-2 btn-primary" onClick={handleLoClick}>ToLowerCase</button>
    <button type="button" className="btn me-2 btn-primary" onClick={handleCopy}>Copy</button>
    <button type="button" className="btn me-2 btn-primary" onClick={handleExtraSpaces}>Remove extra space</button>
    <button type="button" className="btn me-2 btn-danger" onClick={handleClearClick}>Clear</button>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
  </div>;
};

export default TextForm;
