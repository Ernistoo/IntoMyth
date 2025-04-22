// Country data - could be moved to a separate JSON file if it grows large
const countries = [
    { id: 'japan', name: 'Japan', top: 45, left: 82 },
    { id: 'norway', name: 'Norway', top: 33, left: 48 },
    { id: 'greece', name: 'Greece', top: 45, left: 52 },
    { id: 'india', name: 'India', top: 54, left: 67 },
    { id: 'egypt', name: 'Egypt', top: 51, left: 54 },
    { id: 'china', name: 'China', top: 46, left: 70 },
    { id: 'meso', name: 'Mesoamerica', top: 54, left: 20 }
];

// Mythology content templates
const mythologyTemplates = {
    japan: `
        <div class="mt-6 text-gray-900 dark:text-gray-100">
    <h3 class="text-3xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Japanese Mythology</h3>
    
    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">The Creation of Japan</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            According to the <a href="https://en.wikipedia.org/wiki/Kojiki" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Kojiki</a> and <a href="https://en.wikipedia.org/wiki/Nihon_Shoki" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Nihon Shoki</a>, the oldest chronicles of Japan, the universe began as a formless, egg-like chaos. From this emerged the first kami (gods):
        </p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Ame-no-Minakanushi</strong> (天之御中主神) - The first kami to emerge in the universe</li>
            <li><strong>Takamimusubi</strong> (高御産巣日神) and <strong>Kamimusubi</strong> (神産巣日神) - The next two creator kami</li>
        </ul>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            These primordial deities gave birth to the divine couple <strong>Izanagi</strong> and <strong>Izanami</strong>, who were tasked with creating the Japanese islands. Standing on the Floating Bridge of Heaven, they stirred the ocean with a jeweled spear, and the drops that fell formed the first island, Onogoro.
        </p>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">The Divine Couple: Izanagi and Izanami</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <a href="https://en.wikipedia.org/wiki/Izanagi" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Izanagi</a> (male) and <a href="https://en.wikipedia.org/wiki/Izanami" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Izanami</a> (female) created the Japanese archipelago and many kami:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mt-2">
            <li>Gave birth to the eight main islands of Japan</li>
            <li>Created kami of mountains, rivers, winds, and other natural phenomena</li>
            <li>Izanami died giving birth to Kagutsuchi (fire god) and descended to Yomi (underworld)</li>
            <li>Izanagi's failed attempt to retrieve her led to the ritual purification that created Amaterasu, Tsukuyomi, and Susanoo</li>
        </ul>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">The Three Precious Children</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            When Izanagi purified himself after escaping Yomi, three of the most important kami were born:
        </p>
        
        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Amaterasu" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">1. Amaterasu Ōmikami (天照大御神)</a> - The Sun Goddess
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                Born from Izanagi's left eye, Amaterasu is the central deity of Shinto and ancestor of the Imperial Family. Key aspects:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Ruler of Takamagahara (the Plain of High Heaven)</li>
                <li>Her retreat into a cave (Ama-no-Iwato) plunged the world into darkness</li>
                <li>The other kami lured her out with a mirror (Yata no Kagami) and jewels</li>
                <li>Sent her grandson Ninigi to rule Japan, giving him the Three Sacred Treasures</li>
            </ul>
        </div>

        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Tsukuyomi-no-Mikoto" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">2. Tsukuyomi-no-Mikoto (月読命)</a> - The Moon God
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                Born from Izanagi's right eye, Tsukuyomi governs the night and the moon:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Originally shared the sky with Amaterasu</li>
                <li>Killed the food goddess Uke Mochi, causing Amaterasu to refuse to look at him</li>
                <li>This separation created day and night</li>
                <li>Less prominent in myths compared to his siblings</li>
            </ul>
        </div>

        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Susanoo" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">3. Susanoo-no-Mikoto (須佐之男命)</a> - The Storm God
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                Born from Izanagi's nose, Susanoo is the unpredictable god of storms and the sea:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Initially banished from heaven for his destructive behavior</li>
                <li>Slayed the eight-headed serpent Yamata-no-Orochi</li>
                <li>Discovered the sacred sword Kusanagi-no-Tsurugi in its tail</li>
                <li>Became a culture hero who taught humans agriculture and medicine</li>
            </ul>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">Key Myths and Events</h4>
        
        <div class="mt-4">
            <h5 class="font-semibold text-lg mb-2">The Ama-no-Iwato (天岩戸) Myth</h5>
            <p class="text-gray-700 dark:text-gray-300">
                When Susanoo wreaked havoc in Takamagahara, Amaterasu hid in a cave, plunging the world into darkness. The other kami:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Created the sacred mirror (Yata no Kagami) and jewels (Yasakani no Magatama)</li>
                <li>Performed a lewd dance by Uzume that made the kami laugh</li>
                <li>Amaterasu's curiosity brought her out, restoring light to the world</li>
            </ul>
        </div>

        <div class="mt-6">
            <h5 class="font-semibold text-lg mb-2">The Descent of Ninigi</h5>
            <p class="text-gray-700 dark:text-gray-300">
                Amaterasu sent her grandson <a href="https://en.wikipedia.org/wiki/Ninigi-no-Mikoto" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Ninigi-no-Mikoto</a> to rule Japan, giving him:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>The mirror (symbolizing wisdom)</li>
                <li>The jewels (symbolizing benevolence)</li>
                <li>The sword Kusanagi (symbolizing valor)</li>
                <li>These became the Imperial Regalia of Japan</li>
            </ul>
        </div>
    </div>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold text-xl mb-2">Symbolic Importance</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Japanese mythology establishes the divine origin of Japan and its imperial family. The stories emphasize:
        </p>
        <ul class="list-disc pl-6 space-y-2 mt-2 text-gray-700 dark:text-gray-300">
            <li>The sacredness of nature (mountains, rivers, etc. as kami)</li>
            <li>The importance of purity and ritual</li>
            <li>The cyclical nature of life and death</li>
            <li>Harmony between humans and the spiritual world</li>
        </ul>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            These myths remain central to Shinto practice and Japanese cultural identity today. Many shrines, like <a href="https://en.wikipedia.org/wiki/Ise_Grand_Shrine" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Ise Grand Shrine</a>, are dedicated to these deities.
        </p>
    </div>
</div>
    `,
    norway: `
    <div class="mt-6 text-gray-900 dark:text-gray-100">
    <h3 class="text-3xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Norse Mythology</h3>
    
    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">The Creation of the Cosmos</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            According to the <a href="https://en.wikipedia.org/wiki/Poetic_Edda" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Poetic Edda</a> and <a href="https://en.wikipedia.org/wiki/Prose_Edda" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Prose Edda</a>, the universe began in the void called <strong>Ginnungagap</strong>, where:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>The fiery realm <strong>Muspelheim</strong> and icy <strong>Niflheim</strong> collaced</li>
            <li>From the melting ice emerged <a href="https://en.wikipedia.org/wiki/Ymir" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Ymir</a>, the first giant, and the cow <strong>Audhumbla</strong></li>
            <li>Audhumbla licked the ice to reveal <strong>Búri</strong>, ancestor of the gods</li>
            <li>Odin and his brothers slew Ymir to create the world from his body</li>
        </ul>
    </div>

    <div class="mb-8">
    <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">The Nine Realms</h4>
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Norse cosmology centers around Yggdrasil, the World Tree, connecting the Nine Realms. These realms are:
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h5 class="font-semibold">Asgard</h5>
            <p>Home of the <a href="https://en.wikipedia.org/wiki/%C3%86sir" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Æsir</a> gods, connected by Bifröst rainbow bridge</p>
        </div>
        <div class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h5 class="font-semibold">Midgard</h5>
            <p>Realm of humans, protected by Thor from giants</p>
        </div>
        <div class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h5 class="font-semibold">Jötunheim</h5>
            <p>Land of the <a href="https://en.wikipedia.org/wiki/J%C3%B6tunn" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Jötnar</a> (giants), frequent enemies of the gods</p>
        </div>
        <div class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h5 class="font-semibold">Niflheim</h5>
            <p>Realm of ice and mist, home to <a href="https://en.wikipedia.org/wiki/Hel_(mythology)" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Hel</a>, goddess of the underworld</p>
        </div>
        <div class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h5 class="font-semibold">Muspelheim</h5>
            <p>Realm of fire, home to the fire giants, ruled by <a href="https://en.wikipedia.org/wiki/Surtur" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Surtur</a></p>
        </div>
        <div class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h5 class="font-semibold">Alfheim</h5>
            <p>Realm of the <a href="https://en.wikipedia.org/wiki/Light_elf" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Light Elves</a>, known for their beauty and light</p>
        </div>
        <div class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h5 class="font-semibold">Vanaheim</h5>
            <p>Realm of the <a href="https://en.wikipedia.org/wiki/V%C3%A1nir" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Vánir</a> gods, associated with fertility, nature, and prosperity</p>
        </div>
        <div class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h5 class="font-semibold">Svartalfheim</h5>
            <p>Realm of the <a href="https://en.wikipedia.org/wiki/Dark_elf" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Dark Elves</a>, skilled craftsmen and often associated with mischief</p>
        </div>
        <div class="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h5 class="font-semibold">Helheim</h5>
            <p>The realm of the dead, ruled over by the goddess <a href="https://en.wikipedia.org/wiki/Hel_(mythology)" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Hel</a></p>
        </div>
    </div>
</div>


    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">The Aesir Gods</h4>
        
        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Odin" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">1. Odin (Óðinn) - The Allfather</a>
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                The one-eyed ruler of Asgard who sacrificed his eye at <a href="https://en.wikipedia.org/wiki/M%C3%ADmir" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Mímir's Well</a> for wisdom:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Master of magic (seidr) and poetry</li>
                <li>Commands two ravens: <strong>Huginn</strong> (Thought) and <strong>Muninn</strong> (Memory)</li>
                <li>Father of Thor and many other gods</li>
                <li>Will fall to <a href="https://en.wikipedia.org/wiki/Fenrir" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Fenrir</a> at Ragnarök</li>
            </ul>
        </div>

        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Thor" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">2. Thor (Þórr) - God of Thunder</a>
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                Red-bearded protector of Midgard with his hammer <a href="https://en.wikipedia.org/wiki/Mj%C3%B6lnir" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Mjölnir</a>:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Frequent battles with frost giants</li>
                <li>Owns magical items: iron gloves Járngreipr and belt Megingjörð</li>
                <li>Rides a chariot pulled by goats Tanngrisnir and Tanngnjóstr</li>
                <li>Will kill and be killed by Jörmungandr at Ragnarök</li>
            </ul>
        </div>

        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Loki" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">3. Loki - The Trickster</a>
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                The shape-shifting blood-brother of Odin who walks between worlds:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Father of monsters: Fenrir, Jörmungandr, and Hel</li>
                <li>Causes Baldr's death with mistletoe</li>
                <li>Bound with his son's entrails until Ragnarök</li>
                <li>Will lead the dead against the gods in the final battle</li>
            </ul>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">Key Myths and Events</h4>
        
        <div class="mt-4">
            <h5 class="font-semibold text-lg mb-2">The Theft of Thor's Hammer</h5>
            <p class="text-gray-700 dark:text-gray-300">
                When the giant Thrym stole Mjölnir, Thor disguised himself as Freyja to retrieve it:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Loki accompanied Thor as his "maid"</li>
                <li>Thrym was fooled by Thor's veil and appetite</li>
                <li>Thor reclaimed his hammer and slaughtered the giants</li>
            </ul>
        </div>

        <div class="mt-6">
            <h5 class="font-semibold text-lg mb-2">The Death of Baldr</h5>
            <p class="text-gray-700 dark:text-gray-300">
                The tragic story of <a href="https://en.wikipedia.org/wiki/Baldr" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Baldr</a>, the beloved god:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>His mother Frigg made all things swear not to harm him</li>
                <li>Loki discovered mistletoe hadn't sworn the oath</li>
                <li>Guided blind Höðr to shoot Baldr with a mistletoe arrow</li>
                <li>Hel agreed to release Baldr if all things wept for him - Loki refused</li>
            </ul>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">Ragnarök - The Twilight of the Gods</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            The prophesied end of the world featuring:
        </p>
        <ul class="list-disc pl-6 space-y-2 mt-2 text-gray-700 dark:text-gray-300">
            <li>Three winters without summer (Fimbulwinter)</li>
            <li>The ship <a href="https://en.wikipedia.org/wiki/Naglfar" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Naglfar</a> made of dead men's nails</li>
            <li>The wolf Fenrir breaking free to devour Odin</li>
            <li>Thor and Jörmungandr killing each other</li>
            <li>Survivors including Vidar, Vali, and Thor's sons</li>
        </ul>
    </div>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold text-xl mb-2">Cultural Legacy</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Norse mythology profoundly influenced:
        </p>
        <ul class="list-disc pl-6 space-y-2 mt-2 text-gray-700 dark:text-gray-300">
            <li>Viking Age culture and worldview</li>
            <li>Modern literature (Tolkien's Middle-earth)</li>
            <li>Days of the week (Thursday = Thor's Day)</li>
            <li>Neopagan movements like <a href="https://en.wikipedia.org/wiki/%C3%81satr%C3%BA" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Ásatrú</a></li>
        </ul>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            These myths were preserved in medieval Icelandic texts like the <a href="https://en.wikipedia.org/wiki/Codex_Regius" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline font-medium" target="_blank">Codex Regius</a>, offering a window into pre-Christian Scandinavian beliefs.
        </p>
    </div>
</div>
    `,
    // Add other country templates similarly
};

// Create dots on the map
function createCountryDots() {
    const mapContainer = document.querySelector('.p-6.text-gray-900');
    
    countries.forEach(country => {
        const dotHTML = `
            <div class="absolute" style="top: ${country.top}%; left: ${country.left}%;">
                <button id="${country.id}-dot"
                    class="relative group block w-4 h-4 bg-red-600 rounded-full shadow-lg cursor-pointer transition-all ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110 hover:bg-red-700">
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-700 text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        ${country.name}
                    </div>
                </button>
            </div>
        `;
        
        mapContainer.insertAdjacentHTML('beforeend', dotHTML);
        
        // Add click event
        document.getElementById(`${country.id}-dot`).addEventListener('click', (e) => {
            e.preventDefault();
            showMythologyModal(country.id);
        });
    });
}

// Show modal with zoom animation
function showMythologyModal(countryId) {
    const modal = document.getElementById('mythology-modal');
    const modalContent = document.getElementById('modal-content');
    const modalBody = document.getElementById('modal-body');
    const dot = document.getElementById(`${countryId}-dot`);
    
    // Get dot position relative to viewport
    const dotRect = dot.getBoundingClientRect();
    const dotCenterX = dotRect.left + dotRect.width / 2;
    const dotCenterY = dotRect.top + dotRect.height / 2;
    
    // Set initial position and size
    modalContent.style.transformOrigin = `${dotCenterX}px ${dotCenterY}px`;
    
    // Set content
    modalBody.innerHTML = mythologyTemplates[countryId] || '<p>Content not available</p>';
    
    // Show modal and animate
    modal.classList.remove('hidden');
    setTimeout(() => {
        modalContent.classList.remove('scale-0');
        modalContent.classList.add('scale-100');
    }, 10);
}

// Close modal
function setupModalClose() {
    const modal = document.getElementById('mythology-modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('close-modal');
    
    closeBtn.addEventListener('click', () => {
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-0');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    });
    
    // Close when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createCountryDots();
    setupModalClose();
});