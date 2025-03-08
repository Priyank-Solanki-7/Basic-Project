const questions = [
  {
    question: "Which country won the FIFA World Cup in 2018?",
    options: ["Germany", "Brazil", "France", "Argentina"],
    answer: 2
  },
  {
    question: "How many players are there in a standard soccer team?",
    options: ["9", "10", "11", "12"],
    answer: 2
  },
  {
    question: "Which sport is known as the 'King of Sports'?",
    options: ["Basketball", "Cricket", "Soccer", "Tennis"],
    answer: 2
  },
  {
    question: "Who has won the most Grand Slam titles in men’s tennis?",
    options: [
      "Roger Federer",
      "Rafael Nadal",
      "Novak Djokovic",
      "Pete Sampras"
    ],
    answer: 2
  },
  {
    question: "In which country were the 2020 Summer Olympics held?",
    options: ["China", "Japan", "Brazil", "USA"],
    answer: 1
  },
  {
    question: "Which NBA player is known as 'King James'?",
    options: ["Kobe Bryant", "Kevin Durant", "LeBron James", "Michael Jordan"],
    answer: 2
  },
  {
    question: "What is the national sport of Canada?",
    options: ["Lacrosse", "Ice Hockey", "Basketball", "Baseball"],
    answer: 1
  },
  {
    question: "How many rings are there in the Olympic logo?",
    options: ["4", "5", "6", "7"],
    answer: 1
  },
  {
    question: "Which country has won the most Cricket World Cups?",
    options: ["India", "Australia", "England", "Pakistan"],
    answer: 1
  },
  {
    question: "Which Formula 1 driver has won the most championships?",
    options: [
      "Michael Schumacher",
      "Lewis Hamilton",
      "Ayrton Senna",
      "Sebastian Vettel"
    ],
    answer: 1
  },
  {
    question: "What is the maximum score in a single frame of bowling?",
    options: ["20", "30", "50", "100"],
    answer: 1
  },
  {
    question: "How many points is a touchdown worth in American football?",
    options: ["3", "6", "7", "10"],
    answer: 1
  },
  {
    question: "Which country hosts the Wimbledon tennis tournament?",
    options: ["USA", "Australia", "France", "United Kingdom"],
    answer: 3
  },
  {
    question: "What is the diameter of a standard basketball hoop?",
    options: ["15 inches", "18 inches", "20 inches", "22 inches"],
    answer: 1
  },
  {
    question: "Which team won the first ever Super Bowl?",
    options: [
      "Green Bay Packers",
      "Kansas City Chiefs",
      "Pittsburgh Steelers",
      "New England Patriots"
    ],
    answer: 0
  },
  {
    question: "Which NFL team has won the most Super Bowls?",
    options: [
      "Dallas Cowboys",
      "Pittsburgh Steelers",
      "New England Patriots",
      "San Francisco 49ers"
    ],
    answer: 2
  },
  {
    question: "Which golfer has won the most major championships?",
    options: [
      "Jack Nicklaus",
      "Tiger Woods",
      "Arnold Palmer",
      "Phil Mickelson"
    ],
    answer: 0
  },
  {
    question: "In baseball, how many outs are in an inning?",
    options: ["3", "4", "5", "6"],
    answer: 3
  },
  {
    question: "Which country won the first FIFA World Cup in 1930?",
    options: ["Brazil", "Germany", "Uruguay", "Argentina"],
    answer: 2
  },
  {
    question: "Which sport is played at Wimbledon?",
    options: ["Cricket", "Soccer", "Tennis", "Golf"],
    answer: 2
  },
  {
    question: "What is the standard length of a marathon?",
    options: ["26.2 miles", "24.6 miles", "30 miles", "20.5 miles"],
    answer: 0
  },
  {
    question: "Which country has hosted the most Summer Olympics?",
    options: ["USA", "UK", "France", "China"],
    answer: 0
  },
  {
    question: "Which athlete has won the most Olympic medals?",
    options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Simone Biles"],
    answer: 1
  },
  {
    question: "In which year was the first modern Olympic Games held?",
    options: ["1896", "1900", "1924", "1936"],
    answer: 0
  },
  {
    question: "Which team won the NBA championship in 2020?",
    options: [
      "Miami Heat",
      "Los Angeles Lakers",
      "Boston Celtics",
      "Golden State Warriors"
    ],
    answer: 1
  },
  {
    question: "How long is a professional soccer match?",
    options: ["60 minutes", "90 minutes", "100 minutes", "120 minutes"],
    answer: 1
  },
  {
    question: "What is the top prize in professional boxing?",
    options: [
      "World Championship Belt",
      "Gold Medal",
      "Heavyweight Trophy",
      "Knockout Trophy"
    ],
    answer: 0
  },
  {
    question: "Which sport is known as 'The Gentleman's Game'?",
    options: ["Tennis", "Cricket", "Golf", "Polo"],
    answer: 1
  },
  {
    question: "Which country invented the game of basketball?",
    options: ["USA", "Canada", "England", "Australia"],
    answer: 1
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