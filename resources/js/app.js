import './bootstrap';
import './questions.js';
import Alpine from 'alpinejs';
import { quizzes } from './questions.js';

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function openQuiz(category) {
    if (!quizzes[category]) {
        console.error("Quiz category not found:", category);
        return;
    }
    currentQuiz = quizzes[category];
    startQuiz();
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    document.getElementById("quiz-result").textContent = "";
    document.getElementById("quiz-review").innerHTML = "";
    document.getElementById("quiz-review").classList.add("hidden");

    document.getElementById("quiz-modal").classList.remove("hidden");

    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= currentQuiz.length) {
        showResults();
        return;
    }

    const questionData = currentQuiz[currentQuestionIndex];
    document.getElementById("quiz-question").textContent = questionData.q;
    const optionsContainer = document.getElementById("quiz-options");
    optionsContainer.innerHTML = "";

    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "block w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-4 rounded hover:bg-blue-500 hover:text-white";
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    // Atjaunojam jautājuma skaitītāju (piemēram, 2/10)
    const questionCounter = document.getElementById("quiz-question-counter");
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.length}`;

    document.getElementById("next-btn").classList.add("hidden");
}

function checkAnswer(selectedAnswer) {
    userAnswers.push({
        question: currentQuiz[currentQuestionIndex].q,
        selected: selectedAnswer,
        correct: currentQuiz[currentQuestionIndex].a
    });

    if (selectedAnswer === currentQuiz[currentQuestionIndex].a) {
        score++;
    }
    document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    document.getElementById("quiz-question").textContent = "Quiz Completed!";
    document.getElementById("quiz-options").innerHTML = "";
    
    // Get the result text element
    const resultText = document.getElementById("quiz-result");
    
    // Determine the color class based on score
    const scoreColorClass = score >= (currentQuiz.length / 2) ? 
        'text-green-500 dark:text-green-400' : 
        'text-red-500 dark:text-red-400';
    
    // Create the colored score display
    resultText.innerHTML = `
        <span class="text-white">You scored </span>
        <span class="${scoreColorClass} font-bold">${score}</span>
        <span class="text-white"> out of </span>
        <span class="${scoreColorClass} font-bold">${currentQuiz.length}</span>
        <span class="text-white">!</span>
    `;
    
    document.getElementById("next-btn").classList.add("hidden");
    reviewAnswers();
}

function reviewAnswers() {
    const reviewContainer = document.getElementById("quiz-review");
    reviewContainer.innerHTML = `
        <h4 class='text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200'>
            Review Your Answers:
        </h4>
        <div class='space-y-4'>
            ${userAnswers.map((answer, index) => {
                const isCorrect = answer.selected === answer.correct;
                return `
                <div class='p-4 rounded-lg border ${isCorrect ? 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800'}'>
                    <p class='font-medium text-gray-800 dark:text-gray-200'>${index + 1}. ${answer.question}</p>
                    <p class='mt-2 ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}'>
                        Your answer: ${answer.selected}
                    </p>
                    ${!isCorrect ? `
                    <p class='mt-1 text-green-600 dark:text-green-400'>
                        Correct answer: ${answer.correct}
                    </p>` : ''}
                </div>
                `;
            }).join('')}
        </div>
    `;
    reviewContainer.classList.remove("hidden");
}

function closeQuiz() {
    document.getElementById("quiz-modal").classList.add("hidden");
}

window.closeQuiz = closeQuiz;
window.openQuiz = openQuiz;
window.nextQuestion = nextQuestion;

window.Alpine = Alpine;
Alpine.start();
