const questions = [
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: 0
  },
  {
    question: "What is the capital of the USA?",
    options: ["New York", "Washington DC", "Los Angeles", "Chicago"],
    answer: 1
  },
  {
    question: "What is the capital of the UK?",
    options: ["Manchester", "Birmingham", "London", "Liverpool"],
    answer: 2
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: 2
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
    answer: 0
  },
  {
    question: "What is the capital of China?",
    options: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],
    answer: 0
  },
  {
    question: "What is the capital of Russia?",
    options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
    answer: 0
  },
  {
    question: "What is the capital of France?",
    options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
    answer: 0
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 1
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Mark Twain", "Ernest Hemingway"],
    answer: 0
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    answer: 3
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: 2
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet"
    ],
    answer: 2
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    answer: 0
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mars", "Earth", "Mercury"],
    answer: 3
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "George Orwell",
      "Jane Austen"
    ],
    answer: 0
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Won", "Yen", "Rupee"],
    answer: 2
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    answer: 1
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
    answer: 1
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Marie Curie",
      "Alexander Fleming",
      "Louis Pasteur",
      "Gregor Mendel"
    ],
    answer: 1
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    answer: 1
  },
  {
    question: "What is the speed of light?",
    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
    answer: 0
  },
  {
    question: "What is the longest river in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River"
    ],
    answer: 1
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Guglielmo Marconi"
    ],
    answer: 1
  },
  {
    question: "What is the smallest planet in our solar system?",
    options: ["Venus", "Mars", "Mercury", "Pluto"],
    answer: 2
  },
  {
    question: "Who wrote '1984'?",
    options: [
      "George Orwell",
      "Aldous Huxley",
      "F. Scott Fitzgerald",
      "J.D. Salinger"
    ],
    answer: 0
  },
  {
    question: "What is the boiling point of water?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answer: 1
  },
  {
    question: "Which is the smallest continent by land area?",
    options: ["Europe", "Australia", "Antarctica", "South America"],
    answer: 1
  },
  {
    question: "Who is known as the Father of Computers?",
    options: ["Bill Gates", "Steve Jobs", "Alan Turing", "Charles Babbage"],
    answer: 3
  },
  {
    question: "What is the capital of Italy?",
    options: ["Milan", "Rome", "Florence", "Venice"],
    answer: 1
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: 2
  },
  {
    question: "Who is the author of the Harry Potter series?",
    options: [
      "J.R.R. Tolkien",
      "C.S. Lewis",
      "J.K. Rowling",
      "Suzanne Collins"
    ],
    answer: 2
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    answer: 1
  },
  {
    question: "Which country is the largest by land area?",
    options: ["Canada", "China", "USA", "Russia"],
    answer: 3
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
    answer: 1
  },
  {
    question: "What is the main component of the sun?",
    options: ["Oxygen", "Carbon", "Helium", "Hydrogen"],
    answer: 3
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    options: [
      "Emily Brontë",
      "Charlotte Brontë",
      "Jane Austen",
      "Mary Shelley"
    ],
    answer: 2
  },
  {
    question: "Which is the most spoken language in the world?",
    options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    answer: 2
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    answer: 2
  },
  {
    question: "Who was the first man to walk on the moon?",
    options: [
      "Yuri Gagarin",
      "Buzz Aldrin",
      "Neil Armstrong",
      "Michael Collins"
    ],
    answer: 2
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2", "O2", "CO2", "H2O"],
    answer: 3
  },
  {
    question: "Which element has the highest melting point?",
    options: ["Iron", "Tungsten", "Titanium", "Platinum"],
    answer: 1
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    options: [
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
      "Mark Twain",
      "J.D. Salinger"
    ],
    answer: 1
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
    answer: 3
  },
  {
    question: "Who invented the light bulb?",
    options: [
      "Thomas Edison",
      "Nikola Tesla",
      "Alexander Graham Bell",
      "George Westinghouse"
    ],
    answer: 0
  },
  {
    question: "What is the capital of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    answer: 2
  },
  {
    question: "Which is the longest river in Africa?",
    options: ["Congo River", "Nile River", "Niger River", "Zambezi River"],
    answer: 1
  }
];
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

let timer=document.querySelector(".timer");
let count=60;
let time_f=()=>{
  if(count>0){
    timer.style.color="green";
    count--;
  }
  if(count==0){
    count =`<h2 color="red">time over</h2>`;
    timer.style.color="red";
    ansele.forEach(b=>{b.disabled=true});
  }
  timer.innerHTML=`${count}`;
}
let current_question = 0;
let score = 0;
// Function to load questions
const loadQuestion = () => {
  if (current_question < questions.length) {
    const { question, options } = questions[current_question];
    questionElement.innerText = question;
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
  if(count<60||count ==`<h2 color="red">time over</h2>`){
      count=60;
      timer.style.color="green";
      time_f();
  }
});

// Initial call to load the first question
loadQuestion();

previous.addEventListener("click", () => {
  clcount=1;
  if (clcount <= 1) {
    current_question -= 1;
    if (current_question < 0) {
      current_question = 0; // Prevent going before the first question
    }
    ansele.forEach(ele => (ele.checked = false));
    ansele.forEach(btn => {
      btn.disabled = true;
    });
    loadQuestion();
  }
});
setInterval(time_f,1100)