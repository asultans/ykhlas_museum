export interface WorldInstrument {
  id: string;
  name: { en: string; ru: string; kk: string };
  description: { en: string; ru: string; kk: string };
  images: string[];
  audio: string;
  country: string;
  countryName: { en: string; ru: string; kk: string };
  flag: string;
}

// Country flags mapping
export const countryFlags: Record<string, string> = {
  armenia: '🇦🇲',
  afghanistan: '🇦🇫',
  belarus: '🇧🇾',
  bulgaria: '🇧🇬',
  hungary: '🇭🇺',
  vietnam: '🇻🇳',
  germany: '🇩🇪',
  georgia: '🇬🇪',
  india: '🇮🇳',
  indonesia: '🇮🇩',
  italy: '🇮🇹',
  cambodia: '🇰🇭',
  china: '🇨🇳',
  congo: '🇨🇩',
  korea: '🇰🇷',
  laos: '🇱🇦',
  latvia: '🇱🇻',
  lithuania: '🇱🇹',
  morocco: '🇲🇦',
  mongolia: '🇲🇳',
  pakistan: '🇵🇰',
  poland: '🇵🇱',
  russia: '🇷🇺',
  romania: '🇷🇴',
  serbia: '🇷🇸',
  tajikistan: '🇹🇯',
  thailand: '🇹🇭',
  ukraine: '🇺🇦',
  finland: '🇫🇮',
  france: '🇫🇷',
  czech: '🇨🇿',
  estonia: '🇪🇪',
  japan: '🇯🇵',
};

// Country names in 3 languages
export const countryNames: Record<string, { en: string; ru: string; kk: string }> = {
  armenia: { en: 'Armenia', ru: 'Армения', kk: 'Армения' },
  afghanistan: { en: 'Afghanistan', ru: 'Афганистан', kk: 'Ауғанстан' },
  belarus: { en: 'Belarus', ru: 'Беларусь', kk: 'Беларусь' },
  bulgaria: { en: 'Bulgaria', ru: 'Болгария', kk: 'Болгария' },
  hungary: { en: 'Hungary', ru: 'Венгрия', kk: 'Венгрия' },
  vietnam: { en: 'Vietnam', ru: 'Вьетнам', kk: 'Вьетнам' },
  germany: { en: 'Germany', ru: 'Германия', kk: 'Германия' },
  georgia: { en: 'Georgia', ru: 'Грузия', kk: 'Грузия' },
  india: { en: 'India', ru: 'Индия', kk: 'Үндістан' },
  indonesia: { en: 'Indonesia', ru: 'Индонезия', kk: 'Индонезия' },
  italy: { en: 'Italy', ru: 'Италия', kk: 'Италия' },
  cambodia: { en: 'Cambodia', ru: 'Камбоджа', kk: 'Камбоджа' },
  china: { en: 'China', ru: 'Китай', kk: 'Қытай' },
  congo: { en: 'Congo', ru: 'Конго', kk: 'Конго' },
  korea: { en: 'Korea', ru: 'Корея', kk: 'Корея' },
  laos: { en: 'Laos', ru: 'Лаос', kk: 'Лаос' },
  latvia: { en: 'Latvia', ru: 'Латвия', kk: 'Латвия' },
  lithuania: { en: 'Lithuania', ru: 'Литва', kk: 'Литва' },
  morocco: { en: 'Morocco', ru: 'Марокко', kk: 'Марокко' },
  mongolia: { en: 'Mongolia', ru: 'Монголия', kk: 'Монғолия' },
  pakistan: { en: 'Pakistan', ru: 'Пакистан', kk: 'Пәкістан' },
  poland: { en: 'Poland', ru: 'Польша', kk: 'Польша' },
  russia: { en: 'Russia', ru: 'Россия', kk: 'Ресей' },
  romania: { en: 'Romania', ru: 'Румыния', kk: 'Румыния' },
  serbia: { en: 'Serbia', ru: 'Сербия', kk: 'Сербия' },
  tajikistan: { en: 'Tajikistan', ru: 'Таджикистан', kk: 'Тәжікстан' },
  thailand: { en: 'Thailand', ru: 'Таиланд', kk: 'Таиланд' },
  ukraine: { en: 'Ukraine', ru: 'Украина', kk: 'Украина' },
  finland: { en: 'Finland', ru: 'Финляндия', kk: 'Финляндия' },
  france: { en: 'France', ru: 'Франция', kk: 'Франция' },
  czech: { en: 'Czech Republic', ru: 'Чехия', kk: 'Чехия' },
  estonia: { en: 'Estonia', ru: 'Эстония', kk: 'Эстония' },
  japan: { en: 'Japan', ru: 'Япония', kk: 'Жапония' },
};

export const worldInstruments: WorldInstrument[] = [
  {
    id: 'afghanistan_rubab',
    name: { en: `Afghan rubab`, ru: `Афганский рубаб (XVIII в.)`, kk: `Ауған рубабы (XVIII ғ.)` },
    description: {
      en: `Afghan rubab (18th century) - used to play in Uzbekistan. It consists of the shape of a large dug-in wedge-shaped case with crescent-shaped cutouts on the sides and a short neck with a rounded head. On the neck there is a fingerboard, the lower end of which is expanding, goes into the deck and closes the upper part of the body. The remaining areas of the instrument are tightened with a leather membrane. There are five veined playing melodic strings on a rubab (paired 1-2, 3-4) and 10-11 resonating metal ones. Most often, Afghan rubab is used as an instrument by professional musicians for solo and ensemble performance.
The Afghan rubab instrument is small in size, oval in shape, hollowed from a single piece of pear wood, neck without frets with a head bent back. The neck of the Afghan rubab has horn-shaped tips. The lower part of the deck is covered with a foal skin membrane; the upper part is wooden, with holes slotted in it. On the head there are 5 pegs, the 6th is located on the neck. The shortest and highest-sounding string is put on it. The instrument is covered with mother of pearl and embossed wood carvings. It is played with a wooden plectrum.`,
      ru: `Афганский рубаб (XVIII в.)

используется для игры в Узбекистане. Состоит из формы большого долбленого клинообразного корпуса с серповидными вырезами по бокам и короткого грифа с закругленной головкой. На шейке – накладной гриф, нижний конец которого расширяется, переходит в деку и закрывает верхнюю часть корпуса. Остальные области инструмента затянуты кожаной мембраной. В рубабе есть пять жильных игровых мелодических струн (парные 1-2, 3-4) и 10-11 резонирующих металлических. Чаще всего афганский рубаб употребляется как инструмент профессиональных музыкантов для сольного и ансамблевого исполнения.
Инструмент афганский рубаб имеет небольшой размер, долбленый из цельного куска грушевого дерева корпус овальной формы, шейку без ладов с отогнутой назад головкой. У шейки афганского рубаба имеются рожковидные наконечники. Нижняя часть деки покрыта мембраной из кожи жеребенка, верхняя – деревянная, с продолбленными в ней отверстиями. На головке 5 колков, 6-ой расположен на грифе. На него надевается самая короткая и высоко звучащая струна. Инструмент покрыт перламутром и рельефной резьбой по дереву. Играют на афганском рубабе деревянным плектром.`,
      kk: `Ауған рубабы (XVIII ғ.)

Өзбекстанның ішекті-шертпелі музыкалық аспабы. Құрылымы екі жағынан шұңқыр тәрізді кесілген шанағы, қырларында орақ пішіндес ойықтардан және басы дөңгеленген қысқа мойынан құралады. Аспаптың мойынында қосымша мойын орналасқан, сол мойын жоғарыдан төменге қарай кеңейіп, шанақтың  жоғарғы бөлігін жабады. Аспаптың шанағы тері мембранамен жабылған. Рубабта 5 әуендік ішектері және 10-11 резонанс ішектері болады. Көп жағдайда ауған рубабында жеке  және ансамбль құрамында кәсіби музыканттар ойнайды.
Ауған рубабының көлемі аса үлкен емес, сопақша формалы шанағы алмұрт ағашынан ойып жасалынады. Аспап мойыны пернесіз, басы сәл артқа қайырылған. Аспаптың мойнында мүйіз тәріздес ұштықтары болады. Рубаб шанағының астыңғы бөлігі құлын терісімен қапталады, жоғары бөлігі – саңылаулары бар ағаш қақпақ. Аспаптың басында 5 құлақ, ал 6-шы құлақ  мойнында орналасады. Оған ең қысқа және қатты дыбысталатын ішек байланады. Аспаптың беті әртүрлі оюлармен безендіріледі. Ауған рубабы ағаш плекторымен ойналады.`
    },
    images: ['/instruments/world/afghanistan/rubab/1.png'],
    audio: '/audio/world/afghanistan/rubab.mp3',
    country: 'afghanistan',
    countryName: countryNames.afghanistan,
    flag: countryFlags.afghanistan
  },
  {
    id: 'armenia_dhol',
    name: { en: `Dhol`, ru: `Дхол`, kk: `Дхол` },
    description: {
      en: `Dhol

Armenian percussion musical instrument, a kind of double-sided drum, shaped like a cylinder and covered with one or two membranes. Previously used in military campaigns, it is now used in an ensemble with zurna, accompanies dances, processions.
The emergence of a dhol belongs to the pagan period of the history of Armenia. But the instrument is still used in the Armenian Church.
Dhol is a metal decorated cylinder with small bells, a kind of double-sided drum. One of the membranes is thicker than the other. The bass side of the dhol is approximately 10 mm in diameter. Both the cylinder and the membranes can be made of various materials. Membrane selection depends on the type of dhol. Ancient Armenians used ceramics, walnuts, copper. Despite the heavy weight of the walnut, it is most often used, since this material has the best timbre. Membrane or membranes can be both on both sides, and on one. If the membrane is on both sides, they are connected by a string. Also, the sound of a dhol depends on the elasticity of the string.
The Armenian people have a huge number of musical instruments. A variety of tambourines, drums were used throughout historical Armenia. The earliest references to Armenian musical instruments date back to the 30-20 centuries BC. According to ancient manuscripts, several types of kettle-drum (percussion musical instrument with a certain pitch) were used during the worship of the ancient Armenian goddess Anahit. Ancient plates dating from around 800 BC were found during excavations of the Karmir Blur hill 30 km north of Yerevan.
Dhol was previously used by Armenians before military campaigns. To play the dhol, two wooden sticks made of bamboo or reeds are required. The sound is extracted by two wooden sticks (thick (digging) and thin (tchipot)), which are called digging, or fingers and palms of the hands.
Depending on the area of ​​origin, the digging can have various shapes and sizes. Some diggers can be 30 to 40 cm long and 1.5 cm in diameter. Despite the shape and size of the digging, their method of application is the same. Kopals have different names, depending on the area. For example, a kombal (Nagorno-Karabakh), chomakh (Balu), togmag (Small Armenia).
Another thin stick is called tchipot. It is used to strike the main membrane. Tchipot can be an ordinary tree branch, 30 to 40 cm long. Tchipot is made from a branch of black viburnum or cornel tree, so it has a very flexible shape. There are two main types of chips, depending on the area. The first one has a length from 30 to 40 cm, the second one also has a length from 30 to 40 cm, but with a leather belt at one end, through which two fingers of the player are placed.`,
      ru: `Дхол

армянский ударный музыкальный инструмент, род двустороннего барабана, имеющий форму цилиндра и покрытый одной или двумя мембранами. Ранее применялся в военных походах, в настоящее время используется в ансамбле с зурнами, сопровождает танцы, шествия.
Возникновение дхола относится к языческому периоду истории Армении. Но инструмент всё ещё используется в Армянской Церкви.
Дхол - это металлический, украшенный цилиндр с небольшими бубенчиками, род двустороннего барабана. Одна из мембран толще другой. Басовая сторона дхола составляет в диаметре примерно 10 мм. Как цилиндр, так и мембраны могут изготовляться из различных материалов. Подбор мембраны зависит от типа дхола. Древние армяне использовали керамику, грецкий орех, медь. Несмотря на тяжёлый вес грецкого ореха, чаще всего используют именно его, так как у этого материала лучший тембр. Мембран, или мембраны могут быть как с обеих сторон, так и с одной. Если мембрана находится с обеих сторон, то их связывают вереницей. Также, и от упругости вереницы зависит звук дхола.
Армянский народ имеет огромное количество музыкальных инструментов. Разнообразные тамбурины, барабаны использовались по всей Исторической Армении. Самые первые упоминания об армянских музыкальных инструментах относятся к XXX-XX векам до н.э. Согласно древним рукописям, несколько вид литавр (ударный музыкальный инструмент с определенной высотой звучания) использовалось во время поклонения древнеармянской богине Анаит. Древние тарелки, датировавшиеся, примерно, 800 годом до н.э. были найдены при раскопках холма Кармир-блур в 30 км к северу от Еревана.
Дхол ранее применялся армянами перед военными походами. Для игры на дхоле требуются две деревянные палки, сделанные из бамбука или тростника. Звук извлекается двумя деревянными палками (толстой (копал) и тонкой (тчипот)), которые называются копал, или пальцами и ладонями рук.
В зависимости от местности происхождения, копал может иметь различные формы и размеры. Некоторые копалы могут быть от 30 до 40 см длиной и 1.5 см в диаметре. Несмотря на форму и размер копала, их способ применения является одинаковым. Копалами имеют различные названия, в зависимости от местности. Например, комбал (Нагорный Карабах), чомах (Балу), тогмаг (Малая Армения).
Другая, тонкая палка, называется тчипот. Она применяется для удара по основной мембране. Тчипот может быть обычной веточкой дерева, от 30 до 40 см длиной. Тчипот изготовляется из ветки чёрной калины или кизилового дерева, поэтому он имеет очень гибкую форму. Есть два основных типа тчипота, в зависимости от местности. Первый, имеет длину от 30 до 40 см, второй тоже от 30 до 40 см, но с кожаным ремнём в одном конце, через который помещаются два пальца играющего.`,
      kk: `Дхол

армян халқының соқпалы музыкалық аспабы, екі жақты, цилиндр пішіндес, бір немесе екі мембранамен қапталған барабан түрі. Ертеректе әскери жорық кезінде, кейііннен зурнамен бірге ансамбльдерде ән-биді және салтанатты шерулерді сүйемелдеуге қолданылады.
Аспаптың қалыптасуы Армения тарихындағы пұтқа табынушылық кезеңіне сәйкес келеді. Дхол әлі күнге деейін армян шіркеулерінде қолданылады.
Дхол – бұл шағын сылдырмақтар тағылған металлдан жасалған цилиндр, екі жақты барабан түрі. Жарғақшаның бірі екіншісінен қалыңдау болып келеді. Дхолдың бас үнді жағының диаметрі шамамен 10 мм. Корпусы секілді мембраналар да түрлі материалдардан жасалады. Әдетте, мембрана материалы дхол түріне байланысты болады. Ертеректе армяндар қыш, грек жаңғағын, мысты пайдаланған. Көп жағдайда ауыр салмағына қарамастан грек жаңғағын қолданған, себебі оның тембрі әлдеқайда жақсы. Мембрана екі жақтан не тек бір жағынан болуы мүмкін. Егер екі жағында да болса, оларды тізбектеп байлаған. Сондай-ақ, осы тізбектің серпімділігіне дхолдың дыбысы тәуелді.
Армян халқының музыкалық аспаптары сан алуан. Түрлі тамбуриндер, барабандар бүкіл Армения жерінде қолданылды. Армян музыкалық аспаптары туралы алғашқы деректер б.з.б. ХХХ-ХХ ғғ. мерзімделеді. Көне қолжазбалар бойынша, литавралардың бірнеше түрі Анаит ежелгі армян құдайына табыну рәсімдерінде пайдаланылды. Б.з.б. 800 ж. мерзімделген көне табақтар Ереваннан 30 км қашықтықтағы Кармир-блур төбесін қазу барысында табылған.
Бұрын дхол соғыс кезінде қолданылған. Аспапта ойнау үшін бамбуктан немесе қамыстан жасалған таяқшалар қажет. Дыбыс копал деп аталатын екі ағаш таяқшамен (жуаны – копал, жіңішкесі – тчипот) немесе алақан-саусақтармен алынады.
Қалыптасу жеріне байланысты копалдың пішіндері мен өлшемдері әр түрлі болуы мүмкін, бірақ қолданылу әдісі бірдей. Кейбірінің ұзындығы 30-40 см, диаметрі 1,5 см болады. Жергілікті жерге қарай атаулары өзгеше болып келеді. Мысалы, комбал (Таулы Карабах), чомах (Балу), тогмаг (Кіші Армения).
Жіңішке соғу таяғы тчипот деп аталады. Ол негізгі мембрананы соғу үшін қолданылады. Тчипот ретінде ұзындығы 30-40 см кәдімгі ағаш бұтағын да қолдануға болады. Оны қара шеңгелден немесе қызыл талдан жасайды, сондықтан иілгіш келеді. Жергілікті жерге қарай тчипоттың екі түрі бар: біріншісі – ұзындығы 30-40 см; екіншісінің де ұзындығы 30-40 см, бірақ бір жағында орындаушының екі саусағы кигізілетін тері бау тағылған.`
    },
    images: ['/instruments/world/armenia/dhol/1.png'],
    audio: '/audio/world/armenia/dhol.mp3',
    country: 'armenia',
    countryName: countryNames.armenia,
    flag: countryFlags.armenia
  },
  {
    id: 'armenia_pku',
    name: { en: `Pku`, ru: `Пку или армянский рожок`, kk: `Пку немесе армян рожогі` },
    description: {
      en: `Pku or the Armenian rozhok is an unusual Armenian wind instrument that adorns any composition in ethnic style, not to mention the performance of folk music.
If compare the pku with other wind instruments, it can be called as something in between zurna and duduk, but, however, such a comparison is unlikely to be correct.
The basis of originality of a pku is a combination of materials from which it is made: it is the horn of a young bull or buffalo and apricot wood. This combination allows you to achieve an exclusive, unique sound created by skillfully selected materials and the shape of the instrument. Apricot wood gives an unusual, incomparable resonance, and its use can be considered a feature of Armenian wind instruments. The horn of a young bull is not too large in diameter, so the propagation of the “soft” resonance from the apricot tube with holes occurs evenly.
Compared with pku duduk sounds softer, and zurna, on the contrary, is more expressive, therefore there is literally nothing to replace the Armenian horn! Of the classical wind instruments, the English oboe is located closest to pku and zurna, in terms of timbre and sound characteristics, however, in expression, Armenian instruments are much superior to calm oboe. The number of holes on pku can vary from five to seven, or even eight; the capabilities of the instrument depend on this. You can only set up the pku manually, if you carefully expand the holes in the tube literally by microscopic dimensions. Such a responsible procedure can only be entrusted to a qualified craftsman.
To make the pku last a long time, it is necessary to carefully look after it, then the sound of this instrument will be close to perfection. This instrument is strictly contraindicated in high temperature and high humidity, so it is important to store the pku in an unpressurized case with ventilation holes, in a cool, dry place. To prevent the wood from drying out, the pku can be treated with fresh peanut butter.
The technology is as follows: put a few kernels of ripe walnuts, shelled, put into a piece of soft natural fabric (it is advisable to use soft material without lint). After that, the nuts are softened with a blunt object until the fabric is saturated with protruding peanut butter. Then, chopped nuts must be thoroughly shaken off and gently wipe the wooden surface of the heel with a soft oiled cloth.
The “horny” part of the pku also needs careful care. Do not dry the horn or leave it in direct sunlight, this may crack the material. For care, it is necessary to avoid any chemistry that may contribute to the drying of the horn. Accidental contamination is best cleaned mechanically using a soft cloth. In no case the horn should be scraped or processed with sandpaper. Particular attention should be paid to the joints of wood and horns, as well as the fastening of the mouthpiece. With regular care, the instrument will sound impeccable for a long time, captivating the hearts of listeners with amazing sounds in its expressiveness and melody.
Since ancient times, the Armenian people used pku and zurna not only for entertainment purposes, but also for ritual or ceremonial. Because of their sonorous sound, pku and zurna were used for military purposes when an enemy was discovered or during an attack. Before the battle, the Armenian wars danced combat dances to the sounds of these musical instruments: Kertsi, Byrd, Kochari, Yarhushta to raise morale in the army, and after defeating in battle the same songs and dances celebrated the victory over the enemy.`,
      ru: `Пку или армянский рожок

Необычный армянский духовой инструмент, украшающий любую композицию в этническом стиле, не говоря уж об исполнении народной музыки.
Если сравнивать пку с другими духовыми, то можно назвать его чем-то средним между зурной и дудуком, но, впрочем, такое сравнение вряд ли будет корректным.
Основой оригинальности пку является сочетание материалов, из которых он изготавливается: это рог молодого быка или буйвола и древесина абрикосового дерева. Такое сочетание позволяет добиться эксклюзивного, неповторимого звучания, создаваемого искусно подобранными материалами и формой инструмента. Древесина абрикоса даёт необычный, ни с чем несравнимый резонанс, и её использование может считаться особенностью армянских духовых инструментов. Рог молодого быка имеет не слишком большой диаметр, поэтому распространение «мягкого» резонанса от абрикосовой трубки с отверстиями происходит равномерно.
По сравнению с пку дудук звучит более мягко, а зурна, наоборот, экспрессивнее, поэтому заменить Армянский рожок буквально нечем! Из классических духовых инструментов английский гобой находится наиболее близко к пку и зурне, по тембру и особенностям звучания, однако, по экспрессии армянские инструменты намного превосходят спокойный гобой. Количество отверстий на пку может варьироваться от пяти до семи и даже восьми, от этого зависят возможности инструмента. Настроить пку можно только вручную, если аккуратно, буквально на микроскопические размеры расширить отверстия в трубке. Доверить такую ответственную процедуру можно только квалифицированному мастеру.
Чтобы пку служил долго, за ним нужно тщательно ухаживать, тогда звук этого инструмента будет близок к совершенству. Строго противопоказана этому инструменту высокая температура и повышенная влажность, поэтому хранить пку нужно в негерметичном футляре с вентиляционными отверстиями, в прохладном сухом месте. Для предотвращения пересыхания деревянной части пку можно обработать свежим ореховым маслом. 
Технология такова: несколько ядрышек спелых грецких орехов, очищенных от скорлупы, положить в кусочек мягкой натуральной ткани (желательно использовать мягкий материал без ворса). После этого, орехи размягчаются с помощью тупого предмета до тех пор, пока ткань не окажется пропитанной выступающим ореховым маслом. Затем, измельчённые орехи нужно тщательно стряхнуть и мягкой промасленной тряпочкой аккуратно протереть деревянную поверхность пку.
«Роговая» часть пку тоже нуждается в тщательном уходе. Нельзя пересушивать рог или оставлять его под прямыми солнечными лучами, от этого материал может потрескаться. При уходе необходимо избегать любой химии, которая может способствовать пересушиванию рога. Случайные загрязнения лучше очищать механическим путём, используя мягкую ткань. Ни в коем случае нельзя скоблить рог или пытаться обрабатывать его наждачной бумагой. Особенное внимание нужно уделять местам соединения древесины и рога, а также креплению мундштука. При регулярном уходе инструмент долгое время будет звучать безупречно, очаровывая сердца слушателей удивительными по своей выразительности и мелодичности звуками.
Пку и зурну с древнейших времен армянский народ использовал не только в увеселительных целях, но и в ритуальных или обрядовых. Пку и зурну из-за своей звонкости звучания использовали в военных целях при обнаружении врага или при наступлении. Армянские войны перед битвой под звуки этих музыкальных инструментов танцевали боевые танцы: Керци, Берд, Кочари, Ярхушта для поднятия морально-боевого духа в войске, а после одоления в бою теми же песнями и танцами праздновали победу над противником.`,
      kk: `Пку немесе армян рожогі

армян халқының үрмелі ерекше музыкалық аспабы.
Пкуды басқа аспаптармен салыстырғанда оның үні зурна мен дудуктың аралығында деуге болады.
Пкудың негізгі ерекшелігі жасалатын материалдардың үйлесімділігі болып табылады: жас бұқаның немесе буйволдың мүйізі мен өрік ағашы. Шебер таңдалған материалдар мен аспап формасы арқасында бірегей, қайталанбас дыбыс алуға болады. Өрік ағашы қайталанбас резонанс береді және оның қолданылуын армян үрмелі аспаптарының негізгі ерекшелігі деп атауға болады. Жас бұқа мүйізінің диаметрі шағын, сондықтан саңылаулары бар өрік ағашынан жасалған түтіктен «жұмсақ» резонанстың таралуы біркелкі жүреді.
Пкумен салыстырғанда, дудуктың дыбысы жұмсақ, ал зурна – керісінше, дыбысы анық, сондықтан армян рожогін басқа аспаппен ауыстыру мүмкін емес! Классикалық үрмелі аспаптардан тембрі мен дыбысталу ерекшелігі бойынша пку мен зурнаға әлдеқайда жақыны ағылшын гобойы, бірақ айқындылығы жағынан армян аспаптары қарапайым гобойлардан асып түседі. Пкудағы саңылаулар саны 5-7 не 8 болуы мүмкін, аспаптың мүмкіндігі осыған байланысты. Пкуды оның түтігіндегі саңылауды өте шағын өлшемде үлкейту арқылы ғана қолдан күйге келтіруге болады. Мұндай жауапкершілігі мол жұмысты тек білікті шеберлерге тапсыруға болады. 
Пку ұзақ қызмет етуі үшін оған мұқият күтім жасау керек, сол кезде оның үні мінсізге жақын болады. Аспаптың жоғары температура және жоғары ылғалдылық секілді қарсы көрсетілімдері бар, сондықтан пкуды ауа кіретін саңылаулары бар герметикалық емес қаптамада, салқын және құрғақ жерде сақтау керек. Пкудың ағаш бөлігін кебуден сақтау үшін жаңа дайындалған жаңғақ майымен өңдеуге болады.
Майдың жасалу технологиясы келесідей: қабыршағынан тазартылған бірнеше грек жаңғағын алып, жұмсақ табиғи матаға қояды. Кейін қатты заттың көмегімен матаға жаңғақ майы сіңгенше соғады. Ұнтақталған жаңғақтардан матаны тазалап, май сіңген жұмсақ матамен пкудың ағаш бөлігін мұқият сүртеді.
Пкудың мүйізді бөлігі де мұқият күтімді қажет етеді. Оны кебу уақытынан артық ұстауға немесе күн көзінде қалдыруға болмайды, материал жарылып кетуі мүмкін. Күтім барысында кез келген химиялық қоспадан аулақ болу керек, себебі ол да материалдың бүлінуіне әсер етеді. Кездейсоқ ластануларды механикалық жолмен, яғни жұмсақ матаны қолдану арқылы тазалау керек. Мүйізді қыруға немесе егеуқұм қағазымен өңдеуге болмайды. Ағаш пен мүйіздің және де мүштіктің бекітілген тұсына ерекше мән беру керек. Жүйелі күтім жасаған жағдайда аспап ұзақ уақыт бойы мінсіз дыбыс шығарып, тыңдармандарын баурайды.
Пку мен зурна аспаптарын армян халқы ежелден тек көңіл көтеру мақсатында емес, сондай-ақ діни рәсімдерде де қолданған. Бұл аспаптарды дыбысының анық болуына байланысты әскери жорықтарда пайдаланған. Армян жауынгерлері соғыс алдында аталған аспаптардың сүйемелдеуімен Керци, Берд, Кочари, Ярхушта секілді соғыс билерін билеп, жауынгерлік рухтарын көтерген, ал жеңістен кейін дәл сол әндер және билермен жеңісті тойлаған.`
    },
    images: ['/instruments/world/armenia/pku/1.png'],
    audio: '/audio/world/armenia/pku.mp3',
    country: 'armenia',
    countryName: countryNames.armenia,
    flag: countryFlags.armenia
  },
  {
    id: 'armenia_shvi',
    name: { en: `Shvi`, ru: `Шви`, kk: `Шви` },
    description: {
      en: `Shvi

Armenian folk whistle musical instrument Shvi – translated from Armenian means a whistle or as Tutak is also called.
The length of the instrument is about 30 centimeters. There are 7 sound holes on the front side and one for the thumb below. Shvi is made from a tree, usually apricot, and there are also made from cane, willow bark and walnut. The shvi range is one and a half octaves. The transition to the second octave is due to a slightly stronger air pressure. The lower octave sounds like an ordinary wooden flute. And the upper octave resembles the sound of a piccolo flute. The ability to produce very high notes makes shvi an indispensable instrument for imitating the voices of various birds. Unlike duduk or zurna, shvi does not have a separate cane, since here it is part of the instrument itself.
  Usually shepherd’s songs are performed on shvi, since traditionally from ancient times shepherd played melodies on shvi, which in their free time whistled on this instrument unpretentious motifs in order to decorate their leisure or pastime under the canopy of a tree and on the expanses of majestic mountains, while the herd is peaceful grazed nearby.`,
      ru: `Шви

армянский народный свистковый музыкальный инструмент Шви — в переводе с армянского языка означает свист или как еще называют Тутак.
Длина инструмента – около 30 сантиметров. На передней стороне имеется 7 игровых отверстий и одно для большого пальца снизу. Шви делается из дерева, как правило, абрикосового, а также встречаются сделанные из тростника, коры ивы и орехового дерева. Диапазон Шви — полторы октавы. Переход во вторую октаву осуществляется за счёт чуть более сильного давления воздуха. Нижняя октава звучит подобно обычной деревянной флейте. А верхняя октава напоминает звучание флейты-пикколо. Способность издавать очень высокие ноты делает Шви незаменимым инструментом для имитации голосов различных птиц. В отличие от Дудука или Зурны у Шви нет отдельной трости, так как здесь она является частью самого инструмента.
  Обычно на Шви исполняются пастушьи песни, поскольку традиционно издревле на Шви исполняли мелодии пастухи, которые в свободное время насвистывали на этом инструменте незатейливые мотивы для того, чтобы украсить свой досуг или времяпровождение под сенью дерева и на просторах величественных гор, в то время как стадо мирно паслось поблизости.`,
      kk: `Шви

армян халқының ысқырмалы музыкалық аспабы. Шви – армян тілінен аударғанда «ысқырық» мағынасын береді және кейде тутак деп те аталады.
Аспап ұзындығы шамамен 30 см. Алдыңғы жағында 7 ойын саңылауы мен төменгі тұсында бас бармаққа арналған 1 саңылауы болады. Әдетте, шви өрік ағашынан, сондай-ақ, қамыстан, тал қабығынан немесе жаңғақ ағашынан жасалады. Диапазоны – 1,5 октава. Ауа қысымын сәл күшейту арқылы екінші октаваға ауысуға болады. Төменгі октава қарапайым ағаш флейта тәрізді дыбыс береді. Ал жоғарғы октаваның дыбысы флейта-пикколоға ұқсас. Өте жоғары ноталарды орындау қабілеті швиді түрлі құстардың даусын салуда теңдессіз аспап етеді. Дудук пен зурнадан айырмашылығы швидің бөлек түтігі болмайды, себебі мұнда ол аспаптың бөлшегі болып табылады.
Шви аспабымен көбіне шопандар әндер орындаған, себебі ертеден бастап ағаш саясында не тау етегінде отарлар емін-еркін жайылып жүргенде  бос уақытын тиімді әрі қызықты өткізу үшін бақташылар қарапайым әуендер ойнаған.`
    },
    images: ['/instruments/world/armenia/shvi/1.png'],
    audio: '/audio/world/armenia/shvi.mp3',
    country: 'armenia',
    countryName: countryNames.armenia,
    flag: countryFlags.armenia
  },
  {
    id: 'armenia_zurna',
    name: { en: `Zurna`, ru: `Зурна`, kk: `Зурна` },
    description: {
      en: `Zurna

a wooden tube with a bell and several holes on the side walls. The range of its sound is small – about one and a half octaves, and the timbre is bright and piercing. As a rule, one zurnachi (performer on zurna) plays a melody, and the other musician echoes him with long drawn-out sounds. There is a third musician in this ensemble: he beats out a complex, whimsical rhythm on a percussion instrument (most often on a dhol).
This ancient instrument, the predecessor of the oboe, is now widely known in Armenia, Georgia, Azerbaijan, Dagestan, Uzbekistan and Tajikistan, but the Armenian Highland is considered the birthplace of zurna.
Zurna is mainly made from apricot, walnut or mulberry wood. During the archaeological excavations, an ancient specimen of zurna was discovered on the territory of the Armenian Highlands. The instrument is a tube gradually expanding to one end with eight holes for playing – seven on the front and one on the back. The dimensions of the instrument can be from 302 to 317 mm in length, and with a diameter of 60-65 mm.
It is used traditionally in festive ceremonies and celebrations. Its bright, piercing sound is not intended for the chamber atmosphere. Therefore, it is usually played in the open air, accompanying with folk dances. Zurna gives a special flavor to any celebration and raises the mood of the guests present. And yet not a single performance by the artists who are called “Larakhakhats” in Armenia, something like wandering rope-walkers, who suddenly appear and have a holiday right on the street for gathered onlookers or casual passers-by with zurna tunes, is not without a zurna. And those, in turn, generously endow artists with finances or treats for their work. This tradition of self-creation is centuries old and is still alive in Armenia.`,
      ru: `Зурна

деревянная трубка с раструбом и несколькими отверстиями на боковых стенках. Диапазон её звучания невелик – около полутора октав, а тембр яркий и пронзительный. Как правило, один зурначи (так называют исполнителя на зурне) играет мелодию, а другой вторит ему долгими протяжными звуками. Есть в этом ансамбле и третий музыкант: он выбивает сложный, прихотливый ритм на ударном инструменте (чаще всего на дхоле).
Этот древнейший инструмент, предшественник гобоя, и сейчас широко известен в Армении, Грузии, Азербайджане, Дагестане, Узбекистане и Таджикистане, но родиной зурны считается Армянское нагорье.
Зурну, в основном, делают из древесины абрикоса, ореха или тутового дерева. На территории Армянского нагорья во время археологических раскопок был обнаружен древнейший экземпляр зурны. Инструмент представляет собой плавно расширяющуюся к одному концу трубку с восьмью отверстиями для игры – семь на лицевой и одно на тыльной. Размеры инструмента могут быть от 302 до 317 мм в длину, и диаметром – 60-65 мм.
Используется зурна традиционно в праздничных церемониях и торжествах. Её яркий пронзительный звук не предназначен для камерной атмосферы. Поэтому, играют на зурне обычно на открытом воздухе, сопровождая с народными танцами. Зурна придаёт особый колорит любому торжеству и поднимает настроение присутствующих гостей. А ещё не обходится без зурны ни одно выступление артистов, которых в Армении называют «Ларахахац», что-то вроде бродячих артистов-канатоходцев, которые появляются внезапно и устраивают праздник прямо на улице для собравшихся зевак или случайных прохожих под мелодии зурны. А те в свою очередь щедро одаривают артистов финансами либо угощениями за их работу. Эта традиция народного самотворчества насчитывает столетия и жива в Армении по сей день.`,
      kk: `Зурна

бүйірінде бірнеше ойығы мен кеңернеуі бар ағаш түтік. Дыбыс диапазоны шағын – бір жарым октава шамасында, тембрі анық әрі айқын. Әдетте, бір зурначи (аспапта орындаушы) әуенді ойнаса, екіншісі ұзақ дыбыстармен сүйемелдейді. Бұл ансамбльдегі үшінші музыкант ұрмалы аспапта (негізінен, дхола) ырғақ қалыптастырады.
Гобойдың арғы тегі болып табылатын бұл көне аспап бүгінде де Армения, Грузия, Әзірбайжан, Дағыстан, Өзбекстан, Тәжікстан жерінде кең танымал, десе де зурнаның отаны болып Армян таулы қыраты саналады. Негізінен, аспап өрік, жаңғақ немесе тұт ағаштарынан жасалады. Армян таулы қыратынан археологиялық қазба жұмыстары барысында зурнаның ең көне нұсқасы табылды.
Аспап 8 ойын саңылауы бар, төменгі жағына қарай кеңейе түсетін түтіктен тұрады – олардың 7-еуі аспаптың алдыңғы тұсында, 1-еуі қарсы бетінде орналасады. Зурнаның өлшемдері: ұзындығы – 302-317 мм, диаметрі – 60-65 мм.
Зурна дәстүрлі түрде мерекелік той-жиындарда қолданылады. Оның айқын дыбысы камералық музыкаға арналмаған. Сондықтан, аспапта ашық аспан астында ойнап, ұлттық биді сүйемелдейді. Зурна кез келген жиынның сәнін келтіріп, қонақтардың көңілін көтереді. Армения «ларахахац» деп аталатын, аяқ астынан көшеде жиналған қауымға не кездейсоқ жүргіншілерге өнер көрсететін кезбе әртістердің бірде-бір қойылымы зурнасыз өтпеген. Ал көрермендер қаржылай немесе тәтті дәммен алғыс ретінде көмектескен. Бірнеше ғасырлық тарихы бар халықтың өзіндік шығармашылығының мұндай дәстүрі Арменияда әлі күнге дейін кездеседі.`
    },
    images: ['/instruments/world/armenia/zurna/1.png'],
    audio: '/audio/world/armenia/zurna.mp3',
    country: 'armenia',
    countryName: countryNames.armenia,
    flag: countryFlags.armenia
  },
  {
    id: 'belarus_cymbals',
    name: { en: `Cymbals`, ru: `Цимбалы`, kk: `Цимбалы` },
    description: {
      en: `Cymbals

a stringed-percussion musical instrument, which is a trapezoidal deck with stretched strings. The sound is extracted by the blows of two wooden sticks or beater with expanding blades at the ends.
It is distributed in Eastern European countries, such as Belarus, Moldova, Ukraine, Russia, Romania, Hungary, Poland, Czech Republic, and Slovakia. A similar instrument is found in China, India and other Asian countries.
The first to introduce the cymbal opera orchestra was Ferenc Erkel, in the opera “Ban Bank”. Ferenc Lehar also used this instrument in the operetta “Gypsy Love” (Introduction and Zorik’s aria, act one); the cymbals accompany the violin solo.
Different folk and concert-academic species of cymbals are varied. The dimensions of the case at the first can vary: 750-1150 mm for the lower base, 510-940 mm for the upper, 255-400 mm for the sides, height – 33-95 mm, width – 235-380 mm. Professional cymbals (Prima model) basically have the following parameters: lower base – 1000 mm, upper – 600 mm, side – 535 mm, height – 65 mm, width – 490 mm.
Folk performers most often hold the instrument on their knees, and in professional practice, cymbals stand in front of the musician.
Sound production, both in folk and professional performance, is carried out using sticks – hammers, which in folk practice have spread like “hooks”.
Folk musicians playing metal on wood do not sheathe the “hooks”. Under the influence of professional music, which requires a dynamic and tonal variety of sound, academic-type cymbalists began to trim suede hammers using a small amount of cotton wool. Sheathing is a matter of utmost importance. Rigid casing makes the sound harsh, unpleasant, too soft, deaf, and obscure.
For the first time, in the 1920s, the cymbals of folk tradition were reconstructed by D. Zakhar and K. Sushkevich in accordance with the norms of concert and stage performance.
The progenitors of cymbals were known about six thousand years ago. And the first images of simple percussion chordophones (rather theoretically reminiscent of current cymbals) have been preserved on the ancient Sumerian monument-fragment of a vase from the end of the IV to the beginning of the III millennium BC, which depicts a procession of musicians with five-, seven-stringed instruments. “Lying harp” – the researcher of the instrumentation of Central Asia T. Vyzgo called this instrument as this.
The most recognized cymbalist of the first half of the 20th century considered Hungarian Aladar Ratc, with whom Ernest Anserme and Igor Stravinsky collaborated. I. Stravinsky also used cymbals in the chamber-symphonic work “Reg-time”, in incomplete versions of “Raskolnichy refrain” and “Weddings”. In 1926, Z. Kodai introduced the colorful parts of cymbals into the opera “Hari Janos”.`,
      ru: `Цимбалы

струнно-ударный музыкальный инструмент, который представляет собой трапециевидную деку с натянутыми струнами. Звук извлекается ударами двух деревянных палочек или колотушек с расширяющимися лопастями на концах.
Распространен в Восточно-европейских странах, таких как Белоруссия, Молдавия, Украина, Россия, Румыния, Венгрия, Польша, Чехия, Словакия. Похожий инструмент встречается в Китае, Индии и других странах Азии. 
Первым в оперный оркестр цимбалы ввёл Ференц Эркель – в опере «Бан Банк». Также этот инструмент использовал Ференц Легар – в оперетте «Цыганская любовь» (Интродукция и ария Зорики, акт первый) цимбалы аккомпанируют скрипичному соло.
Различаются народные и концертно-академические разновидности цимбал. Размеры корпуса у первых могут варьироваться: 750-1150 мм для нижнего основания, 510-940 мм для верхнего, 255-400 мм для боковых сторон, высота – 33-95 мм, ширина – 235-380 мм. У профессиональных цимбал (модель «Прима»), в основном, следующие параметры: нижнее основание – 1000 мм, верхнее – 600 мм, боковая сторона – 535 мм, высота – 65 мм, ширина – 490 мм.
Народные исполнители чаще всего держат инструмент на коленях, а в профессиональной практике цимбалы стоят перед музыкантом. Звукоизвлечение, и в народном, и в профессиональном исполнительстве осуществляется при помощи палочек — молоточков, которые в народной практике распространились как «крючки».
Народные музыканты «крючки» не обшивают, играя по металлу деревом. Под воздействием профессиональной музыки, которая требует динамического и тембрального разнообразия звука, цимбалисты академического типа начали обшивать молотки замшей, используя при этом небольшое количество ваты. Обшивка — дело исключительной важности. Жесткая обшивка делает звук резким, неприятным, слишком мягкой, глухой, неясной.
Впервые, в 1920-е годы цимбалы народной традиции были реконструированы Д. Захаром и К. Сушкевичем в соответствие с нормами концертно-сценического исполнительства.
Прародители цимбал были известны уже около шести тысяч лет назад. А первые изображения простых ударных хордофонов (скорее, теоретически напоминающих нынешние цимбалы) сохранились на древнем шумерском памятник-осколке вазы конца IV начала III тысячелетия до н. э., на которой запечатлено шествие музыкантов с пяти-, семиструнными инструментами. «Лежачая арфа», так назвала этот инструмент исследователь инструментария Средней Азии Т. Вызго.
Самым признанным цимбалистом первой половины ХХ ст. считается венгр Аладар Рац, с которым сотрудничали Эрнест Ансерме и Игорь Стравинский. И.Стравинский использовал также цимбалы в камерно-симфоническом произведении «Рэг-тайм», в незавершенных вариантах «Раскольничьего напева» и «Свадебок». В 1926 г. З.Кодай ввел колоритные партии цимбал в оперу «Хари Янош».`,
      kk: `Цимбалы

ішекті-ұрмалы музыкалық аспап. Ішектер трапеция тәрізді декаға тағылған аспап түрінде берілген. Дыбыс екі ағаш таяқша немесе шетіне қарай үлкейетін қалақтары бар тоқпақтар көмегімен алынады.
Белоруссия, Молдавия, Украина, Ресей, Румыния, Венгрия, Польша, Чехия, Словакия секілді Шығыс Еуропа елдерінде кең таралған. Ұқсас аспаптар Қытай, Үндістан және Азияның басқа да елдерінде кездеседі. 
Цимбалы аспабын опералық оркестрге «Бан Банк» операсына Ференц Эркель енгізді. Сонымен қатар, Ференц Легар «Сыған махаббаты» (интродукция мен Зорика ариясы, бірінші акт) опереттасында қолданды, мұнда аспап скрипканы сүйемелдеді). 
Аталған аспаптың халықтық және концерттік-академиялық түрлері ажыратылады. Алғашқыларында корпус көлемі түрлі болуы мүмкін: төменгі негізі 750-1150 мм, жоғарғы негізі 510-940 мм, бүйірлері 255-400 мм, биіктігі – 33-95 мм, ені – 235-380 мм аралығында. Кәсіби аспаптың («Прима» үлгісі) өлшемдері келесідей болады: төменгі негіз – 1000 мм, жоғарғысы – 600 мм, бүйірі – 535 мм, биіктігі – 65 мм, ені – 490 мм. 
Халық орындаушылары аспапты тізеге қойып, кәсіпқойлар алдына қойып ойнайтын. Дыбыс шығару үшін екі нұсқада да халық арасында «қармақ» аталған арнайы таяқшалар – балғашық қолданылады.
 Халық орындаушылары «қармақтарды» қаптамай, металды ағашпен соғып ойнайды. Дыбыстың динамикалық және тембрлік алуандығын талап ететін кәсіби музыка талаптарына сай, академиялық цимбалы орындаушылары балғашықтарды ішіне аздап мақта салып, жұмсақ терімен қаптайды. Қаптама – өте маңызды. Қатты қаптама өткір, жағымсыз; ал жұмсақ қаптама тым жұмсақ, анық емес дыбыс береді.
Цимбалы аспабын алғаш рет ХХ ғ. 20-жж. Д. Захар мен К. Сушкевич концерттік-сахналық орындаушылық талаптарына сәйкес қайта құрастырды. 
Цимбалы аспабының арғы тегі 6 мың жыл бұрын белгілі болған. Ал қарапайым ұрмалы хордофондардың бейнесі (теориялық тұрғыдан цимбалыға ұқсас) ежелгі Шумер ескерткішінде – б.з.б. ІV мыңж. соңы – ІІІ мыңж. басымен мерзімделетін құмыра сынығында кездеседі. Мұнда 5,7 ішекті аспаптар ұстаған музыканттар шеруі бейнеленген. Орта Азия музыкалық аспаптарын зерттеуші Т. Вызго бұл аспапты «жатқан арфа» деп атаған.
ХХ ғ. алғашқы жартысындағы ең танымал орындаушы ретінде Эрнест Ансерме мен Игорь Стравинский жұмыс жасаған Аладар Рац аталады. И. Стравинский аспапты камералық-симфониялық шығарма «Рэг-таймда», «Раскольничий напев» пен «Свадебканың» аяқталмаған нұсқаларында қолданған. 1926 ж. З. Кодай «Хари Янош» операсына цимбалы партиясын енгізді.`
    },
    images: ['/instruments/world/belarus/cymbals/1.png'],
    audio: '/audio/world/belarus/cymbals.mp3',
    country: 'belarus',
    countryName: countryNames.belarus,
    flag: countryFlags.belarus
  },
  {
    id: 'belarus_dudka',
    name: { en: `DUDKA`, ru: `ДУДКА`, kk: `ДУДКА` },
    description: {
      en: `DUDKA

Dudka is the general name of folk wind musical instruments of a family of longitudinal flutes (flutes and others) in Russia, Belarus and Ukraine.
The pipe is a tube with playing holes and a whistle device. Pipes differ in size (length from 20 to 50 cm), the shape of the tubes (there are cone-shaped, even, with expansion, narrowing of the ends), the number of playing holes, the design of the whistle device. For production use maple, ash, hazel, hornbeam, pine, linden, buckthorn. It consists of elderberry reeds, reeds, and has several side openings, and a mouthpiece for blowing.
Dudka-porshnevka has become widespread in Western Belarus. It is a cylindrical wooden tube with a whistle device, into which a piston with a handle is inserted. Sound extraction is carried out by applying a stream of air and rhythmic, pumping piston movements that determine the height of the sound (the length of the air column inside the barrel is inversely proportional to the height of the sound being extracted). So, the lowest sound is formed in the maximum open position of the piston, the highest – in the most closed position. Dudka-porshnevka is an auditory instrument without a fixed system. Playing it is primarily associated with the auditory sensations of the performer.`,
      ru: `ДУДКА

Дудка – общее название народных духовых музыкальных инструментов семейства продольных флейт (свирели, сопели и других) в России, Белоруссии и Украине.
Дудка представляет собой трубку с игральными отверстиями и свистковым приспособлением. Дудки отличаются размерами (длина от 20 до 50 см), формой трубок (существуют конусообразные, ровные, с расширением, сужением концов), количеством игральных отверстий, конструкцией свисткового приспособления. Для изготовления используют клён, ясень, орешник, граб, сосну, липу, крушину. Состоит из бузинной тростины, камыша, и имеет несколько боковых отверстий, а для вдувания – мундштучок. 
Дудка-поршнёвка получила распространение в Западной Белоруссии. Представляет собой цилиндрическую деревянную трубку со свистковым приспособлением, в которую вставлен поршень с ручкой. Звукоизвлечение осуществляется подачей струи воздуха и ритмичных, качающих движений поршня, которые определяют высоту звука (длина воздушного столба внутри ствола обратно пропорциональна высоте извлекаемого звука). Так, самый низкий звук образуется в максимально открытом положении поршня, самый высокий − в самом закрытом положении. Дудка-поршнёвка − слуховой инструмент без фиксированного строя. Игра на нём связана в первую очередь со слуховыми ощущениями исполнителя.`,
      kk: `ДУДКА

Дудка – Ресей, Белоруссия, Укранидағы үрмелі халық аспаптарының жалпылама атауы. 
Аспап ойын саңылаулары мен ысқырғыш құрылғысы орнатылған түтік болып табылады. Дудка өлшемдері (ұзындығы 20-50 см аралығында), түтік формасы (конус пішіндес, тегіс, кеңейтілген, шеті тарылған түрлері кезедеседі), ойын саңылауларының саны, ысқырғыш құрылғының құрылымы бойынша жіктеледі. Аспап жасауда үйеңкі, шаған, жаңғақ, қызықайың, қарағай, жөке, итшомыр ағаштарын қолданады. Аюбадам шыбығынан, қамыстан құралады, бүйірінде саңылаулар жасалып, үрлеу үшін мүштік бекітіледі.
Дудка-поршнёвка Белоруссияның батысында кең таралған. Ысқырғышы бар цилиндр пішіндес ағаш түтікке тұтқалы поршень бекітілген аспап болып табылады. Дыбыс алу үшін ауа үрлеп, поршеньді ырғақты қозғалтады, бұл дыбыс биіктігін анықтайды. Осылайша, ең төменгі дыбыс поршеньнің барынша ашық қалпында, ал ең биік дыбыс – жабық қалыпта қалыптасады. Дудка-поршнёвка бекітілген құрылымы жоқ, есту арқылы реттелетін аспап. Аспапта ойнау, ең алдымен, орындаушының музыкалық есту қабілетімен байланысты.`
    },
    images: ['/instruments/world/belarus/dudka/1.png'],
    audio: '/audio/world/belarus/dudka.mp3',
    country: 'belarus',
    countryName: countryNames.belarus,
    flag: countryFlags.belarus
  },
  {
    id: 'bulgaria_gadulka',
    name: { en: `Gadulka`, ru: `Гадулка или гудулка`, kk: `Гадулка немесе гудулка` },
    description: {
      en: `Gadulka or gudulka is a Bulgarian folk bowed instrument used to accompany dances or songs and has a special soft flagollet sound.
The origin of the gadulka is associated with the Persian kemancha, Arab rebab and medieval European rebek. The form of the body and the sound holes of the gadulka is very similar to the so-called armudi kemenche (also known as the Constantinople lyre, the lyre politician, classical kemenche) played in Greece and western Turkey, as well as the criticism of the lyre (island of Crete). Other related instruments include the Russian gudok and the single-stringed Balkan gusla.
Walnut body, hollow pear-shaped, wide neck without frets, in addition to 3-4 playing strings, often there are 7-10 resonant ones. In the Dobrogea region, a variant of a small-sized gadulka without resonant (sympathetic) strings is common. The upper part of the body (Bulgarian head) on which the pegs are located has an oval shape. The main part of the instrument consists of a single piece of wood. The front part is called “board” or “cover” and is made of pine or spruce wood. Sound holes have a characteristic D-shape. On modern instruments metal strings are used; earlier, less durable silk or vein ones were used. Unlike other stringed instruments, the fortuneteller does not have a nut under the strings. Strings from the pegs are pulled through a bridge located above the sound holes, and are fixed on a bone string holder, which in turn is attached to the lower pin. The lower pin is often used to strengthen the instrument while playing to the musician’s belt. Compared to a violin of a similar size, the instrument is heavier.
Before World War II, Bulgarian musicians mostly played solo and therefore the tuning accuracy was not so relevant. However, over time, in connection with the emergence of folk ensembles, it became necessary to standardize it.`,
      ru: `Гадулка или гудулка

народный болгарский смычковый инструмент, используемый для сопровождения танцев или песен и обладающий особым мягким флажолетным звучанием.
Происхождение гадулки связывают с персидской кеманчой, арабским ребабом и средневековым европейским ребеком. Формой корпуса и звуковых отверстий гадулка весьма схожа с так называемой армуди кеменче (известной так же как константинопольская лира, политики лира, классическая кеменче) на которой играют в Греции и западной Турции, а также с критики лира (о. Крит). К родственным инструментам можно так же отнести русский гудок и однострунную балканскую гуслу. 
Корпус из орехового дерева, долблёный грушевидный, шейка широкая без ладов, помимо 3-4 игровых струн, нередко имеется 7-10 резонансовых. В области Добруджа распространён вариант гадулки малого размера без резонансных (симпатических) струн. Верхняя часть корпуса (болг. глава) на которой расположены колки (болг. коклъче) имеет овальную форму. Основная часть инструмента состоит из цельного куска дерева. Лицевая часть носит название «доска» (болг. дъска) или «крышка» (тур. kapak) и изготовляется из древесины сосны или ели. Звуковые отверстия имеют характерную D-образную форму. Современные инструменты используют металлические струны, ранее же использовались менее прочные шёлковые или же жильные. В отличие других струнных инструментов гадулка не имеет верхнего порожка под струнами. Струны от колков натягиваются через мостик, расположенный над звуковыми отверстиями, и закрепляются на костяном струнодержателе, который в свою очередь крепится к нижнему штырю. Нижний штырь часто используется для укрепления инструмента во время игры к поясу музыканта. В сравнении со скрипкой схожего размера инструмент более тяжёлый.
До Второй мировой войны болгарские музыканты в основном играли соло и поэтому точность настройки не была столь актуальна. Однако с течением времени в связи с появлением народных ансамблей возникла необходимость её стандартизации.`,
      kk: `Гадулка немесе гудулка

болгарлардың ұлттық ыспалы аспабы. Ән мен биді сүйемелдеуде қолданылады, дыбысы жұмсақ, флажолетті (обертон дыбыс алу тәсілі).
Аспаптың қалыптасуын парсының кеманча, арабтың ребаб, ортағасырлық Еуропадағы ребек аспаптарымен байланыстырады. Корпус пішіні және дыбыс саңылаулары бойынша гадулка Грекия мен Түркияның батысында қолданылатын армуди кеменче (константинополь лирасы, классикалық кеменче атауымен де танымал) аспабына және критика лираға (Крит аралы) ұқсас келеді. Туыстас аспаптар қатарына орыстың гудок және бір жақты балқандық гусла аспаптарын жатқызады.
Аспаптың жұмыр шанақ корпусы жаңғақ ағашынан ойып жасалады, кең мойынды, пернесіз, 3-4 ойын ішегімен қатар кейде 7-10 резонаторлық ішектер де болады. Добруджа облысында резонаторлық ішектерсіз шағын түрі кең тараған. Құлақтары орналасқан жоғарғы бөлігіні сопақша формалы. Аспаптың негізгі бөлігі тұтас ағаш бөлігінен тұрады. Бет бөлігі «тақтай» немесе «қақпақ» деп аталып, қарағай не шырша ағашынан жасалады. Дыбыс саңылаулары D-пішіндес. Бүгінде ішектері металдан жасалса, ертеректе жібек немесе сіңірден болған. Басқа ішекті аспаптардан ерекшелігі – ішектердің астында жоғарғы табалдырық тиек болмайды. Ішектер құлақтардан дыбыс саңылаулары үстінде орналасқан көпір арқылы тартылып, сүйектен жасалған ішек ұстауышқа бекітіледі, ал ол өз кезегінде төменгі қадаға бекиді. Төменгі қада ойын барысында аспапты орындаушының беліне бекітуде пайдаланылады. Өлшемі бірдей скрипкамен салыстырғанда гадулканың салмағы ауыр.
Екінші дүниежүзілік соғысқа дейін болгар музыканттары аспапта жеке орындады, сондықтан күйге келтіру өзекті болмады. Бірақ уақыт өте келе, халық ансамбльдерінің қалыптасуымен оны стандарттау қажеттілігі туындады.`
    },
    images: ['/instruments/world/bulgaria/gadulka/1.png'],
    audio: '/audio/world/bulgaria/gadulka.mp3',
    country: 'bulgaria',
    countryName: countryNames.bulgaria,
    flag: countryFlags.bulgaria
  },
  {
    id: 'bulgaria_gaida',
    name: { en: `Gaida`, ru: `Гайда`, kk: `Гайда` },
    description: {
      en: `Gaida

Bulgarian, Macedonian, Greek, Serbian, Croatian, Albanian and Slovak species of bagpipes.
The fur is usually sheep or goat. Trumpets are bass (bourdon) and melodic – from dogwood, reed or bamboo. They get wet less from the rain. It is used as a solo and ensemble instrument for folk dances and songs.
The piper holds a wineskin under his arm and blows into the tube, pushing air through the bourdon and melodic tube. A characteristic feature of the gaida is a “flea hole” located at the top of the trunk of the melodic tube, which makes it possible to reproduce chromaticity with a certain fingering.
Folk singers often sing to the accompaniment of kaba-gaida – a large bagpipe with a low sound. There are orchestras of 60-100 pipers – they are called one hundred kaba-gaida. The Rhodope Mountains are considered the birthplace of the oldest folk music trend in Bulgaria. The central place in it is occupied by the gaida – the Bulgarian bagpipe.
Also, the following musicians are known: Kostadin Varimezov, Radoslav Paskalev, Dafo Trendafilov.`,
      ru: `Гайда

болгарская, македонская, греческая, сербская, хорватская, албанская и словацкая разновидность волынки.
Мех, как правило, овечий или козий. Трубы басовая (бурдон) и мелодическая – из кизилового дерева, тростника или бамбука. Они меньше промокают от дождя. Используется как сольный и ансамблевый инструмент для народных танцев и песен. 
Волынщик держит бурдюк под мышкой и дует в трубку, выталкивая воздух через бурдон и мелодическую трубку. Характерной особенностью гайды является «блошиная дырка», расположенная наверху ствола мелодической трубки, дающая возможность воспроизводить при определённой аппликатуре хроматику.
Народные певцы нередко поют под аккомпанемент каба-гайды — большой волынки с низким звучанием. Существуют оркестры из 60-100 волынщиков — они называются сто каба-гайд. Горы Родопы считаются родиной старейшего направления в народной музыке Болгарии. Центральное место в нём занимает гайда — болгарская волынка.
Также, известны следующие музыканты: Костадин Варимезов, Радослав Паскалев, Дафо Трендафилов.`,
      kk: `Гайда

Болгария, Македония, Грекия, Сербия, Хорватия, Албания,   Словакия мемлекеттерінде таралған волынка түрі.
Әдетте, қой немесе ешкі терісі пайдаланылады. Түтіктері – бас (бурдон) және әуендік – қызыл ағаштан, қамыстан немесе бамбуктан жасалады. Олар жаңбырдан аз ылғалданады. Халық әндері мен билерін сүйемелдейтін ансамбль және жеке аспап ретінде қолданылады. Орындаушы аспапты қолтық астында ұстап, ауаны бурдон және әуендік түтіктері арқылы шығарады. Гайданың ерекше белгісі – әуендік түтік діңгегінен жоғары орналасқан «бүрге тесік» болып саналады. Ол белгілі бір аппликатурада хроматика орындауға мүмкіндік береді. 
Халық орындаушылары көп жағдайда каба-гайда – дыбысы төмен үлкен волынка сүйемелдеуімен де ән салады. 60-100 орындаушыдан құралған «100 каба-гайда» деп аталатын оркестрлер де кездеседі. Родопы таулары Болгарияның халық музыкасындағы ең ескі бағыттың отаны болып саналады.  
Танымал орындаушылар: Костадин Варимезов, Радослав Паскалев, Дафо Трендафилов.`
    },
    images: ['/instruments/world/bulgaria/gaida/1.jpg'],
    audio: '/audio/world/bulgaria/gaida.mp3',
    country: 'bulgaria',
    countryName: countryNames.bulgaria,
    flag: countryFlags.bulgaria
  },
  {
    id: 'bulgaria_kaval',
    name: { en: `Kaval`, ru: `Кавал`, kk: `Кавал` },
    description: {
      en: `Kaval is a chromatic diagonal flute common in Bulgaria, Macedonia, Turkey, Hungary, Albania, southern Serbia, Ukraine, Moldova, northern Greece, Romania, Armenia, and Azerbaijan. Kaval is primarily associated with mountain shepherds in the Balkans and Anatolia.
The kaval is open at both ends, the extraction of sound on it occurs by dissecting the air stream against the pointed edge of the instrument. The kaval range is 2.5-3 octaves.
The name of the instrument comes from the Turkish word translated as “a long wooden whistle of a shepherd”. It is believed that shepherds initially used hollow tubes producing sound to control the herd.
Kaval is made from a single piece of wood, or collapsible, consisting of three parts. The upper part has a pointed end and serves as a mouthpiece. The middle part usually has eight finger holes (seven in the front and one in the back). On the lower part of the instrument there are up to four resonant holes, which remain always open and serve to improve the timbre and a more accurate structure. They are also called “diabolical holes”. According to a Bulgarian folk tale, once the devil called a shepherd to a musical duel and, while the shepherd was asleep, drilled new holes in the shepherd’s kaval to upset the sound. Instead, the shepherd kaval sounded even better, and the devil lost the competition.
Traditionally, kaval is made of dense wood: dogwood, almonds, apricot, boxwood, as well as high-quality high-density wood – grenadil (African black wood). In addition, the kaval can be made of reed, metal or plastic. The length can be different (from 500 to 800 mm), the main tone of the instrument depends on this.
The instrument is held at an angle of about 30-50 ° to the body. The lips cover about 3/4 of the whistle opening. The position of the lips can be described as the one used for whistling – a “tube”. By varying the force of air supply, the angle of inclination of the kaval and the overlapping area of ​​the whistle hole, they achieve an even sound of the required height.
A distinctive feature of the kaval is an unusually wide palette of tones and shades of sound. In the lower case, the instrument has a soft, warm timbre, painted with “rustling wind”. In higher registers, the kaval sounds loud and even piercing. When connecting the first and second registers, a special timbre is obtained, combining two tones into an octave interval. This effect is called KABA.`,
      ru: `Кавал

хроматическая диагональная флейта, распространённая в Болгарии, Македонии, Турции, Венгрии, Албании, южной Сербии, Украине, Молдове, северной Греции, Румынии, Армении, Азербайджане. Кавал в первую очередь ассоциируется с горными пастухами на Балканах и Анатолии.
Кавал открыт с обоих концов, извлечение звука на нём происходит посредством рассечения воздушной струи о заострённый край инструмента.
Диапазон кавала составляет 2,5-3 октавы.
Название инструмента происходит от турецкого слова, переводимого как «длинный деревянный свисток пастуха». Считается, что изначально пастухи использовали полые трубочки, производящие звук, для управления стадом.
Кавал изготавливают из цельного куска дерева, либо разборным, состоящим из трёх частей. Верхняя часть имеет заострённый конец и служит мундштуком. Средняя часть имеет обычно восемь отверстий для пальцев (семь спереди и одно сзади). На нижней части инструмента бывает до четырёх резонансных отверстий, которые остаются всегда открытыми и служат для улучшения тембра и более точного строя. Их ещё называют «дьявольские дыры». Согласно народной болгарской сказке, однажды дьявол вызвал пастуха на музыкальный поединок и, пока пастух спал, провертел в кавале пастуха новые отверстия, чтобы расстроить звук. Вместо этого пастушеский кавал зазвучал ещё лучше, и дьявол проиграл соревнование.
Традиционно кавал изготавливается из плотного дерева: кизил, миндаль, абрикос, самшит, а также из высококачественной древесины высокой плотности – гренадил (африканское чёрное дерево). Кроме этого, кавал может быть изготовлен из тростника, металла или пластика. Длина может быть различной (от 500 до 800 мм), от этого зависит основной тон инструмента. 
Инструмент держат под углом около 30-50° к телу. Губы закрывают примерно 3/4 свисткового отверстия. Положение губ можно описать как то, которое используется для свиста – «трубочкой». Варьируя силу подачи воздуха, угол наклона кавала и площадь перекрытия свисткового отверстия, добиваются ровного звука требуемой высоты. 
Отличительная черта кавала – необычайно широкая палитра тембров и оттенков звука. В нижнем регистре инструмент имеет мягкий, тёплый тембр, окрашенный «шелестом ветра». В более высоких регистрах кавал звучит звонко и даже пронзительно. При соединении первого и второго регистров получается особый тембр, объединяющий в себе два тона в интервал октава. Этот эффект называется КАБА.`,
      kk: `Кавал

хроматикалық тік флейта. Болгария, Македония, Түркия, Венгрия, Албания, оңтүстік Сербия, Украина, Молдавия, Грекияның солтүстігінде, Румыния, Армения, Әзірбайжан елдерінде кең таралған. Аспап алдымен, Балқан мен Анадолыдағы тау бақташыларымен байланыстырылады.
Кавалдың екі жағы да ашық, аспаптың үшкір тұсына ауа ағысын бағыттау арқылы дыбыс шығарады. Диапазоны 2,5-3 октава.
Аспаптың атауы «бақташының ұзын ағаш ысқырғышы» деп аударылатын түрік сөзінен туындайды. Алғашқы кезде бақташылар отарды басқару үшін дыбыс шығаратын іші қуыс түтіктер қолданған. 
Кавал тұтас ағаш бөлігінен немесе 3 бөліктен тұратын құрастырмалы етіп жасалады. Жоғары бөлігі үшкір болғандықтан, мундштук қызметін атқарады. Орта бөлігінде саусақтарға арналған 8 саңылау (7-еуі алда және 1-еуі артқы жағында) болады. Аспаптың төменгі бөлігінде 4 резонаторлық саңылау болады, олар әрдайым ашық болып, тембрді жақсарту немесе күйін келтіруде қолданылады. Оларды «шайтан тесік» деп те атайды. Болгар халық ертегісі бойынша, бірде шайтан бақташыны музыкалық жекпе жекке шақырады. Түнде бақташы ұйықтап қалғанда, дыбысын нашарлату үшін кавалда жаңа саңылаулар ойып қояды. Бірақ бұдан аспаптың даусы жақсара түседі де, шайтан жарыста жеңіліс табады.
Дәстүрлі әдіс бойынша, кавал қатты ағаштардан жасалады: қызыл тал, бадам, өрік, шамшат; сондай-ақ, тығыздығы жоғары, жоғары сапалы ағаштардан – гренадил (африкалық қара ағаш). Сонымен қатар, кавал қамыстан, металдан немесе пластиктан жасалуы мүмкін. Ұзындығы әр түрлі болуы мүмкін (500-800 мм), аспаптың негізгі үні ұзындыққа байланысты. 
Аспапты 30-50о бұрыш жасап ұстайды. Ерін ысқырық саңылауының ¾ бөлігін жауып тұрады. Ерін қалпы ысқыруға ыңғайланып, «түтікше» қалпына келтіріледі. Ауа күшін, кавалдың еңістік бұрышын және жабылатын ысқырық саңылауының ауданын реттеу арқылы қажетті биіктіктегі таза дыбыс алынады.
Кавалдың ерекшелігі – дыбыс тембрі мен реңінің әр алуандығында. Төменгі регистрде аспаптың үні жұмсақ, тембрі жылы, «желдің суылы» іспеттес. Біраз жоғары регистрде аспаптың дыбысы өткір, қатты. Бірінші және екінші регистрлерді қосқанда екі үнді октава интервалына біріктіретін ерекше тембр қалыптасады, ол КАБА деп аталады.`
    },
    images: ['/instruments/world/bulgaria/kaval/1.jpg', '/instruments/world/bulgaria/kaval/2.jpg'],
    audio: '/audio/world/bulgaria/kaval.mp3',
    country: 'bulgaria',
    countryName: countryNames.bulgaria,
    flag: countryFlags.bulgaria
  },
  {
    id: 'bulgaria_svirka',
    name: { en: `Svirka`, ru: `Свирка`, kk: `Свирка` },
    description: {
      en: `Svirka is a traditional Bulgarian woodwind instrument, a type of small single-barrel fipple flute similar to the recorder. It is typically made from a single piece of wood, often from elder or willow, and has six finger holes. The svirka can be distinguished from the larger kaval by its higher register and brighter, more piercing tone.

Svirkas are common throughout Bulgaria and are particularly popular in the Rhodope mountain region. The instrument produces a clear, penetrating sound that carries well outdoors, making it ideal for shepherds and outdoor performances. The svirka's simple construction and portability made it a favorite among rural musicians and shepherds who would craft their own instruments.

The instrument plays a significant role in Bulgarian folk music, often used to perform traditional melodies and dance tunes. Modern folk ensembles have incorporated the svirka alongside other traditional Bulgarian instruments like the kaval, gadulka, and tambura. Despite its simple appearance, mastering the svirka requires considerable skill and breath control to produce its characteristic bright, clear tone.`,
      ru: `Свирка

это род небольшого одноствольного кавала, но по звучанию свирку можно отличить от кавала, поскольку она издает звуки в более высоком регистре. Свирки распространены на всей территории Болгарии.`,
      kk: `Свирка

біртүтікшелі шағын кавал түрі. Кавалдан айырмашылығы одан біршама жоғары регистрдегі дыбыстар орындауында. Аспап Болгарияның барлық аймақтарында кең таралған.`
    },
    images: ['/instruments/world/bulgaria/svirka/1.jpg'],
    audio: '/audio/world/bulgaria/svirka.mp3',
    country: 'bulgaria',
    countryName: countryNames.bulgaria,
    flag: countryFlags.bulgaria
  },
  {
    id: 'cambodia_tro',
    name: { en: `TRO`, ru: `ТРО`, kk: `ТРО` },
    description: {
      en: `TRO

Tro is a rather primitive two-stringed bow instrument, but very difficult to play. The tension of the string is provided not by the pegs (bushings onto which the string is wound) but by the fingers of the musician.
Tro is the name for Cambodia’s traditional bone violins, stringed bowed instruments that hold and play vertically. This instrument is similar or remotely related to the Chinese erhu or hukin. The instruments of this family include two-stringed tro ou, tro sau tom, tro sau toh and tro che, also a three-stringed tro khmer spike violin.
Tro u is a traditional instrument from Cambodia that dates back to at least the “Lung Age Period”, around 1528-1594. The resonator bowl is made of a round coconut shell, one end of which is covered with animal skin, such as snake or calf. Its two strings are made of silk (not so common now), intestines, nylon or metal. Coconut may have patterns carved on its backside. It looks like a Thai saw and a Chinese erhu, although the latter has a wooden deck and not animal skin.`,
      ru: `ТРО

Тро – довольно примитивный двухструнный смычковый инструмент, однако очень сложный для освоения. Натяжение струны обеспечивается не колками (втулки, на которые накручивается струна) а пальцами музыканта. 
Тро – это название для традиционных костяных скрипок Камбоджи , смычковых струнных инструментов, которые держат и играют вертикально. Эта семья похожа или отдаленно связана с китайским эрху или хукинем. К инструментам этого семейства относятся двухструнные тро оу, тро сау том , тро сау тох и тро че, а также трехструнная тро кхмерская спайковая скрипка.  
Тро у — традиционный инструмент из Камбоджи, который восходит, по крайней мере, к «периоду лунгвека», около 1528-1594 годов. Чаша резонатора выполнена из круглотелой кокосовой скорлупы, один конец которой покрыт кожей животного, например змеиной или телячьей. Его две струны сделаны из шелка (не столь распространенного сейчас), кишечника, нейлона или металла. Кокосовый орех может иметь рисунки, вырезанные на его задней стороне. Он похож на тайский сау о и  китайскую эрху, хотя последний инструмент имеет деревянную деку, а не звериную кожу.`,
      kk: `ТРО

Тро – қарапайым екі ішекті ыспалы аспап, бірақ оны игеру өте қиын. Ішектердің тартылуы құлақтарға емес, орындаушының саусақтарына байланысты.
Тро – Камбоджа елінің дәстүрлі скрипкаларының атауы, тік қалыпта ұстап ойнайтын ішекті-ыспалы аспап. Бұл аспаптар қытайлық эрху немесе хукин аспаптарына ұқсас немесе белгілі бір байланысы бар. Аталған аспаптар тобына тро оу, тро сау том, тро сау тох, тро че, сондай-ақ, үш ішекті тро – кхмер скрипкасы жатады. 
Тро у – «лунгвек кезеңінен», шамамен 1528-1594 жж. бастау алатын Камбоджаның дәстүрлі аспабы. Резонаторы дөңгелек кокос қабығынан жасалып, бір жағы жылан не бұзау терісімен қапталады. Оның екі ішегі жібектен, жануар ішегінен, нейлон немесе металлдан жасалады. Кокос жаңғағының теріс бетінде ою-өрнек салынуы мүмкін. Аспап тайлық сау о, қытайлық эрху аспаптарына ұқсас.`
    },
    images: ['/instruments/world/cambodia/tro/1.png'],
    audio: '/audio/world/cambodia/tro.mp3',
    country: 'cambodia',
    countryName: countryNames.cambodia,
    flag: countryFlags.cambodia
  },
  {
    id: 'china_erhu',
    name: { en: `Erhu`, ru: `Эрху`, kk: `Эрху (қытай. «эр»` },
    description: {
      en: `Erhu is an ancient Chinese stringed instrument, an original two-stringed violin with metal strings. During the game, the musician pulls the bow string of the bow with the fingers of his right hand, and the bow itself is fixed between the two strings, forming a single unit with the erhu. When playing with the fingers of the left hand, transverse vibrato is used, when the string seems to be pressed down - which is facilitated by the design of the round neck, over which the strings are fixed. The bow connected with the strings is rather difficult to “rosin”, but Chinese musicians drip molten rosin onto the top of the wooden cylindrical resonator, when the rosin hardens, the bow is “rosin” about it.
Despite the ubiquity in modern China, the erhu is not a traditionally Han instrument.
Erhu is the main species of huqin. It consists of a wooden 9-sided or cylindrical resonator with a snake skin membrane. The long neck (81 cm) without neck ends with a 2-tipped head bent back. The strings raised high above the neck are connected to it by an S-shaped metal bracket, with a deck – an M-shaped stand. Range: d1 – d4; it can be played in the octave range without changing position. The timbre resembles falsetto singing. Erhu is one of the most popular musical instruments in China. It is distributed mainly in the southern regions among the urban and rural population, in the northern regions the 4-string version of the erhu is popular – the so-called sihu (Chinese: si – four). Used by professional musicians as a solo and ensemble instrument, it is part of the orchestra, including the theater (in the performances of the national opera and musical drama). The instrument was appeared during the Mongol Yuan Dynasty (1280-1368).
Although the erhu is sometimes called a two-stringed violin, the seated musician holds him on his lap vertically, rather than horizontally. It is made of thick wood, such as rosewood or ebony, and consists of a small sound box covered with snake skin – traditionally python skin and a long thin neck, slightly curved at the end. Two steel strings replaced traditional silk strings. A bow made of bamboo and white horsehair continuously moves between two strings.
Originally used only in an ensemble or in a traditional Chinese orchestra, the erhu was later raised by Liu Tianhua (1895-1932) to the rank of solo instrument. Liu introduced a new bow and a new way of sorting strings, as he also learned to play the western violin. This was back in those days when the erhu was considered a folk instrument and was not used by “serious” musicians. His most famous and now classic tune is called "The Second Spring Reflects the Moon."
Related instruments: khuchir (Mongolian), byzanchi (Tuvinian), ogochon (Manchurian), duucheke (Nanai), julianki (Udege), tyngring (Nivkh).`,
      ru: `Эрху

старинный китайский струнно-смычковый инструмент, оригинальная двухструнная скрипка с металлическими струнами. Тетиву смычка во время игры музыкант натягивает пальцами правой руки, а сам смычок закреплен между двумя струнами, составляя с эрху единое целое. При игре пальцами левой руки используется поперечное вибрато, когда струна как будто бы продавливается вниз – чему способствует сама конструкция  круглого грифа, над которым укреплены струны. Связанный со струнами смычок довольно трудно «канифолить», но китайские музыканты капают расплавленную канифоль на верхнюю часть деревянного цилиндрического резонатора, когда канифоль застынет, о неё «канифолят» смычок.
Несмотря на повсеместное распространение в современном Китае, эрху не является исконно ханьским инструментом.
Эрху – основная разновидность хуциня. Состоит из деревянного 9-гранного или цилиндрического резонатора с мембраной из змеиной кожи. Длинная шейка (81 см) без грифа заканчивается отогнутой назад головкой с 2-колками. Струны, высоко поднятые над шейкой, соединены с ней S-образной металлической скобкой, с декой – М-образной подставкой. Диапазон: d1–d4; можно играть в диапазоне октавы, не меняя позиции. Тембр напоминает фальцетное пение. Эрху – один из наиболее популярных в Китае музыкальных инструментов. Распространён, главным образом, в южных районах среди городского и сельского населения, в северных районах популярен 4-струнный вариант эрху – так называемый сыху (кит. Сы – четыре). Используется профессиональными музыкантами как сольный и ансамблевый инструмент, входит в состав оркестра, в том числе театрального (в спектаклях национальной оперы и музыкальной драмы). Появился в период монгольской династии Юань (1280-1368). 
Хотя эрху иногда называют двухструнной скрипкой, сидящий музыкант держит его на коленях вертикально, а не горизонтально. Его изготавливают из плотной древесины, например, из розового дерева или из чёрного (эбенового) дерева, и состоит он из маленькой звуковой коробки, покрытой змеиной кожей – традиционно кожей питона – и длинного тонкого грифа, слегка изогнутого на конце. Две стальные струны заменили традиционные шёлковые струны. Смычок из бамбука и белого конского волоса непрерывно движется между двумя струнами.
Первоначально используемый только в ансамбле или в традиционном китайском оркестре, позднее эрху был поднят Лю Тяньхуа (1895-1932) до ранга сольного инструмента. Лю ввёл новый смычок и новый способ перебора  струн, поскольку он также обучался игре на западной скрипке. Это было ещё в те времена, когда эрху считался народным инструментом и не использовался «серьёзными» музыкантами. Его самая известная и ставшая сейчас классической мелодия называется «Вторая весна отражает луну».
Родственные инструменты: хучир (монгольский), бызанчи (тувинский), огочон (маньчжурский), дуучэкэ (нанайский), дзюлянки (удэгейский), тынгрынг (нивхский).`,
      kk: `Эрху (қытай. «эр»

екі, «ху» – ішек) – қытай халқының ішекті-ыспалы көне аспабы, металл ішекті скрипка. Қияқ адырнасын орындаушы оң қол саусақтарымен тартып отырады, ал қияқтың өзі ішектердің арасында бекітіліп, аспаппен біртұтас жүйе құрайды. Сол қолмен ойнау барысында көлденең вибрато қолданылады, бұл кезде ішек төмен қарай жаншылады – бұған ішектер бекітілген дөңгелек мойынның құрылысы ықпал етеді. Ішектермен байланыстырылған қияқты «шайырлау» өте қиын, бірақ қытай музыканттары балқытылған шайырды ағаш цилиндрлік резонатордың жоғары бөлігіне тамызады, ол кепкен соң қияқты соған «шайырлаған».
Бүгінгі Қытай кең таралғанына қарамастан, эрху хань елінің аспабы емес. Хуциньнің негізгі түрі. 6 қырлы немесе цилиндр пішінді жылан терісімен (әдетте, питонның) қапталған ағаш резонатордан тұрады. Пернесіз ұзын (81 см) мойны 2 құлақ орнатылып, артқа қайырылған түрде бітеді. Мойыннан биік тартылған ішектер құлақпен S тәрізді металл жақша арқылы, декамен М-пішінді тіреуіш арқылы байланысқан. Диапазоны – d1-d4  . Октава диапазонында қалыпты өзгертпей де ойнауға болады.бұл кезде тембр фальцет орындауына ұқсас болады. Эрху Қытайда кең таралған музыкалық аспаптардың бірі. Негізінен, оңтүстік аймақтағы қала және ауыл жұртшылығында, солтүстік аудандарда сыху деп аталатын 4-ішекті түрі танымал. Эрху кәсіби музыканттар тарапынан жеке және ансамбльдік аспап ретінде қолданылып, театр оркестрі (ұлттық опера мен музыкалық драма) құрамына енген. Аспап монғолдық Юань династиясы тұсында (1280-1368) қалыптасты.
Эрхуды екі ішекті скрипка деп атағанмен, музыкант оны тік ұстап отырып ойнайды. Оны мықты ағаштан, мысалы, баия немесе эбен ағаштарынан жасайды, аспап жылан терісімен (әдетте, питонның) қапталған шағын дыбыстық қорапшадан және басы артқа қайырылған ұзые жіңішке мойыннан тұрады. Қос металл ішектер дәстүрлі жібек ішектерді алмастырды. Бамбук пен жылқының ақ қылынан жасалған қияқ ішектер арасымен үздіксіз қозғалады.
 Алғашқыда тек ансабльде немесе дәстүрлі қытай оркестрінде қолданылған аспапты Лю Тяньхуа (1895-1932) жеке орындаудағы аспап дәрежесіне көтерді. Лю сол кезде батыстық үлгідегі скрипкада ойнағандықтар, жаңа қияқ пен ойнау әдісін енгізді. Бұл эрхудың әлі де халық аспабы болып, «кәсіби» музыканттар қолданбай жүрген кезде еді. Оның ең танымал әрі классикаға айналған туындысы «Екінші көктем айды бейнелейді» (Вторая весна отражает луну).
Туыстас аспаптар: хучир (монғол), бызанчы (тува), огочон (маньчжур), дуучэкэ (нанай), дзюлянка (удэгей), тынгрынг (нивх).`
    },
    images: ['/instruments/world/china/erhu/1.png'],
    audio: '/audio/world/china/erhu.mp3',
    country: 'china',
    countryName: countryNames.china,
    flag: countryFlags.china
  },
  {
    id: 'china_pipa',
    name: { en: `Pipa`, ru: `Пипа`, kk: `Пипа (пиньинь)` },
    description: {
      en: `Pipa is a Chinese 4-stringed lute-type musical instrument. One of the most common and famous Chinese musical instruments. The first mentions of pipa in literature date back to the 3rd century, the first images to the 5th century. However, prototypes of pipa existed in China at the end of the III century BC. The name “pipa” is associated with the way the instrument is played: “pi” means the movement of fingers down the strings, and “pa” means the reverse movement upward.
It has a wooden pear-shaped case without resonant holes and a short neck with a glued toothed bar. The edges of the barb teeth form the first 4 fixed frets; the remaining 13-14 frets in the form of narrow wooden planks are located on a flat upper deck. Silk strings (less often - metal) are attached with pegs and a thread holder. The usual instrument length is about 100 cm, width is 30-35 cm.
Sound is extracted with a plectrum, but sometimes with a fingernail, which is given a special shape.
The pipa is played while sitting, resting the bottom of the body on the knee, and the neck on the left shoulder. Pipa is used as a solo, ensemble or orchestral instrument to accompany singing and accompaniment of recitation. When performing solo music on the pipa, mainly lyrical musical plays and program fantasies are performed.
Pipa is an instrument that belongs to the classical and folk tradition. In the Chinese classical tradition (classical literary tradition) this instrument is played mainly solo, the repertoire consists of the lyrical style of “wenchu” and the military style of “wuchu”. Wenchu ​​is often characterized by a deep emotional feeling, meditative and relaxing, and sometimes a sad sound. I teach more dramatic and powerful with virtuoso technique.
The instrument also spread to other countries, thus a similar biwa instrument appeared in Japan, a dantiba in Vietnam, and a bipa in Korea. These ancient representatives of instruments and directly Chinese prototypes are now kept in museums. The modern instrument has become very popular in Central and Southern China, where even its own musical genre “Nanguan” has appeared.`,
      ru: `Пипа

китайский 4-струнный щипковый музыкальный инструмент типа лютни. Один из самых распространённых и известных китайских музыкальных инструментов. Первые упоминания пипы в литературе относятся к III веку, первые изображения – к V веку. Однако прототипы пипа бытовали в Китае уже в конце III века до н.э. Название «пипа» связано со способом игры на инструменте: «пи» означает движение пальцев вниз по струнам, а «па» - обратное движение вверх.
Имеет деревянный грушевидный корпус без резонаторных отверстий и короткую шейку с наклеенным зубчатым грифом. Рёбра у зубцов грифа образуют первые 4 неподвижных лада; остальные 13-14 ладов в виде узких деревянных планочек расположены на плоской верхней деке. Струны шёлковые (реже – металлические), крепятся при помощи колков и струнодержателя. Обычная длина инструмента – около 100 см, ширина – 30-35 см.
Звук извлекается плектром, но иногда и ногтем, которому придаётся специальная форма.
На пипа играют сидя, оперев низ корпуса о колено, а шейку о левое плечо. Пипа применяется как сольный, ансамблевый или оркестровый инструмент, для аккомпанемента пению и сопровождения декламации. При сольном музицировании на пипе исполняются главным образом лирические музыкальные пьесы и программные фантазии.
Пипа является инструментом, который относится к классической и народной традиции. В китайской классической традиции (классической литераторов традиции) этот инструмент играют в основном соло, репертуар состоит из лирического стиля «вэнчу» и военного стиля «вучу». Вэнчу часто характеризуется глубоким эмоциональным чувством, медитативным и расслабляющим, а иногда грустным звучанием. Вучу более драматичный и мощный с виртуозной техникой.
Инструмент распространился и в другие страны, таким образом в Японии появился похожий инструмент бива, во Вьетнаме – дантиба, а в Корее – бипа. Эти древние представители инструментов и непосредственно китайские прототипы теперь хранятся в музеях. Современный инструмент очень стал популярен в Центральном и Южном Китае, где появился даже свой музыкальный жанр «наньгуань».`,
      kk: `Пипа (пиньинь)

лютня типтес, қытай халқының 4-ішекті шертпелі музыкалық аспабы. Кең таралған аспаптардың бірі. Аспап туралы алғашқы мәліметтер ІІІ ғ. әдебиеттерінде, ал алғашқы бейнелері – V ғ. бастап кездеседі. Бірақ пипаның прототиптері Қытайда б.з.б. ІІІ ғ. соңында тарала бастаған. «Пипа» атауы аспапта ойнау тәсілімен байланысты: «пи» – ішектер бойымен саусақтардың төмен қозғалысы, «па» – жоғары бағыттағы қозғалысы мағынасын білдіреді.
Алмұрт тәрізді ағаштан жасалған корпусында резонаторлық саңылаулары жоқ, қысқа мойынға тісшелі пернелер жапсырылған. Мойын тісшелерінің қабырғалары қозғалмайтын алғашқы 4 пернені құрайды, қалған 13-14 перне жоғарғы декада шағын ағаш тақтайшалар (түтік) түрінде орналасқан. Ішектері жібектен (кейде металл) жасалып, құлақтар арқылы бекітіледі. Аспаптың әдеттегі ұзындығы – 100 см, ені 30-35 см. 
Дыбыс плектр немесе арнайы формаға келтірілген тырнақ арқылы алынады.
Аспапты корпусын тізеге, мойынын сол иыққа сүйеп, отырып ойнайды. Пипа жеке, ансамбль немесе оркестр аспабы ретінде, ән мен декламацияда (мәнерлер оқу) сүйемел ретінде қолданылады. Аспапта жеке орындауда, әдетте, лирикалық музыкалық пьесалар мен бағдарламалық фантазиялар орындалады.
Пипа классикалық және халық дәстүрлері қатарына жататын аспап. Қытайдың классикалық дәстүрінде (классикалық жазушылар дәстүрі) аспапта жеке орындайды, репертуары лирикалық «Вэнчу» және әскери «Вучу» стильдерінен тұрады. Вэнчу негізінен, терең эмоциялық сезіммен, жабырқау көңілмен, ал вучу қуатты, шебер техникасымен сипатталады.
Пипаның басқа елдерге таралуы нәтижесінде ұқсас аспаптар Жапонияда «бива», Вьетнамда «дантиба», Кореяда «бипа» атауымен қалыптасты. Бұл аспаптардың көне түрлері мен қытайлық прототиптері бүгінде музейлерде сақталған. Заманауи аспап Орталық және Оңтүстік Қытайда кең таралып, өзіндік музыкалық жанр «наньгуань» қалыптастырды.`
    },
    images: ['/instruments/world/china/pipa/1.png'],
    audio: '/audio/world/china/pipa.mp3',
    country: 'china',
    countryName: countryNames.china,
    flag: countryFlags.china
  },
  {
    id: 'congo_tamtam',
    name: { en: `Tam-tam`, ru: `Там-там – это традиционный африканский инструмент, который и в наши дни не потерял своей актуальности. Многие деятели киноиндустрии используют этот оригинальный барабан в своих картинах, чтобы придать им национальный колорит. Звук этого барабана известен практически каждому, кто смотрел фильмы о племенах.`, kk: `Там-там` },
    description: {
      en: `Tam-tam is a traditional African instrument, which in our days has not lost its relevance. Many people in the film industry use this original drum in their films to give them a national touch. The sound of this drum is known to almost everyone who watched tribal films.
The instrument body is an iron impact surface that is suspended in a frame. The frame stands on special legs, therefore it is located vertically. It should be hit with a special mallet with a soft tip.
The origin tam-tam is not known for certain. However, there are scientifically proven facts. So, for example, it is known that in the African tribe tumba-yumba, the drum tam-tam was the most important. Of course, different drums were in this tribe. Small ones were made from empty coconuts or from dried pumpkins. Medium and large drums were made from hollowed tree trunks and animal skins. But the greatest drum was tam-tam. It was made of buffalo skin stretched over a round frame. “Tam-tam” hummed powerfully, like thunder.
These peals were heard by other tribes living in Africa. They understood the language of tam-tam. The big drum roared joyfully and confidently if the tribe hunters returned with rich booty. The drum boomed triumphantly and boastfully when babies were born in the tribe – future new hunters. The big drum rumbled gloomily and menacingly if the hunters of the tribe died or were going to war.
Tam-tam – a multifunctional drum. It accompanied people in joy and sorrow, and this indicates great respect for it.
The musical composer Giacomo Meyerbeer began to apply tam-tam in classical music. Now, such a multifunctional drum looks a little different: a large convex-shaped disk made of various alloys. Bronze is usually used, but the alloy of copper and tin also does not lose its popularity. It is used in the orchestra to convey a special paint of mood: victorious, formidable, and sometimes majestic, alarming. The sound can be compared with the Chinese gong. Therefore, scientists were divided and believe that the homeland of such a drum is not Africa, but the Far East.`,
      ru: `Там-там – это традиционный африканский инструмент, который и в наши дни не потерял своей актуальности. Многие деятели киноиндустрии используют этот оригинальный барабан в своих картинах, чтобы придать им национальный колорит. Звук этого барабана известен практически каждому, кто смотрел фильмы о племенах.

Корпус инструмента представляет собой железную ударную поверхность, которая находится в подвешенном состоянии внутри рамы. Рама стоит на специальных ножках, поэтому там-там располагается вертикально. По нему следует ударять специальной колотушкой с мягким наконечником.
Происхождение там-там доподлинно неизвестно. Однако есть научно доказанные факты. Так, например, известно, что в африканском племени тумба-юмба самым главным был барабан там-там. Конечно, в этом племени жили разные барабаны. Маленькие – делались из пустых кокосовых орехов или из высушенных тыкв. Средние и большие барабаны изготовлялись из выдолбленных стволов деревьев и шкур животных. Но самым великим был барабан Там-там. Он был сделан из шкуры буйвола, натянутой на круглый каркас. «Там-там» гудел мощно, словно раскаты грома.
Эти раскаты слышали другие племена, живущие в Африке. Они понимали язык там-там. Радостно и уверенно рокотал большой барабан, если охотники племени возвращались с богатой добычей. Победно и хвастливо гудел барабан, когда в племени рождались младенцы – будущие новые охотники. Мрачно и грозно рокотал большой барабан, если охотники племени гибли или собирались на войну.
Там-там – многофункциональный барабан. Он сопровождал людей в радости и в горе, что свидетельствует о большом к нему уважении.
Применять там-там в классической музыке стал музыкальный композитор Джакомо Мейербер. Сейчас же такой многофункциональный барабан выглядит немного иначе: диск выпуклой формы больших размеров, изготовленный из различных сплавов. Обычно используется бронза, но так же не теряет свою популярность сплав меди и олова. Его используют в оркестре для передачи особой краски настроения: победоносного, грозного, а иногда и величественного, тревожного. По звуку можно сравнить с китайским гонгом. Поэтому ученые разделились во мнениях и считают, что родиной такого барабана является не Африка, а Дальний Восток.`,
      kk: `Там-там

бүгінде де өзектілін жоғалтпаған дәстүрлі африкалық аспап. Киноиндустриясының көптеген өкілдері бұл бірегей барабанды ұлттық нақышты айқын білдіру үшін өз туындыларында қолданады. Бұл барабанның дыбысы тайпалар туралы фильмдерден таныс.
Корпустың соғатын бет бөлігі металдан жасалған, ол жақтаудың ішіне бекітілген. Жақтау арнайы тірекке орнатылғандықтан, там-там тіке орналасады. Оны басы жұмсақ арнайы тоқпақпен соғып ойнайды. 
Там-тамның нақты шығу тарихы белгісіз. Бірақ ғылыми дәлелденген мәліметтер кездеседі. Мысалы, африкалық тумба-юмба тайпасында негізгі аспап там-там барабаны болған. Бұл тайпада барабан түрлері көп болды. Кішкентай барабандар – іші қуыс кокос жаңғақтарынан немесе кептірілген асқабақтан жасалды. Орташа және үлкен көлемділері ойылған ағаш діңі мен аң терісінен дайындалды. Бірақ ең сыйлысы там-там барабаны болды. Ол дөңгелек жақтауға керілген буйвол терісінен жасалды. «Там-там» дыбысы күн күркірегендей күшті болды. 
Бұл күркіреген дыбыстарды Африкада тұратын басқа тайпалар да еститін. Олар там-тамның тілін түсінді. Аңшылар аңшылықтан олжалы оралса, үлкен барабан көңілді әрі сенімді үн шығарды. Тайпада ұл бала туылса – болашақ аңшы деп қуана, мақтанышпен дыбысталды. Ал егер тайпа аңшылары қаза тапса немесе соғысқа аттанса, күңірене, қатулы үн берді. 
Там-там – көпқырлы аспап. Ол адамдардың қуанышы мен қайғысында серік болды, сондықтан аспапқа деген құрмет ерекше болды.   
Там-тамды классикалық музыкада алғаш рет композитор Джакомо Мейербер қолданды. Бүгінде көпқырлы барабан біраз өзгерістерге ұшыраған: дөңес формалы дискінің өлшемдері үлкен, түрлі металл қоспаларынан дайындалған. Әдетте, қола қолданылады, дегенмен де, мыс пен қалайының қоспасы да кең таралды. Оны оркестрде ерекше көңіл күйді: жеңімпаз, қатал, кейде айбынды, қауіпті сезімді жеткізу үшін қолданылады. Дыбысталуын қытайдың гонг аспабымен салыстыруға болады. Сондықтан, ғалымдар екіге бөлініп, барабанның отаны Африка емес, Қиыр Шығыс деп есептейді.`
    },
    images: ['/instruments/world/congo/tamtam/1.png', '/instruments/world/congo/tamtam/2.png'],
    audio: '/audio/world/congo/tamtam.mp3',
    country: 'congo',
    countryName: countryNames.congo,
    flag: countryFlags.congo
  },
  {
    id: 'congo_zanza',
    name: { en: `Zanza`, ru: `Занза (санза, санца, цанца)`, kk: `Занза (санза, санца, цанца)` },
    description: {
      en: `Zanza (sanza, santsa, tsantsa) is an African reed, plucked, self-playing instrument, a comb-shaped idiophone. It is used in traditional ceremonies for solo and ensemble performance.
Zanza is the oldest and most common instrument in Africa, especially in its central and southern parts and on some Antilles. Its wide popularity is evidenced by the abundance of names that denote zanza among various tribes: tsantsa, sanza, mbira, ndimba, kalimba, ndandi, likembe, selimba, etc. Zanza is used in traditional ceremonies and by professional musicians for solo performance or in ensembles for accompaniment to singing. .
A number of wooden, bamboo, or metal tongue plates serving as a sound source are placed on the resonator body (of various shapes). The simplest samples have a flat one, the more complex ones have a cavity resonator made of tortoise shell, hollowed wood, hollow pumpkin, etc., and tongues are attached to the resonator board (4-30). A high sill limits the sounding portion of the reeds. When playing (standing, on the move, sitting), the zanza is clamped with the palms of the hands, bent at right angles and tightly pressed to the sides, or kept on the knees, with the thumb and forefinger of both hands, pinch and release the free (upper) ends of the reeds, bringing them into a state vibrations. Dancing can be of various sizes: the length of the body is 100-350 mm, the length of the reeds is 30-100 mm, and their width is 3-5 mm. The sound of zanza depends on the number of reeds.
Zanza was introduced by Africans to North and South America (now found in Latin America). It is widely used in dance and instrumental ensembles of Guinea, Benin, Uganda and several other African countries.`,
      ru: `Занза (санза, санца, цанца)

африканский язычковый щипковый самозвучащий инструмент, гребнеобразный идиофон. Используется в традиционных обрядах для сольного и ансамблевого исполнения.
Занза – древнейший и самый распространённый инструмент в Африке, особенно в Центральной и Южной её частях и на некоторых Антильских островах. О его широкой популярности свидетельствует обилие названий, которыми обозначается занза у различных племён: цанца, санза, мбира, ндимба, калимба, нданди, ликембе, селимба и др. Занза используется в традиционных обрядах и профессиональными музыкантами для сольного исполнения или в ансамблях для аккомпанемента пению.
На резонаторном корпусе (различной формы) размещается ряд деревянных, бамбуковых или металлических пластин-язычков, служащих источником звука. У простейших образцов – плоский, у более сложных – полостной резонатор из панциря черепахи, долблёного дерева, полой тыквы и др., на резонаторную доску крепятся язычки (4-30). Высокий порожек ограничивает звучащую часть язычков. При игре (стоя, на ходу, сидя) цанцу зажимают ладонями рук, согнутых под прямым углом и плотно прижатых к бокам, или держат на коленях, большими и указательными пальцами обеих рук защипывают и отпускают свободные (верхние) концы язычков, приводя их в состояние вибрации. Цанцы бывают различных размеров: длина корпуса – 100-350 мм, длина язычков – 30-100 мм, их ширина – 3-5 мм. Звукоряд цанцы зависит от количества язычков.
Цанца была завезена африканцами в Северную и Южную Америку (встречается ныне в странах Латинской Америки). Широко используется в танцевально-инструментальных ансамблях Гвинеи, Бенина, Уганды и ряда других африканских стран.`,
      kk: `Занза (санза, санца, цанца)

Африка халықтарының тілшелі-шертпелі музыкалық аспап, тарақ тәрізді идиофон. Аспап ғұрыптық рәсімдерде жеке және ансамбльде қолданылады.
Занза – Африканың Орталық және Оңтүстік аудандарында, Антиль (Кариб) аралдарында кең таралған ең көне аспап. Оның танымалдығын түрлі тайпаларда аспап атауының сан алуандығы дәлелдейді: цанца, санза, мбира, ндимба, калимба, нданди, ликембе, селимба және т.б.
Резонаторлық корпуста (әр түрлі формадағы) дыбыс көзі болатын ағаштан, бамбуктан немесе металдан жасалған пластина-тілшелер орналасады. Қарапайым үлгілерде – тегіс, күрделі нұсқаларда – қуысты резонатор тасбақаның сауытынан, ойылған ағаштан, іші қуыс асқабақтан, т.б. материалдан жасалып, резонаторлық тақтаға тілшелер (4-30) бекітіледі. Жоғарғы табалдырық тиек тілшелердің дыбысталатын бөлігін шектейді. Ойын барысында (тұрып, жүріп, отырған күйде) аспапты тік бұрыш жасап бүгілген алақан саусақтарымен бүйірге тіреп немесе тізеге сүйеп, екі қолдың бас бармақ пен сұқ саусақтарымен тілшелердің  жоғарғы бос бөліктерін шертіп, босату арқылы діріл күйіне келтіреді. Цанца түрлі өлшемде болуы мүмкін: корпус ұзындығы – 100-350 мм, тілшелер ұзындығы – 30-100 мм, ені – 3-5 мм. Аспаптың дыбыс қатары тілшелер санына байланысты.  
Цанца Солтүстік және Оңтүстік Америкаға африкандықтар арқыды жеткізілді. Гвинея, Бенин, Уганда және басқа Африка мемлекеттерінде би, аспаптық ансамбльдерде кеңінен қолданылады.`
    },
    images: ['/instruments/world/congo/zanza/1.png'],
    audio: '/audio/world/congo/zanza.mp3',
    country: 'congo',
    countryName: countryNames.congo,
    flag: countryFlags.congo
  },
  {
    id: 'czech_harmonica',
    name: { en: `Harmonica`, ru: `Губная гармоника`, kk: `Ауыз сырнай` },
    description: {
      en: `Harmonica is a wind musical instrument of the harmonica family. It is a small block with many holes on the side. The selection of sounds to be made is carried out by the position of the lips and tongue at the holes, as well as by the direction of air movement to inhale or exhale.
There are also keyboard varieties of harmonics, for example a melody on which air is only blown into the mouthpiece channel, and the sounds are controlled by pressing keys.
The instrument was designed in 1821 by a Berlin master Christian Friedrich Ludwig Bushman (1805-1864) based on a lip tuning fork. It had 15 reeds and originally called the “aura” or “labial eolina”. According to other sources, it was invented in 1806 by the master Eschenbach from Hamburg.
Components: the base of the body, voice strips with tongues, covers.
The construction of the harmonica is quite simple. The case consists of a top and bottom cover, which are made of wood, molded plastic, Lucite or metal alloys. Under the top cover is a plate with slots and tongues for exhalation. Next is the so-called comb with slots. Under the comb is another plate, but with tongues for inspiration. Everything is closed with the bottom cover. The whole structure is fastened with small screws.
It should be noted that since the appearance of chromatic harmonics, the possibilities of the instrument have expanded significantly, transpositions of works by classical music composers have appeared in its repertoire. Among the authors who composed specifically for harmonica, mention should be made of Ralph Vaughan Williams, Malcolm Arnold, Darius Millau, Arthur Benjamin and Jimi Reed.
The harmonica is a truly unique instrument. It has always been at the forefront. Having survived more than one war, falling under shelling and bombing, reminding soldiers of their home, the harmonica raised their morale. In youth cultural riots, it was always in the vanguard ranks and was reborn in new musical styles. And now it is very popular among performers of various genres and music lovers of different ages.`,
      ru: `Губная гармоника

духовой музыкальный инструмент семейства гармоник. Представляет собой небольшой брусок с множеством отверстий сбоку. Выбор извлекаемых звуков осуществляется положением губ и языка на отверстиях, а также направлением движения воздуха на вдох или выдох.
Есть и клавиатурные разновидности губных гармоник, например мелодика, на которой воздух только выдувают в канал мундштука, а звуками управляют нажатием клавиш. 
Инструмент сконструирован в 1821 году берлинским мастером Христианом Фридрихом Людвигом Бушманом (1805—1864) на основе губного камертона. Имела 15 язычков. Первоначально называлась «аурой» или «губной эолиной». По другим источникам, изобретена в 1806 году мастером Эшенбахом из Гамбурга.
Составные части: основание корпуса, голосовые планки с язычками, крышки. 
Конструкция губной гармоники довольна проста. Корпус состоит из верхней и нижней крышки, которые изготавливаются из дерева, литого пластика, люцита или металлических сплавов. Под верхней крышкой находится пластина с прорезями и язычками для выдоха. Далее находится так называемая гребенка с прорезями. Под гребенкой расположена еще одна пластина, но уже с язычками для вдоха. Закрывается все нижней крышкой. Вся конструкция скрепляется небольшими винтиками.
Необходимо отметить, что с момента появления хроматической гармоники возможности инструмента значительно расширились, в его репертуаре появились переложения произведений композиторов классической музыки. Среди авторов, которые сочиняли специально для гармоники, следует особо упомянуть Ральфа Вогена Уильямса, Малкольма Арнольда, Дариуса Мийо, Артура Бенджамина и Джими Рида.
Губная гармошка – это действительно уникальный инструмент. Она всегда была на передовых позициях. Пережив не одну войну, попадая под артобстрелы и бомбардировки, напоминая солдатам о родном доме, гармоника поднимала их боевой дух. В молодежных культурных бунтах она всегда была в авангардных рядах и заново рождалась в новых музыкальных стилях. И сейчас она является очень востребованной среди исполнителей различных жанров и меломанов разных возрастов.`,
      kk: `Ауыз сырнай

гармоника отбасындағы үрмелі музыкалық аспап. Бүйірінде көптеген ойықтары бар ағаш кесегі түріндегі аспап. Алынатын дыбыстар ойықтарда ерін мен тілдің орналасуына және ауа қозғалысы бағытының дем алуға немесе шығарылуына байланысты болады.
Гармониканың клавишалы түрі де бар, мысалы, мелодика – мундштук каналына ауа үрлеп, клавишаларды басу арқылы дыбыс алады. 1821 жылы берлиндік шебер Христиан Фридрих Людвиг Бушман (1805-1864) ауыз камертоны негізінде алғаш рет құрастырған. 15 тілшесі болған. Бастапқыда «аура» немесе «губная золина» деп аталған. Өзге деректер бойынша, мелодиканы 1806 жылы Гамбург қаласында Эшенбах шебер жасаған. 
Құраушы бөліктер: корпус негізі, тілшелі дауыс деңгейлері, қақпақтар. 
Ауыз сырнайдың құрылымы қарапайым. Корпусы ағаштан, құйылған металлдан, люцит немесе металл қорытпасынан жасалатын жоғарғы және төменгі қақпақтардан тұрады. Жоғарғы қақпақтың астында дем шығаратын тілшелер мен ойықтары бар пластина орналасқан. Одан кейін ойықтары бар «тарақ» орналасқан. Тарақтың астында дем алатын тілшелері бар тағы бір пластина болады. Мұның барлығын төменгі қақпақ жабады. Барлық құрылым шағын бұрандалармен бекітіледі.
Хроматикалық гармоника жасалғалы аспаптың мүмкіндіктері кеңейіп, репертуарда классикалық музыка композиторларының туындыларының гармоникаға ыңғайланған нұсқалары пайда болды. Гармоникаға арнап музыка шығарған композиторлар арасында Ральф Воген Уильямс, Малкольм Арнольд, Дариус Мийо, Артур Бенджамин, Джими Рид бар. 
Ауыз сырнай – әрдайым алдыңғы қатарда жүретін бірегей музыкалық аспап. Екі соғыстан өтіп, қызу шайқастың ортасында жүрген аспап сарбаздардың әскери рухын көтерді. Жастардың мәдени көтерілісінде де алда болып, жаңа музыкалық стильдермен қайта жаңғырды. Бүгінде түрлі жанрдағы орындаушылар мен түрлі жастағы меломандар арасында аспапқа сұраныс жоғары.`
    },
    images: ['/instruments/world/czech/harmonica/1.jpg'],
    audio: '/audio/world/czech/harmonica.mp3',
    country: 'czech',
    countryName: countryNames.czech,
    flag: countryFlags.czech
  },
  {
    id: 'finland_kantele',
    name: { en: `Kantele`, ru: `Кантеле`, kk: `Кантеле` },
    description: {
      en: `Kantele is one of the most archaic instruments of the Karelian and Finnish peoples. It is impossible to give a complete and comprehensive answer when and how it was mastered by the Finns and Karelians. There are two different versions about the appearance of the kantele in this area: either the kantele spread from the Baltic region first to Western Finland, and then was mastered by the Karelians at the beginning of our era, or the instrument came to Karelia directly from the Baltic countries. According to the classification of E. Hornbostel and K. Sachs, the kantele belongs to the class of chordophones, a group of plank citres with strings parallel to the body, with a resonator box. Relatives of the kantele in a large family of national stringed-plucked instruments are Lithuanian kankles, Latvian kokle, Estonian cannel, Russian gusli, Udmurt krez, Chinese tsin, Japanese koto.
In the work of Victor Chelombitko "The technology of manufacturing the national musical instrument kantele-prima" (1990), a brief description of the instruments that existed in the territory of Karelia is given. So, in particular, we read: "The first instruments of the kantele were hollowed and had 5 strings. The kantele body was made of alder, birch pegs, horsehair strings. As the musical culture developed, the instrument also improved. The upper deck was made of spruce planks. Horse hair strings were replaced by vein, and then metal. The number of strings also increased. The most common were 5-, 10-, 12- and 16-stringed kantele, which had a diatonic structure. Currently in Karelia there are two varieties of kantele, diatonic and chromatic. The diatonic kantele is designed to perform folk music. To perform classical music, you need an instrument with a chromatic scale, which necessitated the improvement of the instrument. On the chromatic kantele, you can play both folk and classical music".
Scientists have turned to the kantele instrument as an object of research since the beginning of the 19th century. These are E. Lennrot, A. Vyasyanen, T. Leysiyo, A. Cherepakhina, I. Semakova. According to the assumption of D. Bubrich, the word "kantele" itself is borrowed from the ancient Baltic languages. The name of the instrument, according to Karelian folkloristic scientists, comes from the words "kansi" – cover, "kanat" – to wear or "kanto" – stump. In the southern regions of Karelia the instrument had such names – "kanteleh", "kantelevo", "kandalla". The etymology of the name of the instrument is not yet fully understood.
As A.O. Vyaisyanen suggests, one of the instruments that reached us – the Karelian 5-stringed kantele was made in 1699; its length is 73 cm, the widest is 12 cm, the width from the shaft is 7 cm, and its thickness is 5.5 cm. Vyaisyanen describes the instrument in such a way: "Kantele is an instrument with a ubiquitous straight-side resonator extending in the direction of the strings located on its upper deck, which determine the dimensions of the instrument".
Later the kantele was begun to make by gluing the case from boards of alder, spruce, pine, birch. The body was usually carved from birch, the deck from spruce. In the narrow side of the case there are "cheeks" between which a wooden or metal string holder is inserted. On the wide side are wooden rotating pegs, later they were replaced with metal ones. Authentic kantele had 5 vein strings; later kantele had metal strings. Methods of the game are pinch, rattling, or a mixed reception of the game. The kantele was improvised and accompanied singing.
In 1875, the Great Russian poet Gavrila Romanovich Derzhavin, who was at that time the Olonets governor, wrote that "... the Lapps are amusing themselves with playing five-stringed gusli made of pine. We can say that the pine heats them, the pine feeds them, the pine and rejoices".`,
      ru: `Кантеле

один из наиболее архаичных инструментов карельского и финского народов. Невозможно дать полный и исчерпывающий ответ, когда и как он был освоен финнами и карелами. Существует две различных версии о появлении кантеле в этой местности: либо кантеле распространилось из балтийского региона сначала в Западную Финляндию, а потом было освоено карелами в начале нашей эры, или инструмент пришёл в Карелию прямо из стран Балтии. По классификации Э. Хорнбостеля и К. Закса кантеле относится к классу хордофонов, группе дощечных цитр со струнами, расположенными параллельно корпусу, с резонаторным ящиком. Родственниками кантеле в большой семье национальных струнно-щипковых инструментов являются литовский канклес, латышский кокле, эстонский каннель, русские гусли, удмуртский крезь, китайский цинь, японское кото.
В работе Виктора Челомбитько «Технология изготовления национального музыкального инструмента кантеле-прима» (1990) дано краткое описание инструментов, бытовавших на территории Карелии. Так, в частности, читаем: «Первые инструменты кантеле были цельнодолблеными и имели 5 струн. Короб кантеле изготавливали из ольхи, колки из березы, струны из конского волоса. По мере развития музыкальной культуры совершенствовался и инструмент. Верхнюю деку стали изготавливать из еловой дощечки. На смену струнам из конского волоса пришли жильные, а затем и металлические. Увеличивалось и количество струн. Наиболее распространенными были 5-, 10-, 12- и 16-струнные кантеле, которые имели диатонический строй. В настоящее время в Карелии существует две разновидности кантеле, диатоническое и хроматическое. Диатоническое кантеле предназначено для исполнения народной музыки. Для исполнения классической музыки нужен инструмент с хроматическим звукорядом, чем и была вызвана необходимость в усовершенствовании инструмента. На хроматическом кантеле можно исполнять как народную, так и классическую музыку». 
К инструменту кантеле как объекту исследования ученые обращались с начала XIX века. Это Э.Леннрот, А.Вяйсянен, Т.Лейсиё, А.Черепахина, И.Семакова. По предположению Д.Бубриха, само слово «кантеле» заимствовано из древнебалтийских языков. Название инструмента, по версии карельских ученых-фольклористов, происходит от слов «канси» – крышка, «канта» – носить или «канто» – пень. В южных районах Карелии инструмент имел такие названия – «kanteleh», «kantelevo», «kandalla». Этимология названия инструмента на сегодня окончательно не выяснена.
Как предполагает А.О.Вяйсянен, один из дошедших до нас инструментов – карельское 5-струнное кантеле был изготовлен в 1699 году; его длина 73 см, самая большая ширина 12 см, ширина от стержня 7 см, толщина 5,5 см. Вяйсянен так описывает инструмент: «Кантеле – инструмент с повсеместно распространенным прямосторонним резонатором, вытянутым в направлении расположенных на его верхней деке струн, которые и определяют размеры инструмента».
Позже кантеле стали изготавливать путём склеивания корпуса из досок ольхи, ели, сосны, берёзы. Корпус обычно выделывался из берёзы, дека – из ели. В узкой стороне корпуса имеются «щёчки», между которыми вставляется деревянный или металлический струнодержатель. На широкой стороне располагаются деревянные вращающиеся колки, позже они были заменены на металлические. Аутентичная кантеле имели 5 жильных струн, кантеле позднейших типов – металлические. Способы игры – щипок, бряцание или же смешанный приём игры. На кантеле импровизировали и аккомпанировали пению. 
В 1875 году великий русский поэт Гаврила Романович Державин, бывший в то время олонецким губернатором, писал, что «…лоптяне забавляются игрой на гуслях пятиструнных, сделанных из сосны. Можно сказать, что сосна их греет, сосна их питает, сосна и веселит».`,
      kk: `Кантеле

карель және финн халықтарының көне аспабы. Аспаптың қашан және қалай жасалғандығы туралы нақты мәлімет жоқ. Аспаптың бұл өңірде қалыптасуы туралы екі нұсқа бар: бірі – кантеле Балтық теңізі аймағынан алдымен Батыс Финляндияда кең таралып, кейіннен оны карель халқы меңгерген; екіншісі – аспап Карелияға Балтық маңы елдерінен тікелей келген.
Э. Хорнбостель мен К. Закстың классификациясы бойынша, хордофон класына, корпусқа параллель орналасқан ішектері бар тақтай цитралар тобына жатады. Кантелеге туыстас ішекті-шертпелі аспаптар қатарында литваның канклес, латвияның кокле, эстондық каннель, орыстың гусли, удмурттың крезь, қытайдың цинь, жапонның кото аспаптары аталады. 
Виктор Челомбитько «Технология изготовления национального музыкального инструмента кантеле-прима» (1990) атты еңбегінде Карелия территориясында таралған аспаптарға қысқаша анықтама берген. Еңбекте «Алғашқы кантеле аспаптары тұтас ағаштан ойып жасалып, 5 ішекті болған. Кантеле қорабы қандыағаштан, құлақтары қайыңнан, ішектері жылқы қылынан жасалды. Музыка мәдениетінің дамуына қарай аспап та жетілдірілді. Жоғарғы деканы шырша ағашынан жасай бастады. Жылқы қылынан жасалған ішектерді қой ішектері, кейіннен металл ішектер алмастырды. Ішектер саны да арта түсті. Кең таралғандары құрылымы диатоникалық, 5,10,12,16 ішекті кантеле болды. Қазіргі кезде Карелияда аспаптың екі түрі бар: диатоникалық және хроматикалық. Диатоникалық кантеле халық музыкасын орындауға, хроматикалық кантеле классикалық музыка орындауға бейімделген. Дегенмен де, хроматикалық кантеле аспабында музыканың екі түрін де орындауға болады» делінген.
Ғалымдар ХІХ ғ. бастап кантеле аспабын зерттеу нысаны ретінде қарастыра бастады. Бұлар Э. Леннрот, А. Вайсянен, Т. Лейсиё, А. Черепахина, И. Семакова сынды ғалымдар. Д. Бубрихтың болжамы бойынша, «кантеле» сөзі көне балтық сөзі болып табылады. Карель фольклоршы-ғалымдардың пікіріне сүйенсек, аспаптың атауы «канси» – қақпақ, «канта» – алып жүру немесе «канто» – ағаш түбірі сөздерінен қалыптасқан. Атаудың этимологиясы әлі күнге дейін белгісіз. А.О. Вяйсянен бойынша, карельдің 5 ішекті кантеле аспабы 1699 жылы жасалған, ұзындығы 73 см, ені 12 см, білігінен ені 7 см, қалыңдығы 5,5 см. Вяйсянен аспапты келесідей сипаттайды: «Кантеле – резонаторы тік, аспаптың ұзындығын анықтайтын жоғарғы декадағы ішектер бойымен бағытталған аспап».
Кейіннен кантеле қандыағаш, шырша, қарағай, қайың ағаштарының тақтайшаларынан жабыстырылып жасалды. Әдетте, корпусы қайыңнан, дека – шырша ағашынан жасалды. Корпустың тар жағында арасына темір не металдан жасалған ішек ұстайтын бөлшек орналасатын ойыс болды. Кең жағында ағаштан жасалған айналмалы құлақтар орналасты, кейін оларды металлдан жасады. Ескі кантеленің 5 ішегі сіңірден, заманауи түрінде металдан жасалды. Ойнау тәсілдері – шерту, сылдырлату немесе аралас әдістер.
1785 жылы ұлы орыс ақыны, сол кезде Олонецк губернаторы болған Гаврила Романович Державин: «...лоптяндар қарағайдан жасалған 5 ішекті гусли аспабымен ойын-сауық құрады. Оларды жылытатын да, қоректендіретін де, көңілін көтеретін де қарағай деуге болады» деп жазған.`
    },
    images: ['/instruments/world/finland/kantele/1.jpg'],
    audio: '/audio/world/finland/kantele.mp3',
    country: 'finland',
    countryName: countryNames.finland,
    flag: countryFlags.finland
  },
  {
    id: 'france_biniou',
    name: { en: `BINIOU`, ru: `БИНЬО`, kk: `БИНЬО` },
    description: {
      en: `BINIOU

The Biniou is a type of bagpipe. The word “Biniou” means bagpipe in the Breton language.
There are two bagpipes called biniou in Brittany: the traditional biniou kozh or biniou-bihan (kozh means “old” in Breton, bihan means “small”) and the binioù bras (bras means “big”), which was brought into Brittany from Scotland in the late 19th century. The oldest native bagpipe in Brittany is the veuze, from which the binioù kozh is thought to be derived.
The binioù kozh has a one octave scale, and is very high-pitched with a soprano sound; it is tuned to play one octave higher than the bombard which it accompanies. More traditional forms have a single drone, while modern instruments sometimes have two. In the old days the leather used for the bag was usually from a dog's skin, but this is nowadays replaced by synthetic materials or other leathers which are easier to procure, like cow or sheep.
Two soners; a talabarder (to the left) and a biniaouer (to the right).
Traditionally it is played in duet with the bombard, a double reed instrument which sounds an octave below the binioù chanter, for Breton folk dancing.`,
      ru: `БИНЬО

Binioù - это разновидность волынки. Слово «Biniou» означает волынка на бретонском языке.
В Бретани есть две волынки, называемые binioù: традиционная binioù kozh или biniou-bihan (kozh означает «старый» в бретонском, bihan - «маленький») и binioù bras (bras - «большой»), которая была привезена в Бретань из Шотландии в конце 19 века. Самой старой местной волынкой в Бретани является veuze, из которого, как полагают, произошел binioù kozh.
Binioù kozh имеет одну октавную шкалу и очень высокий звук сопрано; он настроен на одну октаву выше, чем bombard, которую он сопровождает. Более традиционные формы имеют одно гудение, в то время как современные инструменты иногда имеют два. В старые времена кожа, используемая для мешка, обычно была из кожи собаки, но в настоящее время ее заменяют синтетическими материалами или другими видами кожи, которые легче приобрести, например, коровы или овцы.
Два сонера; талабардер (слева) и биняуэр (справа).
Традиционно он исполняется в дуэте с бомбардом, инструментом с двойным тростником, который звучит на октаву ниже бинио-чантера, для бретонских народных танцев.

























BINIOU

The Biniou is a type of bagpipe. The word “Biniou” means bagpipe in the Breton language.
There are two bagpipes called biniou in Brittany: the traditional biniou kozh or biniou-bihan (kozh means “old” in Breton, bihan means “small”) and the binioù bras (bras means “big”), which was brought into Brittany from Scotland in the late 19th century. The oldest native bagpipe in Brittany is the veuze, from which the binioù kozh is thought to be derived.
The binioù kozh has a one octave scale, and is very high-pitched with a soprano sound; it is tuned to play one octave higher than the bombard which it accompanies. More traditional forms have a single drone, while modern instruments sometimes have two. In the old days the leather used for the bag was usually from a dog's skin, but this is nowadays replaced by synthetic materials or other leathers which are easier to procure, like cow or sheep.
Two soners; a talabarder (to the left) and a biniaouer (to the right).
Traditionally it is played in duet with the bombard, a double reed instrument which sounds an octave below the binioù chanter, for Breton folk dancing.`,
      kk: `БИНЬО

Биньо – волынканың бір түрі. Бұл сөз бретон тілінде волынка мағынасын береді.
Бретань аймағында биньо деп аталатын екі волынка кездеседі: дәстүрлі binioù kozh немесе biniou-bihan (бретон тілінде «kozh» – «ескі», «bihan» – «шағын») және binioù bras (bras – «үлкен»). Аспап Бретань жеріне Шотландиядан ХІХ ғ. келген. Бретаньдағы ең көне жергілікті волынка болып veuze саналады, осыдан binioù kozh қалыптасқан деседі.
Binioù kozh дыбыс шкаласы бір октава, сопрано дыбысын орындай алады; сүйемелдейтін bombard-пен салыстырғанда бір октаваға жоғары күйге келтірілген. Әлдеқайда дәстүрлі формалары бір гуілге ие, ал заманауи формаларында ол екеу. Бұрындары қап ретінде қолданылатын тері, әдетте, ит терісінен жасалатын, бірақ бүгінде синтетикалық материалдармен немесе қолдетімді тері түрлерімен (сиыр, қой) алмастырылды. 
Сонер екеу: сол жағында – талабардер, оң жағында – биняуэр.
Негізі, бретон халық билері үшін қосарлы түтіктен жасалып, бинио-чантерден октава төмен дыбысталатын бомбардамен бірге ойналады.`
    },
    images: ['/instruments/world/france/biniou/1.jpg'],
    audio: '/audio/world/france/biniou.mp3',
    country: 'france',
    countryName: countryNames.france,
    flag: countryFlags.france
  },
  {
    id: 'france_bombard',
    name: { en: `Bombard`, ru: `Бомбарда (итал. Bombarda от алт. Bombus`, kk: `Бомбарда (итал. Bombarda, латын. Bombus` },
    description: {
      en: `Bombard (Italian. Bombarda from alt. Bombus – thunder sound, Latin Ardere – burn) – a large bass musical instrument from the family of wooden reeds, the ancestor of the bassoon. Widely used to play traditional Breton music. Has the form of a straight conical tube having 7-9 sound holes and a funnel-shaped bell. The scale is diatonic, the timbre is coarse, inexpressive.
The instrument consists of three parts:
	•	Double cane – a sound source; made from cane.
	•	Shaft or body – slightly conical, with sound holes and valves on the front side. It is made of hardwood: boxwood, pear, rosewood or ebony.
	•	Bell.
Its sound range is limited to two octaves plus a small third. The sound is very characteristic and very powerful (more than 100 dB at a distance of one meter along the axis of the body).
The bombard, which is very often unfairly called the bin, is part of the oboe family, and its companions, the real bin, belong to bagpipes. It is very difficult nowadays to precisely determine the date of appearance and origin of this instrument, however, we can ascertain the presence of bombers in Breton lands already at least in the 17th century, thanks to the sculptures and bas-reliefs that our ancestors left us. The one whose name comes in Breton from the word “talabao”, that is, “noise”, has long been considered a monk by a devilish instrument. And not by chance. A few notes in the bombard – and everyone who heard them started to run wild dance. Bombard – an instrument with a diatonic scale, that is, simply put, allows you to play in only one key.
It is very difficult to play the bombard, it requires that one who plays it (in Breton, this person is called talabarder or talabarderez, if it is a woman) have very developed and strong breathing. Therefore, usually it does not sound alone, but in a duet with its godfather “bin”. The bagpipe bourdon tubes sound a continuous background, while a melodic one in turn with a bombard plays a melody. This way of playing is called kan-a-diskan in Breton or French shan-e-deshan.`,
      ru: `Бомбарда (итал. Bombarda от алт. Bombus

громовой звук, лат. Ardere – гореть) – большой басовый музыкальный инструмент из семейства деревянных язычковых, предок фагота. Широко используется для воспроизведения традиционной бретонской музыки. Имеет вид прямой конической трубки, имеющей 7-9 игровых отверстий и воронкообразный раструб. Звукоряд – диатонический, тембр – грубый, невыразительный.
Инструмент состоит из трёх частей:
	•	Двойная трость – источник звука; изготавливается из тростника.
	•	Вал или корпус – слегка конический, с игровыми отверстиями и клапанами на передней стороне. Изготавливается из твёрдой древесины: самшита, груши, розового или чёрного дерева.
	•	Раструб. 
Его звуковой диапазон ограничен двумя октавами плюс малая терция. Звук очень характерный и весьма мощный (более 100 дБ на расстоянии одного метра по оси корпуса).
Бомбарда, которую очень часто несправедливо называют бинью, входит в семью гобоев, а её спутники, настоящие бинью относятся к волынкам. Очень трудно в наши дни точно определить дату появления и происхождения этого инструмента, однако мы можем констатировать присутствие бомбарды в бретонских землях уже по крайней мере в ХVІ веке, благодаря скульптурам и барельефам, которые нам оставили наши предки. Та, чье название происходит на бретонском от слова «talabao», то есть «шум», считалась долго монахами дьявольским инструментом. И не случайно. Несколько нот в бомбарде – и все, кто их слышал, пускались в безудержный пляс. Бомбарда – инструмент с диатоническим звукорядом, то есть проще говоря, позволяет играть только в одной тональности. 
Играть на бомбарде очень трудно, она требует от того, кто играет на ней (по-бретонски этот человек называется talabarder или talabarderez, если речь идёт о женщине) очень развитого и сильного дыхания. Поэтому обычно она звучит не одна, а в дуэте со своим кумом «бинью». Бурдонные трубки волынки звучат непрерывным фоном, а мелодическая по очереди с бомбардой играют мелодию. Такой способ игры называется кан-а-дискан по-бретонски или по-французски шан-э-дешан.`,
      kk: `Бомбарда (итал. Bombarda, латын. Bombus

найзағай дыбысы, латын. Ardere – жану) – ағаш тілшелілер тобындағы жуан дыбысты үлкен музыкалық аспап. Фагот аспабының арғы тегі саналады. Дәстүрлі бретон музыкасын орындауда жиі қолданылады. Пішіні тіке конус тәрізді түтік, 7-9 ойын саңылауы мен кеңернеуі бар. Дыбыс қатары – диатоникалық, тембрі – жуан, анық емес.
Негізгі сипаттамасы 
Аспап үш құрастырмалы бөліктен тұрады:
	•	Қосарлы таяқ – дыбыс көзі, қамыстан жасалады.
	•	Білік немесе корпус – алдыңғы жағында ойын саңылаулары мен қақпақтары бар, сәл конус пішіндес. Қатты ағаш түрлерінен: шамшат, алмұрт, баия (қызыл ағаш) немесе қара ағаштардан жасалады. 
	•	Кеңернеу. 
Аспаптың дыбыс диапазоны қосымша шағын терциясы бар екі октавамен шектелген. Дыбысы біршама қатты.
Кейде бинью деп қате аталатын бомбарда гобой тобына, ал шынайы  бинью аспабы волынка тобына жатады. Бомбарданың нақты қашан жасалғанын анықтау қиын, бірақ бізге жеткен мүсіндер мен барельефтер арқылы бретон жерінде аспаптың ХVІ ғ. межесінде болжауға болады. Атауы бретондық talabao, яғни «шу» мағынасын білдіретін аспапты ұзақ уақыт бойы сопылар «шайтан аспабы» деп есептеді. Себебі, бірнеше нотадан кейін-ақ естіген жұрттың барлығы билей жөнелген. Бомбарда – дыбыс қатары диатоникалық, яғни, бір үндестікте әуен орындауға мүмкіндік береді.
Айта кетерлік жайт, бомбарда аспабында ойнау өте қиын, себебі орындаушыдан (бретон тілінде орындаушы – talabarder, talabarderez – әйел орындаушы) дамыған әрі мықты тыныс жолдарын талап етеді. Сондықтан, ол өзінің арғы тегі «бинью» аспабымен бірге дыбысталады. Волынканың бурдонды түтіктері үздіксіз фон болып, ал әуендік түтіктері бомбардамен кезектесіп әуен орындайды. Орындаудың мұндай тәсілі бретон тілінде кан-а-дискан немесе французша шан-э-дешан деп аталады.










Бомбарда (итал. Bombarda от алт. Bombus – громовой звук, лат. Ardere – гореть) – большой басовый музыкальный инструмент из семейства деревянных язычковых, предок фагота. Широко используется для воспроизведения традиционной бретонской музыки. Имеет вид прямой конической трубки, имеющей 7-9 игровых отверстий и воронкообразный раструб. Звукоряд – диатонический, тембр – грубый, невыразительный.
Инструмент состоит из трёх частей:
	•	Двойная трость – источник звука; изготавливается из тростника.
	•	Вал или корпус – слегка конический, с игровыми отверстиями и клапанами на передней стороне. Изготавливается из твёрдой древесины: самшита, груши, розового или чёрного дерева.
	•	Раструб. 
Его звуковой диапазон ограничен двумя октавами плюс малая терция. Звук очень характерный и весьма мощный (более 100 дБ на расстоянии одного метра по оси корпуса).
Бомбарда, которую очень часто несправедливо называют бинью, входит в семью гобоев, а её спутники, настоящие бинью относятся к волынкам. Очень трудно в наши дни точно определить дату появления и происхождения этого инструмента, однако мы можем констатировать присутствие бомбарды в бретонских землях уже по крайней мере в ХVІ веке, благодаря скульптурам и барельефам, которые нам оставили наши предки. Та, чье название происходит на бретонском от слова «talabao», то есть «шум», считалась долго монахами дьявольским инструментом. И не случайно. Несколько нот в бомбарде – и все, кто их слышал, пускались в безудержный пляс. Бомбарда – инструмент с диатоническим звукорядом, то есть проще говоря, позволяет играть только в одной тональности. 
Играть на бомбарде очень трудно, она требует от того, кто играет на ней (по-бретонски этот человек называется talabarder или talabarderez, если речь идёт о женщине) очень развитого и сильного дыхания. Поэтому обычно она звучит не одна, а в дуэте со своим кумом «бинью». Бурдонные трубки волынки звучат непрерывным фоном, а мелодическая по очереди с бомбардой играют мелодию. Такой способ игры называется кан-а-дискан по-бретонски или по-французски шан-э-дешан.

Bombard (Italian. Bombarda from alt. Bombus – thunder sound, Latin Ardere – burn) – a large bass musical instrument from the family of wooden reeds, the ancestor of the bassoon. Widely used to play traditional Breton music. Has the form of a straight conical tube having 7-9 sound holes and a funnel-shaped bell. The scale is diatonic, the timbre is coarse, inexpressive.
The instrument consists of three parts:
	•	Double cane – a sound source; made from cane.
	•	Shaft or body – slightly conical, with sound holes and valves on the front side. It is made of hardwood: boxwood, pear, rosewood or ebony.
	•	Bell.
Its sound range is limited to two octaves plus a small third. The sound is very characteristic and very powerful (more than 100 dB at a distance of one meter along the axis of the body).
The bombard, which is very often unfairly called the bin, is part of the oboe family, and its companions, the real bin, belong to bagpipes. It is very difficult nowadays to precisely determine the date of appearance and origin of this instrument, however, we can ascertain the presence of bombers in Breton lands already at least in the 17th century, thanks to the sculptures and bas-reliefs that our ancestors left us. The one whose name comes in Breton from the word “talabao”, that is, “noise”, has long been considered a monk by a devilish instrument. And not by chance. A few notes in the bombard – and everyone who heard them started to run wild dance. Bombard – an instrument with a diatonic scale, that is, simply put, allows you to play in only one key.
It is very difficult to play the bombard, it requires that one who plays it (in Breton, this person is called talabarder or talabarderez, if it is a woman) have very developed and strong breathing. Therefore, usually it does not sound alone, but in a duet with its godfather “bin”. The bagpipe bourdon tubes sound a continuous background, while a melodic one in turn with a bombard plays a melody. This way of playing is called kan-a-diskan in Breton or French shan-e-deshan.`
    },
    images: ['/instruments/world/france/bombard/1.jpg'],
    audio: '/audio/world/france/bombard.mp3',
    country: 'france',
    countryName: countryNames.france,
    flag: countryFlags.france
  },
  {
    id: 'georgia_panduri',
    name: { en: `Panduri`, ru: `Пандури`, kk: `Пандури` },
    description: {
      en: `Panduri is a Georgian folk three-stringed plucked musical instrument such as a lute. The most popular folk musical instrument in eastern Georgia – Pshavi, Khevsureti, Tusheti, Kakheti and Kartli. Panduri is made in various shapes and sizes. Used for solo performance and accompaniment of a song. Mostly men play panduri. In Soviet times, trios composed of Panduri, Salamuri and Chonguri, performing works of modern Georgian composers and classical music, became popular in Georgia. Initially, there were 2 types of panduri – with three and seven divisions, but in 1934 the outstanding Georgian art critic Kirill Vashakidze created a new version of this musical instrument. After researching the original instrument, Vashakadze added a flat and sharp midtones to the instrument and thereby became the father of modern versions of the instrument – Panduri Prima (classic) and Panduri Tenor with 12 divisions.
Panduri consists of the following main parts: body, neck and additional parts. The case consists of a deepened (abdominal) cavity and an upper deck. Neck – from the head and board for the application of fingers. Additional parts are: rivets, yoke, frets, staple (jora, bridge with three notches) and a loop.
Most often, the panduri is carved from a whole tree, and sometimes the instrument body is made by attaching thin wooden plates. The body of the panduri of various corners has a different shape.
The term “Panduri” is found in written monuments of the 10th century. Other instrument types such as panduri and chunguri are also available. Armenians have fandirni, Persians have tanburi, Ukrainians have bandura, Arabs have tonburi.
In eastern Georgia, panduri is so widespread and so often mentioned among folk tellers that naturally ancient Georgian literature retained its name. Until the 10th century, the definition of this concept was the term “sapandurebeli”, which was formed from the word “panduri”. Panduri was widespread both in the labor process and in the performance of ritual ceremonies. Shepherds took panduri with them, going to the pastures and having fun there. This is evidenced by a number of studies in the field of Georgian ethnography.`,
      ru: `Пандури

грузинский народный трёхструнный щипковый музыкальный инструмент типа лютни. Наиболее популярный народный музыкальный инструмент в восточной Грузии – Пшави, Хевсурети, Тушети, Кахети и Картли. Пандури производится различных форм и размеров. Используется для сольного исполнения и сопровождения песни. Играют на пандури в основном мужчины. В советское время в Грузии стали популярны трио в составе пандури, саламури и чонгури, исполняющие произведения современных грузинских композиторов и классическую музыку. Изначально существовало 2 вида пандури – с тремя и семью делениями, но в 1934 году выдающийся грузинский искусствовед Кирилл Вашакидзе создал новый вариант этого музыкального инструмента. После исследования первоначального инструмента Вашакадзе добавил инструменту бемоль и диез полутона и тем самым стал отцом современных версий инструмента – «Пандури прима» (классический) и «Пандури тенор» с 12 делениями.
Пандури состоит из следующих основных частей: корпус, шея и дополнительные части. Корпус состоит из углубленной (брюшной) полости и верхней деки. Шея – из головки и доски для приложения пальцев. Дополнительными частями являются: заклёпки, ярмо, лады, скоба (джора, мостик с тремя насечками) и петля.
	Чаще всего, пандури вырезан из целого дерева, а иногда корпус инструмента построен путем присоединения тонких деревянных пластинок. Корпус у пандури различных уголков имеют разную форму. 
С термином «пандури» встречаемся в письменных памятниках Х века. Струнный инструмент типа пандури и чонгури имеется и у других народов. У армян – фандирни, у персов – танбури, у украинцев – бандура, у арабов – тонбури. 
В восточной Грузии пандури настолько распространён и так часто упоминается у народных сказателей, что естественно его имя сохранила древняя Грузинская литература. До Х века определением этого понятия был термин «сапандуребели», который образовался от слова «пандури». Пандури был широко распространён как в трудовом процессе, так и при исполнении обрядовых ритуалов. Пандури брали с собой пастухи, идя на пастбища и там развлекались. Об этом свидетельствует целый ряд исследований в сфере грузинской этнографии.`,
      kk: `Пандури

грузин халқының үш ішекті шертпелі музыкалық аспабы. Грузияның шығысы – Пшави, Хевсурети, Тушети, Кахети, Картли аймақтарында танымал аспап. Аспап түрлі пішін мен өлшемде жасалады. Жеке орындауда және ән сүйемелдеуде қолданылады. Негізінен, ер адамдар ойнаған. Кеңестік кезеңде Грузияда құрамында пандури, саламури мен чонгури болған трио танымал болды. Бастапқыда аспаптың 2 түрі болды – үш және жеті бөлімді, бірақ 1934 жылы грузиндік көрнекті өнертанушы Кирил Вашакидзе аспаптың жаңа нұсқасын жасады. Бастапқы аспапты зерттеген соң Вашакидзе аспапқа жарты тонда бемоль мен диез қосып, аспаптың заманауи нұсқаларының – 12 бөлікті «Пандури прима» (классикалық) және «Пандури тенордың» «атасы» атанды.
Пандури келесідей негізгі бөліктерден тұрады: корпус, мойын және қосымша бөліктер. Корпус шұңғыл қуыс пен жоғарғы декадан, мойны – басы мен саусақтар қойылатын тақтайдан тұрады. Қосымша бөліктерге бұрандама, бұғау, перне, құлақ, ілмек жатады.
Әдетте, аспап тұтас ағаштан ойып жасалады, кейде корпусы жұқа ағаш тақтайшаларды құрастыру арқылы жасалады. Бұрышы әр түрлі пандури корпусының пішіні де алуан болады.
«Пандури» термині жазба деректерде Х ғасырда кездеседі. Пандури мен чонгури типтес ішекті аспаптар басқа халықтарда кездеседі. Армяндарда – фандирни, парсыларда – танбури, украиндарда – бандура, арабтарда – тонбури. 
Шығыс Грузияда аспап кең таралған, халық жыршыларының шығармаларында аты аталғандықтан, көне грузин әдебиетінде сақталған. Х ғ. дейін бұл ұғымның анықтамасы болып «пандури» сөзінен қалыптасқан «сапандуребели» термині болды. Аспап күнделікті тұрмыста да, ғұрыптық рәсімдерде де кең қолданылды. Аспапты шопандар өздерімен бірге жайылымға алып, көңіл көтерген. Мұны грузин этнографиясы аясында жүргізілген зерттеулер дәлелдейді.`
    },
    images: ['/instruments/world/georgia/panduri/1.png'],
    audio: '/audio/world/georgia/panduri.mp3',
    country: 'georgia',
    countryName: countryNames.georgia,
    flag: countryFlags.georgia
  },
  {
    id: 'georgia_salamuri',
    name: { en: `SALAMURI`, ru: `САЛАМУРИ`, kk: `САЛАМУРИ` },
    description: {
      en: `SALAMURI

Salamuri is a Georgian wind musical instrument such as a flute with a whistle device. It is made of wood or reeds (the existence of bone is also possible). Length is 240–270 mm. Salamuri has five to seven side holes for changing pitch. A scale is diatonic. It is also known as the shepherd's flute.
Salamuri is distributed in Eastern Georgia: in Kartli, Kakheti, Meskheti, Tusheti, Pshavi, as well as in Western Georgia. In Georgia, “salamuri” has existed since ancient times, which is confirmed by materials obtained in archaeological excavations.
Among the exhibits found in Mtskheta (a fortified city in Eastern Georgia), the most interesting object for Georgian musical culture, namely the “Flute” without tongue-bone, which was discovered in 1938 in the northern part of the tomb of Samtavro Monastery, attracts attention. According to the expert of ornithologist I. Chkhikvishvili, the swan’s stem bone was used to make a pipe. At the flute, both ends are cut off straight. It is without tongue and has only three small holes on one side. The upper part of the pipe is polished. Its length is 19.9 cm, the diameter of the head part (a place for blowing) is 1.1 cm, and the diameter of the end is 1.8 cm. A flute made of bone was buried with a boy of 14–15 years old, with whom many things were buried: pottery, weapons, clothes, mascot, etc.
The study of the tomb makes it possible to date the burial of the XI–XII centuries BC. Given the high technology of the flute, it can be assumed that this tool was distributed in Georgia earlier than the 12th century BC. A flute made of bone was discovered in Uplistsikhe (monastery), in a cult structure, among the things donated to the Goddess of Beauty “Mzekala”. The presence of the flute in Mzekal’s things indicates that the flute has been an attribute of the shepherd since ancient times. Currently, this salamuri is stored in the State Museum named after Simon Janashia.
In Georgia, there are two types of salamuri that have survived to this day: reed salamuri and salamuri without tongue. These two types of salamuri differ from each other in material, shape, sound engineering and range. 
The salamuri without tongue represents a long tube of approximately 380–400 mm, on which 7–9 holes are made. The first hole is placed on the 13th cm. And the remaining holes are placed from each other at a uniform distance (3 cm each). Sometimes one hole is made on the back side. The inside of the trunk is hollow to the end. The head (the beginning of the instrument) is slightly pointed, so that it is convenient to blow. The salamuri without tongue has a diatonic sound construction within one octave. If you blow a little harder, its range increases. The salamuri without tongue is widespread in the regions of Eastern Georgia: Kartli, Kakheti, Meskheti, Tusheti (mountainous region), Pshavi.
Reed salamuri is a 230–260mm tube. The head is cut off. On reed salamuri made 5 or more often 7–9 holes. One hole is made on the back side, between the upper I and II holes. The tongue is a short 12–15mm reed cork head, which is inserted into the salamuri tube. Salamuri without tongue is often made from apricot tree or Caucasian palm tree. Reed salamuri is made from reed, walnut tree, and more often from apricot tree.
The salamuri, especially without tongue one, is a necessary thing for the shepherds. Currently, in almost all corners of the country, the reed type of salamuri is widespread. Shepherds and dance tunes are performed on it. On a salamuri without tongue only shepherd's melodies are performed. The repertoire of the salamuri almost entirely consists of shepherd's melodies.
Salamuri has always been an inseparable friend of a hardworking man in grief and joy. According to legend, nothing can destroy the salamuri, even fire, even burnt remains make pleasant sounds. The popularity of salamuri is also indicated by the fact that you can find a lost child and recognize him with the help of salamuri (in Georgian folklore). According to legend, the first reed grew on the grave of an orphan, the wind blew, sang a sad melody.
According to legend, people received salamuri from the deity. Therefore, it is considered a divine instrument. According to one legend, one person created a salamuri in the likeness of a pipe of Angels. In the Georgian past, salamuri is used in grief and at festivals, therefore the expression “Sachiro” (“for sorrow”); “Salkhino” (“for joy”) is widespread in people.
In the manufacture of salamuri take into account together with what instrument they are going to play it. Therefore, they set the tone. Masters can make reed salamuri of two types: I and II voices (unison), make salamuri for bass. Today, the reed salamuri has established itself among the ensemble of folk instruments. Salamuri went around the whole world with a temperamental Georgian dance and spread the sweet tunes of the Iberian salamuri.`,
      ru: `САЛАМУРИ

Саламури – грузинский духовой музыкальный инструмент типа флейты со свистковым устройством. Изготовляется из дерева или камыша (Возможно также существование костяных). Длина 240–270 мм. Саламури имеет от пяти до семи боковых отверстий для изменения высоты звуков. Звукоряд диатонический. Известна также как «Пастушья флейта».
Саламури распространена в Восточной Грузии: в Картли, Кахети, Месхети, Тушети, Пшави, а также в Западной Грузии. В Грузии «саламури» существует с давних времен, что подтверждают материалы, добытые в археологических раскопках.  
Среди экспонатов,  найденных в Мцхете (город-крепость в Восточной Грузии) привлекает внимание предмет, наиболее интересный для грузинской музыкальной культуры, а именно «Свирель» без язычный из кости, который был обнаружен в 1938 году в Северной части гробницы монастыря Самтавро. По мнению специалиста орнитолога И. Чхиквишвили, для изготовления свирели, использована ствольная кость лебедя. У свирели оба конца отсечены прямо. Он безъязычный и имеет только три маленьких отверстии с одной стороны. Верхняя часть свирели отполирована. Её длина 19,9 см, диаметр головной части (место для вдувания) 1,1 см, диаметр конца 1,8 см. Свирель из кости была погребена с мальчиком 14–15 лет, с которым было погребено много вещей: глиняная посуда, оружие, одежда, талисман и др.
Изучение гробницы даёт возможность датировать погребение XI-XII вв. до н.э. Если учесть высокую технологию свирели можно предположить, что этот инструмент был распространён в Грузии ранее, чем XII век до н.э. Свирель из кости была обнаружена в Уплисцихе (монастырь), в культовом строении, среди вещей пожертвованных Богине Красоты «Мзекала». Наличие свирели в вещах Мзекала свидетельствует о том, что свирель с древних времён является атрибутом пастуха. В настоящее время этот саламури храниться в государственном музее им. Симон Джанашиа. 
В Грузии существуют два вида саламури, сохранившиеся до наших дней: язычковый саламури и саламури безъязычный. Эти два вида саламури отличаются друг от друга материалом, формой, звукопостроением и диапазоном. 
Безязычный саламури представляет длинную трубочку приблизительно 380–400мм, на которой делаются 7–9 отверстии. Первое отверстие размещено на 13-ом см. А остальные отверстия размещены друг от друга равномерным расcтоянием (по 3см). Иногда одно отверстие делают с обратной стороны. Внутренная часть ствола до конца полая. Головка (начало инструмента) чуть-чуть заостренное, чтоб удобно было дуть. Безязычный саламури имеет диатонический звукопостроение в пределах одной октавы. Если вдунуть чуть по сильнее его диапазон увеличивается. Безязычный саламури широко распространён в регионах Восточной Грузии: Картли, Кахети, Месхети, Тушети (горный регион), Пшави.
Язычковый саламури представляет собой трубку 230–260мм. Головка отсечена. На язычковый саламури сделано 5 или чаще 7–9 отверстии. Один глазок делается с обратной стороны, между верхними I и II глазками. Язык представляет собой короткую тростниковую головку-пробку 12–15мм, которая вставлена в трубочку саламури. Безязычный саламури чаще делают из абрикосового дерева или дерева кавказской пальмы. Язычковый саламури изготовляют из тростника, дерева грецкого ореха, а чаще из абрикосового дерева. 
Саламури, особенно безязычный является необходимой вещью пастухов. В настоящее время почти во всех уголках страны распространена язычковый вид саламури. На ней исполняются пастушие и танцевальные мелодии. На безязычный саламури исполняются только пастушеские мелодии. Репертуар саламури почти совсем состоит из пастушеских мелодий.
Саламури всегда был неразлучным другом трудолюбивого человека в горе и радости. По преданиям ни что не может уничтожить саламури, даже огонь, даже выгоревшие остатки издают приятные звуки. О популярности саламури говорит и то, что найти потерянного ребёнка и узнать его можно с помощью саламури (в грузинском фольклоре). Согласно легенде первый тростник вырос на могиле сироты, подул ветер, запел печальную мелодию.
По преданию, люди получили саламури от божества. Поэтому её считают божественным инструментом. Согласно одной легенде один человек создал саламури по подобию свирели Ангелов. В Грузинском бытьё саламури применяется в горе и на праздниках поэтому в людях распространено выражение «Сачиро» («для печали»), «Салхино» («для радости»). 
При изготовлении Саламури принимают во внимание вместе с каким инструментом собираются её играть. Поэтому устанавливают тональность. Мастера могут изготовить язычковый Саламури двух видов: I и II голоса (унисонные), делают саламури и для баса. Сегодня язычковый саламури утвердился среди ансамбля народных инструментов. Саламури обошёл весь мир вместе с темпераментным грузинским танцем и распространил сладкие мелодии Иберийского Саламури.`,
      kk: `САЛАМУРИ

Саламури – ысқырық құрылғысы бар флейта типтес грузин халқының үрмелі музыкалық аспабы. Ағаштан немесе қамыстан жасалады (сүйектен жасалған түрлері де болуы мүмкін). Ұзындығы 240–270 мм. Аспаптың бүйірінде дыбыс биіктігін өзгертуге арналған 5–7 саңылауы болады. Дыбыс қатары диатоникалық. «Шопандар флейтасы» деген атпен де танымал. 
Аспап Шығыс Грузияның Картли, Кахети, Месхети, Тушети, Пшави аудандарында және Батыс Грузияда кең таралған. Саламуридің Грузияда танымалдығын археологиялық қазбалардан табылған материалдар дәлелдей түседі.
Мцхетадан (Шығыс Грузиядағы қала-бекініс) табылған экспонаттар арасында грузин музыкалық мәдениетімен байланысты бір аспап қызығушылық туғызады. Ол 1938 ж. Самтавро монастырі зиратының Солтүстік бөлігінен табылған сүйектен жасалған тілшесіз «Свирель» аспабы. Орнитолог маман И. Чхиквишвилидің пікірінше, бұл свирельді дайындауға аққудың сүйегі пайдаланылған. Аспаптың екі жағы да тіке кесілген. Ол тілшесіз, 3 шағын ойын саңылаулары бір жағында орналасқан. Свирельдің жоғарғы бөлігі тегістелген. Ұзындығы 19,9 см, бас жағының диаметрі (ауа үрлейтін тұсы) 1,1 см, соңының диаметрі 1,8 см. Сүйектен жасалған свирель қосымша саз ыдыстар, қару, киім және тұмар қойылған 14–15 жасар ұл баланың мәйітімен жерленген.
Қорымды зерттеу барысында жерлеу орны б.з.б. ХІ–ХІІ ғғ. мерзімделді. Аспаптың жасалуының жоғары технологиясын ескерсек, ол б.з.б. ХІІ ғ. ертеректе де Грузияда таралған болуы ықтимал. Свирель діни құрылыс Уплисцихеде (монастырьде) Сұлулық Құдайы Мзекалаға құрбандыққа қойылған заттар арасынан табылды. Мзекала заттары қатарында свирельдің болуы аспаптың көнеден шопандардың аспабы екенін білдіреді. Бүгінде бұл аспап Симон Джанашиа атындағы мемлекеттік музейде сақтаулы.
Грузияда саламуридің бүгінге жеткен 2 түрі бар: тілшелі және тілшесіз саламури. Саламуридің бұл екі түрі бір-бірінен жасалу материалы, қалпы, дыбыс құрылымы және диапазоны бойынша ажыратылады. 
Тілшесіз саламури ұзындығы 380–400 мм ұзын түтікше болып келеді, оған 7-9 саңылау жасалады. Бірінші саңылау 13-ші см-де, қалғаны бір-бірінен 3 см қашықтықта жасалады. Кейде бір саңылау теріс жағына да жасалады. Діңгектің ішкі бөлігі толығымен қуыс. Басы үрлеу үшін сәл үшкір болады. Тілшесіз саламури бір октава шамасындағы диатоникалық дыбыс қатарына ие. Сәл қатты үрлесе, оның диапазоны да ұлғая түседі. Аспаптың бұл түрі Шығыс Грузияда: Картли, Кахети, Месхети, Тушети (таулы өлке) және Пшави аймақтарында кең таралған.
Тілшелі саламури ұзындығы 230–260 мм түтік. Басы кесілген. Аспаптың бұл түрінде 5 немесе 7–9 саңылау көзі жасалады. Оның біреуі қарсы бетінде, І және ІІ көздер арасында орналасады. Тілшесі 12–15 мм қысқа қамыстан жасалады. Саламуридің тілшесіз түрі, негізінен, өрік немесе кавказ пальмасы ағашынан, ал тілшелі түрі қамыстан, грек жаңғағы ағашынан, өрік ағашынан дайындалады.
Тілшесіз саламури шопандар өмірінің ажырамас бөлігі саналады. Бүгінде тілшелі саламури елдің барлық өңірінде кең таралған. Аспаппен шопандардың және би әуендері, ал тілшесіз түрінде тек шопан әуендері ғана орындалады. Сондықтан саламури репертуары толығымен шопан әуендерінен тұрады деуге болады.
Саламури еңбокқор адамның қуанышы мен қайғысында жанында болған серігіне айналды. Аңыз бойынша, аспапты ештеңе де құрта алмайды, тіпті отқа оранған аспап та әсем дыбыс шығарады-мыс. Жоғалған баланы тауып, оны тану үшін де саламури қолданылады екен. Аңыз бойынша, алғашқы қамыс жетім баланың зиратында өсіп, жел соққанда қайғылы әуен ойнайды екен.
Тағы бір аңызда адамдар аспапты құдайлардан сыйға алған делінеді. Сондықтан, ол құдайлар аспабы болып саналады. Аңыз бойынша, бір адам саламуриді Періштелердің свиреліне ұқсатып жасаған екен. Грузиндердің тұрмысында аспап қайғылы кезде және мерекелерде қолданылады. Сол себепті, халық арасында «Сачиро» («қайғыда») және «Салхино» («қуанышта») деген тіркестер кең тараған.  
Аспап жасауда оның өзге қандай аспаптармен бірлесіп ойналатыны ескеріледі. Сондықтан оның үндестігі тексеріледі. Шеберлер тілшелі саламуридің екі түрін жасай алады: І және ІІ үн (унисон), бас-саламури де жасалады. Бүгінде тілшелі саламури халық аспаптары ансамбльдерінде өз орнын иеленген. Аспап екпінді грузин биімен әлемнің түкпір-түкпірін шарлап, Иберий саламуриінің тәтті үнін жан-жаққа таратты.`
    },
    images: ['/instruments/world/georgia/salamuri/1.png'],
    audio: '/audio/world/georgia/salamuri.mp3',
    country: 'georgia',
    countryName: countryNames.georgia,
    flag: countryFlags.georgia
  },
  {
    id: 'germany_blockflute',
    name: { en: `Block flute`, ru: `Блокфлейта (нем. Флейта с блоком)`, kk: `Блокфлейта` },
    description: {
      en: `Block flute (German: Flute with a block) – a wind musical instrument, a kind of whistle flute. In the design of the head part, an insert (block) is used. Related instruments: flute, nozzle, whistle. The recorder differs from other similar instruments by the presence of 7 finger holes on the front side and one on the back - the so-called octave valve. The bottom two holes are often doubled. To close the holes when playing, 8 fingers are used. To take notes, so-called fork fingerings are often used (when the holes are closed, not in turn, but in a complex combination).
The sound in the recorder is formed in the beak-shaped mouthpiece located at the end of the instrument. In the mouthpiece is a wooden cork, covering the hole for blowing air (leaving only a narrow gap).
The recorder was popular in the Middle Ages in Europe, but by the 18th century its popularity had declined, as preference was given to orchestral wind instruments, such as the transverse flute, which has a wider range and louder sound.
In German, a flute block is called a “flute with a block”, in French – a “flute with a beak”, in Italian – a “gentle flute”, in English – a “recorder”.
The modern flute unit is made not only of wood, but also of plastic. High-quality plastic instruments have good musical capabilities. The advantage of such tools is their low cost, strength – they are not as vulnerable to cracking as wood, precision manufacturing by hot pressing followed by fine-tuning with high accuracy, hygiene (they are not afraid of moisture and tolerate “bathing”). Nevertheless, according to most performers, it is wooden flutes that sound best. Boxwood or fruit trees (pear, plum) are traditionally used for making, for budget models – as a rule, maple, and professional instruments are often made of mahogany.
The recorder has a complete chromatic scale. This allows you to play music in different keys.
Recorders are also classified by fingering systems. There are two types of fingering systems for recorders: “German” and “Baroque” (or “English”). The “German” fingering system is a little easier for the initial development, but most really good professional tools are made with the “baroque” fingering.`,
      ru: `Блокфлейта (нем. Флейта с блоком)

духовой музыкальный инструмент, разновидность свистковой флейты. В конструкции головной части используется вставка (блок). Родственные инструменты: свирель, сопилка, вистл. Блокфлейта отличается от других подобных инструментов наличием 7 пальцевых отверстий на лицевой стороне и одного на тыльной — так называемого октавного клапана. Два нижних отверстия часто делают двойными. Для закрывания отверстий при игре используется 8 пальцев. Для взятия нот часто применяются так называемые вилочные аппликатуры (когда отверстия закрываются не по очереди, а в сложной комбинации).
Звук в блокфлейте формируется в клювовидном мундштуке, находящемся на торце инструмента. В мундштуке находится деревянная пробка (нем. Block), прикрывающая отверстие для вдувания воздуха (оставляя лишь узкую щель).
Блокфлейта была популярна в Средние века в Европе, но к XVIII веку её популярность снизилась, так как предпочтение стало отдаваться оркестровым духовым инструментам, таким как поперечная флейта, обладающая более широким диапазоном и громким звуком.
По-немецки блок флейта называется «флейта с блоком», по-французски – «флейта с клювом», по-итальянски – «нежная флейта», по-английски – «рекордер». 
Современные блок флейты изготавливаются не только из дерева, но и из пластика. Качественные пластиковые инструменты обладают хорошими музыкальными возможностями. Плюсом таких инструментов также является их дешевизна, прочность – они не так подвержены риску треснуть как дерево, точность изготовления методом горячего прессования с последующей доводкой с высокой точностью, гигиеничность (они не боятся влаги и отлично переносят «купание»). Тем не менее, по мнению большинства исполнителей, лучше всего звучат именно деревянные флейты. Для изготовления традиционно используется самшит или фруктовые деревья (груша, слива), для бюджетных моделей – как правило, клён, а профессиональные инструменты часто изготавливаются из пород красного дерева.
Блокфлейта обладает полным хроматическим звукорядом. Это позволяет играть музыку в разных тональностях.
Блокфлейты также классифицируются по аппликатурным системам. Существует два вида аппликатурных систем для блокфлейт: «германская» и «барочная» (или «английская»). «Германская» аппликатурная система чуть проще для начального освоения, но большинство действительно хороших профессиональных инструментов делается именно с «барочной» аппликатурой.`,
      kk: `Блокфлейта

үрмелі музыкалық аспап, ысқырмалы флейтаның түрі. Жоғарғы бөлігі құрылымында ендірме (блок) қолданылады. Туыстас аспаптар: свирель, сопилка, вистл. Ұқсас аспаптардан айырмашылығы, блокфлейтада беткі тұсында 7 ойын саңылауы, қарсы бетінде октава қақпағы аталатын 1 ойын саңылауының болуында. Екі төменгі саңылау жұп болып жасалады. Ойын барысында саңылауларды жабу үшін 8 саусақ пайдаланылады. Ноталарды алу үшін ашалы аппликатуралар аталатын техника (саңылаулардың кезекпен емес, күрделі комбинация жасап басылуы).
Блокфлейта дыбысы аспаптың дөңбек жағындағы тұмсық тәріздес мүштігінде қалыптасады. Мүштіктегі ағаш тығын ауа үрлейтін саңылауды жауып тұрады. 
Блокфлейта орта ғасырларда Еуропада кең таралды, бірақ ХVІІІ ғ. аспаптың танымалдығы төмендеді, себебі дыбысы қатты әрі диапазоны кең көлденең флейталар секілді оркестрлік үрмелі аспаптар қолданысқа енді. 
Немісше блокфлейта «блогы бар флейта», французша – «тұмсықты флейта», итальян тілінде – «нәзік флейта», ағылшынша – «рекордер» деп аталады. 
Заманауи аспап ағашпен қатар, пластиктан да жасалады. Сапалы пластиктен жасалған аспаптар бірқатар жақсы музыкалық мүмкіндіктерге ие. Мұндай аспаптардың артықшылығы – арзан әрі ағаш секілді жарылмай, берік болуында, кейін жоғары дәлдікпен жетілдірілетін ыстық пресстеу әдісімен жасалуында, тазалығында (олар судан қорықпағандықтан, «шомылуды» жақсы көтереді). Дегенмен де, орындаушылардың басым бөлігінің ойынша, ағаштан жасалған флейталар жақсы дыбысталады. Аспап жасауда дәстүрлі түрде шамшат немесе жеміс ағаштарын (алмұрт, қараөрік), бюджеттік нұсқаларында – үйеңкі ағашы, ал кәсіби аспаптар үшін қызыл ағаш тұқымдастары пайдаланылады. 
Блокфлейта толық хроматикалық дыбыс қатарына ие. Бұл түрлі үндестікте музыка орындауға мүмкіндік береді. 
Блокфлейталар аппликатуралық жүйе бойынша жіктеледі. Блокфлейтаға арналған аппликатуралық жүйенің 2 түрі бар: «германдық» және «бар» (немесе «ағылшын»). «Германдық» жүйе алғаш рет үйрену үшін оңай, бірақ шынайы жақсы кәсіби аспаптар «бар» аппликатурасымен жасалады.`
    },
    images: ['/instruments/world/germany/blockflute/1.png', '/instruments/world/germany/blockflute/2.png'],
    audio: '/audio/world/germany/blockflute.m4a',
    country: 'germany',
    countryName: countryNames.germany,
    flag: countryFlags.germany
  },
  {
    id: 'germany_zither',
    name: { en: `Zither`, ru: `Цитра`, kk: `Цитра` },
    description: {
      en: `Zither is a stringed musical instrument, most widely used in Austria and Germany in the 18th century. Origin of the zither is Egypt. It has a flat wooden case of irregular shape, over which from 17 to 45 strings are stretched (depending on the size of the instrument). Several strings closest to the performer (usually 4-5), stretched over the fretboard with metal frets, are plucked by a plectrum worn on the thumb of the right hand, and a melody is played on them. The remaining strings serve for chord accompaniment; they are played with the rest of the fingers.
The word zither is one of several names for musical instruments derived from the name of the ancient Greek plucked instrument.
Various types of zither are distinguished: treble zither, bass zither, concert zither, etc. The total volume of the group is from the salt of the contra octave to the fourth of the fourth octave. Zither most often solos in orchestral works.
Zither has been known in Western Europe since the end of the 18th century; it appeared in Russia in the second half of the 19th century. Similar instruments of ancient origin are found in many nations. So, zithers were common in China and the Middle East. In the translation of the Bible into Russian, the ancient musical instruments kinnor and kiytaros (katros) are called zithers.
The word zither has been known since ancient times and has been used to denote stringed instruments.
The ancestor of modern zither is considered the musical instrument “sheytholt”. It is a rectangular elongated wooden case with a fretboard with frets, only one fretboard string and two free (or bourdon) strings. In museums in Germany, “sheytholt” is called “ancient” and even “the oldest” zither. The extraction of sounds on this instrument was achieved by a mediator, or by a special stick, using the “rattling” method. Many instruments of this type have saved and have survived to the present day. In Hungary, this is tsetera, in Sweden – hummel, in Iceland – fiddle, in Norway – langlake, etc. In the USA there is a dulchimer.
But the most common these days is the concert zither, which has a 4-string neck (the 5th string mates with la or re, depending on the system) and over 20 bass and accompaniment strings. Its early predecessor is considered tyrolean zither or peasant type zither. The period of the most active development of the construction of concert zither can be called the 2nd quarter of the 19th century, when the zither became a mass instrument in all areas of Tyrol. In Russia, the first mention of zither dates back to 1827, when Tyrolean singers and musicians arrived in St. Petersburg. In 1856, Count N.A. Kushelev-Bezborodko, who himself played well on the zither, published a magazine of light plays for this instrument called “Eralash”. In his Marble Palace (now located on Furmanov St. in St. Petersburg), 4 plaster panels depicting famous musical instruments of the time are still preserved in the former dance hall. But the most honorable central place in all four panels is reserved for zither. The image of zither was preserved in the famous A.A. Palace Polovtsova on Morskaya street.`,
      ru: `Цитра

струнный щипковый музыкальный инструмент, получивший наибольшее распространение в Австрии и Германии в XVIII веке. Родом цитра из Египта. Имеет плоский деревянный корпус неправильной формы, поверх которого натянуто от 17 до 45 струн (в зависимости от размера инструмента). Несколько ближайших к исполнителю струн (обычно 4-5), натянутых над грифом с металлическими ладами, защипываются надетым на большой палец правой руки плектром, на них играется мелодия. Оставшиеся струны служат для аккордного сопровождения, на них играют остальными пальцами.
Слово цитра является одним из нескольких названий музыкальных инструментов, происходящих от названия древнегреческого щипкового инструмента. 
Выделяют различные виды цитр: дискант-цитра, басовая цитра, концертная цитра и др. общий объём группы – от соль контроктавы до ре четвёртой октавы. Цитра чаще всего солирует в оркестровых произведениях.
Цитра известна в Западной Европе с конца XVIII века, в России появилась во второй половине XIХ века. Аналогичные инструменты древнего происхождения встречаются у многих народов. Так, цитры были распространены в Китае и на Ближнем Востоке. В переводе Библии на русский язык цитрами названы древние музыкальные инструменты киннор и кийтарос (катрос). 
Слово цитра известно с древнейших времен и служило для обозначения струнных инструментов. 
Родоначальником современной цитры считается музыкальный инструмент «шейтхольт». Он представляет собой прямоугольный деревянный вытянутый корпус с грифом, имеющим лады, всего одну струну на грифе и две свободные (или бурдонные). В музеях Германии «шейтхольт» назван «древней» и даже «древнейшей» цитрой. Извлечение звуков на этом инструменте достигалось медиатором, либо специальной палочкой, способом «бряцания». Многие инструменты такого типа сохранились и дошли до наших дней. В Венгрии это — цетера, в Швеции — гуммель, в Исландии — фидле, в Норвегии — ланглейк и т.д. В США бытует дульчимер. 
Но самой распространенной в наши дни является цитра концертная, имеющая 4-струнный гриф (5-я струна спаривается с ля или ре, в зависимости от строя) и свыше 20 басовых и аккомпанирующих струн. Её ранней предшественницей считают тирольскую цитру или цитру крестьянского типа. Периодом наиболее активного развития конструкции концертной цитры можно назвать 2-ю четверть XIX в., когда цитра стала массовым инструментом во всех районах Тироля. В России первые упоминания о цитре датируются 1827 годом, когда в Петербург приехали тирольские певцы и музыканты. В 1856 г. граф Н.А. Кушелев-Безбородко, сам хорошо игравший на цитре, издает журнал легких пьес для этого инструмента под названием «Ералаш». В его Мраморном Дворце (ныне расположенном по ул. Фурманова в С.-Петербурге) до сих пор сохранились в бывшем танцевальном зале 4 гипсовых панно с изображением известных музыкальных инструментов того времени. Но самое почетное центральное место на всех четырех панно отведено цитре. Сохранилось изображение цитры и в известном Дворце А.А. Половцова на Морской улице.`,
      kk: `Цитра

ХVІІІ ғ. Австрия мен Германияда кең таралған ішекті-шертпелі музыкалық аспап. Шыққан жері Египет. Корпусы бұрыс формалы, тегіс, бетіне 17-45 ішек тартылған (аспап өлшеміне байланысты). Орындаушыға жақын ораналасып, металл пернелерге тағылған бірнеше ішектер (әдетте, 4-5) бас бармаққа кигізілген плектр арқылы шертіледі. Қалған ішектер аккордтық сүйемел қызметін атқарады.
Цитра сөзі Ежелгі Грекияның кифара аталатын шертпелі аспабынан бастау алатын аспаптың бірнеше атауының бірі. 
Цитраның бірнеше түрін бөліп көрсетеді: дискант-цитра, бас цитра, концерттік цитра, т.б. Топтың жалпы көлемі – контроктаваның соль нотасынан төртінші октаваның ре нотасына дейін. Негізі, аспап оркестрлік шығармаларды жеке орындайды. 
Цитра Батыс Еуропада ХVІІІ ғ. соңынан бастап белгілі болса, Ресейге ХІХ ғ. ІІ-жартысында келді. Шығу тегі көне цитраға ұқсас аспаптар көптеген халықтарда кездеседі. Осылайша, цитралар Қытай мен Таяу Шығыста кең таралды. Библияның орыс тіліндегі аудармасында цитра деп көне киннор және кийтарос аспаптары аталады.
Цитра сөзі көнеден қалыптасып, ішекті аспаптарды білдірген. 
Заманауи цитраның бастауы «шейтхольт» аспабы болып саналады. Ол тікбұрышты шығыңқы корпусы, мойнында пернелері бар, мойнына бір ішек тағылып, қосымша екі бурдонды ішектері бар аспап. Германия музейлерінде «шейтхольт» көне, тіпті ең ежелгі цитра деп аталады. Аспапта дыбыс алу медиатор немесе арнайы таяқша арқылы жүргізілді. Осы типтес аспаптар сақталып, бүгінге дейін жеткен. Венгрияда бұл – цетера, Швецияда – гуммель, Исландияда – фидле, Норвегияда – ланглейк, АҚШ-та – дульчимер деген түрі кездеседі.     
Бүгінде ең кең таралған түрі 4 ішекті мойны мен 20-дан аса бас әрі сүйемелдеуші ішектері бар концерттік цитра болып табылады. Оның алдында қалыптасқан түрі деп тироль цитрасы немесе шаруалар цитрасы саналады. Концерттік цитра құрылымының белсенді дамыған кезеңі ХІХ ғ. ІІ жартысына сәйкес келеді. Бұл кезде цитра Тирольдың барлық аймағына таралды. 
 Ресейде цитра туралы алғашқы деректер 1827 жылмен, Петербургке Тирольдан әншілер мен музыканттардың келуімен мерзімделеді. 1856 ж. аспапта жақсы ойнаған граф Н.А. Кушелев-Безбородко аталған аспапқа арналған жеіңл шығармалардан тұратын «Ералаш» аталатын журнал жариялайды. Оның Мәрмәр Сарайында (бүгінде Петербург қаласында, Фурманов көшенің бойында) бұрынғы би залында сол кезеңнің танымал музыкалық аспаптары бейнеленген гипстен жасалған 4 панно сақталған. Барлығында да ортасында цитра бейнеленген. Сонымен қатар, цитра бейнесі А.А. Половцовтың Морская көшесіндегі атақты Сарайында да сақталған.`
    },
    images: ['/instruments/world/germany/zither/1.png'],
    audio: '/audio/world/germany/zither.mp3',
    country: 'germany',
    countryName: countryNames.germany,
    flag: countryFlags.germany
  },
  {
    id: 'hungary_kechkeduda',
    name: { en: `KECHKEDUDA`, ru: `КЕЧКЕДУДА`, kk: `КЕЧКЕДУДА` },
    description: {
      en: `KECHKEDUDA

Kechkeduda is a hungarian bagpipe. This instrument uses the air stored in the bag to sound various tubes.
Kechkeduda is an ethnic musical instrument and is currently mainly used for performing ethnic music.
Bagpipe is a traditional musical wind instrument of many peoples of Europe and Asia. It is an air reservoir, which, as a rule, is made of calf or goat skin, taken whole, in the form of a wineskin, sewn up tightly and equipped with a tube for filling the fur with air on top, with one, two or three reed tubes attached to the bottom, which serve to create polyphony. One of these three tubes with side holes (chanter) is used to play any melody, and the other two (bourdons) are bass, which are tuned to each other in a clean fifth. Bourdon emphasizes the skeleton of an octave fret (fret scale), on the basis of which a melody is composed. The pitch of the bourdon tubes can be changed using the pistons inside them.
Kechkeduda belongs to wind instruments, since it should be blown into it to produce sound. The tonal range of the instrument is relatively small – up to one octave. However, even this range gives the dude great opportunities for various kinds of improvisations. The size of the pipe is not limited by the scope. It should be noted that the tool is made by order of the contractor, who can negotiate the sizes with the master.
Kechkeduda finds more and more adherents among young people and increasingly sounds at concert venues.`,
      ru: `КЕЧКЕДУДА

Кечкедуда – это венгерская волынка. Этот инструмент использует воздух, хранящийся в мешке, для озвучивания различных трубок. 
Кечкедуда является этническим музыкальным инструментом и в настоящее время в основном используется для исполнения этнической музыки.
Волынка – традиционный музыкальный духовой инструмент многих народов Европы и Азии. Представляет собой воздушный резервуар, который, обыкновенно, делается из телячьей или козьей шкуры, снятой целиком, в виде бурдюка, зашитой наглухо и снабженной сверху трубкой для наполнения меха воздухом, с прикрепленными снизу одной, двумя или тремя игральными язычковыми трубками, служащими для создания многоголосия. Одна из этих трех трубок с боковыми отверстиями (чантер) и служит для наигрывания какой-либо мелодии, а другие две (бурдоны) — басовые, которые настраиваются между собой в чистую квинту. Бурдон подчёркивает остов октавного лада (ладового звукоряда), на основе которого сочиняется мелодия. Высота звучания бурдонных трубок может быть изменена посредством находящихся в них поршней.
Кечкедуда относится к духовым инструментам, поскольку в нее следует дуть для порождения звука. Тональный диапазон инструмента сравнительно небольшой – до одной октавы. Однако даже такой диапазон предоставляет дуде большие возможности для различного рода импровизаций. Размер дуды не ограничен рамками. Следует отметить, что инструмент изготавливается по заказу исполнителя, который и может оговорить размеры с мастером.
Кечкедуда находит все больше приверженцев среди молодежи и все чаще звучит на концертных площадках.`,
      kk: `КЕЧКЕДУДА

Кечкедуда – венгрлердегі волынка түрі. Бұл аспап түрлі түтіктерді дыбыстандыру үшін қапта сақталатын ауаны пайдаланады.
Кечкедуда этникалық музыкалық аспап болғандықтан, ол бүгінде этникалық музыка орындауда қолданылады.
Волынка – Еуропа мен Азиядағы көптеген халықтардың дәстүрлі үрмелі музыкалық аспабы. Аспап тұтастай бұзау немесе ешкінің терісінен тігіліп, жоғарғы тұсына ауа толтыратын түтік және төменгі жағына көпдауыста орындайтын 1-3 тілшелі ойын түтіктері бекітілген ауа резервуары болып табылады. Бүйірінде ойығы бар бір түтік (чантер) қандай да бір әуен орындайды, қалған екеуі (бурдон) – өзара квинта күйіне келтірілетін бас түтіктер. Бурдон октава пернелердің негізін айшықтап, соның негізінде әуен қалыптасады. Бурдон түтіктердің дыбыс биіктігі оның ішінде орналасқан поршеньдер арқылы өзгертіледі. 
Кечкедуда үрмелі аспаптар қатарына жатады, себебі дыбыс алу үшін оған ауа үрлеу қажет. Аспаптың үндестік диапазоны салыстырмалы түрде шағын – бір октава шамасында. Дегенмен де, осындай диапазонмен де дуда алуан түрлі туындылар орындай алады. Дуда көлемі шектелмеген. Айта кетерлік жайт, аспап орындаушының тапсырысы бойынша жасалады және оның талаптарына сай шебермен өлшемдерін келіседі.
Қазіргі кезде кечкедуда жастар тарапынан қызығушылыққа ие болып, концерттік алаңдарда жиі ойналады.`
    },
    images: ['/instruments/world/hungary/kechkeduda/1.png'],
    audio: '/audio/world/hungary/kechkeduda.mp3',
    country: 'hungary',
    countryName: countryNames.hungary,
    flag: countryFlags.hungary
  },
  {
    id: 'hungary_zither',
    name: { en: `ZITHER`, ru: `ЦИТРА`, kk: `ЦИТРА` },
    description: {
      en: `ZITHER

The zither (citera in Hungarian) is a musical instrument of hungarian people. Was  a very popular instrument in Hungary around the turn of the century and in the second half of the 19th century as well. Its exact origin is unknown but is form and structure is similar to those of the old Austrian and German zithers. The French Épinette des Vosges, the Norwegian Langleik, and the Swedish Hummels also come from the same family. The Hungarian version is very diversified in its form and size, but the tuning, basic features and manner of playing are very similar.
The old zithers are diatonic, the new ones are chromatic. (The chromatic scale system is very characteristic.) The whole tones and half tones are lined up separately. The zither generally plays the same melody that is usually sung by the singers. Today the strings of the zither are tuned to G and C (or to A and D). The melody strings are tuned to G and the accompanying or background strings are tuned to G and C an octave apart. Today the zither is again an extremely popular instrument in Hungary.`,
      ru: `ЦИТРА

Цитра (цитера на венгерском языке) – музыкальный инструмент венгерского народа. Была очень популярным инструментом в Венгрии на рубеже веков, а также во второй половине 19-го века. Его точное происхождение неизвестно, но его форма и структура похожи на древние австрийские и немецкие цитры. Французский Épinette des Vosges, норвежский Langleik и шведский Hummels также происходят из одной семьи. Венгерская версия очень разнообразна по форме и размерам, но настройки, основные функции и манера игры очень похожи.
Старые цитры диатонические, новые - хроматические. (Система хроматической шкалы очень характерна.) Полные тона и полутона выстроены в линию отдельно. Цитра обычно играет ту же мелодию, которую обычно поют певцы. Сегодня строки цитры настроены на G и C (или на A и D). Струны мелодии настроены на G, а сопровождающие или фоновые струны настроены на G и C на октаву. Сегодня цитра снова является чрезвычайно популярным инструментом в Венгрии.`,
      kk: `ЦИТРА

Цитра (венгр тілінде цитера) – венгр халқының музыкалық аспабы. Аспап Венгрияда ғасырлар тоғысында, сондай-ақ, ХІХ ғ. ІІ жартысында аса танымал болды. Оның шығу тегі белгісіз, бірақ оның құрылымы мен формасы Австрия мен Германияның көне цитраларына ұқсас. Францияның Épinette des Vosges, Норвегияның Langleik және Швецияның Hummels аспаптарының шығу тегі бір. Венгр нұсқасы формасы мен өлшемдері бойынша алуан түрлі, бірақ күйге келтірілуі, негізгі функциясы мен ойнау әдісі өте ұқсас. 
Ескі цитралар – диатоникалық, жаңа нұсқалары – хроматикалық. Толық тон мен жарты тондар жеке қатарда орналасқан. Цитра әншілер орындайтын әуенді орындайды. Бүгінде цитра қатары G мен С (немесе А мен D) күйіне келтірілген. Әуен ішектері G күйіне, сүйемелдеуші немесе фон ішектері G мен С күйіне октаваға келтірілген. Қазіргі кезде цитра Венгрияда қайтадан танымалдыққа ие болды.`
    },
    images: ['/instruments/world/hungary/zither/1.png'],
    audio: '/audio/world/hungary/zither.mp3',
    country: 'hungary',
    countryName: countryNames.hungary,
    flag: countryFlags.hungary
  },
  {
    id: 'india_bansuri',
    name: { en: `BANSURI`, ru: `БАНСУРИ`, kk: `БАНСУРИ` },
    description: {
      en: `BANSURI

Bansuri, bansuli (Skt. Bansi – bamboo) – various flutes common in the traditional and classical music-making of modern India, made from bamboo stalk. The instrument has 6-8 holes on the top side and one hole on the bottom. There are longitudinal open or whistle bansuri and transverse concert bansuri. Longitudinal is usually used in folk, transverse – In Indian classical music.
An ancient musical instrument associated with the shepherds and their traditions, it is closely connected with the history of Krishna and Radha, as well as captured in the works of Buddhist painting, created around 100 BC. A Bansuri called venu (veṇu) is revered as a divine instrument of Krishna and is often associated with Rasilila; in mythology it is mentioned how the melodies performed by Krishna on the flute attracted and fascinated not only women, but also animals. North Indian bansuri, usually 14 inches long, has also been traditionally used as an accompaniment instrument, such as film music.
Pandit Pannalal Ghosh (1911–1960) was able to turn bansuri from an ordinary folk instrument into an instrument of serious classical music. He experimented with the length, diameter and number of holes and concluded that longer and wider in diameter bansuri allow better use of low octaves.`,
      ru: `БАНСУРИ

Бансури, бансули (санскр. bansi – бамбук) – различные флейты, распространённые в традиционном и классическом музицировании современной Индии. Изготавливаются из стебля бамбука. На инструменте располагается 6-8 отверстий на верхней стороне и одно отверстие на нижней. Различают продольные открытые или свистковые бансури и поперечные концертные бансури. Продольная обычно используется в народной, поперечная – в индийской классической музыке.
Древний музыкальный инструмент, ассоциируемый с пастухами и их традициями, он тесно связан с историей Кришны и Радхи, а также запечатлён в произведениях буддийской живописи, созданных около 100 года н.э. Бансури под названием вену (veṇu) почитается как божественный инструмент Кришны и часто ассоциируется с Раса-лилой; в мифологии упоминается, как мелодии, исполняемые Кришной на флейте, привлекали и очаровывали не только женщин, но и животных. Североиндийская бансури, обычно 14-ти дюймов в длину, традиционно использовалась также в качестве инструмента для аккомпанемента, например, в музыке к фильмам.
Пандит Панналал Гхош (1911–1960) смог превратить бансури из обычного народного инструмента в инструмент серьёзной классической музыки. Он экспериментировал с длиной, диаметром и количеством отверстий бансури и пришёл к выводу, что более длинные и широкие в диаметре бансури позволяют лучше использовать низкие октавы.`,
      kk: `БАНСУРИ

Бансури, бансули (санскр. bansi – бамбук) – флейта түріне жатқызылатын, Үндістанның дәстүрлі және классикалық үрмелі музыкалық аспабы. Аспап бамбук ағашынан жасалынады. Оның жоғары бөлігінде 6-8 саңылау, төменгі жағында бір саңылау болады. Бансуридің екі түрі кездеседі: біріншісі – бойлық бансури, екіншісі – көлденең бансури. Бойлық бансури дәстүрлі халық музыкасында пайдаланса, көлденең бансури үндісінің классикалық музыкасында ойналады. 
Ежелгі музыкалық аспап бақташылық дәстүрмен тығыз байланысты, одан басқа үнді құдайлары Кришна мен Радханың тарихымен байланыстырылады және бансури б.з. 100 жылғы жатқызылатын буддалық кескіндеме шығармаларында кездеседі. Бансури вену деген атымен Кришнаның құдыретті аспабы ретінде құрметтеледі және Раса-лиломен тығыз байланыстырады. Үнді мифологиясында Кришна осы флейтада ойнау арқылы тек әйелдердің назарын өзіне ғана қаратапай, жанауарларды да өзіне баурап алған. 
Пандит Панналал Гхош (1911—1960)  бансуриді қарапайым халлықтық аспаптан классикалық музыкалық аспап қылып жасап шығарды. Оның шешімі бойынша бансури ұзын болған сайын және диаметрі бойынша кең болса неғұрлым төмен октаваларды шығару жеңіл деген.`
    },
    images: ['/instruments/world/india/bansuri/1.png'],
    audio: '/audio/world/india/bansuri.mp3',
    country: 'india',
    countryName: countryNames.india,
    flag: countryFlags.india
  },
  {
    id: 'india_ektara',
    name: { en: `Ektara`, ru: `Эктар`, kk: `Эктар` },
    description: {
      en: `Ektara is an Indian musical instrument consisting of a resonator (soundboard), fretboard and string. It is played by pinching a string with a finger, squeeze and release the finger along the entire length with the other hand, and in this way you can change the sound. Length – 47 cm, diameter – 10 cm.
A traditional musical instrument from West Bengal, India and Bangladesh was called ektara, which is commonly used during Baul’s song (a group of peoples consisting of the people of Bangladesh and West Bengal).
Ektara is literally translated as “single-stringed”, also called iktar, yaktaro, gopichand, gopijantra, tun tuna – a single-string instrument most often used in traditional music of Bangladesh, Egypt, India and Pakistan.
The resonator consists of a clay pot covered with leather, that is, it is a one-sided drum. The end of the stick is inserted into this pot so that the strings pass over the membrane.
The instrument has a spherical resonator made of dried pumpkin, tree or coconut, to which a chopped bamboo reed in the form of a neck is attached. A piece of leather is installed in the hole in the bottom of the resonator and a cord is attached to this. This string passes through the inside of the spherical resonator and between the forks of the bamboo cane to the upper end of the neck and wraps around the pin.
The ektara player holds his instrument vertically, grabbing the neck just above the resonator and plucking the game thread or strings with the index finger of the same hand. If he dances, he supports his rubber with his other hand, in which he carries clusters of small bells that sound when he hits his hand against a pumpkin. Pressing the two halves of the neck together weakens the string, thereby lowering its height. The modulation of the tone with each slight bend of the neck gives the ektara its distinctive sound. There are no signs or measurements to indicate which pressure will produce which note, so the pressure is regulated by the ear. Various sizes of ektara are soprano, tenor and bass. The bass ektara, sometimes called dotar, often has two lines (as literally do, “two”).
Ektara is a common instrument in Baul's music from Bengal. In recent years, disagreement has arisen over the adoption and alleged corruption in Baul’s music by popular bands and films in Bengal. It has become customary to mix traditional instruments such as ektara with more modern sounds, trying to appeal to a wide audience, which, according to traditional musicians, “destroys the true beauty” of Baul’s music.`,
      ru: `Эктар

индийский музыкальный инструмент, состоящий из резонатора (деки), грифа и струны. При игре защипывают пальцем струну, другой рукой сжимают и отпускают гриф по всей длине, и таким способом можно менять звучание. Длина – 47 см, диаметр – 10 см.
Традиционный музыкальный инструмент из Западной Бенгалии, Индии и Бангладеш назывался эктара, который обычно используется во время песни Баулов (группа народов, состоящая из народа Бангладеш и Западной Бенгалии).
Эктара в буквальном переводе «однострунная», также называемая иктар, яктаро, гопичанд, гопиджантра, тун туна – однострунный инструмент, наиболее часто используемый в традиционной музыке Бангладеш, Египта, Индии и Пакистана.
Резонатор состоит из глиняного горшка, обтянутого кожей, то есть представляет собой односторонний барабан. Конец палки вставлен в этот горшок так, что струны проходят над перепонкой.
Инструмент имеет сферический резонатор, изготовленный из высушенной тыквы, дерева или кокоса, к которому прикреплён расколотый бамбуковый тростник в виде шеи. В отверстие в нижней части резонатора установлен кусок кожи и к этому прикрепляется шнур. Эта струна проходит через внутреннюю часть сферического резонатора и между вилками бамбуковой трости до верхнего конца шеи и обёртывается вокруг штифта.
Игрок эктар держит свой инструмент вертикально, захватывая шею чуть выше резонатора и выщипывая игровую нить или струны указательным пальцем той же руки. Если он танцует, он поддерживает свою резиновую резину другой рукой, в которой он несёт скопления маленьких колоколов, которые звучат, когда он бьёт его руку против тыквы. Нажатие двух половинок шеи вместе ослабляет струну, тем самым понижая её высоту. Модуляция тона при каждом лёгком изгибе шеи даёт эктар свой отличительный звук. Нет никаких обозначений или измерений, чтобы указать, какое давление будет производить какую ноту, поэтому давление регулируется ухом. Различные размеры эктар – сопрано, тенор и бас. Басовый эктар, иногда называется дотар, часто имеет две строки (как это буквально подразумевается do, «two»).
Эктар является обычным инструментом в музыке Баула из Бенгалии. В последние годы возникли разногласия по поводу принятия и предполагаемой коррупции в музыке Баула популярными группами и фильмами в Бенгалии. Стало привычным смешивать традиционные инструменты, такие как эктар с более современными звуками, пытаясь обратиться к широкой аудитории, которую, как считают традиционные музыканты, «разрушает истинную красоту» музыки Баула.`,
      kk: `Эктар

резонатор (дека), мойын және ішектен құралған үнділердің музыкалық аспабы. Ойын барысында ішекті саусақпен басып, екінші қолмен мойынды қысып, ұзына бойымен бос қояды, осылайша аспаптың дыбысталуын өзгертуге болады. Ұзындығы – 47 см, диаметрі – 10 см.
Батыс Бенгалия, Үндістан, Бангладеш елдерінің ұлттық аспабы эктар Баулдардың (Бангладеш пен Батыс Бенгалияның халқының бір бөлігін қамтитын халықтар тобы) әндерін орындауда жиі қолданылады.
Эктар – бір ішекті мағынасын білдіреді және иктар, яктаро, гопичанд, гопичант, гопи-янтра, тун туна деп те аталады. Бір ішекті аспап Бангладеш, Египет, Үндістан мен Пәкістанның дәстүрлі музыкасында қолданылады. 
Резонатор терімен қапталған қыш құмырадан тұрады, яғни, бір жақты барабан түрінде. Таяқтың ұшы ішектер жарғақтың үстімен өтетіндей етіп құмыраға орнатылған.
Аспап кептірілген асқабақтан, ағаштан немесе кокостан жасалатын сфера пішінді резонатордан тұрады, оған мойын тәрізді етіп қақ жарылған бамбук таяқ бекітілген. Резонатордың төменгі бөлігіндегі саңылауда жіп байланатын тері орнатылған. Бұл ішек резонатордың ішкі бөлігімен және бамбук таяқтың ашасы арқылы мойынның жоғарғы шетіне дейін өтіп, шегені айналып оралады.
Орындаушы аспапты тік қалыпта, мойынды резонатордан сәл биік ұстап, ішекті сұқ саусағымен шертіп ойнайды. Орындаушы билеп жүрсе, аспапты шағын қоңыраушалар ұстаған қолына ауыстырады. Мойынның екі бөлігін қатар басу ішекті әлсіретіп, оның биіктігін төмендетеді. Мойынның әрбір кішкене иілімі кезіндегі үн модуляциясы (бір тоннан келесі тонға ауысу) аспаптың өзіндік дыбысын қалыптастырады. Қандай қысым нақты қай нотаны беретіні туралы түсіндірмелер мен өлшемдер болмағандықтан, қысым құлақ арқылы реттеледі. Эктардың түрлі өлшемдері – сопрано, тенор, бас. Бас эктар кейде дотар деп аталып, екі ішекті болады (до – екі).
Қалың жұртшылықтың назарын аудару мақсатында эктарды заманауи аспаптармен бірге қолдану әдетке айналды. Бұл дәстүрлі музыканттардың пікірінше, Баул музыкасының «шынайы әсемдігін жояды».`
    },
    images: ['/instruments/world/india/ektara/1.png'],
    audio: '/audio/world/india/ektara.mp3',
    country: 'india',
    countryName: countryNames.india,
    flag: countryFlags.india
  },
  {
    id: 'india_harmonica',
    name: { en: `INDIAN HARMONICA`, ru: `ИНДИЙСКАЯ ГАРМОНИКА`, kk: `ҮНДІ ГАРМОНИКАСЫ` },
    description: {
      en: `INDIAN HARMONICA

Indian harmonica is a slightly modified European harmonium.
Brought to Asia by Christian missionaries in the 18th-19th centuries, it became a traditional instrument in the musical culture of northern India at the beginning of the 20th century. Harmonica sounds in ensembles accompanying singers, instrumentalists and dancers. When it appeared in India, performer played on it sitting on a chair – as in Europe. But in the traditional Indian way, there were no tables or chairs – musicians usually sat on the floor. Therefore, the instrument changed over time: it lost its pedals, became smaller in size and acquired “manual control”. The modern Indian harmonica has a wooden case, behind it are hand furs. The musician pumps air with his left hand, and with his right plays the keys. 
The use of harmonics in an ensemble with Indian instruments initially provoked heated debate and rejection in India, especially among older musicians. It seemed to them that the fixed sound of the harmonica was dissonant with other instruments, it was alien. But over time, Indian musicians have developed a special technique for playing the harmonica, adapting it to national music.
In addition, in the middle of the 20th century, microtone harmonium was developed. It was played in the octave not 12, but 22 sounds, as required by classical Indian music. A high microtone is obtained by pulling the handle under the key. Thus, the harmonica can be tuned to perform any raga. The instrument is played while sitting, setting it in front of. Nowadays, Indian harmonica is firmly rooted in the tradition of traditional music making. It is also used in popular pop music and film music.`,
      ru: `ИНДИЙСКАЯ ГАРМОНИКА

Индийская гармоника — это чуть видоизмененная европейская фисгармония. 
Привнесенная в Азию христианскими миссионерами в XVIII-XIX веках, она в начале XX века стала традиционным инструментом в музыкальной культуре севера Индии. Гармоника звучит в ансамблях, сопровождающих певцов, инструменталистов и танцоров. Когда она появилась в Индии, на ней играли, сидя на стуле – как и в Европе. Но в традиционном индийском укладе не было ни столов, ни стульев – музыканты обычно располагались на полу. Поэтому инструмент со временем изменился: он лишился педалей, стал меньше по размеру и приобрёл «ручное управление». У современной индийской гармоники корпус деревянный, сзади него расположены ручные меха. Музыкант нагнетает воздух левой рукой, а правой играет на клавишах. 
Использование гармоники в ансамбле с индийскими инструментами вначале вызывало в Индии жаркие и неприятие споры, особенно среди музыкантов старшего поколения. Им казалось, что фиксированное звучание гармоники диссонирует с другими инструментами, является чужеродным. Но со временем индийские музыканты разработали особую технику игры на гармонике, адаптировав её для национальной музыки.
Кроме того, в середине XX века была разработана микротоновая фисгармония. Она воспроизводит в октаве не 12, а 22 звука, как того требует классическая индийская музыка. Высокий микротон получается путём вытягивания ручки под клавишей. Таким образом, гармоника может быть настроена для исполнения любой раги. На инструменте играют сидя, поставив его перед собой. В наши дни индийская гармоника прочно вошла в обиход традиционного музицирования. Она используется также в популярной эстрадной музыке и в киномузыке.`,
      kk: `ҮНДІ ГАРМОНИКАСЫ

Үнді гармоникасы – сырт келбеті сәл өзгеріске ұшыраған еуропалық фисгармония түрі.
Азияға XVIII-ХІХ ғғ. христиан дін таратушылары әкелген бұл аспап ХХ ғ. басында Үндістанның солтүстік аймағында музыка мәдениетінің дәстүрлі аспабына айналды. Гармоника ансамбль құрамында ойналып, әншілер мен бишілерді сүйемелдейді. Бастапқыда аспап Үнді еліне келгенде еуропадағыдай орындықта отырып ойнаған. Бірақ дәстүрлі үнді қоғамында орындық пен үстел қолданылмаған, музыканттар жерге отырып орындайтын. Сондықтан аспап уақыт өте келе өзгерістерге ұшырады: басқыштары алынды, көлемі кішірейіп, «қолмен басқару» қабілетін иемденді. Заманауи үнді гармоникасының корпусы ағаштан жасалады, артқы жағында қолмен басылатын тері жалғасқан. Музыкант сол қолымен ауаны қысып толтырып, оң қолымен клавишада ойнаған.
Гармониканы үнді дәстүрлі аспаптарымен қолдану бастапқыда үлкендер тарапынан оң қабылданбады. Олардың ойынша, гармониканың бекітілген дыбысталуы басқа аспаптармен үндеспеді. Бірақ заманауи үнді музыканттары аспапта ойнаудың ерекше әдісін ойлап тауып, оны ұлттық музыкаға бейімдеді.
Сонымен қатар, ХХ ғ. ортасында микротонды фисгармония жасалды. Ол үнді классикалық музыкасы талап ететіндей октавада 22 дыбыс беретін. Жоғары микротон клавиша астындағы тұтқаны тарту арқылы алынатын. Осылайша, гармоника кез келген раганы орындауға лайықтап күйге келтірілді. Музыкант жерге отырып, аспапты алдына қойып орындайды. Бүгінде үнді гармоникасы күнделікті дәстүрлі музыка орындауда кеңінен қолданылады. Ол, сондай-ақ, танымал эстрада музыкасы мен кино саласында да пайдаланылады.`
    },
    images: ['/instruments/world/india/harmonica/1.png'],
    audio: '/audio/world/india/harmonica.mp3',
    country: 'india',
    countryName: countryNames.india,
    flag: countryFlags.india
  },
  {
    id: 'india_pakhavaj',
    name: { en: `PAKHAVAJ`, ru: `ПАХАВАДЖ`, kk: `ПАХАВАДЖ` },
    description: {
      en: `PAKHAVAJ

Pakhavaj or mridang is a barrel-shaped, two-headed drum, originating from the Indian subcontinent, is a descendant of the ancient mridang.
This is a standard percussion instrument in the Dhrupad style and is used as an accompaniment for various musical and dance performances. Pakhavaj has a low, soft tone, very rich in harmonics. Located horizontally on a pillow in front of the drummer's crossed leg, the large bass side is played with the left hand, the triple skin with the right hand.
Pakhavaj is set up as a tabla with wooden wedges that are placed under tightening belts. Fine tuning is performed on the outer ring, which is part of the skin. The skin of the bass is traditionally prepared for the game, using freshly prepared batter from flour and water to get its low sound.
The technique of the game differs from the scoreboard in many aspects: on the bass side, the artist strikes with his whole palm instead of hitting it with his fingertip, as in the scoreboard. In the high-frequency side, the artist strikes the entire palm with his fingers correctly positioned on the skin to produce various sounds.
Some of the great Pakhavaji of recent times are: Purushottam Das (Natdwara), Ayodhya Prasad (Rampur), Pagaldas (Ayodhya), Raja Chhatrapati Singh (Bijana), Lala Keval Kishan, Makkan Pakhawaji, Ambadas Agle (Indore) and Mathuath Ramurash Mathura. In the young generation, Dalchand Sharma (Delhi), Devakinandan Goswami (Indore) and Rajilal Sharma (Lucknow) showed remarkable talent and perseverance in this area.`,
      ru: `ПАХАВАДЖ

Пахавадж или мриданг является бочкообразным, двуглавым барабаном, происходящий из Индийского субконтинента, являеться потомоком древнего мриданга.
Это стандартный ударный инструмент в стиле дхрупад и используется в качестве аккомпанемента для различных музыкальных и танцевальных представлений. Пахавадж имеет низкий, мягкий тон, очень богатый гармониками. Расположенный горизонтально на подушке перед скрещенной ногой барабанщика, большая басовая сторона играется левой рукой, тройная кожа правой рукой. 
Пахавадж настроен как табла с деревянными клиньями, которые помещены под подтягивающими ремнями. Точная настройка выполняется на внешнем кольце, которое является частью кожи. Кожу баса традиционно готовят к игре, применяя свежеприготовленное жидкое тесто из муки и воды, чтобы получить его низкий звук.
Техника игры отличается от табла во многих аспектах: на басовой стороне артист бьет всей ладонью вместо удара кончиком пальца, как в табле. В высокочастотной стороне артист ударяет по всей ладони пальцами, правильно расположенными на коже, чтобы произвести различные звучания.
Некоторые из великих пахаваджи недавнего времени: Пурушоттам Дас (Натдвара), Айодхья Прасад (Рампур), Пагалдас (Айодхья), Раджа Чхатрапати Сингх (Биджана), Лала Кевал Кишан, Маккан Пакхаваджи, Амбадас Агле (Индоре), Матхура) и Рамашиш Патхак. В молодом поколении Дальчанд Шарма (Дели), Девакинандан Госвами (Индор) и Раджилал Шарма (Лакхнау) проявили замечательный талант и настойчивость в этой области.`,
      kk: `ПАХАВАДЖ

Пахавадж немесе мриданг – бөшке тәріздес, екі жақты үнді халқының ұрмалы аспабы. Ол ежелден келе жатқан мриданг аспабының ұрпағы ретінде саналады. 
Дхрупад стиліндегі пахавадж аспабы түрлі музыкалық және би кештерін сүйемелдеуде пайдаланылады. Аспаптың дыбысы төмен, жұмсақ, гармоникаға бай. Малдас құрып отырған орындаушының алдындағы жастыққа көлденең орналасатын барабанның үлкен жағы сол қолмен, үш қабат мембраналы жағы – оң қолмен ойналады.
Пахавадж табла секілді күйге келтіріледі, нақты күйі мембрана бөлігі саналатын сыртқа сақинада жасалады. Теріні ойынға дайындағанда төмен дыбыс алу үшін ұн мен судан  жаңа әзірленген сұйық қамыр қолданған.
Ойнау әдісі табладан ерекшеленеді: бас мембрананы тұтас алақанмен соғады. Дыбысы жоғары жағын түрлі дыбыстар алу үшін саусақтармен соғады.
Біраз уақыт бұрын өмір сүрген атақты орындаушылар: Пурушоттам Дас (Натдвара), Айодхья Прасад (Рампур), Пагалдас (Айодхья), Раджа Чхатрапати Сингх (Биджана), Лала Кевал Кишан, Маккан Пакхаваджи, Амбадас Агле (Индоре), Матхура) и Рамашиш Патхак. Жас буын өкілдері Дальчанд Шарма (Дели), Девакинандан Госвами (Индор) и Раджилал Шарма (Лакхнау) бұл салада өз таланттарын танытты.`
    },
    images: ['/instruments/world/india/pakhavaj/1.png'],
    audio: '/audio/world/india/pakhavaj.mp3',
    country: 'india',
    countryName: countryNames.india,
    flag: countryFlags.india
  },
  {
    id: 'india_pungi',
    name: { en: `Pungi`, ru: `Бин (пунги)`, kk: `Бин (пунги)` },
    description: {
      en: `Pungi

Bin (pungi) is an Indian wind musical instrument, a relative of the clarinet. It consists of an air chamber with a mouthpiece on one side and two tubes – melodic and bourdon – on the other. An air chamber with a mouthpiece can be made of dried pumpkin, or of wood, and canes of wood or reed.
With the help of a bourdon tube, only one long note is played, which serves as an accompaniment to the main melody played on the melody tube.
Melodies for pungi are performed without pauses, for this the continuous breathing technique is used: air is inhaled into the nose and at the same time is quickly pushed out through the mouth by the movement of the cheeks or tongue. Two tubes made of bamboo or cane have a single tongue. The ends, on which the tongues are fixed, are inserted into the pumpkin and therefore are not visible. Both tubes have 3–4 sound holes.
	•	The word “pungi” simply means “pipe”.
	•	Pungi is used by street musicians in India to conjure snakes.
	•	This instrument is also called a curbstone, mahudi, bin.`,
      ru: `Бин (пунги)

индийский духовой музыкальный инструмент, родственник кларнета. Состоит из воздушной камры с мундштуком с одной стороны и двумя трубками – мелодической и бурдонной – с другой. Воздушная камера с мундштуком может быть сделана из высушенной тыквы, либо из дерева, а трости из дерева или тростника.
С помощью бурдонной трубки исполняют только одну долгую ноту, которая служит аккомпанементом основной мелодии, исполняемой на мелодической трубке. 
Мелодии на пунги исполняются без пауз, для этого используется техника непрерывного дыхания: воздух вдыхается в нос и одновременно быстро выталкивается через рот движением щёк или языка. Две трубки, сделанные из бамбука или тростника, имеют одинарный язычок. Концы, на которых закреплены язычки, вставлены в тыкву и поэтому не видны. Обе трубки имеют 3-4 игровых отверстий.
	•	Слово «пунги» означает просто «трубка».
	•	Пунги используются уличными музыкантами в Индии для заклинания змей.
	•	Этот инструмент также называют тумба, махуди, бин.`,
      kk: `Бин (пунги)

кларнет тәріздес, Үнді елінің үрмелі музыкалық аспабы. Аспап бір жағы мүштігі бар ауа камерасынан, екінші жағынан әуенді және бурдонды екі түтікшеден тұрады. Мүштігі бар ауа камерасы кептірілген асқабақтан немесе ағаштан, ал түтіктер бамбук немесе қамыстан жасалады.
Бурдонды түтік көмегімен тек бір ғана ұзақ нота орындайды, ол әуенді түтікпен ойналатын негізгі музыканы сүйемелдейді. 
Пунгиде әуен тоқтаусыз орындалады, ол үшін үздіксіз тыныс алу техникасы қолданылады: мұрын арқылы дем алып, бет немесе тіл қозғалысымен ауыз арқылы бірден шығарылады. Түтіктердің бір тілшесі болады. Тілшелер бекітілген ұштары асқабақтың ішінде орналасқан, сондықтан сырт көзге көрінбейді. Қос түтікшеде де 3-4 ойын саңылауы болады. 
	•	«Пунги» сөзі «түтік» мағынасын білдіреді. 
	•	Аспапты Үндістанда көше музыканттары жыландарды сиқырлау үшін қолданады. 
	•	Бұл аспап тумба, махуди, бин деп те аталады.`
    },
    images: ['/instruments/world/india/pungi/1.png', '/instruments/world/india/pungi/2.png'],
    audio: '/audio/world/india/pungi.mp3',
    country: 'india',
    countryName: countryNames.india,
    flag: countryFlags.india
  },
  {
    id: 'india_sarangi',
    name: { en: `SARANGI`, ru: `САРАНГИ`, kk: `САРАНГИ` },
    description: {
      en: `SARANGI

Sarangi is an Indian lute-type stringed bowed instrument. According to Indian tradition, it is classified as an instrument of the tata-vadya group; widespread in the practice of classical music playing the Hindustani tradition (in the northern regions of India, Pakistan, Nepal); also has a number of regional traditional varieties.
The case is made of a single piece of wood, with a wide neck and notches on the sides, and a leather upper deck. 3-4 playing strings tuned in quarts and fifths, and 11-15 resonating tunes tuned for diatonic scale sounds that pass through the neck and are attached with pegs on the side. When playing, the performer holds the sarangi upright.
The tonal range of the instrument is quite extensive - up to two octaves.
Such instruments as sarinda, Dilruba, Ravanahasta (Ravanhatha), Esraj, Chikara, Kamaicha (Kemancha) and others are considered traditional prototypes of the sarangi. A related sarangi instrument is also common in Afghanistan.
It is used as an accompanying and solo instrument to accompany dances and theatrical performances. There is no doubt the connection of the sarangi with the Indomuslim vocal and dance traditions; Actually solo performance on it grew out of a detailed accompaniment of vocal compositions (Khayyal, Thumri) and Kathak-style dance. Among the prominent sarangi performers in the 20th century are the Bundu Khan (Pakistan) and Rama Narayana (India).`,
      ru: `САРАНГИ

Саранги – индийский струнный смычковый инструмент лютневого типа. По индийской традиции классифицируется как инструмент группы тата-вадья; распространён в практике классического музицирования традиции хиндустани (в северных районах Индии, Пакистане, Непале); имеет также ряд региональных традиционных разновидностей.
Корпус изготавливается из цельного куска дерева, с широкой шейкой и выемками по бокам, и кожаной верхней декой. 3-4 игровые струны, настроенные по квартам и квинтам, и 11-15 резонирующих, настроенных по тонам диатонического звукоряда, которые проходят через шейку и крепятся колками сбоку. При игре исполнитель держит саранги вертикально.
Тональный диапазон инструмента довольно обширный — до двух октав.
Традиционными прототипами саранги считают такие инструменты, как саринда, дильруба, раванахаста (раванхаттха), эсрадж, чикара, камайча (кеманча) и другие. Родственный инструмент саранг распространён также в Афганистане.
Используется как аккомпанирующий и сольный инструмент, для сопровождения танцев и театрализованных представлений. Несомненна связь саранги с индомусульманскими вокальными и танцевальными традициями; собственно сольное исполнительство на нём выросло из развёрнутого сопровождения вокальных композиций (кхайял, тхумри) и танца в стиле катхак. Среди выдающихся исполнителей на саранги в XX веке следует назвать Бунду Хана (Пакистан) и Рама Нарайяна (Индия).`,
      kk: `САРАНГИ

Саранги – лютня типтес үнді халқының ішекті-ыспалы аспабы. Үнді дәстүрі бойынша тата-вадья тобына жатады; Хиндустани (Үндістанның солтүстік аудандарында, Пәкістан мен Непалда) музыкасында кең таралған; аймақтық түрлері де кездеседі.
Корпусы тұтас ағаштан жасалады, мойны жуан, шеттерінде ойықтары болады, жоғары декасы терімен қапталады. Кварта және квинтаға келтірілген 3-4 ойын ішектері, диатоникалық дыбыс қатарының үніне сай реттелген резонанстаушы 11-15 ішек мойыннан өтіп, бүйірдегі құлақтарға бекітіледі. Ойын кезінде орындаушы аспапты тік ұстайды. 
Аспаптың дыбыс диапазоны кең – екі октава шамасында. 
Сарангидің дәстүрлі прототиптері қатарына саринда, дильруба, раванахаста, эсрадж, чикара, камайча, т.б. жатады. Туыстас саранг аспабы Ауғанстанда танымал.
Би және театр қойылымдарында сүйемелдеуші және жеке аспап ретінде қолданылады. Аспаптың үнді-мұсылман вокалды және би дәстүрімен байланысы терең, аспапта жеке орындаушылық осы вокалды туындыларды (кхайял, тхумри) және катхак үлгісіндегі биді кеңінен сүйемелдеуден қалыптасқан. ХХ ғ. танымал орындаушылардан Бунду Хан (Пәкістан) мен Рам Нарайянды (Үндістан) атауға болады.`
    },
    images: ['/instruments/world/india/sarangi/1.png'],
    audio: '/audio/world/india/sarangi.mp3',
    country: 'india',
    countryName: countryNames.india,
    flag: countryFlags.india
  },
  {
    id: 'india_sarod',
    name: { en: `Sarod`, ru: `Сарод`, kk: `Сарод` },
    description: {
      en: `Sarod is a fretless string-plucked musical instrument from the lute family, widely used for performing Indian classical music. Along with sitar, it is the most popular and famous musical instrument in Hindustani (North India, Pakistan, Bangladesh) music. It is characterized by a deep, dense, meditative sound, saturated with the sounds of sympathetic strings. The body is made of a single piece of red (teak, mulberry) wood, strings in modern instruments steel and copper instead of vein, used earlier. The lower part of the body (resonator) is hollow, hemispherical, covered in the upper section with parchment. On the deck, on a special membrane, a thin stand is attached. At the junction of the resonator and the neck, also hollow, semicircular recesses are located on both sides of the case. The neck, fully tapering and almost trapezoidal in shape, is a polished steel plate with no frets. Empty, the lateral part of which is directed to its limits, the vulture is separated from the ring box, hollow, long and narrow (the ratio with the bar is approximately 1: 2); on it on both sides are attached large wooden pegs holding 6-8 main (game) strings. The neck discharge is located on 9-15 smaller spikes intended for attaching sympathetic (resonant) strings of a tarab.
The total length of the sarod is about 75 cm, the diameter of the lower part of the casing is 25-28 cm, and the upper (the tip of the annular box) is not more than 4 cm. There are 3 varieties of sarod of various sizes: large, medium and small. The instrument also varies constructively (by the number and location of the main, bourdon and resonating strings, the position of the pegs, etc.).
The modern technique of sarod enriched with the music of northern and South Indian music (khyal, gazzal, kriti, etc.). The sarod is played as the sitar, sitting, opera body for the right leg, crossed with the left, and an instrument for installation horizontally or with a slight inclination. The musician's right hand extracts sound using a plectrum (java) from wood or ivory.
Representatives of the school of gharana-rampur are, according to legend, the descent from the great musician Miyan Tansen who lived in the period of the Mongolian emperor Akbar (hence its other name – Senia gharana). The most famous modern sarodia, leading its line from this school, is Amjad Ali Khan, whose great-grandfather was the sarodia Gulam Ali Khan, famous in the history of Hindustani music. His grandfathers and father also made a great contribution to the development of the traditions of this school.
In concert practice, sarod is mainly used as a solo instrument. It acquired such significance practically only in the 20th century, until that time being an instrument correlated mainly with traditional music-making and probably having a number of regional varieties (a factor which, most likely, can explain the instability existing so far, the variability of its design). In the deployment of horn texts, sarod, like other solo instruments, interacts in an ensemble with a tanpur and a tabla. The modern concert tradition also involves the sound of two instruments together, sarod and sitar, or jugalbandi.`,
      ru: `Сарод

безладовый струнно-щипковый музыкальный инструмент из семейства лютневых, преимущественно используемый для исполнения индийской классической музыки. Наряду с ситаром, является наиболее популярным и известным музыкальным инструментом в музыке Хиндустани (северная Индия, Пакистан, Бангладеш). Характеризуется глубоким, плотным, медитативным звучанием, насыщенным призвуками от симпатических струн. Корпус изготавливается из цельного куска красного (тикового, тутового) дерева, струны в современных инструментах стальные и медные вместо жильных, использовавшихся ранее. Нижняя часть корпуса (резонатора) полая, полусферическая, обтянутая по верхнему срезу пергаментом (дека). На деке, на особой мембране, крепится тонкая подставка. В месте сочленения резонатора и шейки, тоже полой, по  обеим сторонам корпуса расположены полукруглые выемки. Гриф, сильно сужающийся кверху и имеющий практически трапециевидную форму, представляет собой полированную стальную пластину, без ладов. Порожком, боковая часть которого выступает за его пределы, гриф отделяется от колковой коробки, полой, длинной и узкой (соотношение с грифом примерно 1:2); в ней по обоим бокам крепятся большие деревянные колки, удерживающие 6-8 основных (игровых) струн. Сбоку шейки расположены 9-15 меньших по размерам колков, предназначенных для крепления симпатических (резонирующих) струн тараб.
Общая длина сарода около 75 см, диаметр нижней части корпуса – 25-28 см, верхней (оконечности колковой коробки) – не более 4 см. Существуют 3 различных по величине разновидности сарода: большой, средний и малый. Инструмент варьируется также и конструктивно (по количеству и расположению основных, бурдонирующих и резонирующих струн, положение колков и т.д.).
Современная техника сарод обогащена приёмами северо- и южноиндийской вокальной музыки (кхъял, газзал, крити и др.). Играют на сарод как и на ситаре, сидя, оперев корпус о правую ногу, скрещённую с левой, и держа инструмент горизонтально или с небольшим наклоном. Правая рука музыканта извлекает звук при помощи плектра (джава) из дерева или слоновой кости.
Представители школы гхараны–рампурской ведут, по преданию, происхождение от легендарного музыканта времён могольского императора Акбара, Мийяна Тансена (отсюда и другое её название – Сения гхарана). Наиболее известным современным сародия, ведущим свою линию от этой школы, является Амджад Али Хан, прадедом которого был знаменитый в истории музыки хиндустани сародия Гулам Али Хан. Его деды и отец, Хафиз Али Хан, также внесли большой вклад в развитие традиции этой школы.
В концертной практике сарод используется главным образом как солирующий инструмент. Значение такового он приобрел, практически, только в ХХ столетии, будучи до этого времени инструментом, соотносимым преимущественно с традиционным музицированием и имевшим, вероятно, ряд региональных разновидностей (фактор, которым, скорее всего, можно объяснить существующую до сих пор нестабильность, вариативность его конструкции). В развертывании раговых текстов сарод, подобно другим солирующим инструментам, взаимодействует в ансамбле с танпурой и таблой. Современная концертная традиция предполагает также звучание совместно двух инструментов, сарод и ситара, или джугалбанди.`,
      kk: `Сарод

лютня типтес, пернесіз ішекті-шертпелі музыкалық аспап. Үнді классикалық музыкасын орындауда қолданылады. Ситармен бірге Хиндустан (Солтүстік Үндістан, Пәкістан, Бангладеш) музыкасындағы кең таралған аспаптар болып саналады. Сезімтал ішектерден шығатын терең, ойландыратын дыбыстармен сипатталады. Корпусы қызыл ағаштың (тик және тұт ағаштары) тұтас бөлігінен, ішектері болат пен мыстан жасалады. Корпустың төменгі бөлігі (резонатор) қуыс, жартышар тәріздес, жоғары бөлігі (декасы) пергаментпен жабылған. Декаға, ерекше мембранаға жіңішке тіреуіш бекітіледі. Резонатор мен мойынның түйіскен тұсы да қуыс, корпустың екі бүйірінде жарты шар тәрізді ойықтар бар. Жоғарылаған сайын тарылып, трапеция формасына келетін мойны пернесіз, жылтыратылған болат пластина болып келеді.
Бүйір жағы сыртқа қаратылған тиек арқылы мойын іші қуыс, ұзын, тар құлақ қорабынан ажыратылған мойынмен қатынасы 1:2); бұл қорапқа 6-8 негізгі ішектер тағылатын үлкен ағаш құлақтар бекітіледі. Мойынның бүйір жақтарында симпатикалық (резонаторлық) тараб ішектері тағылатын 9-15 кішірек құлақтар орналасады.
Сародтың жалпы биіктігі шамамен 75 см, корпустың төменгі бөлігінің диаметрі 25-28 см, жоғарғы бөлік диаметрі 4 см-ден артық емес. Өлшемдеріне қарай үш түрі бар: үлкен, орташа және кіші. Аспап құрылымы бойынша да өзгереді (негізгі, бурдонды және резонаторлық және резонаторлық ішектердің саны мен орналасуы, құлақтар орналасуы). 
Заманауи сарод техникасы солтүстік және оңтүстік Үндістан вокалды музыкасы тәсілдерімен (кхъял, газзал, крити, т.б.) толықтырылды. Аспапта отырған қалыпта, корпусын оң аяққа тіреп, көлденең немесе шамалы көлбеу ұстап ойнайды. Дыбысты ағаш не піл сүйегінен жасалған плектр (джава) көмегімен алады.
Беделді гхарана мектептерінің бірі – рампур мектебінің өкілдері бастауын, аңыз бойынша, Ұлы Моғол империясының императоры Акбар тұсындағы танымал музыкант Миян Тансеннан алады-мыс. Бұл мектептің танымал заманауи сародияларынан Амджад Али Ханды атауға болады, оның арғы атасы Хиндустанның музыка тарихындағы атақты сародия Гулам Али Хан мен әкесі Хафиз Али Хан да бұл мектеп дәстүрінің дамуына өлшексіз үлес қосты.
Концерттік бағдарламаларда сарод көп ретте жеке ойналады. Сарод мұндай дәрежеге тек ХХ ғасырда жеткен болатын. Оған дейін, негізінен, дәстүрлі музыкамен қатынаста болып, аймақтық ерекшеліктері (құрылымының алуандығы) орын алған. Рага мәтіндерін өрістетуде сарод та өзге жеке орындаудағы аспаптар секілді, танпура және табла аспаптарымен бірлесе әрекет етеді. Бүгінгі таңда концерттерде сарод ситар немесе джугалбандимен бірге дыбысталады.`
    },
    images: ['/instruments/world/india/sarod/1.png'],
    audio: '/audio/world/india/sarod.mp3',
    country: 'india',
    countryName: countryNames.india,
    flag: countryFlags.india
  },
  {
    id: 'india_shehnai',
    name: { en: `Shehnai`, ru: `Шенай (шенаи, шехнаи, шахнаи) (этимология предположительно восходит к «наи-и-шахи», перс.`, kk: `Шенай (шенаи, шехнаи, шахнаи) (этимологиясы шамамен «наи-и-шахи», парсы. «шах флейтасы» сөзінен)` },
    description: {
      en: `Shehnai (etymology presumably goes back to “nai-i-shahi”, Persian – “Shah’s flute”) – a bilingual oboe; widespread in the practice of traditional and classical music playing in the north of Hindustan (north of India, Nepal, Pakistan). An analogue of the South Indian oboe Nagaswaram and Tibetan jailing.
It consists of a wooden case widened downward (more often from hardwoods of ebony type), the length of which for instruments of different sizes varies between 30-45 cm. The case ends with a wide copper (brass) or silver bell with bent edges. On the body are 8-9 holes. The top 7 holes are gaming and are designed to deploy, in fact, a melodic line; lower ones are usually waxed or remain open.
A pair of fan-shaped canes from a palm leaf is attached to the place of blowing air. Additional (spare) canes are hung from the upper part of the hull on twine, as well as a special ivory or silver needle, with which the canes are cleaned and straightened. The shehnai design, like other wind instruments in the region, does not provide any mechanisms; sound extraction is achieved both in the usual way and by blowing, which allows to achieve a high degree of expressiveness and technicality in the process of playing it.
The design features of shehnai, as well as the skill of musicians associated with this instrument, make it possible to cover a wide register-range space in the development of musical material, including all three registers: lower (mandra), middle (madhya) and upper (tara), a total of about five octaves. Based on the non-temperament, which is typical for the musical thinking of the region as a whole, the practice of playing shehnai provides for the most important aspect of the presence of micro-intervals-shruti, enriching the musical fabric with the finest sound pitch nuances.
There are two varieties of shehnai in size and purpose. The big shehnai is the main solo instrument; the shehnai of smaller sizes is called sur peti (often there are two such instruments in the ensemble) and has 2-3 holes, partially or completely covered with wax for tuning to a specific tone. In the ensemble, they serve as bourdoning instruments leading an auxiliary sound line.
In different local languages, depending on the size of the instrument, shehnai can be found under various names: mohori, kuzah, mukhavina, sundri, naferi, mela, nagswaram.
It is not known for certain whether the shehnai is an original Indian instrument, although it is used by the tribes. It is believed that the earliest mention of it – under the name madhwari – is in the “Brihaddeshi” (V-IX centuries BC), but a certain image of shehnai can only be found in miniatures dating back to the 16th century. Some researchers are of the opinion that this instrument was borrowed from Central Asia and Mongolia, where it is known as surnay and zurna.`,
      ru: `Шенай (шенаи, шехнаи, шахнаи) (этимология предположительно восходит к «наи-и-шахи», перс.

«шахская флейта») – двухъязычковый гобой; распространен в практике традиционного и классического музицирования севера Индостана (север Индии, Непал, Пакистан). Аналог южноиндийского гобоя нагасварам и тибетского гъялинг.
Состоит из расширенного книзу деревянного корпуса (чаще – из твердых пород типа эбена), длина которого у инструментов разной величины варьируется в пределах 30-45 см. Корпус заканчивается широким медным (латунным) или серебряным раструбом с отогнутыми краями. На корпусе расположены 8-9 отверстий. Верхние 7 отверстий являются игровыми и предназначены для развертывания, собственно, мелодической линии; нижние обычно залепляются воском либо остаются открытыми.
В месте вдувания воздуха крепится пара веерообразных тростей из пальмового листа. К верхней части корпуса на бечевках подвешиваются дополнительные (запасные) трости, а также специальная игла из слоновой кости или серебра, с помощью которой трости прочищаются и выправляются. Конструкция шенай, подобно остальным духовым инструментам региона, не предусматривает каких-либо механизмов; звукоизвлечение достигается как обычным путем, так и передуванием, что позволяет достигать в процессе игры на нем высокой степени выразительности и техничности.
Конструктивные особенности шенай так же, как и мастерство музыкантов, связанных с этим инструментом, дает возможность охватывать в развитии музыкального материала широкое регистрово-диапазонное пространство, включающее все три раговых регистра: нижний (мандра), средний (мадхья) и верхний (тара), в целом около пяти октав. Базируясь на не темперированном строе, что характерно для музыкального мышления региона в целом, практика музицирования на шенай предусматривает в качестве важнейшего аспекта наличие микроинтервалов-шрути, обогащающих музыкальную ткань тончайшими звуковысотным нюансами.
Существуют две разновидности шенай по величине и предназначению. Большой шенай является основным солирующим инструментом, шенай меньших размеров называется сур пети (нередко в ансамбле таких инструментов два) и имеет 2-3 отверстия, частично или полностью закрытых воском для настройки на определенный тон. В ансамбле они выполняют функцию бурдонирующих инструментов, ведущих вспомогательную звуковую линию.
На разных местных языках, в зависимости от размеров инструмента, шенай можно встретить под различными названиями: мохори, кузах, мукхавина, сундри, нафери, мела, нагсварам. 
Точно не известно, является ли шенай оригинальным индийским инструментом, хотя он и используется племенами. Предполагают, что самое раннее упоминание о нём – под названием мадхвари – имеется в «Брихаддеши» (V-IХ вв. до н.э.), но определённое изображение шенай можно встретить лишь на миниатюрах, относящихся к ХVI веку. Некоторые исследователи придерживаются мнения о том, что этот инструмент был заимствован из Центральной Азии и Монголии, где он известен как сурнай и зурна.`,
      kk: `Шенай (шенаи, шехнаи, шахнаи) (этимологиясы шамамен «наи-и-шахи», парсы. «шах флейтасы» сөзінен)

екі тілшелі гобой, Хиндустанның солтүстік аудандарының (Үндістанның солтүстігі, Непал, Пәкістан) дәстүрлі және классикалық музыкасында қолданылады. Оңтүстік Үндістандағы нагасварам және тибеттік гъялинг аспаптарының аналогі.
Ағаштан жасалған корпусы төмен қарай кеңейе түседі (эбен секілді мықты ағаштар қолданылады), ұзындығы 30-45 см аралығында болады. Корпус шеттері жазылған мыс (жез) немесе күміс кеңернеумен аяқталады. Онда 8-9 саңылау орналасқан. Олардың жоғарғы 7-еуі ойынға арналған, төменгілері, әдетте, балауыз бітеледі немесе ашық қалдырылады.
Ауа үрлейтін тұсқа пальма жапырағынан жасалған желпуіш тәрізді қос түтік бекітіледі. Корпустың жоғарғы бөлігіне жіңішке жіппен қосымша түтіктер, сондай-ақ, піл сүйегінен немесе күмістен жасалған түтіктерді тазалап, түзететін арнайы ине ілінеді. Аймақтағы басқа да үрмелі аспаптар секілді, шенай құрылымында да қандай да бір механизмдер болмайды; дыбыс алу тәсілдері әдеттегі тәсілмен және ойын барысында анықтық пен шеберліктің жоғарғы дәрежесін көрсететін қайта үрлеу әдісімен де орындалады. 
 Музыканттардың шеберлігі секілді, шенайдың құрылымдық ерекшеліктері музыкалық материалдың дамуында барлық 3 рага регистрлері: төменгі (мандра), ортаңғы (мадхья) және жоғарғы (тара), жалпы 5 октавадан тұратын ауқымды регистрлік-диапазондық кеңістікті қамтуға мүмкіндік береді. 
Аймақтағы музыка орындауда шығарманы нәзік дыбыстармен байытатын аспект – микроинтервал-шрутилердің болуын міндетті талап етеді. 
Көлеміне және қолданылуына байланысты шенайдың 2 түрі болады. Үлкен шенай жеке орындаудағы негізгі аспап болса, кіші шенай сур пети (ансамбльде мұндай аспаптар 2-еу) деп аталып, белгілі бір үндестікке келтіру үшін жартылай не толықтай балауызбен жабылатын 2-3 саңылауы болады. Ансамбльде олар қосымша дыбыс беретін бурдон аспаптарының қызметін атқарады. 
Шенай өлшемдері мен жергілікті тілдердің алуандығына байланысты әр түрлі аталады: мохори, кузах, мукхавина, сундри, нафери, мела, нагасварам. 
Шенайды жергілікті тайпалар қолданғанмен, оның нақты шығу тегі белгісіз. Аспап туралы алғашқы жазбалар «Брихаддеши» еңбегінде (б.з.б. V-ІХ ғғ.) мадхвари атауымен кездеседі. Шенай бейнелері ХVІ ғ. миниатюраларына тән. Кейбір ғалымдар шенай атауымен белгілі бұл аспап Орталық Азия мен Монғолияда сурнай, зурна аталып, Үнді жеріне аталған екі өңірден келген деседі.`
    },
    images: ['/instruments/world/india/shehnai/1.png'],
    audio: '/audio/world/india/shehnai.mp3',
    country: 'india',
    countryName: countryNames.india,
    flag: countryFlags.india
  },
  {
    id: 'india_sitar',
    name: { en: `SITAR`, ru: `СИТАР`, kk: `СИТАР` },
    description: {
      en: `SITAR

Sitar is a multi-stringed musical instrument used to perform Indian classical music, belonging to the group of stringed musical instruments.
The main strings of the sitar are 7 (5 melodic and 2 bourdon). In addition there are 9-13 resonating strings called taraf (orchestra). Resonating strings, responding to the sounds of the main ones, create that unique sound that distinguishes the sitar from other instruments. Sounds are extracted with a special pick, called “misrab”, worn on the index finger.
The name probably comes from the Persian “setar” – the progenitor of many stringed instruments of the East. A sitar appeared in India in the 13th century during a period of increasing Muslim influence and initially looked something like its close relative – the Tajik setor, which, however, is three-stringed (“se” means three). However, in India, the instrument was transformed: the medium-sized wooden resonator was replaced by a huge pumpkin, but they did not stop there and added another pumpkin resonator, attaching it to the top of the hollow neck, the deck was richly decorated with pink wood and ivory, and the imposed vein frets were replaced with metal arcuate.
Famous sitarists: Ravi Shankar, Anushka Shankar, Musharaff Khan, George Harrison, Chhote Rahimat Khan, Robbie van Leuven.`,
      ru: `СИТАР

Ситар – многострунный  музыкальный инструмент, используемый для исполнения индийской классической музыки, относящийся к группе струнных щипковых музыкальных инструментов.
Основных струн у ситара – 7 (5 мелодических и 2 бурдонных). Помимо того на ситаре ещё 9-13 резонирующих струн, которые называются тараф (оркестр). Резонирующие струны, отзываясь на звуки основных, создают то уникальное звучание, которое отличает ситар от других инструментов. Звуки извлекают специальным медиатором, называемым «мизраб», надеваемым на указательный палец.
Название, вероятно, происходит от персидского «сетар» – прародителя многих струнных инструментов Востока. Появился ситар в Индии в XIII веке в период усиления мусульманского влияния и выглядел первоначально примерно так, как его близкий родственник – таджикский сетор, который, однако, трёхструнный (се означает три). Однако в Индии инструмент преобразился: средних размеров деревянный резонатор заменили на огромный тыквенный, но на этом не остановились и добавили ещё один тыквенный резонатор, прикрепив его к верхушке пустотелого грифа, деку богато украсили розовым деревом и слоновой костью, а навязанные жильные лады заменили металлическими дугообразными.  
Известные ситаристы: Рави Шанкар, Анушка Шанкар, Мушарафф Хан, Джордж Харрисон, Чхоте Рахимат Кхан, Робби ван Леувен.`,
      kk: `СИТАР

Ситар – көп ішекті музыкалық аспап, үнді халқының классикалық музыкасын орындау барысында қолданылады. Бұл музыкалық құрал ішекті-шертпелі аспаптар тобына жатады. 
Ситарда негізгі ішек – 7, қалған 9-13 қосымша дыбыс ішектері болып келеді. Қосымша дыбыс ішектер негізгі ішектермен үйлесім тауып ерекше дыбыстар береді. Бұл құбылыс ситарды басқа аспаптарға қарағанда ерекшелендіреді. Ситарда ойнау сұқ саусаққа киген «мизраб» деп аталатын медиатор арқылы іске асады.
Атауы Шығыстың бірақатар аспаптарының арғы тегі саналатын парсының «сетарынан» бастау алуы мүмкін. Үндістанда ситар ХІІІ ғ. мұсылман ықпалы күшейген тұста қалыптасып, бастапқыда тәжік сеторына ұқсас болды. Бірақ Үнді елінде аспап өзгерістерге ұшырады: көлемі орташа ағаш резонаторды үлкен асқабақтан жасалған түріне ауыстырды, оған қосымша асқабақтан жасалған тағы бір резонатор қосып, іші қуыс мойынға бекітті; декасын баия ағашымен және піл сүйегімен әсемдеген, байланған ішек пернелерді металдан жасалған доға тәріздес түрлерімен алмастырды.
Танымал орындаушылар: Рави Шанкар, Анушка Шанкар, Мушарафф Хан, Джордж Харрисон, Чхоте Рахимат Кхан, Робби ван Леувен.`
    },
    images: ['/instruments/world/india/sitar/1.png'],
    audio: '/audio/world/india/sitar.mp3',
    country: 'india',
    countryName: countryNames.india,
    flag: countryFlags.india
  },
  {
    id: 'india_tabla',
    name: { en: `Tabla`, ru: `Табла`, kk: `Табла` },
    description: {
      en: `Tabla in Arabic means “drum”. It is believed that the tabla was invented by the Sufi Saint Amir Khusro, dividing the ancient percussion instrument pakhavaj into two parts. Tabla consists of two drums: small – tabla or dayan and large – dag or bayan (button accordion). On a dag play with the left hand. It can be made of clay, copper, silver or nickel. Tabla is made from a hollow piece of wood.
The membrane of each drum is connected to the housing through a leather hoop extending around the circumference of the housing; a system of belts is passed through it, girdling the body of each drum from top to bottom. Between the belts of a dayan 8 wooden blocks (gitti) are horizontally placed; their shift up and down (knocking out with a special hammer) regulates the tension of the belts and serves to fine-tune the drum. Bayan does not have such a system that adjusts the tuning and does not have any pronounced pitch-certainty, although in general it sounds lower and “deeper” than the right drum. Each of the membranes of the tabla has a complex device and consists of two pieces (round, continuous and annular with a recess inside) of the skin, usually a goat, superimposed on top of one another so that a kind of closed hole is placed in the middle of the membrane. It is located at the tabla in the center, and at the dagga it is somewhat shifted to the edge; both holes are covered with a constantly fastening cake of a dark-colored mixture, similar to that which is applied to the membranes of mridang, pakhavaj and other drums of the region.
This coating (syakhi), which includes rice or wheat flour, metal sawdust and a special adhesive, makes the instrument timbre, sound-pitch, dynamic, technically flexible and expressive - qualities that distinguish the classical drums of the region as a whole; but even among them the tabla stands out for its special variety and perfection of aesthetic and technical qualities.
Researchers are inclined to draw parallels between the development of the instrument and the growth of its popularity and the development of those genres of vocal music (mainly khyal and thumri) in which it acts as a metro-rhythmic instrument. The tabla is played while sitting, putting both drums in front of you and placing under the one of them, or under both, thick cloth “bagels”. The drums during the game are often deployed with an inclination (tabla from yourself, dagga to yourself), which provides a more convenient position of contact between the hands and membranes.
The technique and methods of playing this instrument vary widely depending on the traditions of the local gharana school. Currently, 5 gharan are most famous: Punjabi, Delhi, Benares, Farujabad and Ajrada. In the 19th and early 20th centuries the tabla was used mainly as an instrument in the ensemble that accompanied singing and dancing (kathak) or the play of a solo instrumentalist. In such an ensemble, characteristic of the Hindustani tradition, it was assigned the role of an instrument that presents and develops the line of metro-rhythmic development, and as a whole – performs the function of metro-rhythmic organization of the entire musical text.
There is a legend telling about the birth of the tabla. At the time of Akbar, there were two professional performers on pakhavaj. They were irreconcilable rivals and constantly competed with each other. Once, in a heated battle of a drum contest, one of the rivals – Sudhar Khan was defeated and, unable to bear his bitterness, threw his pakhavaj into the ground. The drum broke into two parts, turning into tabla and dagga.`,
      ru: `Табла

на арабском – «барабан». Считают, что таблу изобрёл Суфий Святой Амир Кхусро, разделив старинный ударный инструмент Пакхавадж на две части. Табла состоит из двух барабанов: маленького – табла или даяна и большого – дага или баяна. На даге играют левой рукой. Она может быть сделана из глины, меди, серебра или никеля. Табла изготавливают из полого куска дерева.
Мембрана каждого барабана соединена с корпусом через кожаный обруч, проходящий по окружности корпуса; сквозь него пропущена система ремней, опоясывающих корпус каждого барабана сверху вниз. Между ремнями дайяна помщаются горизонтально 8 деревянных брусков (гитти); их смещение вверх и вниз (подбивание специальным молоточком) регулирует натяжение ремней и служит для точной настройки барабана. Байян не имеет подобной системы, корректирующей настройку и не обладает какой-нибудь выраженной звуковысотной определённостью, хотя в целом звучит ниже и «глубже» правого барабана. Каждая из мембран табла имеет сложное устройство и состоит из двух кусков (круглого сплошного и кольцеобразного с выемкой внутри) кожи, как правило, козлиной, накладываемых друг на друга таким образом, что по середине мембраны размещается своего рода закрытое отверстие. Оно расположено у табла в центре, а у дагга несколько смещено к краю; оба отверстия залеплены постоянно крепящейся лепешкой из смеси темного цвета, подобно той, которую накладывают на мембраны мриданга, пакхаваджа и других барабанов региона.
Это покрытие (сьяхи), в состав которого входят рисовая или пшеничная мука, металлические опилки и специальное склеивающее вещество, делает инструмент темброво, звуковысотно, динамически, технически гибким и выразительным – качества, отличающие в целом классические барабаны региона; но даже среди них табла выделяется особым разнообразием и совершенством эстетических и технических качеств.
Исследователи склонны проводить параллели между развитием инструмента и ростом его популярности и развитием тех жанров вокальной музыки (главным образом, кхьял и тхумри), в которых он выступает в качестве метроритмического инструмента. На табла играют сидя, поставив оба барабана перед собой и подложив под один из них, либо под оба, толстые матерчатые «бублики». Барабаны при игре нередко разворачивают с наклоном (табла от себя, дагга к себе), что обеспечивает более удобную позицию соприкосновения рук и мембран.
Техника и приёмы игры на этом инструменте значительно рознятся в зависимости от традиций локальной школы-гхараны. В настоящее время наибольшую известность имеют 5 гхаран: пенджабская, делийская, бенаресская, фарухабадская и аджрада. В ХIХ и начале ХХ вв. табла использовался в основном как инструмент в составе ансамбля, сопровождавшего пение и танцы (катхак) или игру солиста-инструменталиста. В таком ансамбле, характерном для традиции хиндустани, ему отводилась роль инструмента, презентирующего и развивающего линию метроритмического развёртывания, и в целом – выполняющего функцию метроритмической организации всего музыкального текста.
Существует легенда, рассказывающая о рождении табла. Во времена Акбара жили два профессиональных исполнителя на пакхавадж. Они были непримиримыми соперниками и постоянно соревновались друг с другом. Однажды в жаркой схватке барабанного состязания один из соперников – Судхар Хан потерпел поражение и, не в силах вынести его горечь, швырнул свой пакхавадж оземь. Барабан разбился на две части, превратившись в табла и дагга.`,
      kk: `Табла

араб тілінде «барабан» мағынасын білдіреді. Аспапты алғаш сопы Амир Хусроу көненің ұрмалы пакхавадж аспабын екіге бөліп жасаған деп саналады. Табла екі барабаннан тұрады: кішкентай – табла немесе даян және үлкен – дага немесе баян. Дагада сол қолмен ойнайды. Ол саздан, мыстан, күміс немесе никельден жасалады. Табла іші қуыс ағаштан жасалады. Әр барабанның мембранасы корпуспен тері шеңбер арқылы байланысқан; бұл шеңбер арқылы барабандарды жоғарыдан төмен қарай қоршайтын белдіктер өтеді. Даян (табла) белдіктері арасында көлденеңінен 8 ағаш кесегі (гитти) орналасады, олардың жоғары-төмен қозғалысы (арнайы балғашық арқылы) белдіктердік керілісін реттеп, барабанды күйге келтіру қызметін атқарады. Баянның (дага) мұндай реттеуші жүйесі және айқын дыбыс биіктігі жоқ, дегенмен де, оң жақ барабанмен салыстырғанда дыбысы төмен әрі «терең» болып келеді. Ешкі терісінен жасалған әр мембрананың құрылымы күрделі, олар мембрана ортасына жабық саңылау жасай отырып орналасады. Ол табланың ортасында, дагада шет жақта орналасады; екі саңылау да мриданга, пакхаваджа және аймақтағы басқа да барабандардың мембранасына салынатындай күңгірт түсті жабысқақ сазбен жапсырылған.
Құрамына күріш не бидай ұны, металл үгінділері мен арнайы желімдеуші зат кіретін бұл жабын аспапты тембрлік, дыбыс биіктігі, динамикалық, техникалық тұрғыда икемді әрі мәнерлі етеді. Бұл қасиеттер аймақтағы классикалық барабандарға тән, десе де, олардың арасында табла алуандығы мен эстетикалық және техникалық қасиеттерімен ерекшеленеді. 
Зерттеушілер аспаптың дамуы мен танымалдығы артуы және ол метроритмикалық аспап ретінде қатынасатын вокалды музыка жанрларының (негізінен, кхьял, тхумри) өркендеуі арасында салыстыру жұмыстарын жиі жүргізеді. Табланың қос барабанын алдыға қойып, астына матадан жасалған қалың негіз қойып, отырған күйде ойнайды. Әдетте, ойын барысында барабандарды көлбеу қалыпқа бұрып қояды (табланы өзінен ары қарай, даганы өзіне бағыттап), бұл қол мен мембрананың өзара жанасуын қолайлы жағдай жасайды.
Аспапта ойнау тәсілдері мен техникасы жергілікті гхарана мектебі дәстүріне байланысты әр түрлі болады. Бүгінде кең танымал бес гхараналар бар: пенджаб, дели, бенарес, фарухабад, аджрад. ХІХ-ХХ ғғ. басында табла негізінен ансамбль құрамында ән-биді немесе жеке орындаушыны      сүйемелдеген аспап ретінде қолданылды. Хиндустан дәстүріне сай келетін мұндай ансамбльде табла музыкалық мәтінді таныстырушы әрі метроритмикалық дамытушы, жалпылағанда – әуеннің толық метроритмикалық ұйымдастырушысы қызметінде болды.
Табланың қалыптасуы туралы бір аңызда Ұлы Моғол империясының императоры Акбар тұсында пакхаваджда ойнайтын екі кәсіби орындаушы өмір сүрген. Олар бітіспес қарсылас болып, әрдайым бір-бірімен жарысып жүрді. Кезекті қызу сайыста қарсыластардың бірі – Судхар Хан – жеңіліп, оған мойынсұна алмай, аспапты жерге гүрс етіп тастап жібереді. Барабан екіге бөлініп, табла мен дагаға айналды.`
    },
    images: ['/instruments/world/india/tabla/1.png', '/instruments/world/india/tabla/2.png'],
    audio: '/audio/world/india/tabla.mp3',
    country: 'india',
    countryName: countryNames.india,
    flag: countryFlags.india
  },
  {
    id: 'india_tanpura',
    name: { en: `Tanpura, also tampura, tambura`, ru: `Танпура, также тампура, тамбура`, kk: `Танпура (тампура, тамбура)` },
    description: {
      en: `Tanpura, also tampura, tambura

an Indian stringed musical instrument, used to create the background accompaniment (bourdon) in the performance of a raga. It is similar to a sitar in design and sound, but has no frets (strings sound only in the open state).
A tambour usually has 4 strings (although there are options with 5, 6 or more strings).
Traditional tambours are instrumental, male and female (vary in size, pitch and volume). At present, an electronic vestibule is also common, having settings for accompanying various ragas in different keys.
Famous Tanpur musician Balasaheb Mirajkar.`,
      ru: `Танпура, также тампура, тамбура

индийский струнный щипковый музыкальный инструмент, используется для создания фонового аккомпанемента (бурдона) при исполнении раги. По конструкции и звучанию похожа на ситар, но не имеет ладов (струны звучат только в открытом состоянии).
Тамбура обычно имеет 4 струны (хотя есть варианты с 5, 6 и более струнами).
Традиционные тамбуры бывают инструментальные, мужские и женские (различаются по размерам, высоте и громкости звучания). В настоящее время также распространена электронная тамбура, имеющая настройки для аккомпанирования различным рагам в разных тональностях.
Известный музыкант на танпуре Баласахеб Мираджкар.`,
      kk: `Танпура (тампура, тамбура)

үндінің ішекті-шерпелі музыкалық аспабы, рага орындағанда сүйемелдеуге қолданылады. Құрылысы және дыбысталуы  ситарға ұқсас, алайда оның пернелері болмайды.
Бұл аспап 4 ішекті болып келеді, кейде 5,6 ішекті нұсқалары кездеседі.
Танпураның бірнеше түрі бар: аспаптық, ерлерге және әйелдерге арналған (өлшемдері, дыбыс биіктігі бойынша жіктеледі) деп бөлінеді. Қазіргі таңда электронды танпуралар да кездеседі. Олар түрлі үндестіктегі әр алуан рагаларды сүйемелдеу үшін қажет күйге келтіріледі.  
Ең атақты танпура ойнау шебері Баласахеб Мираджкар болып табылады.`
    },
    images: ['/instruments/world/india/tanpura/1.png'],
    audio: '/audio/world/india/tanpura.mp3',
    country: 'india',
    countryName: countryNames.india,
    flag: countryFlags.india
  },
  {
    id: 'india_veena',
    name: { en: `VEENA`, ru: `ВИНА`, kk: `ВИНА` },
    description: {
      en: `VEENA

Veena – an ancient Indian plucked (plectoral) musical instrument used in the performance of Indian classical music. It is considered difficult to learn and requires years of practice.
The instrument has the appearance of a lute, and its shape varies depending on the specific configuration. The most common types of veena are:
	•	Rudra-veena (used in Hindustani music): a bulky instrument with two large resonators (stands) made of a special kind of pumpkin and connected by a vulture with frets attached to it.
	•	Sarasvati-veena (used in Karnataka music): has a resonator body and an additional pumpkin resonator attached to the vulture.
	•	Vichitra veena (in the music of Hindustani) or chitra veena (in the music of Karnataka): a fretless veena with two tables.
The most common model is 24 frets, 4 main strings passing through the stand and 3 additional strings that do not pass through the stand and are used for rhythmic accompaniment.
The Indian goddess Saraswati, considered the patroness of the arts, is often portrayed with veena in her hand.`,
      ru: `ВИНА

Вина – старинный индийский щипковый (плекторный) музыкальный инструмент, используемый при исполнении индийской классической музыки. Считается трудным для изучения инструментом и требует многолетней практики.
Инструмент имеет вид лютни, и его форма варьируется в зависимости от конкретной конфигурации. Наиболее распространены следующие разновидности вины:
	•	Рудра-вина (используется в музыке Хиндустани): громоздкий инструмент с двумя большими резонаторами (тумбы), выполненными из особой разновидности тыквы и соединёнными грифом с прикреплёнными к нему ладами.
	•	Сарасвати-вина (используется в музыке Карнатаки): имеет корпус-резонатор и дополнительный резонатор из тыквы, прикреплённый к грифу.
	•	Вичитра-вина (в музыке Хиндустани) или читра-вина (в музыке Карнатаки): безладовая вина с двумя тумбами.
В наиболее распространённой модели 24 лада, 4 главных струны, проходящих через кобылку и 3 дополнительных, которые через кобылку не проходят и используются для ритмического аккомпанемента.
Индийскую богиню Сарасвати, считающуюся покровительницей искусств, часто изображают с виной в руке.`,
      kk: `ВИНА

Вина – Үндістаннның ежелгі шертпелі музыкалық аспабы. Бұл аспап үндінің классикалық музыкасын ойнау барысында қолданылады. Винаны үйрену көп еңбек пен біраз тәжірибені талап етеді. 
Бұл аспап лютняға ұқсас болып келеді және оның бірнеше түрі бар: 
	•	Рудра-вина – Хиндустани аймағында кең пайдаланылады. Асқабақтың ерекше түрінен жасалған екі үлкен резонаторы бар және пернелі мойынға бекітілген көлемді аспап; 
	•	Сарасвати-вина – Карнатаки аймағында пайдаланылады. Резонатор шанақтан және мойынға бекітілген асқабақтан жасалған қосымша резонатордан құралған;
	•	Вичитра-вина (Хиндустани) және читра-вина (Карнатаки) – пернесіз екі дыбыс шанағынан құралады. 
Винаның кең тараған түрінде 24 перне, тиектен өтетін 4 негізгі ішектері және тиектен өтпей, ырғақты сүйемелдейтін 3 қосымша ішектерден тұрады. 
Үндістанда өнердің пірі болып саналатын үнді әйел құдайы Сарасватиді вина аспабымен бейнелейді.`
    },
    images: ['/instruments/world/india/veena/1.png'],
    audio: '/audio/world/india/veena.mp3',
    country: 'india',
    countryName: countryNames.india,
    flag: countryFlags.india
  },
  {
    id: 'indonesia_angklung',
    name: { en: `Angklung`, ru: `Ангклунг`, kk: `Ангклунг` },
    description: {
      en: `Angklung is a musical instrument from Indonesia made from a different number of bamboo tubes attached to a bamboo frame. The tubes have a sharp (resonant) height upon impact and are tuned to octaves similar to western bells. The base of the frame is held with one hand and the other shakes the instrument, causing the sound of a repeating note. Each of three or more performers in the ensemble angklung plays only one note or more, but in general full melodies are created. Angklung is popular all over the world, but it originated in the current provinces of West Java and Banten in Indonesia, and the Sundans have played for many centuries. Angklung and its music became the cultural identity of the Sundan communities in West Java and Banten. Playing angklung as an orchestra requires collaboration and coordination, and is believed to promote the values ​​of teamwork, mutual respect and social harmony.
On November 18, 2010, UNESCO officially recognized the Indonesian angklung as a masterpiece of the oral and intangible heritage of mankind and called on the Indonesian people and the Government of Indonesia to protect, transmit, promote performances and promote anglung excellence.
The word “angklung” may have come from the Sundanian “angkleung-angkleungan”, suggesting the movement of an angklung player and the sound “klung” emanating from the instrument.
Another theory suggests that the word “angklung” was formed from two Balinese words – angka and easy. Angka means tone, and lung means broken or lost. Angklung, therefore, means “incomplete tone”.`,
      ru: `Ангклунг

это музыкальный инструмент из Индонезии, изготовленный из различного количества бамбуковых трубок, прикрепленных к бамбуковой раме. Трубки имеют резкую (резонансную) высоту при ударе и настроены на октавы, похожие на западные колокольчики. Основание рамки удерживается одной рукой, а другая встряхивает инструмент, вызывая звучание повторяющейся ноты. Каждый из трех или более исполнителей в ансамбле ангклунг играет только одну ноту или более, но в целом создаются полные мелодии. Ангклунг популярен во всем мире, но он возник в нынешних провинциях Западная Ява и Бантен в Индонезии, и играли сунданцы на протяжении многих веков. Ангклунг и его музыка стали культурной самобытностью сунданских общин в Западной Яве и Бантене. Игра в ангклунг как оркестр требует сотрудничества и координации, и, как полагают, продвигает ценности командной работы, взаимного уважения и социальной гармонии.
18 ноября 2010 г. ЮНЕСКО официально признала индонезийский ангклунг как шедевр устного и нематериального наследия человечества и призвала индонезийский народ и правительство Индонезии охранять, передавать, пропагандировать представления и поощрять мастерство ангклунг.
Слово «angklung», возможно, произошло от сунданского «angkleung-angkleungan», предполагая движение игрока ангклунг и звук «klung», исходящий от инструмента. 
Другая теория предполагает, что слово «angklung» образовалось из двух балийских слов - angkа и лёгкий. «Angkа» означает «тон», а «lung» означает «сломанный» или «потерянный». Angklung, таким образом, означает «неполный тон».`,
      kk: `Ангклунг

Индонезия елінің аспабы, бірнеше бамбук түтіктерден жасалып, бамбук жақтауға бекітіледі. Әр түтік соғылғанда резонансты биіктікке ие және батыс қоңырауларына ұқсас октава күйіне келтірілген. Жақтаудың негіздемесі бір қолмен ұсталып, екінші қолмен сілкіп ойнау арқылы қайталанатын ноталар орындалады. Ангклунг ансамбліндегі үш не одан көп орындаушы бір немесе бірнеше нота орындайды, дегенмен нәтижесінде толыққанды әуен туындайды. Ангклунг дүние жүзіне танымал, бірақ ол Индонезияның Батыс Ява және Бантен провинцияларында қалыптасып, сундан халқы бірнеше ғасырлар бойы аспапта ойнаған. Ангклунг және оның музыкасы Батыс Ява мен Бантен провинцияларындағы сундан қауымының мәдени ерекшелігіне айналды. Оркестр ретінде аспапта ойнау серіктестік пен келісімділікті талап етеді, сондықтан, топтық жұмыстың құндылығын, өзара сыйластық пен әлеуметтік үйлесімділікті насихаттайды.
2010 ж. 18 қарашада ЮНЕСКО индонезиялықтардың ангклунг аспабын адамзаттың материалдық емес мәдени мұрасы ретінде танып, Индонезия халқы мен ел үкіметін ангклунг шеберлігін сақтау, жас ұрпаққа жеткізу және үгіттеуге шақырды. 
«Аngklung» сөзі сундан тіліндегі «angkleung-angkleungan» сөзінен орындаушының қимылы негізінде және «klung» дыбысынан туындаған болуы мүмкін. 
Басқа бір теория бойынша, «angklung» сөзі Балидің angkа және жеңіл деген екі сөзінен қалыптасқан. «Angkа» – «үн», ал «lung» сөзі «сынған» немесе «жоғалған» мағынасын білдіреді. Осылайша, «аngklung» сөзі «толық емес үн» мағынасын білдіреді.`
    },
    images: ['/instruments/world/indonesia/angklung/1.png'],
    audio: '/audio/world/indonesia/angklung.mp3',
    country: 'indonesia',
    countryName: countryNames.indonesia,
    flag: countryFlags.indonesia
  },
  {
    id: 'indonesia_gamelan',
    name: { en: `Gamelan`, ru: `Гамелан (от яванского «стучать, ударять»)`, kk: `Гамелан (ява тілінде «соғу»)` },
    description: {
      en: `Gamelan (from Javanese “knock, hit”) is a traditional Indonesian orchestra and a kind of instrumental music playing. Appearing on the island of Java, subsequently spread to Bali, Sumatra and other islands of the Malay archipelagos.
The basis of the instrumentation is percussion musical instruments: xylophone gambang, gender phonographs, saron, slentem; bonongs, drums gendangs, various hanging gongs, etc. Moreover, the percussion instruments, primarily gambang and gender play the main musical theme. The composition of the gamelan also includes plucked strings – kechapi and celempung, bow rebab, longitudinal flute souling, various noise instruments, sometimes a male and/or female voice. The total number of instrument ranges from 10 to 25.
The classical scales of Indonesian music are used – a 5-step slendro and a 7-step pelog, in which microchromatic is used; the order of the entire orchestra is determined by the order of plate instruments. When performing the chosen theme, the orchestra is guided by one of the melodious formulas of pathet.
The sound of the gamelan, which at the first acquaintance may seem wild and chaotic to the Europeans, is characterized by great flexibility of dynamics and expressiveness, which is facilitated by a skillful combination of timbre colors. Improvisation plays a big role. Learning parties is mainly done by ear. Each musician, while performing the theme, seeks to reveal the nature of his instrument and to demonstrate its expressive capabilities as fully as possible. The gamelan’s repertoire is based on an improvisational performance of classical themes and folk melodies.
The gamelan is used in dramatic, ballet, song and dance performances, ceremonies, processions and festivals. It is closely connected with the folk puppet theater. The traditional Indonesian gamelan, as a rule, is a community of musicians living in the same village and jointly owning orchestral instruments. In the 20th century, academic gamelan not related to the village tradition appeared, including outside of Indonesia.
The polyphonic, “unearthly” sound of the orchestra has long impressed Europeans, including Sir Francis Drake, who visited Java in 1580. Since the beginning of the 20th century, the gamelan has attracted the attention of European and American researchers. Interest in him in the West was largely stimulated by composers who creatively borrowed his musical system. They are C. Debussy, J. Cage, E. Varez, A. Zholive.
Russian poet K.D. Balmont (1867-1942), who visited Celebes (Sulawesi) in Java and Sumatra in 1912, expressed his impressions of this orchestra in the poem “Gamelan”.`,
      ru: `Гамелан (от яванского «стучать, ударять»)

традиционный индонезийский оркестр и вид инструментального музицирования. Появившись на острове Ява, впоследствии распространился на Бали, Суматре и других островах Малайского архипеллага.
Основу инструментария составляют ударные музыкальные инструменты: ксилофон гамбанг, металлофоны гендер, сарон, слентем; лежачие гонги бонанг, барабаны генданг, различные подвесные гонги и др. Более того, именно ударные инструменты, прежде всего гамбанг и гендер, исполняют основную музыкальную тему. В состав гамелана включаются также струнные щипковые – кечапи и целемпунг, смычковый ребаб, продольная флейта сулинг, разнообразные шумовые инструменты, иногда мужской и/ или женский голос. Общее число инструментов колеблется от 10 до 25.
Употребляются классические звукоряды индонезийской музыки – 5-ступенный слендро и 7-ступенный пелог, в которых находит применение микрохроматика; при этом строй всего оркестра определяется строем пластиночных инструментов. При исполнении выбранной темы оркестр руководствуется одной из мелодичных формул патет.
Звучание гамелана, которое при первом знакомстве может показаться европейцу диким и хаотическим, отличается большой гибкостью динамики и выразительностью, чему способствует искусное сочетание тембровых красок. Большую роль играет импровизация. Разучивание партий производится главным образом на слух. Каждый музыкант при исполнении темы стремится выявить характер своего инструмента, как можно полнее продемонстрировать его выразительные возможности. В основе репертуара гамелана – импровизационное исполнение классических тем и народных мелодий.
Гамелан используется в драматических, балетных, песенно-танцевальных представлениях, торжественных церемониях, шествиях и праздниках. Тесно связан с народным кукольным театром. Традиционный индонезийский гамелан, как правило, представляет собой общину музыкантов, проживающих в одной деревне и совместно владеющих оркестровыми инструментами. В ХХ веке появились не связанные с деревенской традицией академические гамеланы, в том числе и за пределами Индонезии.
Полифонический, «неземной» звук оркестра с давних пор поражал европейцев, включая сэра Фрэнсиса Дрейка, посетившего Яву в 1580. С начала ХХ века гамелан привлёк внимание европейских и американских исследователей. Интерес к нему на Западе во многом стимулировали композиторы, творчески заимствовавшие его музыкальный строй. К ним относятся К. Дебюсси, Дж. Кейдж, Э. Варез, А. Жоливе.
Русский поэт К.Д. Бальмонт (1867-1942), посетивший в 1912 во время кругосветного путешествия Целебес (Сулавеси), Яву и Суматру, выразил свои впечатления от этого оркестра в стихотворении «Гамеланг».`,
      kk: `Гамелан (ява тілінде «соғу»)

индонезиялық дәстүрлі оркестр және аспаптық музыка орындау түрі. Ява аралында қалыптасып, Балиде, Суматрада және Малай архипеллагының басқа да аралдарына таралды.
Аспаптардың негізін ұрмалы музыкалық аспаптар құрайды: гамбанг ксилофоны; гендер, сарон, слентем металлофондары; бонанг гонгтар; генданг барабаны; түрлі ілінетін гонгтар және т.б. Дәл осы ұрмалы аспаптар, соның ішінде гамбанг пен гендер, негізгі музыкалық тақырыпты орындайды. Гамелан құрамына ішекті-шертпелі – кечапи және целемпунг, ыспалы ребаб, сулинг флейтасы, түрлі шулы аспаптар, кейде ерлер және/немесе әйелдер даусы енеді. Аспаптардың жалпы саны 10-25 аралығында болады. 
Индонезия музыкасының классикалық дыбыс қатары – микрохроматика пайдаланылатын 5-сатылы слендро мен 7-сатылы пелог қолданылады; бұл ретте бүкіл оркестр құрылымы пластиналы аспаптар құрылымымен анықталады. Таңдалған тақырыпты орындағанда оркестр патет әуенді формулаларының бірімен жетекшілік етеді.
 Алғаш тыңдағанда аспап дыбысы еуропалықтар үшін жабайы және ретсіз болып естілуі мүмкін, бірақ аспапты тембр қанықтығының шебер үйлесімі ықпал ететін айқындылық пен динамиканың икемділігі ерекшелейді. Импровизация маңызды орын алады. Аспапта шығарма орындауды үйрену негізінен есту қабілеті арқылы жүргізіледі. Музыка орындау кезінде әрбір музыкант аспаптың мүмкіндіктерін толыққанды ашуға тырысады. Гамелан репертуарының негізі – классикалық тақырыптар мен халық әуендерін суырып салу жолымен орындау. 
Гамелан драмалық, балет, ән-би қойылымдарында, салтанатты жиындарда, шерулер мен мерекелерде қолданылады. Халық қуыршақ театрымен тығыз байланысты. Дәстүрлі индонезия гамеланы – бір ауылда тұрып, оркестр аспаптарына иелік ететін музыканттар қауымы. ХХ ғ. ауыл дәстүріне қатысы жоқ және Индонезиядан тысқары жерлерде академиялық гамеландар қалыптасты. 
Оркестрдің полифониялық, ғажайып үні еуропалықтарды бұрыннан таңғалдыратын, әсіресе, 1580 ж. Ява аралында болған сэр Фрэнсис Дрейк ерекше әсерде болды. ХХ ғ. бастап гамелан еуропалық және американдық зерттеушілердің назарына ілікті. Батыста аспапқа қызығушылықтың артуына шығармашылық бағытта аспаптың музыкалық құрылымын пайдаланған композиторлар ықпал жасады. Олардың қатарында К. Дебюсси, Дж. Кейдж, Э. Варез, А. Жоливе болды.
1912 ж. дүниежүзілік саяхат кезінде Целебес (Сулавеси), Ява мен Суматрада болған орыс ақыны К.Д. Бальмонт (1867-1942) оркестрден алған әсерін «Гамаленг» өлеңінде жеткізген.`
    },
    images: ['/instruments/world/indonesia/gamelan/1.png'],
    audio: '/audio/world/indonesia/gamelan.mp3',
    country: 'indonesia',
    countryName: countryNames.indonesia,
    flag: countryFlags.indonesia
  },
  {
    id: 'indonesia_gendang',
    name: { en: `Gendang, kendang`, ru: `Генданг, кенданг – индонезийский ударный инструмент. Барабан с цилиндрическим или коническим корпусом и 1 или 2 мембранами, которые натягиваются при помощи деревянного обруча и шнуров и настраиваются специальными колышками. Звук извлекают ударом руки. Существуют различные способы удара в зависимости от того, ударяют ли пальцами или кистью руки, а также от места удара.`, kk: `Генданг (кенданг)` },
    description: {
      en: `Gendang, kendang

Indonesian percussion instrument. A drum with a cylindrical or conical body and 1 or 2 membranes that are pulled with a wooden hoop and cords and tuned with special pegs. The sound is extracted by the blow of a hand. There are various methods of striking, depending on whether they are struck with fingers or a hand, as well as the place of striking.
4 different tones of gendang are called tong, pak, dung, deng. Sometimes they use 2 gendangs together – one large (pangkulon), “male”, and the second, weaker in sound and smaller (panning), “female”. In the orchestra, the gamelan gendang beats the rhythm and gives the most important dynamic accents. The gendang performer is actually the leader of the orchestra, determining the main tempo of performance and all deviations from it, as well as dynamic ups and downs.`,
      ru: `Генданг, кенданг – индонезийский ударный инструмент. Барабан с цилиндрическим или коническим корпусом и 1 или 2 мембранами, которые натягиваются при помощи деревянного обруча и шнуров и настраиваются специальными колышками. Звук извлекают ударом руки. Существуют различные способы удара в зависимости от того, ударяют ли пальцами или кистью руки, а также от места удара.

4 различных тона генданга называют тонг, пак, дунг, денг. Иногда употребляют 2 генданга вместе – один больших размеров (пангкулон), «мужской», и второй, более слабый по звучанию и меньших размеров (панингка), «женский». В оркестре гамелан генданг отбивает ритм и даёт важнейшие динамические акценты. Исполнитель на генданге является фактически руководителем оркестра, определяя основной темп исполнения и все отклонения от него, а также динамические нарастания и спады.`,
      kk: `Генданг (кенданг)

индонезия халқының ұрмалы музыкалық аспабы. Цилиндр немесе конус пішіндес корпусы және ағаш жақтау мен баулар арқылы тартылып, арнайы қазықшалармен күйге келтірілетін 1 не 2 мембраналы барабан. Қолмен соғу арқылы дыбыс алынады. Саусақпен немесе білекпен және соғу орнына қарай аспапта ойнаудың бірнеше түрі болады.
Гендангтың 4 түрлі үнін тонг, пак, дунг, денг деп атайды. Кейде 2 генданг аспабын бірге қолданады – бірі көлемі үлкен (пангкулон) «ерлердікі»,  екіншісі дыбысы бәсеңдеу және көлемі кіші (панингка) «әйелдердікі». Гамелан оркестрінде генданг ырғақ беріп, маңызды динамикалық серпін береді. Гендангта орындаушы оркестр жетекшісі болып саналады, ол музыка орындаудағы негізгі ырғақты беріп, ауытқышылықтарға, динамикалық даму мен құлдырауды анықтайды.`
    },
    images: ['/instruments/world/indonesia/gendang/1.png'],
    audio: '/audio/world/indonesia/gendang.mp3',
    country: 'indonesia',
    countryName: countryNames.indonesia,
    flag: countryFlags.indonesia
  },
  {
    id: 'indonesia_rebab',
    name: { en: `REBAB`, ru: `РЕБАБ`, kk: `РЕБАБ` },
    description: {
      en: `REBAB

Rebab is a stringed bowed musical instrument of Arab origin. The word “rebab” in Arabic means “combining short sounds into one long one”.
The body of the rebab is wooden flat or convex, trapezoidal or heart-shaped, with small notches on the sides. Shells are made of wood or coconut, leather decks (from the buffalo guts or the bladder of other animals). The neck is long, round, spiky; at the top it has 1 or 2 long transverse pegs, at the bottom it passes through the body and acts as a faceted metal leg. Strings – 1 or 2; originally made from horsehair, later metal (copper or brass).
Sounds are extracted with a bow-shaped bow. It was also used as a plucked instrument.
Varieties of rebab under different names are found among the peoples of Indonesia, India, the Malay archipelago, Egypt, northwest Africa, and also Central Asia.`,
      ru: `РЕБАБ

Ребаб — струнный смычковый музыкальный инструмент арабского происхождения. Слово «ребаб» в переводе с арабского означает «соединение коротких звуков в один длинный».
Корпус ребаба деревянный плоский или выпуклый, трапециевидный или сердцевидный, с небольшими выемками по бокам. Обечайки делаются из дерева или кокосовго ореха, деки кожаные (из кишок буйвола или пузыря других животных). Шейка длинная, круглая, остроконечная; вверху имеет 1 или 2 длинных поперечных колка, внизу проходит через корпус и выступает в виде металлической гранёной ножки. Струны – 1 или 2; первоначально изготавливались из конского волоса, позднее – металлические (медные или латунные).
Звуки извлекаются при помощи лукообразного смычка. Использовался также как щипковый инструмент.
Разновидности ребаба под разными названиями встречаются у народов Индонезии, Индии, Малайского архипелага, Египта, северо-западной Африки, а также Средней Азии.`,
      kk: `РЕБАБ

Ребаб – шығу тегі арабтық ішекті-ыспалы музыкалық аспап. «Ребаб» сөзі араб тілінде «қысқа дыбыстардың ұзақ бір дыбысқа бірігуі» дегенді білдіреді. 
Аспаптың ағаш корпусы  тегіс не сәл дөңестеу келген, трапеция немесе жүрек пішіндес, бүйірлерінде шағын ойықтар жасалады. Ернеушесі ағаштан не кокос жаңғағынан жасалып, декасы теріден (буйвол ішегінен не басқа жануардың қабынан) тартылады. Ұзын мойны дөңгеленіп, шеті үшкірленеді; жоғары жағында 1 не 2 ұзын құлақтар орналасып, корпустың төменгі тұсында металлдан жасалған қырлы аяғы болады. Ішектер саны – 1-2; бастапқыда жылқы қылынан, кейіннен металлдан (мыс немесе жез) жасалады.
Дыбыс садақ пішіндес ысқыш көмегімен алынады. Сондай-ақ, ребаб шертпелі аспап ретінде де қолданылған.
Ребабтың түрлері алуан атаулармен Индонезияда, Үндістан, Малай архипелагы, Мысыр мен солтүстік-батыс Африка, және де Орта Азия халықтарында кездеседі.`
    },
    images: ['/instruments/world/indonesia/rebab/1.png'],
    audio: '/audio/world/indonesia/rebab.mp3',
    country: 'indonesia',
    countryName: countryNames.indonesia,
    flag: countryFlags.indonesia
  },
  {
    id: 'indonesia_sasando',
    name: { en: `Sasando`, ru: `Сасандо`, kk: `Сасандо` },
    description: {
      en: `Sasando, also called sasandu, is a harp-like trumpet zither, a traditional musical string instrument, originally from Rote Island in the eastern part of Nusa Tengara, Indonesia. The name sasando comes from the dialectic word Rote “sasandu”, which means “vibrating” or “sounding instrument”. It is believed that sasando has been known to the people of Rota since the 7th century.
The main part of the sasando is a bamboo tube, which serves as an instrument’s  frame. Around the trumpet there are several wooden parts serving as wedges, where the strings are pulled from top to bottom. The function of the wedges is to hold the strings above the surface of the tube, and also to create strings of different lengths to create various musical notations. The string bamboo tube is surrounded by a bag-shaped fan of dried leaves of a lontar or palmyra (Borassus flabellifer), which functions as an instrument resonator. Sasando is played with both hands, penetrating the bites of a bamboo tube through a hole in the front. Then the player’s fingers tear off the strings in the same way as when playing the harp or kakapi.
A sasando can have 28 (sasando engkel) or 56 strings (double strings).
According to local tradition, the origin of sasando is associated with the folk tale of the Rote people about Sangguan. The story goes that there was a boy named Sanguana who lived on the island of Rote. Once, when he was leaning towards the savannah, he felt tired and fell asleep under a palm tree. Sanguana dreamed that he plays beautiful music on a unique instrument what’s sound and melody are so adorable. When he unexpectedly woke up, Sanguana still remembered the sounds he played in his dream. Wanting to hear it again, he again tried to fall asleep. He again dreamed of the same song and the same instrument. Sanguana enjoyed his dream, but in the end he had to wake up. Not wanting to lose the beautiful sounds from his sleep, Sanguana tried to recreate the sounds and quickly created a musical instrument from the leaves of the palmyra with the strings in the middle, based on his memory from the dream, which became the basis of the sasando.`,
      ru: `Сасандо, также называемый сасанду, представляет собой трубную цитру, похожий на арфу, традиционный музыкальный струнный инструмент, родом с острова Роте в восточной части провинции Нуса-Тенгара, Индонезия. Название сасандо происходит от диалектного слова Роте «сасанду», что означает «вибрирующий» или «звучащий инструмент». Считается, что сасандо был известен людям Роте с 7-го века.
Основная часть сасандо представляет собой бамбуковую трубку, которая служит рамой инструмента. Вокруг трубы есть несколько деревянных частей, служащих клиньями, где струны натянуты сверху вниз. Функция клиньев заключается в том, чтобы удерживать струны выше поверхности трубки, а также создавать струны различной длины для создания различных музыкальных обозначений. Струнная бамбуковая трубка окружена мешкообразным веером из высушенных листьев лонтара или пальмиры (Borassus flabellifer), который функционирует как резонатор инструмента. В сасандо играют обеими руками, проникая в укусы бамбуковой трубки через отверстие спереди. Затем пальцы игрока срывают струны таким же образом, как при игре на арфе или какапи. 
Сасандо может иметь 28 (sasando engkel) или 56 струн (двойные струны).
Согласно местной традиции, происхождение сасандо связано с народной сказкой народа Роте о Санггуане. История гласит, что когда-то был мальчик по имени Сангуана, который жил на острове Роте. Однажды, когда он склонялся к саванне, он почувствовал усталость и уснул под пальмировым деревом. Сангуане приснилось, что он играет прекрасную музыку на уникальном инструменте, звучание и мелодия которого так очаровательны. Когда он неожиданно проснулся, Сангуана все еще помнил звуки, которые он играл во сне. Желая услышать это еще раз, он снова попытался заснуть. Он снова мечтал (ему приснилось ) о той же песне и о том же инструменте. Сангуана наслаждался своей мечтой, но в конце концов ему пришлось проснуться. Не желая терять красивые звуки из своего сна, Сангуана попытался воссоздать звуки и быстро создал музыкальный инструмент из листьев пальмиры со струнами в середине, основываясь на своей памяти из сна, которая стала основой сасандо.`,
      kk: `Сасандо

Сасанду деп те аталатын Сасандо аспабы арфаға ұқсас түтікті цитра болып келеді, Индонезияның Нуса-Тенгара провинциясының шығысындағы Роте аралында қалыптасқан дәстүрлі ішекті музыкалық аспап. Сасандо атауы Роте аралының «сасанду» диалект сөзінен қалыптасқан, «тербелетін» немесе «дыбысты аспап» мағынасын білдіреді. Сасандо Роте тұрғындарына VІІ ғ. бастап белгілі болған деседі. 
Сасандоның басым бөлігі аспаптың жақтауы қызметін атқаратын бамбук түтік түрінде беріледі. Түтіктің айналасында бірнеше ағаш бөлшектер болады, олар сына қызметін атқарып, оған ішектер жоғарыдан төмен қарай тартылады. Сынаның қызметі – ішектерді түтік бетінен жоғары ұстап тұру, сондай-ақ, түрлі музыкалық шартты белгілер жасау үшін түрлі ұзындықтағы ішектер қалыптастыру. Ішек тағылған бамбук түтікті лонтараның немесе пальмираның кепкен жапырақтарынан жасалған қап тәрізді желпуіш қоршайды және ол аспап резонаторы қызметін атқарады. Аспапта екі қолмен, бамбук түтіктің «аузына» алдыңғы жағындағы ойық арқылы енеді. Кейін орындаушының саусақтары ішектерді арфада немесе какапиде ойнағандай шертеді. 
Сасандо аспабында 28 немесе 56 ішектер (қосарлы ішектер) болуы мүмкін.
Жергілікті дәстүр бойынша, аспаптың қалыптасуы Роте халқындағы Санггуан туралы ертегіге байланысты. Аңызға сәйкес, ертеде Роте аралында Санггуан есімді бір бала өмір сүрген екен. Бір күні ол саваннада келе жатқанда жолдан шаршап, пальмира ағашының түбінде ұйықтап қалады. Оған дыбысы мен әуені өте әдемі музыканы бірегей аспапта ойнап жатқаны туралы түс көреді. Оянғанда түсінде ойнаған әдемі әуені есінде сақталған екен. Әлгі музыка қайта естігісі келіп, қайта ұйықтауға тырысты. Түс көріп ләззаттанған балаға бәрібір де оянуға тура келді. Түсіндегі әсем әуенді жоғалқысы келмеген бала сасандоға негіз болған түсіне сүйеніп,  дыбыстарды қайта жаңғыртып, тез арада пальмира жапырақтарынан ортасында ішектері бекітілген музыкалық аспап жасады.`
    },
    images: ['/instruments/world/indonesia/sasando/1.png'],
    audio: '/audio/world/indonesia/sasando.mp3',
    country: 'indonesia',
    countryName: countryNames.indonesia,
    flag: countryFlags.indonesia
  },
  {
    id: 'italy_launeddas',
    name: { en: `Launeddas`, ru: `Лаунеддас относится к семейству кларнетов. Кларнет (итал. clarinetto, фр. clarinette, нем. Klarinette, англ. clarinet или clarionet)`, kk: `Лаунеддас` },
    description: {
      en: `Launeddas belongs to the clarinet family. Clarinet is a wooden wind musical instrument with a single cane. It was invented around 1700 in Nuremberg, has been actively used in music since the second half of the 18th century. It is used in a wide variety of musical genres and compositions: as a solo instrument, in chamber ensembles, symphony and wind orchestras, and folk music, on stage and in jazz. Clarinet has a wide range, warm, soft timbre and provides the performer with wide expressive possibilities.
Launeddas is a folk instrument distributed on the island of Sardinia. Sardinia – an island in the Mediterranean Sea, located west of the Apennine peninsula between Sicily and Corsica, is the second largest island in the Mediterranean Sea. It is part of Italy as an autonomous region.
The name of the instrument arose from two words: “lau” – laurels and “cannas” – cane. Launeddas consists of three tubes. The smallest handset is needed to play the highest notes. A medium-sized tube is melodic and plays notes of medium height. The largest tube is called the bourdon. It provides a constant monotonous sound. The bourdon and middle tubes are connected by a cord. The small and medium handset has openings for playing. In the upper part, all three tubes are connected by a separate cord. The large bourdon tube has a separate cane. All tubes are made of reed.
In Sardinia, where launeddas is made from reed, reed fields are zealously guarded. Reeds that have reached the required condition can be harvested only in January or February, and only in the full moon. This is not as strange as it might seem at first glance: the lunar cycle affects all water, and, of course, affects the reed sap flow.
The performer holds three canes in his mouth at once, constantly blowing air. To do this, inhale through the nose and exhale through the mouth, then eat circular breathing. As a result, sounds full of energy are extracted. Moreover, this energy is immediately transmitted to the audience. The tonal range of launeddas is quite extensive – five notes per tube. This allows performing various improvisations on this instrument.
Launeddas refers to aerophones. This means that the instrument produces sounds by vibrating an air column. The musician blows into the tubes, the air inside them comes into oscillatory motion, as a result of which sound is born. An interesting fact of the instrument is that it is popular only on the island of Sardinia.`,
      ru: `Лаунеддас относится к семейству кларнетов. Кларнет (итал. clarinetto, фр. clarinette, нем. Klarinette, англ. clarinet или clarionet)

деревянный духовой музыкальный инструмент с одинарной тростью. Был изобретён около 1700 года в Нюрнберге, в музыке активно используется со второй половины восемнадцатого века. Применяется в самых разнообразных музыкальных жанрах и составах: в качестве сольного инструмента, в камерных ансамблях, симфоническом и духовом оркестрах, народной музыке, на эстраде и в джазе. Кларнет обладает широким диапазоном, тёплым, мягким тембром и предоставляет исполнителю широкие выразительные возможности.
Лаунеддас – это народный инструмент , распространенный на острове Сардиния.Сардиния — остров в Средиземном море, расположенный к западу от Аппенинского полуострова между Сицилией и Корсикой, является вторым по величине островом Средиземного моря. Входит в состав Италии в качестве автономного региона. 
Название инструмента возникло из двух слов: «лау» - лавры и «каннас» - трость. Лаунеддас состоит из трех трубок. Самая маленькая трубка нужна для воспроизведения самых высоких нот. Трубка среднего размера является мелодической и служит для воспроизведения нот средней высоты. Самая большая трубка называется бурдонной. Она обеспечивает постоянный монотонный звук. Бурдонная и средняя трубка связаны шнуром. На маленькой и средней трубке находятся отверстия для игры. В верхней части все три трубки связаны отдельным шнуром. Большая бурдонная трубка имеет отдельную трость. Все трубки изготавливаются из тростника.
На Сардинии, где из тростника делают Лаунеддас, поля тростника ревностно охраняют. Дошедший до нужной кондиции тростник можно собирать только в январе или феврале, и только в полнолуние. Это не так странно, как может показаться на первый взгляд: лунный цикл оказывает воздействие на всю воду, и, разумеется, сказывается на сокодвижении тростника.
Исполнитель держит во рту сразу три трости, постоянно вдувая воздух. Для этого следует вдыхать через нос, а выдыхать через рот, то ест применять циркулярное дыхание. В результате извлекаются полные энергии звуки. Причем эта энергия сразу же передается слушателям. Тональный диапазон лаунеддас довольно обширный – по пять нот на каждую трубку. Это позволяет исполнять на этом инструменте различного рода импровизации.
Лаунеддас относится к аэрофонам. Это означает, что инструмент производит звуки при помощи вибрации воздушного столба. Музыкант дует в трубки, воздух внутри них приходит в колебательное движение, в результате чего рождается звук. Интересным фактом инструмента является о, что он является популярным только на острове Сардиния.`,
      kk: `Лаунеддас

кларнет типтес, ағаштан жасалған үрмелі музыкалық аспап. 1700 ж. Нюрнбергте алғаш жасалып, ХVІІІ ғ. ІІ жартысынан бастап музыкада белсенді қолданыла бастады. Түрлі музыкалық жанрлар мен құрамдарда қолданылады: жеке аспап ретінде, камералық ансамбльдерде, симфониялық және үрмелі аспаптар оркестрінде, халық музыкасында, эстрада мен джазда. Кларнеттың диапазоны кең, тембрі жұмсақ, мүмкіндіктері көп.
Лаунеддас – Аппенин түбегінің батысында, Сицилия мен Корсика арасында, Жерорта теңізінде орналасқан Сардиния аралында кең тараған халық аспабы. Арал Италияның құрамына автономиялық аймақ ретінде кіреді. 
Аспап атауы екі сөзден туындаған: «лау» – лавр және «каннас» – таяқ. Лаунеддас үш түтіктен тұрады. Ең кішкене түтік ең жоғары ноталарды алу үшін қажет. Орташа өлшемдегі түтік әуендік болып, орташа биіктіктегі ноталарды орындауда қолданылады. Ең үлкен түтік бурдонды деп аталады. Ол тұрақты бірқалыпты дыбысты қамтамасыз етеді. Бурдонды және ортаңғы түтіктер баумен байланысқан. Кіші және ортаңғы түтіктерде ойын саңылаулары жасалған. Үш түтік те жоғары тұсынан бөлек баумен байланған. Үлкен бурдонды түтіктің бөлек таяғы болады. Барлық түтіктер қамыстан жасалады.
Аспап жасалатын Сардиния аралында қамыс алқабы ерекше күзетіледі. Кемеліне келген қамысты тек қаңтарда немесе ақпанда және толған ай кезінде ғана жинауға болады. Бұл көзге оғаш көрінгенмен, маңызды болып табылады: ай циклі барлық суға әсер етіп, қамыс шырынының қозғалысына да ықпал етеді.
Орындаушы әрдайым ауа үрлей отырып, бір мезгілде аузында үш түтікті ұстайды. Бұл үшін мұрынмен дем алып, ауызбен дем шығару керек, яғни циркулярлы дем алуды пайдалану. Нәтижесінде қуатты дыбыстар алынады. Лаунеддастың диапазоны ауқымды – әр түтікке бес нотадан. Бұл аспапта түрлі импровизация орындауға мүмкіндік береді. 
Лаунеддас аэрофондар қатарына жатады. Бұл аспап ауа бағанының дірілі арқылы дыбыс шығаратынын білдіреді. Музыкант түтікке үрлейді, ішіндегі ауа тербеліске түсіп, нәтижесінде дыбыс қалыптасады. Аталған әдіс тек Сардиния аралында ғана қолданылады.`
    },
    images: ['/instruments/world/italy/launeddas/1.png'],
    audio: '/audio/world/italy/launeddas.mp3',
    country: 'italy',
    countryName: countryNames.italy,
    flag: countryFlags.italy
  },
  {
    id: 'italy_mandolin',
    name: { en: `Mandolin`, ru: `Мандолина`, kk: `Мандолина` },
    description: {
      en: `Mandolin is a small stringed-plucked musical instrument; a kind of lute – soprano lute, but with a shorter neck and fewer strings. The strings are touched by the player, mainly with plectrum, as well as by the fingers and the bird's feather. The tremolo technique is used on the mandolin. Since the metal strings of the mandolin make a short sound, lingering notes are achieved by a quick repetition of the same sound.
The beginning of the history of the mandolin originates in the Middle East. It was there, about six thousand years ago, on the territory of Ancient Mesopotamia that the instruments of the lute family appeared, which, according to art historians, the founders of the mandolin were. The immediate predecessor of the instrument is considered to be a small lute of the soprano range, which has from 4 to 6 single or paired catgut strings. It appeared in everyday life and spread widely in European countries from the XI to XIV centuries under different names: mandora, mandola or pandurin.
It is believed that the mandolin appeared in Italy in the XVII century as a result of the transformations of the instruments preceding it. Outwardly, it still looked much like a lute, but the head of the neck of the instrument was already straightened. Over time, the mandolin became one of the most beloved folk instruments, quickly spread and gained popularity in different countries.
A special heyday for the mandolin begins in the XVIII century. The instrument, which is gaining popularity among different classes, is becoming in demand in high society for chamber music. Performing art on the instrument reaches its apogee. The School of Playing the Mandolin is published. In Naples, an updated mandolin was designed by craftsmen from the Vinaccia family. It had a curved deck, a deeper body, four paired metal strings tuned like a violin in fifths. An instrument with a brighter sound is introduced into orchestras performing cantatas, oratorios and operas, and composers write music designed specifically for the mandolin. Soon, on the model of a new instrument, mandolins of various sound ranges are created, subsequently included in ensembles and orchestras, and later called Neapolitan.
The beginning of the 19th century was not very supportive for the mandolin, other instruments, with a more intense and expressive sound, displace it from the concert venues. Mandolin is losing its popularity and was used only in Italy as a folk instrument. Demand for mandolins was falling, and many music masters stopped making it. The situation changed only after in 1835, Pasquale Vinaccia radically transformed the classical mandolin. To achieve a more resonant resonance, he increased the size of the body, lengthened the neck, respectively, added the number of frets, thereby expanding the range of the instrument. The master changed simple wooden splits to a mechanism that better supported the strong tension of metal strings, and at the same time the structure of the instrument. Such modernization significantly changed the characteristics of the instrument and made it possible for performers to achieve a brighter, more beautiful sound in accordance with the requirements of the music of the romantic era.
The second half of the 19th century is characterized by the beginning of a new round of passion for mandolin, and with it its revival. The instrument very quickly conquered different classes, from commoners to crowned persons, and again won the approval of professional musicians who again brought it to the concert stage. The instrument was rapidly gaining popularity not only in Europe, but also in the USA, Japan, Canada and Australia. For the mandolin, it Golden Age began.`,
      ru: `Мандолина

струнный щипковый музыкальный инструмент небольших размеров, разновидность лютни – лютня-сопрано, но с менее длинной шейкой и с меньшим числом струн. Струны задеваются играющим, в основном, медиатором, а также пальцами и птичьим пером. На мандолине используется техника тремоло. Так ка металлические струны мандолины издают короткий звук, то протяжные ноты достигаются быстрым повторением одного и того же звука.
Начало истории мандолины берёт своё начало на Ближнем Востоке. Именно там, приблизительно шесть тысячелетий назад, на территории Древней Месопотамии появились инструменты семейства лютневых, которые по предположениям искусствоведов были родоначальниками мандолины. Непосредственным предшественником инструмента принято считать небольшую лютню сопранного диапазона, имеющую от 4 до 6 одинарных или парных кетгутовых струн. Она появилась в обиходе и широко распространилась в странах Европы в период с ХI по XIV века под разными названиями: мандора, мандола или пандурина.
Считается, что мандолина появилась в Италии в XVII веке в результате преобразований предшествующих ей инструментов. Внешне она ещё во многом напоминала лютню, но головка грифа инструмента была уже выпрямлена. С течением времени, мандолина стала одним из самых любимых народных инструментов, быстро распространилась и завоевала популярность в разных странах.
Особый расцвет для мандолины начинается в XVIII веке. Инструмент, приобретающий популярность у разных сословий, становится востребованным в высшем обществе для камерного музицирования. Исполнительское искусство на инструменте достигает своего апогея. Издаётся «Школа игры на мандолине». В Неаполе мастерами по изготовлению музыкальных инструментов из семьи Виначчиа была сконструирована обновлённая мандолина. Она имела изогнутую деку, более глубокий корпус, четыре парные металлические струны, настроенные как у скрипки по квинтам. Инструмент, имеющий более яркий звук, вводят в состав оркестров, исполняющих кантаты, оратории и оперы, а композиторы пишут музыку, предназначенную специально для мандолины. Вскоре, по образцу нового инструмента создаются мандолины различные по звуковому диапазону, впоследствии вошедшие в состав ансамблей и оркестров, и позже получившие название неаполитанских.
Начало XIХ века для мандолины было не очень благосклонным, другие инструменты, с более насыщенным и экспрессивным звуком, вытесняют её с концертных площадок. Мандолина утрачивает свою популярность и  используется лишь в Италии как народный инструмент. Спрос на мандолины падает, и многие музыкальные мастера прекращают её изготавливать. Ситуация изменилась только после того, как в 1835 году Паскуале Виначчиа кардинально преобразовывает классическую мандолину. Для достижения более объёмного резонанса он увеличивает размер корпуса, удлиняет гриф, соответственно прибавляет количество ладов, тем самым расширяя диапазон инструмента. Простые деревянные колки мастер поменял на механизм, который лучше удерживал сильное натяжение металлических струн, а вместе с этим строй инструмента. Такая модернизация значительно изменила характеристики инструмента и дала возможность исполнителям добиваться более яркого, сочного звука в соответствии с требованиями музыки эпохи романтизма.
Вторая половина XIХ века характеризуется началом нового витка увлечения мандолиной, а вместе с этим её возрождением. Инструмент очень быстро завоёвывает разные сословия, от простолюдинов до венценосных особ, и вновь завоёвывает одобрение музыкантов-профессионалов, которые вновь выводят его на концертную сцену. Инструмент быстро набирает популярность не только в странах Европы, но и в США, Японии, Канаде и Австралии. Для мандолины начинается её «Золотой век».`,
      kk: `Мандолина

шағын ішекті-шертпелі музыкалық аспап, лютня типтес – лютня-сопрано, бірақ мойны қысқа және ішектер саны аз. Ішектерді медиатор, саусақтармен және құс қауырсыны көмегімен шертеді. Мандолинада тремоло техникасы қолданылады. Мандолинаның металл ішектерінің дыбысы қысқа болғандықтан, созыңқы ноталарды бір дыбысты қайталау арқылы алады.
Аспап тарихы Таяу Шығыстан бастау алады. Шамамен 6 мыңж. бұрын Ежелгі Месопотамия жерінде бүгінгі мандолиналардың бастауы болып саналатын лютня типтес аспаптар қалыптасты. Алғашқы түрі деп сопрано диапазонды, 4-6 дара немесе қосарлы ішектері бар шағын лютня есептеледі. Ол ХІ-ХІV ғғ. Еуропа мемлекеттерінде мандора, мандола немесе пандурина атауларымен кең таралды. 
Аспап Италияда ХVІІ ғ. өзіне дейінгі аспаптардың жетілуі нәтижесінде қалыптасты делінеді. Сырт пішіні әлі де лютняға ұқсас болса да, мойын басы тік қалыпқа келтірілді. Уақыт өте келе, мандолина ең сүйікті халық аспабына айналып, басқа елдерге тез таралды. 
Мандолинаның гүлдену кезеңі ХVІІІ ғ. сәйкес келеді. Түрлі сословие арасында танымал болған аспап жоғары тап өкілдерінде камералық музыка орындау үшін сұраныста болды. Аспапта орындау шеберлігі шарықтау шегіне жетті. «Мандолинада ойнау мектебі» жарық көреді. Неапольде Виначчиа уәлетінің аспап жасаушы шеберлері жаңартылған мандолина жасады. Ол декасы иілген, корпусы терең, скрипкадағыдай квинта күйіне келтірілген төрт металл жұп ішектері бар аспап болды. Бұрынғыдан да жақсы дыбысы бар аспапты кантата, ораторий мен опералар орындайтын оркестрлер құрамына қосады, ал композиторлар мандолинаға арнайы музыка жазады. Кейіннен жаңа аспап үлгісімен дыбыс диапазоны бойынша ерекшеленетін мандолиналар жасалып, ансамбльдер мен оркестрлер құрамына қосылады. 
ХІХ ғ. бастап мандолина қолданыстан шыға бастайды. Аспаптың танымалдығы төмендеп, тек Италияда халық аспабы ретінде қолданылды, оған сұраныс азайып, шеберлер де жасауды доғарды. Жағдай 1835 ж. Паскуале Виначчиа классикалық мандолинаны қайта жасағанда өзгерді. Жаңғырықты ұлғайту үшін ол корпустың көлемін үлкейтіп, мойынды ұзартады, сәйкесінше, пернелер саны көбейіп, аспап диапазоны кеңейеді. Шебер қарапайым ағаш құлақтарды металл ішектердің керілісін және аспап құрылымын жақсы ұстайтын механизмге ауыстырды. Мұндай жаңашылдық аспаптың сипаттамасын біраз өзгертіп, романтизм кезеңіндегі музыка талаптарына сай болды.
ХІХ ғ. ІІ жартысы аспаптың қайта жаңғыруымен сипатталады. Аспап түрлі тап өкілдері арасында кең таралып, қайтадан сахнаға шыға бастады. Мандолина Еуропа елдерімен қатар, АҚШ, Жапония, Канада, Австралия мемлекеттерінде де танымал болды. Осылайша, аспаптың «Алтын ғасыры» басталды.`
    },
    images: ['/instruments/world/italy/mandolin/1.png'],
    audio: '/audio/world/italy/mandolin.mp3',
    country: 'italy',
    countryName: countryNames.italy,
    flag: countryFlags.italy
  },
  {
    id: 'japan_sanshin',
    name: { en: `SANSHIN (SHAMISEN)`, ru: `САНСИН (СЯМИСЭН)`, kk: `САНСИН (СЯМИСЭН)` },
    description: {
      en: `SANSHIN (SHAMISEN)

Sanshin (Jap., “Three strings”) is a fretless stringed plucked instrument with a long neck and body covered with snake skin, distributed in the Ryukyu archipelago.
Used in court and folk music. In the 21st century, sanshin experienced a rise in popularity in Japan and beyond as an instrument for Okinawan pop music.
The Chinese sanxian instrument from which sanshin originated came to the Ryukyu state in the 14th century, presumably from Fujian. In 1575, in the diary of a Japanese official, the first written mention of sanshin appeared – under the name shahisen. At the beginning of the 18th century, sanshin became the main instrument of the nobility; in 1710, van Ryukyu Sho Eki established the post of court sanshin master. Only noble men could play music on it, and with the exception of modern folk music, women are less likely to play it. On Amami, sanshin was played exclusively by men.
In the Okinawa Islands, older people often call sanshin as “shamisen”; in the rest of Japan, the name “jiabisen” is used; there is also a regional name “santi”, and in one folk song this instrument is called “samisin”.
Sanshin is structurally very similar to shamisen. It is slightly shorter than meter-long sanxian and shamisen: its usual length is 75–85 cm, body dimensions – 19×18×8 cm. Sanshin does not have stand for strings. The neck is made of mahogany or ebony, strings are silk or synthetic, the body is made of mulberry or camphor.
To play the sanshin, a claw-like of a bull or goat horn is used, worn on the index finger; a guitar pick and nails can also be used. The length of the plectrum varies from 4.5 for classical styles and up to 9 cm in some song genres. On Yaeyama, the plectrum is made of ivory. On the Amami Islands they play with a thin 11-14-cm bamboo plectrum, and the instrument is tuned a little higher.
There are two main performing schools, Nomura-ryu and Afuso-ryu, named after Nomura Antyo and Afuso Seigan, as well as a small school named Uekata Tansuya, whose works are performed by musicians of the Nomura school. Both Nomura and Afuso were students of Chinen Sekko, who in turn was taught by Yakabi Choki. Chinen Sekko played a crucial role in the development of classical music for sanshin.
Okinawan music in general, and sanshin in particular, were influenced by Western music. In the 1970s and 1980s, Okinawan neo-traditional pop music gained widespread popularity in the rest of Japan and spread beyond its borders.`,
      ru: `САНСИН (СЯМИСЭН)

Сансин (яп., «три струны») — безладовый струнный щипковый инструмент с длинным грифом и корпусом, обтянутым змеиной кожей. Распространён на архипелаге Рюкю. 
Использовался в придворной и народной музыке. В XXI веке сансин испытал подъём популярности в Японии и за её пределами как инструмент для окинавской поп-музыки.
Китайский инструмент саньсянь, от которого произошёл сансин, пришёл в государство Рюкю в XIV веке, предположительно из Фуцзяни. В 1575 году в дневнике японского чиновника появилось первое письменное упоминание сансина — под названием сяхисэн. В начале XVIII века сансин стал основным инструментом знати, в 1710 году ван Рюкю Сё Эки учредил пост придворного мастера сансинов. Исполнять музыку на нём могли только знатные мужчины, и за исключением современной фолк-музыки женщины реже на нём играют. На Амами на сансине играли исключительно мужчины.
На Окинавских островах пожилые часто называют сансин словом «сямисэн»; в остальной Японии используется название «дзябисэн»; также имеется региональное названия «санти», а в одной народной песне данный инструмент назван «самисин».
Сансин структурно очень похож на сямисэн. Он немного короче, чем метровые саньсянь и сямисэн: его обычная длина – 75 – 85 см, размеры корпуса – 19×18×8 см. Подставок под струны у сансина нет. Гриф изготавливается из махагони либо эбена, струны шелковые или синтетические, корпус делают из шелковицы или камфоры. 
Для игры на сансине используется когтеобразный из бычьего или козьего рога, надеваемый на указательный палец; может использоваться также гитарный медиатор и ногти. Длина плектра варьирует от 4,5 для классических стилей и до 9 см в некоторых песенных жанрах. На Яэяме плектр делают из слоновой кости. На островах Амами играют тонким 11-14-сантиметровым бамбуковым плектром, а инструмент настраивают немного выше.
Существует две основные исполнительские школы, Номура-рю и Афусо-рю, названные в честь Номуры Антё и Афусо Сэйгэна, а также небольшая школа имени Уэкаты Тансуя, произведения которой исполняют музыканты школы Номуры. И Номура, и Афусо были учениками Тинэна Сэкко, которого в свою очередь учил Якаби Тёки. Тинэн Сэкко сыграл важнейшую роль в становлении классической музыки для сансина.
Окинавская музыка в целом и сансин в частности испытали влияние западной музыки. В 1970-х и 1980-х окинавская нео-традиционная поп-музыка получила широкую популярность в остальной части Японии и распространилась за её пределы.`,
      kk: `САНСИН (СЯМИСЭН)

Сансин (жапон тілінен үш ішекті) – шанағына жылан терісі қапталған ұзын мойынды пернесіз ішекті-шертпелі музыкалық аспап. Рюкю архипелагында кең таралған.
Аспап сарай музыкасы мен халық шығармашылығында пайдаланылды. ХХІ ғ. сансин Жапония мен шет елдерде Окинава поп-музыкасының аспабы ретінде танымалдыққа ие болды.
Сансин аспабының арғы тегі қытайлық саньсянь аспабы Рюкю мемлекетіне XІV ғ. Фуцзяньнан келген. 1575 ж. жапон шенеунігінің күнделігінде сансиннің «сяхисэн» атауымен алғашқы жазба дерегі жазылды. XVIІІ ғ. басында сансин ақсүйектердің негізгі аспабына айналды, ал 1710 ж. Рюкю билеушісі Сё Эки сансин жасаушы сарай шебері қызметін ұйымдастырды. Аспапта тек ақсүйек ер адамдар музыка орындады, бірақ заманауи фолк-музыкада әйелдер де орындайды. Амами аралдарында аспапта тек ерлер ойнаған.
Окинава аралдарында қарттар аспапты «сямисэн» деп атайды; Жапонияның басқа аймақтарында «дзябисэн» атауы қолданылады; сондай-ақ, аймақтық «санти» атауы кездессе, бір халық әнінде аспапты «самисин» деп атаған. 
Құрылысы бойынша сансин сямисэнге ұқсас. Оның әдеттегі ұзындығы 75-85 см, шанағының өлшемі – 19х18х8 см. Сансинде тиек болмайды. Мойны махагони не эбен ағаштарынан, ішектері жібектен немесе синтетикадан, ал шанағы тұт ағашы не камфорадан жасалады.
Ойын барысында бұқа не ешкі мүйізінен жасалған, сұқ саусаққа киілетін тырнақ тәріздес плектр қолданылады, сондай-ақ, гитара медиаторы мен тырнақ та пайдаланылады. Плектр ұзындығы классикалық стиль үшін – 4,5 см, кейбір ән жанрларында – 9 см. Яэяме аралдарында оны піл сүйегінен жасайды. Ал амами аралдарында 11-14 см бамбуктан жасалған жұқа плектрмен ойнап, аспапты біраз жоғары құлақ күйіне келтіреді. 
Аспапта ойнаудың екі негізгі мектебі бар: Номура Антё мен Афусо Сэйгэг құрметіне аталған Номура-рю және Афусо-рю мектептері. Сонымен қатар, шығармаларын Номура мектебінің музыканттары орындайтын Уэкат Тансуй атындағы шағын мектеп қызмет етеді. Номура мен Афусо Тинэн Сэкконың шәкірттері болған, ал Сэкконың ұстазы Якаби Тёки болыпты. Тинэн Сэкко сансин классикалық музыкасының қалыптасуында маңызды рөл атқарды. 
Окинава музыкасы және сансин аспабы батыс музыкасының ықпалын сезді. 1970-80 жж. Окинаваның нео-дәстүрлі поп-музыкасы Жапонияның басқа өңірлеріне тарап, шет елдерге таныла бастады.`
    },
    images: ['/instruments/world/japan/sanshin/1.jpg'],
    audio: '/audio/world/japan/sanshin.mp3',
    country: 'japan',
    countryName: countryNames.japan,
    flag: countryFlags.japan
  },
  {
    id: 'japan_taiko',
    name: { en: `TAIKO`, ru: `ТАЙКО`, kk: `ТАЙКО` },
    description: {
      en: `TAIKO

Taiko is a family of drums used in Japan. Taiko means "big drum".
Most likely, these drums were imported from China or Korea between the III and IX centuries, and after the IX century they were made by local craftsmen. They were used in Shintoism, when worshiping the wind god Susanoo. They are used to this day in both folk and classical music.
In the old days, they were secretly used as a signaling instrument to alert community members about danger, common work, etc. In agriculture, they were used to scare away pests, and in military affairs to raise morale and intimidate the enemy. On the other hand, taiko also had a ritual purpose: they were played during religious holidays and ceremonies, such as a bon-odori funeral dance, prayers for rain amagoi, etc. In the life of traditional Japanese society, taiko drums occupied an important place.
Over time, taiko could increasingly be seen on stage: they were used in performances of the Kabuki theater and in other traditional stage arts. A relatively new tradition of collective performances with taiko, so common today, was born at the beginning of the twentieth century.
The drums of Japan are commonly called taiko, by design they are divided into two large groups: byo-daiko, in which the membrane is rigidly fixed with nails without the possibility of adjustment, and sime-daiko, which can be adjusted using cords or screws. The drum body is hollowed out of a solid piece of hardwood. Taiko is played with sticks called bati.
Byo-daiko include o-daiko and ko-daiko. With the help of cords, da-daiko, ni-daiko, kakko, uta-daiko and tsuzumi are tuned.
Under the same name, musical ensembles of drummers are known, which are the national symbol of Japan. They became especially popular in the 1970s, when groups of drummers began performing at venues outside of Japan. They expressed the spirit of the samurai: discipline, high physical and moral training, group coordination and perfectionism.
Unlike Western practices, the visual part of the performance is secretly no less important than the acoustic impact. Kata movements are an inseparable part of the game secretly and proceed from the customs of court representations. Kata connects the drum and the drummer, creates a relationship between the performer and the instrument.`,
      ru: `ТАЙКО

Тайко — семейство барабанов, используемых в Японии. Тайко обозначает «большой барабан».
Вероятнее всего, эти барабаны были завезены из Китая или Кореи между III и IX веками, а после IX века изготавливались местными мастерами. Их использовали в синтоизме, при поклонении богу ветра Сусаноо. Они используются и по сегодняшний день как в народной, так и в классической музыке.
В старые времена тайко использовались как сигнальное средство для оповещения членов сообщества об опасности, общих работах и т. д. В сельском хозяйстве они применялись для отпугивания вредителей, а в военном деле – для поднятия боевого духа и для устрашения неприятеля. С другой стороны, у тайко было также ритуальное назначение: на них играли во время религиозных праздников и церемоний, таких как поминальный танец бон-одори, моление о дожде амагои и др. В жизни традиционного японского общества барабаны тайко занимали важное место.
Со временем тайко все чаще можно было увидеть на сцене: их использовали в представлениях театра Кабуки и в других традиционных сценических искусствах. А сравнительно новая традиция коллективных выступлений с тайко, столь распространенная в наши дни, зародилась в начале двадцатого века. 
Барабаны Японии носят общее название тайко, по конструкции они делятся на две большие группы: бë-дайко, у которого мембрана жёстко закреплена гвоздями без возможности настройки, и симэ-дайко, которые можно настроить при помощи шнуров или винтов. Корпус барабана выдалбливают из цельного куска твёрдой древесины. На тайко играют палочками под названием бати.
К бё-дайко относятся о-дайко и ко-дайко. С помощью шнуров настраиваются да-дайко, ни-дайко, какко, ута-дайко и цудзуми.
Под тем же названием известны музыкальные ансамбли барабанщиков, являющиеся национальным символом Японии. Особо популярны они стали в 1970-е годы, когда группы барабанщиков стали выступать на площадках вне Японии. Они выражали дух самураев: дисциплину, высокую физическую и нравственную подготовку, координацию группы и перфекционизм. 
В отличие от западных практик, визуальная часть представления тайко не менее важна, чем акустическое воздействие. Движения ката составляют неотделимую часть игры на тайко и исходят из обычаев придворных представлений. Ката связывает барабан и барабанщика, создаёт родство между исполнителем и инструментом.`,
      kk: `ТАЙКО

Тайко – Жапонияда қолданылатын барабандар тобының атауы. «Тайко» сөзі «үлкен барабан» деген мағынаны білдіреді. 
Бұл барабандар ІІІ-ІХ ғғ. аралығында Қытай мен Кореядан келген болуы мүмкін, ал ІХ ғ. кейін аспапты жергілікті шеберлер жасай бастаған. Аспап синтоизмде, жел құдайы Сусанооға табыну рәсімдерінде қолданылған. Тайко бүгінгі кезде халық шығармашылығында да, классикалық музыкада да бірдей пайдаланылады.
Ертеректе тайконы қауым мүшелеріне қауіп туралы, ұжымдық жұмыс туралы белгі беруге қолданылды. Ауыл шаруашылығында олар зиянкестерді үркіту үшін, әскери істе – жауынгерлік рухты көтеріп, жауға қорқыныш ұялату қызметін атқарған. Екінші жағынан, тайко ғұрыптық қызмет атқарды: бон-одори еске алу биін орындау, амагои жаңбыр тілеу секілді діни ғұрыптар мен мейрамдарда қолданылды. Дәстүрлі жапон қоғамында тайко барабандары ерекше орын алады.
Уақыт өте келе тайконы сахнадан жиі кездестіреміз: олар Кабуки театрының қойылымдарында және өзге де дәстүрлі сахналық өнерде қолданылды. Заманауи ұжымдық қойылымдар ХХ ғ. басында қалыптаса бастады.
Жапония барабандары жалпылама тайко деп аталады, ал құрылымы бойынша екі үлкен топқа жіктеледі: мембранасы күйге келтірілмейтіндей етіп тығыз шегеленген бё-дайко және бау немесе бұрандалардың көмегімен күйге келтірілетін симэ-дайко. Барабан корпусы тұтас ағаштан шауып жасалды. Тайко аспабында бати таяқшаларымен ойнайды.
Бё-дайко қатарына о-дайко мен ко-дайко жатады. Баулар арқылы да-дайко, ни-дайко, какко, ута-дайко және цудзуми күйге келтіріледі.
Осы атпен Жапонияның ұлттық символы болып табылатын барабаншылардың ансамбльдері танымал. Олар 1970-жж. елтен тысқары жерлерде өнер көрсеткеннен бастап танымалдыққа ие болды. Олар самурайларды білдіретін: тәртіп, жоғары физикалық және этикалық дайындық, топтық координация, перфекционизм.
Батыстық тәжірибеден айырмашылығы – тайко қойылымының визуалды бөлігі оның акустикалық әсерінен еш кем түспейді. Ката қозғалыстары тайкода ойнаудың ажырамас бөлігі және олар сарай қойылымдары дәстүрінен бастау алады. Ката барабан мен орындаушыны байланыстырып, аспап пен орындаушы арасында туыстық қалыптастырады.`
    },
    images: ['/instruments/world/japan/taiko/1.jpg'],
    audio: '/audio/world/japan/taiko.mp3',
    country: 'japan',
    countryName: countryNames.japan,
    flag: countryFlags.japan
  },
  {
    id: 'korea_buk',
    name: { en: `Buk`, ru: `Бук`, kk: `Бук (бөшке тәріздес барабан)` },
    description: {
      en: `Buk is the common name for any kind of drum in Korean. Since in Korean music each drum has its own Korean name, the word “buk” means either “a drum of some other country” or certain types of drums in Korea, mainly a drum with leather membranes in the shape of a barrel. Various types of buk are used in many types of palace, temple and folk music.
Samul-buk (or non'ak-buk) is used in folk music of samulnori and pankut. Its size is about 60 cm in diameter, the skin on it is stretched with ropes.
Pkhansori-buk is used as an integral component of pkhansori stories, accompanies the narration of the singer-storyteller.
Modymbuk is a kind of buk on coasters, the so-called “sitting drums”. “Modym” means “assembled”: usually several of these buks are placed nearby and play on a whole set of drums. Such instruments include chwago (a large double-sided barrel-shaped drum mounted on a stand), cholgo and chingo (similar instruments of Chinese origin, used only in court ritual music), nogo and nodo (smaller drum-shaped drum kits similar to those for origin and use). All these instruments are very intricately decorated with images of dragons, tigers, clouds, the sun. In the center of the membranes is a unique Korean symbol, sam-tegyk, more characteristic of the late Joseon era. Three colors represent samche – three elements of the world - sky (blue), earth (green) and man (red).`,
      ru: `Бук

общее название любого вида барабана в корейском языке. Поскольку в корейской музыке каждый барабан имеет своё корейское название, слово «бук» обозначает либо «барабан какой-нибудь другой страны», либо определённые разновидности барабанов в Корее, в основном барабан с кожаными мембранами в форме бочки. Различные виды бука используются во многих видах дворцовой, храмовой и народной музыки.
Самуль-бук (или нонъак-бук) используется в народной музыке самульнори и панкут. Его величина составляет около 60 см в диаметре, кожа на нём натягивается верёвками. 
Пхансори-бук используется как неотъемлимый компонент историй пхансори, сопровождает повествование певца-сказителя. 
Модымбук – это разновидность бука на подставках, так называемые «сидячие барабаны». «Модым» обозначает «собранный»: обычно несколько таких буков ставят рядом и играют на целом комплекте барабанов. Среди таких инструментов – чваго (большой двухсторонний барабан в форме бочки, закреплённый на подставке), чольго и чинго (похожие инструменты китайского происхождения, используемые только в придворной ритуальной музыке), ного и нодо (наборы барабанов в форме бочки меньшего размера, аналогичные чольго по происхождению и применению). Все эти инструменты очень замысловато украшены изображениями драконов, тигров, облаков, солнца. В центре мембран располагается уникальный корейский символ сам-тхэгык, более характерный для эпохи позднего Чосон. Три цвета представляют самчэ – три элемента мира – небо (синий), землю (зелёный) и человека (красный).`,
      kk: `Бук (бөшке тәріздес барабан)

корей тілінде барабандардың жалпылама атауы. Корей музыкасында әр барабанның сол тілдегі атауы болғандықтан, «бук» сөзі «өзге мемлекеттің барабаны» немесе Кореядағы белгілі бір барабан түрлеріне, негізінен, бөшке тәріздес, терімен қапталған барабандарға қатысты қолданылады. Буктың көптеген түрлері сарай, діни және халық музыкасында қолданылды.
Самуль-бук (немесе нонъак-бук) самульнори және панкут халық музыкасында қолданылады. Аспап диаметрі 60 см, терісі жіппен бекітіледі. 
Пхансори-бук пхансори тарихының міндетті бөлшегі, әнші-орындаушыны сүйемелдейді. 
Модымбук – «отырған барабандар» деп аталатын буктың тіреуіші бар түрі. «Модым» сөзі «жинақы» мағынасын береді: әдетте, осындай бірнеше букты жақын қойып, барабандар кешенінде ойнайды. Мұндай аспаптардың қатарында: чваго (тіреуішке бекітілген бөшке формасындағы екі жақты барабан), чольго мен чинго (шығу тегі қытайлық ұқсас аспаптар, тек сарай діни музыкасында қолданылады), ного мен нодо (өлшемдері шағын бөшке тәріздес барабандар жинағы, шығу тарихы мен пайдаланылуы бойынша чольгомен ұқсас). Бұл аспаптар айдаһар, барыс, бұлт, күннің күрделі бейнелерімен безендірілген. Мембрана ортасында Кореяның бірегей нышаны сам-тхэгык бейнеленген. Бұл белгі кейінгі Чосон кезеңіне тән. Үш түс самчэны – дүниенің үш бөлігін – аспан (көк), жер (жасыл), адамды (қызыл) білдіреді.`
    },
    images: ['/instruments/world/korea/buk/1.png'],
    audio: '/audio/world/korea/buk.mp3',
    country: 'korea',
    countryName: countryNames.korea,
    flag: countryFlags.korea
  },
  {
    id: 'korea_changu',
    name: { en: `Changu`, ru: `Чангу`, kk: `Чангу` },
    description: {
      en: `Changu is a Korean percussion musical instrument, a kind of double-sided drum. Consists of a wooden polished (sometimes also varnished) case and 2 leather-bound membranes. It resembles an hourglass or two glasses, placed vertically one above the other and connected by the bases of short legs.
It is necessary in the performance of the sanjo, regardless of school and instrument, is an accompanying instrument in court music, in various songs and instrumental music of non-peasant groups. There are various ways of execution and types of changu. A changu is played while sitting, standing, or is used in dance. To hit its surfaces, both a stick and the palm of the right hand are used, as well as two sticks.
There is a version that changu was imported to the peninsula during the Koryo period (918-1392) through China, where it came from the Middle East and Central Asia (along the Great Silk Road). At the same time, it is likely that such an instrument was used in Korea long before the Koryo period. Images on the frescoes of the ancient Korean state of Goguryeo (existed from 37 BC to 668) confirm this assumption. However, at the moment there is too little reliable information about the early use of changu in Korea.
Most often, paulownia wood is used to make the changu body because of its strength and lightness at the same time; alternative materials such as willow and walnut tree are also used. The skin of a dog, cow or sheep is stretched onto the body with ropes (previously, roe deer’s skin was also used). Since the skin on the left side is thicker than on the right, the sound from different sides of the instrument is different. On the left, it turns out lower and deaf, and on the right, it is cleaner and higher.
Due to this, among all Korean percussion instruments only on the changu it is possible to make so many various sounds, which is the reason for its use in many genres of Korean music.
In folk music, nonak and in samulnori the changu is played with two different sticks: kungylche on the left side and yolche on the right.`,
      ru: `Чангу

корейский ударный музыкальный инструмент, род двустороннего барабана. Состоит из деревянного полированного (иногда также лакированного) корпуса и 2 стянутых шнурами кожаных мембран. По форме напоминает песочные часы или две рюмки, поставленные вертикально одна над другой и соединённые основаниями коротких ножек.
Он необходим в исполнении санджо, вне зависимости от школы и инструмента, является аккомпанирующим инструментом в придворной музыке, в различных песнях и инструментальной музыке крестьянских групп нонъак. Существуют различные способы исполнения и виды чангу. На барабане чангу играют сидя, стоя или используют в танце. Для удара по его поверхностям используется как палочка и ладонь правой руки, так и две палочки.
Существует версия, что чангу был ввезен на полуостров в период Корё (918-1392) через Китай, куда попал из Среднего Востока и Центральной Азии (по Великому Шелковому пути). В то же время, есть вероятность, что подобный инструмент использовался в Корее задолго до периода Корё. Изображения на фресках древне-корейского государства Когурё (существовало с 37 г. до н.э. до 668 г.) подтверждают это предположение. Однако, на данный момент существует слишком мало достоверных сведений о раннем использовании чангу в Корее.
Наиболее часто для изготовления корпуса чангу используется древесина павлонии из-за её крепости и одновременно легкости; также используются альтернативные материалы – ива и дерево грецкого ореха. На корпус верёвками натягивается кожа собаки, коровы или овцы (раньше использовали также кожу косули). Так как с левой стороны кожа толще, чем с правой, звук с разных сторон инструмента различается. С левой стороны он получается более низким и глухим, а с правой – более чистым и высоким. 
Благодаря этому, среди всех корейских ударных инструментов именно на чангу возможно издавать столь много разнообразных звуков, что является причиной его использования во многих жанрах корейской музыки. 
В народной музыке нонъак и в самульнори на чангу играют двумя разными палочками: кунгыльчэ с левой стороны и ёльчэ с правой.`,
      kk: `Чангу

корей халқының ұрмалы музыкалық аспабы, екі жақты барабан түрі. Жылтыратылған (кейде лакталған) ағаш корпустан және өзара баулармен тартылған 2 тері мембранадан тұрады. Пішіні құм сағатқа немесе бір біріне тігінен қойылып, қысқа аяқтарымен байланыстырылған екі рөмкеге ұқсас.
Аспап санджо орындауда қолданылады, сарай, би музыкаларын, түрлі әндер мен шаруалардың нонъак аспаптық музыкасын сүйемелдейді. Чангудың бірнеше түрі және ойнау тәсілдері бар. Аспапта отырып, тұрып, би билеп жүріп ойнауға болады. Ойын үшін таяқша да, оң қол алақаны да, сондай-ақ, екі таяқша да қолданылады. 
Чангу аспабы Корей түбегіне Корё кезеңінде (918-1392 жж.) Қытай арқылы келген деген болжам бар. Ал Қытайға аспап өз кезегінде, Таяу Шығыс пен Орталық Азиядан (Ұлы Жібек жолы бойымен) келген. Сонымен қатар, мұндай аспап Кореяда Корё кезеңіне дейін де қолданылуы мүмкін. Мұны ежелгі корей мемлекеті Когурё кезеңіндегі (б.з.б. 37 – б.з. 668 ж.) фрескалардағы бейнелер дәлелдейді. Бірақ, қазіргі кезде чангудың ертедегі қолданылуы туралы мәліметтер мардымсыз ғана. 
Корпусты дайындауға павловния ағашы қатты әрі жеңіл болғандықтан жиі пайдаланылады; сонымен қатар, балама материалдар – тал немесе грек жаңғағы ағашы да қолданылады. Корпусқа жіптермен иттің, сиырдың немесе қойдың терісі (бұрын еліктің терісін де қолданған) тартылады. Оң жақпен салыстырғанда, сол жағының терісі қалың болғандықтан, дыбыстар да екі түрлі болады. Сол жағында дыбыс – төмен әрі қатаң болса, оң жағында – таза әрі жоғары болады. 
Осылайша, басқа ұрмалы аспаптар арасында осы чангуда түрлі дыбыстар алуға болады, бұл оның корей музыкасының көптеген жанрларында қолданылуына себепші болды. 
Нонъак және самульнори халық музыкаларында чангу аспабында екі түрлі таяқшалармен: сол жағында – кунгыльчэ, оң жағында – ёльчэ таяқшаларымен ойнайды.`
    },
    images: ['/instruments/world/korea/changu/1.png'],
    audio: '/audio/world/korea/changu.mp3',
    country: 'korea',
    countryName: countryNames.korea,
    flag: countryFlags.korea
  },
  {
    id: 'korea_ching',
    name: { en: `Ching`, ru: `Чинг`, kk: `Чинг` },
    description: {
      en: `Ching is a traditional Korean percussion instrument consisting of a small brass gong. The name "ching" is onomatopoeic, derived from the bright, clear sound it produces when struck. Depending on its size, regional origin, and specific use, different types of gongs in Korea are referred to by various names including chon (jong), kimcheon (kimzhong), kym, kymna, and na.

The ching is an essential instrument across multiple genres of Korean music, including folk music, military music, ceremonial temple music, and shamanistic rituals. It is characterized by its solemn, low-pitched, and soft sound with an extended reverb that creates an atmosphere of solemnity and contemplation. The instrument is played using a wooden stick wrapped in soft woolen cloth, which produces a mellow tone without harsh overtones.

In traditional Korean musical ensembles, the ching serves as a timekeeper, marking the beginning and end of musical phrases and helping to regulate the tempo. In samulnori (a genre of traditional percussion music), the ching represents the wind and provides the underlying pulse alongside the jing, janggu, and buk drums. The ching's sustained resonance and ability to cut through other instruments make it invaluable in both outdoor and indoor performances.`,
      ru: `Чинг

корейский ударный инструмент, латунный гонг. В зависимости от размера и происхождения, разновидности гонгов называются: чон (чжонг), кымчон (кымчжонг), кым, кымна и на. Этот тип инструмента используется в народной, военной, храмовой и шаманской музыке, отличаясь торжественным, низким, мягким звуком с длинной реверберацией. Играют на чине деревянной палочкой, обтянутой мягкой шерстяной тканью.`,
      kk: `Чинг

корей халқының ұрмалы аспабы, жезден құйылатын гонг. Өлшемдері мен шығу тегіне қарай гонгтың чон (чжонг), кымчон (кымчжонг), кым, кымна, на деп аталады.
Аспап халықтық, әскери, ғұрыптық және шаман музыкасында қолданылады, салтанатты, төмен, ұзақ жаңғырықты жұмсақ дыбысымен ерекшеленеді. Чинг аспабында басы жұмсақ матамен қапталған ағаш таяқшамен ойнайды.`
    },
    images: ['/instruments/world/korea/ching/1.png'],
    audio: '/audio/world/korea/ching.mp3',
    country: 'korea',
    countryName: countryNames.korea,
    flag: countryFlags.korea
  },
  {
    id: 'korea_daegeum',
    name: { en: `Daegeum (dae`, ru: `Тэгым (тэ`, kk: `Тэгым` },
    description: {
      en: `Daegeum (dae

large, gym – instrument) is the largest transverse flute, also known as cho or chotte.
Daegeum as junggeum (jung – medium size) and sogeum (so – small), made of bamboo and was first mentioned in the period of the Three Kingdoms (53 BC – 668 AD). In the most authoritative musical treatise of the Middle Ages “Akhak Kvebom”, the length of the tag is indicated as 86.5 cm, the junggeum – 67.8 cm, and the sogeum – 43 cm. Currently, the length of the tag is 5 cm shorter.
Daegeum is one of the most typical Korean instruments, conveying the characteristic sound and emotionality of Korean music.
The daegeum has 10 sound holes: there is a large inflatable hole – chhuigu, a resonant hole – chheongong covered with a membrane made from the inside of the reed stem, and 6 finger holes called chigong.
The last two holes on the bottom of the instrument are the chilsongong, which determine the longitude of the sound of the tube. The instrument’s body is wrapped with synthetic or silk strings for strength and for decoration. Between the inflatable and the first finger holes there is a curved metal plate with leather straps that surround the instrument, protects the thin membrane. The tag range is approximately two octaves.
In addition, several different heights can be taken in one position by changing the angle of air supply. The tags are made with the intention of showing the original condition of the material – bamboo. Antique instruments such as daegeum have survived to the present day, but there are modern ones that differ in size and configuration. These differences indicate that the sizes and scales do not exactly correlate with certain book directions when bamboo is cut to create a daegeum. Accordingly, the prescribed size is only a guideline, which it is impossible to precisely follow when manufacturing each instrument.
At the end of the 19th century, a new type of daegeum was developed for sanjo music, called the sanjo daegeum, 4 inches shorter than the daegeum for court music, called the jeongak daegeum. The distance between the finger holes on the sanjo daegeum is also shorter. In addition, the sanjo daegeum has one or two holes for tuning, while the jeongak daegeum has two. There are more inflatable and finger holes on the sanjo daegeum, which allows you to strengthen the vibrato and change the pitch.
A solo performance on the daegeum of sanjo music was classified by the South Korean Cultural Property Administration in 1971 as “Korea's Significant Intangible Cultural Heritage”.`,
      ru: `Тэгым (тэ

большой, гым – инструмент) – самая большая поперечная флейта, также известная как чо или чоттэ.
Тэгым как чжунгым (чжун – среднего размера) и согым (со – маленький), сделан из бамбука и впервые упоминается в период Трёх королевств (53 г. до н.э. – 668 г. н.э.). В наиболее авторитетном музыкальном трактате Средних веков «Акхак Квэбом» длина тэгыма указана как 86,5 см, чжунгыма – 67,8 см, а согыма – 43 см. В настоящее время длина тэгыма на 5см короче.
Тэгым – это один из наиболее типичных корейских инструментов, передающий характерное звучание и эмоциональность корейской музыки. 
У тэгыма 10 игровых отверстий: имеется большое вдувное отверстие – чхуигу, резонаторное отверстие – чхонъгон, покрытое плёнкой, сделанной из внутренней части тростникового стебля, а также 6 пальцевых отверстий, называемых чигонъ.
Два последних отверстия на нижней части инструмента – это чильсонъгонъ, которые определяют долготу звука трубки. Корпус инструмента обмотан синтетическими или шёлковыми струнами для прочности и для украшения. Между вдувным и первым пальцевым отверстиями находится изогнутая металлическая пластина с кожаными ремнями, окаймляющая инструмент, защищает тонкую мембрану. Диапазон тэгыма – примерно две октавы.
Кроме того, несколько различных высот можно взять в одной позиции, изменяя угол подачи воздуха. Тэгым изготавливают с намерением показать первородное состояние материала – бамбука. Старинные инструменты типа тэгыма сохранились до наших дней, но есть и современные – отличающиеся по размерам и настройке. Эти различия говорят о том, что размеры и звукоряды стремятся не точно соотнести с некими книжными указаниями, когда срезают бамбук для создания тэгыма. Соответственно, предписанный размер – это только ориентир, точно следовать которому при изготовлении каждого инструмента невозможно.
В конце ХІХ века был сконструирован новый тип тэгыма для музыки санджо, называемый санджо тэгым, на 4 дюйма короче, чем тэгым для придворной музыки, получивший название чонъак тэгым. Расстояние между пальцевыми отверстиями на санджо тэгым также короче. Кроме того, санджо тэгым имеет одно или два отверстия для настройки, тогда как чонъак тэгым имеет два. Вдувное и пальцевые отверстия на санджо тэгым больше, что позволяет усилить вибрато и изменить высоту звука.
Сольное исполнение на тэгыме музыки санджо было отнесено Администрацией культурного имущества Южной Кореи в 1971 году к «Значимому нематериальному культурному наследию Кореи».`,
      kk: `Тэгым (тэ – үлкен, гым – аспап) – чо немесе чоттэ деген атаулармен де белгілі ең үлкен флейта. «Тэгым» сөзі екі корей сөзінен: тэ – үлкен, гым – үрмелі аспаптан құралған. 
Тэгым чжунгым (чжун – орташа) мен согым (со – кішкентай) секілді бамбуктан жасалған, аспап туралы алғашқы деректер Үш патшалық кезеңіне (б.з.б. 53 – б.з. 668 жж.) тән. Орта ғасырлардағы ең беделді трактат «Акхак Квебомда» тэгымның ұзындығы 86,5 см, чжунгым – 67,8 см, ал согым – 43 см деп көрсетілген. Бүгінде тэгымның ұзындығы көрсетілген өлшемнен 5 см қысқа. 
Тэгым – корей музыкасының барлық сезім күйлері мен мазмұнды дыбыс жеткізе білетін бірегей аспаптың бірі. Аспапта 10 саңылау бар: ауа үрлейтін ең үлкен саңылау – чхуигу, қамыс сабағының ішкі бөлігінен жасалып, қабықшамен қапталған резонаторлық – чхонъгон, сондай-ақ чигонъ аталатын ойын саңылауы.
Аспаптың төменгі жағындағы екі саңылау бұл – чильсонъгонъ, олар түтік дыбысының ұзақтығын анықтайды. Корпусы беріктік және әсемдік мақсатта синтетикалық немесе жібек ішектермен оралған. Ауа үрлейтін және бірінші ойын саңылаулары арасында жұқа мембрананы қорғап, аспапты қоршағантері белдіктері бар иілген металл пластина орналасқан. Тэгым диапазоны – шамамен екі октава. 
Сонымен қатар, ауа үрлеу бұрышын өзгерту арқылы, бір қалыпта тұрып бірнеше биіктікті алуға болады. Тэгымды жасалатын материал – бамбуктың бастапқы қалпын көрсету мақсатында жасайды. Тэгым типтес көне аспаптар бүгінге дейін сақталды, бірақ өлшемдері мен баптаулары ерекшеленетін заманауи аспаптар да бар. Бұл айырмашылықтар тэгым жасау үшіг бамбукты кескен кезде аспаптың өлшемдері мен дыбыс қатарын кітаптарда берілген нұсқауларға толық сәйкестендірмей жасау туралы мақсатты білдіреді. Сәйкесінше, берілген өлшемдер – тек бағдар ғана, аспап жасау барысында әрқайсысының нұсқауларын орындау мүмкін емес.
ХІХ ғ. соңында санджо музыкасына арналған тэгымның жаңа түрі –чонъак тэгым деп аталатын сарай музыкасындағы тэгымнан 10 см-дей қысқа санджо тэгым жасалды. Санджо тэгымда ойын саңылауларының ара қашықтығы жақын. Сондай-ақ, санджо тэгымда бабын келтіретін 1 не 2 саңылау, чонъак тэгымда 2 саңылау болады. Бірақ, ауа үрлейтін және ойын саңылаулары үлекнірек, сол арқылы вибратоны күшейтіп, дыбыс биіктігін өзгертуге болады.
Санджо музыкасын тэгым аспабында жеке орындау Оңтүстік Кореяның Мәдени мүлік әкімшілігі тарапынан 1971 жылы «Кореяның маңызды материалдық мәдени мұралар тізісіне енгізілді.`
    },
    images: ['/instruments/world/korea/daegeum/1.png'],
    audio: '/audio/world/korea/daegeum.mp3',
    country: 'korea',
    countryName: countryNames.korea,
    flag: countryFlags.korea
  },
  {
    id: 'korea_haegeum',
    name: { en: `Haegeum`, ru: `Хэгым`, kk: `Хэгым` },
    description: {
      en: `Haegeum is a two-stringed bowed instrument, a Korean violin that is played with a bow with a halté horsehair. The strings are made of thick twisted silk threads and tuned in a clean fifth. They are called “chunghyun” and “yuhyun”, fastened at the bottom of the hull, pass through a wooden bridge “wonsan” and are pulled onto large pegs at the top of a long bamboo rod resembling a neck. The resonator box was originally made of bamboo, but now the material has been replaced with hardwood, such as paulownia. There is a resonant hole on the back of the case.
During the game, the performer sits cross-legged and holds the haegeum vertically, on his left knee. The left hand controls the pitch and produces a vibration, actually there is no neck. With his right hand, the performer leads the bow horizontally between the strings, adjusting the horsehair tension. The artist can also adjust the sound volume by moving the Wonsan bridge, which maintains the tension of two strings. For example, when you need a loud sound or in case of participation in large ensembles, the wonsan can be moved closer to the resonator box. On the other hand, it can be omitted if a softer tone is required.
An important characteristic of the haegeum is that all 8 types of materials are involved in its manufacturing according to the traditional Chinese classification of bai yin instruments.
Haegeum is equally used in ensembles with both stringed and wind instruments. For its unique nasal timbre, the haegeum received its secret name - kkankkvenwengi (onomatopoeic name, like a violin and its kind of “fiddle”). A similar type of stringed bowed instrument can be found in many musical cultures, for example, in China (erhu), South and Central Asia, India, Iran (kemancha), etc.
It is widely believed that the haegeum comes from Central Asia, and more precisely from Mongolia, but it is likely that Iran is its homeland. It is believed that in Korea this instrument dates back to the time of the Koryo Dynasty (918-1392). It is considered as one of the most multifaceted instruments due to the variety of its sound, and not only in terms of pitch: the hegim range contains almost two octaves, but also due to the abundance of expressed emotions.
Therefore, haegeum is used in all types of Korean ensemble and orchestral music, including Korean traditional court music in both styles (tanak, derived from Chinese court music, and hyanak, genuinely Korean, where paired with ajen zither), folklore and shamanistic music and masterly sanjo music (accompanied by a percussion instrument). Modern forms of haegeum are much more reminiscent of the instruments of the Western family of violins.`,
      ru: `Хэгым

двухструнный смычковый инструмент, корейская скрипка, на которой играют смычком с конским волосом хальтэ. Струны сделаны из толстых витых шёлковых нитей и настроены в чистую квинту. Они называются «чунгхён» и «юхён», крепятся на дне корпуса, проходят через деревянный мостик «вонсан» и натягиваются на большие колки наверху длинного бамбукового стержня, напоминающего шею. Резонаторная коробка изначально выполнялась из бамбука, но теперь материал заменён на твёрдые породы древесины, например, павловнию. На задней стороне корпуса имеется резонаторное отверстие.
Во время игры исполнитель сидит, скрестив ноги, и держит хэгым вертикально, на левом колене. Левая рука контролирует высоту звучания и производит вибрацию, собственно грифа нет. Правой рукой исполнитель ведёт смычок горизонтально между струн, регулируя натяжение конского волоса. Исполнитель также может регулировать громкость звучания, передвигая мостик «вонсан», который поддерживает натяжение двух струн. Например, когда необходимо громкое звучание или в случае участия в больших ансамблях, вонсан может быть пододвинут ближе к резонаторной коробке. С другой стороны, его можно не использовать, если требуется более мягкий тембр. 
Важной характеристикой хэгыма является то, что в его изготовлении задействованы все 8 типов материалов по традиционной китайской классификации инструментов ба инь.
Хэгым в равной степени используется в ансамблях как со струнными, так и с духовыми инструментами. За его уникальный гнусавый тембр хэгым получил сокровенное наименование – кканккввенги (звукоподражательное название, подобно скрипке и её разновидности «фиддл»). Подобный тип струнного смычкового инструмента можно встретить во многих музыкальных культурах, например, в Китае (эрху), Южной и Центральной Азии, Индии, в Иране (кеманча) и т.д. 
Распространено мнение, что хэгым происходит из Средней Азии, а точнее из Монголии, но вполне вероятно, что его родиной является Иран. Считается, что в Корее этот инструмент появляется со времён династии Корё (918-1392 гг.). Его рассматривают как один из наиболее многогранных инструментов благодаря разнообразию его звучания, и не только в отношении звуковысотности: диапазон хэгыма вмещает почти две октавы, но и за счёт обилия выражаемых эмоций.
Поэтому хэгым используется во всех видах корейской ансамблевой и оркестровой музыки, включая корейскую традиционную придворную музыку в обоих стилях («танъак», производном от китайской придворной музыки, и «хянъак», подлинно корейском, где используется в паре с цитрой аджэн),фольклорную и шаманскую музыку и виртуозную музыку санджо (в сопровождении ударного инструмента). Современные формы хэгыма гораздо больше напоминают инструменты западного семейства скрипок.`,
      kk: `Хэгым

екі ішекті ыспалы аспап, хальтэ аталатын жылқы қылы тағылған қияқпен ойналатын корей скрипкасы. Ішектер қалың есілген жібек жіптен жасалып, квинта күйіне келтіріледі. Олар «чунгхён» және «юхён» деп аталады. Корпустың түбіне бекітілген ішектер «вонсан» көпірі арқылы өтіп, мойынға ұқсас бамбук өзектің басындағы үлкен құлақтарға тағылады. Резонаторлық қорап бастапқыда бамбуктан жасалса, кейіннен материал қатты ағаш түрлеріне, мысалы, павловнияға өзгертілді. Корпустың артқы жағында резонаторлық саңылау орналасқан.
Ойын барысында орындаушы малдас құрып отырып, хэгымды сол жақ тізеде тік ұстап отырады. Сол қол дыбыс биіктігін бақылап, тербеліске келтіреді, сәйкесінше, мойны жоқ. Орындаушы оң қолмен қияқты ішектер арасымен жүргізіп, қылдың тартылысын реттейді. Сондай-ақ, орындаушы ішектерді тартып тұрған «вонсан» көпірін қозғалту арқылы дыбыс қаттылығын басқара алады. Мысалы, дыбысты күшейту керек болса немесе үлкен ансамбль құрамында өнер көрсетсе, вонсанды резонаторлық қорапқа жақындатуға болады. Екінші жағынан, жұмсақ тембр қажет болса, оны қолданбауға да болады.    
Хэгымның маңызды сипаттарының бірі – аспаптардың дәстүрлі қытайлық классификациясы ба инь бойынша материалдың барлық сегіз түрінің хэгым жасауда қолданылуы.
Хэгым ансамбльдерде ішекті және үрмелі аспаптармен тең дәрежеде қолданылады. Өзінің бірегей мыңқылдақ тембрі үшін хэгым тағы бір – кканккввенги атауына ие болды (скрипка мен оның «фиддл» атты  түрінің дыбысталуына байланысты атау). Осы тектес ішекті-ыспалы аспап түрін көптеген музыкалық мәдениеттерден, мысалы, Қытайдан (эрху), Оңтүстік және Орталық Азиядан, Үндістан мен Ираннан (кеманча), т.б. кездестіруге болады. 
Хэгымның пайда болған жері Орта Азия, нақты Монғолия деген пікір кең тараған, бірақ аспаптың отаны Иран болуы да ықтимал. Кореяда бұл аспап Корё кезеңінде (918-1392 жж.) пайда болған деседі. Хэгым дыбысталуының алуан түрлілігі (диапазоны шамамен екі октава), сондай-ақ, сезімді жеткізе білу қасиеті арқасында көпқырлы аспаптың бірі болып саналады. 
Сондықтан, хэгым корей ансамбльдік және оркестрлік музыкасында, соның ішінде дәстүрлі сарай музыкасының екі стилінде («танъак» – қытай сарай музыкасы негізінде, «ханъак» – аджэн цитрасымен бірге қолданылатын шынайы корей музыкасы), фольклор және шаман музыкасында, виртуоз санджо музыкасында (ұрмалы аспаппен бірге) кең қолданылады. Аспаптың заманауи үлгілері батыстық скрипкалар тобы аспаптарына ұқсас келеді.`
    },
    images: ['/instruments/world/korea/haegeum/1.png'],
    audio: '/audio/world/korea/haegeum.mp3',
    country: 'korea',
    countryName: countryNames.korea,
    flag: countryFlags.korea
  },
  {
    id: 'korea_kayagum',
    name: { en: `KAYAGIM`, ru: `КАЯГЫМ`, kk: `КАЯГЫМ` },
    description: {
      en: `KAYAGIM

Kayagim (gayageum or kayagŭm) is a twelve-stringed Korean zither. Along with komungo, kayagym is one of the most iconic instruments for Korean musical culture. According to the modern European classification, it belongs to the class of long zithers.
Its body is made of a single piece of paulownia wood, and twelve strings of raw silk are stretched over a fixed wooden bridge henchim. By moving the andjok (movable bridges), you can change the kayagym setting. There are several resonant holes in the lower deck: in the center of the deck there is a rectangular hole, and on the edges there is a small round hole and in the shape of a crescent moon, symbolizing the sun and moon, and together – space. All decorative elements and proportions also have a certain symbolic meaning. There are two performance techniques: pressing the string with left hand, as well as various oscillatory movements that produce various effects: shaking, bending the string or vibration.
According to the Samguk Sagi (“Historical Records of the Three States”, 1145), the kayagim allegedly arose in the VI century, and its appearance is associated with the name of King Kasil, the ruler of the kingdom of Kaya. Hence the name “kayagym”, i.e. “String instrument of the Kaya state” or “kayako”, “Kaya strings”.`,
      ru: `КАЯГЫМ

Каягым (gayageum или kayagŭm) – двенадцатиструнная корейская цитра. Наряду с комунго, каягым является одним из наиболее знаковых для корейской музыкальной культуры инструментов. По современной европейской классификации  относится к классу длинных цитр.
Его корпус изготавливается из цельного куска дерева павловнии, а двенадцать струн из шёлка-сырца натянуты на зафиксированный деревянный мостик хёнчим. Передвигая анджок (подвижные мосты), можно изменять настройку каягыма. В нижней деке имеется несколько резонаторных отверстий: в центре деки – прямоугольное, а по краям – небольшое круглое отверстие и в форме полумесяца, символизирующие солнце и луну, а вместе – космос. Все декоративные элементы и пропорции также имеют определенный символический смысл. Существует две техники исполнения: нажатие на струну левой рукой, а также различные колебательные движения, производящие различные эффекты: встряхивание, изгибание струны или вибрация.
В соответствии с Самгук Саги («Исторические записи Трёх государств», 1145 г.), каягым предположительно возник в VI в., и его появление связывают с именем короля Касиля, правителя королевства Кая. Отсюда и название «каягым», т.е. «струнный инструмент государства Кая» или «каяко», «струны Кая».`,
      kk: `КАЯГЫМ

Каягым – корей халқының 12 ішекті шертпелі аспабы. Комунго аспабымен қатар, корей музыкалық мәдениетінде біршама маңызды аспаптар қатарына жатады. Заманауи еуропалық классификация бойынша, ұзын цитралар тобына жатады.  
Каягым тұтас павловния ағашынан жасалып, ал оның ішектері жібектен хёнчим деп аталатын бекітілген ағаш көпірге тағылады. Қозғалмалы тиектерді (анджок) жылжыту арқылы каягымның дыбысы реттеледі. Деканың төменгі жағында бірнеше резонаторлық саңылаулар жасалған: ортада – тікбұрышты формада, шеттерінде – шағын домалақ және жарты ай формасындағылар күн мен айды бейнелейді, бәрі бірге ғарышты білдіреді. Барлық декоративтік элементтер мен өлшемдер белгілі бір мағынаға ие. Аспапта ойнаудың екі әдісі бар: ішекті сол қолмен басу және түрлі тербеліс қимылдары – соғу, ішекті ию және тербеліс.
«Самгук Саги» («Үш мемлекеттің тарихи жазбалары», 1145 ж.) кітабына сәйкес каягым шамамен VI ғ. пайда болған және оның жасалуын Кая мемлекетінің патшасы Касильдің есімімен байланыстырады. Осыдан аспаптың атауы да шыққан, яғни, каягым – «Кая мемлекетінің ішекті аспабы», немесе «каяко», «Кая ішектері».`
    },
    images: ['/instruments/world/korea/kayagum/1.png'],
    audio: '/audio/world/korea/kayagum.mp3',
    country: 'korea',
    countryName: countryNames.korea,
    flag: countryFlags.korea
  },
  {
    id: 'korea_kkwengwari',
    name: { en: `Kkwengwari`, ru: `Кквэнгвари`, kk: `Квенгвари` },
    description: {
      en: `Kkwengwari is a small brass puck gong used in Korean traditional music. The sound is made with a wooden hammer. The sound is high, metallic, goes into a rumble if the blow is very strong.
Kkwengwari is mainly used in Korean rural non'ak music, in the new urban genre of samulnori, and in shamanistic music.
The name of the instrument is supposedly an onomatopoeia to the sound produced by the instrument, “kkven-kkven”. Another name for the instrument is sve.`,
      ru: `Кквэнгвари

маленький шайбообразный гонг из латуни, используемый в корейской традиционной музыке. Звук производится деревянным молоточком. Звук высокий, металлический, переходит в грохот, если удар очень сильный.
Кквэнгвари в основном используется в корейской сельской музыке нонъак, в новом городском жанре самульнори и в шаманской музыке.
Название инструмента предположительно является ономатопеей звуку, производимому инструментом, «кквэн-кквэн». Другое название инструмента – све.`,
      kk: `Квенгвари

жезден жасалған шайба тәріздес шағын гонг, корей дәстүрлі музыкасында қолданылады.
Дыбыс ағаш таяқша арқылы алынады. Дыбысы жоғары, металл, қатты соқса дыбысы гүрсілге ауысады. 
Квенгвари, негізінен, нонъак – ауылдық корей музыкасында, самульнори – жаңа қалалық жанрда және шаман музыкасында қолданылады. 
Аспаптың атауы дыбысқа ономатопея (аспаптың дыбысталуына сәйкес атау) болуы мүмкін.аспаптың екінші атауы – све.`
    },
    images: ['/instruments/world/korea/kkwengwari/1.png'],
    audio: '/audio/world/korea/kkwengwari.mp3',
    country: 'korea',
    countryName: countryNames.korea,
    flag: countryFlags.korea
  },
  {
    id: 'korea_piri',
    name: { en: `Piri`, ru: `Пири`, kk: `Пири` },
    description: {
      en: `Piri is a double-reed Korean instrument used in both folk and classical music of Korea. It is made of bamboo. Its large reed and cylindrical hole makes its sound softer than many other oboes.
Typical piri has 8 sound holes on the bamboo body. 7 of them are located in front, and one on the back for the thumb.
There are 4 types of piri:
5. Hyan Piri
6. Se Piri
7. Dan Piri
8. Dae Piri
There are different types of piri, because each one is suitable for a different type of music and use. Hyan Piri is the longest and most common of all. Due to its loud and nasal tone, it usually plays the main tune in the ensemble. Se piri is smaller, thinner and much quieter. In addition, due to its quiet tone, it is used along with voices or soft stringed instruments. Dan piri is wider and looks like a Chinese instrument guan. In addition, de piri is a modernized piri with keys and a bell, similar to the western oboe.
Piri is believed to have been introduced to Korea from a country bordering western China before the Goguryo period. Piri was also known as the gagwan, and it comes from the state of Kucha (the ancient Buddhist kingdom). During the reign of King Yejong of the Koryo Dynasty, another cylindrical instrument with double reeds was imported from the Sun Dynasty, and to eliminate the ambiguity, the first was named hyan piri and the last dan piri.
The equivalent of piri in China is guan, and its counterpart in Japan is hichiriki.`,
      ru: `Пири

это корейский инструмент с двойным тростником, используемый как в народной, так и в классической (судовой музыке) Кореи. Он изготовлен из бамбука. Его большой тростник и цилиндрическое отверстие делает его звук более мягким, чем у многих других видов гобоя.
У типичных пири есть 8 игровых отверстий на корпусе бамбука. 7 из них расположены спереди, а один – на спине для большого пальца.
Существуют 4 типа пири:
	•	Хян пири
	•	Сэ пири
	•	Дан пири
	•	Дэ пири
Существуют разные типы пири, потому что каждый из них подходит для другого типа музыки и использования. Хян пири является самым длинным и наиболее распространённым из всех. Из-за его громкого и назального тона он обычно играет главную мелодию в ансамбле. Сэ пири меньше, тоньше и намного тише. Кроме того, из-за его тихого тона он используется вместе с голосами или мягкими струнными инструментами. Дан пири шире и похож на китайский инструмент гуань. Кроме того, дэ пири – это модернизированный пири с ключами и колокольчиком, похожий на западный гобой.
Предполагается, что пири был введён в Корею из страны, граничащей с западом Китая до периода Когурё. Пири также был известен как гагван, и он происходит из государства Куча (древнее буддийское королевство). Во время правления короля Йеджонга династии Корё, другой цилиндрический инструмент с двойным тростником был импортирован из династии Сунь, и для устранения неоднозначности первый был назван хян пири и последний дан пири.   
Эквивалент пири в Китае – гуань, а его аналог в Японии – хичирики.`,
      kk: `Пири

қос түтікті үрмелі аспап, Кореяның халық және классикалық музыкасында қатар қолданылады. Аспап бамбуктан жасалады. Оның үлкен түтігі мен цилиндрлік саңылауы басқа гобойлармен салыстырғанда оның дыбысын жұмсақ етеді.
Қарапайым пири аспабында 8 ойын саңылауы болады. Олардың 7-еуі алдыңғы жағында, 1-еуі – арқасында орналасып, бас бармақпен ойналады. 
Пиридің 4 түрі бар: 
	•	Хян пири
	•	Сэ пири
	•	Дан пири
	•	Дэ пири
Аспаптың бірнеше түрі бар, себебі олардың әрқайсысы музыка мен қолданыстың белгілі бір түріне сай келеді. Хян пири – ең ұзыны және ең кең таралған түрі болып табылады. Оның қатты және мұрын жолды дыбысы арқасында ансамбльде негізгі әуендерді орындайды. Сэ пири шағын, жіңішке және даусы әлдеқайда әлсіз. Үнінің жай болуы себебінен дауыспен немесе үні жұмсақ ішекті аспаптармен бірге қолданылады. Дан пири жуандау және қытайдың гуань аспабына ұқсас келеді. Дэ пири – заманауи үлгідегі кілттер мен қоңыраушалар бекітілген, батыстық гобойларға ұқсас пири. 
Пири Кореяға Когурё кезеңінде Қытайдың батысымен шекараласқан мемлекеттен келген деген болжам бар. Ол, сондай-ақ, гагван деп аталып, Куча мемлекетінде (ежелгі будда патшалығы) қалыптасқан делінеді. Корё династиясында Йеджонг патша билігі тұсында Сунь әулетінен тағы бір қос түтікті аспап әкелініп, ерекшеліктерін айқындау мақсатында алғашқысы хян пири, соңғысы дан пири деп аталды. 
Пиридің Қытайдағы нұсқасы – гуань, ал Жапониядағы аналогі – хичирики.`
    },
    images: ['/instruments/world/korea/piri/1.png'],
    audio: '/audio/world/korea/piri.mp3',
    country: 'korea',
    countryName: countryNames.korea,
    flag: countryFlags.korea
  },
  {
    id: 'korea_tanso',
    name: { en: `Tanso`, ru: `Тансо`, kk: `Тансо` },
    description: {
      en: `Tanso is a jagged longitudinal bamboo flute in Korean folk music. Traditionally, it was made from bamboo, but since the 20th century, it began to be manufactured also from plastic.
The instrument comes from Chinese Xiao and is used for educational purposes in Korean elementary school, just like a recorder in Western countries. The flute has 5 holes, one of which is located at its very end and is designed for the thumb. The flute's playing range is 2 octaves, going from low to high sol. Low sounds are produced due to simple blowing, while high sounds come from different blowing forces.
In the name of the instrument, the word “tan” means “short,” and “so” refers to a jagged vertical bamboo flute.`,
      ru: `Тансо

зубчатая продольная бамбуковая флейта в корейской народной музыке. Традиционно её делали из бамбука, но начиная с ХХ века также стали изготавливать из пластика.
Инструмент происходит от китайского сяо и используется для образоватеьных целей в корейской начальной школе, ровно как блокфлейта в западных странах. Флейта имеет 5 отверстий, одно из которых находится на самом её конце и предназначен для большого пальца. Диапазон игры флейты – 2 октавы, идущего от низкой до высокой соль. Низкие звуки воспроизводятся благодаря простому выдуванию, тогда как высокие появляются за счёт разной силы выдувания.
В названии инструмента слово «тан» означает «короткий», а «со» относится к зубчатой вертикальной бамбуковой флейте.`,
      kk: `Тансо

корей халық музыкасында тісшелі ұзын сыбызғы. Дәстүрлі түрде бамбуктан жасалатын, бірақ ХХ ғ. бастап пластиктан жасала бастады.
Аспап қытайлық сяо аспабынан бастау алады және корей бастауыш мектептерінде білім беру мақсатында қолданылады. Флейтаның 5 саңылауы бар, бірі ең соңында орналасып, бас бармаққа арналған. Аспап диапазоны 2 октава, төменгі до-дан жоғарғы соль-ға дейін. Төменгі дыбыстар жай ауа үрлеу арқылы, ал жоғары дыбыстар үрлеу күшінің түрлі болуына қарай алынады. 
Аспаптың атауындағы «тан» – «қысқа» мағынасын берсе, «со» бамбуктан жасалған тісшелі тік флейтаға қатысты.`
    },
    images: ['/instruments/world/korea/tanso/1.png'],
    audio: '/audio/world/korea/tanso.mp3',
    country: 'korea',
    countryName: countryNames.korea,
    flag: countryFlags.korea
  },
  {
    id: 'korea_tkhepkhenso',
    name: { en: `Tkhepkhenso`, ru: `Тхэпхенсо`, kk: `Тхэпхенсо` },
    description: {
      en: `Tkhepkhenso

is a pipe with a metal bell. This instrument came from the tradition of street or even field walks. Koreans entertained in the villages, dancing to the accompaniment of drums, they were always accompanied by the loud, piercing sound of tkhepkhenso. Folk melodies are usually bright, intricate, joyful. There is another direction in the development of tkhepkhenso technique: more complex melodies with author's improvisations. This style was used in court music.
Tkhepkhenso (the “great tool for blowing the wind”, also called hodzhok, nallari or senap) is a double-reed Korean wind instrument in the oboe family, probably descended from the Persian zurn and closely associated with Chinese suna. It has a conical wooden body made of lemon tree (yuzhi), Chinese date (marmalade), daechu (jujuba) or yellow tree, mulberry tree with a metal mouthpiece and a cup-shaped metal bell. It originated during the Koryo period (918-1392).
The loud and piercing sound that he made limited him mainly to Korean folk music and totalitarian groups, the latter being performed for the royal family in a genre known as dechvita. However, it has also been used in other genres, including Confucian, Buddhist and shamanistic ritual music and neo-traditional/fusion music.
On the front there are 7 sound holes, of which only the top 5 are used, and 1 on the back, which covers the finger of the left hand (the exception is dechvita, where all 8 holes are played). Various types of wood are used to make the instrument, including jujube wood, citrus wood, yellow mulberry and ebony. Today, manufacturing is standardized, and most of them are imported into China, although it can be assumed that in the past there have been significant changes in the manufacture of instruments. More expensive instruments can be completely divided into cleaning or replacement, while cheaper instruments can only be removed with a bell or bookmark.`,
      ru: `Тхэпхенсо

представляет собой трубу с металлическим раструбом. Этот инструмент пришёл из традиции уличных или даже полевых гуляний. Корейцы устраивали игрища в деревнях, танцуя под аккомпанемент барабанов, их всегда сопровождал громкий пронзительный звук тхэпхэнсо. Народные мелодии обычно яркие, затейливые, радостные. Есть и другое направление развития техники тхэпхэнсо: более сложные мелодии с авторскими импровизациями. Такой стиль использовался в придворной музыке.
Тхэпхенсо («большой инструмент дуновения ветра», также называемый ходжок, наллари или сэнап) – это корейский духовой инструмент с двойным тростником в семье гобоя, вероятно, произошедший от персидского зурна и тесно связана с китайской суной. Он имеет коническое деревянное тело, выполненное из лимонного дерева (южди), китайский финик (мармелад), даэчу (ююба) или желтого дерева, тутового дерева с металлическим мундштуком и чашеобразным металлическим колокольчиком. Он возник во время периода Корё (918-1392). 
Громкий и пронзительный звук, который он произвел, ограничил его главным образом, корейской народной музыкой и тоталитарными группами, последний исполнялся для королевской семьи в жанре, известном как дэчвита. Он, однако, также использовался и в других жанрах, в том числе конфуцианской, буддийской и шаманской ритуальной музыке и нео-традиционной / фьюжн-музыке.
На передней части имеется 7 игровых отверстий, из которых обычно используются только верхние 5, а 1 сзади, который покрывает палец левой руки (исключением является дэчвита, где все 8 отверстий воспроизводятся). Для изготовления инструмента используются различные виды древесины, в том числе, дерево ююба, цитрусовая древесина, желтая шелковица и черное дерево. Сегодня изготовление стандартизировано, и большинство из них импортируется в Китай, хотя можно предположить, что в прошлом были значительные изменения в изготовлении инструмента. Более дорогие инструменты можно разделить полностью на чистку или замену, в то время как с более дешёвых инструментов можно снять только колокол или закладку.`,
      kk: `Тхэпхенсо

металдан жасалған төменгі жағы кеңейген үрмелі аспап. Аспап көше орындаушыларынан немесе далалық қыдырыстардан келген. Корейлер ауылдарда үлкен мерекелік ойындар ұйымдастырып, барабанның ырғағына билегенде, оларды тхэпхенсо аспабының қатты өткір дыбысы сүйемелдейтін. Әдетте, халық әуендері көңілді, назды болатын. Тхэпхенсо техникасы дамуының өзге де бағыты бар: авторлық импровизациялары бар күрделі әуендер. Мұндай стиль сарай музыкасында жиі қолданылды.
Тхэпхенсо («ауа үрлейтін үлкен аспап», ходжок, наллари немесе сэнап деп те аталады) – корей халқының қос түтікті үрмелі аспабы, парсының зурна және қытайдың суна аспаптарымен қалыптасу тарихы ұқсас. Корпусы конус тәріздес етіп лимон ағашынан (юджи), қытайлық финик (мармелад), даэчу (ююба немесе қытай құрмасы) немесе сары, тұт ағаштарынан жасалды, сонымен қатар, оның металл мүштігі және металл қоңыраушасы болды. Аспап Корё кезеңі (918-1392) тұсында қалыптасқан.
Аспаптың қатты әрі ащы даусы оның қолданылуын дәстүрлі корей музыкасы мен тоталитарлық топтар (дэчвита жанрында патша әулетіне арнайы орындау) алдында ойнаумен шектеді. Сондай-ақ, аспап басқа да жанрларда, және де конфуцийлік, буддалық пен шамандардың ғұрыптық музыкасында, нео-дәстүрлі / фьюжн-музыкада қолданылады.
Алдыңғы жағында 7 ойын саңылауы бар, олардың тек жоғарғы 5-еуі ғана ойынға қолданылады, 1-еуі артқы жағында – сол қол саусағымен ойналады (8 ойын саңылауының барлығы ойналатын дэчвитаны қоспағанда). Аспап жасауға ағаштың көптеген түрлері, соның ішінде, ююба (қытай құрмасы) ағашы, цитрус ағашы, сары тұт ағашы және қара ағаштар қолданылады. Қазіргі таңда аспап жасау өндірісі жолға қойылған, аспаптың басым бөлігі Қытайға жөнелтіледі. Қымбат аспап түрлерін тазалауға немесе ауыстыру мақсатында толық бөлшектеуге, ал арзан түрлерінен тек қоңырауын немесе белгісін ажыратуға болады.`
    },
    images: ['/instruments/world/korea/tkhepkhenso/1.png'],
    audio: '/audio/world/korea/tkhepkhenso.mp3',
    country: 'korea',
    countryName: countryNames.korea,
    flag: countryFlags.korea
  },
  {
    id: 'laos_khene',
    name: { en: `Khene`, ru: `Кхэн (лаос.`, kk: `Кхэн (лаос. босаңсу)` },
    description: {
      en: `Khene (Lao, lit. – rest, relaxation) is a Lao musical instrument class of aerophones; a kind of labial organ. 
Khene is a multi-barrel pipe, a “manual organ” among thai, miao and other peoples of Indochina. Like the Chinese “shen”, the pipes of the pipes are inserted into the resonator, while in Tai and Thai they pass through the resonator.
Bamboo tubes of different lengths with metal tongues are arranged in 2 parallel rows in a small wooden case with an inflatable hole. Khene of 4 register varieties is known, having 6, 10, 16 (or 14) and 18 tubes with a length of 80 cm to 3 m. The main view consists of 16 (14) tubes of a length of 1 m; 2 octave range. Khene is a polyphonic instrument; the tradition of the game is mostly male. It is used as a solo, accompanying singing, ensemble (consisting of several khene) and orchestral instrument. Participates in festive processions, phi shamanistic ceremonies (usually with a drum), spring games (function of a ritual courtship instrument). In the past, the performers on this instrument (mo khen) wandered through the villages, accompanying the singers. Khene is the only Lao traditional instrument to have a notation (mnemonic) in the form of pipe icons. Music for khene exists in 5 frets, in each of them there is a set of standard game formulas that are memorized by performers.
Khene is a symbol of Laos’s music.
Along with folk games, the wind instrument khene is an integral part of the New Year holidays of the Mong people, inhabiting the highlands of North-West Vietnam. It helps the Monges express feelings and emotions for their soul mates, native village and nature. Khene has a long history and clearly reflects the cultural characteristics of the Mong people. Around it there are many stories about the unity and cohesion of this nation.
Since ancient times, wind musical instrument khene has become an integral part of the spiritual life of the Mong people. Monges consider khene as a treasure of their nationality. According to them, the wind instrument khene is a bridge connecting a person with higher powers. Despite the fact that the Monges inhabit different parts of the country, they still retain the khene musical instrument.
At present, the mongs play khene at cultural events. At the same time, the performers also dance. Among the Monges, a lot of dances with khene are popular and each of them has its own meaning. Also, the Monges play khene to congratulate each other or invite friends for a spring walk, or go to the market. Along with folk games, khene is an integral part of the spring holidays of the Mong people. According to tradition, young men should be able to play khene and perform dances with it.`,
      ru: `Кхэн (лаос.

отдохновение, расслабление), лаосский музыкальный инструмент класса аэрофонов; разновидность губного органа.
Кхэн – многоствольная свирель, «ручной орган» у тхай, мяо и других народов Индокитая. Подобно китайскому «шэну» трубки свирелей вставлены в резонатор, а у тай и тхай они проходят сквозь резонатор.
Бамбуковые трубки разной длины с металлическими язычками расположены 2 параллельными рядами в маленьком деревянном корпусе с вдувным отверстием. Известны кхэн 4 регистровых разновидностей, имеющие 6, 10, 16 (или 14) и 18 трубок длиной от 80 см до 3 м. Основной вид состоит из 16 (14) трубок длиной до 1 м; диапазон в 2 октавы. Кхэн – инструмент многоголосный, традиция игры преимущественно мужская. Используется как сольный, сопровождающий пение, ансамблевый (в составе нескольких кхэн) и оркестровый инструмент. Участвует в праздничных шествиях, шаманских церемониях пхи (обычно вместе с барабаном), весенних игрищах (функция ритуального инструмента ухаживания). В прошлом исполнители на этом инструменте (мо кхэн) странствовали по деревням, сопровождая певцов. Кхэн – единственный из лаосских традиционных инструментов, имеющий нотацию (мнемоническую) в виде значков на трубках. Музыка для кхэн существует в 5 ладах, в каждом из них – набор стандартных игровых формул, которые заучиваются исполнителями. 
Кхэн – символ музыки Лаоса.
Наряду с народными играми, духовой музыкальный инструмент «кхен» является неотъемлемой частью новогодних праздников народности Монг, населяющей высокогорные районы Северо-Запада Вьетнама. Он помогает монгам выражать чувства и эмоции к своим вторым половинкам, родному селению и природе. Кхен имеет давнюю историю и ярко отражает культурные особенности народности Монг. Вокруг него существует множество историй об единстве и сплочённости этой народности. 
С давних времён духовой музыкальный инструмент кхен стал неотъемлемой частью духовной жизни народности Монг. Монги рассматривают кхен как сокровище своей народности. По их представлению, духовой музыкальный инструмент кхен – это мост, соединяющий человека с высшими силами. Несмотря на то, что монги населяют разные районы страны, они до сих пор сохраняют духовой музыкальный инструмент кхен.
В настоящее время монги играют на кхене на культурно-массовых мероприятиях. При этом исполнители также пританцовывают. Среди монгов популярно множество танцев с кхеном и каждый из них имеет своё значение. Также монги играют на кхене, чтобы поздравить друг друга или пригласить друзей на весеннюю прогулку, или пойти на рынок. Наряду с народными играми, кхен является неотъемлемой частью весенних праздников народности Монг. По традиции, юноши должны уметь играть на кхене и исполнять танцы с ним.`,
      kk: `Кхэн (лаос. босаңсу)

лаос музыкалық аспабы, аэрофондар тобы, органның бір түрі.
Кхэн – көпдіңгекті сыбызғы, тхай, мяо және басқа да Үнді-Қытай түбегіндегі халықтардың «қол органы». Қытайдың «шэн» аспабы секілді резонаторы болады, шэнде түтікшелер сол резонаторға орнат ылған, ал тай және тхайларда олар резонатор арқылы өтеді. 
Металл тілшелі түрлі ұзындықтағы бамбук түтікшелер ауа үрлейтін саңылауы бар ағаш корпуста 2 параллель қатар болып орналасады. Аспаптың 4 регистрлік түрлері белгілі, олар ұзындығы 80 см – 3 м аралығында болатын 6,10,16 (немесе 14) түтіктерден тұрады. Негізгі түрі ұзындығы 1 м  болатын 16 (14) түтіктен құралған; диапазоны 2 октавалық кхэн – көпдауысты аспап, негізінен ерлер ойнайды. Жеке орындауда, әнге сүйемел ретінде, ансамбльдік (бірнеше кхэн құрамында) және оркестрлік аспап ретінде қолданылады. Мерекелік шерулерге, пхи шамандық рәсіміне (барабанмен бірге), көктемгі мерекелік ойындарға (көңіл көтеру аспабы ретінде) қатысады. Ертеректе бұл аспапта орындаушылар (мо кхэн) әншілерге ілесіп, ауылдарды аралап, өнер көрсеткен.
Кхэн – лаос дәстүрлі аспаптарының ішіндегі түтіктегі арнайы белгілер түріндегі ноталары (мнемоникалық) бар жалғыз аспап болып табылады. Кхэн музыкасының 5 мақамы бар, оның әрқайсысы – орындаушылар жаттайтын стандатты ойын формулалар. 
Кхэн – Лаос музыкасының символы.
Халық ойындарымен қатар, «кхен» музыкалық аспабы Вьетнамның биік таулы Солтүстік-Батыс аудандарын мекендейтін монг халқының жаңа жылдық мерекелерінің ажырамас бөлігі болып табылады. Ол монгтарға өздерінің сезімдерін білдіруге көмектеседі. «Кхеннің» тарихы тереңде және монг халқының мәдени ерекшеліктерін анық көрсетеді. Аспап туралы аталған халықты біріктіру, жұмылдыруға қатысты аңыздар көп кездеседі.
«Кхен» үрмелі музыкалық аспабы ерте кезден бастап монг халқының рухани өмірінің ажырамас бөлшегіне айналды. Олар аспапты өздерінің ұлттық құндылығындай қастерлейді. Халықтың көзқарасы бойынша, «кхен» аспабы – адамдарды жоғарғы күштермен байланыстырушы көпір. Монгтар елдің әр өңірінде таралса да, әлі күнге дейін аталған үрмелі аспапты сақтап келеді. 
Бүгінде монгтар «кхенде» мәдени-көпшілік шараларда жиі орындайды. Ойын барысында музыкант билей де алады. Монгтар арасында «кхенмен» билеудің көптеген түрлері бар және олардың әрқайсысының өз мәні бар. Сондай-ақ, монгтар «кхенде» ойнау арқылы бір-бірін құттықтай алады немесе достарын көктемгі серуенге, базарға баруға  шақыра алады. Ұлттық ойындарымен қатар, кхен монг халқының көктемгі мерекелерінің ажырамас бөлігі болып табылады. Дәстүр бойынша, жігіттер аспапта ойнап жүріп билей білуге міндетті.`
    },
    images: ['/instruments/world/laos/khene/1.png'],
    audio: '/audio/world/laos/khene.mp3',
    country: 'laos',
    countryName: countryNames.laos,
    flag: countryFlags.laos
  },
  {
    id: 'latvia_kokles',
    name: { en: `Kokles or kokle`, ru: `Коклес или кокле`, kk: `Коклес немесе кокле` },
    description: {
      en: `Kokles or kokle is a Latvian folk stringed-plucked musical instrument, resembling the Lithuanian kankles, the Estonian kannel, the Karelian-Finnish kantele and the Russian wing-shaped gusli.
Kokles has a hollow trapezoidal body with a thin wooden deck. Wooden pegs are mounted on a narrow metal rod to which strings are attached. The strings of this instrument can be made from the small intestines of animals, plant fibers, as well as metal ones from steel or brass. Traditionally, the instrument had 6-9 strings, later their number became more than ten. The bottom string usually has the role of a bourdon – it sounds all the time. In modern kokles, the number of strings reaches twenty.
The sound of kokles depends on the type of wood from which it is made: linden or birch is used for an unprofessional instrument, only maple for an academic concert.
The musician usually plays the instrument while sitting, fingering the necessary strings with his right hand, muffling unnecessary with his left. When playing, kokles is put on the table, less often – on the knees, while hanging it is hung on the neck.
Initially, men played on it, later it became a female instrument, received a new life in a concert, including an electric version. But you can hear how kokle sounds in men's hands today. For example, ethnomusicologist Valdis Muktupavels improvises on the kokle.
Kokle is a symbol of the folk musical heritage and singing spirit of the people. The tradition of playing the kokle has more than two thousand years. The oldest of the archaeological finds associated with this musical instrument dates back to the 13th century, written evidence dates back to the beginning of the 17th century, and the oldest instrument is the so-called “kokles kurshei”, an exhibit of the Latvian National History Museum, dated 1710.
At the end of the 19th century, the traditions of playing the kokle were preserved only in certain places of Kurzeme and Latgale. In Kurzeme, dance melodies were performed on the kokle and accompanied folk songs. In Latgale, the kokle game was accompanied not only dancing, but also spiritual singing. Interest in folklore in the 20th century did not allow this ethnographic instrument to go into oblivion. Moreover, the musicians adapted it to our time, finding a creative approach to the kokle.
In mythology, kokles is associated with the celestial sphere and occupies the highest place in the hierarchy of musical instruments, says Valdis Muktupavels, professor of the University of Latvia, ethnomusicologist.
“This instrument is called zelta kokles (“golden kokle”) in folk songs. This is very high rating. Another, no less important point – when the scriptures were translated into Latvian at the end of the 18th century, the Bible translator Ernst Gluck used Latvian names. [...] It was an instrument in the hands of priests, therefore it was not without reason that they called it dieva kokles – divine kokle”, – Muktupavels explains.
Kokle is a simple stringed musical instrument. In the traditional version, it has from 5 to 10 strings (that is, the number of strings corresponds to the number of fingers on the hands) and an incomplete dozen tones. But it is distinguished by its special sound, which is not suppressed by a support directly connected with the resonator. Therefore, kokle strings are called free, and the extracted sounds are called the melody of the soul.
Valdis Muktupavels summarized all of his knowledge of kokle and of two styles of performing music – Suit and Latgalian in the monograph “Kokle and playing the kokle in Latvia”, published in Latvian and simultaneously in English, which also includes a CD with kokle music .`,
      ru: `Коклес или кокле

латышский народный струнно-щипковый музыкальный инструмент, имеет сходство с литовским канклесом, эстонским каннелем, карело-финским кантеле и русскими крыловидными гуслями.
Коклес имеет полый трапециевидный корпус с тонкой деревянной декой. Деревянные колки устанавливаются на узкий металлический стержень, к которому крепятся струны. Струны этого инструмента могут быть изготовлены из тонких кишок животных, растительных волокон, а также металлическими – из стали или латуни. Традиционно в инструменте было 6-9 струн, позже их количество стало больше десяти. У нижней струны обычно роль бурдона – она звучит всё время. У современных коклес число струн достигает двадцати.
Звучание коклес зависит от породы дерева из которого его изготавливают: для непрофессионального инструмента используется липа или берёза, для академического концертного – только клён.
Музыкант обычно играет на инструменте сидя, перебирая нужные струны правой рукой, приглушая ненужные – левой. При игре коклес кладут на стол, реже – на колени, во время движения подвешивают на шею.
Изначально на нём играли мужчины, позже он стал женским инструментом, получил новую жизнь в концертной, в том числе электрической версии. Но услышать как звучит кокле в мужских руках можно и в наши дни. Например, на кокле импровизирует этномузыковед Валдис Муктупавелс. 
Кокле – символ народного музыкального наследия и певческого духа народа. Традиция игры на кокле насчитывает более двух тысяч лет. Самая древняя из археологических находок, связанных с этим музыкальным инструментом, относится к XIII веку, письменнные свидетельства – к началу XVII века, а самый старый инструмент – так называемый «коклес куршей», экспонат Латвийского Национального исторического музея, датирован 1710 годом.
В конце XIХ века традиции игры на кокле сохранились лишь в отдельных местах Курземе и Латгалии. В Курземе на кокле исполняли танцевальные мелодии и аккомпанировали народным песням. В Латгалии игрой на кокле сопровождали не только танцы, но и духовное пение. Интерес к фольклору в ХХ веке не дал этому этнографическому инструменту уйти в забвение. Мало того, музыканты приспособили его к нашему времени, найдя к кокле творческий подход.
В мифологии коклес связаны с небесной сферой и занимают высшее место в иерархии музыкальных инструментов, говорит профессор Латвийского университета, этномузыковед Валдис Муктупавелс.
«Этот инструмент в народных песнях именуется zelta kokles («золотые кокле»). Очень высокая оценка. Другой, не менее важный момент – когда священные писания были переведены на латышский язык в конце XVIII века, переводчик библии Эрнст Глюк использовал латышские названия. [...] Это был инструмент в руках священников, поэтому недаром его называли dieva kokles – божественное кокле», - поясняет Муктупавелс.
Кокле – простой струнно-щипковый музыкальный инструмент. В традиционном варианте имеет от 5 до 10 струн (то есть число струн соответствует числу пальцев на руках) и неполную дюжину тонов. Но отличает его особое звучание, которое не глушит опора, напрямую связанная с резонатором. Потому струны кокле называются свободными, а извлекаемые звуки – мелодией души.
Все свои знания о кокле и о двух стилях исполнения музыки – суйтском и латгальском, Валдис Муктупавелс обобщил в монографии «Кокле и игра на кокле в Латвии», изданной на латышском и параллельно на английском языках, к которой прилагается и компакт-диск с музыкой кокле.`,
      kk: `Коклес немесе кокле

латыштардың ұлттық ішекті-шертпелі музыкалық аспабы. Литваның канклес, эстондық каннель, финн-карель кантеле, орыстың қанат тәрізді гусли аспаптарына ұқсас.
Коклестың іші қуыс трапеция тәрізді корпусы жұқа ағаш декамен жабылған. Ағаш құлақтар ішектер тартылатын жіңішке металл білікке бекітіледі. Аспаптың ішектері малдың ішегінен, өсімдік талшықтарынан, сондай-ақ, металдан – болат пен жезден жасалуы мүмкін. Бастапқыда аспаптың 6-9 ішегі болса, кейіннен олардың саны 10-нан астам болды. Төменгі ішек бурдон қызметін атқарды – әрдайым дыбысталады. Заманауи коклесте ішектер саны 20-ға жетеді. 
Аспаптың дыбысталуы жасалатын ағаш түріне байланысты: кәсіби емес бағыттағы аспап жасауға жөке мен қайың, ал академиялық концерттік коклес үшін – тек үйеңкі пайдаланылады. 
Әдетте, музыкант аспапта отырған қалыпта, оң қолмен қажет ішектерді тартып, сол қолмен қажетсізін басып ойнайды. Ойын барысында коклесты үстелге, сирек жағдайда тізеге, қозғалыс барысында мойынға асынып жүреді.
Бастапқыда бұл аспапта ерлер ойнаған, кейіннен әйелдер де ойнап, концерттік және электрлік нұсқалары жасалып, қайта жаңғырды. Аспаптың ерлер қолында дыбысталуын этномузыкатанушы Валдис Муктупавелс ойынынан көруге болады. 
Кокле – халықтың музыкалық мұрасының және оның әншілік рухының нышаны. Аспапта ойнау дәстүрі екі мыңнан астам жылды қамтиды. Бұл аспапқа қатысты археологиялық материалдардың ең көнесі ХІІІ ғ., жазба деректер ХVІІ ғ. басы, ал Латвия Ұлттық тарих музейінде сақталған ең көне аспап – «коклес куршей» 1710 ж. мерзімделеді. 
ХІХ ғ. соңында кокледе ойнау дәстүрі Курземе мен Латгалияның кейбір өңірлерінде сақталған болатын. Курземеде аспаппен бидің ырғақты әуендерін ойнап, халық әндерін сүйемелдеді. Латгалияда бимен қатар, діни әндерді де сүйемелдеген. ХХ ғ. фольклорға деген қызығушылық аспаптың ұмытылуына жол бермеді. Музыканттар аспапты заманауи талаптарға сай жетілдірді. 
Латвия университетінің профессоры, этномузыкатанушы В. Муктупавелстың айтуы бойынша, коклес мифологияда аспан әлемімен байланысты және музыкалық аспаптар иерархиясында жоғары орын алады.
«Халық әндерінде бұл аспап «алтын кокле» деп аталады. Өте жоғары бағалайды. Тағы бір маңызды жайт – ХVІІІ ғ. қасиетті жазбалар латыш тіліне аударылғанда, Библияны тәржімалаған Эрнст Глюк латыш атауларын қолданған. [...] Бұл дін қызметшісі қолында болған аспап, сол себепті dieva kokles – құдайшыл (ғажап) аспап аталған», – деп түсіндіреді Муктупавелс.
Кокле – қарапайым ішекті-шертпелі музыкалық аспап. Дәстүрлі аспапта 5-10 ішек болады (яғни, ішектер саны саусақ санына сәйкес келеді). Бірақ ерекшелігі – оның айрықша дыбысында, резонатормен тікелей байланысатын тіреуіш оны бәсеңдетпейді. Сондықтан ішектер – еркін, ал дыбыстары – жанның дыбысы деп аталады. 
Кокле және орындаудың екі нұсқасы: суйт және латгаль бойынша бар білімін В. Муктупавелс латыш және ағылшын тілдерінде жарық көрген «Кокле и игра на кокле в Латвии» монографиясында жинақтаған.`
    },
    images: ['/instruments/world/latvia/kokles/1.png'],
    audio: '/audio/world/latvia/kokles.mp3',
    country: 'latvia',
    countryName: countryNames.latvia,
    flag: countryFlags.latvia
  },
  {
    id: 'lithuania_bells',
    name: { en: `Wooden bells`, ru: `Деревянные колокола (Skrabalai - лит.)`, kk: `Bells` },
    description: {
      en: `Wooden bells, known in Lithuanian as "Skrabalai," are traditional Lithuanian percussion-melodic folk instruments belonging to the idiophone family. Their sound and playing technique closely resemble that of a xylophone. These unique instruments consist of trapezoidal wooden troughs of various sizes, each containing one or two hanging wooden cores or clappers inside.

The skrabalai produce a distinctive dull yet clearly audible sound. The pitch of each bell depends directly on its size – larger troughs produce lower tones, while smaller ones create higher pitches. To extract sound, musicians use wooden mallets to strike the outside of the troughs, causing the internal clappers to vibrate against the wooden walls.

Historically, skrabalai served a practical purpose in Lithuanian pastoral life. Shepherds would hang these wooden bells around the necks of cows and other livestock, allowing them to easily locate their animals by sound even when grazing in dense forests or over hills. Over time, these utilitarian objects evolved into musical instruments, incorporated into folk music ensembles and used to perform traditional Lithuanian melodies. Today, skrabalai are valued both as historical artifacts and as living instruments in contemporary Lithuanian folk music.`,
      ru: `Деревянные колокола (Skrabalai - лит.)

ударно-мелодический литовский народный инструмент. Относится к группе идиофонов, своим звучанием и техникой игры напоминающий ксилофон. Это разного размера трапециевидные деревянные корытца, имеющие внутри одну или две висящие деревянные сердцевины. Издают глухой, но отчетливо слышимый звук. Высота издаваемого звука зависит от размера деревянного корытца. Для звукоизвлечения используются деревянные молоточки. Ранее Skrabalai использовались пастухами. Такой деревянный колокольчик вешался коровам на шею, чтобы пастухи могли легче находить животных.`,
      kk: ``
    },
    images: ['/instruments/world/lithuania/bells/1.png'],
    audio: '/audio/world/lithuania/bells.mp3',
    country: 'lithuania',
    countryName: countryNames.lithuania,
    flag: countryFlags.lithuania
  },
  {
    id: 'lithuania_birbyne',
    name: { en: `Birbynė`, ru: `Бирбине (Birbynė — лит.) - оригинальный аутентичный литовский музыкальный духовой инструмент`, kk: `Бирбине (свирель немесе сиринкс, рожок) (лит. бирбине)` },
    description: {
      en: `Birbynė, also known as Swirel or Syrinx, and sometimes called a blowing horn in English, is an original authentic Lithuanian wind instrument classified as an aerophone. The name derives from the Lithuanian word "birbti," meaning "to blow" or "to buzz." This ancient instrument has deep roots in Lithuanian culture, with historians suggesting that the first prototypes of the birbynė may have appeared during primitive society.

Traditionally, the birbynė was a simple pipe crafted from various natural materials including bird feathers, reed, tree bark, animal horn, or wood. Shepherds were the most frequent players of this instrument, using it to perform a wide variety of music including dances, songs, and improvisational trills while tending their flocks in the fields.

Following the creation of the folk instrument orchestra "Lietuva Ensemble" in 1940, efforts began to modernize and improve the birbynė into a professional chromatic concert instrument. After extensive research and experimentation, an improved chromatic soprano-birbynė was successfully constructed in 1950, followed by a double-bass version in 1952, and a chromatic tenor-birbynė in 1953.

Modern concert birbynės are sophisticated instruments. The body of soprano and tenor versions is typically made from hardwoods such as ash, maple, apple, or pear, while the double bass is constructed from metal. The mouthpiece is crafted from ebonite and resembles a clarinet mouthpiece in shape. A distinctive feature is the animal horn, most commonly a cow's horn, that is attached to the end of the instrument's body, contributing to its unique timbre.

The birbynė boasts a remarkably large dynamic range and an incredibly flexible timbre. Depending on the performer's technique, the instrument can produce sounds resembling an oboe, flute, clarinet, saxophone, or even trumpet. This versatility allows virtually any musical repertoire to be performed on the birbynė. Today, the art of playing birbynė is formally taught at prestigious institutions including the Lithuanian Academy of Music and Theater, conservatories, and specialized music schools throughout Lithuania.`,
      ru: `Бирбине (Birbynė — лит.) - оригинальный аутентичный литовский музыкальный духовой инструмент

аэрофон. Название произошло от слова birbti – дудеть, дуть. Эта несложная дудочка изготавливалась из пера, тростника, коры, рога животного или древесины. Предполагается, что первые прототипы этого инструмента могли появиться во времена первобытного общества.
Чаще на этом инструменте играли пастухи, которые исполняли разную музыку, танцы, песни, трели импровизационного плана. В 1940 году после создания оркестра народных инструментов “Ансамбль Лиетува”, birbynė начали совершенствовать, стараясь получить профессиональный хроматический концертный инструмент. После долгих поисков и проб в 1950 году была сконструирована усовершенствованная хроматическая сопрано-birbynė, в 1952 году – контрабасовая, а в 1953 году – хроматическая тенор-birbynė. Корпус инструмента (сопрано и тенор) делается из дерева ясеня, клена, яблони, груши, а контрабасовые birbynė – из метала. Мундштук сделан из эбонита и своей формой похож на мундштук кларнета. На конец корпуса надевается рог животного, чаще всего – коровы. Birbynė имеет большой динамический диапазон и невероятно гибкий тембр. Инструмент может звучать как гобой, флейта, кларнет, саксофон или даже труба. На birbynė может исполнятся любой репертуар. Игре на birbynė обучают в Литовской академии музыки и театра, в консерватории и в музыкальных школах.`,
      kk: `Бирбине (свирель немесе сиринкс, рожок) (лит. бирбине)

литвалықтардың тұпнұсқа үрмелі музыкалық аспабы. Аэрофондар қатарына жатады. Аспаптың атауы birbti – үру, үрлеу сөзінен туындаған. Бұл қарапайым сыбызғы қауырсыннан, қамыстан, жануар мүйізінен немесе ағаштан жасалды. Аталған аспаптың алғашқы прототиптері алғашқы адамдар заманында жасалған деген болжамдар бар. Әдетте, тосыннан алуан музыка, би, ән, құбылған әуендер орындайтын бақташылар қолданды. 1940 ж. «Ансамбль Лиетува» халық аспаптар оркестрі құрылғанан кейін, кәсіби хроматикалық концерт аспабын алу үшін бирбинені жетілдіру жұмыстары басталды. Ұзаққа созылған ізденістер мен тәжірибелерден кейін 1950 ж. жетілдірілген хроматикалық сопрано-бирбине, 1952 ж. – контрабас-бирбине, 1953 ж. – хроматикалық тенор-бирбине жасалды. Аспап корпусы (сопрано мен тенор) шаған, үйеңкі, алма, алмұрт ағаштарынан, контрабас-бирбене – металдан жасалды. Мүштігі эбониттан жасалып, пішіні кларнеттің мүштігіне ұқсас келеді. Корпустың соңына сиырдың мүйізін бекітеді. Бирбине кең динамикалық диапазонға және керемет икемді тембрге ие. Аспап гобой, флейта, кларнет, саксафон немесе труба тәрізді дыбыстала алады. Бирбене аспабында кез келген репертуарды орындауға болады. Аспапта ойнау дәрістері Литва музыка және театр академиясынада, консерватория мен музыка мектептерінде жүргізіледі.`
    },
    images: ['/instruments/world/lithuania/birbyne/1.png'],
    audio: '/audio/world/lithuania/birbyne.mp3',
    country: 'lithuania',
    countryName: countryNames.lithuania,
    flag: countryFlags.lithuania
  },
  {
    id: 'lithuania_horn',
    name: { en: `Blowing horn`, ru: `Рожок (Ožragis`, kk: `Рожок` },
    description: {
      en: `Blowing horn

The blowing horn, known in Lithuanian as "Ožragis" or "rozhok," is a traditional Lithuanian folk wind instrument with ancient origins. This instrument is traditionally crafted from a goat's horn, fitted with sound holes and equipped with a wooden mouthpiece. Traditional horns typically feature between 2 to 6 sound holes, which determine the instrument's melodic range and tonal possibilities.

The ožragis produces a loud, carrying sound that can be heard over considerable distances, making it ideal for outdoor communication and musical performance. Historically, this instrument was extensively used by shepherds to communicate across valleys and hillsides, by hunters to signal during hunts, and later became an integral part of folk music ensembles.

Beyond its pastoral and musical applications, the blowing horn served crucial military functions in ancient Lithuania. These horns were employed as signaling instruments in the Lithuanian army, used to transmit commands during battles, coordinate troop movements, and boost morale. The instrument's powerful, penetrating tone made it effective for battlefield communication even amid the chaos of combat.

The musical repertoire of the ožragis is diverse and distinctive, consisting of special trills, melodies adapted from traditional songs, and energetic dance tunes. The music performed on the horn is characteristically fast-paced, featuring flexible melodic lines and considerable variety in rhythm and expression. The instrument's sharp, bright tone lends itself particularly well to lively folk dance accompaniment.

In contemporary Lithuania, the blowing horn has experienced a revival and is now widely used in both traditional folk musical ensembles and surprisingly, in modern jazz. Contemporary musicians appreciate its unique timbre and expressive capabilities, incorporating it into fusion projects that bridge traditional and modern musical styles. The instrument continues to be valued as both a link to Lithuania's cultural heritage and as a versatile tool for contemporary musical expression.`,
      ru: `Рожок (Ožragis

лит.) - литовский народный инструмент из рога козла, с отверстиями и деревянным мундштуком. Традиционные рожки имеют от 2 до 6 звуковых отверстий. Имеет громкий звук. Использовался пастухами, охотниками, а позже музыкантами народных ансамблей. Также подобные рожки служили сигнальными инструментами в древней литовской армии для подачи команд во время боя. Репертуар рожка составляли специальные трели, мелодии песен и танцев. Музыка, исполняемая на рожке, отличается быстрым темпом, гибкостью мелодии и разнообразием. Сейчас рожок широко используется как народными музыкальными ансамблями, так и в современном джазе.`,
      kk: `Рожок

Литва елінің саңылаулары мен ағаш мүштігі бар, ешкі мүйізінен жасалған аспабы. Дәстүрлі аспап түрінде 2-6 аралығында дыбыс саңылаулары болады. Дыбысы қатты. Бастапқыда бақташылар мен аңшылар, кейіннен халық ансамблі музыканттары қолданды. Сонымен қатар, мұндай рожок ежелгі Литва әскерінде соғыс кезінде шабуыл сигналдарын үшін пайдаланылды. Аспаптың репертуарын арнайы құбылған дыбыстар, ән мен би әуендері құрады. Аспапта орындалатын музыка жылдам ырғағымен, әуен икемділігімен және алуандығымен ерекшеленеді. Бүгінде рожок халық музыкалық ансамбльдерімен, сондай-ақ заманауи джазда кең қолданылады.`
    },
    images: ['/instruments/world/lithuania/horn/1.png'],
    audio: '/audio/world/lithuania/horn.mp3',
    country: 'lithuania',
    countryName: countryNames.lithuania,
    flag: countryFlags.lithuania
  },
  {
    id: 'lithuania_kankles',
    name: { en: `Kankles`, ru: `Канклес (лит. kanklės) — литовский струнный щипковый музыкальный инструмент.Длина обычно 800—900 мм. Настройка инструмента диатоническая. Имеет значительное сходство с латышским ку́оклэ, эстонским каннелем, карело-финским кантеле и русскими крыловидными (звончатыми) гуслями. Корпус, как правило, врезается из лиственных пород деревьев, а крышка`, kk: `Канклес` },
    description: {
      en: `Kankles (lit. kanklės) is a Lithuanian stringed musical instrument. The length is usually 800–900 mm. Instrument diatonic tuning. It has significant similarities with the Latvian Kuokle, the Estonian kannel, the Karelian-Finnish kantele and the Russian pterygoid (voiced) gusli. The body, as a rule, cuts out from deciduous breeds of trees, and the cover – from spruce. The origin and use is associated with primitive beliefs. In the manufacturing customs there is a relic of the cult of the dead – when a family member dies – a tree is cut from which kankles are made.
The number of strings coincides with magic numbers (5, 7, 9, 12), the ornament contains the sun, light and other cosmological symbols. The reconstructed traditional kankles is used in folklore ensembles. Sound is produced both with fingers and a plectrum, on double bass kankles – also with a special hammer. Modified kankles is used in folk orchestras, ensembles.`,
      ru: `Канклес (лит. kanklės) — литовский струнный щипковый музыкальный инструмент.Длина обычно 800—900 мм. Настройка инструмента диатоническая. Имеет значительное сходство с латышским ку́оклэ, эстонским каннелем, карело-финским кантеле и русскими крыловидными (звончатыми) гуслями. Корпус, как правило, врезается из лиственных пород деревьев, а крышка

из ели. Происхождение и использование связано с первобытными верованиями. В обычаях изготовления присутствует реликт культа умерших – когда умирает член семьи – рубится дерево, из которого делают канклес.
Количество струн совпадает с магическими числами (5, 7, 9, 12), в орнаментике присутствует солнце, световые и другие космологические символы. Реконструированные традиционные канклес  используют фольклорные ансамбли. Звукоизвлечение производится как пальцами, так и плектром, на контрабасовых канклес – еще и специальным молоточком. Модифицированные канклес используют народные оркестры, ансамбли.`,
      kk: `Канклес

Литва елінің ішекті-шертпелі музыкалық аспабы. Ұзындығы 800-900 мм. Аспап диатоникалық күйге келтіріледі. Сондай-ақ, латыштардың ку́оклэ, эстондық каннель, карель-финндердің кантеле және орыстардың гусли аспаптарымен ұқсастықтары бар. Әдетте, корпус жапырақты ағаш тұқымдарынан, бет тақтайы – шыршадан жасалады. Аспаптың қалыптасуы мен қолданылуы алғашқы наным-сенімдермен байланыстырылады. Жасалу ғұрпында өлгендерге табыну белгілері кездеседі – отбасының бір мүшесі қайтыс болғанда канклес жасайтын ағаш шабылады.
Ішектер саны магиялық сандармен (5,7,9,12) сәйкес келеді, өрнектерден күн, жарық және ғарыш белгілері кездеседі. Жетілдірілген дәстүрлі канклес аспабын фольклорлы ансамбльдер қолданады. Дыбыс шығару үшін саусақтармен де, плектрмен де жасалады, ал контрабас-канклестерде – арнайы балғашықтар қолданылады. Түрлендірілген канклес аспабын халық оркестрі, ансамбльдер қолданады.`
    },
    images: ['/instruments/world/lithuania/kankles/1.png'],
    audio: '/audio/world/lithuania/kankles.mp3',
    country: 'lithuania',
    countryName: countryNames.lithuania,
    flag: countryFlags.lithuania
  },
  {
    id: 'lithuania_skuduchay',
    name: { en: `Skuduchay`, ru: `Скудучяй - литовский духовой музыкальный инструмент. Закрытая многоствольная флейта, род флейты Пана. Состоит из 2 и более деревянных, не скреплённых между собой стволов разной длины (80-200 мм); с нижнего конца они закрыты, а вверху на различную глубину срезаны с противоположных сторон. Каждый ствол (скудутис) издаёт один звук, высота которого зависит от длины и диаметра канала. Во время игры скудучяй прижимают меньшим срезом к нижней губе, направляя струю воздуха на противоположный край. Высокие звуки скудучяя`, kk: `Скудучяй` },
    description: {
      en: `Skuduchay

Lithuanian wind musical instrument. Closed multi-barrel flute, genus of Pan's flute. Consists of 2 or more wooden, not fastened together trunks of different lengths (80-200 mm); from the lower end they are closed, and at the top to various depths are cut from opposite sides. Each trunk (skudutis) makes one sound, the height of which depends on the length and diameter of the channel. During the game, the skuduchay is pressed with a smaller cut to the lower lip, directing a stream of air to the opposite edge. High sounds are sharply whistling, low sounds – dull timbre.
Skuduchay is used for ensemble performance; Ensembles number 3-6 people. Each musician plays 1-3 tubes. At random, dances and special plays are performed, the originality of which is in the movement of voices in parallel seconds (typical of old Lithuanian folk polyphonic songs, the so-called sutartin). Skuduchay – the oldest, now widespread instrument. At Lithuanian songs festivals are performed by orchestras of performers on a skuduchay (up to 800 people); Skuduchay sets with chromatic scale are used.`,
      ru: `Скудучяй - литовский духовой музыкальный инструмент. Закрытая многоствольная флейта, род флейты Пана. Состоит из 2 и более деревянных, не скреплённых между собой стволов разной длины (80-200 мм); с нижнего конца они закрыты, а вверху на различную глубину срезаны с противоположных сторон. Каждый ствол (скудутис) издаёт один звук, высота которого зависит от длины и диаметра канала. Во время игры скудучяй прижимают меньшим срезом к нижней губе, направляя струю воздуха на противоположный край. Высокие звуки скудучяя

резко свистящие, низкие – глуховатого тембра.
Скудучяй применяется для ансамблевого исполнения; ансамбли насчитывают 3-6 чел., каждый музыкант играет на 1-3 трубках. На скудучяе исполняются танцы и особые пьесы, своеобразие которых – в движении голосов параллельными секундами (характерно для старинных литовских народных многоголосых песен, т.н. сутартине). Скудучяй – древнейший, ныне широко распространённый инструмент. На литовских праздниках песни выступают оркестры исполнителей на скудучяях (до 800 человек); используются комплекты скудучяев с хроматическим звукорядом.`,
      kk: `Скудучяй

литвалықтардың үрмелі музыкалық аспабы. Көптүтікті жабық сыбызғы, Пан флейтасының бір түрі. 2 не одан да көп ағаштан жасалған, өзара бірікпеген әр түрлі ұзындықтағы (80-200 мм)түтіктерден тұрады. Олардың төменгі ұштары жабық, жоғарғы жақтары түрлі деңгейде қарсы тұстан кесілген. Әр діңгек (скудутис) бір дыбыс шығарады, ал дыбыс биіктігі каналдың ұзындығы мен диаметріне тәуелді. Ойын барысында скудучяйды шағын кесіндісімен төменгі ерінге тақап, ауа толқынын қарсы тұсқа бағыттайды. Аспаптың биік дыбыстары – қатты ысқырмалы, төменгі дыбыстары – қатаң тембрге ие.
Скудучяй ансамбль құрамында ойналады, ансамбль құрамында 3-6 адам болады, олардың әрқайсысы 1-3 түтікте ойнайды. Аспапта би әуендері мен ерекше аспаптық пьесалар – көне литва халық әндерін (сутартине) орындайды. Скудучяй – ең көне және бүгінде кең таралған аспап. Литвалық ән мерекелерінде скудучяйда орындаушылар оркестрі (800 адамға дейін) өнер көрсетеді; дыбыс қатары хроматикалық аспап жинақтары қолданылады.`
    },
    images: ['/instruments/world/lithuania/skuduchay/1.png'],
    audio: '/audio/world/lithuania/skuduchay.mp3',
    country: 'lithuania',
    countryName: countryNames.lithuania,
    flag: countryFlags.lithuania
  },
  {
    id: 'mongolia_morinkhuur',
    name: { en: `Morin khuur`, ru: `Морин хуур`, kk: `Морин хуур` },
    description: {
      en: `Morin khuur is a Mongolian bowed musical instrument. Distributed in Mongolia, China (Inner Mongolia, Xinjiang Uygur Autonomous Region), in Russia (Buryatia, Kalmykia, Irkutsk Region, Trans-Baikal Territory). The head of the morin khuur is traditionally made in the form of a horse's head. The sound of an instrument in Mongolian poetry is compared to a horse neighing or to a wind blow in the steppe.
The name morin khuur consists of Mongolian words: morin – horse, and khuur – string, voice.
The first bowed instruments appeared in time immemorial, when a person discovered the occurrence of sound when two bows were rubbed with bowstrings against each other. Then the man came up with how to amplify the sound with the help of various resonator bodies. Now the instrument basically has a quadrangular trapezoidal case with a wooden or leather (in the traditional version) top deck and a wooden bottom equipped with curly resonant holes. From the 20th century, instruments began to appear with all-wooden, like European stringed instruments, bodies and f-shaped (like violins) resonant holes in the upper deck. A fretless neck is crowned with a curly head in the shape of a horse's head. Two tuning pegs are inserted into the neck. The length of the entire instrument is 100-110 cm.
The instrument has two strings: “male”, made of 130 hairs from the tail of a racehorse and “female”, to which 105 hairs from the tail of a mare go - this is a symbol of male and female principles. According to the Mongolian tradition, the hair of the “male” string must be precisely from the tail of a fast racehorse so that its agility is transferred to the instrument. Recently, some performers prefer nylon strings. The strings are tuned mainly in a quart, but sometimes in a fifth. The bow is wooden, curved, with a freely suspended bun of horse hair, but bows of a western design with a hair tension mechanism are also popular. Pegs for string tension in Mongolia are of traditional simple conical type, in Inner Mongolia they are mechanical, with a worm screw, which provides easier and smoother tuning, without subsequent loosening of the peg.
Traditionally, this is a male instrument, widely used both for solo performance and for accompaniment.
Morin khuur was the first to bring Marco Polo to Europe, who received it as a gift in 1275 while visiting Shandu, the “summer capital” of the Yuan Dynasty.
By the decision of UNESCO, the Mongolian musical instrument morin khuur received a certificate in 2005 confirming the Mongolian-Mongolian national instrument morin khuur as a treasury of the cultural heritage of mankind.
Morin khuur is one of the symbols of Mongolian cultural unity. According to legend, Genghis Khan himself had his own golden khuur, which he loved, as a jealous husband loves his wife, and was ready to execute any of his associates who would dare to separate Genghis Khan from his “violin”.`,
      ru: `Морин хуур

монгольский смычковый музыкальный инструмент. Распространён в Монголии, в КНР (Внутренняя Монголия, Синьцзян-Уйгурский автономный район), в России (Бурятия, Калмыкия, Иркутская область, Забайкальский край). Головка грифа морин хура традиционно изготавливается в виде головы лошади. Звук инструмента в монгольской поэзии сравнивается с лошадиным ржанием или с дуновением ветра в степи.
Название морин хура состоит из монгольских слов: морин - лошадь, и хуур - струна, голос. 
Первые смычковые инструменты появились в незапамятные времена, когда человек обнаружил возникновение звука при трении двух луков тетивами друг о друга. Затем человек придумал как усилить звук при помощи различных резонаторных корпусов. Сейчас инструмент в основном имеет четырёхугольный трапециевидный корпус с деревянной или кожаной (в традиционном исполнении) верхней декой и деревянной нижней, снабжённой фигурными резонаторными отверстиями. С XX века стали появляться инструменты с цельно-деревянным, как у европейских струнных инструментов, корпусом и с f-образными (как у скрипки) резонаторными отверстиями в верхней деке. Безладовая шейка увенчивается фигурной головкой в виде головы лошади. В шейку вставляется два настроечных колка. Длина всего инструмента — 100—110 см.
Инструмент имеет две струны: «мужская», изготавливаемая из 130 волосков из хвоста скакового коня и «женская», на которую идёт 105 волосков из хвоста кобылы - это символ мужского и женского начала. По монгольской традиции волосы «мужской» струны должны быть обязательно именно с хвоста быстрого скакового коня, чтобы его резвость передалась инструменту. В последнее время некоторые исполнители предпочитают струны из нейлона. Струны настраиваются в основном в кварту, но иногда и в квинту. Смычок деревянный, дугообразный, со свободно подвешенным пучком конского волоса, но также популярны смычки западной конструкции с механизмом натяжения волос. Колки для натяжения струн в Монголии традиционного простого конического типа, во Внутренней Монголии механические, с червячным винтом, обеспечивающим более лёгкую и плавную настройку, без последующего ослабления колка.
Традиционно это мужской инструмент, широко использующийся как для сольного исполнения, так и для аккомпанирования. 
В Европу морин хур первым привёз Марко Поло, который получил его в подарок в 1275 во время посещения Шанду — «летней столицы» династии Юань.
Монгольский музыкальный инструмент морин хур по решению ЮНЕСКО получил в 2005 году сертификат об утверждении монгольского-монгольского национального инструмента морин хур в качестве сокровищницы культурного наследия человечества.
Морин хур – один из символов монгольского культурного единства. По преданию, у самого Чингис хана был свой собственный золотой хур, который он любил, как ревнивый муж любит свою жену, и был готов казнить любого из своих приближенных, кто посмел бы разлучить Чингис-хана с его «скрипкой».`,
      kk: `Морин хуур

монғол халқының ыспалы аспабы. Монғолияда, ҚХР-да (Ішкі Монғолия, Шыңжаң-Ұйғыр автономиялық ауданы), Ресейде (Бурятия, Калмыкия, Иркутск облысы, Забайкальск өңірі) кең таралған. Аспаптың басы дәстүрлі түрде жылқының басы түрінде жасалады. Монғол поэзиясында аспаптың дыбысы жылқының кісінегеніне немесе дала желіне ұқсас.
Аспаптың аталуы монғол сөздері: морин – жылқы, хур – ішек, дауыс деген сөздерінен құралған.  
Алғашқы ыспалы аспаптар есте жоқ ескі заманда пайда болды, екі садақтың адырналарын бір-біріне үйкелегеннен дыбыс шығатынын адамдар байқады. Кейін адам түрлі резонаторлық корпустарды жасау арқылы даусын күшейтуді ойлап тапты. Бүгінгі аспап – төртбұрышты трапеция тәрізді корпусы ағаш немесе терімен қапталған жоғарғы декасы және ағаштан жасалған төменгі декасы фигуралы резонаторлық саңылаулармен қамтылған. ХХ ғасырдан бастап корпусы еуропалық ішекті аспаптарда секілді тұтас ағаштан жасалған және скрипкадағы секілді f-тәрізді резонаторлық саңылаулары жоғарғы декада орналасқан аспаптар қалыптаса бастады. Пернесіз мойны жылқының басы секілді фигура болып бітеді. Мойынға екі күйге келтіретін құлақтар орналасады. Аспаптың жалпы ұзындығы – 100-110 см. 
Аспаптың 2 ішегі бар: «ер адам» ішегі тұлпар құйрығының 130 қылынан, «әйел адам» ішегі бие құйрығынынң 105 қылынан жасалады – бұл ер және әйел адам бастауларының белгісі. Монғол дәстүрі бойынша, «ер адам» ішектері міндетті түрде тұлпардың қылынан жасалуы керек – аттың жүйріктігі аспапқа берілуі үшін. Соңғы кездері кейбір орындаушылар нейлон ішектерді артық көреді. Ішектер негізінен, кварта, кейде квинта күйіне келтіріледі. Қияғы ағаштан жасалған, доға тәріздес, жылқы қылының бос бір шоғы бар. Бірақ батыс конструкциясы бойынша жасалған қылды керу механизмі бар қияқтар да кең тараған. Ішектерді тартатын құлақтар Монғолияда дәстүрлі қарапайым конус пішіндес, Ішкі Монғолияда механикалық, бұрамалы винтпен, ол күйге келтіруде әлдеқайда жеңіл әрі бірсарынды.
Негізінен бұл ерлер аспабы болып саналады, жеке орындауда да, сүйемелдеуге де қолданылады. 
Морин хурды алғаш рет Еуропаға Марко Поло әкелген болатын. Ол аспапты 1275 жылы Юань династиясының «жазғы астанасы» – Шаньдуға барған сапарында сыйға алған. 
Монғол музыкалық аспабы морин хур ЮНЕСКО-ның шешімі бойынша, 2005 жылы морин хур монғол ұлттық аспабын адамзаттың мәдени мұра қазынасы ретінде бекіту туралы сертификат алды. 
Морин хур – монғолдың мәдени бірлігінің белгісі. Аңыз бойынша, Шыңғыс ханның алтыннан жасалған жеке морин хуры болған. Аспабын жақсы көргені сонша, оған рұқсатсыз қол тигізген кез келген адамды жазалауға дайын болды.`
    },
    images: ['/instruments/world/mongolia/morinkhuur/1.jpg'],
    audio: '/audio/world/mongolia/morinkhuur.mp3',
    country: 'mongolia',
    countryName: countryNames.mongolia,
    flag: countryFlags.mongolia
  },
  {
    id: 'morocco_bendir',
    name: { en: `BENDIR`, ru: `БЕНДИР`, kk: `Bendir` },
    description: {
      en: `BENDIR

The bendir (plural banadir) is a wooden-framed frame drum of North Africa and Southwest Asia.
The bendir is a traditional instrument that is played throughout North Africa, as well as in Sufi ceremonies; it was played, too, in Ancient Egypt and Mesopotamia. In Turkish, the word bendir means "a big hand frame drum".
The bendir often has a snare (usually made of gut) stretched across the head, which gives the tone a buzzing quality when the drum is struck with the fingers or palm. The drum is played in a vertical position. One holds the drum by looping the thumb of the non-dominant hand through a hole in the frame.`,
      ru: `БЕНДИР

Бендир (множественное число банадир) представляет собой каркасный барабан с деревянной рамой Северной Африки и Юго-Западной Азии.
Бендир - это традиционный инструмент, на котором играют по всей Северной Африке, а также на суфийских церемониях; в Древнем Египте и Месопотамии. На турецком языке слово «bendir» означает «большой ручной каркасный барабан».
У бендира часто есть петля (обычно сделанная из кишки), натянутая поперек головы, что придает звуку жужжащее качество, когда барабан ударяет пальцами или ладонью. Барабан играет в вертикальном положении. Инструмент держат загибая большой палец недоминантной руки через отверстие в раме.`,
      kk: ``
    },
    images: ['/instruments/world/morocco/bendir/1.jpg'],
    audio: '/audio/world/morocco/bendir.mp3',
    country: 'morocco',
    countryName: countryNames.morocco,
    flag: countryFlags.morocco
  },
  {
    id: 'morocco_guembri',
    name: { en: `GUEMBRI (HEJHOUJ, GOUNIBRI, SINTER)`, ru: `ГАМБРИ (ХЕЖУЖ, ГАНАБРИ, СИНТИР)`, kk: `ГАМБРИ (ХЕЖУЖ, ГАНАБРИ, СИНТИР)` },
    description: {
      en: `GUEMBRI (HEJHOUJ, GOUNIBRI, SINTER)

The sintir, also known as the Guembri, Gounibri or Hejhouj, is a three stringed skin-covered  plucked lute used by the Gnawa people. It is approximately the size of a guitar, with a body carved from a log and covered on the playing side with camel skin. The neck is a simple stick with one short and two long goat gut strings.
The goat gut strings are plucked downward with the knuckle side of the index finger and the inside of the thumb. The buzzing sound often heard emanating from the sintir is caused by metal rings dangling off of a galvanized metal feather mounted on the end of the sintir's neck. 
As the sintir is used mainly by Gnawa (North Africans of Sub-Saharan African descent), it is likely that the instrument derives from similar skin-covered lutes of the region around Mali or other areas of the Sahel (such as the , xalam, or hoddu).

Sintirs are usually applied to different styles of music:
Tagnawit: is the music of the Gnawa people. The Guembri they use is the biggest: a long body rectangular in shape. There is a hole in the skin at the bridge area for enhanced acoustics. Three strings are used, two that reach the end of the neck, and one that reaches the middle.  How the strings stay in tune is a mystery that only the Gnawa hold the secret for. The Gnawa player who plays with the Guembri is called the Maalem, Master of Ceremonies. The most popular Guembri players in traditional and popular music are Abderhmane Paco, Mahmoud Gania, Mustapha Baqbou, Hassan Hakmoun, Hajjoub Soudani, and Hamid al Kasri.
Tamazight: sung poetry by the Berbers of the Middle Atlas and High Atlas. It has a body the size of a lute or mandolin, but the neck is usually longer and thicker. Unlike the Gumebri of Gnawa, this one has wooden tuners. There are usually four strings (although five is not unusual). It is played similar to a lute, however it has its own tonal range, scales and key progressions that are particular to the Berbers. The main artist plays the lute and sings, accompanied by bendir players and backing singers which can include both men and women. To the Berbers, this type of Guembri is more widely known as Loutar. Popular Loutar players are Mohamed Rouicha, Hammou Oulyazid, Hajjaoui and Maghni.
Malhoun: sung poetry in Moroccan colloquial Arabic (Darija). It is similar to Lotar in shape, but much smaller in size. It is not used as the main string instrument; rather it is used to provide timbre contrast to the music. It is sometimes called Gounibri as well.`,
      ru: `ГАМБРИ (ХЕЖУЖ, ГАНАБРИ, СИНТИР)

Синтир, также известный как гамбри, ганабри или хежуж, также представляет собой трехструнную щипковую лютню с обтянутой кожей, используемую народом гнава. Размер инструмента примерно как у гитары, корпус сделан из дерева и дека покрыта верблюжьей кожей. Гриф представляет собой простую палку с одной короткой и двумя длинными струнами из кишка козла.
На инструменте играют указательным пальцем и внутренней стороной большого пальца. Звук гудения, часто слышимый, вызван металлическими кольцами, свисающими наконечнике грифа синтира. 
Поскольку синтир используется главным образом гнавами (северные африканцы к югу от Сахары), вполне вероятно, что инструмент получен из сходных покрытых кожей лютен региона Мали или других районов Сахеля (таких как, халам, или ходду).
Синтиры обычно применяются к разным музыкальным стилям:
Тагнавит: это музыка народа гнава. Гамбри, который они используют, является самым большим: корпус длинный прямоугольной формы. В области подставки под струны имеется отверстие в коже для улучшения акустики. Используются три струны, две, которые достигают конца шеи, и одна, которая достигает середины. То, как струны остаются в гармонии, является загадкой, секрет которой хранят только Гнава. Игрок Гнава, играющий на гамбри называют «Маалем», Мастер Церемоний. Самыми популярными исполнителями на гамбри в традиционной и популярной музыке являются Абдермане Пако, Махмуд Гания, Мустафа Бакбоу, Хасан Хакмоун, Хаджуб Судани и Хамид аль-Касри.
Тамазайт: воспетая поэзия берберов из среднего и высокого Атласа. У него корпус размером с лютни или мандолины, но гриф обычно длиннее и толще. В отличие от гамбри из гнава, у этого есть деревянные тюнеры. Количество струн обычно четыре (хотя пять тоже не редкость). На нем играют подобно лютне, однако у него есть свой тональный диапазон, шкалы и ключевые прогрессии, характерные для берберов. Главный артист играет лютню и поет в сопровождении бендиров и бэк-вокалистов, среди которых могут быть как мужчины, так и женщины. Для берберов этот тип гамбри более широко известен как лутар. Популярные лутарские игроки – Мохамед Руича, Хамму Улязид, Хаджауи и Магни.
Малхун: воспетая поэзия на марокканском разговорном арабском (дария). По форме он похож на лутара, но гораздо меньше по размеру. Он не используется в качестве основного струнного инструмента; скорее это используется, чтобы обеспечить тембровый контраст музыке. Иногда его также называют ганабри.`,
      kk: `ГАМБРИ (ХЕЖУЖ, ГАНАБРИ, СИНТИР)

Синтир, сондай-ақ гамбри, ганабри немесе хежуж деген атпен танымал бұл аспап үш ішекті шертпелі лютня, беті терімен қапталған, негізгі қолданушылары – гнава халқы. Аспаптың көлемі гитараныкындей, шанағы ағаштан жасалып, бетіне түйе терісі тартылады. Мойны қарапайым келген, бір қысқа және екі ұзын ешкі ішегінен жасалған ішектері бар.
Аспапта сұқ саусақпен және бас бармақтың ішкі жағымен ішектерді шертіп ойнайды. Шулы дыбыс аспаптың жоғарғы жағына ілінген металл сақиналардан пайда болады.
Синтирді негізінен гнава халқы (Сахараның оңтүстігіндегі африкалықтар) қолданатындықтан, аспап Мали және Сахельдің басқа да аудандарындағы терімен қапталған лютняларға (халам немесе ходду) ұқсастырылып, бастауын сол жақтан алған болуы мүмкін.
Синтирді түрлі музыка стильдерінде қолданады:
Тагнавит: бұл гнава халқының музыкасы. Олар қолданатын гамбри көлемі жағынан ең үлкен, шанағы ұзын төртбұрышты. Бетіне тартылған теріде тиегі тұратын тұста дыбыс ойығы бар, ол акустиканы жақсарту үшін қажет. Үш ішекті, екі ішегі мойнын бойлау, ұшына дейін барса, бір ішегі ортасына дейін ғана жетеді. Ал ішектердің қалайша үйлесімділікте болатындығы гнавалықтар ғана білетін сыр ретінде сақталып келеді. Гамбриде ойнайтын гнавалық орындаушыны «Маалем» деп атайды, салтанатты рәсімнің шебері деген мағына береді. Гамбриде ойнайтын әйгілі дәстүрлі орындаушылар: Абдермане Пако, Махмуд Гания, Мустафа Бакбоу, Хасан Хакмоун, Хаджуб Судани и Хамид аль-Касри.
Тамазайт: орта және жоғарғы Атласты мекендейтін берберлердің әуенді поэзиясы. Оларды бұл аспаптың көлемі лютня немесе мандолина сияқты болып келеді, бірақ мойны ұзынырақ және жіңішкелеу. Гнавалардың гамбриіне қарағанда мына аспапта ағаш тюнерлер бар. Ішек саны әдетте төрт (алайда бес ішек те жиі кездеседі). Бұл аспапта да лютняда ойнағандай ойнағанмен, оның өзіндік берберлерге ғана тән тональді диапазоны, шкаласы бар. Негізгі өнерпаз лютняда ойнап, бендир мен құрамында ерлер де, әйелдер де бар бэк-вокалистердің сүйемелдеуімен ән шырқайды. Берберлер үшін гамбридің бұл түрі лутар ретінде кеңірек танымал. Әйгілі лутаршылар – Мохамед Руича, Хамму Улязид, Хаджауи и Магни.
Малхун: марокколық ауызекі араб тілінің (дария) әуенді поэзиясы. Пішіні жағынан ол лутарға ұқсас, бірақ көлемі біршама кіші. Ол негізгі ішекті аспап ретінде емес, негізінен, музыканың тембрлік контрастын беру үшін қолданылады. Кейде оны ганабри деп те атайды.`
    },
    images: ['/instruments/world/morocco/guembri/1.jpg'],
    audio: '/audio/world/morocco/guembri.mp3',
    country: 'morocco',
    countryName: countryNames.morocco,
    flag: countryFlags.morocco
  },
  {
    id: 'morocco_krakeb',
    name: { en: `Krakeb or karkaba`, ru: `Кракеб или каркабу`, kk: `Кракеб немесе каркабу` },
    description: {
      en: `Krakeb or karkaba is a Maghreb national musical instrument. The name is sometimes pronounced karakib, krkib or karkaba.
Krakeb is a pair of metal spoons with two ends. When playing the pair of such “spoons” is hold in each hand so that when each pair hits each other quickly, pulsating sounds are created, creating a colorful ornament for the rhythm.
Krakeb are the main component of rhythmic gnawa music. It is used mainly in Algeria and Morocco.`,
      ru: `Кракеб или каркабу

магрибский национальный музыкальный инструмент. Название иногда произносится как каракиб, кркиб или каркаба.
Кракеб представляет собой пару из металлических ложек с двумя концами. При игре в каждой руке держат по паре таких «ложек», чтобы при взаимном соударении каждой пары получались быстрые, пульсирующие звуки, создающие колоритный орнамент для ритма.
Кракеб являются основным компонентом ритмической Гнауа музыки. Он используются в основном в Алжире и Марокко.`,
      kk: `Кракеб немесе каркабу

Магриб ұлттық музыкалық аспабы. Атауы кейде каракиб, кркиб немесе каркаба деп те айтылады.
Кракеб екі шеті бар металлдан жасалған жұп қасық түрінде берілген аспап. Ойын барысында екі қолда осындай жұп «қасықтар» ұстап, олар өзара соғылғанда жылдам, екпінді дыбыс туындап, қанық ырғақ қалыптасады. 
Кракеб ырғақты Гнауа музыкасының негізгі бөлігі болып табылады. Негізінен, Алжир мен Мароккода қолданысқа ие.`
    },
    images: ['/instruments/world/morocco/krakeb/1.jpg'],
    audio: '/audio/world/morocco/krakeb.mp3',
    country: 'morocco',
    countryName: countryNames.morocco,
    flag: countryFlags.morocco
  },
  {
    id: 'morocco_tbilat',
    name: { en: `TBILAT`, ru: `ТБИЛАТ`, kk: `ТБИЛАТ` },
    description: {
      en: `TBILAT

Tbilat is a traditional Moroccan percussion instrument that bears resemblance to both bongos and the Indian tabla. This membranophone consists of a pair of ceramic or pottery drums, each distinctively decorated with traditional Moroccan patterns and motifs. The two drums are of different sizes, creating a complementary tonal range – one producing higher pitches and the other providing deeper, bass tones.

The construction of tbilat demonstrates traditional Moroccan craftsmanship. The skin heads, typically made from goat skin, are carefully stretched over the pottery bodies and secured using plaited gut cords that wrap around the drums. This traditional lacing system allows players to adjust the tension of the drumheads, thereby fine-tuning the instrument's pitch and tone quality.

During performance, the tbilat is placed on the ground between the musician's legs, allowing the player to strike both drums simultaneously or alternately using both hands. The positioning provides excellent control and access to both drumheads, enabling complex rhythmic patterns and dynamic variations. Players use their fingers, palms, and the heels of their hands to produce a wide variety of tones, from sharp slaps to deep, resonant bass notes.

The tbilat plays a vital role in Moroccan traditional music, particularly in Gnawa music, Berber folk music, and various regional musical traditions. Its rhythmic versatility makes it essential for accompanying singing, dancing, and ceremonial events. The instrument's distinctive sound – combining the clarity of tabla with the earthy resonance of traditional African drums – creates the rhythmic foundation for many North African musical styles.

Modern Moroccan musicians continue to use tbilat in both traditional and contemporary contexts, and the instrument has gained recognition internationally as world music has grown in popularity. Its unique timbre and the skilled craftsmanship required to make authentic tbilat drums have made it a sought-after instrument among percussionists worldwide.`,
      ru: `ТБИЛАТ

Тбилат – это ударный инструмент из Марокко, который напоминает бонго и таблу. Он состоит из пары украшенных керамических барабанов, каждый с разным размером. Кожа головы животного растягиваются плетеными кишечными шнурами. Этот мембранофон помещают на землю между ног и играют обеими руками.`,
      kk: `ТБИЛАТ

Тбилат – бұл Марокконың ұрмалы аспабы, бонго және табла аспаптарына ұқсас болып келеді. Бұл аспап әртүрлі пішінде, безендірілген қос барабаннан тұрады. Тбилатқа жануардың созылған бас терісінен өрілген баулар байланады. Тбилатты жерге екі аяқтың арасына қойып, екі қолмен ұрып ойнайды.`
    },
    images: ['/instruments/world/morocco/tbilat/1.jpg'],
    audio: '/audio/world/morocco/tbilat.mp3',
    country: 'morocco',
    countryName: countryNames.morocco,
    flag: countryFlags.morocco
  },
  {
    id: 'pakistan_algoza',
    name: { en: `Algoza`, ru: `Алгоза`, kk: `Алгоза` },
    description: {
      en: `Algoza is a wooden shepherd flute native to northwestern India (Punjab) and the adjacent province of Pakistan with the same name. This instrument, unfortunately, is almost not known outside the native region. Shepherds used to play algoza, but recently professional musicians playing folk music have been playing it more and more often. And folk music in India and Pakistan, as it is known, is unique and incredibly beautiful.
This instrument has many names; “algoza” is just one of them. This is a double whistle flute made of wood. Like other double flutes, it consists of two trunks: one with holes, and the other without. A flute with holes is designed for melodic play, and a second tube without holes (drone) emits one note. Two flutes are most often held together, and sometimes the performer simply holds the individual tubes together when playing. Double flutes playing “chords” have one peculiarity: if you pause to take a breath, both flutes will be silent for a second, and this will sound bad. Therefore, so that the sound does not interrupt, the performer must possess circular breathing.
According to legend, two trunks of algoza are a married couple. A long pipe is a man, and one that is shorter is a woman. However, there are modifications to the instrument with two or even three drone tubes.`,
      ru: `Алгоза

деревянная пастушья флейта родом из северо-западной части Индии (штат Пенджаб) и примыкающей к ней провинции Пакистана с тем же названием. Этот инструмент, к сожалению, почти не известен за пределами родного региона. Раньше на алгозе играли пастухи, однако в последнее время на ней всё чаще играют профессиональные музыканты, исполняющие народную музыку. А народная музыка в Индии и Пакистане, как известно, уникальна и невероятно красива.
У этого инструмента много названий, «алгоза» – лишь одно из них. Это двойная свистковая флейта, которую изготавливают из дерева. Как и другие двойные флейты, она состоит из двух стволов: один с дырочками, а другой – без. Флейта с отверстиями предназначена для мелодической игры, а вторая трубка без отверстий (дроновая) издаёт одну ноту. Две флейты чаще всего скрепляют между собой, а иногда исполнитель просто удерживает отдельные трубки вместе при игре. У двойных флейт, играющих «аккордами», есть одна особенность: если сделать паузу, чтобы взять дыхание, обе флейты на секунду замолчат, а это будет плохо звучать. Поэтому, чтобы звук не прерывался, исполнитель должен владеть циркулярным дыханием.
Согласно легенде, два ствола алгозы – это супружеская пара. Длинная трубка – это мужчина, а та, которая короче – женщина. Впрочем, встречаются модификации инструмента с двумя и даже с тремя дроновыми трубками.`,
      kk: `Алгоза

Үндістанның солтүстік-батыс өңірі (Пенджаб штаты) мен шекаралас Пәкістан өлкесінде таралған бақташылардың ағаш флейтасы. Аспап басқа өңірлерге таралмаған. Ертеректе алгозада бақташылар ойнаған, бірақ кейінгі кездері халық музыкасын орындайтын кәсіби музыканттар да жиі ойнайды.
Бұл аспаптың атаулары көп, ал «алгоза» соның бірі ғана. Алгоза –ағаштан жасалатын қосарлы ысқырмалы флейта. Өзге қосарлы флейталар секілді ол да екі діңгектен тұрады: бірі – ойын саңылауларымен, екіншісі – саңылаусыз. Дыбыс ойығы бар флейта әуенді ойынға арналса, саңылаусыз екінші түтік бір нотаны орындайды. Әдетте, екі флейтаны өзара біріктірсе, кейде орындаушы бөлек екі түтікті бірге ұстап тұрады. «Аккордтармен» ойнайтын қосарлы флейталардың бір ерекшелігі – дем алу үшін ойынды тоқтатса, екі флейта да дыбыс шығармайды, ал бұл ойынға кері әсер етеді. Сондықтан дыбыс үздіксіз шығуы үшін орындаушы циркулярлы дем алу техникасын меңгеруі керек.
Аңыз бойынша, алгозаның қос түтігі – бұл ерлі-зайыпты жұп. Ұзын діңгек – ер адам, қысқасы – әйел адам. Бүгінде аспаптың екі және үш дронды түтігі бар түрлендірілген нұсқалары да кездеседі.`
    },
    images: ['/instruments/world/pakistan/algoza/1.jpg'],
    audio: '/audio/world/pakistan/algoza.mp3',
    country: 'pakistan',
    countryName: countryNames.pakistan,
    flag: countryFlags.pakistan
  },
  {
    id: 'pakistan_bansuri',
    name: { en: `BANSURI`, ru: `БАНСУРИ`, kk: `БАНСУРИ` },
    description: {
      en: `BANSURI

Bansuri, bansuli (Skt. Bansi – bamboo) – various flutes common in the traditional and classical music-making of modern India, made from bamboo stalk. The instrument has 6-8 holes on the top side and one hole on the bottom. There are longitudinal open or whistle bansuri and transverse concert bansuri. Longitudinal is usually used in folk, transverse – In Indian classical music.
An ancient musical instrument associated with the shepherds and their traditions, it is closely connected with the history of Krishna and Radha, as well as captured in the works of Buddhist painting, created around 100 BC. A Bansuri called venu (veṇu) is revered as a divine instrument of Krishna and is often associated with Rasilila; in mythology it is mentioned how the melodies performed by Krishna on the flute attracted and fascinated not only women, but also animals. North Indian bansuri, usually 14 inches long, has also been traditionally used as an accompaniment instrument, such as film music.
Pandit Pannalal Ghosh (1911–1960) was able to turn bansuri from an ordinary folk instrument into an instrument of serious classical music. He experimented with the length, diameter and number of holes and concluded that longer and wider in diameter bansuri allow better use of low octaves.`,
      ru: `БАНСУРИ

Бансури, бансули (санскр. bansi – бамбук) – различные флейты, распространённые в традиционном и классическом музицировании современной Индии. Изготавливаются из стебля бамбука. На инструменте располагается 6-8 отверстий на верхней стороне и одно отверстие на нижней. Различают продольные открытые или свистковые бансури и поперечные концертные бансури. Продольная обычно используется в народной, поперечная – в индийской классической музыке.
Древний музыкальный инструмент, ассоциируемый с пастухами и их традициями, он тесно связан с историей Кришны и Радхи, а также запечатлён в произведениях буддийской живописи, созданных около 100 года н.э. Бансури под названием вену (veṇu) почитается как божественный инструмент Кришны и часто ассоциируется с Раса-лилой; в мифологии упоминается, как мелодии, исполняемые Кришной на флейте, привлекали и очаровывали не только женщин, но и животных. Североиндийская бансури, обычно 14-ти дюймов в длину, традиционно использовалась также в качестве инструмента для аккомпанемента, например, в музыке к фильмам.
Пандит Панналал Гхош (1911–1960) смог превратить бансури из обычного народного инструмента в инструмент серьёзной классической музыки. Он экспериментировал с длиной, диаметром и количеством отверстий бансури и пришёл к выводу, что более длинные и широкие в диаметре бансури позволяют лучше использовать низкие октавы.`,
      kk: `БАНСУРИ

Бансури, бансули (санскр. bansi – бамбук) – флейта түріне жатқызылатын, Үндістанның дәстүрлі және классикалық үрмелі музыкалық аспабы. Аспап бамбук ағашынан жасалынады. Оның жоғары бөлігінде 6-8 саңылау, төменгі жағында бір саңылау болады. Бансуридің екі түрі кездеседі: біріншісі – бойлық бансури, екіншісі – көлденең бансури. Бойлық бансури дәстүрлі халық музыкасында пайдаланса, көлденең бансури үндісінің классикалық музыкасында ойналады. 
Ежелгі музыкалық аспап бақташылық дәстүрмен тығыз байланысты, одан басқа үнді құдайлары Кришна мен Радханың тарихымен байланыстырылады және бансури б.з. 100 жылғы жатқызылатын буддалық кескіндеме шығармаларында кездеседі. Бансури вену деген атымен Кришнаның құдыретті аспабы ретінде құрметтеледі және Раса-лиломен тығыз байланыстырады. Үнді мифологиясында Кришна осы флейтада ойнау арқылы тек әйелдердің назарын өзіне ғана қаратапай, жанауарларды да өзіне баурап алған. 
Пандит Панналал Гхош (1911—1960)  бансуриді қарапайым халлықтық аспаптан классикалық музыкалық аспап қылып жасап шығарды. Оның шешімі бойынша бансури ұзын болған сайын және диаметрі бойынша кең болса неғұрлым төмен октаваларды шығару жеңіл деген.`
    },
    images: ['/instruments/world/pakistan/bansuri/1.jpg'],
    audio: '/audio/world/pakistan/bansuri.mp3',
    country: 'pakistan',
    countryName: countryNames.pakistan,
    flag: countryFlags.pakistan
  },
  {
    id: 'pakistan_bulbul',
    name: { en: `BULBUL TARANG`, ru: `БЮЛЬБЮЛЬ ТАРАНГ`, kk: `БЮЛЬБЮЛЬ ТАРАНГ` },
    description: {
      en: `BULBUL TARANG

Bulbul tarang (literally “waves of nightingales”, alternately Indian or Punjabi banjo) is a string instrument from Indian and Pakistani Punjab which evolved from the Japanese taishogoto, which likely arrived in South Asia in the 1930s. 
The instrument was developed in 1912 by musician Goro Morita in Nagoya. He received a scholarship from the first Prime Minister of Japan to study musical instruments in Europe and the United States for two years. Subsequently, he came up with the idea of ​​combining typewriter mechanics with an instrument.
The instrument consists of a long hollow box with strings whose length is equal to the length of the box. Above the strings is a series of numbered typewriter keys that are pressed or shortened to raise the pitch. It reproduces in length and vibrates. There are also electrical versions of the instrument.`,
      ru: `БЮЛЬБЮЛЬ ТАРАНГ

Бюльбюль таранг (буквально «волны Соловьев», попеременно Индийский или Панджабский банджо) – это струнный инструмент из Индийского и пакистанского Пенджаба, который развился из японского тайшогото, который, вероятно, прибыл в Южную Азию в 1930-х годах.
Инструмент был разработан в 1912 году музыкантом Горо Морита в Нагое. Он получил стипендию от первого премьер-министра Японии по изучению музыкальных инструментов в Европе и США в течение двух лет. Впоследствии он придумал идею объединения механики пишущей машинки с инструментом.
Инструмент состоит из длинного полого ящика со струнами, длина которых равна длине ящика. Над струнами находится ряд пронумерованных пишущих машинок клавиш, на которых надавливают или сокращают, чтобы поднять высоту звука. Он воспроизводится по длине и вибрирует. Существуют также электрические версии инструмента.`,
      kk: `БЮЛЬБЮЛЬ ТАРАНГ

Бюльбюль таранг (тікелей аудармасы «Бұлбұл толқындары», Үнді немесе Пенджаб банджосы) – 1930-жж. шамасында Оңтүстік Азия жеріне келген жапондық тайшогото аспабы негізінде қалыптасқан Үнді және Пәкістандық Пенджабтың ішекті музыкалық аспабы. 
Аспапты 1912 ж. Нагоя қаласында музыкант Горо Морита жасап шығарды. Жапонияның бірінші премьер-министрі оған 2 жыл көлемінде Еуропа мен АҚШ-тың музыкалық аспаптарын зерттеуге шәкіртақы табыстаған болатын. Нәтижесінде ол баспа машинасының механикасы мен аспапты біріктіруді ойлап тапты. 
Аспап ұзындығы жәшікпен бірдей іші қуыс жәшікке тағылған ішектерден тұрады. Ішектерден жоғары тұста баспа машинасының нөмірленген пернелері орналасады, оларды басу арқылы дыбыс биіктігін өзгертуге болады. Дыбыс ұзына бойы шығып, тербеліске түседі. Аталған аспаптың электрлік нұсқалары да кездеседі.`
    },
    images: ['/instruments/world/pakistan/bulbul/1.jpg'],
    audio: '/audio/world/pakistan/bulbul.mp3',
    country: 'pakistan',
    countryName: countryNames.pakistan,
    flag: countryFlags.pakistan
  },
  {
    id: 'pakistan_dhol',
    name: { en: `DHOL`, ru: `ДХОЛ`, kk: `ДХОЛ` },
    description: {
      en: `DHOL

Dhol can refer to any one of a number of similar types of double-headed drum widely used, with regional variations, throughout the Indian subcontinent. Its range of distribution in India, Bangladesh and Pakistan primarily includes northern areas such as the Punjab, Haryana, Delhi, Kashmir, Sindh, Assam Valley, Gujarat, Maharashtra, Konkan, Goa, Karnataka, Rajasthan and Uttar Pradesh. The range stretches westward as far as eastern Afghanistan. A related instrument is the dholak or dholki.
Someone who plays the dhol is known as dholi.
The dhol is a double-sided barrel drum played mostly as an accompanying instrument in regional music forms. The typical sizes of the drum vary slightly from region to region. In Punjab, the dhol remains large and bulky to produce the preferred loud bass. In other regions, dhols can be found in varying shapes and sizes and made with different woods and materials (fiberglass, steel, plastic). The drum consists of a wooden barrel with animal hide or synthetic skin stretched over its open ends, covering them completely. These skins can be stretched or loosened with a tightening mechanism made up of either interwoven ropes, or nuts and bolts. Tightening or loosening the skins subtly alters the pitch of the drum sound. The stretched skin on one of the ends is thicker and produces a deep, low frequency (higher bass) sound and the other thinner one produces a higher frequency sound. Dhols with synthetic, or plastic, treble skins are common.
Several percussion instruments such as the dhol used to exist during the Indus Valley Civilisation. Dhol is depicted in earliest ancient Indian sculptural arts as one of the chief percussion instruments for ancient Indian music along with tabla. Ain-i-Akbari, describes the use of Dhol in the orchestra of the Mughal emperor Akbar the Great. The Indo-Aryan word "dhol" appears in print around 1800 in the treatise Sangitasara.`,
      ru: `ДХОЛ

Дхол – может относиться к любому из ряда подобных типов двухголовых барабанов, широко используемых, с региональными вариациями, по всему индийскому субконтиненту. Его диапазон распространения в Индии, Бангладеш и Пакистане в основном включает северные районы, такие как Пенджаб, Харьяна, Дели, Кашмир, Синд, долина Ассам, Гуджарат, Махараштра, Конкан, Гоа, Карнатака, Раджастхан и Уттар-Прадеш. Диапазон простирается на запад до восточного Афганистана. Родственным инструментом является дхолак или дхолки. Тот, кто играет в дхол, известен как дхоли.
Дхол – это двухсторонний барабан, играемый в основном как сопутствующий инструмент в региональных музыкальных формах. Типичные размеры барабана немного варьируются от региона к региону. В Пенджабе дхол остается большим и громоздким, чтобы производить предпочитаемый громкий бас. В других регионах можно найти дхол разных форм и размеров, изготовленные из разных пород дерева и материалов (стекловолокно, сталь, пластик). Барабан состоит из деревянной бочки с шкурой животного или синтетической кожей, натянутой на открытые концы, полностью закрывающей их. Эти шкуры можно растягивать или ослаблять с помощью натяжного механизма, состоящего из переплетенных канатов или гаек и болтов. Затягивание или ослабление кожи слегка изменяет высоту звука барабана. Растянутая кожа на одном из концов толще и производит глубокий низкочастотный (более высокий бас) звук, а другой более тонкий - более высокочастотный звук. Сейчас также распространены дхолы с синтетическими или пластиковыми тройными шкурами.
Несколько ударных инструментов, таких как дхол, существовали во времена цивилизации долины Инда. Дхол изображен в ранних древних индийских скульптурных искусствах как один из главных ударных инструментов для древней индийской музыки наряду с табла. Айн-и-Акбари, описывает использование дхола в оркестре Могольского императора Акбара Великого. Индоарийское слово «дхол» появляется в печати около 1800 года в трактате Сангитасара.`,
      kk: `ДХОЛ

Дхол – кез-келген екі жақты барабан типтеріне жатқызылады. Бұл аспап Үнді субконтинентінде кең қолданылады және өзіндік аймақтық ерекшеліктері бар. Дхолдың таралу аймағы Үндістан, Бангладеш және Пәкістан, негізінен бұл елдердің солтүстік аймақатары, оның ішінде: Пенджаб, Харьяна, Дели, Кашмир, Синд, Ассам, Гуджарат, Махараштра, Конкан, Гоа, Карнатака, Раджастхан и Уттар-Прадеш. Одан бөлек Ауғанстанның шығыс бөлігінде де таралған. Аталмыш аспапқа жақын дхолаки және дхолки деген музыкалық құралдар жатқызылады. Дхол аспабында ойнаушыны – дхоли деп атайды. 
Дхол – екі жақты барабан, жергілікті музыкалық дәстүрде сүйемелдеуші аспап. Аталмыш аспатың көлемі әр ауданда әртүрлі болып келеді. Пенджабта үлкен бас дыбысты алу үшін дхолдың көлемі орасан үлкен. Басқа аймақта дхолдың әртүрлі пішінде және әртүрлі материалдар мен ағаш түрлерінен (шыны талшық, болат, пластик) жасалғандығын байқауға болады. Брабан ағаш бөкеден және оның екі ашық жағына малдың тересі немесе синтектикалық терімен жабылады. Бұл теріні өрілген қанат немесе гайка, болттар секілді керу механизмімен тартып немесе босатып отыруға болады. Осындай теріні тарту және босату баранбанның дыбыс жоғарылығын өзгертеді. Дхолдың бір шетіне тартылған тері қалың және терең төмен жиілікті дыбыс береді, басқа шетінен тартылған тері жұқа өте жоғары жиілікті дыбыс береді. Қазіргі таңда дхолда синтектикалық және пластикалық материалдардан жасалған аспаптар кеңінен таралған. 
Дхол секілді бірнеше аспаптар Инд өркениеті заманында болған. Дхол табламен қатар ең негізгі ұрмалы аспап ретінде ежелгі Үнді мүсін өнерінде бейнеленген.  Айн-и-Акбардың айтуынша, дхол Моғол мемлекетінің патшасы Ұлы Акбардың оркестірінде қолданылғандығы жайлы айтылады. Үндіарийлік «дхол» сөзі шамамен 1800 жылға жатқызылатын Сангитасара трактатында кездеседі.`
    },
    images: ['/instruments/world/pakistan/dhol/1.jpg'],
    audio: '/audio/world/pakistan/dhol.mp3',
    country: 'pakistan',
    countryName: countryNames.pakistan,
    flag: countryFlags.pakistan
  },
  {
    id: 'pakistan_dholak',
    name: { en: `DHOLAK`, ru: `ДХОЛАК`, kk: `ДХОЛАК` },
    description: {
      en: `DHOLAK

The dholak is a folk two-headed hand-drum from the Indian subcontinent. The smaller surface of the dholak is made of goat skin for sharp notes and the bigger surface is made of buffalo skin.
The shell is made from sheesham wood but cheaper dholaks may be made from any wood, such as mango. 
It is widely used in qawwali, kirtan, lavani and bhangra. It was formerly used in classical dance. Indian children sing and dance to it during pre-wedding festivities. In the Fiji Islands the dholak is widely used for Indian folk music, bhajan and kirtan. 
In Pakistan, it is used during weddings by family members, to sing folk and wedding songs and at events known as dholkis. This instrument is also known as the naal.`,
      ru: `ДХОЛАК

Дхолак – это народный двухголовый ручной барабан с индийского субконтинента. Меньшая поверхность дхолака сделана из козьей кожи для острых нот, а большая поверхность – из кожи буйвола для низких частот.
Оболочка изготавливается из древесины шишама, но более дешевый дхолак может быть изготовлен из любого дерева, например манго. 
Он широко используется в кавали, киртане, лавани и бхангра. Ранее он использовался в классическом танце. Индийские дети поют и танцуют под него во время предсвадебных торжеств. На островах Фиджи дхолак широко используется для индийской народной музыки, бхаджана и киртана.
В Пакистане он используется во время свадеб членами семьи, для пения народных и свадебных песен и на мероприятиях, известных как дхолкис. Этот инструмент также известен как наал.`,
      kk: `ДХОЛАК

Дхолак – индия субконтинентінде қолданылатын екі жақты, қолмен ұрып ойналатын барабан түрі. Дхолактың кішірек жағы жіңішке ноталарды беру үшін ешкі терісінен жасалады, ал үлкен жағы төменгі жиілікті беру үшін енекенің (буйвол) терісінен жасалады. 
Шанағы шишам ағашынан жасалады, бірақ арзан тұратын дхолактар әр түрлі ағаштардан жасала береді, мысалы манго. 
Бұл аспап кавали, киртан, лавани және бханграда кеңінен қолданылады. Ертеректе классикалық билер үшін қолданылған. Үндістандық балалар осы аспаптың сүйемелдеуімен үйлену тойы алдында болатын салтанатты рәсімдерде ән айтып, би билейді. Фиджи аралдарында дхолак үнді халық музыкасы, бхандажан және киртанды орындау үшін қолданылады. 
Пәкістанда үйлену тойы кезінде отбасы мүшелері халық және той әндерін орындау үшін және дхолкис деп аталатын іс-шараларда өнер көрсету үшін қолданады. Сондай-ақ, бұл аспап наал деген атаумен де белгілі.`
    },
    images: ['/instruments/world/pakistan/dholak/1.jpg'],
    audio: '/audio/world/pakistan/dholak.mp3',
    country: 'pakistan',
    countryName: countryNames.pakistan,
    flag: countryFlags.pakistan
  },
  {
    id: 'pakistan_harmonica',
    name: { en: `INDIAN HARMONICA`, ru: `ИНДИЙСКАЯ ГАРМОНИКА`, kk: `ҮНДІ ГАРМОНИКАСЫ` },
    description: {
      en: `INDIAN HARMONICA

Indian harmonica is a slightly modified European harmonium.
Brought to Asia by Christian missionaries in the 18th-19th centuries, it became a traditional instrument in the musical culture of northern India at the beginning of the 20th century. Harmonica sounds in ensembles accompanying singers, instrumentalists and dancers. When it appeared in India, performer played on it sitting on a chair – as in Europe. But in the traditional Indian way, there were no tables or chairs – musicians usually sat on the floor. Therefore, the instrument changed over time: it lost its pedals, became smaller in size and acquired “manual control”. The modern Indian harmonica has a wooden case, behind it are hand furs. The musician pumps air with his left hand, and with his right plays the keys. 
The use of harmonics in an ensemble with Indian instruments initially provoked heated debate and rejection in India, especially among older musicians. It seemed to them that the fixed sound of the harmonica was dissonant with other instruments, it was alien. But over time, Indian musicians have developed a special technique for playing the harmonica, adapting it to national music.
In addition, in the middle of the 20th century, microtone harmonium was developed. It was played in the octave not 12, but 22 sounds, as required by classical Indian music. A high microtone is obtained by pulling the handle under the key. Thus, the harmonica can be tuned to perform any raga. The instrument is played while sitting, setting it in front of. Nowadays, Indian harmonica is firmly rooted in the tradition of traditional music making. It is also used in popular pop music and film music.`,
      ru: `ИНДИЙСКАЯ ГАРМОНИКА

Индийская гармоника — это чуть видоизмененная европейская фисгармония. 
Привнесенная в Азию христианскими миссионерами в XVIII-XIX веках, она в начале XX века стала традиционным инструментом в музыкальной культуре севера Индии. Гармоника звучит в ансамблях, сопровождающих певцов, инструменталистов и танцоров. Когда она появилась в Индии, на ней играли, сидя на стуле – как и в Европе. Но в традиционном индийском укладе не было ни столов, ни стульев – музыканты обычно располагались на полу. Поэтому инструмент со временем изменился: он лишился педалей, стал меньше по размеру и приобрёл «ручное управление». У современной индийской гармоники корпус деревянный, сзади него расположены ручные меха. Музыкант нагнетает воздух левой рукой, а правой играет на клавишах. 
Использование гармоники в ансамбле с индийскими инструментами вначале вызывало в Индии жаркие и неприятие споры, особенно среди музыкантов старшего поколения. Им казалось, что фиксированное звучание гармоники диссонирует с другими инструментами, является чужеродным. Но со временем индийские музыканты разработали особую технику игры на гармонике, адаптировав её для национальной музыки.
Кроме того, в середине XX века была разработана микротоновая фисгармония. Она воспроизводит в октаве не 12, а 22 звука, как того требует классическая индийская музыка. Высокий микротон получается путём вытягивания ручки под клавишей. Таким образом, гармоника может быть настроена для исполнения любой раги. На инструменте играют сидя, поставив его перед собой. В наши дни индийская гармоника прочно вошла в обиход традиционного музицирования. Она используется также в популярной эстрадной музыке и в киномузыке.`,
      kk: `ҮНДІ ГАРМОНИКАСЫ

Үнді гармоникасы – сырт келбеті сәл өзгеріске ұшыраған еуропалық фисгармония түрі.
Азияға XVIII-ХІХ ғғ. христиан дін таратушылары әкелген бұл аспап ХХ ғ. басында Үндістанның солтүстік аймағында музыка мәдениетінің дәстүрлі аспабына айналды. Гармоника ансамбль құрамында ойналып, әншілер мен бишілерді сүйемелдейді. Бастапқыда аспап Үнді еліне келгенде еуропадағыдай орындықта отырып ойнаған. Бірақ дәстүрлі үнді қоғамында орындық пен үстел қолданылмаған, музыканттар жерге отырып орындайтын. Сондықтан аспап уақыт өте келе өзгерістерге ұшырады: басқыштары алынды, көлемі кішірейіп, «қолмен басқару» қабілетін иемденді. Заманауи үнді гармоникасының корпусы ағаштан жасалады, артқы жағында қолмен басылатын тері жалғасқан. Музыкант сол қолымен ауаны қысып толтырып, оң қолымен клавишада ойнаған.
Гармониканы үнді дәстүрлі аспаптарымен қолдану бастапқыда үлкендер тарапынан оң қабылданбады. Олардың ойынша, гармониканың бекітілген дыбысталуы басқа аспаптармен үндеспеді. Бірақ заманауи үнді музыканттары аспапта ойнаудың ерекше әдісін ойлап тауып, оны ұлттық музыкаға бейімдеді.
Сонымен қатар, ХХ ғ. ортасында микротонды фисгармония жасалды. Ол үнді классикалық музыкасы талап ететіндей октавада 22 дыбыс беретін. Жоғары микротон клавиша астындағы тұтқаны тарту арқылы алынатын. Осылайша, гармоника кез келген раганы орындауға лайықтап күйге келтірілді. Музыкант жерге отырып, аспапты алдына қойып орындайды. Бүгінде үнді гармоникасы күнделікті дәстүрлі музыка орындауда кеңінен қолданылады. Ол, сондай-ақ, танымал эстрада музыкасы мен кино саласында да пайдаланылады.`
    },
    images: ['/instruments/world/pakistan/harmonica/1.jpg'],
    audio: '/audio/world/pakistan/harmonica.mp3',
    country: 'pakistan',
    countryName: countryNames.pakistan,
    flag: countryFlags.pakistan
  },
  {
    id: 'pakistan_pungi',
    name: { en: `Pungi`, ru: `Бин (пунги)`, kk: `Бин (пунги)` },
    description: {
      en: `Pungi

Bin (pungi) is an Indian wind musical instrument, a relative of the clarinet. It consists of an air chamber with a mouthpiece on one side and two tubes – melodic and bourdon – on the other. An air chamber with a mouthpiece can be made of dried pumpkin, or of wood, and canes of wood or reed.
With the help of a bourdon tube, only one long note is played, which serves as an accompaniment to the main melody played on the melody tube.
Melodies for pungi are performed without pauses, for this the continuous breathing technique is used: air is inhaled into the nose and at the same time is quickly pushed out through the mouth by the movement of the cheeks or tongue. Two tubes made of bamboo or cane have a single tongue. The ends, on which the tongues are fixed, are inserted into the pumpkin and therefore are not visible. Both tubes have 3–4 sound holes.
	•	The word “pungi” simply means “pipe”.
	•	Pungi is used by street musicians in India to conjure snakes.
	•	This instrument is also called a curbstone, mahudi, bin.`,
      ru: `Бин (пунги)

индийский духовой музыкальный инструмент, родственник кларнета. Состоит из воздушной камры с мундштуком с одной стороны и двумя трубками – мелодической и бурдонной – с другой. Воздушная камера с мундштуком может быть сделана из высушенной тыквы, либо из дерева, а трости из дерева или тростника.
С помощью бурдонной трубки исполняют только одну долгую ноту, которая служит аккомпанементом основной мелодии, исполняемой на мелодической трубке. 
Мелодии на пунги исполняются без пауз, для этого используется техника непрерывного дыхания: воздух вдыхается в нос и одновременно быстро выталкивается через рот движением щёк или языка. Две трубки, сделанные из бамбука или тростника, имеют одинарный язычок. Концы, на которых закреплены язычки, вставлены в тыкву и поэтому не видны. Обе трубки имеют 3-4 игровых отверстий.
	•	Слово «пунги» означает просто «трубка».
	•	Пунги используются уличными музыкантами в Индии для заклинания змей.
	•	Этот инструмент также называют тумба, махуди, бин.`,
      kk: `Бин (пунги)

кларнет тәріздес, Үнді елінің үрмелі музыкалық аспабы. Аспап бір жағы мүштігі бар ауа камерасынан, екінші жағынан әуенді және бурдонды екі түтікшеден тұрады. Мүштігі бар ауа камерасы кептірілген асқабақтан немесе ағаштан, ал түтіктер бамбук немесе қамыстан жасалады.
Бурдонды түтік көмегімен тек бір ғана ұзақ нота орындайды, ол әуенді түтікпен ойналатын негізгі музыканы сүйемелдейді. 
Пунгиде әуен тоқтаусыз орындалады, ол үшін үздіксіз тыныс алу техникасы қолданылады: мұрын арқылы дем алып, бет немесе тіл қозғалысымен ауыз арқылы бірден шығарылады. Түтіктердің бір тілшесі болады. Тілшелер бекітілген ұштары асқабақтың ішінде орналасқан, сондықтан сырт көзге көрінбейді. Қос түтікшеде де 3-4 ойын саңылауы болады. 
	•	«Пунги» сөзі «түтік» мағынасын білдіреді. 
	•	Аспапты Үндістанда көше музыканттары жыландарды сиқырлау үшін қолданады. 
	•	Бұл аспап тумба, махуди, бин деп те аталады.`
    },
    images: ['/instruments/world/pakistan/pungi/1.jpg'],
    audio: '/audio/world/pakistan/pungi.mp3',
    country: 'pakistan',
    countryName: countryNames.pakistan,
    flag: countryFlags.pakistan
  },
  {
    id: 'pakistan_sarangi',
    name: { en: `SARANGI`, ru: `САРАНГИ`, kk: `САРАНГИ` },
    description: {
      en: `SARANGI

Sarangi is an Indian lute-type stringed bowed instrument. According to Indian tradition, it is classified as an instrument of the tata-vadya group; widespread in the practice of classical music playing the Hindustani tradition (in the northern regions of India, Pakistan, Nepal); also has a number of regional traditional varieties.
The case is made of a single piece of wood, with a wide neck and notches on the sides, and a leather upper deck. 3-4 playing strings tuned in quarts and fifths, and 11-15 resonating tunes tuned for diatonic scale sounds that pass through the neck and are attached with pegs on the side. When playing, the performer holds the sarangi upright.
The tonal range of the instrument is quite extensive - up to two octaves.
Such instruments as sarinda, Dilruba, Ravanahasta (Ravanhatha), Esraj, Chikara, Kamaicha (Kemancha) and others are considered traditional prototypes of the sarangi. A related sarangi instrument is also common in Afghanistan.
It is used as an accompanying and solo instrument to accompany dances and theatrical performances. There is no doubt the connection of the sarangi with the Indomuslim vocal and dance traditions; Actually solo performance on it grew out of a detailed accompaniment of vocal compositions (Khayyal, Thumri) and Kathak-style dance. Among the prominent sarangi performers in the 20th century are the Bundu Khan (Pakistan) and Rama Narayana (India).`,
      ru: `САРАНГИ

Саранги – индийский струнный смычковый инструмент лютневого типа. По индийской традиции классифицируется как инструмент группы тата-вадья; распространён в практике классического музицирования традиции хиндустани (в северных районах Индии, Пакистане, Непале); имеет также ряд региональных традиционных разновидностей.
Корпус изготавливается из цельного куска дерева, с широкой шейкой и выемками по бокам, и кожаной верхней декой. 3-4 игровые струны, настроенные по квартам и квинтам, и 11-15 резонирующих, настроенных по тонам диатонического звукоряда, которые проходят через шейку и крепятся колками сбоку. При игре исполнитель держит саранги вертикально.
Тональный диапазон инструмента довольно обширный — до двух октав.
Традиционными прототипами саранги считают такие инструменты, как саринда, дильруба, раванахаста (раванхаттха), эсрадж, чикара, камайча (кеманча) и другие. Родственный инструмент саранг распространён также в Афганистане.
Используется как аккомпанирующий и сольный инструмент, для сопровождения танцев и театрализованных представлений. Несомненна связь саранги с индомусульманскими вокальными и танцевальными традициями; собственно сольное исполнительство на нём выросло из развёрнутого сопровождения вокальных композиций (кхайял, тхумри) и танца в стиле катхак. Среди выдающихся исполнителей на саранги в XX веке следует назвать Бунду Хана (Пакистан) и Рама Нарайяна (Индия).`,
      kk: `САРАНГИ

Саранги – лютня типтес үнді халқының ішекті-ыспалы аспабы. Үнді дәстүрі бойынша тата-вадья тобына жатады; Хиндустани (Үндістанның солтүстік аудандарында, Пәкістан мен Непалда) музыкасында кең таралған; аймақтық түрлері де кездеседі.
Корпусы тұтас ағаштан жасалады, мойны жуан, шеттерінде ойықтары болады, жоғары декасы терімен қапталады. Кварта және квинтаға келтірілген 3-4 ойын ішектері, диатоникалық дыбыс қатарының үніне сай реттелген резонанстаушы 11-15 ішек мойыннан өтіп, бүйірдегі құлақтарға бекітіледі. Ойын кезінде орындаушы аспапты тік ұстайды. 
Аспаптың дыбыс диапазоны кең – екі октава шамасында. 
Сарангидің дәстүрлі прототиптері қатарына саринда, дильруба, раванахаста, эсрадж, чикара, камайча, т.б. жатады. Туыстас саранг аспабы Ауғанстанда танымал.
Би және театр қойылымдарында сүйемелдеуші және жеке аспап ретінде қолданылады. Аспаптың үнді-мұсылман вокалды және би дәстүрімен байланысы терең, аспапта жеке орындаушылық осы вокалды туындыларды (кхайял, тхумри) және катхак үлгісіндегі биді кеңінен сүйемелдеуден қалыптасқан. ХХ ғ. танымал орындаушылардан Бунду Хан (Пәкістан) мен Рам Нарайянды (Үндістан) атауға болады.`
    },
    images: ['/instruments/world/pakistan/sarangi/1.jpg'],
    audio: '/audio/world/pakistan/sarangi.mp3',
    country: 'pakistan',
    countryName: countryNames.pakistan,
    flag: countryFlags.pakistan
  },
  {
    id: 'pakistan_satara',
    name: { en: `SATARA`, ru: `САТАРА`, kk: `САТАРА` },
    description: {
      en: `SATARA

Satara or pava is a musical instrument belonging to the family of flutes. It is a double wooden recorder from the pastoral communities of the Thar Desert between India and Pakistan.
The pava is known in southern Pakistan, in the regions of Gujarat and Rajasthan, exists itself in several forms.`,
      ru: `САТАРА

Сатара или пава является музыкальным инструментом, принадлежащим к семейству флейт. Это двойной деревянный регистратор из пастушеских общин пустыни Тар между Индией и Пакистаном. 
Пава  известна на юге Пакистана, в регионах Гуджарат и Раджастхан, инструмент существует в нескольких формах.`,
      kk: `САТАРА

Сатара немесе пава флейта тобына жататын музыкалық құралы. Бұл қос үрмелі ағаш аспабын Үндістан мен Пәкістан арасындағы Тар шөліндегі бақташылық қоғамда кеңінен пайдаланады. 
Пава көп жағдайда Пәкістанның оңтүстігінде, Гуджарат және Раджастхан аймақтарында кеңінен танымал, оның бірнеше түрлері бар.`
    },
    images: ['/instruments/world/pakistan/satara/1.jpg'],
    audio: '/audio/world/pakistan/satara.mp3',
    country: 'pakistan',
    countryName: countryNames.pakistan,
    flag: countryFlags.pakistan
  },
  {
    id: 'pakistan_shehnai',
    name: { en: `Shehnai`, ru: `Шенай (шенаи, шехнаи, шахнаи) (этимология предположительно восходит к «наи-и-шахи», перс.`, kk: `Шенай (шенаи, шехнаи, шахнаи) (этимологиясы шамамен «наи-и-шахи», парсы. «шах флейтасы» сөзінен)` },
    description: {
      en: `Shehnai (etymology presumably goes back to “nai-i-shahi”, Persian – “Shah’s flute”) – a bilingual oboe; widespread in the practice of traditional and classical music playing in the north of Hindustan (north of India, Nepal, Pakistan). An analogue of the South Indian oboe Nagaswaram and Tibetan jailing.
It consists of a wooden case widened downward (more often from hardwoods of ebony type), the length of which for instruments of different sizes varies between 30-45 cm. The case ends with a wide copper (brass) or silver bell with bent edges. On the body are 8-9 holes. The top 7 holes are gaming and are designed to deploy, in fact, a melodic line; lower ones are usually waxed or remain open.
A pair of fan-shaped canes from a palm leaf is attached to the place of blowing air. Additional (spare) canes are hung from the upper part of the hull on twine, as well as a special ivory or silver needle, with which the canes are cleaned and straightened. The shehnai design, like other wind instruments in the region, does not provide any mechanisms; sound extraction is achieved both in the usual way and by blowing, which allows to achieve a high degree of expressiveness and technicality in the process of playing it.
The design features of shehnai, as well as the skill of musicians associated with this instrument, make it possible to cover a wide register-range space in the development of musical material, including all three registers: lower (mandra), middle (madhya) and upper (tara), a total of about five octaves. Based on the non-temperament, which is typical for the musical thinking of the region as a whole, the practice of playing shehnai provides for the most important aspect of the presence of micro-intervals-shruti, enriching the musical fabric with the finest sound pitch nuances.
There are two varieties of shehnai in size and purpose. The big shehnai is the main solo instrument; the shehnai of smaller sizes is called sur peti (often there are two such instruments in the ensemble) and has 2-3 holes, partially or completely covered with wax for tuning to a specific tone. In the ensemble, they serve as bourdoning instruments leading an auxiliary sound line.
In different local languages, depending on the size of the instrument, shehnai can be found under various names: mohori, kuzah, mukhavina, sundri, naferi, mela, nagswaram.
It is not known for certain whether the shehnai is an original Indian instrument, although it is used by the tribes. It is believed that the earliest mention of it – under the name madhwari – is in the “Brihaddeshi” (V-IX centuries BC), but a certain image of shehnai can only be found in miniatures dating back to the 16th century. Some researchers are of the opinion that this instrument was borrowed from Central Asia and Mongolia, where it is known as surnay and zurna.`,
      ru: `Шенай (шенаи, шехнаи, шахнаи) (этимология предположительно восходит к «наи-и-шахи», перс.

«шахская флейта») – двухъязычковый гобой; распространен в практике традиционного и классического музицирования севера Индостана (север Индии, Непал, Пакистан). Аналог южноиндийского гобоя нагасварам и тибетского гъялинг.
Состоит из расширенного книзу деревянного корпуса (чаще – из твердых пород типа эбена), длина которого у инструментов разной величины варьируется в пределах 30-45 см. Корпус заканчивается широким медным (латунным) или серебряным раструбом с отогнутыми краями. На корпусе расположены 8-9 отверстий. Верхние 7 отверстий являются игровыми и предназначены для развертывания, собственно, мелодической линии; нижние обычно залепляются воском либо остаются открытыми.
В месте вдувания воздуха крепится пара веерообразных тростей из пальмового листа. К верхней части корпуса на бечевках подвешиваются дополнительные (запасные) трости, а также специальная игла из слоновой кости или серебра, с помощью которой трости прочищаются и выправляются. Конструкция шенай, подобно остальным духовым инструментам региона, не предусматривает каких-либо механизмов; звукоизвлечение достигается как обычным путем, так и передуванием, что позволяет достигать в процессе игры на нем высокой степени выразительности и техничности.
Конструктивные особенности шенай так же, как и мастерство музыкантов, связанных с этим инструментом, дает возможность охватывать в развитии музыкального материала широкое регистрово-диапазонное пространство, включающее все три раговых регистра: нижний (мандра), средний (мадхья) и верхний (тара), в целом около пяти октав. Базируясь на не темперированном строе, что характерно для музыкального мышления региона в целом, практика музицирования на шенай предусматривает в качестве важнейшего аспекта наличие микроинтервалов-шрути, обогащающих музыкальную ткань тончайшими звуковысотным нюансами.
Существуют две разновидности шенай по величине и предназначению. Большой шенай является основным солирующим инструментом, шенай меньших размеров называется сур пети (нередко в ансамбле таких инструментов два) и имеет 2-3 отверстия, частично или полностью закрытых воском для настройки на определенный тон. В ансамбле они выполняют функцию бурдонирующих инструментов, ведущих вспомогательную звуковую линию.
На разных местных языках, в зависимости от размеров инструмента, шенай можно встретить под различными названиями: мохори, кузах, мукхавина, сундри, нафери, мела, нагсварам. 
Точно не известно, является ли шенай оригинальным индийским инструментом, хотя он и используется племенами. Предполагают, что самое раннее упоминание о нём – под названием мадхвари – имеется в «Брихаддеши» (V-IХ вв. до н.э.), но определённое изображение шенай можно встретить лишь на миниатюрах, относящихся к ХVI веку. Некоторые исследователи придерживаются мнения о том, что этот инструмент был заимствован из Центральной Азии и Монголии, где он известен как сурнай и зурна.`,
      kk: `Шенай (шенаи, шехнаи, шахнаи) (этимологиясы шамамен «наи-и-шахи», парсы. «шах флейтасы» сөзінен)

екі тілшелі гобой, Хиндустанның солтүстік аудандарының (Үндістанның солтүстігі, Непал, Пәкістан) дәстүрлі және классикалық музыкасында қолданылады. Оңтүстік Үндістандағы нагасварам және тибеттік гъялинг аспаптарының аналогі.
Ағаштан жасалған корпусы төмен қарай кеңейе түседі (эбен секілді мықты ағаштар қолданылады), ұзындығы 30-45 см аралығында болады. Корпус шеттері жазылған мыс (жез) немесе күміс кеңернеумен аяқталады. Онда 8-9 саңылау орналасқан. Олардың жоғарғы 7-еуі ойынға арналған, төменгілері, әдетте, балауыз бітеледі немесе ашық қалдырылады.
Ауа үрлейтін тұсқа пальма жапырағынан жасалған желпуіш тәрізді қос түтік бекітіледі. Корпустың жоғарғы бөлігіне жіңішке жіппен қосымша түтіктер, сондай-ақ, піл сүйегінен немесе күмістен жасалған түтіктерді тазалап, түзететін арнайы ине ілінеді. Аймақтағы басқа да үрмелі аспаптар секілді, шенай құрылымында да қандай да бір механизмдер болмайды; дыбыс алу тәсілдері әдеттегі тәсілмен және ойын барысында анықтық пен шеберліктің жоғарғы дәрежесін көрсететін қайта үрлеу әдісімен де орындалады. 
 Музыканттардың шеберлігі секілді, шенайдың құрылымдық ерекшеліктері музыкалық материалдың дамуында барлық 3 рага регистрлері: төменгі (мандра), ортаңғы (мадхья) және жоғарғы (тара), жалпы 5 октавадан тұратын ауқымды регистрлік-диапазондық кеңістікті қамтуға мүмкіндік береді. 
Аймақтағы музыка орындауда шығарманы нәзік дыбыстармен байытатын аспект – микроинтервал-шрутилердің болуын міндетті талап етеді. 
Көлеміне және қолданылуына байланысты шенайдың 2 түрі болады. Үлкен шенай жеке орындаудағы негізгі аспап болса, кіші шенай сур пети (ансамбльде мұндай аспаптар 2-еу) деп аталып, белгілі бір үндестікке келтіру үшін жартылай не толықтай балауызбен жабылатын 2-3 саңылауы болады. Ансамбльде олар қосымша дыбыс беретін бурдон аспаптарының қызметін атқарады. 
Шенай өлшемдері мен жергілікті тілдердің алуандығына байланысты әр түрлі аталады: мохори, кузах, мукхавина, сундри, нафери, мела, нагасварам. 
Шенайды жергілікті тайпалар қолданғанмен, оның нақты шығу тегі белгісіз. Аспап туралы алғашқы жазбалар «Брихаддеши» еңбегінде (б.з.б. V-ІХ ғғ.) мадхвари атауымен кездеседі. Шенай бейнелері ХVІ ғ. миниатюраларына тән. Кейбір ғалымдар шенай атауымен белгілі бұл аспап Орталық Азия мен Монғолияда сурнай, зурна аталып, Үнді жеріне аталған екі өңірден келген деседі.`
    },
    images: ['/instruments/world/pakistan/shehnai/1.jpg'],
    audio: '/audio/world/pakistan/shehnai.mp3',
    country: 'pakistan',
    countryName: countryNames.pakistan,
    flag: countryFlags.pakistan
  },
  {
    id: 'pakistan_sitar',
    name: { en: `SITAR`, ru: `СИТАР`, kk: `СИТАР` },
    description: {
      en: `SITAR

Sitar is a multi-stringed musical instrument used to perform Indian classical music, belonging to the group of stringed musical instruments.
The main strings of the sitar are 7 (5 melodic and 2 bourdon). In addition there are 9-13 resonating strings called taraf (orchestra). Resonating strings, responding to the sounds of the main ones, create that unique sound that distinguishes the sitar from other instruments. Sounds are extracted with a special pick, called “misrab”, worn on the index finger.
The name probably comes from the Persian “setar” – the progenitor of many stringed instruments of the East. A sitar appeared in India in the 13th century during a period of increasing Muslim influence and initially looked something like its close relative – the Tajik setor, which, however, is three-stringed (“se” means three). However, in India, the instrument was transformed: the medium-sized wooden resonator was replaced by a huge pumpkin, but they did not stop there and added another pumpkin resonator, attaching it to the top of the hollow neck, the deck was richly decorated with pink wood and ivory, and the imposed vein frets were replaced with metal arcuate.
Famous sitarists: Ravi Shankar, Anushka Shankar, Musharaff Khan, George Harrison, Chhote Rahimat Khan, Robbie van Leuven.`,
      ru: `СИТАР

Ситар – многострунный  музыкальный инструмент, используемый для исполнения индийской классической музыки, относящийся к группе струнных щипковых музыкальных инструментов.
Основных струн у ситара – 7 (5 мелодических и 2 бурдонных). Помимо того на ситаре ещё 9-13 резонирующих струн, которые называются тараф (оркестр). Резонирующие струны, отзываясь на звуки основных, создают то уникальное звучание, которое отличает ситар от других инструментов. Звуки извлекают специальным медиатором, называемым «мизраб», надеваемым на указательный палец.
Название, вероятно, происходит от персидского «сетар» – прародителя многих струнных инструментов Востока. Появился ситар в Индии в XIII веке в период усиления мусульманского влияния и выглядел первоначально примерно так, как его близкий родственник – таджикский сетор, который, однако, трёхструнный (се означает три). Однако в Индии инструмент преобразился: средних размеров деревянный резонатор заменили на огромный тыквенный, но на этом не остановились и добавили ещё один тыквенный резонатор, прикрепив его к верхушке пустотелого грифа, деку богато украсили розовым деревом и слоновой костью, а навязанные жильные лады заменили металлическими дугообразными.  
Известные ситаристы: Рави Шанкар, Анушка Шанкар, Мушарафф Хан, Джордж Харрисон, Чхоте Рахимат Кхан, Робби ван Леувен.`,
      kk: `СИТАР

Ситар – көп ішекті музыкалық аспап, үнді халқының классикалық музыкасын орындау барысында қолданылады. Бұл музыкалық құрал ішекті-шертпелі аспаптар тобына жатады. 
Ситарда негізгі ішек – 7, қалған 9-13 қосымша дыбыс ішектері болып келеді. Қосымша дыбыс ішектер негізгі ішектермен үйлесім тауып ерекше дыбыстар береді. Бұл құбылыс ситарды басқа аспаптарға қарағанда ерекшелендіреді. Ситарда ойнау сұқ саусаққа киген «мизраб» деп аталатын медиатор арқылы іске асады.
Атауы Шығыстың бірақатар аспаптарының арғы тегі саналатын парсының «сетарынан» бастау алуы мүмкін. Үндістанда ситар ХІІІ ғ. мұсылман ықпалы күшейген тұста қалыптасып, бастапқыда тәжік сеторына ұқсас болды. Бірақ Үнді елінде аспап өзгерістерге ұшырады: көлемі орташа ағаш резонаторды үлкен асқабақтан жасалған түріне ауыстырды, оған қосымша асқабақтан жасалған тағы бір резонатор қосып, іші қуыс мойынға бекітті; декасын баия ағашымен және піл сүйегімен әсемдеген, байланған ішек пернелерді металдан жасалған доға тәріздес түрлерімен алмастырды.
Танымал орындаушылар: Рави Шанкар, Анушка Шанкар, Мушарафф Хан, Джордж Харрисон, Чхоте Рахимат Кхан, Робби ван Леувен.`
    },
    images: ['/instruments/world/pakistan/sitar/1.png'],
    audio: '/audio/world/pakistan/sitar.mp3',
    country: 'pakistan',
    countryName: countryNames.pakistan,
    flag: countryFlags.pakistan
  },
  {
    id: 'pakistan_tabla',
    name: { en: `Tabla`, ru: `Табла`, kk: `Табла` },
    description: {
      en: `Tabla in Arabic means “drum”. It is believed that the tabla was invented by the Sufi Saint Amir Khusro, dividing the ancient percussion instrument pakhavaj into two parts. Tabla consists of two drums: small – tabla or dayan and large – dag or bayan (button accordion). On a dag play with the left hand. It can be made of clay, copper, silver or nickel. Tabla is made from a hollow piece of wood.
The membrane of each drum is connected to the housing through a leather hoop extending around the circumference of the housing; a system of belts is passed through it, girdling the body of each drum from top to bottom. Between the belts of a dayan 8 wooden blocks (gitti) are horizontally placed; their shift up and down (knocking out with a special hammer) regulates the tension of the belts and serves to fine-tune the drum. Bayan does not have such a system that adjusts the tuning and does not have any pronounced pitch-certainty, although in general it sounds lower and “deeper” than the right drum. Each of the membranes of the tabla has a complex device and consists of two pieces (round, continuous and annular with a recess inside) of the skin, usually a goat, superimposed on top of one another so that a kind of closed hole is placed in the middle of the membrane. It is located at the tabla in the center, and at the dagga it is somewhat shifted to the edge; both holes are covered with a constantly fastening cake of a dark-colored mixture, similar to that which is applied to the membranes of mridang, pakhavaj and other drums of the region.
This coating (syakhi), which includes rice or wheat flour, metal sawdust and a special adhesive, makes the instrument timbre, sound-pitch, dynamic, technically flexible and expressive - qualities that distinguish the classical drums of the region as a whole; but even among them the tabla stands out for its special variety and perfection of aesthetic and technical qualities.
Researchers are inclined to draw parallels between the development of the instrument and the growth of its popularity and the development of those genres of vocal music (mainly khyal and thumri) in which it acts as a metro-rhythmic instrument. The tabla is played while sitting, putting both drums in front of you and placing under the one of them, or under both, thick cloth “bagels”. The drums during the game are often deployed with an inclination (tabla from yourself, dagga to yourself), which provides a more convenient position of contact between the hands and membranes.
The technique and methods of playing this instrument vary widely depending on the traditions of the local gharana school. Currently, 5 gharan are most famous: Punjabi, Delhi, Benares, Farujabad and Ajrada. In the 19th and early 20th centuries the tabla was used mainly as an instrument in the ensemble that accompanied singing and dancing (kathak) or the play of a solo instrumentalist. In such an ensemble, characteristic of the Hindustani tradition, it was assigned the role of an instrument that presents and develops the line of metro-rhythmic development, and as a whole – performs the function of metro-rhythmic organization of the entire musical text.
There is a legend telling about the birth of the tabla. At the time of Akbar, there were two professional performers on pakhavaj. They were irreconcilable rivals and constantly competed with each other. Once, in a heated battle of a drum contest, one of the rivals – Sudhar Khan was defeated and, unable to bear his bitterness, threw his pakhavaj into the ground. The drum broke into two parts, turning into tabla and dagga.`,
      ru: `Табла

на арабском – «барабан». Считают, что таблу изобрёл Суфий Святой Амир Кхусро, разделив старинный ударный инструмент Пакхавадж на две части. Табла состоит из двух барабанов: маленького – табла или даяна и большого – дага или баяна. На даге играют левой рукой. Она может быть сделана из глины, меди, серебра или никеля. Табла изготавливают из полого куска дерева.
Мембрана каждого барабана соединена с корпусом через кожаный обруч, проходящий по окружности корпуса; сквозь него пропущена система ремней, опоясывающих корпус каждого барабана сверху вниз. Между ремнями дайяна помщаются горизонтально 8 деревянных брусков (гитти); их смещение вверх и вниз (подбивание специальным молоточком) регулирует натяжение ремней и служит для точной настройки барабана. Байян не имеет подобной системы, корректирующей настройку и не обладает какой-нибудь выраженной звуковысотной определённостью, хотя в целом звучит ниже и «глубже» правого барабана. Каждая из мембран табла имеет сложное устройство и состоит из двух кусков (круглого сплошного и кольцеобразного с выемкой внутри) кожи, как правило, козлиной, накладываемых друг на друга таким образом, что по середине мембраны размещается своего рода закрытое отверстие. Оно расположено у табла в центре, а у дагга несколько смещено к краю; оба отверстия залеплены постоянно крепящейся лепешкой из смеси темного цвета, подобно той, которую накладывают на мембраны мриданга, пакхаваджа и других барабанов региона.
Это покрытие (сьяхи), в состав которого входят рисовая или пшеничная мука, металлические опилки и специальное склеивающее вещество, делает инструмент темброво, звуковысотно, динамически, технически гибким и выразительным – качества, отличающие в целом классические барабаны региона; но даже среди них табла выделяется особым разнообразием и совершенством эстетических и технических качеств.
Исследователи склонны проводить параллели между развитием инструмента и ростом его популярности и развитием тех жанров вокальной музыки (главным образом, кхьял и тхумри), в которых он выступает в качестве метроритмического инструмента. На табла играют сидя, поставив оба барабана перед собой и подложив под один из них, либо под оба, толстые матерчатые «бублики». Барабаны при игре нередко разворачивают с наклоном (табла от себя, дагга к себе), что обеспечивает более удобную позицию соприкосновения рук и мембран.
Техника и приёмы игры на этом инструменте значительно рознятся в зависимости от традиций локальной школы-гхараны. В настоящее время наибольшую известность имеют 5 гхаран: пенджабская, делийская, бенаресская, фарухабадская и аджрада. В ХIХ и начале ХХ вв. табла использовался в основном как инструмент в составе ансамбля, сопровождавшего пение и танцы (катхак) или игру солиста-инструменталиста. В таком ансамбле, характерном для традиции хиндустани, ему отводилась роль инструмента, презентирующего и развивающего линию метроритмического развёртывания, и в целом – выполняющего функцию метроритмической организации всего музыкального текста.
Существует легенда, рассказывающая о рождении табла. Во времена Акбара жили два профессиональных исполнителя на пакхавадж. Они были непримиримыми соперниками и постоянно соревновались друг с другом. Однажды в жаркой схватке барабанного состязания один из соперников – Судхар Хан потерпел поражение и, не в силах вынести его горечь, швырнул свой пакхавадж оземь. Барабан разбился на две части, превратившись в табла и дагга.`,
      kk: `Табла

араб тілінде «барабан» мағынасын білдіреді. Аспапты алғаш сопы Амир Хусроу көненің ұрмалы пакхавадж аспабын екіге бөліп жасаған деп саналады. Табла екі барабаннан тұрады: кішкентай – табла немесе даян және үлкен – дага немесе баян. Дагада сол қолмен ойнайды. Ол саздан, мыстан, күміс немесе никельден жасалады. Табла іші қуыс ағаштан жасалады. Әр барабанның мембранасы корпуспен тері шеңбер арқылы байланысқан; бұл шеңбер арқылы барабандарды жоғарыдан төмен қарай қоршайтын белдіктер өтеді. Даян (табла) белдіктері арасында көлденеңінен 8 ағаш кесегі (гитти) орналасады, олардың жоғары-төмен қозғалысы (арнайы балғашық арқылы) белдіктердік керілісін реттеп, барабанды күйге келтіру қызметін атқарады. Баянның (дага) мұндай реттеуші жүйесі және айқын дыбыс биіктігі жоқ, дегенмен де, оң жақ барабанмен салыстырғанда дыбысы төмен әрі «терең» болып келеді. Ешкі терісінен жасалған әр мембрананың құрылымы күрделі, олар мембрана ортасына жабық саңылау жасай отырып орналасады. Ол табланың ортасында, дагада шет жақта орналасады; екі саңылау да мриданга, пакхаваджа және аймақтағы басқа да барабандардың мембранасына салынатындай күңгірт түсті жабысқақ сазбен жапсырылған.
Құрамына күріш не бидай ұны, металл үгінділері мен арнайы желімдеуші зат кіретін бұл жабын аспапты тембрлік, дыбыс биіктігі, динамикалық, техникалық тұрғыда икемді әрі мәнерлі етеді. Бұл қасиеттер аймақтағы классикалық барабандарға тән, десе де, олардың арасында табла алуандығы мен эстетикалық және техникалық қасиеттерімен ерекшеленеді. 
Зерттеушілер аспаптың дамуы мен танымалдығы артуы және ол метроритмикалық аспап ретінде қатынасатын вокалды музыка жанрларының (негізінен, кхьял, тхумри) өркендеуі арасында салыстыру жұмыстарын жиі жүргізеді. Табланың қос барабанын алдыға қойып, астына матадан жасалған қалың негіз қойып, отырған күйде ойнайды. Әдетте, ойын барысында барабандарды көлбеу қалыпқа бұрып қояды (табланы өзінен ары қарай, даганы өзіне бағыттап), бұл қол мен мембрананың өзара жанасуын қолайлы жағдай жасайды.
Аспапта ойнау тәсілдері мен техникасы жергілікті гхарана мектебі дәстүріне байланысты әр түрлі болады. Бүгінде кең танымал бес гхараналар бар: пенджаб, дели, бенарес, фарухабад, аджрад. ХІХ-ХХ ғғ. басында табла негізінен ансамбль құрамында ән-биді немесе жеке орындаушыны      сүйемелдеген аспап ретінде қолданылды. Хиндустан дәстүріне сай келетін мұндай ансамбльде табла музыкалық мәтінді таныстырушы әрі метроритмикалық дамытушы, жалпылағанда – әуеннің толық метроритмикалық ұйымдастырушысы қызметінде болды.
Табланың қалыптасуы туралы бір аңызда Ұлы Моғол империясының императоры Акбар тұсында пакхаваджда ойнайтын екі кәсіби орындаушы өмір сүрген. Олар бітіспес қарсылас болып, әрдайым бір-бірімен жарысып жүрді. Кезекті қызу сайыста қарсыластардың бірі – Судхар Хан – жеңіліп, оған мойынсұна алмай, аспапты жерге гүрс етіп тастап жібереді. Барабан екіге бөлініп, табла мен дагаға айналды.`
    },
    images: ['/instruments/world/pakistan/tabla/1.png', '/instruments/world/pakistan/tabla/2.png'],
    audio: '/audio/world/pakistan/tabla.mp3',
    country: 'pakistan',
    countryName: countryNames.pakistan,
    flag: countryFlags.pakistan
  },
  {
    id: 'poland_bagpipe',
    name: { en: `Podhalan duda`, ru: `Подхаланские дуды`, kk: `Подхаланские дуды` },
    description: {
      en: `Podhalan duda

“Podhalan duda” is a polish kind of bagpipes. The bagpipe is included in the list of the national intangible heritage of Poland and the list included not only the instruments themselves, but also the process of making them and playing them. 
Podhalanskie dudy is the only one of the Polish folk instruments with four part sound. The instrument consists of a bag made of goat skin and wooden pipes. The structure of the instrument is very similar to the bagpipes. A characteristic element of the duda is the upper part in the form of a wooden goat's head.
The bagpipe was known in the Roman army. Migrated from Asia into Europe in the middle ages, in the IX century, were included in the European folk instrumentation. Their heyday was in the XV century when was used in Royal courts, is also applied in military bands.
Bagpipes are especially popular to this day in folk music tape (the so-called bagpipe) and Bulgarian (so-called Hyde-Hyde), also in music of Ireland (uilleann pipes), areas of Spain – Galicia and Asturias (gaita) and France – Brittany (biniou).  
In Poland, depending on the region, the instrument is called the goat or gajdami. Bagpipes are a popular folk instrument of the Highlands, the Żywiec Beskid, Province, Silesia, and in the first place Wielkopolski. 
 Zygmunt Gloger in his “Old Polish ENCYCLOPAEDIA” states that the Famous winner of the Turks, Samuel Prince Mikhail Stepanenko, taken in the times of Sigismund III captured a moonshine walk to Istanbul, to accompany on duda to comfort partners troubles and is easier to make procession.`,
      ru: `Подхаланские дуды

польский вид волынки. Внесены в список национального нематериального наследия Польши. Также в список вошли не только сами инструменты, но и процесс их изготовления и игра на них.
Подхаланские дуды – это единственный из народных польских инструментов, имеющий четырёхголосное звучание. Инструмент состоит из мешка, сделанного из козьей шкуры, и деревянных труб. По своему строению дуды очень напоминают волынку. Характерным элементом дуд является верхняя часть в виде деревянной козьей головы.
Волынки были известны еще в римской армии. Мигрировали из Азии в Европу в средние века, в IX в., были включены в европейский народный инструментарий. Их расцвет пришелся на XV век, когда были использованы в королевских дворах, нашли применение также в военных оркестрах. 
Волынка особенно популярна и по сей день в народной музыке (так называемая волынка) и болгарской (так называемого гайда-гайда), также в музыке из Ирландии, районов Испании – Галисии и Астурии (гайта) и Франции – Бретани (биньо).  
В Польше, в зависимости от региона, называют козлом, гайда или коза.  Волынка является популярным народным инструментом Нагорья, Живецкого Бескида, Воеводства, Силезии и в первую очередь - Великопольский. 
 Зигмунт Глогер в своей «Старопольской Энциклопедии» указывает, что знаменитый победитель Турок, Самуил принц Степаненко Михаил, взятый во времена Сигизмунда III в плен, шел пешком до Стамбула, аккомпанируя на дуде, чтобы утешить партнеров и сделать легче знойное шествие.`,
      kk: `Подхаланские дуды

волынканың поляк түрі. Польшаның ұлттық материалдық емес мұралар тізіміне енгізілген, бұл тізімге тек аспап қана емес, сондай-ақ, оны жасау мен аспапта орындау тәсілдері де енгізілді.
Подхаланские дуды – поляк ұлттық аспаптарының ішіндегі төрт дауысты жалғыз аспап болып табылады. Аспап ешкі терісінен жасалған қап пен бірнеше ағаш түтіктерден тұрады. Құрылымы бойынша аспап волынкаға ұқсас. Аспапқа тән белгі деп ағаштан жасалған ешкі басының болуы.
Волынкалар рим әскерінде де танымал болған. Азиядан Еуропаға ІХ ғ. шамасында келген аспап еуропаның халық аспаптары санатына қосылады. Аспап танымалдығының артып, гүлдену кезеңі патша сарайларында, әскери оркестрлерде қолданыла бастаған кез ХV ғ. сәйкес келеді.
Волынка әлі күнге дейін маңызын жоймаған, халық музыкасында (волынка), болгарларда (гайда-гайда), Ирландияда, Испанияның Галисия және Астурия аймақтарының (гайта), Францияның Бретан өңірінде (биньо) музыкасында аса танымал.
Польшада аймақтық ерекшеліктеріне байланысты козел, гайда немесе коза деп атайды. Волынка Нагорье, Живецкие Бескиды, Воеводство, Силезия және Великопольша аймақтарында танымалдығы жоғары. 
	Зигмунт Глогер «Старопольская Энциклопедия» еңбегінде «Атақты түріктерді бағындырушы, ІІІ Сигизмунд кезінде тұтқында болған Самуил ханзада Степаненко Михаил Стамбулға жаяу жорыққа шыққанда дуда аспабында ойнап, серіктерінің көңілін аулауға және қызу шеруді сәл жеңілдетуге тырысқанын» жазады.`
    },
    images: ['/instruments/world/poland/bagpipe/1.jpg'],
    audio: '/audio/world/poland/bagpipe.mp3',
    country: 'poland',
    countryName: countryNames.poland,
    flag: countryFlags.poland
  },
  {
    id: 'romania_nai',
    name: { en: `Nai`, ru: `Най`, kk: `Най` },
    description: {
      en: `Nai

Moldavian, Romanian and Ukrainian wooden wind musical instrument – longitudinal multi-barrel flute. It consists of 8-24 tubes of different lengths, reinforced in an arched leather clip. The pitch of the sound depends on the length of the tube. Phono diatonic. On us folk melodies of various genres are performed – from doina to dance motifs.
Nai is an ancient musical multi-tube instrument designed for ensemble and solo performance. Its closest relatives are in Europe, South America, Asia, Oceania - in general, around the world. In Russia, it is kugikly or tsevnitsa, in England - penpayo, in the Netherlands and France the name “Pan's flute” is still preserved. In ancient Greece, the multi-barrel flute is called the syrinx.
The emergence of such tools by historians is attributed to the Neolithic era, that is, to the period from five to two thousand years BC. It was in those distant times that a person, according to scientists, began to comprehend sound-altitude relationships, in other words, it began to realize that the longer the tube – the lower the sound, and vice versa, the tube on the instrument is shorter – the sound is higher. So the idea came to group several tubes of different heights, and one of the oldest musical instruments appeared – Pan's flute.
Pan's flute is spoken of in the parable of Virgil, who lived in the first century BC. The parable tells about the existence of an instrument, the components of which are seven different reed tubes, the name of which is associated with mythical characters – the nymph Syrinx and nature tamer Pan. The goat-footed and long-bearded Pan took part in the night dance of the nymphs, playing the flute. Seeing the beautiful Syrinx, Pan fell in love with her without a memory, but the nymph was frightened of his appearance and ran away from him. The river blocked her path. “What to do?” The young beauty sobbed. And the God of the river heard her prayers, saved her by turning into a reed. The inconsolable Pan could not forget the Syrinx and, sitting on the shore, cut some reeds. He fastened the reeds with wax and a sweet-sounding flute turned out, which has come down to our days as the Pan flute.`,
      ru: `Най

молдавский, румынский и украинский духовой деревянный музыкальный инструмент – продольная многоствольная флейта. Состоит из 8-24 трубок разной длины, укреплённых в дугообразной кожаной обойме. От длины трубки зависит высота звука. Звукоряд ная диатонический. На нае исполняются народные мелодии различных жанров – от дойны до танцевальных мотивов.
Най – древний музыкальный многотрубчатый инструмент, предназначенный для ансамблевого и сольного исполнения. Его ближайшие родственники обитают в странах Европы, Южной Америки, Азии, Океании – в общем, по всему миру. В России это кугиклы или цевница, в Англии – пенпайо, в Нидерландах и Франции до сих пор сохранилось название "флейта Пана". В Древней Греции многоствольная флейта называется сиринкс.
Появление подобных инструментов историки относят к эпохе неолита, то есть к периоду от пяти до двух тысяч лет до н.э. Именно в те далекие времена человек, по мнению ученых, начал осмысливать звуковысотные соотношения, другими словами, стал осознавать, что чем длиннее трубка на инструменте, тем ниже звук, и наоборот, чем трубка на инструменте короче, тем звук выше. Так появилась идея сгруппировать несколько трубочек разной высоты, и появился один из древнейших музыкальных инструментов - флейта Пана.
О флейте Пана говорится в притче Вергилия, жившего в первом веке до н.э. В притче рассказывается о существовании инструмента, составными которого являются семь разных тростниковых трубочек, наименование которого ассоциируется с мифическими персонажами - нимфой Сиринкс и укротителем природы Паном. Козлоногий и длиннобородый Пан принимал участие в ночном хороводе нимф, играя на свирели. Увидев прекрасную Сиринкс, Пан без памяти влюбился в неё, но нимфа испугалась его вида и убежала от него. Путь ей преградила река. "Что же делать?» - зарыдала юная красавица. И Бог реки услышал ее молитвы, спас ее, превратив в тростник. Безутешный Пан не смог забыть Сиринкс и, сидя на берегу, срезал несколько тростинок. Тростинки он скрепил воском, и получилась сладкозвучная флейта, получившая дошедшее до наших дней название флейта Пана.`,
      kk: `Най

молдова, румын, украин халықтарының ағаштан жасалған үрмелі аспабы. Аспап доға тәрізді тері құрсауда бекітілген түрлі ұзындықтағы 8-24 түтіктен тұрады. Дыбыс биіктігі түтіктің ұзындығына байланысты. Найдың дыбыс қатары диатоникалық. Аспапта түрлі жанрдағы халық әуендерін – дойнадан бастап би әуендеріне дейін орындаған.
Най – көптүтікті көне музыкалы аспап, ансамбльде және жеке орындауға арналған. Туыстас аспаптар Еуропа, Оңтүстік Америка, Азия, Океания елдерінде таралған. Ресейде бұл кугиклы немесе цевница, Англияда – пенпайо, Нидерланды мен Францияда «Пан флейтасы» атауы әлі күнге дейін сақталған. Ежелгі Грекияда көптүтікті флейтаны сиринкс деп атаған.
Мұндай аспаптардың қалыптасуын ғалымдар неолит кезеңімен, б.з.б. 5-2 мыңж. мерзімдейді. Ғалымдардың пікірінше, сол кезден бастап адамдар дыбыс биіктігінің арақатынасын түсінген, яғни, аспаптың түтігі неғұрлым ұзын болса, дыбыс төмен және керісінше, түтік неғұрлым қысқа болса, дыбыс жоғары болады. Осылайша, биіктігі әр түрлі бірнеше түтіктерді біріктіру туралы ойдан көне аспаптардың бірі – Пан флейтасы қалыптасты. 
Пан флейтасы туралы б.з.б. І ғ. өмір сүрген Вергилий өсиеттерінде айтылған. Өсиетте жеті қамыс түтіктен тұратын, атауы аңыз кейіпкерлерінің – нимфа Сиринкс пен табиғат қамқоршысы Пан атымен байланысты аспап туралы айтылады. Аяғы ешкі тұяғындай, ұзын сақалды Пан нимфалардың түнгі сейіліне қатысып, сыбызғыда (свирель) ойнаған. Сұлу Сиринксты көрген Пан оған ессіз ғашық болды, бірақ оның жүзінен шошыған нимфа қашып кетеді. Жолда нимфаның жолын өзен кесті. «Енді қайттім?» - деп жылаған жас сұлудың зарын естіген Жаратушы, оны қамысқа айналдырып, құтқарады. Жанына жұбаныш таппаған Пан Сиринксты ұмыта алмай, жағада отырып бірнеше қамысты кесіп алды. Қамыс түтіктерді балауызбен бекіткенде, бүгінде Пан флейтасы деп аталатын аспап қалыптасты.`
    },
    images: ['/instruments/world/romania/nai/1.jpg'],
    audio: '/audio/world/romania/nai.mp3',
    country: 'romania',
    countryName: countryNames.romania,
    flag: countryFlags.romania
  },
  {
    id: 'russia_accordion',
    name: { en: `SARATOV ACCORDION`, ru: `САРАТОВСКАЯ ГАРМОНЬ`, kk: `САРАТОВ ГАРМОНІ` },
    description: {
      en: `SARATOV ACCORDION

Saratov accordion is a local variety of Russian accordion, characterized in that it has bells on it. Saratov accordion is also distinguished by a peculiar timbre and greater sound power.
The first mention in the press of harmonics with bells dates back to 1866: the newspaper “Saratov fact sheet” wrote that the passengers of the ship, sailing past Volsk, asked the captain to come closer to the shore, “so that gentlemen could better hear the harmonica with bells”.
The first-born accordions were small, without metal trim. The world-famous appearance and sound gave them the famous harmonious master Nikolai Gennadevich Korelin. In the 1870s, he opened his workshop on Nikolsk Street (now Radishchev).
His instruments were so unique in sound that they began to call Korelin “Stradivarius of the Saratov Harmonica”.
As a child, Kolya Korelin helped his father, who bought broken accordions, repaired and sold them. The son went further – he experimented with various materials. He made parts from iron, yellow or white copper, steel, glued furs differently. One of the first he began to make 10-button instruments, gradually increasing the number of trims, which made the accordion's case expand and took a square shape. Its device is such that the same button on the squeeze gives one sound, on the spin – the other. In the 80s of the XIX century, accordion masters appeared in the district cities of the Saratov province (Volsk and Khvalynsk), as well as in villages. The cost of custom harmonics already reached 75 rubles, about 2 times more expensive than a cow. The instrument’s body was made of linden, decorated with carved walnut pads, planks of copper, cupronickel and steel. Furs were made of cardboard, silk and satin. The bells were copper.
Soviet and Russian scientist, professor of the history and theory of music and musical instruments, teacher and teacher-accordionist, founder of the Museum of Russian Harmonica Professor A.M. Mirek found out that the first accordion appeared in St. Petersburg through the efforts of the Czech organ master Frantisek Kirshnik. Having a stationary workshop, he made his own experimental instrument – the first harmonic. It was standing on the table. With his left hand, the master puffed out air with fur, and with his right hand he played, pressing the keys of the piano keyboard. The sound turned out to be quite clear, loud and pleasant. For the first time he demonstrated his musical wonder in the concert hall in Leon’s house on Nevsk Prospect in front of the discerning music audience in 1783. He produced several such instruments for rich people.
It is believed that already manual accordion came to Russia from Germany. The accordion case consisted of two parts connected by bellows. The right keyboard is for playing a melody. The keys open the valves, passing air through the tongues that sound, creating music. On the left side of the case are buttons for accompaniment. The tongues are arranged in pairs, one of them sounds when the bellows are compressed, and the second when stretched. If they are tuned in unison, then when stretching and compressing the bellows the same tone sounds, but if in different tones, then the harmonic sound is different.
It was such a scheme that was used in the manufacture of harmonics in Tula, the first time this happened in the 1830s. Another scheme is when the tongues are tuned in unison (it is more progressive) applied in the Vologda harmonica and limp, button bayan and accordion.
Over the next 100 years, many samples of harmonies were created in various regions of Russia, differing in design and scale: Tula, Cherepovets, Vyatka, Libyan, Yelets and many others, and, of course, Saratov.
Initially, the Saratov accordion was developed on the basis of the Russian “seven-valve”, but for some time its range expanded to 20 sounds (10 buttons with different sounds for squeezing-unzipping fur). Concert instruments subsequently had up to 12 buttons. The scale of these harmonics was adapted to perform popular local ditties and tunes.`,
      ru: `САРАТОВСКАЯ ГАРМОНЬ

Саратовская гармонь – местная разновидность русской гармони, отличающаяся тем, что на ней имеются колокольчики. Саратовская гармонь отличается также своеобразным тембром и большей силой звучания. 
Первое упоминание в печати о гармонике с колокольчиками относится к 1866 году: газета «Саратовский справочный листок» писала о том, что пассажиры парохода, проплывавшие мимо Вольска, попросили капитана подойти ближе к берегу, «дабы господа могли лучше расслышать игру на гармонике с колокольцами». 
Гармошки-первенцы были небольшие, без металлической отделки. Всемирно известный облик и звук им подарил знаменитый гармонный мастер Николай Геннадьевич Корелин. В 1870-х годах он открыл свою мастерскую на улице Никольская (ныне – Радищева).
Его инструменты были настолько уникальны в звучании, что Корелина стали называть «Страдивари Саратовской гармоники». 
Ещё в детстве Коля Корелин помогал отцу, который скупал сломанные гармошки, чинил и продавал их. Сын пошёл дальше – он экспериментировал с различными материалами. Изготавливал детали из железа, жёлтой или белой меди, стали, по-разному обклеивал меха. Одним из первых он стал делать 10-кнопочные инструменты, постепенно увеличивая количество планок, отчего корпус гармошки расширился и принял квадратную форму. Устройство её таково, что одна и та же кнопка на сжим даёт один звук, на разжим — другой. В 80-х годах ХIХ века появляются мастера-гармонщики в уездных городах Саратовской губернии (Вольске и Хвалынске), а также в сёлах. Стоимость заказной гармоники уже доходила до 75 рублей, примерно в 2 раза дороже коровы. Корпус инструмента делали из липы, украшали резными накладками из орехового дерева, планками из меди, мельхиора и стали. Меха изготавливали из картона, шёлка и сатина. Колокольчики были медные.
Советский и российский учёный, профессор истории  и теории музыки, и музыкальных инструментов, преподаватель и педагог-аккордеонист, основатель Музея русской  гармоники профессор А.М. Мирек выяснил, что первая гармонь появилась в Санкт-Петербурге стараниями чешского органного мастера Франтишека Киршника. Располагая стационарной мастерской, он изготовил свой экспериментальный инструмент – первую гармонику. Она стояла на столе. Левой рукой мастер нагнетал мехом воздух, а правой играл, нажимая на клавиши фортепианной клавиатуры. Звук оказался довольно чистым, громким и приятным. Впервые он продемонстрировал свою музыкальную диковину в концертном зале в доме Леона на Невском проспекте перед взыскательной музыкальной публикой в 1783 г. Им было изготовлено несколько таких инструментов для богатых людей.
Считается, что уже ручная гармонь  пришла  в Россию из Германии. Корпус гармони состоял из двух частей, соединённых мехами. Правая клавиатура предназначена для исполнения мелодии. Клавиши открывают клапаны, пропуская воздух через язычки которые и звучат, создавая музыку. В левой части корпуса – кнопки для аккомпанемента. Язычки располагаются парами, один из них звучит при сжатии мехов, а второй при растяжении. Если они настроены в унисон, то и при растягивании и при сжатии мехов звучит один и тот же тон, а если на разные тона – то звук гармоники различается. 
Именно такая схема и была применена при изготовлении гармоник в Туле, впервые это случилось в 1830-е гг. Другая схема – это когда язычки настроены в унисон (она более прогрессивна) применена в вологодской гармони и хромке, баяне и аккордеоне.
На протяжении последующих 100 лет в различных областях России было создано множество образцов гармоней, отличавшихся конструкцией и звукорядом: тульская, череповецкая, вятская, ливенская, елецкая и многие другие ну и, конечно, саратовская. 
Изначально  саратовская гармонь была разработана на основе русской «семиклапанки», но в течение некоторого времени диапазон её расширился до 20 звуков (10 кнопок с разным звуком на сжим-разжим мехов). Концертные инструменты, впоследствии, имели до 12 кнопок. Звукоряд этих гармоник адаптировался для исполнения популярных местных частушек и напевов.`,
      kk: `САРАТОВ ГАРМОНІ

Саратов гармоні – қоңыраулардың болуымен ерекшеленетін жергілікті орыс гармонінің бір түрі. Сондай-ақ, оның тембрі мен дыбыс күші де өзгеше.
Аспап туралы баспа беттеріндегі алғашқы хабарламалар 1866 ж. жатады: «Саратовский справочный листок» газеті Вольск жанынан пароходпен өтіп бара жатқан жолаушылар кеме капитанын «қоңыраулы гармониканың үнін жақсырақ есту үшін» жағаға жақындауды өтінген деп жазады.
Алғашқы гармоньдар өлшемі шағын болып, металлмен өңделмеген. Әлемге танымал сырт пішіні мен дыбысын танымал гармонь шебері Николай Геннадьевич Корелин сыйлаған екен. 1870-жж. ол Никольская көшесінде (қазіргі Радищев көшесі) өзінің шеберханасын ашады. 
Ол жасаған аспаптардың үнінің бірегейлігі сондай, Корелинді «Саратов гармоникасының Страдивариі» деп атаған.
Бала кезінен Николай Корелин сынған гармонь аспаптарын сатып алып, жөндеп, қайта сатқан әкесіне қолғабыс етіп жүрді. Баласы бұл істі әрі қарай дамытты – ол түрлі материалдармен тәжірибе жүргізді. Темірден, сары немесе ақ мыстан, болаттан бөлшектер жасап, тері жарғақты басқа тәсілдермен жабыстырды. Шебер алғашқылардың бірі болып 10 батырмалы аспап жасады, жұқа тақтайшалардың санын біртіндеп көбейгендіктен гармонь корпусы ұлғайып, бүгінгі шаршы формаға келеді. Оның құрылымы келесідей: бір батырманы басқанда бір дыбыс, сол батырманы босатқанда басқа дыбыс алынатын. 
ХІХ ғ. 80-жж. Саратов губерниясының уездік қалаларында (Вольск және Хвалынск), сондай-ақ, ауылдарында гармонь аспабын жасаушы шеберлер қалыптасады. Арнайы тапсырыспен жасалған аспаптың құны 75 рубльді құрап, ірі қара бағасынан 2 еседей артық болды. Шанағы жөке ағашынан жасалып, жаңғақ ағашынан ойып жасалған қаптамамен, мыстан, мельхиордан және болаттан жасалған бөлшектермен әшекейленді. Тері жарғақ жасауға қатырма қағаз, жібек пен сәтин қолданылды. Қоңыраулар мыстан жасалды. 
Кеңестік және ресейлік ғалым, музыка және музыкалық аспаптар тарихы мен теориясы профессоры, оқытушы әрі аккордеоншы-педагог, Орыс гармоникасы музейінің негізін қалаушы профессор А.М. Мирек Санкт-Петербургтегі алғашқы гармонь чех орган шебері Франтишек Киршниктің үлкен еңбегі нәтижесінде пайда болғанын анықтаған. Тұрақты шеберхана иесі өзінің алғашқы тәжірибелік аспабы – алғашқы гармониканы жасап шығарды. Ол үстел үстінде тұрды. Шебер сол қолымен тері жарғақ арқылы ауаны қысып толтырса, оң қолымен фортепиано клавиатурасының батырмаларын басып ойнады. Дыбысы біршама таза, қатты әрі құлаққа жағымды болды. Алғаш рет бұл музыкалық жаңалығын талғампаз жұртшылыққа шебер 1783 ж. Невский даңғылында орналасқан Лоен үйінің концерт залында таныстырды. Ол бай тұрғындарға арнап аталған аспаптың бірнеше данасын жасаған.
Бұл аспап Ресейге Германиядан келген деп саналады. Аспап шанағы тері жарғақпен біріктірілген 2 бөліктен тұрды. Оң жақ клавиатура әуен орындауға арналды. Пернелер қақпақты ашып, одан ауа өткенде тілшелер қозғалысқа келіп, әуен туындайды. Корпустың сол жағында сүйемелдеу батырмалары орналасты. Тілшелер жұп болып орналасқан, олардың бірі тері жарғақты қысқанда, екіншісі босатқанда дыбысталған. Егер олар унисон күйге келтірілсе, тері жарғақыт қысып барып босатқанда бір тон орындалады, ал тон әр түрлі болса – онда гармоника дыбысы өзгереді. Алғаш рет 1830- жж. Тула гармоникасын жасауға осы жүйе пайдаланылған болатын. Келесі үлгі – тілшелері унисон күйге келтірілген әдіс вологда гармоникасы мен хромка, баян мен аккордеонда қолданылды. 
Келесі 100 жылдықта Ресейдің түрлі облыстарында бір-бірінен құрылымы, дыбыс қатарымен өзгешеленетін көптеген гармонь түрлері жасалды: тула, череповец, вятск, ливен, елек, саратов.
Бастапқыда саратов гармоні орыстың «жеті қақпақты» гармоні негізінде жасалды, бірақ уақыт өте келе лның диапазоны 20 дыбысқа дейін артты. Кейіннен концерттік аспаптар да 12 батырмамен жасалды. Бұл аспаптардың дыбыс қатары жергілікті танымал туындыларды орындауға лайықталып жасалды.`
    },
    images: ['/instruments/world/russia/accordion/1.jpg'],
    audio: '/audio/world/russia/accordion.mp3',
    country: 'russia',
    countryName: countryNames.russia,
    flag: countryFlags.russia
  },
  {
    id: 'russia_balalaika',
    name: { en: `Balalaika`, ru: `Балалайка`, kk: `Балалайка` },
    description: {
      en: `Balalaika

Russian folk three-stringed plucked musical instrument with a triangular-shaped body. The characteristic methods of sound production are rattling and tremolo – index finger strikes on all strings simultaneously.
It is the most famous Russian instrument, which, along with the accordion, has become one of the symbols of the musical creativity of the Russian people.
The name of the instrument is already very curious, typical of the people, the sound of phrases conveying the nature of the game on it. There are several versions about the origin of the name.
According to one version, which adhere to A.N.Chudinov (“Dictionary of foreign words that are part of the Russian language”, 1910) and A.D.Mikhelskon (“Explanation of 25,000 foreign words that are used in the Russian language, with their roots”) The word “balalaika” has Turkic roots. It is likely that it comes from the word “bala” (child). The phonetic sign of Turkic borrowings indicates the Turkic origin: syngarmonism of vowels, in almost the Russian language it gives a repetition of the same vowel in a word – bashmak (shoe), batrak (peon), balda (noodle), tarakan (cockroach), baklazhan (eggplant), balagan (booth), balagur (joker), balamut, bagatur (hero).
Another version speaks of the pro-Slavic origin of the name. The root of the words “balalaika”, or, as it was also called, “balabaika”, has long attracted the attention of researchers with its kinship with such Russian words as balakat, balabonit, balabolit, balagurit, which means “talking about something insignificant, chatting, rattling, clang, clumsy. All these concepts, complementing each other, convey the essence of the balalaika – an easy, funny, “frail” instrument, not very serious.
The length of a balalaika is from 60-70 cm (prima balalaika) to 1.7 meters (double bass balalaika). The body is triangular (in the XVIII-XIX centuries also oval), slightly curved, consisting of separate (5-7) segments. The head of the neck is slightly bent back. Metal strings (in the XVIII century, two of them were vein; in modern balalaika - nylon or carbon). On the fretboard of the modern balalaika there are 16-31 metal frets (until the end of the 19th century - 5-7 fret frets).
The balalaika acquired a modern look thanks to the musician-educator Vasily Andreev and the masters V.Ivanov, F.Paserbsky, S.I.Nalimov and others, who in 1883 began to improve it. V.V.Andreev proposed to make a deck of spruce, and the back of the balalaika made of beech, as well as shorten to 600-700 mm. The family of balalaika made by F.Paserbsky (piccolo, prima, viola, tenor, bass, double bass) became the basis of the Russian folk orchestra. Later, F.Paserbsky received in Germany a patent for the invention of the balalaika. Thus, we can talk about the existence of two instruments: the folk and Andreev balalaikas.
Balalaika is used as a solo, concert, ensemble and orchestral instrument. In 1887, Andreev organized the first balalaika lovers' club, and on March 20, 1888, the first performance “The balalaika lovers' club”, which became the birthday of the Russian folk instrument orchestra, took place in the building of the St. Petersburg Mutual Credit Society.`,
      ru: `Балалайка

русский народный трёхструнный щипковый музыкальный инструмент с корпусом треугольной формы. Характерными приёмами звукоизвлечения являются бряцание и тремоло – удары указательным пальцем по всем струнам одновременно.
Самый известный русский инструмент, ставший, наряду с гармонью, одним из символов музыкального творчества русского народа.
Любопытно уже само название инструмента, типично народное, звучанием словосочетаний передающее характер игры на нём. Существует несколько версий о происхождении названия.
По одной версии, которой придерживаются А.Н.Чудинов («Словарь иностранных слов, вошедших в состав русского языка», 1910) и А.Д.Михельскон («Объяснение 25000 иностранных слов, вошедших в употребление в русский язык, с означением их корней») слово имеет тюркские корни. Вполне вероятно, что оно происходит от слова «бала» (ребенок, дитё). На тюркское происхождение указывает фонетическая примета тюркских заимствований: сингармонизм гласных, практически в русском языке она даёт повторение одной и той же гласной в слове – башмак, батрак, балда, таракан, баклажан, балаган, балагур, баламут, багатур.
Другая версия говорит о праславянском происхождении названия. Корень слов «балалайка», или, как её ещё называли, «балабайка», давно привлекал внимание исследователей родством с такими русскими словами, как балакать, балабонить, балаболить, балагурить, что значит ‘разговаривать о чём-нибудь ничтожном, болтать, раздобаривать, пустозвонить, калякать. Все эти понятия, дополняя друг друга, передают суть балалайки – инструмента лёгкого, забавного, «бренчливого», не очень серьёзного.
Длина балалайки составляет от 60-70 см (балалайка прима) до 1,7 метров (балалайка-контрабас). Корпус треугольной (в XVIII-XIX веках также овальной), слегка изогнутой формы, состоящий из отдельных (5-7) сегментов. Головка грифа слегка отогнута назад. Струны металлические (в XVIII веке две из них были жильные; у современных балалаек – нейлоновые или карбоновые). На грифе современной балалайки 16-31 металлических ладов (до конца XIX века – 5-7 навязных ладов).
Современный вид балалайка приобрела благодаря музыканту-просветителю Василию Андрееву и мастерам В. Иванову, Ф. Пасербскому, С. И. Налимову и другим, которые в 1883 году занялись её усовершенствованием. Андреев В. В. предложил делать деку из ели, а заднюю часть балалайки изготавливать из бука, а также укоротить до 600-700 мм. Сделанное Ф. Пасербским семейство балалаек (пикколо, прима, альт, тенор, бас, контрабас) стало основой русского народного оркестра. Позднее Ф. Пасербский получил в Германии патент на изобретение балалайки. Таким образом, можно говорить о существовании двух инструментов: народной и андреевской балалаек.
Балалайка используется как сольный, концертный, ансамблевый и оркестровый инструмент. В 1887 году Андреев организовал первый кружок любителей балалайки, а 20 марта 1888 года в здании Санкт-Петербургского общества взаимного кредита состоялось первое выступление «Кружка любителей игры на балалайках», ставшее днём рождения оркестра русских народных инструментов.`,
      kk: `Балалайка

орыс халқының пішіні үшбұрыш тәрізді, үш ішекті-шертпелі музыкалық аспабы. Дыбыс шығарудың негізгі әдістері – салдырлату және тремоло (сұқ саусақпен барлық ішекті қатар соғу) әдістері.
Балалайка – орыс халқының ең танымал музыкалық аспабы және гармоньмен қатар орыс музыкалық шығармашылығының нышанына айналды. 
Аспаптың халықтық атауы, ойын арқылы жеткізетін үні қызығушылықты оятады. Оның қалыптасуы туралы бірнеше болжамдар сақталған.
Чудинов А.Н. («Словарь иностранных слов, вошедших в состав русского языка», 1910) мен Михельскон А.Д. («Объяснение 25000 иностранных слов, вошедших в употребление в русский язык, с означением их корней») ұстанатын нұсқа бойынша, бұл сөз түркі тілінен енген, «бала» сөзінен туындауы мүмкін. Түркілік шығу тегін түркі сөздерінің фонетикалық ерекшелігі көрсетеді: дауысты дыбыстардың үндестігі, орыс тілінде бір дауысты дыбыссөзде қайталанады – башмак, батрак, балда, таракан, баклажан, балаган, балагур, багатур.
Келісі бір болжам атаудың праславяндық (алғашқы славян мемлекеттері қалыптасқанға дейінгі уақыт, шамамен ІХ ғ. дейін) тегін көрсетеді. «Балалайка» немесе тағы бір атауы «балабайка» сөздерінің түбірін зерттеушілер ұзақ уақыт бойы балакать, балабонить, балаболить, яғни «ешқандай мәні жоқ нәрсе туралы айту, бос сөйлеу» мағынасын білдіретін сөздермен байланыстырып келді. Бұл ұғымдар бір-бірін толықтыру арқылы аспаптың мәнін – жеңіл, қызықты, қатаң еместігін көрсетеді. 
Балалайканың ұзындығы 60-70 см-ден (прима балалайка) 1,7 м (контрабас балалайка) аралығында. Корпусы үшбұрыш, сәл бүгілген, 5-7 жеке сегменттерден құралған. Мойын басы шамалы артқа қайырылған. Ішектері металдан жасалған (ХVІІІ ғ. сіңірден, заманауи түрлерінде – нейлон немесе карбонды болды). Бүгінгі аспаптың 16-31 металл пернелері бар (ХІХ ғ. соңына дейін 5-7 перне болған).
Балалайканың бүгінгі түрі музыкант-ағартушы Василий Андреев және В. Иванов, Ф. Пасербский, С.И. Налимов, т.б. шеберлер 1883 ж. оны жетілдіру жұмыстарын жасағанда қалыптасты. В.В. Андреев деканы шыршадан, артқы бөлігін шамшат ағаштарынан жасауды және аспапты 600-700 мм. дейін қысқартуды ұсынды. Ф. Пасербский жасаған балалайка отбасы (пикколо, прима, альт, тенор, бас, контрабас) орыс халық оркестрінің негізін құрады. Кейіннен Ф. Пасербский Германияда аталған аспапты жасауға патент алды. Осылайша, екі аспап – халық және Андреев балалайкалары туралы айтуға болады. 
Балалайка жеке, концерттік, ансамбльдік, оркестрлік аспап ретінде қолданылады. 1887 ж. Андреев балалайка әуесқойлар үйірмесін құрып, 1888 ж. 20 наурызда Санкт-Петербург өзара несие қоғамының ғимаратында «Балалайкада ойнау әуесқойлары үйірмесі» алғаш рет өнер көрсетті. Бұл орыс халық аспаптар оркестрінің туған күні болды.`
    },
    images: ['/instruments/world/russia/balalaika/1.jpg'],
    audio: '/audio/world/russia/balalaika.mp3',
    country: 'russia',
    countryName: countryNames.russia,
    flag: countryFlags.russia
  },
  {
    id: 'russia_buben',
    name: { en: `Buben (tambourine)`, ru: `Бубен`, kk: `Бубен` },
    description: {
      en: `Buben (tambourine)

a percussion musical instrument of indefinite pitch, consisting of a leather membrane stretched over a wooden rim. Metal bells are hung from some types of tambourines, which begin to ring when the performer strikes the membrane of the tambourine, rubs it, or shakes the entire instrument.
Used in southern European music since the Crusades and in Western symphonic and wind music since the 19th century, the buben was created on the model of an ancient percussion instrument, common in the Middle East and Greco-Roman antiquity. A similar construction of a tambourine used to beat with a mallet serves as a magic instrument of Siberian and Native American shamans.
Currently, there are two main types of buben:
- Folk or ethnic, wooden rim with a taut leather membrane. Depending on the purpose, the diamonds come in all sizes. Instruments of this type are used for various ritual purposes, including shamans. In their design, there may be small bells attached to a wire stretched under the membrane.
- An orchestral buben, the most common version, with a leather or plastic membrane and metal plates reinforced in special slots on the rim. The instrument has firmly established itself in professional music, becoming one of the main percussion instruments of the symphony orchestra.
In addition, the buben was used as a solo instrument. Here is how playing the instrument is described: “Folk virtuosos play different tricks when playing the buben, tossing it and grabbing it on the fly, they beat the buben on their knees, then hitting the head, chin, even on the nose, drum on the buben with their hands, with an elbow, fingers, they make a tremolo and howl, running the skin with the thumb of the right hand and so on”.
The buben was widespread in Ukraine and Belarus, being used more often in dance music. This instrument is rarely found in the hands of folk musicians today, but it found its main application in the orchestras of Russian folk instruments.`,
      ru: `Бубен

ударный музыкальный инструмент неопределённой высоты звучания, состоящий из кожаной мембраны, натянутой на деревянный обод. К некоторым разновидностям бубнов подвешены металлические колокольчики, которые начинают звенеть, когда исполнитель ударяет по мембране бубна, потирает её или встряхивает весь инструмент.
Применявшийся в южно-европейской музыке со времён крестовых походов и в западной симфонической и духовой музыке с XIX века, бубен был создан по образцу древнего ударного инструмента, распространённого на Ближнем Востоке и в греко-римской античности. Сходной конструкции бубен, по которому бьют колотушкой, служит магическим инструментом сибирских и индейских шаманов.
В настоящее время различаются два основных вида бубнов: 
	•	Народный или этнический, деревянный обод с натянутой кожаной мембраной. В зависимости от предназначения бубны бывают всевозможных размеров. Инструменты этого типа используются в различных ритуальных целях, в том числе и шаманами. В их конструкции могут быть небольшие бубенчики, привязанные к проволоке, протянутой под мембраной.
	•	 Оркестровый бубен, самый распространённый вариант, с кожаной или пластиковой мембраной и металлическими тарелочками, укреплёнными в специальных прорезях на ободе. Инструмент твёрдо укрепился в профессиональной музыке, став одним из основных ударных инструментов симфонического оркестра.
Кроме того бубен использовался как сольный инструмент. Вот как описывали игру на этом инструменте: «Народные виртуозы при игре на бубне выделывают разные фокусы, подбрасывая его и схватывая на лету, бьют бубном то по своим коленкам, то ударяя по голове, подбородку, даже по носу, барабанят по бубну кистью рук, локтём, пальцами, делают тремоло и вой, проводя по коже большим пальцем правой руки и прочее».
Бубен был распространён на Украине и в Белоруссии, применяясь чаще в танцевальной музыке. Инструмент этот изредка встречается в руках народных музыкантов и в наши дни, но основное своё применение он нашёл в оркестрах русских народных инструментов.`,
      kk: `Бубен

ағаш жиектемеге тартылған тері мембранадан тұратын, дыбыс биіктігі белгісіз, ұрмалы аспап. Аспаптың кейбір түрлеріне металл қоңыраулар ілінген. Орындаушы бубеннің мембранасын соққанда, үйкелегенде немесе аспапты сілкігенде сыңғырлайды.
Оңтүстік Еуропа музыкасында крест жорықтары кезінен және Батыс симфониялық пен үрмелі аспаптар музыкасында ХІХ ғ. бастап қолданылған бубен Таяу Шығыс пен грек-рим антикалық кезеңінде кең таралған көне ұрмалы аспап негізінде қалыптасты. Тоқпақпен соғып ойналған бубеннің бастапқы нұсқасы Сібір және үндіс шамандарының магиялық аспабы қызметін атқарды.
Бүгінде бубеннің негізгі екі түрі ажыратылады.
	•	Халықтық немесе этникалық, ағаш жиектемеге тартылған тері  мембраналы аспап. Қолдану мақсатына қарай көлемдері әр түрлі болуы мүмкін. Осы үлгідегі аспаптар түрлі ғұрыптық мақсатта, әсіресе шамандармен жиі қолданылады. Құрылысында тері астымен өтіп, сымға бекітілген шағын қоңыраулар болуы мүмкін.
	•	Оркестрлік бубен, ең кең таралған нұсқа. Жиектемедегі арнайы ойықтарға бекітілген металл тәрелкелері бар тері немесе пластикалық мембраналы аспап. Аталған аспап кәсіби музыка берік орнығып, симфониялық оркестрдегі негізгі ұрмалы аспап болды. 
Сонымен қатар, бубен жеке аспап ретінде де қолданыста болды. Аспапта ойнау сәті келесідей сипатталды: «Халық арасында танымал шебер орындаушылар бубенде түрлі әдістермен ойнайтын, жоғары лақтырып, сол сәтте қағып алды, бірде тізеге, бірде басқа, иекке, мұрынға соғып, білекпен, шынтақпен, саусақпен ұрып ойнап, оң қолдың бас бармағымен теріні бойлай тремоло мен сарнау әдістерін жасайтын».  
Бубен Украина мен Белоруссияда кең таралды, би музыкасында жиі қолданылды. Аталған аспап бүгінгі орындаушылар қолында да кездеседеі, дегенмен, орыс халық аспаптары оркестрінен орын тапты.`
    },
    images: ['/instruments/world/russia/buben/1.jpg'],
    audio: '/audio/world/russia/buben.mp3',
    country: 'russia',
    countryName: countryNames.russia,
    flag: countryFlags.russia
  },
  {
    id: 'russia_domra',
    name: { en: `Domra`, ru: `Домра`, kk: `Домра` },
    description: {
      en: `Domra is a Russian, Ukrainian and Belarusian folk stringed and musical instrument. Domra has a hemispherical body. The sound of the strings is made using a pick. A characteristic method of sound production is tremolo. There are 2 types of domra: a three-stringed domra with a quart system traditionally used in Russia, and a four-stringed domra with a quintet system, which is most widely used in Belarus and Ukraine. Domra is used for solo performance (small domra, prima) and as part of ensembles and orchestras of Russian folk instruments.
Domra was widely used by buffoons in Russia in the XVI-XVII centuries. as a solo and ensemble (bass domra) instrument, but starting from the 17th century, after the release of a number of church and state decrees (one of them, in 1648, by Tsar Alexei Mikhailovich “On the correction of morals and the destruction of superstitions”), according to which the buffoonery was persecuted; with the disappearance of buffoons, the domra also disappeared.
Domra acquired the modern look in 1896, after the reconstruction of “Vyatka balalaika” by V.V.Andreev. Based on this instrument, in 1896-98, the master-artists of F.S.Paserbsky, S.I.Nalimov (worked at the Andreev Orchestra for 26 years), N.P.Fomin, P.P.Karkin, a family of orchestral domras was created, which became the basis of the Great Russian Orchestra named after V.V.Andreev. In 1908, at the initiative of the conductor G.P.Lyubimov, together with the master S.F.Burov, developed a group of four-stringed domras.
“Domra” is a word borrowed from Turkic: cf. tat. “dumbra” – balalaika, crime.-tat. “dambura” – guitar, tur. “tambura” – guitar, Kazakh. “dombyra”, calm. “dombr”.
Domra appears as an attribute of a good-looking craft, usually in combination with other instruments: harp, bagpipes, tambourines.
To expand the range of domra, attempts were made to constructively improve it. In 1908, at the suggestion of the conductor G. Lyubimov, the master S.Burov created a four-stringed domra, with a quint system. Domra Prima received the violin range, but, unfortunately, was inferior to the three-string in timbre-coloristic terms. Subsequently, its ensemble varieties and an orchestra of four-stringed domras also appeared. Every year, interest in domra only increased, and in 1945 the first concert was held, where domra became a solo instrument. It was written by N.Budashkin and was an overwhelming success in the following years. The consequence of this was the opening of the first Russian department of folk instruments at the Institute named after Gnesins, where there was a department of domra. The first teacher was Yu.Shishakov.
Now the instrument is popular in Russia, Ukraine, Belarus and foreign countries, many concert and chamber works have been written for it, arrangements have been made, in particular, for violin works.`,
      ru: `Домра

русский, украинский и белорусский народный струнно-щипковый музыкальный инструмент. Домра имеет корпус полусферической формы. Звук струн производится при помощи медиатора. Характерным приёмом звукоизвлечения является тремоло. Существует 2 вида домр: трёхструнная домра с квартовым строем, традиционно использующаяся в России, и четырёхструнная домра с квинтовым строем, получившая наибольшее распространение в Белоруссии и Украине. Домра используется для сольного исполнительства (домра малая, прима) и в составе ансамблей и оркестров русских народных инструментов.
Домра широко применялась скоморохами на Руси в XVI-XVII вв. как сольный и ансамблевый (басистая домра) инструмент, но начиная с XVII века, после выхода ряда церковных и государственных указов (один из них 1648 года царя Алексея Михайловича «Об исправлении нравов и уничтожении суеверий»), согласно которым скоморошество подвергалось гонениям; с исчезновением скоморохов исчезла и домра.
Современный облик домра обрела в 1896 году, после реконструкции В.В. Андреевым вятской балалайки. На основе этого инструмента, в 1896-98 годах, мастерами-художниками Ф.С. Пасербским, С.И. Налимовым (работал при оркестре Андреева 26 лет), Н.П. Фоминым, П.П. Каркиным, было создано семейство оркестровых домр, ставших основой Великорусского оркестра им. В.В. Андреева. В 1908 году, по инициативе дирижёра Г.П. Любимова, вместе с мастером С. Ф. Буровым, была разработана группа четырёхструнных домр.
«Домра» – слово, заимствованное из тюркского: ср. тат. dumbra «балалайка», крым.-тат. dambura «гитара», тур. tambura «гитара», казах. dombıra, калм. dombr̥. 
Домра фигурирует как атрибут скоморошьего ремесла, обычно в совокупности с другими инструментами: гуслями, волынками, зурнами, бубнами.
Для расширения диапазона домры предпринимались попытки её конструктивного совершенствования. В 1908 году по предложению дирижёра Г. Любимова мастером С. Буровым была создана четырёхструнная домра, с квинтовым строем. «Домра Прима» получила скрипичный диапазон, но, к сожалению, уступала «трёхструнке» в темброво-колористическом плане. Впоследствии также появились её ансамблевые разновидности и оркестр четырёхструнных домр. С каждым годом интерес к домре только усиливался, и в 1945 г. состоялся первый концерт, где домра стала сольным инструментом. Он был написан Н. Будашкиным и имел ошеломляющий успех в последующие годы. Следствием этого стало открытие первой в России кафедры народных инструментов при институте им. Гнесиных, где было отделение домры. Первым преподавателем стал Ю. Шишаков. 
Сейчас инструмент пользуется популярностью в России, Украине и Белоруссии и странах зарубежья, для него написаны многие концертные и камерные произведения, созданы переложения, в частности, скрипичных произведений.`,
      kk: `Домра

орыс, украин, белорус халықтарының ішекті-шертпелі музыкалық аспабы. Аспап пішіні жарты сфера тәріздес, медиатор көмегімен дыбысталады. Дыбыстандыруда жиі қолданылатын әдіс – тремоло. Домраның екі түрі бар: кварта күйіндегі 3 ішегі бар Ресейде қолданылатын және Украина мен Белоруссияда кең таралған квинта күйіндегі 4 ішекті домра аспаптары. Домра жеке және ансамбльдер құрамында қолданылады.
Аспапты Русь жерінде ХVІ-ХVІІ ғғ. Жеке және ансамбль аспабы ретінде сайқымазақтар қолданды. Бірақ, ХVІІ ғ. бастап шығарылған шіркеу мен мемлекеттік жарлықтар аясында орындаушылар қудалауға ұшырап, аспап ұмытыла бастады.
Домра 1896 ж. Вятск балалайкасын В.В. Андреев жетілдіргеннен кейін бүгінгі қалыпқа ие болды. Осы аспап негізінде 1896-98 жж. суретші-шеберлер Ф.С. Пасербский, С.И. Налимов (Андреев оркестрінде 26 жыл жұмыс жасаған), Н.П. Фомин, П.П. Каркин бірлесіп, В.В. Андреевтың Великорусский оркестрінің бастамасы болған оркестрлік домра түрлері жасалды. 1908 ж. дирижер Г.П. Любимовтың ықпалымен және шебер С.Ф. Буровпен бірге 4 ішекті домра жасалды.
«Домра» сөзі – түркі тілінен енген: тат. dumbra «балалайка», крым.-тат. dambura «гитара», тур. tambura «гитара», казах. dombıra, калм. dombr̥. Аспапта орындаушыларды домрачей деп атаған.
Домра кезбе орындаушылардың аспабы ретінде гусли, волынка, зурна, бубенмен қатар аталады. 
Аспаптың диапазонын кееңйту мақсатында оны жетілдіру жұмыстары жүргізілді. 1908 ж. дирижер Г. Любимовтың ұсынысымен шебер С. Буров квинта құрылымды 4 ішекті домра аспабын жасады. «Прима домраның» регистрі болғанмен, тембрлік-бейнелілік бойынша «үшішектіден» қалыс қалды. Нәтижесінде, оның ансамбльдік түрлері мен 4 ішекті домра оркестрі қалыптасты. Уақыт өткен сайын аспапқа деген қызығушылық артып, 1945 ж. домра жеке орындауда болған концерт өтті. Домраға арналған концерттің авторы болған Н. Будашкиннің туындысы жылы қабылданып, аса танымал болды. Соның нәтижесінде Ресейде алғаш рет Гнесиндер ат. институт жанынан домра бөлімі болған халық аспаптар кафедрасы ашылды. Алғашқы оқытушы Ю. Шишаков болды. 	 
Бүгінде аспап Ресей, Украина, Белоруссия мен алыс-жақын шет елдерде танымалдыққа ие. Оған арнайы концерттік және камералық шығармалар, скрипкаға арналған туындылардың домраға ыңғайланған нұсқалары жазылды.`
    },
    images: ['/instruments/world/russia/domra/1.jpg'],
    audio: '/audio/world/russia/domra.mp3',
    country: 'russia',
    countryName: countryNames.russia,
    flag: countryFlags.russia
  },
  {
    id: 'russia_mandolin',
    name: { en: `MANDOLIN`, ru: `МАНДОЛИНА`, kk: `МАНДОЛИНА` },
    description: {
      en: `MANDOLIN

Mandolin is a small stringed-plucked musical instrument; a kind of lute – soprano lute, but with a shorter neck and fewer strings. The strings are touched by the player, mainly with plectrum, as well as by the fingers and the bird's feather. The tremolo technique is used on the mandolin. Since the metal strings of the mandolin make a short sound, lingering notes are achieved by a quick repetition of the same sound.
The beginning of the history of the mandolin originates in the Middle East. It was there, about six thousand years ago, on the territory of Ancient Mesopotamia that the instruments of the lute family appeared, which, according to art historians, the founders of the mandolin were. The immediate predecessor of the instrument is considered to be a small lute of the soprano range, which has from 4 to 6 single or paired catgut strings. It appeared in everyday life and spread widely in European countries from the XI to XIV centuries under different names: mandora, mandola or pandurin.
It is believed that the mandolin appeared in Italy in the XVII century as a result of the transformations of the instruments preceding it. Outwardly, it still looked much like a lute, but the head of the neck of the instrument was already straightened. Over time, the mandolin became one of the most beloved folk instruments, quickly spread and gained popularity in different countries.
Mandolin was imported into Russia presumably in the first half of the 18th century. Since that time, it has often been referred to as a kind of guitar. Here is how the famous Russian writer Vladimir Dahl describes the mandolin in his Explanatory Dictionary of the Russian Language: “Mandolin is a kind of guitar without interception, which is played with a stone or a feather”.
In the first Russian work on the history of music, published in 1770, its author, professor at the Academy of Sciences in St. Petersburg, Yakov Shtelin writes: “In conclusion about the music news and sights under Empress Elizabeth, it should be mentioned that the Italian guitar and its compatriot are mandolins, due to different Italians appeared in Moscow”.  The art of playing the mandolin is mastered by many amateur musicians. It sounds in aristocratic salons and in the homes of ordinary citizens. Societies of mandolinists and amateur guitarists are formed in St. Petersburg and Moscow. At the end of the 19th century, musical literature for the mandolin was constantly published, intended for wide sections of the population.
Mandolin was very popular in Russia in pre-Soviet times and after. Now mandolin is a rarity, but historically it has had great respect.
Creating a mandolin is a complex process that requires a long and painstaking work from the master. First of all, the master begins with the manufacture of the bottom of the instrument – the most difficult stage of work. The bottom consists of several previously curved wooden planks (rivets). Typically, maple, walnut or cypress are used to make this part, and a guaiacum officinale can also be used.`,
      ru: `МАНДОЛИНА

Мандолина – струнный щипковый музыкальный инструмент небольших размеров, разновидность лютни – лютня-сопрано, но с менее длинной шейкой и с меньшим числом струн. Струны задеваются играющим, в основном, медиатором, а также пальцами и птичьим пером. На мандолине используется техника тремоло. Так ка металлические струны мандолины издают короткий звук, то протяжные ноты достигаются быстрым повторением одного и того же звука.
Начало истории мандолины берёт своё начало на Ближнем Востоке. Именно там, приблизительно шесть тысячелетий назад, на территории Древней Месопотамии появились инструменты семейства лютневых, которые по предположениям искусствоведов были родоначальниками мандолины. Непосредственным предшественником инструмента принято считать небольшую лютню сопранного диапазона, имеющую от 4 до 6 одинарных или парных кетгутовых струн. Она появилась в обиходе и широко распространилась в странах Европы в период с ХI по XIV века под разными названиями: мандора, мандола или пандурина.
Считается, что мандолина появилась в Италии в XVII веке в результате преобразований предшествующих ей инструментов. Внешне она ещё во многом напоминала лютню, но головка грифа инструмента была уже выпрямлена. С течением времени, мандолина стала одним из самых любимых народных инструментов, быстро распространилась и завоевала популярность в разных странах.
В Россию мандолина была завезена предположительно в первой половине XVIII века. С того – же времени её часто относят к разновидности гитары. Вот как знаменитый русский писатель Владимир Иванович Даль описывает мандолину в своём «Толковом словаре русского языка»: «Мандолина – это разновидность гитары без перехвату, на которой играют косточкою или пёрышком».
В первой российской работе по истории музыки, опубликованной в 1770 году, её автор, профессор Академии наук в Петербурге Яков Штелин пишет: «В заключение о музыкальных новостях и достопримечательностях при императрице Елизавете следует упомянуть, что итальянская гитара и её землячка – мандолина, благодаря разным итальянцам появились в Москве». Искусством игры на мандолине овладевают многие музыканты – любители. Она звучит в аристократических салонах и в домах простых граждан. Образуются общества мандолинистов и гитаристов-любителей в Петербурге и Москве. В конце XIX столетия  постоянно издается нотная литература для мандолины, предназначенная для широких слоёв населения.
Мандолина была очень популярна в России в досоветское время и после. Теперь мандолина – это редкость, но исторически она имела большое уважение. 
Создание мандолины – это сложный процесс, который требует от мастера долгой и кропотливой работы. Прежде всего, мастер начинает с изготовления дна инструмента – самого сложного этапа работы. Дно состоит из нескольких предварительно изогнутых деревянных планок (клёпок). Как правило, для изготовления этой детали используют клён, орех или кипарис, может также использоваться бакаутовое дерево.`,
      kk: `МАНДОЛИНА

Мандолина – шағын ішекті-шертпелі музыкалық аспап, лютня типтес – лютня-сопрано, бірақ мойны қысқа және ішектер саны аз. Ішектерді медиатор, саусақтармен және құс қауырсыны көмегімен шертеді. Мандолинада тремоло техникасы қолданылады. Мандолинаның металл ішектерінің дыбысы қысқа болғандықтан, созыңқы ноталарды бір дыбысты қайталау арқылы алады. 
Аспап тарихы Таяу Шығыстан бастау алады. Шамамен 6 мыңж. бұрын Ежелгі Месопотамия жерінде бүгінгі мандолиналардың бастауы болып саналатын лютня типтес аспаптар қалыптасты. Алғашқы түрі деп сопрано диапазонды, 4-6 дара немесе қосарлы ішектері бар шағын лютня есептеледі. Ол ХІ-ХІV ғғ. Еуропа мемлекеттерінде мандора, мандола немесе пандурина атауларымен кең таралды. 
Аспап Италияда ХVІІ ғ. өзіне дейінгі аспаптардың жетілуі нәтижесінде қалыптасты делінеді. Сырт пішіні әлі де лютняға ұқсас болса да, мойын басы тік қалыпқа келтірілді. Уақыт өте келе, мандолина ең сүйікті халық аспабына айналып, басқа елдерге тез таралды.
Ресейге мандолина шамамен ХVІІІ ғ. І жартысында келген. Сол кезден бастап аспап гитараның бір түрі деп есептелді. Орыстың атақты жазушысы Владимир Иванович Даль аспапты өзінің «Орыс тілінің түсіндірме сөздігі» еңбегінде келесідей сипаттайды: «Мандолина – мықынсыз гитара түрі, аспапта сүйекпен немесе қауырсынмен ойнайды».
1770 ж. жарық көрген музыка тарихы туралы алғашқы ресейлік еңбекте оның авторы Петербургтегі Ғылым академиясының профессоры Яков Штелин былай деп жазады: «Елизавета патшайым тұсындағы музыка жаңалықтары мен көрнекіліктерді қорытындылағанда ескеретін жайт – итальяндық гитара мен оның жерлесі – мандолина көптеген итальяндықтар арқылы Мәскеуге келді». Мандолинада ойнау әдістерін әуесқой музыканттар меңгереді. Аспап ақсүйектер арасында, қарапайым тұрғындардың үйінде ойналады. Петербург пен Мәскеуде мандолина мен гитарада ойнайтын әуесқой музыканттар қоғамы қалыптасады. ХІХ ғ. соңында қалың бұқараға арналған мандолинаның нота кітаптары жарық көреді. 
Мандолина Ресейде кеңестік кезеңге дейін де, одан кейін де танымал болды. Сирек кездессе де, тарихи маңызы болды.
Аспапты жасау – шеберден ұзақ әрі тыңғылықты жұмысты талап ететін күрделі процесс. Шебер алдымен аспаптың астыңғы бөлігін жасаудан бастайды. Ол алдын-ала иілген бірнеше ағаш бөлшектен тұрады. Оны жасау үшін, негізінен, үйеңкі, жаңғақ немесе кипарис, кейде бакаут ағаштары қолданылады.`
    },
    images: ['/instruments/world/russia/mandolin/1.jpg'],
    audio: '/audio/world/russia/mandolin.mp3',
    country: 'russia',
    countryName: countryNames.russia,
    flag: countryFlags.russia
  },
  {
    id: 'russia_zhaleika',
    name: { en: `Zhaleika`, ru: `Жалейка (пищик, брёлка)`, kk: `Жалейка (брёлка)` },
    description: {
      en: `Zhaleika (peep, keychain) is a wind musical instrument, common among Slavic peoples. Zhaleika along with chalumeau and Hungarian tarogato is considered a harbinger of the modern clarinet.
Originally a shepherd’s cattle and sheep barking instrument. Widely distributed in the territories of modern Russia, Belarus, Ukraine, Lithuania, but today the zhaleika is represented only in folk ensembles.
Also known under the name “zhalomeika”. V.O.Mikhnevich points to the homogeneity of the root “zhaleika” and “zhalnik” (the grave of the ancient Slav) and suggests that this instrument was in use at the funeral parties. The first mention of the zhaleika is in the records of A.Tuchkov, relating to the end of the XVIII century, although he calls it a svirel.
Brelka is a regional name of a zhaleika in the Tver region, which is harvested from willow, and locally – delusions, from which they got the name here. The brelka was developed on the basis of a miserable one and was introduced into the first Great Russian Orchestra by V.V.Andreev. The brelka, in comparison with the shepherd’s zhaleika, has a more delicate and soft sound of the chromatic scale, as it is made entirely of wood.
At the end of the XIX century, the increased interest of Russian society in its national history and culture contributed to the appearance of the first research works on folk instruments A.Famintsyn, N.Privalov, E.Lineva. In time, this coincided with the activities of V.V.Andreev on the revival and improvement of Russian folk instruments. Along with the reconstruction of balalaika and domra V.V.Andreev attempts were made to improve wind instruments, such as a brelka, and a svirel.
At the beginning of the 20th century, the Russian nugget musician Pskov peasant O.U.Smolensky designed the zhaleikas of various sizes and created a quartet of zhaleika players, who performed for several years in St. Petersburg. Then M.E.Pyatnitsky introduced a zhaleika into his choir.
Shepherds–rozhok players made rozhok of various sizes by themselves, which were played in the so-called “choirs” of rozhoks. Widely known at the beginning of the last century was the “choir” of rozhok players under the direction of the hereditary shepherd N.V.Kondratiev.
There are two varieties of zhaleika – single and double (double-barreled).
A single zhaleika is a small tube of willow or elderberry with a length of 10 to 20 cm, at the upper end of which is inserted a peephole with a single tongue from reeds or a goose feather, and a bell from a cow horn or birch bark is put on the lower one. The tongue is sometimes notched on the tube itself. On the trunk there are from 3 to 7 sound holes, so the pitch could be changed.
A double (double-barreled) or twin zhaleika consists of two tubes of equal length with sound holes folded side by side and inserted into one common socket. The number of sound holes for paired zhaleika is different. As a rule, there are more playing holes on the melodic zhaleika than on the second pipe.
The word “zhaleika” is not found in any ancient Russian monument of writing. The first mention of the wretch is in the records of A. Tuchkov, relating to the end of the XVIII century. There is reason to believe that the zhaleika was previously present in the appearance of another instrument.
In a number of areas, a zhaleika, like the Vladimir’s rozhok, is called a “shepherd’s rozhok (horn)”. As a result, when the written source speaks of a “shepherd’s horn”, it isn’t known for sure which instrument is talking about.
The origin of the word “zhaleika” is not established. Some scholars associate it with “jellies” or “zhaleniya” (regrets) a memorial rite that involves playing the miserable in some places.`,
      ru: `Жалейка (пищик, брёлка)

духовой музыкальный инструмент, распространённый среди славянских народов. Жалейку наряду с шалюмо и венгерским тарогатом считается предвестником современного кларнета.
Первоначально пастушечий инструмент зазывания скота и овец. Широко распространён на территориях современных России, Белоруссии, Украины, Литвы, но сегодня жалейка представлена только в народных ансамблях.
Известен также под названием «жаломейка». Михневич В. О. указывает на однородность корня «жалейка» и «жальник» (могила древнего славянина) и высказывает предположение, что инструмент этот был в употреблении на поминках. Первое упоминание о жалейке есть в записях А.Тучкова, относящихся к концу XVIII века, хотя называет он её свирелью.
Брёлка – региональное название в Тверской области жалейки, которую выделывают из ивы, по местному – бредины, от которой они и получили здесь название. Брёлка разработана на основе жалейки и введена в первый Великорусский оркестр В.В. Андреевым. Брёлка, по сравнению с пастушеской жалейкой, обладает более деликатным и нежным звуком хроматической гаммы, так как изготовлена целиком из дерева.
В конце XIX столетия возросший интерес русского общества к своей национальной истории и культуре способствовал появлению первых исследовательских работ по народному инструментарию А. Фаминцына, Н. Привалова,  Е.Линёвой. По времени это совпало с деятельностью В.В. Андреева по возрождению и усовершенствованию русских народных инструментов. Наряду с работами по реконструкции балалаек и домр  Андреевым В.В. предпринимались попытки усовершенствования и духовых инструментов, таких как брёлка, свирель.
В начале XX века русский музыкант-самородок псковский крестьянин О.У. Смоленский сконструировал жалейки разных размеров и создал квартет жалейщиков, выступавший на протяжении ряда лет в Петербурге. Тогда же и М.Е. Пятницкий ввёл жалейку  в свой хор.
Пастухи – рожечники сами делали рожки различной величины, на которых играли в так называемых «хорах» рожечников. Широкой известностью в начале прошлого века пользовался «хор» рожечников под управлением потомственного пастуха Н.В. Кондратьева.
Жалейка бывает двух разновидностей – одинарная и двойная (двухствольчатая) парная. 
Одинарная жалейка представляет собой небольшую трубочку из ивы или бузины длиной от 10 до 20 см, в верхний конец которой вставлен пищик с одинарным язычком из камыша или гусиного пера, а на нижний надет раструб из коровьего рога или из бересты. Язычок иногда надрезают на самой трубочке. На стволе есть от 3 до 7 игровых отверстий, благодаря чему можно менять высоту звука.
Двойная (двухствольчатая) или парная жалейка состоит из двух одинаковых по длине трубочек с игровыми отверстиями, сложенными рядом и вставленными в один общий раструб. Число игровых отверстий у парных жалеек различно. Как правило,  на мелодической дудочке игровых отверстий больше, чем на дудочке вторящей.
Слово «жалейка» не встречается ни в одном древнерусском памятнике письменности. Первое упоминание о жалейке есть в записях А. Тучкова, относящихся к концу XVIII века. Есть основание предполагать, что жалейка присутствовала до этого в облике другого инструмента.
В ряде областей жалейку, как и владимирский рожок, называют «пастушеским рожком». В результате, когда в письменном источнике говорится о «пастушеском рожке» мы не можем точно знать, о каком инструменте идёт речь.
Происхождение слова «жалейка» не установлено. Некоторые исследователи связывают его с «желями» или «жалениями»- поминальным обрядом, который включает в себя в некоторых местностях игру на жалейке.`,
      kk: `Жалейка (брёлка)

үрмелі музыкалық аспап. Славяндар арасында кең таралған. Жалейка шалюмо және венгрдің тарогато аспаптарымен қатар бүгінгі кларнеттің арғы тегі болып саналады.
Бастапқыда шопандардың қой қайыратын аспабы болған. Жалейка қазіргі Ресей, Белоруссия, Украина, Литва елдерінде кең таралған, бірақ бүгінде тек халық ансамбльдерінде ғана қолданылады. 
Сонымен қатар, аспап «жаломейка» атауымен де белгілі. В.О. Михневич «жалейка» мен «жальник» (көне славяндардың қабірі) сөздерінің түбірі ортақ екенін нұсқап, аспаптың жерлеу ғұрпында қолданылғандығы туралы болжам жасайды. Жалейка туралы алғашқы деректер А. Тучковтың ХVІІІ ғ. жазбаларында кездеседі, бірақ онда аспап свирель деп аталған.
Брёлка – жалейканың Тверь облысындағы жергілікті атауы, аспап талдан, жергілікті атауы – брединадан жасалғандықтан, солай аталған. Брёлка жалейканың негізінде жасалып,  бірінші Ұлы орыс оркестріне В.В. Андреев енгізген болатын. Шопандардың жалейкасымен салыстырғанда брёлканың дыбысы тұтас ағаштан жасалғандықтан әлдеқайда жұмсақ.
ХІХ ғ. соңында орыс қоғамының өзінің ұлттық тарихы мен мәдениетіне қызығушылықтың артуы А. Фаминцын, Н. Привалов, Е. Линеваның халық аспаптары бойынша алғашқы зерттеу жұмыстарын жүргізуіне негіз болды. Мерзімі бойынша бұл орыс халық аспаптарын жаңғыртумен айналысқан В.В. Андреевтің қызметімен сәйкес келді. Балалайка мен домраны жаңғыртумен қатар, В.В. Андреев брёлка, свирель секілді үрмелі аспаптарды қалпына келтіруге де талпыныс жасады. 
ХХ ғ. басында орыс музыканты, Псков өңірінің шаруасы О.У. Смоленский түрлі өлшемдегі жалейка аспаптарын жасап, Петербургте бірнеше жыл өнер көрсеткен орындаушылар квартетін құрды. Сол тұста М.Е. Пятницкий жалейканы өзінің хоры қатарына қосты.
Шопандар өздері жалейка жасап, «хор» құратын. Өткен ғасырдың басында шопандар әулетінен шыққан Н.В. Кондратьев басқарған «хор» танымалдылыққа ие болды.
Жалейканың 2 түрі болады – дара және қосарлы (қосауыз). Дара жалейка ұзындығы 10-20 см болатын, тал немесе бадам ағашынан жасалатын шағын түтік. Жоғарғы ұшына қамыстан немесе қаздың қауырсыны бар дара тілшелі сылдырмақ бекітілсе, төменгі жағына сиыр мүйізінен немесе қайың қабығынан жасалған кеңернеу кигізіледі, дыбыс биіктігін реттейтін 3-7 ойын саңылауы болады. 
Қосарлы немесе жұп жалейка ойын саңылауы бар, ұзындығы бірдей, ортақ кеңернеуге бекітілген екі түтіктен тұрады. Аспаптың бұл түрінде ойын саңылаулары әр қилы болады. Әдетте, әуенді жағында қайталаушы түтікпен салыстырғанда ойын саңылауы көбірек болады. 
«Жалейка» сөзі көне орыс жазба ескерткіштерінде кездеспейді. Аспап туралы алғашқы деректер А. Тучковтың ХVІІІ ғ. жазбаларында кездеседі. Дегенмен, ол жазбаларда жалейка басқаша аталған болуы мүмкін.
Бірқатар облыстарда жалейканы Владимирлік рожок тәрізді «шопандар рожогі» деп атайды. Нәтижесінде, жазба деректерде «шопандар рожогі» деп айтылса, нақты бір аспап туралы айту қиын.
«Жалейка» сөзінің шығу тарихы да белгісіз. Кейбір зерттеушілер оны «желя» немесе «жаления» - бірқатар өңірде жалейкада ойнау кездесетін жерлеу ғұрпымен байланыстырады.`
    },
    images: ['/instruments/world/russia/zhaleika/1.png', '/instruments/world/russia/zhaleika/2.png'],
    audio: '/audio/world/russia/zhaleika.mp3',
    country: 'russia',
    countryName: countryNames.russia,
    flag: countryFlags.russia
  },
  {
    id: 'serbia_dvoyanka',
    name: { en: `Dvoyanka`, ru: `Двоянка`, kk: `Двоянка` },
    description: {
      en: `Dvoyanka is a traditional Serbian double flute, representing one of the distinctive varieties of the duduk family of wind instruments found across the Balkans and Caucasus. The defining characteristic that sets the dvoyanka apart from single-pipe instruments is its unique construction featuring two parallel pipes or trunks instead of one, hence its name which relates to the Slavic word for "two" or "double."

The dvoyanka's two pipes serve different musical functions: one pipe is melodic, used to play the main melody with finger holes allowing for various notes, while the second pipe serves as a bourdon (drone), producing a continuous accompanying tone that provides harmonic support. This dual-pipe design creates a rich, harmonically complex sound that is characteristic of Balkan folk music.

The instrument is particularly common in regions of Serbia where two-voice polyphonic singing traditions are popular. The dvoyanka's natural ability to produce both melody and drone simultaneously makes it an ideal accompaniment for these traditional vocal styles, essentially providing a one-person harmony. The instrument can effectively replicate the two-part vocal harmonies that are central to Serbian folk music traditions.

Construction typically involves carving both pipes from wood, often from the same piece to ensure tonal compatibility. The pipes are usually bound together, and both are blown simultaneously through separate mouthpieces or through a shared air chamber. The melodic pipe contains finger holes (typically 4-6), while the drone pipe is generally a simple tube without holes, though some regional variations exist.

Dvoyanka is most commonly played by shepherds and folk musicians in rural areas of Serbia and neighboring Balkan countries. The instrument's portability and its ability to create full, harmonically rich music from a single performer made it particularly suitable for solo pastoral music-making. Today, the dvoyanka is experiencing renewed interest as part of broader efforts to preserve and revitalize traditional Balkan musical instruments and performance practices.`,
      ru: `Двоянка

одна из разновидностей дюдюка. Основное отличие двоянки от традиционного дюдюка заключается в том, что двоянка имеет два ствола, а не один. Один из стволов – мелодийный, другой – бурдонный. Двоянка распространена в тех районах страны, где популярны двухголосые песни.`,
      kk: `Двоянка

дюдюк аспабының бір түрі. Оның дәстүрлі дюдюктан ерекшелігі – двоянкада екі түтіктің болуында. Олардың бірі – әуендік, екіншісі – бурдонды. Аспап қос дауыста ән орындау кең таралған аймақтарда танымал.`
    },
    images: ['/instruments/world/serbia/dvoyanka/1.jpg'],
    audio: '/audio/world/serbia/dvoyanka.mp3',
    country: 'serbia',
    countryName: countryNames.serbia,
    flag: countryFlags.serbia
  },
  {
    id: 'serbia_frula',
    name: { en: `FRULA`, ru: `ФРУЛА`, kk: `ФРУЛА` },
    description: {
      en: `FRULA

Frula – is a musical instrument which resembles a medium sized flute, traditionally played in Serbia. Also known as svirala or jedinka. It is typically made of wood and has six holes.  The frula is a traditional instrument of shepherds, who would play while tending their flocks.
It is one of several aerophones used for leisure time, rituals, or accompanying the kolo (circle dance), along with long flutes (duduk, cevara), the double flute (dvojnice), and the bag-pipe (gajde).`,
      ru: `ФРУЛА

Фрула – музыкальный инструмент, который напоминает флейту среднего размера, традиционно играемую в Сербии. Также известна как svirala (свирала) или jedinka (жединка). Обычно делают из дерева и имеет шесть отверстий. Фрула – это традиционный инструмент пастухов, которые играют, ухаживая за своими стадами.
Этот инструмент один из нескольких аэрофонов, используемых для отдыха, ритуалов или сопровождающих традиционный танец Коло, наряду с длинными флейтами (дудук, чевара), двойной флейтой (двойнице) и сумкой-трубой (гайде).`,
      kk: `ФРУЛА

Фрула – Сербияда ойналатын орташа көлемді флейта тәріздес музыкалық аспап. Сондай-ақ, svirala (свирала) немесе jedinka (жединка) деген атаулармен де танымал. Негізінен, аспап алты саңылау ойылып, ағаштан жасалады. Фруланы шопандар мал бағып жүріп ойнағандықтан, шопандардың дәстүрлі аспабы деп атайды. 
Бұл аспап ойын-сауық, діни ғұрыптар, Коло ұлттық биін сүйемелдеуде ұзын флейталармен (дудук, чевара), қосарлы флейтамен (двойнице) және сөмке-түтікпен (гайда) қатар қолданылатын бірқатар аэрофондардың бірі.`
    },
    images: ['/instruments/world/serbia/frula/1.jpg'],
    audio: '/audio/world/serbia/frula.mp3',
    country: 'serbia',
    countryName: countryNames.serbia,
    flag: countryFlags.serbia
  },
  {
    id: 'serbia_gusla',
    name: { en: `Gusle`, ru: `Гусле`, kk: `Гусле` },
    description: {
      en: `Gusle is a folk stringed instrument of the southern Slavs.
The gusle has an oval or pear-shaped body, hollowed out of wood. Its open side is covered with a leather membrane, in which several small resonant holes are sometimes cut out. A long wooden peg is perpendicularly located in the upper part of the neck, on which one or two strings are wound, twisted from 50-60 threads of horse hair. They play a bow-shaped bow. The string is not pressed against the neck, but is only touched by its fingers, extracting the flaglet sounds. Gusle was traditionally accompanied by ancient heroic-epic, so-called youth songs (unak - young man) in a recitative style. According to historical chronicles, Serbian wandering musicians performed in many countries of Eastern Europe and were very popular.
In Yugoslavia, the instrument is very popular, in Bulgaria it is rare.
When playing, gusle are kneeling, holding the bar with one hand, sometimes leaning it against the shoulder, and in the other with a bow. Their main task is to accompany singing. And therefore, the sound of gusle is regulated by the pitch of the hussar's voice and, accordingly, becomes an individual instrument.
The name “gusle” is associated with the Old Slavonic word “gosl” – a string (wire). And the first mention connecting the gusle with the southern Slavs was recorded in the first half of the 7th century by the Byzantines, when they captured two spies who had no weapons with them, only a wooden instrument. Someone says that gusle, on the contrary, came to the southern Slavs from Byzantium in the 8–10 centuries, and its homeland is Asia.
In some books and publications, there is a mention of the meeting of the Serbian ruler Stefan Nemanja and King of Germany Frederick I Barbarossa in the 12th century, the latter met gusle sounds with singing that amazed him so much that he began to be interested in any information related to this instrument.
Now, it is probably impossible to meet a gusle in every Serbian house, and not everyone will undertake to play it. In Montenegro, they are often found in markets. Although, it seems that they are bought more as a souvenir or ethno item to decorate the interior of a food service. However, the art of playing the gusle is alive. There are various communities of guslars, concerts and music competitions are held.`,
      ru: `Гусле

народный, струнно-смычковый инструмент южных славян.
У гусле овальной или грушевидной формы корпус, выдолбленый из дерева. Открытая его сторона затянута кожаной мембраной, в которой иногда вырезано несколько маленьких резонаторных отверстий. В верхнюю часть шейки перпендикулярно расположен длинный деревянный колок, на который намотана одна или две струны, свитые из 50-60 нитей конского волоса. Играют лукообразным смычком. Струну не прижимают к шейке, а лишь касаются её пальцами, извлекая флажолетные звуки. Гусле традиционно сопровождали старинные героико-эпические, так называемые юнацкие песни (юнак — мо́лодец) в речитативном стиле. По свидетельствам исторических хроник сербские странствующие музыканты выступали во многих странах Восточной Европы и пользовались большой популярностью.
В Югославии инструмент очень популярен, в Болгарии встречается редко.
При игре гусле ставят на колени, одной рукой держат гриф, иногда прислонив его к плечу, а в другой смычок. Основная их задача – это сопровождение пения. А поэтому звук гусле регулируется под высоту голоса гусляра и, соответственно, становится индивидуальным инструментом.          
Название «гусле» связывают со старославянским словом «госл» – струна (проволока). А первое упоминание, связывающее гусле с южными славянами, зафиксировано в первой половине 7 века у византийцев, когда ими были схвачены два шпиона, не имевшие при себе никакого оружия, только деревянный инструмент. Кто-то говорит о том, что гусле, наоборот, попали к южным славянам из Византии в 8–10 веках, а родина их – Азия.         
В некоторых книгах и публикациях есть упоминание о встрече сербского правителя Стефана Неманя и короля Германии Фридриха I Барбароссы в 12 веке, последнего встречали звуки гусле с пением, которые так сильно поразили его, что он начал интересоваться любыми сведениями, связанными с этим инструментом.          
Сейчас, возможно нельзя встретить гусле в каждом сербском доме, да и далеко не каждый возьмётся на них играть. В Черногории они частенько встречаются на рынках. Хотя, кажется, их покупают больше как сувенир или этно предмет для украшения интерьера общепита. Однако искусство игры на гусле живо. Существуют различные содружества гусляров, проходят концерты и музыкальные соревнования.`,
      kk: `Гусле

оңтүстік славян халықтарының ішекті-ыспалы музыкалық аспабы. Аспаптың сопақша және жұмыр шанақ корпусы ағаштан ойып жасалады. Оның ашық жағы тері мембранамен жабылған, кейде бірнеше шағын резонаторлық саңылаулар жасалады. Мойынның жоғары бөлігіне перпендикуляр ұзын ағаш құлақ орналасқан, оған 50-60 жылқы қылынан есілген 1 немесе 2 ішек тағылады. Садақ тәрізді қияқпен ойнайды. Ішектерді мойынға баспай, саусақтарды тигізу арқылы флажолет дыбыстар алады. Негізінде, гусле юнак әндері (юнак – азамат) аталатын эпикалық жырларды желдірме мәнерде сүйемелдеген. Тарихи жазбалар бойынша, Сербияның саяхаттаушы музыканттары Шығыс Еуропаның көптеген елдерінде өнер көрсетіп, танымалдылыққа ие болған.
Аспап Югославияда кең таралса, Болгарияда сирек кездеседі.
Ойын барысында гуслені тізе қойып, бір қолмен мойнын иыққа тіреп, екіншісінде қияқты ұстайды. Негізгі міндеті – әнді сүйемелдеу. Сондықтан гусле дыбысы орындаушы (гусляр) дауыс биіктігіне сай реттеледі, соған сай жеке аспап болады. 
«Гусле» атауын көне славянның «госл» – ішек (сым) сөзімен байланыстырады. Ал аспапты оңтүстік славяндармен байланыстыратын алғашқы жазбалар VІІ ғ. бірінші жартысымен мерзімделеді, онда византиялықтар ешқандай қаруы жоқ, тек ағаш аспабы болған екі тыңшыны құрықтаған. Біреулер гусленің отаны – Азия, ал оңтүстік славяндарға Византиядан VІІІ-Х ғғ келген деседі.
Бірқатар кітаптар мен мақалаларда серб билеушісі Стефан Немани мен Германия королі Фридрих І Барбароссаның ХІІ ғ. кездескені туралы, Германия королін гусленің сүйемелдеуімен қарсы алғаны туралы және корольдің аспапқа қызығып, ол жайында мәлімет іздестіргені айтылған. 
Бүгінде гусле әрбір сербтің үйінде кездеспеуі және ойнай білмеуі мүмкін. Черногорияда аспап базарларда жиі кездеседі. Бірақ оларды кәдесый немесе үй интерьерін безендіретін этно бұйым ретінде сатылады. Дегенмен де, гуследе ойнау өнері әлі де бар. Түрлі концерттер мен музыкалық жарыстар ұйымдастырылып, гуслярлар бірлестігі жұмыс жасайды.`
    },
    images: ['/instruments/world/serbia/gusla/1.jpg'],
    audio: '/audio/world/serbia/gusla.mp3',
    country: 'serbia',
    countryName: countryNames.serbia,
    flag: countryFlags.serbia
  },
  {
    id: 'tajikistan_daf',
    name: { en: `Daf`, ru: `Даф (то же, что азербайджанский гавал, узбеко-таджикская дойра)`, kk: `Daf` },
    description: {
      en: `Daf (the same as the Azerbaijani gaval, the Uzbek-Tajik doira) is a Persian percussion musical instrument. A kind of tambourine used in popular and classical music in Azerbaijan, Armenia, Iraq, Iran, Tajikistan, Syria, Turkey, Uzbekistan and the Middle East. It is one of those rare musical instruments that has preserved its original form to this day.
Daf is a wooden rim with sturgeon skin stretched over it. In modern conditions, the gaval membrane is also made of plastic to prevent moisture. Sometimes 60-70 copper or metal rings are attached to the rim of the gaval, which, when performed, create a ringing sound.
A daf artist, holding it with both hands, plays it with his fingers, also using a splat in places. Gaval is an indispensable instrument for performers of traditional genres of Azerbaijani music, such as tesnif and mugam. Mugam in Azerbaijan is usually performed by a trio of sazandares: tarist, kemanchist and gavalist. Hanende (singer) himself is often also a gavalist.
The word “daf” is rooted in the culture of the ancient peoples of Mesopotamia. In Sumerians, it was pronounced oak and was used to indicate the surface for writing (including stone) and the actual writing, handwriting. In the same meanings it was used in Akkadian (Babylonian-Assyrian) language, where it sounded like a dupu or tupu, and then in Aramaic, transformed into a dup. The Akkadian tabalu or tapalu, meaning “drum, tambourine”, are close in pronunciation. In the Middle Persian (Pahlavi) language, the name of the instrument sounded like dap (دپ dap), and the word daf (دف daf) - its Arabicized version.
Today, daf is popular not only in Iran. Musical instruments of this type are known under various names throughout the Near and Middle East, Transcaucasia and Central Asia. These include Arab daf, daf, duf, tar, rikk, Uyghurs dap and dabu, Ajarian depi, Armenian daf, def, dapp, hawal, Dagestan tep, Azerbaijani def, dyaf, gaval, Uzbek and Tajik doira and daira and others. As it’s known, in antiquity mainly women played daf.
In Sumer in the period 3000–2500 years BC the female tradition of playing daf was inextricably linked with ritual activities, in particular, with the cult of the moon. Numerous images of priestesses accompanying their ritual dance with a tambourine are known. In pre-Islamic Iran, the moon was considered a deity of purity and a female. The function of a participant in religious meetings passed into Sufism. The rhythm of daf in the Sufi dance unites, under its measured blows, a state of mystical ecstasy is achieved, when one connects with the group, the bodies of the participants in the ritual action become one, and the “ego” is forgotten.
Since ancient times, there have been several varieties of daf. The ancient Semitic peoples had two types of tambourines: rectangular and round (or oval) in shape. Both are common to this day, although they probably have undergone some transformation in the design. In the countries of the Near and Middle East, there are rectangular, leather-covered on both sides, and round daf: one-sided and two-sided, equipped with small bells, metal rings or “plates” (disks).
The methods of playing daf have been transmitted for centuries from teacher to student. One of the earliest images of this instrument is a terracotta figurine, found on the territory of ancient Sumer (II millennium BC. E.) – indicates that even then the tambourine was held by the hands, located somewhat away from the musician’s body, as well as during execution in modern Iran. The pitch and color of sounds directly depends on which part of the instrument is involved.`,
      ru: `Даф (то же, что азербайджанский гавал, узбеко-таджикская дойра)

персидский ударный музыкальный инструмент. Разновидность бубна, используемый в популярной и классической музыке в Азербайджане, Армении, Ираке, Иране, Таджикистане, Сирии, Турции, Узбекистане и странах Ближнего Востока. Один из тех редких музыкальных инструментов, который сохранил до наших дней свою первоначальную форму.
Даф представляет собой деревянный обод с натянутой на него кожей осетра. В современных условиях мембрана гавала также делается из пластика, чтобы предотвратить увлажнение. К ободу гавала иногда прикрепляются 60-70 медных или металлических колец, которые при исполнении создают звенящий звук. 
Исполнитель дафа, держа его обеими руками, играет на нём пальцами, применяя местами также приём шлёпка. Гавал является обязательным инструментом для исполнителей традиционных жанров азербайджанской музыки, таких как тесниф и мугам. Мугам в Азербайджане обычно исполняется трио сазандарей: тарист, кеманчист и гавалист. Сам ханенде (певец) часто является одновременно и гавалистом.
Слово "даф" уходит корнями в культуру древних народов Месопотамии. У шумеров оно произносилось дуб и применялось для обозначения поверхности для письма (в том числе каменной) и собственно письма, почерка. В этих же значениях оно использовалось в аккадском (вавилоно-ассирийском) языке, где звучало как дупу или тупу, а затем в арамейском, преобразившись в дуп. Близкими по произношению оказываются аккадские tabalu или tapalu, означающие «барабан, тамбурин». На средненеперсидском (пехлевийском) языке название инструмента звучало как дап ( دپ dap), а слово даф (دف daf) – его арабизированный вариант.
Сегодня даф популярен не только в Иране. Подобного типа музыкальные инструменты известны под различными названиями на всей территории Ближнего и Среднего Востока, Закавказье и Средней Азии. К ним относятся арабские даф, дафт, дуф, тар, рикк, уйгурские дап и дабу, аджарский депи, армянские даф, дэф, дапп, хавал, дагестанский тэп, азербайджанские дэф, дяф, гавал, узбекские и таджикские дойра и дайра и другие. Как известно, в древности на дафах играли преимущественно женщины.
В Шумере в период 3000 – 2500 гг. до н. э. женская традиция игры на дафе была неразрывно связана с ритуальными действами, в частности, с культом луны. Известны многочисленные изображения жриц, сопровождающих свой ритуальной танец игрой на бубне. В доисламском Иране Луну считали Божеством чистоты и представительницей женского пола. Функция участника религиозных собраний перешла и в суфизм. Ритм дафа в суфийском танце объединяет, под его размеренные удары достигается состояние мистического экстаза, когда один соединяется с группой, тела участников ритуального действа становятся одним целым, и «эго» забывается.
Издавна бытовало несколько разновидностей дафа. У древних семитских народностей существовали два типа бубна: прямоугольной и круглой (или овальной) формы. Оба распространены и по сей день, хотя, вероятно, и претерпели некоторую трансформацию в конструкции. В странах Ближнего и Среднего Востока, встречаются прямоугольные, обтянутые кожей с двух сторон, и круглые дафы: односторонние и двусторонние, снабженные небольшими колокольчиками, металлическими кольцами или «тарелочками» (дисками).
Приёмы игры на дафе передавались веками от учителя к ученику. Одно из самых ранних изображений этого инструмента – терракотовая статуэтка, найденная на территории древнего Шумера (II тыс. до н. э.), – указывает на то, что и тогда бубен держался кистями рук, располагаясь несколько в стороне от тела музыканта, также как во время исполнения в современном Иране. Высота и окраска звуков напрямую зависит от того, какая часть инструмента задействована.`,
      kk: ``
    },
    images: ['/instruments/world/tajikistan/daf/1.jpg'],
    audio: '/audio/world/tajikistan/daf.mp3',
    country: 'tajikistan',
    countryName: countryNames.tajikistan,
    flag: countryFlags.tajikistan
  },
  {
    id: 'tajikistan_doira',
    name: { en: `Doira`, ru: `Дойра (деф)`, kk: `Doira` },
    description: {
      en: `Doira

The doira (also spelled doyra, or def in mountainous regions) is a traditional Central Asian frame drum widely used in Tajik musical culture. While similar in construction to the Uzbek doira, the Tajik instrument exhibits regional variations. In the mountainous regions of Tajikistan, the instrument tends to be somewhat larger and is commonly referred to as "def," while in the valley regions it maintains similar proportions to its Uzbek counterpart and is called "doira."

The doira consists of a wooden frame, traditionally circular, over which a membrane (usually goat skin) is stretched and secured. The frame typically contains small metal rings or jingles attached to the inside, which create a shimmering, jingling sound when the drum is struck or shaken. This combination of the deep drum tone and the bright jingle creates the doira's distinctive timbre.

In Tajik musical practice, the doira serves as an essential rhythmic foundation instrument. It is a standard component of both traditional instrumental ensembles and modern orchestras, where it performs the crucial role of rhythmically organizing and anchoring the music. The doira's clear, penetrating sound helps maintain tempo and provides the rhythmic structure upon which melodic instruments build their performances.

The performance art of doira playing in Tajikistan has reached exceptional heights. Master doirists are renowned for their ability to produce an astonishing wealth of rhythmic patterns, from simple repetitive cycles to highly complex polyrhythmic structures. The sounds of a single doira are often sufficient to accompany traditional dancing, with the drummer creating intricate patterns that enhance and complement the dancers' movements.

In some mountain regions of Tajikistan, musicians create ensembles consisting exclusively of def/doira players. These percussion-only groups participate in large public celebrations and family events, producing intricate polyrhythmic compositions that showcase the versatility and complexity possible with frame drums. The interweaving patterns created by multiple doiras demonstrate the sophisticated rhythmic traditions of Tajik musical culture.`,
      ru: `Дойра (деф)

инструмент такого же устройства, как и узбекская дойра. В горных районах Таджикистана этот инструмент имеет несколько большие размеры и называется дефом, в долинных – такие же, как и узбекский, и носит название дойра. Как правило, и здесь он входит в состав инструментальных ансамблей и оркестров, выполняя в них роль ритмически организующего инструмента. Звуками лишь одной дойры часто сопровождаются танцы. Исключительное исполнительское искусство дойристов поражает слушателя богатством ритмических рисунков. У горных таджиков иногда создаются ансамбли, состоящие из одних дефов. Они принимают участие в больших общественных или семейных праздниках. В произведениях, исполняемых таким ансамблем, наблюдается причудливая полиритмия.`,
      kk: ``
    },
    images: ['/instruments/world/tajikistan/doira/1.jpg'],
    audio: '/audio/world/tajikistan/doira.mp3',
    country: 'tajikistan',
    countryName: countryNames.tajikistan,
    flag: countryFlags.tajikistan
  },
  {
    id: 'tajikistan_dumbra',
    name: { en: `Dumbra`, ru: `Думбра`, kk: `Думбра` },
    description: {
      en: `Dumbra is a two-stringed instrument with a length of about 700-800 mm, with a pear-shaped body and a relatively long neck. It is made of mulberry wood. The body is hollowed, its back is convex; two or three groups of small round resonator holes are drilled in the deck. The neck is round, without frets; wooden pegs are inserted into its upper end (head). The neck and body are made from one piece of wood. The strings are silk, sometimes veined; are configured in a quart. The sound is made by rattling. The hatching technique of the right hand is quite diverse and consists of alternating strokes on the strings with one and all fingers, brush movements down, up, and both sides. In the left hand during the game, mainly three fingers (thumb, index and middle) take part, less often four and, as an exception, all five fingers. They play, as a rule, only in the first position. The sound of the dumbra is quiet and is accompanied by the sounds that arise from the sliding of nails on the deck.
They play dumbra while sitting, sometimes standing, while riding, holding the instrument in front of themselves in a horizontal position and slightly raising (or lowering) the neck. Dumbra is a very portable instrument, plugging it in a belt, the musician easily sets off on foot and horseback with him. This is the best possible way to meet the living conditions of Tajiks in mountainous areas, where the dumbra is prevalent. It accompanies singing, performs instrumental versions of songs, dances. Its role in the musical life of mountain residents of Tajikistan is about the same as that played by the tutor from the Tajiks in the valley regions of the republic.`,
      ru: `Думбра

двухструнный инструмент длиной около 700-800 мм, с грушевидным корпусом и сравнительно длинной шейкой. Изготавливается из тутового дерева. Корпус долблёный, тыльная сторона его выпуклая; в деке высверлены две-три группы небольших круглых резонаторных отверстий. Шейка круглая, без ладов; в верхний конец её (головку) вставлены деревянные колки. Шейку и корпус выделывают из одного куска дерева. Струны шелковые, иногда жильные; настраиваются в кварту. Звук извлекается бряцанием. Штриховая техника правой руки довольно разнообразна и состоит из чередования ударов по струнам одним и всеми пальцами, движений кисти вниз, вверх и в обе стороны. В левой руке при игре принимают участие, главным образом, три пальца (большой, указательный и средний), реже четыре и, в виде исключения, все пять пальцев. Играют, как правило, только в первой позиции. Звук думбры негромкий и сопровождается призвуками, возникающими от скольжения ногтей по деке.
На думбре играют сидя, иногда стоя, во время верховой езды, держа инструмент перед собой в горизонтальном положении и слегка приподняв (или опустив вниз) шейку. Думбра очень портативный инструмент, заткнув его за опояску, музыкант легко пускается с ним в пеший и верховой путь. Это как нельзя лучше отвечает условиям жизни таджиков горных районов, где думбра и пользуется преимущественным распространением. На нём аккомпанируют пению, исполняют инструментальные варианты песен, танцы. Его роль в музыкальном быту жителей горного Таджикистана примерно такая же, какую играет дутор у таджиков долинных районов республики.`,
      kk: `Думбра

ұзындығы шамамен 700-800 мм болатын, корпусы алмұрт пішіндес, мойны ұзынша келген екі ішекті музыкалық аспап. Тұт ағашынан жасалады. Аспаптың корпусы ойып жасалады, сырты шығыңқы; декада шағын дөңгелек формалы 2-3 топ дыбыс ойықтары жасалған. Мойны дөңгеленген, пернесіз; жоғарғы ұшына ағаш құлақтар орнатылған. Мойны мен корпусын тұтас ағаштан ойып жасайды. Ішектер жібектен, кейде малдың ішегінен тағылады; олар кварта күйіне келтіріледі. Дыбыс шерту арқылы алынады. Оң қол техникасы алуан түрлі және бір не бірнеше саусақпен ішектерді алма кезек шерту, білекті жоғары, төмен және екі жаққа секілді қимылдардан тұрады. Ойын барысында сол қолдан үш саусақ (бас бармақ, сұқ және ортаңғы саусақтар), төрт саусақ сирек, ерекше кезде бес саусақ қатысады. Негізінен, тек бірінші позицияда ойналады. Думбраның дыбысы қатты емес, декада тырнақтың сырғуынан туындайтын дыбыстармен сүйемелденеді.
Думбрада отырып, кейде тұрып та, ат үстінде аспапты көлденең қалыпта, мойнын сәл жоғары көтеріп (немесе түсіріп) ойнайды. Думбра өте қолайлы аспап, музыкант оны белдігіне бекітіп алып, жаяу немесе ат үстінде сапарға шыға алады. Бұл думбра кең таралған таулы аудандардағы тәжіктердің өмір салтына өте тиімді. Онымен әнді сүйемелдейді, әндердің аспаптық нұсқаларын орындайды. Дутор республиканың жазық аймақтарындағы халықтарда маңызы қандай болса, бұл аспап та Тәжікстанның таулы өңірі тұрғындарының музыкалық өмірінде сондай маңызға ие.`
    },
    images: ['/instruments/world/tajikistan/dumbra/1.jpg'],
    audio: '/audio/world/tajikistan/dumbra.mp3',
    country: 'tajikistan',
    countryName: countryNames.tajikistan,
    flag: countryFlags.tajikistan
  },
  {
    id: 'tajikistan_dutori',
    name: { en: `Dutori`, ru: `Дутори`, kk: `Дутори` },
    description: {
      en: `Dutori

the Tajik dutor is no different from the Uzbek dutar in the design, tuning of strings, scale and technique of the game. The dutor is widespread among residents of the valley regions and in the cities of the republic.
Wide layers of music lovers and professionals use the dutori. It accompanies singing, performs folk songs, dances and various instrumental plays. The repertoire of folk professional musicians is very extensive, it includes works on modern and historical subjects, mass songs of Soviet composers, large multi-part vocal and instrumental compositions - poppies, etc.
The dutori is introduced into various instrumental and instrumental-vocal ensembles. Dutors of advanced designs are used as one of the main groups in the orchestra of folk instruments of the Tajik Philharmonic.
The total length of the instrument is 1150-1200 mm. Its body is glued from individual bent rivets, the upper deck is thin, flat, sometimes has small resonant holes.
The neck on the back is rounded, narrower at the top and expanding downward. It has 13-14 entangled frets. Two wooden pegs are inserted into the upper end of the neck (head) - vertical and horizontal. All parts of the instrument are made of mulberry wood and are often inlaid with bone. The strings – formerly silk, and now metal – are attached at one end to a protrusion in the lower part of the body, and the other to pegs. On the deck under the strings is a small wooden stand. Strings are built most often in a quart, and sometimes in unison and in a fifth. The scale in the lower case is chromatic, in the upper case is diatonic. The instrument range is one and a half octaves.
The instrument is held in an inclined position, lifting the neck up. Sounds are extracted by striking (rattling) the strings with the fingers of the right hand; the first string is pressed against the neck with the index, middle and ring fingers of the left hand, the second is large, sometimes the ring finger. Too long neck of the dutar makes it difficult to perform technically complex works on it, especially in lower case. But a great variety is observed in the right-hand hatching technique: rattling with all fingers on both sides, sliding beats from top to bottom or from bottom to top, beats on strings with one finger, alternating individual beats with rattling, etc. The sound of the dutar is quiet and is accompanied by rustling created by sliding on the deck of the nails of the right hand.
The radical restructuring of the dutar and the creation of a family of these instruments were started in the late 30s by A.I. Petrosyants and master S.E. Didenko. In an instrument with a chromatic scale they created, the obtrusive frets were replaced with constant fretted fretboard, and its appearance took on a slightly different shape than the folk one. On the basis of the type sample, dutars were later built: prima, second, viola, tenor (type instrument), bass and double bass. On the dutars, prima, second, alt and tenor, the sound is extracted with the fingers and a variety of stroke techniques based on folk performing practice are used. When rattling the strings, the fingers did not touch the upper deck, so the rustles were eliminated and the sound became cleaner. On bass and double bass dutars play a plectrum of hard leather. The double bass dutar, due to its large size, is equipped with a foot for abutment on the floor.`,
      ru: `Дутори

конструкцией, настройкой струн, звукорядом и техникой игры таджикский дутор ничем не отличается от узбекского дутара. Дутор распространён среди жителей долинных районов и в городах республики.
Дутором пользуются широкие слои любителей музыки и профессионалы. На нём аккомпанируют пению, исполняют народные песни, танцы и различные инструментальные пьесы. Репертуар народных профессиональных музыкантов весьма обширен, в него входят произведения на современную и историческую тематику, массовые песни советских композиторов, большие многочастные вокально-инструментальные сочинения – макомы и т.д.
Дутор вводят в состав различных инструментальных и инструментально-вокальных ансамблей. Дуторы усовершенствованных образцов применяются в качестве одной из основных групп в оркестре народных инструментов Таджикской филармонии.
Общая длина инструмента – 1150-1200 мм. Корпус его склеен из отдельных гнутых клепок, верхняя дека – тонкая, плоская, иногда имеет маленькие резонаторные отверстия.
Шейка с тыльной стороны округлая, более узкая вверху и расширяющаяся книзу. На ней 13-14 навязных ладов. В верхний конец шейки (головку) вставлены два деревянных колка – вертикальный и горизонтальный. Все части инструмента изготавливаются из тутового дерева и нередко инкрустируются костью. Струны – прежде шёлковые, а в настоящее время металлические – одним концом крепится к выступу в нижней части корпуса, другим – к колкам. На деке под струнами находится маленькая деревянная подставка. Струны строятся чаще всего в кварту, а иногда в унисон и в квинту. Звукоряд в нижнем регистре – хроматический, в верхнем – диатонический. Диапазон инструмента равен полутора октавам.
Инструмент держат в наклонном положении, приподняв шейку вверх. Звуки извлекают ударами (бряцанием) по струнам пальцами правой руки; первую струну прижимают к шейке указательным, средним и безымянным пальцами левой руки, вторую большим, иногда безымянным. Слишком длинная шейка дутара затрудняет исполнение на нём технически сложных произведений, особенно в нижнем регистре. Зато большое разнообразие наблюдается в штриховой технике правой руки: бряцанием всеми пальцами в обе стороны, скользящие удары сверху вниз или снизу вверх, удары по струнам одним пальцем, чередование отдельных ударов с бряцанием и т.п. Звук дутара негромкий и сопровождается шорохами, создающимися от скольжения по деке ногтей правой руки. 
Коренная перестройка дутара и создание семейства этих инструментов были начаты в конце 30-х годов А.И. Петросянцем и мастером С.Е. Диденко. В созданном ими инструменте с хроматическим звукорядом навязные лады заменили постоянными, врезанными в гриф, а внешний вид его приобрёл несколько иные очертания, чем народный. На основе типового образца в дальнейшем были построены дутары: прима, секунда, альт, тенор (типовой инструмент), бас и контрабас. На дутарах прима, секунда, альт и тенор звук извлекается пальцами и применяется разнообразная штриховая техника, основанная на народной исполнительской практике. При бряцании по струнам пальцы верхнюю деку уже не задевали, благодаря чему были устранены шорохи и звучание стало более чистым. На басовом и контрабасовом дутарах играют плектром из твёрдой кожи. Контрабасовый дутар, ввиду его больших размеров, снабжён ножкой для упора в пол.`,
      kk: `Дутори

құрылысы, ішектердің күйге келтірілуі, дыбыс қатары мен ойнау техникасы бойынша тәжік дуторының өзбек дутарынан еш айырмашылығы жоқ. Аспап аңғарлы өлкелер мен республика қалаларында кең таралған.
Дутор әуесқой және кәсіби музыканттар арасында кең таралған. Аспапта әншілерді сүйемелдеп, халық әндерін, би мен түрлі аспаптық пьесалар орындаған. Халық арасындағы кәсіби музыканттардың репертуары әлдеқайда кең, оған түрлі заманауи және тарихи тақырыптардағы шығармалар, жаппай кеңестік кезең композиторларының әндері, ірі көлемді вокалды-аспапты туынды – макомдар, т.б. енген.
Дутор түрлі аспаптық және аспаптық-вокалды ансамбльдер құрамына енгізілді. Жетілдірілген үлгідегі дуторлар Тәжік филармониясы халық аспаптар оркестрінде негізгі топтардың бірі ретінде қолданылады.
Аспаптың жалпы ұзындығы – 1150-1200 мм. Корпус иілген шегелермен біріктірілген, жоғарғы дека – жіңішке, тегіс, кейде резонаторлық ойықтары болады.
Артқы жағындағы мойны дөңгеленген, жоғары жағы тарлау болып, төмен қарай кеңейеді. 13-14 пернесі болады. Жоғары жағына тік және көлденең қалыпта екі ағаш құлақ орнатылған. Аспаптың барлық бөліктері тұт ағашынан жасалып, көп жағдайда сүйекпен өрнектеледі. Ішектері бұрын жібекпен, бүгінде металдан тағылып, бір жағы корпустың төменгі жағындағы шығыңқы тұсқа, екінші ұшы құлақтарға бекітіледі. Декада ішектер астында кішкене ағаш тиек болады. Ішектер жиі кварта күйіне, кейде унисон және квинта күйлеріне келтіріледі. Дыбыс қатары төменгі регистрде – хроматикалық, жоғарғыда – диатоникалық. Аспап диапазоны бір жарым октаваға тең.
Аспапты көлбеу қалыпта, мойнын жоғары қаратып ұстайды. Оң қол саусақтарымен ішектерді соғу арқылы дыбыс алады; бірінші ішекті мойынға сол қолдың сұқ, ортаңғы және атсыз саусақтармен басса, екіншісін бас бармақпен, кейде шылдыр шүмекпен басады. Дутардың тым ұзын мойны техникалық жағынан күрделі, әсіресе төменгі регистрдегі шығармаларды орындауда қиындық туғызады. Бірақ оң қолдың ойын техникасында бірнеше тәсілдер кездеседі: екі бағытта барлық саусақтармен соғу, жоғары-төмен және кері бағытта сүйкей соғу, ішектерді бір саусақпен шерту, кезектес соғу, т.б. Дутардың үні жай, ойын барысында оң қол тырнақтарынан туындайтын сыбдырымен сүйемелденеді. 
Дутарды түбегейлі өзгерту мен осы аспаптың туыстас түрлерін жасауды 30-жылдардың соңында А.И. Петросянц пен шебер С.Е. Диденко бастаған болатын. Олар жасаған аспапта дыбыс қатары хроматикалық таңылмалы пернелерді тұрақтылармен ауыстырылды, ал сырт келбеті халықтықпен салыстырғанда бірқатар өзгерістерге ие болды. Типтік үлгі негізінде кейіннен прима, секунда, альт, тенор (типтік аспап), бас және контрабас жасалды. Прима, секунда, альт және тенор дутарларда дыбыс саусақтармен алынып, халықтық орындау тәжірибесіне негізделген түрлі штрихтік техникалар қолданылады. Ішектерді сылдырлату кезінде саусақтар жоғары декаға тимейтін болды, бұл артық дыбысты кетіріп, аспап үнінің таза болуына әкелді. Бас және контрабас дутарларда қатты теріден жасалан плектрмен ойнайды. Ірі көлеміне байланысты контрабас дутарда жерге сүйенетін аяқ жасалған.`
    },
    images: ['/instruments/world/tajikistan/dutori/1.jpg'],
    audio: '/audio/world/tajikistan/dutori.mp3',
    country: 'tajikistan',
    countryName: countryNames.tajikistan,
    flag: countryFlags.tajikistan
  },
  {
    id: 'tajikistan_ghijak',
    name: { en: `Ghijak`, ru: `Гиджак. В Таджикистане бытуют двух-, трёх- и четырёхструнные гиджаки. Двухструнный гиджак имеет довольно примитивное устройство. Он состоит из деревянного бруска около 700 мм длиной, один конец которого слегка заострён и служит ножкой инструмента, а другой расширен и представляет собой головку со вставленными в неё двумя колками. На брусок надета жестяная банка (чаще всего из-под пороха), выполняющая функцию резонаторного корпуса. Струны волосяные, строятся в кварту. Смычок лукообразный, с прядью черных конских волос, которые натираются смолой. При игре инструмент держат в вертикальном положении. Звук его слабый, гнусавого тембра. Двухструнный гиджак распространён в горных районах Таджикистана и в настоящее время постепенно вытесняется более совершенными трёх- и четырёхструнными гиджаками.`, kk: `Гиджак. Тәжікстанда екі, үш және төрт ішекті гиджактар қолданыста. Екі ішекті гиджактың құрылысы қарапайым. Аспап ұзындығы 700 мм ағаш кесегінен жасалады, бір жағы сәл үшкірленіп, аяқ қызметін атқарады, екінші жағы кеңейе келіп, екі құлақ бекітіледі. Ағашқа резонаторлық корпус қызметін атқаратын қаңылтыр құты кигізіледі. Ішектер түкті, кварта күйіне келтіріледі. Ысқышы садақ пішіндес, шайырланған жылқының қара қылы тағылады. Ойын барысында аспапты тік қалыпта ұстайды. Дыбысы әлсіз. Екі ішекті гиджак Тәжікстанның таулы аудандарында кең таралған, дегенмен қазіргі кезде жетілдірілген үш және төрт ішекті гиджактармен ығыстырылуда.` },
    description: {
      en: `Ghijak. In Tajikistan, there are two-, three- and four-stringed ghijaks. Two-stringed ghijak has a rather primitive device. It consists of a wooden block about 700 mm long, one end of which is slightly pointed and serves as an instrument’s leg, and the other is expanded and is a head with two pegs inserted into it. A tin can is put on the bar (most often from under gunpowder), which performs the function of a resonator body. Hair strings are built in a quart. The bow is bow-shaped, with a lock of black horsehair that is rubbed with resin. When playing, the instrument is held upright. His sound is faint, nasal timbre. Two-stringed ghijak is widespread in the mountainous regions of Tajikistan and is currently being gradually replaced by more advanced three- and four-stringed ghijaks.
The Tajik three-string ghijak has the same device and the same quart tuning of strings as the Uzbek three-string ghijak. It does not differ from the latter in the way it is played. Three-stringed ghijak is widespread in the valley regions of the republic and in cities. It is played solo and in an ensemble with other instruments (nai, dutor, chang, doira, etc.), performed plays, songs, richly painting them with grace, dance music, multi-part vocal and instrumental compositions – makoms, accompanying singing.
Recently, Tajik musicians, as well as musicians of Uzbekistan, have replaced the three-stringed ghijak with the four-stringed fifth-string system, which has significantly greater performing capabilities. In solo concert practice, amateur ensembles and in the orchestra of folk instruments of the Tajik Philharmonic, four-stringed ghijaks are used. In the orchestra, in addition, there are advanced instruments, including bass and double bass ghijaks.`,
      ru: `Гиджак. В Таджикистане бытуют двух-, трёх- и четырёхструнные гиджаки. Двухструнный гиджак имеет довольно примитивное устройство. Он состоит из деревянного бруска около 700 мм длиной, один конец которого слегка заострён и служит ножкой инструмента, а другой расширен и представляет собой головку со вставленными в неё двумя колками. На брусок надета жестяная банка (чаще всего из-под пороха), выполняющая функцию резонаторного корпуса. Струны волосяные, строятся в кварту. Смычок лукообразный, с прядью черных конских волос, которые натираются смолой. При игре инструмент держат в вертикальном положении. Звук его слабый, гнусавого тембра. Двухструнный гиджак распространён в горных районах Таджикистана и в настоящее время постепенно вытесняется более совершенными трёх- и четырёхструнными гиджаками.

Трёхструнный гиджак таджиков имеет такое же устройство и ту же квартовую настройку струн, что и узбекский трёхструнный гиджак. Не отличается он от последнего и способом игры. Трёхструнный гиджак распространён в долинных районах республики и в городах. На нём играют соло и в ансамбле с другими инструментами (най, дутор, чанг, дойра и т.д.), исполняют пьесы, песни, богато расцвечивая их фиоритурами, танцевальную музыку, многочастные вокально-инструментальные произведения – макомы, аккомпанируют пению.
В последнее время таджикские музыканты, как и музыканты Узбекистана, заменяют трёхструнный гиджак четырёхструнным квинтового строя, который обладает значительно большими исполнительскими возможностями. В сольной концертной практике, самодеятельных ансамблях и в оркестре народных инструментов Таджикской филармонии применяют четырёхструнные гиджаки. В оркестре, кроме того, имеются усовершенствованные инструменты, в том числе басовый и контрабасовый гиджаки.`,
      kk: `Гиджак. Тәжікстанда екі, үш және төрт ішекті гиджактар қолданыста. Екі ішекті гиджактың құрылысы қарапайым. Аспап ұзындығы 700 мм ағаш кесегінен жасалады, бір жағы сәл үшкірленіп, аяқ қызметін атқарады, екінші жағы кеңейе келіп, екі құлақ бекітіледі. Ағашқа резонаторлық корпус қызметін атқаратын қаңылтыр құты кигізіледі. Ішектер түкті, кварта күйіне келтіріледі. Ысқышы садақ пішіндес, шайырланған жылқының қара қылы тағылады. Ойын барысында аспапты тік қалыпта ұстайды. Дыбысы әлсіз. Екі ішекті гиджак Тәжікстанның таулы аудандарында кең таралған, дегенмен қазіргі кезде жетілдірілген үш және төрт ішекті гиджактармен ығыстырылуда.

Тәжіктің үш ішекті гиджак аспабының құрылысы, ішектердің кварта күйі өзбектің үш ішекті гиджагымен ұқсас келеді. Ойын тәсілінде де еш айырмашылық жоқ. Аталған аспап түрі республиканың аңғарлы аудандары мен қалаларда кең таралған. Аспапта жеке және ансамбль құрамында басқа аспаптармен (най, дутор, чанг, дойра,т.б.) фиоритуралармен көркемделген әндер, би әуендерін, көп бөлімді вокалды-аспапты шығармалар – макомдар орындап, әншілерді сүйемелдейді.
Соңғы кездері тәжік музыканттары да өзбектер секілді үш ішекті аспап орнына орындаушылық мүмкіндігі жоғары квинта құрылымды төрт ішекті гиджакпен ауыстыруда. Жеке тәжірибеде, өз бетінше ұйымдасқан ансамбльдерде, Тәжікстан филармониясындағы халық аспаптар оркестрінде төрт ішекті гиджактар қолданылады. Оркестрде, сондай-ақ, бас және контрабас секілді жетілдірілген түрлері де пайдаланылады.`
    },
    images: ['/instruments/world/tajikistan/ghijak/1.jpg'],
    audio: '/audio/world/tajikistan/ghijak.mp3',
    country: 'tajikistan',
    countryName: countryNames.tajikistan,
    flag: countryFlags.tajikistan
  },
  {
    id: 'tajikistan_nai',
    name: { en: `Nai`, ru: `Най`, kk: `Nai` },
    description: {
      en: `Nai

The nai is a traditional Tajik transverse flute, constructed with essentially the same design and playing technique as the Uzbek nai, reflecting the shared musical heritage of Central Asia. This end-blown flute is typically crafted from reed, bamboo, or wood, and features multiple finger holes (usually 6-7) that allow the performer to create a full chromatic scale.

In Tajikistan, the nai is particularly widespread in the valley regions and urban centers, where it has long been integrated into both folk musical traditions and professional concert practice. The instrument occupies a position of similar importance in Tajik music as it does in neighboring Uzbekistan, serving as a primary melodic voice in traditional ensembles and as a virtuosic solo instrument.

The nai produces a warm, breathy tone with remarkable expressive capabilities. Skilled performers can create subtle pitch variations and ornamentations through breath control and partial covering of the finger holes, techniques that are essential to the maqam-based musical traditions of Central Asia. The instrument's ability to sustain long melodic phrases and execute rapid ornamental passages makes it ideal for expressing the nuances of Tajik classical music.

In traditional Tajik musical ensembles, the nai often performs alongside stringed instruments like the rubab, setor, and tanbur, as well as percussion instruments such as the doira. The flute's clear, penetrating tone allows it to cut through ensemble textures while maintaining its gentle, lyrical character. Nai players are highly respected in Tajik musical culture, and mastery of the instrument requires years of dedicated study and practice.

The repertoire of the nai encompasses both traditional folk melodies and sophisticated classical compositions based on Central Asian maqam systems. Whether performing contemplative solo pieces or energetic dance tunes, the nai remains an essential voice in Tajik musical expression, embodying centuries of musical tradition while continuing to evolve in contemporary contexts.`,
      ru: `Най

поперечная флейта точно такого же устройства, что и узбекский най. В Таджикистане пользуется распространением в долинных районах и городах. В народном музыкальном быту и в профессиональной концертной практике най занимает такое же место, как и в Узбекистане.`,
      kk: ``
    },
    images: ['/instruments/world/tajikistan/nai/1.png'],
    audio: '/audio/world/tajikistan/nai.mp3',
    country: 'tajikistan',
    countryName: countryNames.tajikistan,
    flag: countryFlags.tajikistan
  },
  {
    id: 'tajikistan_tavlyak',
    name: { en: `Tavlyak, tablaki`, ru: `Тавляк, таблаки – таджикский и узбекский ударный инструмент. Род литавры с керамическим (иногда точеным деревянным) корпусом (высота 350-400 мм). Широкая сторона затянута мембраной (диаметр 180-200 мм), узкая сторона`, kk: `Tavlyak` },
    description: {
      en: `Tavlyak, tablaki

Tajik and Uzbek percussion instrument. Rod of timpani with ceramic (sometimes chiseled wooden) body (height 350-400 mm). The wide side is tightened with a membrane (diameter 180-200 mm), the narrow side is a leg with a round through hole. When playing, the tavlyak is held horizontally on the left knee, with the foot slightly back. Sound is produced by striking or sliding the fingers of both hands across the membrane. Closer to the edge, the sound is high and clear, closer to the center, low and dull. Before the game, the membrane is heated.
Tavlyak is mainly an ensemble instrument. It is used in ensembles with a rubob, tanbur, chang, chang, nagora, etc., it is also used for solo accompaniment of dances.`,
      ru: `Тавляк, таблаки – таджикский и узбекский ударный инструмент. Род литавры с керамическим (иногда точеным деревянным) корпусом (высота 350-400 мм). Широкая сторона затянута мембраной (диаметр 180-200 мм), узкая сторона

ножка с круглым сквозным отверстием. При игре тавляке держат горизонтально на левом колене, ножкой слегка назад. Звук извлекают, ударяя или скользя пальцами обеих рук по мембране. Ближе к краю звучание высокое и звонкое, ближе к центру – низкое и глухое. Перед игрой мембрану нагревают.
Тавляк – главным образом ансамблевый инструмент. Применяется в ансамблях с рубобом, танбуром, чангом, нагорой и др., используется также для сольного сопровождения танцев.`,
      kk: ``
    },
    images: ['/instruments/world/tajikistan/tavlyak/1.jpg'],
    audio: '/audio/world/tajikistan/tavlyak.mp3',
    country: 'tajikistan',
    countryName: countryNames.tajikistan,
    flag: countryFlags.tajikistan
  },
  {
    id: 'tajikistan_tutek',
    name: { en: `Tutek`, ru: `Тутек, или тутэк  — духовой музыкальный инструмент флейтового типа таджиков, армянов, азербайджанов, горских евреев, распространённый с древних времён, главным образом, среди пастухов. Представляет собой трубку с 6-7-ю игровыми отверстиями. В Азербайджане разновидности тутека большого и малого размеров используются, преимущественно, в качестве солирующих инструментов в составах ансамблей и оркестров народных инструментов.`, kk: `Тутек` },
    description: {
      en: `Tutek is a wind musical instrument of the flute type of Tajiks, Armenians, Azerbaijanis, Mountain Jews, common since ancient times, mainly among shepherds. It is a trumpet with 6-7 sound holes. In Azerbaijan, varieties of large and small tuteks are used mainly as solo instruments in ensembles and orchestras of folk instruments.
To a different degree, close to the tutek in design and sound:
	•	in Tajikistan – nai-chuponi (shepherd's nai), surnai, philan.
	•	in Armenia – shvi.

It has a cylindrical trunk; the instrument is made of apricot, walnut, mulberry or from reed. On the trunk, which has a length of 280-300 mm and a diameter of 20 mm, 6-7 sound holes are drilled from the front side, and one hole from the back.
The sound is quiet, gentle in a low register, loud, whistling in high. Shepherds and drovers of oxen play mainly on the tutek: they perform (solo) songs, dances and instrumental plays, often virtuoso, richly decorated with melisms; used in ensembles. The scale of the instrument covers the range from the “si” of the small octave to the “do” of the third octave. A skilled performer can increase this range by several sounds.`,
      ru: `Тутек, или тутэк  — духовой музыкальный инструмент флейтового типа таджиков, армянов, азербайджанов, горских евреев, распространённый с древних времён, главным образом, среди пастухов. Представляет собой трубку с 6-7-ю игровыми отверстиями. В Азербайджане разновидности тутека большого и малого размеров используются, преимущественно, в качестве солирующих инструментов в составах ансамблей и оркестров народных инструментов.

В разной степени близки тутеку по конструкции и звучанию:
	•	в Таджикистане — най-чупони́ (пастуший най), сурнай, филан.
	•	в Армении — шви.

Имеет цилиндрический ствол, инструмент изготавливается из абрикоса, ореха, шелковицы (тутовое дерево) или из тростника. На стволе, имеющем в длину 280—300 мм, а в диаметре — 20 мм, с лицевой стороны просверливаются 6-7 отверстий, а с тыльной — одно.
Звучание тихое, нежное в низком регистре, громкое, свистящее — в высоком. На тутеке играют главным образом пастухи и погонщики волов: исполняют на нём (соло) песни, танцы и программные инструментальные пьесы, часто виртуозные, богато украшенные мелизмами; используется и в ансамблях. Звукоряд инструмента охватывает диапазон от «си» малой октавы до «до» третьей октавы. Умелый исполнитель может увеличить этот диапазон на несколько звуков.`,
      kk: `Тутек

тәжік, армян, әзірбайжан, тау еврейлерінде кең тараған флейта типтес үрмелі музыкалық аспап. Ертеректе бақташылар арасында танымал болған. Аспап 6-7 ойын саңылауы бар түтік пішіндес. Тутектің үлкен және кіші түрлері Әзірбайжанда халық аспаптар ансамблі мен оркестрлері құрамында жеке орындаушы аспап ретінде қолданылады. Тутекке құрылысы мен дыбысталуы бойынша түрлі дәрежеде ұқсас аспаптар:
	•	Тәжікстанда – най-чупони (шопандар найы), сурнай, филан.
	•	Арменияда – шви. 

Діңгегі цилиндр тәріздес, өрік, жаңғақ, тұт ағаштарынан немесе қамыстан жасалады. Ұзындығы 280-300 мм, диаметрі – 20 мм діңгектің беткі жағынан 6-7 ойын саңылауын, қарсы бетінен бір саңылау жасайды.
Дыбысы төменгі регистрде жай, жұмсақ, жоғарғы регистрде – қатты, шулы. Аспапта, негізінен, бақташылар мен өгіз айдаушылар ойнаған: жеке әндер, би, мелизмдермен бай көмкерілген күйлер орындаған, ансамбльдерде де қолданылады. Аспаптың дыбыс қатары кіші октаваның «си» нотасынан үшінші октаваның «до» нотасына дейінгі диапазонды қамтиды. Шебер орындаушы бұл дыбыс диапазонын тағы бірнеше дыбысқа ұлғайта алады.`
    },
    images: ['/instruments/world/tajikistan/tutek/1.jpg'],
    audio: '/audio/world/tajikistan/tutek.mp3',
    country: 'tajikistan',
    countryName: countryNames.tajikistan,
    flag: countryFlags.tajikistan
  },
  {
    id: 'thailand_khaen',
    name: { en: `KHAEN`, ru: `КАЭН`, kk: `КАЭН` },
    description: {
      en: `KHAEN

Khaen is a large labial organ from Southeast Asia – Laos, Burma and Thailand. The emergence of this musical instrument dates back to the 14th century.
It relates to aerophones. The tonal range of this instrument is about two octaves. This allows musicians to widely improvise when playing khaen, reproducing melody and chords at the same time. The size of this instrument is from 1 m to 2.5 m. The instrument is individual, it is made for the performer. There are no strict criteria for size. It is made of 16 bamboo tubes connected in two bundles of 8 pcs. Trumpets are in different lengths, the longer the trumpet, the higher the sound. Between each other, the trumpets are connected by a camera, in each trumpet there is a tongue that attaches to the inner wall. A hole is drilled in each trumpet. While closing the hole with finger, air passes through the tongue and produces a sound. One trumpet is filled with wax and used as a bourdon, that is, it provides a constant monotonous sound.`,
      ru: `КАЭН

Каэн – большой губной орган из юго-восточной Азии – Лаоса, Бирмы и Таиланда. Возникновение этого музыкального инструмента относят к 14 веку.  
Относится он к аэрофонам. Тональный диапазон этого инструмента около двух октав. Это позволяет музыкантам широко импровизировать при игре на каэне, воспроизводят мелодию и аккорды одновременно. Размер этого инструмента от 1 м и до 2.5 м. Инструмент индивидуальный, делается он под исполнителя. Строгих критериев для размера не существует. Инструмент делается из 16 бамбуковых трубок, связанных в два пучка по 8 шт. Трубки разной длины, чем длиннее трубка – тем выше звучание. Между собой трубки соединены камерой, в каждой трубке есть язычок, который присоединяется к внутренней стенке. В каждой трубке сверлят отверстие. Во время закрытия отверстия пальцем, воздух проходит по язычку и производит звучание. Одну трубку заливают воском и используют как бурдонную, то есть она обеспечивает постоянный монотонный звук.`,
      kk: `КАЭН

Каэн – Оңтүстік-шығыс Азия – Лаос, Бирма және Таиланд елдерінің үлкен ауыз органы. Аспап тарихы ХІV ғ. басталады. 
Аэрофондар қатарына жатады. Аспаптың диапазоны шамамен 2 октава. Бұл орындаушыларға каэн аспабында ойнау кезінде импровизациялауға мүмкіндік береді, аспап бірмезетте әуенді де, аккордтарды да орындайды. Аспаптың өлшемі 1-2,5 м аралығында. Аспап әр орындаушыға жеке жасалады. Өлшемге байланысты қандай да бір шарт жоқ. Аспап 2 байламға 8 түтіктен байланған 16 бамбук түтікшеден тұрады. Түтіктердің ұзындығы әр түрлі, түтік неғұрлым ұзын болса, оның дыбысы соғұрлым жоғары болады. Олар өзара камерамен біріктірілген, әр түтікте ішкі қабырғаға бекитін тілше болады. Әр түтіктен саңылау жасалады. Ойын барысында саңылауды саусақпен басқанда ауа тілше арқылы өтіп, дыбыс алынады. Бір түтікке балауыз құйып, оны бурдонды ретінде пайдаланады, яғни ол тұрақты бірқалыпты дыбысты қамтамасыз етеді.`
    },
    images: ['/instruments/world/thailand/khaen/1.jpg'],
    audio: '/audio/world/thailand/khaen.mp3',
    country: 'thailand',
    countryName: countryNames.thailand,
    flag: countryFlags.thailand
  },
  {
    id: 'thailand_sau',
    name: { en: `Sau`, ru: `Сау`, kk: `Сау немесе ку сау сам сай` },
    description: {
      en: `Sau

The sau, also known as "ku sau sam sai" or "saw sam sai," is one of the oldest and most beloved traditional Thai stringed bowed instruments. This distinctive three-stringed fiddle belongs to the saw family of Thai musical instruments, which includes various bowed lutes used throughout Southeast Asia. The name "sau" itself refers to the fiddle, while "sam sai" indicates three strings.

The construction of the sau reflects ingenious use of natural materials. The resonator is crafted from half of a coconut shell, which is then covered with animal skin (typically snake, lizard, or thin buffalo hide) to create the sound board. This natural resonator produces a warm, somewhat nasal tone that is immediately recognizable in Thai music. The neck extends from the coconut body and is typically made from hardwood, with three silk or nylon strings stretched along its length.

Unlike Western violins, the sau is played in an upright position, resting on the player's lap or held against the body. The bow passes between the strings, and the player controls the tension of the bow hair with their fingers while playing, a technique that allows for nuanced dynamic control. The three strings are not stopped by pressing them against a fingerboard; instead, the performer lightly touches the strings from the side, creating a distinctive sliding, vocal-like quality to the melodies.

The saw sam sai has played a central role in Thai classical music for centuries, particularly in the Mahori ensemble (a traditional Thai chamber music group) and in theatrical performances. Its expressive, almost vocal quality makes it ideal for conveying emotion in dramatic contexts. The instrument is commonly used to accompany classical Thai poetry recitations and traditional dance performances.

Different versions of the sau exist, varying in the shape of the body and the number of strings. These include the saw duang (with a cylindrical body), saw u (with a coconut shell resonator and two strings), and the three-stringed saw sam sai. Each variant has its specific role in different musical contexts, but all share the characteristic warm, singing tone that has made the saw family central to Thai musical identity for generations.`,
      ru: `Сау

Среди традиционных тайских музыкальных инструментов выделяют: духовые, струнные и ударные. Самые старые и популярные струнно-смычковые инструменты – «сау» или «ку сау сам сай». Их изготавливают из половинок кокосового ореха и различаются между собой формой корпуса и количеством струн.`,
      kk: `Сау немесе ку сау сам сай

Тай халқының ежелгі ішекті-ыспалы аспаптардың бірі. Аспап кокос жаңғағының жартысынан дайындалып, корпус формасы мен ішектер саны бойынша ажыратылады.`
    },
    images: ['/instruments/world/thailand/sau/1.jpg'],
    audio: '/audio/world/thailand/sau.mp3',
    country: 'thailand',
    countryName: countryNames.thailand,
    flag: countryFlags.thailand
  },
  {
    id: 'thailand_wot',
    name: { en: `WOT`, ru: `ВОТ`, kk: `Wot` },
    description: {
      en: `WOT

Wot – is a circular flute used in the traditional music of Laos and the Isan region of northeastern Thailand. It is often a major component in Pong-Lang ensembles.
The wot, a small compact instrument, inexpensive and beautifully shaped, became one of the musical instruments in Thailand a few decades ago, according to Songsak Pratumsin (Lecturer, College of Dramatic Arts) who invented in 1968.
The wot is typically made of bamboo or Ku (a kind of wood) trunk. In general, the sound is generated by blowing. High or low pitches of volume depend on the diameter and the length of wot or, more specifically, it depends on the volume capacity of the wind that goes through the wot. 
The standard wot is composed of 13 pieces of wood and can make four notes that can play main music or just a few strokes.`,
      ru: `ВОТ

Вот – это круговая свирель, используемая в традиционной музыке Лаоса и региона Исан на северо-востоке Таиланда. Он часто является главным компонентом в Pong-Lang ансамблях.
Вот, небольшой компактный инструмент, недорогой и красиво оформленный, стал одним из музыкальных инструментов в Таиланде несколько десятилетий назад, благодаря Сонгсак Пратумсин (преподаватель колледжа драматических искусств), который изобрел в 1968 году.
Вот обычно изготавливается из бамбука или ствола Ку (разновидность дерева). В общем, звук генерируется путем продувки. Высокий или низкий звуки зависят от диаметра и длины вот или, более конкретно, он зависит от объемной мощности воздуха, который проходит через вот. 
Стандартный вот состоит из 13 кусков дерева и может играть четыре ноты, которые могут воспроизводить основную музыку или всего несколько штрихов.`,
      kk: ``
    },
    images: ['/instruments/world/thailand/wot/1.jpg'],
    audio: '/audio/world/thailand/wot.mp3',
    country: 'thailand',
    countryName: countryNames.thailand,
    flag: countryFlags.thailand
  },
  {
    id: 'ukraine_bandura',
    name: { en: `Bandura`, ru: `Бандура`, kk: `Бандура` },
    description: {
      en: `Bandura is a Ukrainian folk stringed-plucked musical instrument. It has an oval body and a short neck. The strings (on old instruments – 12-25, on modern ones – 53-70) are partly stretched over the fretboard (the so-called basses, longer, low-pitched), and some are attached to the deck (the so-called strumming, shorter, high-pitched).
The case is shallow, wooden, in the old days, hollowed, round, oval, often pear-shaped. The deck is flat with a round or star-shaped resonant hole, in its upper right side there is a small protrusion for pegs, called a brace. A short neck without frets ends with a small head with a curl or carved ornament. In the old days, the body, along with the neck and head, was made from one whole piece of wood (willow, alder or maple).
The bandura is distinguished by its full sound and a bright characteristic timbre. The structure of the bandura is mixed, in the lower case a quarter-second; in the upper case it is mainly diatonic, in modern instruments – chromatic. The bandura is played by pinching the strings with fingers with or without special “nails”.
The word bandura is borrowed through polish “bandura”, from ital. “pandūra”, which ascends through the lat. “pandūra” to Greek. πανδοῦρα “kifara”. But there is an opinion that the name of the bandura comes from the Latin (pandura) through the Old Polish (Barduny – “lute”).
There are several theories regarding the origin of Ukrainian bandura. Probably its origin is connected with the kobza, and not with the harp. The harp had a small number of strings (4-5), which were played with “rattling”. This way of playing is inherent in the balalaika. Nevertheless, already around the 15th century in Russia there were helmet-shaped, they are also psalter-like gusli, which had a large number of strings, from 14 to 20, this is indicated by the external similarity and name of the psalteric psalterium musical instrument with the psalterium (lat. Psalterium). The helmet-shaped gusli appeared in Russia in the XIV century. They could not become the foremother of the bandura of Western and South-Western Russia. By the way, no sample of the ancient Russian gusli was found. After unification with the Principality of Lithuania (1321), the orientation of the lands of Western and South-Western Russia was directed towards Western culture. Cultural assimilation with Russia began at the end of the 17th century, when the multi-stringed Ukrainian musical instrument “bandura” was already formed and existed (1740).
Today, concert bandura-players in Ukraine use Kiev-type instruments, mostly, the production of the Chernigov or Lviv music factories. These instruments are designed by I.Sklyar and V.Gerasimenko.
There were 3 schools for playing the bandura – Chernigov, Kharkov and Poltava. Representatives of each of them held the instrument on their knees in a special way (with a greater or lesser turn and tilt to the performer’s body), applied various ways of pinching the pristine and riots, and partially varied the tuning of the strings. Currently, they use almost exclusively the so-called the Kiev method of playing, based on the method of the Chernigov school: the bandura are kept in a slightly inclined position so that the plane of the deck is perpendicular to the body, riots are pinched with the left hand, and the riot is pinched with the right hand. Bandura is mainly used to accompany singing.`,
      ru: `Бандура

украинский народный струнно-щипковый музыкальный инструмент. Имеет овальный корпус и короткий гриф. Струны (на старых инструментах – 12-25, на современных – 53-70) частью натягиваются над грифом (так называемые басы, более длинные, низко звучащие), частью же прикрепляются к деке (так называемые приструнки, более короткие, звучащие высоко).
Корпус неглубокий, деревянный, в старину долблёный, круглой, овальной, чаще грушевидной формы. Дека плоская с круглым или звездообразным резонаторным отверстием, в верхней правой её стороне имеется небольшой выступ для колков, называемый брямкой. Короткая шейка без ладов заканчивается небольшой головкой с завитком или резным украшением. В старину корпус вместе с шейкой и головкой изготовляли из одного цельного куска дерева (ивы, ольхи или клёна).
Бандура отличается полнотой звучания и ярким характерным тембром. Строй бандуры смешанный, в нижнем регистре квартово-секундовый, в верхнем преимущественно диатонический, в современных инструментах — хроматический. Играют на бандуре, защипывая струны пальцами с надетыми специальными «ногтями» или без них.
Слово бандура заимствовано через польск. bandura из итал. pandūra, которое восходит через лат. pandūra к греч.πανδοῦρα «кифара». Но есть мнение, что происходит название бандуры — из латинского (пандура) через старопольский (Barduny — 'лютня').
Существует несколько теорий относительно происхождения украинской бандуры. Вероятно, её происхождение связано с кобзой, а не с гуслями. Гусли имели небольшое количество струн (4-5), на которых играли «бряцаньем». Такой способ игры присущ балалайке. Тем не менее, уже, примерно, в пятнадцатом веке на Руси бытовали шлемовидные, они же псалтериевидные гусли, которые имели большое количество струн, от 14 и до 20 на это указывает внешнее сходство и название гуслей-псалтырей с музыкальным инструментом псалтерий (лат. psalterium). Шлемовидные гусли появились на Руси в XIV веке. Они никак не могли стать праматерью бандуры Западной и Юго-Западной Руси. Кстати, так и не найден образец самих древнерусских гуслей. После объединения с Литовским княжеством (1321 г.) ориентация земель Западной и Юго-Западной Руси была направлена на западную культуру. Культурная ассимиляция с Россией началась с конца XVII в., когда многострунный украинский музыкальный инструмент «бандура» уже сформировался и бытовал (1740 г.).
В наши дни концертные бандуристы в Украине используют инструменты киевского типа. Преимущественно,  производства Черниговской или Львовской музыкальной фабрики. Эти инструменты сделаны по конструкции И. Скляра и В. Герасименко.
Существовали 3 школы игры на бандуре – черниговская, харьковская и полтавская. Представители каждой из них по-особому держали инструмент на коленях (с большим или меньшим поворотом и наклоном к корпусу исполнителя), применяли различные способы защипывания приструнков и бунтов и частично варьировали настройку струн. В настоящее время пользуются почти исключительно т. н. киевским методом игры, в основе которого – метод черниговской школы: бандуру держат в слегка наклонном положении, так чтобы плоскость деки была перпендикулярна корпусу, левой рукой защипывают бунты, правой - приструнки. Бандура применяется главным образом для сопровождения пению.`,
      kk: `Бандура

Украина халқының ішекті-шертпелі музыкалық аспабы. Аспаптың корпусы сопақша, мойны қысқа. Ішектердің жартысы (ескі аспапта – 12-25, заманауида – 53-70) мойынға (ұзын, дыбысы төмен бас ішектер), қалған жартысы декаға (қысқа, дыбысы қатты ішектер) бекітіледі.
Ағаштан ойып жасалған корпусы таяз, пішіні дөңгелек, көп жағдайда алмұрт пішіндес. Тегіс декаға дөңгелек немесе жұлдыз тәрізді резонатолық ойық жасалған, жоғары оң жақ шетінде брямка аталатын құлақтарға арналған шығыңқы тұсы болады. Пернесіз қысқа мойны бұрама немесе оюмен безендірілген баспен аяқталады. Бұрында аспаптың корпусын, мойны мен басын тұтас ағаштан жасайтын (тал, қандыағаш, үйеңкі).
Бандура дыбысының толықтығы және жарқын тембрімен ерекшеленеді. Аспаптың құрылымы аралас, төменгі регистрде кварта-секунда, жоғары регистрде диатоникалық, бүгінгі аспапта – хроматикалық. Бандурада саусаққа арнайы «тырнақ» киіп немесе олсыз ішектерді шертіп ойнайды. 
Бандура сөзі поляктың bandura сөзі арқылы италияның pandūra-сынан, ол бұл өз кезегінде латын арқылы гректің «кифара» сөзінен туындаған. Бірақ, аспаптың атауы көне поляк сөзі (Barduny – лютня)арқылы латынның пандура атауынан бастау алады деген болжам бар.
Украин аспабының шығу тарихы туралы бірнеше теория бар. Оның қалыптасуы кобза аспабымен байланысты болуы мүмкін. Гусли аспабында ішектер аз болып (4-5), «салдырлау» әдісімен ойнаған. Мұндай тәсіл балалайкаға тән болып табылады. Дегенмен де, ХV ғ. орыс жерінде 14-20 ішектері болған дулыға тәрізді (псалтерий тәрізді гусли деп те аталды) гусли аспабы танымал болған. Дулыға тәрізді гусли Орыс жеріне алғаш рет ХІV ғ. келген. Батыс және Оңтүстік-батыс Русь жерінде бұл аспап бандураның арғы тегі бола алмайды. Литва князьдігімен біріккен соң (1321 ж.) Батыс және Оңтүстік-батыс Русі жері батыс мәдениетіне бағытталды. Ресеймен мәдени ассимиляция ХVІІ ғ. соңында, көпішекті «бандура» украин музыкалық аспабы қалыптасып, қолданыста болғанда басталды (1740 ж.). 
Бүгінде Украинаның орындаушылары киев үлгісіндегі аспаптарды қолданады. Негізінен, Чернигов немесе Львов музыкалық фабрикасында жасалғандарына сұраныс жоғары. Бұл аспаптар И. Скляр мен В. Герасимовтың сызбалары бойынша жасалған.
Бандурада ойнаудың 3 мектебі болды – Чернигов, Харьков, Полтава. Әр мектептің өкілдері аспапты ерекше ұстап отырды (аспапты бұру, орындаушы корпусына қарай еңкейту), түрлі әдістер қолданды, ішектер күйін сәл құбылтты. Соңғы кездері негізінде Чернигов мектебінің әдістері жатқан Киевтік ойнау әдісі кең қолданылады: дека корпусқа перпендикуляр болатындай етіп, аспапты сәл еңіс ұстап, сол қолмен бунтты, оң қомен қосымша ішектерді шертті. Бандура аспабы көп жағдайда әнді сүйемелдеу үшін пайдаланылатын.`
    },
    images: ['/instruments/world/ukraine/bandura/1.jpg'],
    audio: '/audio/world/ukraine/bandura.mp3',
    country: 'ukraine',
    countryName: countryNames.ukraine,
    flag: countryFlags.ukraine
  },
  {
    id: 'ukraine_kuvitsy',
    name: { en: `KUVITSY`, ru: `КУВИЦЫ`, kk: `КУВИЦЫ` },
    description: {
      en: `KUVITSY

Kugikly or kuvitsy – Russian and Ukrainian multi-barrel flute. Their tubes do not hold together. It is made from reed stalks (Kursk kugikly), umbrella or elderberry bark (Bryansk and Kaluga kugikly).
Although the area of distribution of kugikl in Russia is not large, it occupies a very characteristic position, covering one of the most ancient regions of the East Slavic settlement, located within the modern Bryansk, Kursk, Kaluga, Smolensk, Tver and Belgorod regions. They are known as “kuvitsy” in Ukraine (in the Chernigov region).
The instrument is traditionally played by women in an ensemble of 3-4 performers: one or two play the tune and at the same time make a sound in their voices similar to the sound of trumpets, the rest play this melody in a syncopated rhythm. They play like this: bring the upper ends of the tubes to the mouth and move them (or head) from side to side, blow to the edges of the slices, extracting short but rapidly alternating sounds.
The instrument is a set of 2-5 tubes of various lengths of approximately the same diameter (the largest can reach 16-18 cm). Tubes are made from mature dry stalks of kugi (swamp reeds; Kursk tradition) with a hollow stem, or from other umbrella plants with a hollow stem. In Ukraine, tubes were made from elderberry, viburnum or hazel. The upper open ends are located at the same level, the lower is closed by the trunk node. Its tubes are not fastened together, which allows them to be changed depending on the required system. Each tube has its own name: buzz, boom, tertiary (or average), quarter, mizyutka. Names may vary, depending on the place of use.`,
      ru: `КУВИЦЫ

Кугиклы или кувицы (кувиклы, кувички, цевница, дудки, тростянки, на украинском кувиця, кувичка, свиріль) – русская и украинская многоствольная флейта. Трубки их не скрепляют между собой. Изготавливается из стеблей тростника (курские кугиклы), зонтичные или коры бузины (брянские и калужские кугиклы).
Область распространения кугикл на Руси хотя и не велика, однако занимает очень характерное положение, охватывая один из наиболее древних районов восточно-славянского заселения, расположенный в пределах современных Брянской, Курской, Калужской, Смоленской, Тверской и Белгородской областей. Известны как «кувицы» на Украине (в Черниговской облати). 
На инструменте традиционно играют женщины в ансамбле из 3-4 исполнительниц: одна-две исполняют наигрыш и одновременно с ним издают голосом звуки, похожие на звук трубочек, остальные подыгрывают этой мелодии в синкопированном ритме. Играют так: подносят верхние концы трубочек ко рту и двигая ими (или головой) из стороны в сторону, дуют на края срезов, извлекая короткие, но быстро чередующиеся звуки.
Инструмент представляет собой набор из 2-5 трубок различной длины примерно одного диаметра (самая большая может достигать 16-18 см). Трубки изготавливают из зрелых сухих стеблей куги (болотного камыша; курская традиция) с полым стеблем, либо из других зонтичных растений с полым стеблем. На Украине трубки изготавливали из бузины, калины или лещины. Верхние открытые концы расположены на одном уровне, нижний закрыт узлом ствола. Трубки его не скрепляются между собой, что позволяет их менять в зависимости от требуемого строя. Каждая трубочка имеет свое название: гудень, подгудка, третяка (или средняя), четвертака, мизютка. Названия могут быть различными, в зависимости от места использования.`,
      kk: `КУВИЦЫ

Кугиклы немесе кувицы (кувиклы, кувички, цевница, дудки, тростянки, украин тілінде кувиця, кувичка, свиріль) – орыс және украин халықтарының көптүтікті флейтасы. Аспаптың түтіктері өзара бекітілмейді. Қамыс сабағынан (Курск), шатырлы өсімдіктерден немесе аюбадам қабығынан (Брянск пен Калужск) жасалады.
Русь жерінде аспаптың таралу аясы ауқымды болмаса да, бүгінгі Брянск, Курск, Калужск, Смоленск, Тверь және Белгород облыстарының шекарасында орналасқан шығыс славян халықтарының ескі қоныстарын қамтыды. Аталған аспап Украинаның Чернигов облысында «кувицы» атауымен белгілі. 
Кувицы аспабында, әдетте, 3-4 орындаушы әйелдер ансамбль құрып ойнайды: 1-2 орындаушы әуенмен қатар өздері түтікшеге ұқсас дыбыстар орындайды, синкопа ырғағымен ойнайды. Ойнау тәсілі: түтіктің жоғары ұштарын ауызға тақап, кесінді шетіне үрлегенде аспапты (немесе басты) жан-жаққа қозғайды. Осылайша, қысқа, бірақ тез ауысатын дыбыстар алынады.
Аспап диаметрі бірдей, ұзындығы әр түрлі 2-5 түтіктен құралады (ең ұзыны 16-18 см болуы мүмкін). Түтіктер жекеннің (қамыс, Курск дәстүрі) немесе іші қуыс басқа да шатырлы өсімдіктердің кепкен сабақтарынан жасалады. Украина жерінде оны аюбадамнан, бүргеннен немесе ормандаңғақтан жасаған. Ашық жоғарғы ұштары бір деңгейде орналасады, төменгі жағы сабақ түйінімен жабылады. Түтіктер өзара бекітілмегендіктен, құрылым қажеттілігіне қарай оларды ауыстыруға мүмкіндік береді. Аспаптың әр түтігі өзіндік атауға ие: гудень, подгудка, третяка (немесе ортаңғы), четвертака, мизютка. Оның атауы аспаптың қолданылу аймағына қарай өзгеруі мүмкін.`
    },
    images: ['/instruments/world/ukraine/kuvitsy/1.jpg'],
    audio: '/audio/world/ukraine/kuvitsy.mp3',
    country: 'ukraine',
    countryName: countryNames.ukraine,
    flag: countryFlags.ukraine
  },
  {
    id: 'vietnam_dannhi',
    name: { en: `Dan Nhi`, ru: `Дан нхи популярен среди нескольких этнических групп во Вьетнаме. Он также упоминается как Дан Ко в южных провинциях Вьетнама.`, kk: `Дан нхи Вьетнамдағы бірқатар этникалық топтар арасында танымал. Сондай-ақ, аспап Вьетнамның оңтүстік аймақтарында Дан Ко атауымен де кездеседі.` },
    description: {
      en: `Dan Nhi is popular among several ethnic groups in Vietnam. It is also referred to as Dan Koh in the southern provinces of Vietnam.
Dan Nhi is a kind of vertical violin with two strings, located in front of the player, like a small cello, and playing with a bow. Strings used to be made of silk, but today artisans prefer metal. Frets are made of horsehair, and the deck is covered with snake skin. Bows were made from bamboo or wood, and horse hair was pulled.
It is said that the sound of dan nhi mimics the sound of the singer. It can be played either in short staccato notes or in longer chords, and they can be played slowly or quickly to match any song.
There are three holding positions: the instrument is pressed against the musician's hip when he or she is walking. A wooden resonance case is held between the knees of the musician if he is sitting on a stool. A cylinder is held between the legs of a musician if he sits on the ground.
A two-stringed instrument with its melodic sounds can express the subtle mood of a person’s soul. Due to its diverse uses, dan nhi is inconspicuous in traditional music orchestras.`,
      ru: `Дан нхи популярен среди нескольких этнических групп во Вьетнаме. Он также упоминается как Дан Ко в южных провинциях Вьетнама.

Дан нхи – это своего рода вертикальная скрипка с двумя струнами, расположенная перед игроком, как маленькая виолончель, и играющая в с луком. Раньше струны делались из шёлка, но сегодня ремесленники предпочитают металл. Лады сделаны из конских волос, а дека покрыта змеиной кожей. Лук делали из бамбука или дерева, и натягивали конские волосы. 
Говорят, что звук дан нхи подражает звуку певца. Его можно воспроизводить либо в коротких нотах стаккато, либо в более длинных аккордах, и их можно играть медленно или быстро, чтобы соответствовать любой композиции.
Есть три удерживающих позиций: инструмент прижимается к бедру музыканта, когда он или она идёт. Деревянный резонансный ящик удерживается между коленями музыканта, если он сидит на табурете. Цилиндр удерживается между ног музыканта, если он сидит на земле. 
Двухструнная скрипка с её мелодичными звуками может выразить тонкое настроение души человека. Благодаря своему разнообразному использованию, дан нхи неприметный в традиционных музыкальных оркестрах.`,
      kk: `Дан нхи Вьетнамдағы бірқатар этникалық топтар арасында танымал. Сондай-ақ, аспап Вьетнамның оңтүстік аймақтарында Дан Ко атауымен де кездеседі.

Дан нхи – екі ішекті ыспалы, тік скрипка тәріздес аспап. Ертеректе дан нхи ішектері жібектен жасалса, заманауи шеберлер аспап жасауда металды таңдайды. Пернелер жылқы қылынан, декасы жылан терісімен қапталған. Қияғын бамбуктан немесе ағаштан жасап, жылқы қылын тартқан.
Аспап дыбысы адамға ұқсас деп сипатталады. Оны стаккато қысқа ноталарында немесе ұзақ аккордтарда дыбыстандыруға, асықпай немесе жылдам қарқынмен кез-келген шығарманың ырғағына сәйкес орындауға болады. 
Ойын барысында аспапты ұстаудың үш нұсқасы бар: орындаушы қозғалыста болғанда аспапты оның беліне бекітеді. Музыкант орындықта отырса, резонаторлық ағаш жәшік екі тізенің арасына орналасады. Егер музыкант жерде отырса, онда цилиндрді аяқтардың арасына бекітіп ұстайды.
Үні әсем екі ішекті бұл аспап адамның нәзік жанын түсіндіре алады. Аспаптың қолданылу аясының кеңдігі арқасында, бүгінде дан нхи дәстүрлі музыкалық оркестрлерде елеусіз болып қалады.`
    },
    images: ['/instruments/world/vietnam/dannhi/1.png'],
    audio: '/audio/world/vietnam/dannhi.mp3',
    country: 'vietnam',
    countryName: countryNames.vietnam,
    flag: countryFlags.vietnam
  },
];
