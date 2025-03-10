const questions = [
    {
        "question": "What is the primary function of an aircraft wing?",
        "options": ["Provide thrust", "Generate lift", "Control direction", "Reduce drag"],
        "answer": 1
      },
      {
        "question": "Which force opposes the motion of an aircraft through the air?",
        "options": ["Lift", "Thrust", "Drag", "Weight"],
        "answer": 2
      },
      {
        "question": "Who is credited with the first successful powered flight?",
        "options": ["Wright Brothers", "Leonardo da Vinci", "Chuck Yeager", "Amelia Earhart"],
        "answer": 0
      },
      {
        "question": "Which component of an aircraft controls its pitch?",
        "options": ["Ailerons", "Rudder", "Elevator", "Flaps"],
        "answer": 2
      },
      {
        "question": "What is the function of a jet engine?",
        "options": ["Generate lift", "Provide thrust", "Reduce drag", "Control direction"],
        "answer": 1
      },
      {
        "question": "What does 'Mach 1' refer to?",
        "options": ["Speed of light", "Speed of sound", "Maximum speed of an aircraft", "Twice the speed of sound"],
        "answer": 1
      },
      {
        "question": "Which gas is primarily used in airships for lift today?",
        "options": ["Hydrogen", "Oxygen", "Helium", "Nitrogen"],
        "answer": 2
      },
      {
        "question": "What is the term for the angle between the chord line of an airfoil and the oncoming airflow?",
        "options": ["Angle of attack", "Angle of descent", "Angle of incidence", "Drag angle"],
        "answer": 0
      },
      {
        "question": "Which part of an aircraft generates the most lift?",
        "options": ["Fuselage", "Landing gear", "Wings", "Tail"],
        "answer": 2
      },
      {
        "question": "Which control surface primarily affects roll?",
        "options": ["Rudder", "Ailerons", "Elevator", "Flaps"],
        "answer": 1
      },
      {
        "question": "What is the primary function of the landing gear?",
        "options": ["Control yaw", "Provide lift", "Assist in takeoff", "Support the aircraft on the ground"],
        "answer": 3
      },
      {
        "question": "What is the name of the first supersonic passenger aircraft?",
        "options": ["Boeing 747", "Concorde", "Lockheed SR-71", "Airbus A380"],
        "answer": 1
      },
      {
        "question": "Which law of physics primarily governs the lift generated by a wing?",
        "options": ["Newton’s Third Law", "Bernoulli’s Principle", "Kepler’s Laws", "Boyle’s Law"],
        "answer": 1
      },
      {
        "question": "What is the purpose of flaps on an aircraft?",
        "options": ["Increase lift at low speeds", "Decrease drag", "Increase thrust", "Control roll"],
        "answer": 0
      },
      {
        "question": "Which aircraft holds the record for the fastest manned flight?",
        "options": ["Lockheed SR-71 Blackbird", "Concorde", "F-22 Raptor", "X-15"],
        "answer": 3
      },
      {
        "question": "Which material is commonly used in modern aircraft manufacturing for lightweight and strength?",
        "options": ["Aluminum", "Titanium", "Carbon fiber composites", "Steel"],
        "answer": 2
      },
      {
        "question": "What does the term 'stall' refer to in aerodynamics?",
        "options": ["Engine failure", "Loss of lift due to high angle of attack", "Inability to maintain altitude", "Decrease in airspeed"],
        "answer": 1
      },
      {
        "question": "What is the function of a rudder on an aircraft?",
        "options": ["Control pitch", "Control roll", "Control yaw", "Increase lift"],
        "answer": 2
      },
      {
        "question": "Which aviation pioneer broke the sound barrier in 1947?",
        "options": ["Chuck Yeager", "Neil Armstrong", "Howard Hughes", "John Glenn"],
        "answer": 0
      },
      {
        "question": "What is the name of NASA's reusable spaceplane program?",
        "options": ["Apollo", "Voyager", "Space Shuttle", "Falcon"],
        "answer": 2
      },
      {
        "question": "Which aircraft is commonly used for aerial refueling?",
        "options": ["Boeing 747", "Lockheed C-130", "KC-135 Stratotanker", "F-35 Lightning II"],
        "answer": 2
      },
      {
        "question": "What does VTOL stand for?",
        "options": ["Variable Thrust Operation Level", "Vertical Takeoff and Landing", "Very Turbulent Operational Lift", "Vector Thrust Operation Logic"],
        "answer": 1
      },
      {
        "question": "Which famous aircraft was used for the first transatlantic flight?",
        "options": ["Spirit of St. Louis", "Boeing 707", "Lockheed Vega", "Douglas DC-3"],
        "answer": 0
      },
      {
        "question": "What is the name of the largest commercial passenger aircraft?",
        "options": ["Boeing 747", "Airbus A380", "Concorde", "Cessna 172"],
        "answer": 1
      },
      {
        "question": "What is the function of a black box in an aircraft?",
        "options": ["Provide GPS navigation", "Record flight data and cockpit voice", "Control engine performance", "Manage autopilot settings"],
        "answer": 1
      },
      {
        "question": "Which country developed the first operational stealth fighter?",
        "options": ["United States", "Russia", "China", "Germany"],
        "answer": 0
      },
      {
        "question": "Which component provides the primary structure of an aircraft?",
        "options": ["Wings", "Fuselage", "Landing gear", "Tail"],
        "answer": 1
      },
      {
        "question": "What is the main advantage of a turbofan engine over a turbojet engine?",
        "options": ["Higher efficiency and lower noise", "Higher speed", "Better performance at high altitudes", "Reduced weight"],
        "answer": 0
      },
      {
        "question": "Which system is responsible for maintaining cabin pressure in commercial aircraft?",
        "options": ["Landing gear", "Environmental control system", "Hydraulic system", "Fuel system"],
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