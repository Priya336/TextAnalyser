import React  ,{useState} from 'react'

export default function TextForm(props) {
   const [text,setText]=useState("");
  
   const handleupclick=()=>{
    console.log(text);
    let newText=text.toUpperCase();
     setText(newText)
     props.showalert("Upper case converted","success")
   }
   const handleloclick=()=>{
    console.log(text);
     setText(text.toLowerCase())
     props.showalert("Lower case converted","success")
   }
   const handleonchange=(event)=>{
  console.log("on change");
  setText(event.target.value);
  
   }
   const handleonclear=()=>{
    let n="";
    setText(n);
    props.showalert("Text is clear","success")

   }
  

  const handleoncopy=()=>{

   navigator.clipboard.writeText(text);
   props.showalert("Text is copied","success")

   
  }
   
  const extraspace=()=>{
   const txt=text.split(/[ ]+/);
   
   setText(txt.join(" "));
   props.showalert("Extra space is removed","success")
  }
  // if(text==="priya is a good girl"){
  //  document.querySelector(".priya").style.color="red";// direct iple,mentation of javascript
  // }
  
  return (
      <>
     
    <div>
<div className="mb-3" width="20px">
<h1 >{props.title}</h1>
 <div><textarea className={`form-control text-${props.mode==="dark"?"light":"dark"} bg-${props.mode==="dark"?"dark":"light"}`}  onChange={handleonchange}  placeholder="Enter your text hear" id="exampleFormControlTextarea1" rows="8" value={text}  ></textarea>
 </div>
</div>
<button className={`btn btn-${props.button} mx-1`} onClick={handleupclick}>Convert TO upper Case</button>
<button className={`btn btn-${props.button} mx-1`} onClick={handleloclick}>Convert TO lower Case</button>
<button className={`btn btn-${props.button} mx-1`} onClick={handleonclear}>Clear text</button>
<button className={`btn btn-${props.button} mx-1`} onClick={handleoncopy}>Copy text</button>
<button className={`btn btn-${props.button} mx-1`} onClick={extraspace}>Extra space</button>

    </div>
    <div>
      <br></br>
      <br></br>
      <h3 >ABOUT ABOVE TEXT</h3>
      <p>Number of word={text.split(" ").length} and number of letter ={text.length}</p>
      <p>Time required to read={0.008 * text.split(" ").length}</p>
    </div>
    <h4 >Preview</h4>
    <div>
    <span style={{color:"white",backgroundColor:"red"}} >{text}</span>
 
    </div>
   
  
  </>
  )
 
}

