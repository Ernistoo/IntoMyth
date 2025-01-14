<x-app-layout>
    <div class="py-2">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-2">
            <p class="text-center text-white">Click on any country with a red dot to see information about their rich mythology!</p>
            <div class="bg-white dark:bg-gray-600 overflow-hidden shadow-lg sm:rounded-xl">

                <div class="p-6 text-gray-900 dark:text-gray-100 relative">

                    <img src="https://static.vecteezy.com/system/resources/previews/019/765/478/non_2x/world-map-with-country-location-free-vector.jpg"
                        alt="Dashboard Image"
                        class="w-full h-auto relative rounded-lg shadow-md">

                    <!-- Dynamic Country Dots -->
                    <template id="dot-template">
                        <div class="absolute top-[${top}%] left-[${left}%]">
                            <a href="#" id="${id}-dot"
                                class="relative group block w-4 h-4 bg-red-600 rounded-full shadow-lg cursor-pointer transition-all ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110 hover:bg-red-700">
                                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-700 text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    ${country}
                                </div>
                            </a>
                        </div>
                    </template>


                    <script>
                        // Function to add dot dynamically
                        function addCountryDot(id, country, top, left) {
                            const template = document.getElementById('dot-template').innerHTML;
                            const dotHTML = template.replace('${id}', id).replace('${country}', country).replace('${top}', top).replace('${left}', left);
                            document.querySelector('.p-6.text-gray-900').insertAdjacentHTML('beforeend', dotHTML);

                            // Smooth scrolling functionality
                            document.getElementById(`${id}-dot`).addEventListener('click', function() {
                                // Hide all mythology sections
                                const mythologySections = document.querySelectorAll('[id$="-mythology"]');
                                mythologySections.forEach(section => section.classList.add('hidden'));

                                // Show the clicked mythology section
                                const section = document.getElementById(`${id}-mythology`);
                                section.classList.remove('hidden');

                                // Smooth scroll to the section
                                section.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            });
                        }

                        // Adding Japan, Norway, and Greece as examples
                        addCountryDot('japan', 'Japan', 45, 82);
                        addCountryDot('norway', 'Norway', 33, 48);
                        addCountryDot('greece', 'Greece', 36, 49); // Updated values for Greece


                        // You can call this function with new countries as needed
                    </script>

                </div>
            </div>

            <!-- Japanese Mythology Section - Hidden by Default -->
            <div id="japan-mythology" class="mt-10 p-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-xl shadow-xl hidden">
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

            <!-- Norwegian Mythology Section - Hidden by Default -->
            <div id="norway-mythology" class="mt-10 p-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-xl shadow-xl hidden">
                <h3 class="text-3xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Norwegian Mythology</h3>
                <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Norwegian mythology is rich with tales of gods, giants, and other mythical beings deeply rooted in Norse traditions. Prominent figures include the powerful Odin and his family of gods...
                </p>
                <!-- Add details as needed -->
            </div>

        </div>
    </div>

    <!-- Smooth Scrolling CSS -->
    <style>
        html {
            scroll-behavior: smooth;
            /* Enables smooth scrolling */
        }
    </style>
</x-app-layout>