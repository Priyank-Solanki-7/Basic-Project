`use strict`;
let btn=document.querySelector(".btn");
let topic=document.querySelector("#topic")
let text1=document.querySelector(".name");

btn.addEventListener("click",()=>{
    const signal=confirm("Are you sure you want to start?");
    if(signal){
        if(topic.value=="sports"){
            window.location="Quizs.html";
        }
        if(topic.value=="daily"){
            window.location="daily.html";
        }
        if(topic.value=="cricket"){
            window.location="cricket.html";
        }
        if(topic.value=="daily"){
            window.location="daily.html";
        }
        if(topic.value=="daily"){
            window.location="daily.html";
        }
        // window.location="Quiz.html";
    }
    else{
        alert("Thank you for visiting our website");
    }
})
let about=document.querySelector(".ab")
about.addEventListener("click",()=>{
    window.location="about.html";
})
acc=document.querySelector(".acc")
acc.addEventListener("click",()=>{
    window.location="./login.html";
})