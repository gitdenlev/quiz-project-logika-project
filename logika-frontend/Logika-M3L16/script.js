const body = document.querySelector("body");
const container = document.querySelector(".container");

const scoreCount = document.getElementById("score");
const lifeCount = document.getElementById("life");

const btnSubmit = document
  .getElementById("submit")
  .addEventListener("click", function () {
    let selectedAnswer;
    for (const answer of answers) {
      if (answer.checked) {
        selectedAnswer = answer.value;
      }
    }



    if (selectedAnswer === "4") {
      scoreCount.innerHTML = parseInt(score.innerHTML) + 1;
    } else {
      lifeCount.innerHTML = parseInt(life.innerHTML) - 1;
    }
  });


  const questions = [
    "Скільки буде 2+2?",
    "Скільки буде 3+3?",
    "Скільки буде 4+4?",
    "Скільки буде 5+5?",
    "Скільки буде 6+6?",
  ];

  const answers = [4, 6, 8, 10, 12];


  questions.map((question, index) => {
    const questionElement = document.createElement("h2");
    questionElement.classList.add("question");
    questionElement.innerHTML = question;
    container.appendChild(questionElement);
  })


  answers.map((answer, index) => {
    const answerElement = document.createElement("div");
    answerElement.innerHTML = answer;
    body.appendChild(answerElement);
  })