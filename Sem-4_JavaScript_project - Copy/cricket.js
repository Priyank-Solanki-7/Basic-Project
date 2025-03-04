const questions = [
    {
      "question": "Who won the ICC Men's Cricket World Cup in 2023?",
      "options": ["India", "Australia", "England", "Pakistan"],
      "answer": 1
    },
    {
      "question": "Which player has scored the most runs in international cricket?",
      "options": ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "Jacques Kallis"],
      "answer": 1
    },
    {
      "question": "Who was the first batsman to score a double century in ODI cricket?",
      "options": ["Sachin Tendulkar", "Rohit Sharma", "Virender Sehwag", "Chris Gayle"],
      "answer": 0
    },
    {
      "question": "How many players are there in a standard cricket team?",
      "options": ["9", "10", "11", "12"],
      "answer": 2
    },
    {
      "question": "Which bowler has taken the most wickets in Test cricket?",
      "options": ["Shane Warne", "Muttiah Muralitharan", "James Anderson", "Glenn McGrath"],
      "answer": 1
    },
    {
      "question": "In which year was the first-ever Cricket World Cup held?",
      "options": ["1975", "1983", "1992", "2007"],
      "answer": 0
    },
    {
      "question": "Who was the captain of the Indian team that won the 2011 ICC Cricket World Cup?",
      "options": ["Virat Kohli", "MS Dhoni", "Sourav Ganguly", "Rahul Dravid"],
      "answer": 1
    },
    {
      "question": "Which cricketer is known as 'The Wall'?",
      "options": ["Sachin Tendulkar", "Rahul Dravid", "Jacques Kallis", "Steve Waugh"],
      "answer": 1
    },
    {
      "question": "What is the highest individual score in Test cricket?",
      "options": ["400*", "375", "380", "350"],
      "answer": 0
    },
    {
      "question": "Which country has won the most ICC Cricket World Cups?",
      "options": ["India", "Australia", "West Indies", "England"],
      "answer": 1
    },
    {
      "question": "Which team won the first-ever IPL (Indian Premier League) in 2008?",
      "options": ["Mumbai Indians", "Chennai Super Kings", "Rajasthan Royals", "Kolkata Knight Riders"],
      "answer": 2
    },
    {
      "question": "Who holds the record for the fastest century in ODI cricket?",
      "options": ["AB de Villiers", "Chris Gayle", "Virat Kohli", "Shahid Afridi"],
      "answer": 0
    },
    {
      "question": "Which country hosts the Ashes series along with England?",
      "options": ["India", "South Africa", "Australia", "New Zealand"],
      "answer": 2
    },
    {
      "question": "Who is the first cricketer to score 100 international centuries?",
      "options": ["Sachin Tendulkar", "Ricky Ponting", "Virat Kohli", "Jacques Kallis"],
      "answer": 0
    },
    {
      "question": "Which Indian cricketer is nicknamed 'Hitman'?",
      "options": ["Virat Kohli", "Rohit Sharma", "Shikhar Dhawan", "MS Dhoni"],
      "answer": 1
    },
    {
      "question": "Who was the first Indian bowler to take a hat-trick in Test cricket?",
      "options": ["Harbhajan Singh", "Kapil Dev", "Anil Kumble", "Jasprit Bumrah"],
      "answer": 0
    },
    {
      "question": "Which player has hit the most sixes in international cricket?",
      "options": ["Chris Gayle", "Rohit Sharma", "Shahid Afridi", "MS Dhoni"],
      "answer": 0
    },
    {
      "question": "How many balls are bowled in an over in a standard game of cricket?",
      "options": ["5", "6", "8", "10"],
      "answer": 1
    },
    {
      "question": "Who was the first player to score 10,000 runs in Test cricket?",
      "options": ["Sunil Gavaskar", "Sachin Tendulkar", "Allan Border", "Brian Lara"],
      "answer": 0
    }
  ]
  
  
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
  if (current_question < questions.length) {
    const { question, options } = questions[current_question];
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
  if (ans_i == questions[current_question].answer) {
    score++;
    sc.innerText = `Score: ${score}`;
  }
  current_question += 1;
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
  