<x-app-layout>
    

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-lg sm:rounded-xl">
                <div class="p-6 text-gray-900 dark:text-gray-100 relative">
                    
                    
                    <img src="https://static.vecteezy.com/system/resources/previews/019/765/478/non_2x/world-map-with-country-location-free-vector.jpg" 
                         alt="Dashboard Image" 
                         class="w-full h-auto relative rounded-lg shadow-md">

                         
                    <!-- Red Dot for Japan with Tooltip -->
                    <div class="absolute top-[45%] left-[82%]">
                        <a href="#japan-mythology"
                           class="relative group block w-4 h-4 bg-red-600 rounded-full shadow-lg cursor-pointer transition-all ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110 hover:bg-red-700">
                            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-700 text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Japan
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            
            <div id="japan-mythology" class="mt-10 p-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-xl shadow-xl">
                <h3 class="text-3xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Japanese Mythology</h3>
                <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Japanese mythology, deeply rooted in Shinto, introduces a pantheon of gods and spirits known as kami. These kami govern natural elements, human endeavors, and spiritual principles. Among the vast array, three stand out as particularly iconic and influential:
                </p>

                <div class="mt-6 text-gray-900 dark:text-gray-100">
                    <h4 class="font-semibold">1. Amaterasu (天照大御神) – The Sun Goddess</h4>
                    <p>Amaterasu is the most revered deity in Shinto and is regarded as the goddess of the sun and the universe. Her light is said to bring life and order to the world, and she symbolizes purity, harmony, and growth...</p>
                </div>

                <div class="mt-6 text-gray-900 dark:text-gray-100">
                    <h4 class="font-semibold">2. Susanoo (須佐之男命) – The Storm God</h4>
                    <p>Susanoo, Amaterasu’s younger brother, is the impetuous and unpredictable god of storms and seas. Known for his tumultuous personality, he represents both destruction and renewal...</p>
                </div>

                <div class="mt-6 text-gray-900 dark:text-gray-100">
                    <h4 class="font-semibold">3. Tsukuyomi (月読命) – The Moon God</h4>
                    <p>Tsukuyomi, the god of the moon, is a quieter and more enigmatic figure compared to his siblings Amaterasu and Susanoo. Representing the night and the moon's reflective, tranquil light...</p>
                </div>

                <div class="mt-6 text-gray-900 dark:text-gray-100">
                    <h4 class="font-semibold">Symbolic Importance</h4>
                    <p>Together, these three deities – Amaterasu, Susanoo, and Tsukuyomi – embody the interconnected forces of nature and life in Japanese mythology. Their interactions shape the cosmos...</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Smooth Scrolling CSS -->
    <style>
        html {
            scroll-behavior: smooth; /* Enables smooth scrolling */
        }
    </style>
</x-app-layout>
