const questions = [
    {
    "question": "Which country hosted the 2024 G20 Summit?",
    "options": ["India", "Brazil", "Japan", "Germany"],
    "answer": 1
  },
  {
    "question": "What major political change occurred in the UK in 2024?",
    "options": ["Rejoining the European Union", "Scottish independence referendum", "New Prime Minister elected", "Abolishment of the monarchy"],
    "answer": 2
  },
  {
    "question": "Who is the current Prime Minister of India as of 2024?",
    "options": ["Narendra Modi", "Amit Shah", "Rahul Gandhi", "Arvind Kejriwal"],
    "answer": 0
  },
  {
    "question": "Which political party won the most seats in the 2024 European Parliament elections?",
    "options": ["European People's Party", "Progressive Alliance of Socialists and Democrats", "Renew Europe", "Greens/EFA"],
    "answer": 0
  },
  {
    "question": "Which African country held its general elections in January 2024?",
    "options": ["Nigeria", "Ghana", "Kenya", "South Africa"],
    "answer": 1
  },
  {
    "question": "Who is the President of Russia in 2024?",
    "options": ["Vladimir Putin", "Dmitry Medvedev", "Alexei Navalny", "Sergey Lavrov"],
    "answer": 0
  },
  {
    "question": "Which Asian country saw significant political protests in 2024?",
    "options": ["China", "Myanmar", "Thailand", "Hong Kong"],
    "answer": 2
  },
  {
    "question": "What was the major topic of the 2024 United Nations General Assembly?",
    "options": ["Climate change and global health", "International trade agreements", "Space exploration", "Cybersecurity"],
    "answer": 0
  },
  {
    "question": "Who is the current Secretary-General of the United Nations in 2024?",
    "options": ["António Guterres", "Ban Ki-moon", "Kofi Annan", "Jens Stoltenberg"],
    "answer": 0
  },
  {
    "question": "What is the predicted GDP growth rate of India for 2024?",
    "options": ["5.5%", "6.5%", "7.5%", "8.5%"],
    "answer": 1
  },
  {
    "question": "Which country saw the highest inflation rate in 2024?",
    "options": ["Argentina", "Zimbabwe", "Venezuela", "Turkey"],
    "answer": 2
  },
  {
    "question": "What major economic policy did the United States implement in 2024?",
    "options": ["Universal basic income", "Green New Deal", "Tax cuts for corporations", "Infrastructure investment plan"],
    "answer": 3
  },
  {
    "question": "Which global corporation announced a major merger in 2024?",
    "options": ["Apple and Tesla", "Google and Microsoft", "Amazon and Alibaba", "Facebook and Twitter"],
    "answer": 0
  },
  {
    "question": "What is the projected global economic growth for 2024 according to the IMF?",
    "options": ["2.5%", "3.4%", "4.1%", "5.0%"],
    "answer": 1
  },
  {
    "question": "Which country became the largest exporter of renewable energy in 2024?",
    "options": ["Germany", "China", "United States", "India"],
    "answer": 1
  },
  {
    "question": "How did Brexit continue to affect the UK economy in 2024?",
    "options": ["Increased trade with EU", "Economic growth surge", "Trade challenges and economic adjustments", "Rejoining the EU"],
    "answer": 2
  },
  {
    "question": "Which Asian country saw significant economic growth in 2024 due to technological advancements?",
    "options": ["Japan", "South Korea", "India", "Singapore"],
    "answer": 1
  },
  {
    "question": "What was the focus of the World Economic Forum 2024?",
    "options": ["Cryptocurrency regulation", "Sustainable development and digital economy", "Space tourism", "Global pandemic response"],
    "answer": 1
  },
  {
    "question": "Which country introduced a new cryptocurrency as legal tender in 2024?",
    "options": ["El Salvador", "Japan", "Switzerland", "United Arab Emirates"],
    "answer": 3
  },
  {
    "question": "Which major space mission was launched by NASA in 2024?",
    "options": ["Mars Sample Return Mission", "Europa Clipper", "Artemis II", "James Webb Space Telescope"],
    "answer": 2
  },
  {
    "question": "What was the significant discovery in physics in 2024?",
    "options": ["Detection of dark matter particles", "Confirmation of a fifth fundamental force", "Room-temperature superconductivity", "Discovery of a new subatomic particle"],
    "answer": 2
  },
  {
    "question": "Which country successfully completed a human mission to the Moon in 2024?",
    "options": ["Russia", "China", "United States", "India"],
    "answer": 2
  },
  {
    "question": "What breakthrough in medical science occurred in 2024?",
    "options": ["Universal cancer vaccine developed", "Cure for Alzheimer's disease discovered", "Successful xenotransplantation of a pig heart into a human", "HIV/AIDS eradicated"],
    "answer": 2
  },
  {
    "question": "Which species was declared extinct in 2024?",
    "options": ["Northern white rhinoceros", "Vaquita porpoise", "Javan tiger", "Yangtze giant softshell turtle"],
    "answer": 1
  }
]
  
  
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
  