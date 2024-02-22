import React, { useState } from 'react';
import './Fontsize.css';
import { getValue } from '@testing-library/user-event/dist/utils';

function Fontsize() {

const [fsize,setfsize]=useState('');

function getValue(e){
// console.log(e.target.value);

let value = e.target.value+"px";
setfsize(value);

}

let getColor = (e) =>{
// console.log(e.target  )
let color = e.target.value;
setfsize(color);
}
  return (
    <>
      <h1 style={{textAlign:'center'}}>Font Size Changer</h1>
      <h1 style={{fontSize:fsize, fontColor: fsize}}>CNC WEB WORLD</h1>
      <input type='range' name='range' onChange={getValue} step={5} />
    <input type='color' name='color' onChange={getColor}/>
      <hr/>
      <br></br>
      

    </>
  )
}

export default Fontsize
