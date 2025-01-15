<x-app-layout>
    <div class="py-2">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-2">
            <p class="text-center text-white">Click on any country with a red dot to see information about their rich mythology!</p>
            <div class="bg-white dark:bg-gray-600 overflow-hidden shadow-lg sm:rounded-xl">

                <div class="p-6 text-gray-900 dark:text-gray-100 relative">

                    <img src="https://static.vecteezy.com/system/resources/previews/019/765/478/non_2x/world-map-with-country-location-free-vector.jpg"
                        alt="Dashboard Image"
                        class="w-full h-auto relative rounded-lg shadow-md">

                   
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
    function addCountryDot(id, country, top, left) {
        const dotHTML = `
            <div class="absolute" style="top: ${top}%; left: ${left}%;">
                <a href="#" id="${id}-dot"
                    class="relative group block w-4 h-4 bg-red-600 rounded-full shadow-lg cursor-pointer transition-all ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110 hover:bg-red-700">
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-700 text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        ${country}
                    </div>
                </a>
            </div>
        `;

        
        document.querySelector('.p-6.text-gray-900').insertAdjacentHTML('beforeend', dotHTML);

        document.getElementById(`${id}-dot`).addEventListener('click', function (event) {
            event.preventDefault(); 

            const mythologySections = document.querySelectorAll('[id$="-mythology"]');
            mythologySections.forEach(section => section.classList.add('hidden'));

            const section = document.getElementById(`${id}-mythology`);
            section.classList.remove('hidden');

            section.scrollIntoView({
                behavior: 'smooth',
            });
        });
    }

    // Adding countries with dynamic dots
    addCountryDot('japan', 'Japan', 45, 82);
    addCountryDot('norway', 'Norway', 33, 48);
    addCountryDot('greece', 'Greece', 45, 52);
    addCountryDot('india', 'India', 54, 67);
    addCountryDot('egypt', 'Egypt', 51, 54);
    addCountryDot('china', 'China', 46, 70);
    addCountryDot('meso', 'Mesoamerica', 54, 20);

    
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
        Norwegian mythology, deeply rooted in Norse traditions, is a tapestry of tales featuring gods, giants, and legendary heroes. Among the vast pantheon of Norse deities, three stand out as the most iconic and revered:
    </p>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold">1. Odin – The All-Father</h4>
        <p>Odin, the king of the Aesir, is the god of wisdom, war, and death. Known for his insatiable quest for knowledge, he sacrificed one of his eyes to drink from the Well of Mimir, gaining unparalleled wisdom. Odin is often depicted with his ravens Huginn and Muninn, representing thought and memory, and his spear Gungnir, which never misses its target...</p>
    </div>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold">2. Thor – The Thunder God</h4>
        <p>Thor, Odin’s son, is the mighty god of thunder, storms, and protection. Armed with his enchanted hammer Mjölnir, he defends both gods and humans from giants and other threats. Thor’s strength and courage are legendary, and he is regarded as the protector of Midgard (the human world)...</p>
    </div>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold">3. Loki – The Trickster</h4>
        <p>Loki is the cunning and unpredictable trickster god. Though a companion of the Aesir, he often causes mischief and chaos, which leads to both humorous and tragic outcomes. Loki’s shape-shifting abilities and sharp wit make him a fascinating and complex figure in Norse mythology...</p>
    </div>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold">Symbolic Importance</h4>
        <p>These three figures – Odin, Thor, and Loki – epitomize the themes of wisdom, strength, and unpredictability that run through Norwegian mythology. Their stories are interwoven with the fate of the world, from the creation of the cosmos to its eventual destruction and rebirth during Ragnarok...</p>
    </div>
</div>


<div id="greece-mythology" class="mt-10 p-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-xl shadow-xl hidden">
    <h3 class="text-3xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Greek Mythology</h3>
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Greek mythology, one of the most influential and enduring mythological traditions, is rich with tales of gods, heroes, and the creation of the world. Among the Olympian gods, three stand out as particularly significant and powerful:
    </p>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold">1. Zeus – The King of the Gods</h4>
        <p>Zeus, the ruler of Mount Olympus, is the god of the sky, thunder, and justice. Armed with his mighty thunderbolt, he governs both gods and humans with authority. Zeus is known for his numerous adventures and offspring, making him a central figure in countless myths...</p>
    </div>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold">2. Poseidon – The God of the Sea</h4>
        <p>Poseidon, Zeus's brother, is the god of the sea, earthquakes, and horses. Wielding his trident, he rules over all aquatic realms and is both a creator and destroyer. His temperamental nature often mirrors the unpredictable seas he governs...</p>
    </div>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold">3. Athena – The Goddess of Wisdom</h4>
        <p>Athena, born fully armed from Zeus's forehead, is the goddess of wisdom, warfare, and strategy. Revered for her intelligence and fairness, she is also the protector of Athens, the city named in her honor. Athena embodies the balance of intellect and strength...</p>
    </div>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold">Symbolic Importance</h4>
        <p>Zeus, Poseidon, and Athena represent the pillars of Greek mythology: power, nature, and wisdom. Their stories and interactions shape the epic tales of creation, heroism, and the eternal struggle between chaos and order...</p>
    </div>
</div>
<div id="india-mythology" class="mt-10 p-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-xl shadow-xl hidden">
    <h3 class="text-3xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Indian Mythology</h3>
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Indian mythology, deeply embedded in Hinduism, Jainism, and Buddhism, is a vast and intricate tapestry of gods, goddesses, and cosmic stories. Among the countless deities, three stand out as central to the Hindu pantheon and its cosmic cycle:
    </p>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold">1. Brahma – The Creator</h4>
        <p>Brahma is the god of creation and the first member of the Trimurti (trinity). He is responsible for the creation of the universe and all beings. Often depicted with four faces symbolizing the four Vedas, Brahma represents knowledge and creation...</p>
    </div>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold">2. Vishnu – The Preserver</h4>
        <p>Vishnu, the second member of the Trimurti, is the protector and preserver of the universe. Known for his many avatars, including Rama and Krishna, Vishnu descends to restore balance and righteousness whenever the world is in turmoil...</p>
    </div>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold">3. Shiva – The Destroyer</h4>
        <p>Shiva, the third member of the Trimurti, is the god of destruction and transformation. Representing the cycle of creation and rebirth, Shiva’s cosmic dance, the Tandava, signifies the destruction of the old to make way for the new...</p>
    </div>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold">Symbolic Importance</h4>
        <p>The Trimurti – Brahma, Vishnu, and Shiva – symbolize the cyclical nature of the universe: creation, preservation, and destruction. Their stories and attributes are the cornerstone of Indian mythology, shaping cultural and spiritual beliefs...</p>
    </div>
</div>

        </div>
    </div>

  
    <style>
        html {
            scroll-behavior: smooth;
        }
    </style>
</x-app-layout>