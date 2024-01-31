let currentQuestionIndex = 0;
let score = 0;
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Saturn", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for Gold?",
        options: ["Au", "Ag", "Fe", "Gd"],
        answer: "Au"
    },
    {
        question: "In what year did the Titanic sink?",
        options: ["1912", "1905", "1918", "1923"],
        answer: "1912"
    },
    // You can add more questions here
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

function showQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const progressBar = document.getElementById('progress-bar');
    
    // Update progress bar
    const progressPercentage = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    questionEl.textContent = questions[currentQuestionIndex].question;
    optionsEl.innerHTML = "";
    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = selectOption;
        optionsEl.appendChild(button);
    });
}

// ... rest of the script remains the same


showQuestion();
