const questions = [
    {
        "question": "Which country is home to the Eiffel Tower?",
        "options": ["Italy", "France", "Germany", "Spain"],
        "answer": 1
      },
      {
        "question": "Which city is known as the 'Big Apple'?",
        "options": ["Los Angeles", "Chicago", "New York City", "San Francisco"],
        "answer": 2
      },
      {
        "question": "Which is the longest river in the world?",
        "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        "answer": 1
      },
      {
        "question": "Which country is famous for its cherry blossoms?",
        "options": ["South Korea", "Japan", "China", "Vietnam"],
        "answer": 1
      },
      {
        "question": "Which landmark is located in India?",
        "options": ["Great Wall", "Machu Picchu", "Taj Mahal", "Statue of Liberty"],
        "answer": 2
      },
      {
        "question": "Which airline is the flag carrier of the United States?",
        "options": ["American Airlines", "Delta Airlines", "United Airlines", "Southwest Airlines"],
        "answer": 0
      },
      {
        "question": "What is the capital city of Australia?",
        "options": ["Sydney", "Melbourne", "Canberra", "Perth"],
        "answer": 2
      },
      {
        "question": "Which desert is the largest in the world?",
        "options": ["Sahara Desert", "Gobi Desert", "Antarctic Desert", "Kalahari Desert"],
        "answer": 2
      },
      {
        "question": "Which country has the most islands?",
        "options": ["Indonesia", "Philippines", "Sweden", "Canada"],
        "answer": 2
      },
      {
        "question": "Which European country is known for its fjords?",
        "options": ["Denmark", "Sweden", "Norway", "Finland"],
        "answer": 2
      },
      {
        "question": "Which country uses the currency 'Yen'?",
        "options": ["South Korea", "Japan", "China", "Vietnam"],
        "answer": 1
      },
      {
        "question": "Which country has the tallest building in the world?",
        "options": ["United States", "China", "United Arab Emirates", "Saudi Arabia"],
        "answer": 2
      },
      {
        "question": "What is the busiest airport in the world?",
        "options": ["London Heathrow", "Beijing Capital", "Atlanta Hartsfield-Jackson", "Dubai International"],
        "answer": 2
      },
      {
        "question": "Which country is known as the Land of Smiles?",
        "options": ["Malaysia", "Thailand", "Philippines", "Vietnam"],
        "answer": 1
      },
      {
        "question": "Which U.S. state is known for its volcanoes and beaches?",
        "options": ["Florida", "California", "Hawaii", "Texas"],
        "answer": 2
      },
      {
        "question": "Which is the world's smallest country by land area?",
        "options": ["Monaco", "San Marino", "Liechtenstein", "Vatican City"],
        "answer": 3
      },
      {
        "question": "Which country has the most UNESCO World Heritage Sites?",
        "options": ["Italy", "China", "India", "Spain"],
        "answer": 0
      },
      {
        "question": "Which is the highest mountain in the world?",
        "options": ["K2", "Mount Everest", "Kilimanjaro", "Denali"],
        "answer": 1
      },
      {
        "question": "Which continent has the most countries?",
        "options": ["Asia", "Europe", "Africa", "South America"],
        "answer": 2
      },
      {
        "question": "What is the longest railway line in the world?",
        "options": ["Trans-Siberian Railway", "Orient Express", "Rocky Mountaineer", "Indian Railways"],
        "answer": 0
      },
      {
        "question": "Which country is famous for its pyramids?",
        "options": ["Mexico", "Peru", "Egypt", "Greece"],
        "answer": 2
      },
      {
        "question": "Which country is home to the Amazon Rainforest?",
        "options": ["Brazil", "Colombia", "Peru", "Venezuela"],
        "answer": 0
      },
      {
        "question": "Which European city is known for its canals?",
        "options": ["Paris", "Rome", "Venice", "Amsterdam"],
        "answer": 2
      },
      {
        "question": "What is the official language of Brazil?",
        "options": ["Spanish", "Portuguese", "French", "Italian"],
        "answer": 1
      },
      {
        "question": "Which city is known as the 'City of Love'?",
        "options": ["New York", "Venice", "Paris", "Rome"],
        "answer": 2
      },
      {
        "question": "Which ocean is the largest?",
        "options": ["Atlantic", "Indian", "Arctic", "Pacific"],
        "answer": 3
      },
      {
        "question": "Which country is home to the Great Barrier Reef?",
        "options": ["Indonesia", "Australia", "Philippines", "Fiji"],
        "answer": 1
      },
      {
        "question": "Which European country is known for its tulips and windmills?",
        "options": ["Belgium", "Netherlands", "Switzerland", "Denmark"],
        "answer": 1
      },
      {
        "question": "Which U.S. city is famous for Hollywood?",
        "options": ["New York", "Los Angeles", "Las Vegas", "San Francisco"],
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
  

/*const questionElement = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const previous = document.querySelector("#Previous");
const sc = document.querySelector("#score");
const ansele = document.querySelectorAll(".answer");
let timer = document.querySelector(".timer");

let questions = [];
let current_question = 0;
let score = 0;
let count = 60;

const fetchQuestions = async () => {
  try {
    const response = await fetch("https://example.com/api/questions"); // Replace with actual API URL
    questions = await response.json();
    loadQuestion();
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
};

let time_f = () => {
  if (count > 0) {
    timer.style.color = "green";
    count--;
  }
  if (count === 0) {
    timer.innerHTML = `<h2 style="color:red">Time Over</h2>`;
    timer.style.color = "red";
    ansele.forEach(b => {
      b.disabled = true;
    });
  } else {
    timer.innerHTML = `${count}`;
  }
};

const loadQuestion = () => {
  if (questions.length > 0 && current_question < questions.length) {
    const { question, options } = questions[current_question];
    questionElement.innerText = question;
    options.forEach((opt, i) => (window[`option${i + 1}`].innerText = opt));
  } else {
    console.warn("No more questions available.");
  }
};

submit.addEventListener("click", () => {
  let ans_i;
  ansele.forEach((ele, i) => {
    if (ele.checked) {
      ans_i = i;
    }
  });
  if (ans_i === questions[current_question].answer) {
    score++;
    sc.innerText = `Score: ${score}`;
  }
  current_question++;
  ansele.forEach(ele => (ele.checked = false));
  loadQuestion();
  ansele.forEach(btn => {
    btn.disabled = false;
  });
  count = 60;
  timer.style.color = "green";
});

previous.addEventListener("click", () => {
  if (current_question > 0) {
    current_question--;
    ansele.forEach(ele => (ele.checked = false));
    ansele.forEach(btn => {
      btn.disabled = true;
    });
    loadQuestion();
  }
});

setInterval(time_f, 1100);
fetchQuestions();*/
