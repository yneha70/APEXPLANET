const quizData = [
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "Hot Mail", "How To Make Lasagna"],
    correct: 0
  },
  {
    question: "Which language is used for styling web pages?",
    answers: ["HTML", "JQuery", "CSS"],
    correct: 2
  },
  {
    question: "Identify this logo:",
    image: "assets/html_logo.png",
    answers: ["HTML", "Python", "PHP"],
    correct: 0
  }
];

let currentQuestion = 0;
let userAnswers = new Array(quizData.length).fill(null);

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("questionText").textContent = q.question;

  const imgDiv = document.getElementById("questionImage");
  if (q.image) {
    imgDiv.innerHTML = `<img src="C:\Users\ramireddy\Desktop\Apex\.vscode\APEX\APEXTASK3\html_logo.png" alt="Question Image" />`;
  } else {
    imgDiv.innerHTML = "";
  }

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.classList.add("option-btn");
    btn.onclick = () => selectAnswer(idx);
    if (userAnswers[currentQuestion] === idx) {
      btn.classList.add("selected");
    }
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(idx) {
  userAnswers[currentQuestion] = idx;
  const buttons = document.querySelectorAll("#answers button");
  buttons.forEach(btn => btn.classList.remove("selected"));
  buttons[idx].classList.add("selected");
}

function nextQuestion() {
  if (userAnswers[currentQuestion] === null) {
    alert("Please select an answer before proceeding!");
    return;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  let score = 0;
  quizData.forEach((q, idx) => {
    if (userAnswers[idx] === q.correct) {
      score++;
    }
  });

  document.getElementById("quizBox").style.display = "none";
  document.getElementById("resultBox").style.display = "block";
  document.getElementById("resultText").textContent = `You got ${score}/${quizData.length} correct!`;
}

function restartQuiz() {
  currentQuestion = 0;
  userAnswers = new Array(quizData.length).fill(null);
  document.getElementById("quizBox").style.display = "block";
  document.getElementById("resultBox").style.display = "none";
  loadQuestion();
}

// Load first question
loadQuestion();

// Joke API Function
async function getJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: { 'Accept': 'application/json' }
  });
  const data = await res.json();
  document.getElementById('joke').textContent = data.joke;
}
