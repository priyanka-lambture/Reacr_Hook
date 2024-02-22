import React from 'react';
import { useState } from 'react';
      
function Stylechanger()
 {
    const stylechange = {
        title: "CNC WEB WORLD",
        css: {
            color : "red",
            fontSize : "20px",
            border : "4px dotted red"

        }
        
     }

    const [fontStyle,setFontStyle] = useState(stylechange);
         
    function newstyle()
 {
    setFontStyle({
        title: "CNC WEB @ 123",
        css: {
            color : "blue",
            fontSize : "10px",
            border : "4px dotted yellow"
        }
        
     })

 }        
  return (
    <div>

<h1 style={{textAlign:'center'}}>Stylechanger</h1>
      <h1 style={fontStyle.css}>{fontStyle.title}</h1>
     <button onClick={newstyle}>Click Me</button>
     <hr/>
    </div>
     
    
  )
}

export default Stylechanger
