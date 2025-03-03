<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Test your knowledge!') }}
        </h2>
    </x-slot>

    <div id="japan-mythology" class="mt-10 p-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-xl shadow-xl">
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer" onclick="openQuiz()">
            Overall
        </p>

        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">Japan</p>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">Norway</p>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">Egypt</p>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">China</p>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">Mesoamerica</p>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">India</p>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">Greece</p>
    </div>

    <!-- Quiz Modal -->
    <div id="quiz-modal" class="hidden fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Mythology Quiz</h3>
            <div id="quiz-question" class="text-gray-800 dark:text-gray-200 mb-4"></div>
            <div id="quiz-options" class="space-y-2"></div>
            <button id="next-btn" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hidden" onclick="nextQuestion()">Next</button>
            <button onclick="closeQuiz()" class="mt-2 text-red-500 hover:text-red-700">Close</button>
            <div id="quiz-result" class="mt-4 text-lg font-semibold"></div>
            <div id="quiz-review" class="mt-4 hidden"></div>
        </div>
    </div>

    <script>
        const questions = [
            { q: "Who is the king of the Greek gods?", options: ["Zeus", "Hades", "Poseidon", "Apollo"], a: "Zeus" },
            { q: "Which Norse god wields Mjolnir?", options: ["Odin", "Thor", "Loki", "Freyr"], a: "Thor" },
            { q: "In Egyptian mythology, who is the god of the underworld?", options: ["Ra", "Osiris", "Anubis", "Horus"], a: "Osiris" },
            { q: "Which Japanese sun goddess is one of the most important deities?", options: ["Susanoo", "Amaterasu", "Tsukuyomi", "Raijin"], a: "Amaterasu" },
            { q: "In Hindu mythology, who is the preserver god?", options: ["Brahma", "Shiva", "Vishnu", "Indra"], a: "Vishnu" }
        ];

        let currentQuestionIndex = 0;
        let score = 0;
        let userAnswers = [];

        function openQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            userAnswers = [];
            document.getElementById("quiz-result").textContent = "";
            document.getElementById("quiz-review").innerHTML = "";
            document.getElementById("quiz-review").classList.add("hidden");
            document.getElementById("quiz-modal").classList.remove("hidden");
            showQuestion();
        }

        function closeQuiz() {
            document.getElementById("quiz-modal").classList.add("hidden");
        }

        function showQuestion() {
            const questionData = questions[currentQuestionIndex];
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
            
            document.getElementById("next-btn").classList.add("hidden");
        }

        function checkAnswer(selectedAnswer) {
            userAnswers.push({
                question: questions[currentQuestionIndex].q,
                selected: selectedAnswer,
                correct: questions[currentQuestionIndex].a
            });

            if (selectedAnswer === questions[currentQuestionIndex].a) {
                score++;
            }
            document.getElementById("next-btn").classList.remove("hidden");
        }

        function nextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                document.getElementById("quiz-question").textContent = "Quiz Completed!";
                document.getElementById("quiz-options").innerHTML = "";
                document.getElementById("quiz-result").textContent = `You scored ${score} out of ${questions.length}!`;
                document.getElementById("next-btn").classList.add("hidden");
                reviewAnswers();
            }
        }

        function reviewAnswers() {
            const reviewContainer = document.getElementById("quiz-review");
            reviewContainer.innerHTML = "<h4 class='text-lg font-semibold'>Review Your Answers:</h4>";
            userAnswers.forEach(answer => {
                const resultClass = answer.selected === answer.correct ? "text-green-500" : "text-red-500";
                reviewContainer.innerHTML += `<p class='${resultClass}'>Q: ${answer.question} <br> Your Answer: ${answer.selected} <br> Correct Answer: ${answer.correct}</p><br>`;
            });
            reviewContainer.classList.remove("hidden");
        }
    </script>
</x-app-layout>
