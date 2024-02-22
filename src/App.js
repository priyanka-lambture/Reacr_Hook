import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import StyleChanger from './UseState/StyleChanger/StyleChanger';
import Fontsize from './Fontsize/Fontsize';
import { Button } from 'bootstrap';


function App() {
  // console.log((useState));

  let [Count, SetCount] = useState(5);

  let [ bg, setbg ]=useState('bg-info');

function Subtract(){
if(Count > 1 )
Count = -1 ;
SetCount(Count);

}
  return (
   <>
   <div style={{height:'100vh'}}className={bg}>
    {/* <h1>{change}</h1>
   <button onClick={()=>update("Programming Site")}>Click Me</button>
    */}
<h1>Counter</h1>
<h2>Value : {Count}</h2>
<button onClick={Subtract}> Subtract Value</button>&nbsp;
<button onClick={()=> SetCount(Count+1)}>Add Value</button> &nbsp;
<button >Click Me</button>
     <br/>

     <StyleChanger/>
       <Fontsize/>
       <div className='d-flex justify-content-evenly'>
<button className='btn btn-danger'onClick={() => setbg('bg-danger')}>Red</button>
<button className='btn btn-success' onClick={()=>setbg('bg-success')}>Green</button>
       </div>
   </div>
   </>
  );
}

export default App;
