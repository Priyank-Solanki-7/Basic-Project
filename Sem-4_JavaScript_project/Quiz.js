`use strict`;
// let text1 = document.querySelector(".name");
document.querySelectorAll(".btn").forEach((btn,i)=>{
  btn.addEventListener("click", () => {
    const signal = confirm("Are you sure you want to start?");
    if (signal) {
      let topic = document.querySelectorAll("#topic")[i];
      localStorage.setItem("item", topic.value);
      window.location = "./terms.html";
    } else {
      alert("Thank you for visiting our website");
    }
  });
});

let about = document.querySelector(".ab");
about.addEventListener("click", () => {
  window.location = "about.html";
});
acc = document.querySelector(".acc");
acc.addEventListener("click", () => {
  window.location = "./index.html";
});
localStorage.clear();