let currentQuestionIndex = 0;
let score = 0;
const questions = [
    {
        question: "What percentage of the world's water is available for human use?",
        options: ["0.3%", "2.5%", "10%", "25%"],
        answer: "0.3%",
        explanation: "Only 2.5% of the Earth's water is freshwater, and only a fraction of that (about 0.3%) is available for human use, with the rest being trapped in glaciers, polar ice caps, and the atmosphere",
        source: "1. United Nations Water (UN Water) reports 2. World Wildlife Fund (WWF) water scarcity information",
        imaged: ""
            
    },
    {
    question: "Which of these is NOT a common process in water treatment?",
        options: ["Coagulation", "Desalination", "Electrodialysis", "Photocatalysis"],
        answer: "Photocatalysis",
        explanation: "Photocatalysis, while a promising method for purifying water, is not as commonly used in municipal water treatment processes as coagulation, desalination, and electrodialysis.",
          source: "1. Environmental Protection Agency (EPA) on water treatment. 2. World Health Organization (WHO) guidelines for drinking-water quality.",
        imaged: ""
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
