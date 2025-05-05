/* eslint-disable react/prop-types */
 
import styles from './Buttons.module.css';
let Buttons=({onkeypress})=>{
  const buttons=['7','8','9','6','5','4','3','2','1','C','.','0','+','-','*','/','^','%'];
return(
    <>
    <div className={`w-full row ${styles.btn}`}>
      {/*when we want to perform any code will execute when some event occer
      if call direct function in this case when all value will be return so we create anonimus function 
      in next line code try to check remove function.*/}
      {buttons.map(buttons => <button className={`w-1/4 bg-blue-400 text-white h-10 mx-1.5 rounded-lg mt-2 text-center`} key={buttons} onClick={()=>onkeypress(buttons)}>{buttons}</button>)}
    </div> 
    <button className={`w-full bg-blue-500 text-white mt-2  h-10 rounded-lg`} onClick={()=>onkeypress("Calculate")}>Calculate</button>
    </>
)
}
export default Buttons;