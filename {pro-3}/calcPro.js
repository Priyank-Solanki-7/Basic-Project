// apend string in display
let getInput = item => {
  document.querySelector('#result').value += item;
};
// eval function logic
let calculate = () => {
  try {
    let ans = eval(document.querySelector('#result').value);
    document.querySelector('#result').value = ans;
  } catch (error) {
    document.querySelector('#result').value = "Error";
  }
};
// clear all
let clearall = () => {
  document.querySelector('#result').value = "";
};
// advance calc
let sin=()=>{
  try{
    document.querySelector("#result").value=Math.sin(document.querySelector("#result").value);
  }catch(error){
    document.querySelector("#result").value="error";
  }
}
let pow2=()=>{
  try{
    document.querySelector("#result").value=Math.pow(document.querySelector("#result").value,2);
  }
  catch(error){
    document.querySelector("#result").value="error";    
  }
}
let pow10=()=>{
  document.querySelector("#result").value=Math.pow(document.querySelector("#result").value,10);
}
let cos=()=>{
  document.querySelector("#result").value=Math.cos(document.querySelector("#result").value);
}
let cosec=()=>{
  document.querySelector("#result").value=Math.cosh(document.querySelector("#result").value);
}
let sqrt=()=>{
  document.querySelector("#result").value=Math.sqrt(document.querySelector("#result").value);
}
let getInputpow = item => {
  document.querySelector('#result').value += item;
  let ans2 =document.querySelector('#result').value.replace('^','**');
  document.querySelector('#result').value=ans2;
};