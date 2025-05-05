import './App.css';
import Display from './components/Display';
import Buttons from './components/Buttons';
import { useState } from 'react';
let App=()=>{
    const [value,setvalue] = useState("");
    // const buttons=['7','8','9','6','5','4','3','2','1','C','.','0','+','-','*','/','^','%'];
    const eventpress=(button)=>{
        if(button==="C"){
            setvalue('');
        }else if(button==="Calculate"){
            const result = eval(value);
            setvalue(result);
        }else{ 
        let newvalue = value+button;
        setvalue(newvalue);
        }
    }
 return(
    <>
    <div className={`mainDiv container mx-auto w-fit`}>
        
        <Display displayValue={value} />
        <Buttons onkeypress={eventpress}/> 
    </div>
    </>
 )   
}
export default App;