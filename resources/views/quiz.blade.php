<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Test your knowledge!') }}
        </h2>
    </x-slot>

    <div id="japan-mythology" class="mt-10 p-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-xl shadow-xl">
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer" onclick="openQuiz('overall')">
            Overall
        </p>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed cursor-pointer hover:text-blue-500" onclick="openQuiz('japan')">Japan</p>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed cursor-pointer hover:text-blue-500" onclick="openQuiz('norway')">Norway</p>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed cursor-pointer hover:text-blue-500" onclick="openQuiz('egypt')">Egypt</p>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed cursor-pointer hover:text-blue-500" onclick="openQuiz('china')">China</p>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed cursor-pointer hover:text-blue-500" onclick="openQuiz('mesoamerica')">Mesoamerica</p>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed cursor-pointer hover:text-blue-500" onclick="openQuiz('india')">India</p>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed cursor-pointer hover:text-blue-500" onclick="openQuiz('greece')">Greece</p>
    </div>

    <!-- Quiz Modal -->
    <div id="quiz-modal" class="hidden fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Mythology Quiz</h3>
            <div id="quiz-question" class="text-gray-800 dark:text-gray-200 mb-4"></div>
            <div id="quiz-options" class="space-y-2"></div>
            
            <!-- Poga un skaitītājs -->
            <div class="flex justify-between items-center mt-4">
                <button id="next-btn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hidden" onclick="nextQuestion()">Next</button>
                <div id="quiz-question-counter" class="text-sm text-gray-800 dark:text-gray-200 font-semibold">
                    <!-- Tiks parādīts jautājuma skaitītājs (piemēram, 2/10) -->
                </div>
                <button onclick="closeQuiz()" class="text-red-500 hover:text-red-700">Close</button>
            </div>

            <div id="quiz-result" class="mt-4 text-lg font-semibold"></div>
            <div id="quiz-review" class="mt-4 hidden max-h-96 overflow-y-auto">
                <!-- Review answers here -->
            </div>
        </div>
    </div>
</x-app-layout>
