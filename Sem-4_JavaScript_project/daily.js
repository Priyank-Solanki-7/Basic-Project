const questions = [
  {
    question: "Who has been named as the pilot for Axiom Mission 4 (Ax-4)?",
    options: [
      "Mohana Singh",
      "Narinder Chatrath",
      "Aruna Kumar Datta",
      "Shubhanshu Shukla"
    ],
    answer: 1
  },
  {
    question:
      "The Subhadra scheme is a women-centric initiative of which Indian state?",
    options: ["Jharkhand", "Bihar", "Odisha", "Haryana"],
    answer: 2
  },
  {
    question:
      "Which institution has launched the blockchain-based currency named BIMCOIN?",
    options: [
      "Jamnalal Bajaj Institute of Management Studies (JBIMS), Mumbai",
      "Birla Institute of Management Technology (BIMTECH), Greater Noida",
      "Jaipuria Institute of Management, Lucknow",
      "Indian Institute Of Management–Lucknow (IIM–Lucknow)"
    ],
    answer: 1
  },
  {
    question:
      "Mount Taranaki, recently in the news, is located in which country?",
    options: ["New Zealand", "Australia", "Russia", "Indonesia"],
    answer: 0
  },
  {
    question:
      "As per the Economic Survey, what is the estimated economic growth rate for 2025-26?",
    options: [
      "5.2-5.8 per cent",
      "6.3-6.8 per cent",
      "6.1-6.5 per cent",
      "4.3-4.8 per cent"
    ],
    answer: 1
  },
  {
    question:
      "Who headed the judicial commission to investigate the Maha Kumbh stampede in Prayagraj?",
    options: [
      "U.N. Dhebar",
      "Sushil Gupta",
      "Harsh Kumar",
      "P.B. Gajendragadkar"
    ],
    answer: 3
  },
  {
    question: "World Wetlands Day is celebrated on which date every year?",
    options: ["January 31", "February 2", "March 5", "April 10"],
    answer: 1
  },
  {
    question: "Which country is the host of the 9th Asian Winter Games?",
    options: ["China", "India", "Indonesia", "Malaysia"],
    answer: 0
  },
  {
    question:
      "What is the primary objective of the Bharatiya Bhasha Pustak Scheme?",
    options: [
      "Promoting English-language learning",
      "Encouraging foreign-language education",
      "Establishing new universities",
      "Providing digital textbooks in Indian languages"
    ],
    answer: 3
  },
  {
    question:
      "The National Bank for Financing Infrastructure and Development (NaBFID) is regulated and supervised by which institution?",
    options: [
      "National Housing Bank (NHB)",
      "Reserve Bank of India (RBI)",
      "National Bank for Agriculture and Rural Development (NABARD)",
      "Securities and Exchange Board of India (SEBI)"
    ],
    answer: 1
  },
  {
    question:
      "In which Indian state was the saffron reedtail damselfly (Indosticta deccanensis) discovered?",
    options: ["Maharashtra", "Kerala", "Tamil Nadu", "Karnataka"],
    answer: 3
  },
  {
    question:
      "Which country has imposed a 25% tariff on $155 billion worth of U.S. imports in retaliation to U.S. tariffs?",
    options: ["Canada", "India", "United Kingdom", "Germany"],
    answer: 0
  },
  {
    question:
      "In which state is a new urea plant being established as part of the announced initiatives under PM Dhan Dhanya Krishi Yojana?",
    options: ["Bihar", "Assam", "Uttar Pradesh", "Madhya Pradesh"],
    answer: 1
  },
  {
    question:
      "What is the new Foreign Direct Investment (FDI) limit for the insurance sector as per the Union Budget 2025-26?",
    options: ["49%", "74%", "85%", "100%"],
    answer: 3
  },
  {
    question:
      "Who is the Chairman of Russia's State Duma who visited India on February 3, 2025?",
    options: [
      "Dmitry Medvedev",
      "Sergey Lavrov",
      "Vyacheslav Volodin",
      "Aleksandr Bortnikov"
    ],
    answer: 2
  },
  {
    question:
      "What type of targets did the DRDO’s VSHORAD system successfully intercept during its flight trials?",
    options: [
      "Cruise missiles",
      "Low-flying drones",
      "Fighter jets",
      "Ballistic missiles"
    ],
    answer: 1
  },
  {
    question:
      "Where was the 9th Ammunition Cum Torpedo Cum Missile (ACTCM) Barge LSAM 23 launched?",
    options: ["Thane", "Visakhapatnam", "Kochi", "Chennai"],
    answer: 0
  },
  {
    question:
      "Which company has launched the UPI Switch ‘Blitz’ for scalable payment solutions?",
    options: ["Razorpay", "Paytm", "CARD91", "PhonePe"],
    answer: 2
  },
  {
    question:
      "Who won the Grammy Award for Best New Age, Ambient, or Chant Album for ‘Triveni’ at the 67th Grammy Awards?",
    options: [
      "Chandrika Tandon",
      "Wouter Kellerman",
      "Eru Matsumoto",
      "Anoushka Shankar"
    ],
    answer: 0
  },
  {
    question:
      "Who has been recommended by PESB to be the next Managing Director of Chennai Petroleum Corporation Limited (CPCL)?",
    options: ["Ramesh Kumar", "Anil Verma", "H Shankar", "Suresh Nair"],
    answer: 2
  },
  {
    question:
      "Which precious metal was called the 'tears of the sun' by the Inca?",
    options: ["Silver", "Gold", "Platinum", "Copper"],
    answer: 1
  },
  {
    question: "Rick Stein's Cornish pasty recipe features pieces of what meat?",
    options: ["Chicken", "Pork", "Beef", "Lamb"],
    answer: 2
  }
  // More questions follow in a similar format...
];

const arrayShuffle=(array)=>{
  for(let i=array.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [array[i],array[j]]=[array[j],array[i]];
  }
  return array;
}

let shuflequstion=arrayShuffle(questions);

// Initialize variables
const ansele = document.querySelectorAll(".answer");
const questionElement = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const previous = document.querySelector("#Previous");
const sc = document.querySelector("#score");

let timer = document.querySelector(".timer");
let count = 60;
let quiz_counter=1;
let time_f = () => {
if (count > 0) {
  timer.style.color = "green";
  count--;
}
if (count == 0) {
  count = `<h2 color="red">time over</h2>`;
  timer.style.color = "red";
  ansele.forEach(b => {
    b.disabled = true;
  });
}
timer.innerHTML = `${count}`;
};
let current_question = 0;
let score = 0;
// Function to load questions
const loadQuestion = () => {
if (current_question >= shuflequstion.length) {
  // Redirect to the result page if the quiz is already completed
  window.location.href = `result.html?score=${score}`;
  return;
}
if (current_question < questions.length) {
  const { question, options } = shuflequstion[current_question];
  questionElement.innerText = `${quiz_counter}.. ${question}`;
  quiz_counter++;
  options.forEach((opt, i) => (window[`option${i + 1}`].innerText = opt));
} else {
  console.warn(`Array index out of bounds`);
}
};
let clcount = 0;
// Function to check the right answer
submit.addEventListener("click", () => {
if (clcount >= 1) {
  clcount = 0;
}
let ans_i;
ansele.forEach((ele, i) => {
  if (ele.checked) {
    ans_i = i;
  }
});
if (ans_i == shuflequstion[current_question].answer) {
  score++;
  localStorage.setItem("score",score);
  sc.innerText = `Score: ${score}`;
}
current_question += 1;
if (current_question >= shuflequstion.length) {
  // Redirect to the result page
  window.location.href = `result.html?score=${score}`; // Pass the score as a query parameter
  return; // Stop further execution
}
ansele.forEach(ele => (ele.checked = false));
loadQuestion();
ansele.forEach(btn => {
  btn.disabled = false;
});
if (count < 60 || count == `<h2 color="red">time over</h2>`) {
  count = 60;
  timer.style.color = "green";
  time_f();
}
});

// Initial call to load the first question
loadQuestion();

previous.addEventListener("click", () => {
quiz_counter--;
clcount = 1;
if (clcount <= 1) {
  current_question -= 1;
  if (current_question < 0) {
    current_question = 0; // Prevent going before the first question
  }
  ansele.forEach(ele => (ele.checked = false));
  ansele.forEach(btn => {
    btn.disabled = true;
  });
  quiz_counter--;
  if(quiz_counter<=1){
    quiz_counter=1;
  }
  loadQuestion();
}
});


setInterval(time_f, 1100);
let last = shuflequstion.length - 1
