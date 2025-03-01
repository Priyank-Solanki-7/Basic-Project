"use strict"
let accept_btn = document.querySelector(".acc-bt");
if (accept_btn) {
    accept_btn.addEventListener("click", () => {
        let topics = localStorage.getItem("item"); // Retrieve stored topic
        if (!topics) {
            alert("No topic selected. Redirecting to homepage.");
            window.location = "./index.html"; // Redirect to home if no topic found
            return;
        }

        switch (topics.toLowerCase()) {
            case "sports":
                window.location = "./Quizs.html";
                break;
            case "daily":
                window.location = "./daily.html";
                break;
            case "cricket":
                window.location = "./cricket.html";
                break;
            case "news":
                window.location = "./news.html";
                break;
            case "aeronautics":
                window.location = "./daily.html";
                break;
            case "traveling":
                window.location = "./traveling.html";
                break;
            default:
                alert("Invalid topic selected. Redirecting to homepage.");
                window.location = "./index.html";
        }
    });
}