import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUPClick =() =>{
   let newText= text.toUpperCase()
   setText(newText)
    props.showAlert(" Converted to UPPERCASE","Success!")
  }
  const handleLoClick=()=>{
    let newText= text.toLowerCase()
    setText(newText)
    props.showAlert(" Converted to lowercase!","Success")
  }
  const handleClearClick=()=>{
    let newText= ''
    setText(newText)
  }
  const handleCopy=()=>{
    var text= document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert(" Text has been copied","Success")
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const handleSpaces=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert(" Extra spaces removed!","Succes")
  }
  const[text, setText]= useState("");
  return (
    <>
    <div className='container'  style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
 
      <div className="mb-3">
  
       <textarea  className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div> 
     <button className="btn btn-primary mx-2"  onClick={handleUPClick}>Convert to UPPERCASE</button>
     <button className="btn btn-primary mx-2"  onClick={handleLoClick}>Convert to lowercase</button>
     <button className="btn btn-primary mx-2"  onClick={handleClearClick}>Clear Text</button>    
     <button className="btn btn-primary mx-2"  onClick={handleCopy}>Copy Text</button>  
     <button className="btn btn-primary mx-2"  onClick={handleSpaces}>Remove extra spaces</button>
    </div>

    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text has</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} mitnutes to read</p>

    </div>
    </>
  )
}
