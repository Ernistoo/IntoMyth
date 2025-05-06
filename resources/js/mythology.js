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
    greece: `
    <div class="mt-6 text-gray-900 dark:text-gray-100">
    <h3 class="text-3xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Greek Mythology</h3>
    
    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">The Creation of the Cosmos</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            According to <a href="https://en.wikipedia.org/wiki/Hesiod" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Hesiod's Theogony</a>, the universe began with:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Chaos</strong> (Χάος) - The primordial void from which all things emerged</li>
            <li><strong>Gaia</strong> (Γαῖα) - The Earth, first divine being to materialize</li>
            <li><strong>Tartarus</strong> (Τάρταρος) - The abyss beneath the Earth</li>
            <li><strong>Eros</strong> (Ἔρως) - The force of attraction and procreation</li>
        </ul>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Gaia gave birth to <strong>Uranus</strong> (Οὐρανός), the starry sky, who became her equal and mate. Their union produced:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mt-2">
            <li>The twelve <strong>Titans</strong> - Including Cronus and Rhea</li>
            <li>The three <strong>Cyclopes</strong> - One-eyed giant craftsmen</li>
            <li>The three <strong>Hecatoncheires</strong> - Hundred-handed giants</li>
        </ul>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">The Rise of the Olympians</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            The <a href="https://en.wikipedia.org/wiki/Titanomachy" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Titanomachy</a> (War of the Titans) marked the transition from Titan to Olympian rule:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mt-2">
            <li>Cronus overthrew Uranus but swallowed his own children to prevent prophecy</li>
            <li>Rhea saved Zeus by hiding him in Crete and giving Cronus a stone instead</li>
            <li>Zeus later freed his siblings (Poseidon, Hades, Hera, Demeter, Hestia) from Cronus' stomach</li>
            <li>After a 10-year war, the Olympians defeated the Titans and imprisoned them in Tartarus</li>
        </ul>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">The Olympian Pantheon</h4>
        
        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Zeus" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">1. Zeus (Ζεύς)</a> - King of the Gods
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                God of thunder, lightning, and supreme ruler of Mount Olympus:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Symbols: Lightning bolt, eagle, oak tree</li>
                <li>Notable for his many affairs with goddesses and mortals</li>
                <li>Father of major gods (Athena, Apollo, Artemis, Hermes) and heroes (Heracles, Perseus)</li>
                <li>Maintained cosmic order (Dike) and enforced divine justice</li>
            </ul>
        </div>

        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Poseidon" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">2. Poseidon (Ποσειδῶν)</a> - God of the Sea
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                Ruler of the oceans, earthquakes, and horses:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Symbols: Trident, dolphin, horse</li>
                <li>Created springs and caused earthquakes by striking the earth</li>
                <li>Competed with Athena for patronage of Athens</li>
                <li>Father of many mythical creatures (Pegasus, Cyclops Polyphemus)</li>
            </ul>
        </div>

        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Hades" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">3. Hades (ᾍδης)</a> - God of the Underworld
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                Ruler of the dead and lord of the Underworld:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Symbols: Cerberus, Cypress tree, key</li>
                <li>Abducted Persephone to be his queen (explaining seasons)</li>
                <li>Not evil but stern and unyielding</li>
                <li>Rarely left the Underworld and wasn't worshipped like other Olympians</li>
            </ul>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">Major Myths and Heroes</h4>
        
        <div class="mt-4">
            <h5 class="font-semibold text-lg mb-2">The Twelve Labors of Heracles</h5>
            <p class="text-gray-700 dark:text-gray-300">
                <a href="https://en.wikipedia.org/wiki/Heracles" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Heracles</a> (Roman Hercules) completed impossible tasks as penance:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Slaying the Nemean Lion and Lernaean Hydra</li>
                <li>Capturing the Golden Hind and Erymanthian Boar</li>
                <li>Cleaning the Augean stables in one day</li>
                <li>Retrieving Cerberus from the Underworld</li>
            </ul>
        </div>

        <div class="mt-6">
            <h5 class="font-semibold text-lg mb-2">The Odyssey</h5>
            <p class="text-gray-700 dark:text-gray-300">
                <a href="https://en.wikipedia.org/wiki/Odyssey" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Odysseus'</a> 10-year journey home after the Trojan War:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Encounters with Cyclops, Sirens, and Circe</li>
                <li>Journey to the Underworld</li>
                <li>Final revenge against Penelope's suitors</li>
            </ul>
        </div>
    </div>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold text-xl mb-2">Cultural Legacy</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Greek mythology has profoundly influenced Western civilization:
        </p>
        <ul class="list-disc pl-6 space-y-2 mt-2 text-gray-700 dark:text-gray-300">
            <li>Foundation of Greek literature (Homer, Hesiod, tragedians)</li>
            <li>Source of countless artistic and architectural motifs</li>
            <li>Psychological concepts (Oedipus complex, narcissism)</li>
            <li>Astronomical names (planets, constellations)</li>
        </ul>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            The myths were central to ancient Greek religion, with major sanctuaries like <a href="https://en.wikipedia.org/wiki/Delphi" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Delphi</a> and <a href="https://en.wikipedia.org/wiki/Olympia,_Greece" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Olympia</a> dedicated to the gods.
        </p>
    </div>
</div>
    `,
    china: `
    <div class="mt-6 text-gray-900 dark:text-gray-100">
    <h3 class="text-3xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Chinese Mythology</h3>
    
    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">Cosmogony and Creation</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Chinese creation myths vary by tradition, but core elements include:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Pangu (盘古)</strong> - The primordial being who separated heaven and earth from chaos (<a href="https://en.wikipedia.org/wiki/Pangu" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Pangu myth</a>)</li>
            <li><strong>Nüwa (女娲)</strong> - The mother goddess who created humans from yellow clay</li>
            <li>The <strong>Three Sovereigns and Five Emperors</strong> - Mytho-historical rulers who established civilization</li>
        </ul>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            According to the <a href="https://en.wikipedia.org/wiki/Huainanzi" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Huainanzi</a>, in the beginning there was formless chaos (Hundun). Pangu emerged and over 18,000 years separated Yin (earth) from Yang (heaven).
        </p>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">Major Deities and Figures</h4>
        
        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Jade_Emperor" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">1. Yu Huang (玉皇) - The Jade Emperor</a>
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                Supreme ruler of heaven in Taoist mythology:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Governs the celestial bureaucracy</li>
                <li>Final judge of souls after death</li>
                <li>His birthday is celebrated on the 9th day of Chinese New Year</li>
                <li>Originally a mortal who attained immortality through meditation</li>
            </ul>
        </div>

        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Nüwa" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">2. Nüwa (女娲)</a> - Creator Goddess
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                Serpent-bodied goddess who repaired heaven and created humanity:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Mended the broken heavens after Gong Gong damaged the pillars</li>
                <li>Established marriage rituals</li>
                <li>Often depicted with Fuxi (her brother/husband) holding compass and square</li>
                <li>One of the Three Sovereigns in early mythology</li>
            </ul>
        </div>

        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Yanluo_Wang" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">3. Yanluo Wang (阎罗王)</a> - King of Hell
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                Ruler of Diyu (the underworld) who judges the dead:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Presides over the Ten Courts of Hell</li>
                <li>Determines reincarnation based on mortal deeds</li>
                <li>Originally derived from the Hindu/Buddhist Yama</li>
                <li>Often depicted with Ox-Head and Horse-Face guardians</li>
            </ul>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">Key Myths and Legends</h4>
        
        <div class="mt-4">
            <h5 class="font-semibold text-lg mb-2">The Great Flood</h5>
            <p class="text-gray-700 dark:text-gray-300">
                Similar to global flood myths, featuring <a href="https://en.wikipedia.org/wiki/Yu_the_Great" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Yu the Great</a>:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Lasted for generations until Yu solved it</li>
                <li>Yu dredged rivers instead of building dams (unlike his father Gun)</li>
                <li>Worked for 13 years, passing his home without entering</li>
                <li>Established the Xia Dynasty after controlling the waters</li>
            </ul>
        </div>

        <div class="mt-6">
            <h5 class="font-semibold text-lg mb-2">Journey to the West</h5>
            <p class="text-gray-700 dark:text-gray-300">
                The epic tale of <a href="https://en.wikipedia.org/wiki/Sun_Wukong" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Sun Wukong</a> (Monkey King):
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Monkey King's rebellion against heaven</li>
                <li>His imprisonment under Five Elements Mountain</li>
                <li>Accompanying Xuanzang to fetch Buddhist scriptures</li>
                <li>Defeating demons while learning humility</li>
            </ul>
        </div>
    </div>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold text-xl mb-2">Philosophical and Cultural Influence</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Chinese mythology blends Taoist, Buddhist, and Confucian elements:
        </p>
        <ul class="list-disc pl-6 space-y-2 mt-2 text-gray-700 dark:text-gray-300">
            <li>Concept of Tian (Heaven) as moral force</li>
            <li>Ancestor worship and filial piety themes</li>
            <li>Yin-Yang balance in creation stories</li>
            <li>Mandate of Heaven justifying dynastic cycles</li>
        </ul>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            These myths remain alive in festivals like <a href="https://en.wikipedia.org/wiki/Qixi_Festival" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Qixi</a> (celebrating Zhinü and Niulang) and <a href="https://en.wikipedia.org/wiki/Duanwu_Festival" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Dragon Boat Festival</a> (honoring Qu Yuan).
        </p>
    </div>
</div>
    `,
    meso: `
    <div class="mt-6 text-gray-900 dark:text-gray-100">
    <h3 class="text-3xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Mesoamerican Mythology</h3>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">The Creation of the World</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Mesoamerican mythology, especially from the <a href="https://en.wikipedia.org/wiki/Aztec_mythology" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Aztec</a> and <a href="https://en.wikipedia.org/wiki/Maya_mythology" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Maya</a> civilizations, tells of multiple creations and destructions of the world. The Aztecs believed in Five Suns—eras of creation and destruction.
        </p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Tezcatlipoca</strong> - Creator god and first sun, devoured by jaguars</li>
            <li><strong>Quetzalcoatl</strong> - God of wind and knowledge, who ruled the second sun</li>
            <li>Each sun ended with cataclysms (wind, fire, floods, jaguars)</li>
        </ul>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            In Maya mythology, the <a href="https://en.wikipedia.org/wiki/Popol_Vuh" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Popol Vuh</a> describes failed human creations from mud and wood, until the gods finally succeeded with maize, the sacred crop of the Maya.
        </p>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">Gods of Creation and Duality</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            In both Aztec and Maya beliefs, duality played a central role. Key creator deities include:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mt-2">
            <li><strong>Ometeotl</strong> – Aztec dual god of creation, both male (Ometecuhtli) and female (Omecihuatl)</li>
            <li><strong>Hunab Ku</strong> – Maya supreme god and creator, sometimes seen as remote and abstract</li>
            <li><strong>Itzamna</strong> – Maya god of wisdom and sky, involved in creation and civilization</li>
        </ul>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">Hero Twins and the Underworld</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            A core Maya myth from the Popol Vuh tells of the Hero Twins:
        </p>

        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Hunahpu_and_Xbalanque" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Hunahpu and Xbalanque</a> – The Hero Twins
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                They were sons of a sacrificed god and faced trials in Xibalba, the Maya underworld:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Outwitted the Lords of Xibalba through cleverness and magic</li>
                <li>Sacrificed themselves and were resurrected as celestial bodies</li>
                <li>Hunahpu became the sun, Xbalanque the moon (in some interpretations)</li>
                <li>Represent duality, rebirth, and cosmic balance</li>
            </ul>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">Key Myths and Events</h4>

        <div class="mt-4">
            <h5 class="font-semibold text-lg mb-2">The Sacrifice of the Gods</h5>
            <p class="text-gray-700 dark:text-gray-300">
                In Aztec myth, the Fifth Sun (current world) was created through divine self-sacrifice:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li><strong>Nanahuatzin</strong> leapt into a fire to become the sun</li>
                <li><strong>Tecciztecatl</strong> hesitated but followed, becoming the moon</li>
                <li>The gods then sacrificed themselves to move the sun across the sky</li>
                <li>Established a cosmic model requiring human blood to sustain the sun</li>
            </ul>
        </div>

        <div class="mt-6">
            <h5 class="font-semibold text-lg mb-2">Quetzalcoatl and the Creation of Humanity</h5>
            <p class="text-gray-700 dark:text-gray-300">
                The feathered serpent god <a href="https://en.wikipedia.org/wiki/Quetzalcoatl" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Quetzalcoatl</a> descended into the underworld to retrieve the bones of past humans:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Tricked Mictlantecuhtli, the lord of the underworld</li>
                <li>Used his own blood to reanimate the bones and create modern humans</li>
                <li>Associated with renewal, learning, and civilization</li>
            </ul>
        </div>
    </div>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold text-xl mb-2">Symbolic Importance</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Mesoamerican mythology reflected the peoples’ understanding of cosmic cycles, sacrifice, and duality. Common themes include:
        </p>
        <ul class="list-disc pl-6 space-y-2 mt-2 text-gray-700 dark:text-gray-300">
            <li>Creation through destruction and sacrifice</li>
            <li>Balance of opposites: life/death, light/dark, male/female</li>
            <li>Reverence for celestial bodies (sun, moon, Venus)</li>
            <li>Humans' role in maintaining cosmic order through offerings</li>
        </ul>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Temples like <a href="https://en.wikipedia.org/wiki/Templo_Mayor" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Templo Mayor</a> in Tenochtitlan and pyramids like <a href="https://en.wikipedia.org/wiki/Temple_of_Kukulkan" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">El Castillo</a> at Chichén Itzá were built as cosmic centers aligned with mythological and astronomical principles.
        </p>
    </div>
</div>

    `,
    india: `
    <div class="mt-6 text-gray-900 dark:text-gray-100">
    <h3 class="text-3xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Indian Mythology</h3>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">The Creation of the Universe</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Indian mythology, particularly in <a href="https://en.wikipedia.org/wiki/Hindu_mythology" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Hindu mythology</a>, describes a cyclic cosmology where the universe is created, preserved, and destroyed repeatedly. In the beginning, there was only a formless, infinite ocean. From it emerged:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Brahman</strong> – The ultimate, formless cosmic spirit</li>
            <li><strong>Brahma</strong> – The creator god, born from a lotus growing from Vishnu's navel</li>
        </ul>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Time is divided into four Yugas (epochs), and the universe undergoes constant cycles of creation and dissolution (Pralaya), governed by divine forces.
        </p>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">The Hindu Trinity (Trimurti)</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            At the heart of Hindu cosmology is the <strong>Trimurti</strong>—three aspects of the Supreme Reality, each with cosmic responsibilities:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mt-2">
            <li><strong>Brahma</strong> – The creator, associated with wisdom and the Vedas</li>
            <li><strong>Vishnu</strong> – The preserver, incarnates in different avatars to protect dharma</li>
            <li><strong>Shiva</strong> – The destroyer and transformer, symbolizing regeneration through destruction</li>
        </ul>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">Avatars and Epic Heroes</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Vishnu’s avatars are central to many stories and epics. The two most famous are:
        </p>

        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Rama" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">1. Rama</a> – The Ideal King
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                Hero of the <a href="https://en.wikipedia.org/wiki/Ramayana" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Ramayana</a>, he is the embodiment of dharma and virtue:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Exiled for 14 years due to palace intrigue</li>
                <li>Wife Sita kidnapped by demon king Ravana</li>
                <li>Helped by Hanuman and the Vanara army</li>
                <li>Defeated Ravana and restored order</li>
            </ul>
        </div>

        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Krishna" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">2. Krishna</a> – The Divine Statesman
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                Central figure in the <a href="https://en.wikipedia.org/wiki/Mahabharata" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Mahabharata</a> and the Bhagavad Gita:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Served as charioteer and guide to Arjuna</li>
                <li>Taught the philosophy of karma, duty, and detachment</li>
                <li>Also known for his playful childhood and divine miracles</li>
                <li>Considered the complete incarnation of Vishnu</li>
            </ul>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">Key Myths and Cosmic Events</h4>

        <div class="mt-4">
            <h5 class="font-semibold text-lg mb-2">The Churning of the Ocean (Samudra Manthan)</h5>
            <p class="text-gray-700 dark:text-gray-300">
                Gods and demons churned the cosmic ocean to obtain Amrita (elixir of immortality):
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Used Mount Mandara as a churning rod and Vasuki (a serpent) as the rope</li>
                <li>Produced divine items like Lakshmi (goddess of wealth) and Kamadhenu (wish-granting cow)</li>
                <li>Vishnu took the form of Mohini to distribute Amrita to the gods only</li>
            </ul>
        </div>

        <div class="mt-6">
            <h5 class="font-semibold text-lg mb-2">The Dance of Shiva (Tandava)</h5>
            <p class="text-gray-700 dark:text-gray-300">
                Shiva’s cosmic dance symbolizes the cycle of creation and destruction:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Destroys evil and ignorance through rhythmic movement</li>
                <li>Often depicted in Nataraja form, surrounded by flames</li>
                <li>Stomps on the demon of illusion (Apasmara)</li>
                <li>Represents eternal rhythm and divine balance</li>
            </ul>
        </div>
    </div>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold text-xl mb-2">Symbolic Importance</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Indian mythology weaves together spirituality, moral philosophy, and cosmic understanding. It emphasizes:
        </p>
        <ul class="list-disc pl-6 space-y-2 mt-2 text-gray-700 dark:text-gray-300">
            <li>The cyclical nature of time and existence</li>
            <li>The pursuit of dharma (duty) and moksha (liberation)</li>
            <li>The interconnectedness of divine and human realms</li>
            <li>The balance of opposing forces (creation/destruction, male/female)</li>
        </ul>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            These myths continue to shape Hindu religious practices, rituals, festivals like <a href="https://en.wikipedia.org/wiki/Diwali" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Diwali</a> and <a href="https://en.wikipedia.org/wiki/Holi" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Holi</a>, and temple iconography across India and beyond.
        </p>
    </div>
</div>

    `,
    egypt: `
    <div class="mt-6 text-gray-900 dark:text-gray-100">
    <h3 class="text-3xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Egyptian Mythology</h3>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">The Creation of the World</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Ancient Egyptian mythology presents several creation myths depending on regional cult centers, but a common theme is the emergence of order (Ma'at) from chaos (Nun). In the Heliopolitan tradition:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Atum</strong> – The self-created god who emerged from the primordial waters of Nun</li>
            <li>He created <strong>Shu</strong> (air) and <strong>Tefnut</strong> (moisture), who then birthed <strong>Geb</strong> (earth) and <strong>Nut</strong> (sky)</li>
        </ul>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Nut and Geb gave rise to Osiris, Isis, Set, and Nephthys, foundational figures in Egyptian mythology who shaped divine kingship and the afterlife.
        </p>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">The Divine Siblings and Cosmic Conflict</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            The Osirian myth cycle centers on divine drama between siblings:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mt-2">
            <li><strong>Osiris</strong> – God of the dead and afterlife, just ruler of Egypt</li>
            <li><strong>Isis</strong> – Goddess of magic and motherhood, Osiris’s devoted wife</li>
            <li><strong>Set</strong> – God of chaos and storms, murdered Osiris to seize power</li>
            <li><strong>Nephthys</strong> – Sister and helper of Isis, mother of Anubis</li>
        </ul>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            After Osiris was dismembered by Set, Isis and Nephthys reassembled him. Their union brought forth <strong>Horus</strong>, who avenged his father and restored order.
        </p>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">Key Deities and Their Roles</h4>

        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Ra" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">1. Ra</a> – The Sun God
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                Central to Egyptian cosmology, Ra travels across the sky by day and through the underworld by night:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Fought nightly against the serpent Apophis to ensure sunrise</li>
                <li>Combined with other gods (e.g., Amun-Ra) in later periods</li>
                <li>Symbol of kingship, life, and renewal</li>
            </ul>
        </div>

        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Horus" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">2. Horus</a> – The Sky and Kingship God
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                Son of Osiris and Isis, Horus battled Set to reclaim the throne of Egypt:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Often depicted as a falcon-headed deity</li>
                <li>Represents divine kingship; pharaohs seen as Horus incarnate</li>
                <li>Symbol of protection and righteous rule</li>
            </ul>
        </div>

        <div class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h4 class="font-semibold text-xl mb-2">
                <a href="https://en.wikipedia.org/wiki/Anubis" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">3. Anubis</a> – God of the Dead and Mummification
            </h4>
            <p class="text-gray-700 dark:text-gray-300">
                Jackal-headed god who guided souls to the afterlife and oversaw embalming:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Weighed the hearts of the dead against Ma'at (truth)</li>
                <li>Ensured proper burial rites and transition to the afterlife</li>
                <li>Associated with cemeteries and tomb protection</li>
            </ul>
        </div>
    </div>

    <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b pb-2">Key Myths and Ritual Concepts</h4>

        <div class="mt-4">
            <h5 class="font-semibold text-lg mb-2">The Weighing of the Heart</h5>
            <p class="text-gray-700 dark:text-gray-300">
                Upon death, the soul faced judgment in the Hall of Ma'at:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Heart weighed against the feather of Ma'at (truth and justice)</li>
                <li>If heavier, the soul was devoured by Ammit (a demon goddess)</li>
                <li>If balanced, the soul entered the blissful Field of Reeds</li>
            </ul>
        </div>

        <div class="mt-6">
            <h5 class="font-semibold text-lg mb-2">Ra’s Nightly Journey Through the Duat</h5>
            <p class="text-gray-700 dark:text-gray-300">
                Every night, Ra traveled through the Duat (underworld), symbolizing death and rebirth:
            </p>
            <ul class="list-disc pl-6 space-y-1 mt-2 text-gray-700 dark:text-gray-300">
                <li>Fought chaos serpent Apophis each night</li>
                <li>Joined by other gods like Set and Mehen in his solar barque</li>
                <li>Victory ensured sunrise and cosmic balance</li>
            </ul>
        </div>
    </div>

    <div class="mt-6 text-gray-900 dark:text-gray-100">
        <h4 class="font-semibold text-xl mb-2">Symbolic Importance</h4>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Egyptian mythology emphasizes the harmony of divine order (Ma'at) over chaos, the eternal cycle of life and death, and the sacred nature of kingship. It highlights:
        </p>
        <ul class="list-disc pl-6 space-y-2 mt-2 text-gray-700 dark:text-gray-300">
            <li>The pharaoh as a living god and protector of Ma'at</li>
            <li>The importance of the afterlife and funerary rituals</li>
            <li>Balance between cosmic forces through gods’ interactions</li>
            <li>The integration of mythology into temple worship and state ideology</li>
        </ul>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Egyptian myths remain visible today in temples like <a href="https://en.wikipedia.org/wiki/Karnak" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Karnak</a> and <a href="https://en.wikipedia.org/wiki/Temple_of_Isis" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Philae</a>, as well as the rituals and texts found in tombs like the <a href="https://en.wikipedia.org/wiki/Book_of_the_Dead" class="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Book of the Dead</a>.
        </p>
    </div>
</div>

    `

    // Add other country templates similarly
};

// Create interactive dots on the map
function createCountryDots() {
    const mapContainer = document.querySelector('.p-6.text-gray-900');
    
    countries.forEach(country => {
        const dotHTML = `
            <div class="absolute country-marker" 
                 style="top: ${country.top}%; left: ${country.left}%;"
                 data-country-id="${country.id}">
                <button id="${country.id}-dot"
                    class="relative group block w-4 h-4 bg-red-600 rounded-full shadow-lg cursor-pointer transition-all ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110 hover:bg-red-700 focus:outline-none"
                    aria-label="${country.name}">
                    
                    <!-- Tooltip -->
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
                        ${country.name}
                        <div class="absolute top-full left-1/2 w-2 h-2 bg-gray-800 transform -translate-x-1/2 -translate-y-1 rotate-45"></div>
                    </div>
                    
                    <!-- Pulse animation -->
                    <span class="absolute inset-0 rounded-full bg-red-400 opacity-0 group-hover:opacity-100 animate-ping"></span>
                </button>
            </div>
        `;
        
        mapContainer.insertAdjacentHTML('beforeend', dotHTML);
        
        const dotElement = document.getElementById(`${country.id}-dot`);
        
        // Click event for modal
        dotElement.addEventListener('click', (e) => {
            e.preventDefault();
            showMythologyModal(country.id);
        });
        
        // Hover effects
        dotElement.addEventListener('mouseenter', () => {
            // Highlight country on map (assuming you have SVG paths with country IDs)
            const countryPath = document.querySelector(`#${country.id}-path`);
            if (countryPath) {
                countryPath.classList.add('fill-current', 'text-red-400');
                countryPath.style.transition = 'fill 0.3s ease';
            }
        });
        
        dotElement.addEventListener('mouseleave', () => {
            // Remove highlight
            const countryPath = document.querySelector(`#${country.id}-path`);
            if (countryPath) {
                countryPath.classList.remove('fill-current', 'text-red-400');
            }
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