<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Test your knowledge!') }}
        </h2>
        <div class="mt-4">
    <input
        type="text"
        id="quiz-search"
        placeholder="Search quizzes by name..."
        class="w-full max-w-md p-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
        onkeyup="filterQuizzes()"
    />
</div>

    </x-slot>

    
    <div class="container mx-auto px-4 py-8">
        <!-- Overall Quiz - Centered on top -->
        <div class="flex justify-center mb-10 quiz-card">
            <div class="w-full max-w-md p-6 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg text-center border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-shadow duration-300">
                <p class="text-xl font-bold text-gray-800 dark:text-gray-200 leading-relaxed hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer" onclick="openQuiz('overall')">
                    Overall Mythology Quiz
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">Test your knowledge across all mythologies</p>
            </div>
        </div>

        <!-- Regional Quizzes - Grid layout below -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Japan -->
            <div class="p-6 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-600 quiz-card">
                <p class="text-lg font-semibold text-gray-800 dark:text-gray-200 leading-relaxed cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" onclick="openQuiz('japan')">Japanese Mythology</p>
                <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Explore Shinto and folk traditions</p>
            </div>
            
            <!-- Norway -->
            <div class="p-6 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-600 quiz-card">
                <p class="text-lg font-semibold text-gray-800 dark:text-gray-200 leading-relaxed cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" onclick="openQuiz('norway')">Norse Mythology</p>
                <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Vikings, gods, and the world tree</p>
            </div>
            
            <!-- Egypt -->
            <div class="p-6 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-600 quiz-card">
                <p class="text-lg font-semibold text-gray-800 dark:text-gray-200 leading-relaxed cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" onclick="openQuiz('egypt')">Egyptian Mythology</p>
                <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Gods of the Nile and afterlife</p>
            </div>
            
            <!-- China -->
            <div class="p-6 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-600 quiz-card">
                <p class="text-lg font-semibold text-gray-800 dark:text-gray-200 leading-relaxed cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" onclick="openQuiz('china')">Chinese Mythology</p>
                <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Dragons, immortals, and folk tales</p>
            </div>
            
            <!-- Mesoamerica -->
            <div class="p-6 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-600 quiz-card">
                <p class="text-lg font-semibold text-gray-800 dark:text-gray-200 leading-relaxed cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" onclick="openQuiz('mesoamerica')">Mesoamerican Mythology</p>
                <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Aztec, Maya, and other traditions</p>
            </div>
            
            <!-- India -->
            <div class="p-6 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-600 quiz-card">
                <p class="text-lg font-semibold text-gray-800 dark:text-gray-200 leading-relaxed cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" onclick="openQuiz('india')">Indian Mythology</p>
                <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Hindu epics and deities</p>
            </div>
            
            <!-- Greece -->
            <div class="p-6 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-600 quiz-card">
                <p class="text-lg font-semibold text-gray-800 dark:text-gray-200 leading-relaxed cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" onclick="openQuiz('greece')">Greek Mythology</p>
                <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Olympians, heroes, and monsters</p>
            </div>
        </div>
    </div>

    <!-- Quiz Modal -->
    <div id="quiz-modal" class="hidden fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full mx-4 border border-gray-200 dark:border-gray-600">
            <h3 id="quiz-title" class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Mythology Quiz</h3>
            <div id="quiz-question" class="text-gray-800 dark:text-gray-200 mb-4"></div>
            <div id="quiz-options" class="space-y-2"></div>
            
            <!-- Button and counter -->
            <div class="flex justify-between items-center mt-4">
                <button id="next-btn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hidden" onclick="nextQuestion()">Next</button>
                <div id="quiz-question-counter" class="text-sm text-gray-800 dark:text-gray-200 font-semibold">
                    <!-- Question counter will appear here (e.g., 2/10) -->
                </div>
                <button onclick="closeQuiz()" class="text-red-500 hover:text-red-700">Close</button>
            </div>

            <div id="quiz-result" class="mt-4 text-lg font-semibold"></div>
            <div id="quiz-review" class="mt-4 hidden max-h-96 overflow-y-auto">
                <!-- Review answers here -->
            </div>
        </div>
    </div>

    <script>
    function filterQuizzes() {
        const input = document.getElementById("quiz-search");
        const filter = input.value.toLowerCase();
        const cards = document.querySelectorAll(".quiz-card");

        cards.forEach(card => {
            const title = card.querySelector("p.font-bold, p.font-semibold");
            if (!title) return;

            const textValue = title.textContent || title.innerText;
            if (textValue.toLowerCase().indexOf(filter) > -1) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    }
</script>
</x-app-layout>