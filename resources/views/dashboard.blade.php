<x-app-layout>
    <div class="py-2">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-2">
            <p class="text-center text-white">Click on any country with a red dot to see information about their rich mythology!</p>
            <div class="bg-white dark:bg-gray-600 overflow-hidden shadow-lg sm:rounded-xl">
                <div class="p-6 text-gray-900 dark:text-gray-100 relative">
                    <!-- World Map -->
                    <img src="https://static.vecteezy.com/system/resources/previews/019/765/478/non_2x/world-map-with-country-location-free-vector.jpg"
                        alt="World Map"
                        class="w-full h-auto relative rounded-lg shadow-md"
                        id="world-map">
                    
                    <!-- Modal Overlay (hidden by default) -->
                    <div id="mythology-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 hidden transition-opacity duration-300">
                        <div class="relative bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto transform transition-all duration-500 scale-0" id="modal-content">
                            <button id="close-modal" class="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div class="p-8" id="modal-body">
                                <!-- Content will be injected here by JavaScript -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Include JavaScript -->
    @vite(['resources/js/mythology.js'])
</x-app-layout>