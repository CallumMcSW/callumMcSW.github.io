let currentQuestionIndex = 0;
let score = 0;
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Madrid"],
        answer: "Paris"
    },
    // Add more questions here
];

function showQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    
    questionEl.textContent = questions[currentQuestionIndex].question;
    optionsEl.innerHTML = "";
    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = selectOption;
        optionsEl.appendChild(button);
    });
}

function selectOption(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultEl = document.getElementById('result');
    resultEl.textContent = `Your score: ${score}/${questions.length}`;
    document.getElementById('next-button').style.display = 'none';
}

function showNextQuestion() {
    showQuestion();
}

showQuestion();
