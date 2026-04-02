export interface Instrument {
  id: string;
  name: { en: string; ru: string; kk: string };
  description: { en: string; ru: string; kk: string };
  images: string[];
  category: 'stringed' | 'percussion' | 'wind' | 'noisemaker' | 'reed';
}

export const kazakhInstruments: Instrument[] = [
  {
    id: 'dombra',
    name: {
      en: 'Dombra',
      ru: 'Домбра',
      kk: 'Домбыра'
    },
    description: {
      en: `Dombra

Dombra is an outstanding musical instrument among all instruments of the Kazakh people.
Dombra is a favorite instrument of all the people, a widespread instrument with a rich history. In the history of the nation, dombra shared all the grief and sorrows, happiness in half with the people, was a consolation in difficult times. Dombra is the most ancient type of string instruments.
In the XIX century dombra was the most common instrument in the life of the people.
The instrument consists of several parts. These are: the head (also called the palm), pegs, frets, neck, body, deck, nut (shaitan tiek, basic tiek, tabaldyryk tiek) and strings. Each component of the instrument has its own name. For example, the dombra has three nuts, the first on which the strings are fastened and is located below the case, is called “okshe tiek” (or “kepil”, “tuime”). The second is the main nut, mounted on the deck and shifted in different directions. The third – “upper nut” is located between the neck and pegs. 
Types of a dombra. Kazakh dombra have long been made of solid wood. Previously, the technique of manufacturing and the shape of the instrument were different. This is noticeable in instruments from different regions of the country. Dombra was modified and improved depending on the traditions, performing schools and techniques of the musician, the skill of the manufacturer. Dombra is a two-, rarely three-stringed. Vintage samples of the instrument were with a rounded body. Proof of this is the dombra of the Turkic period, found on Altai Mountain with two strings and nine frets. This type of instrument is found among the Turkic-speaking peoples of Altai, in the west and east of Kazakhstan, Turkmen, Uzbeks (Sukhandariya), Karakalpak, Nogai. The Kazakh people have two systems for the execution of kui:
1. Tokpe kui (Western region of Kazakhstan);
2. Shertpe kui (Eastern region of Kazakhstan).
In this regard, two types of dombra are spread out. The drop-shaped form is widely used in the West Kazakhstan, in Turkmenistan, Karakalpakstan, Uzbekistan, Afghanistan, the shovel-shaped form in Altai-Tarbagatai, Zhetysu and Saryarka, also in the Karatau region.
The main difference between the dombra in the style of the west is that the body is larger, the neck is thinner and longer, and on the instruments of the eastern region, the neck is wider and shorter. The dombra of Zhetysu is similar to the Kyrgyz komuz, the Mangystau dombra to Turkmen dutar, the East Kazakhstan dombra to Altai topshur. Both types of instrument were made in connection with the features of the playing, the quality of sound reproduction and musical needs.

Legend about the dombra
It was a long time ago. A very long time ago ... Even when the dombra was four-stringed.
The great and cruel Khan (King) Temujin, known in the history of the ancient world as Genghis Khan, conquered and united many Turkic peoples, lived in the world. He had an older son from first wife Borte, named Jochi. Jochi khan also became a great commander who participated, along with his father, in the conquests of Central Asia.
Genghis Khan was a cruel ruler, whose anger was feared not only by enemies, but also by subordinates. Then the life of the nomads consisted in the conquest of foreign lands, expanding the territorial borders of the Mughal steppe state (as the Mongols were called before). Between the wars, formidable steppes engaged in cattle breeding and hunting. The children of Genghis Khan also liked to hunt wild animals.
Once, his beloved son – Jochi did not return from the hunt and the khan sent messengers to the steppe in order to find a son or bring news of his fate.
In those years, the Turks, including the Mongols, had a law: to reward generously for the good «red» news, and severely punish for bad «black» news.
Upon learning of the death of a young khan, the messengers were afraid of the anger of a formidable father and did not return. Genghis Khan rushed about in a fit of rage, demanding to bring him at least some news about the fate of the heir. But everything was in vain. The messengers were afraid of cruel execution and did not dare to reveal, to the inconsolable father, the truth.
And then the old akyn (poet) came to the khan. He lived a long life and was not afraid of death. Bowing to the lord, he said: «Oh, great khan, your justice has no limits. Listen to my dombra and you will learn about the fate of your son».
And a sad tale poured over how the young khan Jochi was hunting wild kulans, shooting one of them. But the wounded kulan was furious and, having kicked the hunter, struck him to death...
For a long time sang dombra, talking about an unsuccessful hunt, for a long time tears flowed from the cruel ruler...
And then the khan ordered to execute the dombra. And they poured hot lead on it from a bucket.
Moaned the dombra, its strings rang for the last time. And two of the four strings could not bear the pain... burst.
Since then, the dombra has only two strings left, but it still sings.
... many legends are about dombra and this is one of them.`,
      ru: `Домбра 

Домбра – выдающийся музыкальный инструмент среди всех инструментов казахского народа.
Домбра – любимый всем народом, широко распространённый и с богатой историей инструмент. В истории нации домбра делила все горести и печали, счастье пополам с народом, был утешением в трудные времена. Домбра – самый древний вид струнных инструментов.
В ХIX в. домбра была самым распространённым инструментом в быту народа.
Инструмент состоит из нескольких частей. Это: голова (также называют ладонь), колки, лады, гриф, корпус, дека, порожек (шайтан тиек, основной тиек, табалдырык тиек) и струны. Для каждой составляющей инструмента присуще свое название. Например, у домбры есть три порожка, первый, на который закрепляют струны и находится снизу корпуса, называется «окше тиек» (или «кепил», «туйме»). Второй – основной порожек, установленный на деке и сдвигаемый в разные стороны. Третий – «верхний порожек» находится между грифом и колками. 
Виды домбры. Казахскую домбру издавна делали из цельного дерева. Раньше техника изготовления и формы инструмента были другими. Это заметно по инструментам с разных регионов страны. Домбра видоизменялась и совершенствовалась в зависимости от традиций, исполнительских школ и техники музыканта, мастерству изготовителя. Домбра бывает двух-, реже трёхструнной. Старинные образцы инструмента были с округлым корпусом. Доказательством этому служит домбра тюркского периода, найденная на горе Алтай с двумя струнами и девятью ладами. Этот вид инструмента встречается у тюркоязычных народов Алтая, на западе и востоке Казахстана, туркмен, узбеков (Сухандария), каракалпаков, ногайцев. У казахского народа существует две системы исполнения кюев:
	•	Токпе кюй (Западный регион Казахстана);
	•	Шертпе кюй (Восточный регион Казахстана).
В связи с этим, распространено два вида домбры. Каплевидная форма – широко применяется на Западе Казахстана, в Туркменистане, Каракалпакстане, Узбекистане, Афганистане, совкообразная форма – на Алтае-Тарбагатае, Жетысу и Сарыарка, также в Каратауском регионе.
Главное отличие домбры в стиле запада – корпус больше, гриф тоньше и длиннее, а у инструментов восточного региона гриф шире и короче. Домбра Жетысу похоже на кыргызский комуз, Мангистауская домбра на туркменский дутар, Восточно-Казахстанкская домбра на алтайский топшур. Оба вида инструмента делали в связи с особенностями игры, качеством воспроизведения звука и музыкальной нужды.

Легенда о домбре
Давно это было. Очень давно… Еще, когда домбыра была четырехструнной.
Жил на свете великий и жестокий хан Темучжин, известный в истории древнего мира как Чингисхан, завоевавший и объединивший многие тюркские народы. У него был старший сын от первой жены Бортэ  по имени Джучи.  Джучи-хан тоже стал великим полководцем, участвовавшим, вместе со своим отцом, в завоеваниях Средней Азии. 
Чингисхан был жестоким правителем, гнева которого боялись не только враги, но и подчиненные. Тогда жизнь кочевников заключалась в завоеваниях чужих земель, расширявших территориальные границы степного государства моголов (так раньше назывались монголы). Между войнами грозные степняки занимались скотоводством и охотой. Любили охотиться на диких зверей и дети Чингисхана.
Однажды с охоты не вернулся его любимый сын - Джучи и хан послал в степь гонцов с целью найти сына или принести весть о его судьбе.
Надо сказать, что в те годы у тюрков, в том числе и монголов, существовал закон: за хорошую «красную» весть щедро награждать, а за плохую «черную» - жестоко наказывать.
Узнав о смерти молодого хана, гонцы испугались гнева грозного отца и не вернулись. Чингисхан метался в припадке ярости, требуя принести ему хоть какую-нибудь весточку о судьбе наследника. Но все было напрасно. Подданные боялись жестокой казни и не решались открыть, неутешному отцу, правды.
И тогда пришел к хану старый акын. Он прожил долгую жизнь и не боялся смерти. Поклонившись повелителю мира в пояс, он сказал: «О, великий хан, справедливость твоя не имеет границ. Слушай мою домбыру и ты узнаешь о судьбе своего сына».
И полилась печальная повесть о том, как охотился на диких куланов молодой хан Джучи, подстрелив одного из них. Но раненый кулан был разъярен и, ударив ногой охотника, поразил его насмерть...
Долго еще пела домбыра, рассказывая о неудачной охоте, долго текли слезы у жестокого властелина…
И повелел тогда старый хан казнить домбыру. И плеснули на нее из ковша раскаленный свинец.
Застонала домбыра, в последний раз прозвенели ее струны. И две из четырех струн не выдержав боли,… лопнули.
С той поры у домбыры осталось только две струны, но она по-прежнему поет.
…много легенд сложено о домбыре и это одна из них.`,
      kk: `Домбыра 

Қазақ халқының музыкалық аспатарының ішінде шоқтығы биік, ерекшелігімен дара көрінетін аспабы – домбыра.
Домбыра – ертеден келе жатқан қазақ халқының ең сүйікті, ел арасына кең тараған, түрлі шежіреге бай, музыкалық аспабы. Ол ұлттың тарихында қарапайым халықтың қуанышы мен қайғы-қасіретін тең бөлісіп, қазақтың басын торлаған ауыр кезеңдерде жұбаныш бола білген алып та ұлы аспап. Домбыра – ішекті аспаптардың ең көне түрі.
ХІХ ғасырда қазақ халқының тұрмысында анағұрлым кең тараған музыкалық аспап екі ішекті домбыра болатын.
Домбыра – екі ішекті шертпелі аспап, бірнеше бөліктен тұрады. Олар: басы (алақан деп те аталады) құлақтары, пернелер, мойын, шанақ, бетқақпақ, тиек (шайтан тиек, негізгі тиек, табалдырық тиек) және ішектер. Домбыраның бөліктеріне келетін болсақ, бұлардың да өзіне тән жеке атаулары болған. Мәселен, домбырады үш тиек болады; біріншісі – ішек бекітілетін, шанақтың түбіне орналасқан «өкше тиек» («кепіл», «түйме» деген қосалқы аттары бар). Екіншісі – шанақтың үстінде тұрып, ары-бері жылжытылатын негізгі тиек жай ғана «тиек». Үшіншісі – мойын мен құлақтың ортасында тұрған «табалдырық тиек» («шайтан тиек» деп те аталады). 
Домбыраның түрлері. Қазақтың домбырасы бұрында тұтас ағаштан шауып жасалған. Ертедегі домбыралардың жасалуы, пішіні әртүрлі болған. Оны еліміздің әр аймақтарының сақталған домбыралардан көруге болады. Қазақ салты мен дәстүріне, ән, жыр, күй мектебі мен әр өнерпаздың орындаушылық мәнеріне, аспап жасаушы шеберлердің ісмерлігіне байланысты әртүрлі пішінде дамытылып, өзгеріп отырған. Домбыра, негізінен, екі ішекті және кейде үш ішекті болып келеді. Домбыраның көне үлгілерінің бірі домалақ бүйірлі болып келетіндігі байқалады. Бұған көне түркі дәуірінен сақталған байырғы екі ішекті, тоғыз пернелі Алтай тауынан табылған домбыра тиянақ болады. Бүгінгі таңдағы Алтай тауын мекендейтін түркі халықтарының көбінде, қазақстанның шығыс, батыс аймақтарында, түркімен, өзбек (Сухандария), қарақалпақ, ноғай халықтарында кеңінен тараған домбыраның пішіні сөзсіз дәлелдейді. Қазақ халқында домбыра аспабында күй тартудың негізгі екі жүйесі қалыптасқан:
	•	Төкпе күйшілік дәстүр (Батыс Қазақстан аймағы).
	•	Шерпе күйшілік дәстүр (Шығыс Қазақстан аймағы).
Осыған орай қазақтарда домбыраның ең кең тараған екі түрі бар. Олар – Батыс Қазақстан, Түркіменстан, Қарақалпақстан, Өзбекстан, Ауғаныстан жеріне кең тараған қауақ (жұмыр шанақ) домбыра және Алтай-Тарбағатай, Жетісу мен Сарыарқа, Қаратауға тараған қалақ домбыра.
Батыс домбырасының негізгі өзгешелігі, шанағы үлкендеу, мойны жіңішке, тұрқы ұзындау келсе, шығыс домбырасының мойны жуандау, әрі қысқарақ болады. Жетісу домбырасының пішіні қырғыздардың қомузына, Маңғыстау домбырасы түркімен дутарына, Шығыс Қазақстан домбыралары алтай топшурына ұқсас келеді. Домбыраның осы екі түрі де күй орындаудағы ерекшеліктерге, дыбыс шығару сапасына байланысты және музыкалық қажеттіліктен туған. 

Домбыра аспабы жайлы аңыз
Осыдан көп уақыт бұрын домбыра төрт ішекті болған еді...
Ол әлемге Шыңғысхан деген атпен танылып, көптеген түркі халықтарын басып алып, бір орталыққа біріктірген Темучин ханның билік құрған заманы болатын.
Шыңғысханның бірінші жары Бөртеден туған Жошы атты ұлы болды. Жошы хан да әкесімен Орта Азияны жаулауға қатысып, ерлігімен танылған қолбасшы болды.
Шыңғысханның қатыгез болғандығы соншалық одан жаулары ғана емес, қол астындағылары да қорқатын еді. Ол заманда көшпенділер жаулап алушылық өмір салтын ұстанатын, яғни өзге халықтардың жерлерін басып алу арқылы өз территорияларын кеңейтіп отыратын. Соғыстан бос уақытта олар мал шаруашылығымен, аң аулаумен айналысатын. Аң аулауды Шыңғысханның балалары да өздеріне ермек еткенді жақсы көретін.
Күндердің бір күнінде Шыңғысханның сүйікті ұлы – Жошы аңшылықтан оралмай қалады. Сөйтіп хан хабаршыларды жіберіп, баласын тауып келуді немесе ол жайлы қандай да бір хабар әкелуді бұйырады.
Ол заманда түркілер мен моңғолдарда мынадай заң болатын: жақсы «қызыл» хабарға – қомақты сый беру, жаман «қара» хабарға – тиісінше ауыр жаза беру деген.
Жошының мерт болғанын білген хабаршылар, бұл жайтты ханға айтудан қатты қорқады. Ал Шыңғысхан болса, бұл кезде «Балама қатысты қандай да бір хабар әкеліңдер» деп шарқ ұрады. Алайда бәрі бекер болатын, хабаршылар қаза жайлы ханға айтпаймыз деп бекінеді.
Сол кезде ханға қарт ақын келеді. Ол көпті көрген, өлімнен қорықпайтын еді. Ханға келіп, иілген күйі «О, ұлы хан, сенің әділеттілігіңе шек жоқ. Менің домбырамды тыңда, сол кезде ұлыңның тағдыры туралы бар жайтты білетін боласың» дейді.
Күй ойналған уақытта, Жошының құлан аулауға шыққандығы, көп құланның бірін атқандығы, алайда жараланған құланның ашуға булығып Жошыны теуіп мерт қылғандығы жайлы хабар төгіліп жатты.
Домбыраның күйі ұзақ уақыт ойнап, Шыңғысханның да көз жасы көл болды.
Бір уақытта хан домбыраны жазалаңдар деп бұйрық беріп, домбыраға қайнап тұрған қорғасын құйылды.
Домбыраның үні сарнап кетті, шыдамаған екі ішегі үзіліп, қорғасын құйылған жерінен дыбыс ойығы пайда болды деседі.
Сол кезден бастап домбыраның екі ішегі ғана қалған, десе де ол әлі күнге дейін күмбірлеген дыбыс жоғалтпады.
Домбыра жайлы көптеген аңыздар бар. Бұл аңыз солардың тек бірі ғана...`
    },
    images: ['/instruments/kazakh/stringed/dombra/1.png','/instruments/kazakh/stringed/dombra/2.png','/instruments/kazakh/stringed/dombra/3.png'],
    category: 'stringed'
  },
  {
    id: 'kobyz',
    name: {
      en: 'Kobyz',
      ru: 'Кобыз',
      kk: 'Қобыз'
    },
    description: {
      en: `Kobyz

Kobyz is an ancient stringed bowed musical instrument of the Kazakh people. They make the instrument from a single piece of birch, juniper. It consists of three parts: head, body, leg. A leather membrane is pulled onto the bottom and a stand is inserted. Strings are from the horsehair. The instrument has extensive capabilities, multifaceted sound, perfectly conveys the sounds of nature.
It has long been believed that kobyz is the main attribute of shamanism. A.Zataevich writes that because of this misunderstanding, the kobyz was considered a relic of the past, could not keep up with the times and almost disappeared. Therefore, at the beginning of the twentieth century works for kobyz were not composed and gradually the instrument was forgotten. The last master of classical kobyz music is Ykhlas Dukenuly, born in the middle of the 19th century.
Measures, searches and efforts to revive the art of kobyz that stood on the verge of extinction have always been undertaken. Such events were always led by unique kobyzists Daulet Myktybaev (1904-1976) and Zhappas Kalambaev (1909-1970). Thanks to the efforts of the above-mentioned musicians, all the secrets and virtues of the kobyz have not been forgotten and have survived to this day.
They were also the first to introduce the instrument to the concert stage, and in 1968 they taught in the kobyz class at the Almaty Conservatory.

Legend about the kobyz
There is a legend about how Korkut invented the kobyz: “Korkut has been smart since childhood. He played all the instruments of that time. But he was not satisfied with this and wanted to build another instrument that could transmit the voice of people and animals, natural phenomena. After much thought, he cut a piece of pine, gave it some form. But he did not know what to do next. And so the days went by. Once asleep, Korkut had a dream. In a dream an angel came to him. He gave him advice: “Korkut, your kobyz's size is like the tibia of a 6-year-old atan (camel). Now it lacks a body made of atan's skin, a stand for strings from a goat's horn, strings from the tail of a five-year-old stallion. Waking up, Korkut did just that.
Everyone listened to the sound of this instrument with bated breath – nature, birds, animals and the wind”.
 `,
      ru: `Кобыз

Кобыз – древний струнно-смычковый музыкальный инструмент казахского народа. Делают инструмент из цельного куска берёзы, можжевельника. Состоит из трёх частей: голова, туловище, нога. На нижнюю часть натягивают кожаную мембрану и вставляют подставку. Струны из конских волос. Инструмент обладает обширными возможностями, звучание многогранное, прекрасно передает звуки природы.
Издавна существует мнение, что кобыз является главным атрибутом шаманизма. А. Затаевич пишет, что по причине такого недопонимания кобыз считался пережитком прошлого, не смог идти в ногу со временем и чуть не исчез. Поэтому вначале ХХ в. произведения для кобыза не сочинялись и постепенно инструмент забывался. Последним мастером классической музыки кобыза является Ыхлас Дукенулы, родившийся в середине ХIХ в.
Меры, поиски и старания по возрождению стоявшего на пороге исчезновения искусства кобыза всегда предпринимались. Во главе таких мероприятий всегда стояли уникальные кобызисты Даулет Мыктыбаев (1904-1976) и Жаппас Каламбаев (1909-1970). Благодаря усилиям вышеназванных музыкантов все секреты и достоинства кобыза не забылись и сохранились до наших дней.
Они также были первыми, кто ввел инструмент в концертную эстраду, а в 1968 г. преподавали в классе кобыза в Алматинской консерватории.   

Легенда о кобызе
Существует такая легенда о том, как Коркут изобрел кобыз: «Коркут с детства был смышленым. Играл на всех инструментах того времени. Но он не был удовлетворен этим и хотел соорудить другой инструмент, способный передавать голос людей и животных, природных явлений. После долгих раздумий он срезал кусок сосны, придал ей какую-то форму. Но не знал, что делать дальше. Так и шли дни. Как-то раз уснув, Коркут видел сон. Во сне к нему пришел ангел. Он дал ему совет: «Коркут, твой кобыз по размеру как берцовая кость 6-летнего атана. Теперь ему не хватает корпус из шкуры атана, подставка под струны из рога козла, струны из хвоста пятилетнего жеребца. Проснувшись, Коркут все так и сделал.
Звучание этого инструмента с замиранием слушали все – природа, птицы, животные и ветер»`,
      kk: `Қобыз

Қобыз – қазақ халқының көне ішекті-ыспалы музыкалық аспабы. Қобыз қайың, арша сияқты ағаштардың тұтас бөлігінен шауып жасалады. Бас, кеуде, аяқ деген үш бөліктен тұрады. Төменгі бөлік терімен қапталып, оған тиек қойылады. Екі ішегі жылқы қылынан тартылады. Аспап мүмкіндігі зор, әрқилы дауысты, оның ішінде табиғи дыбыстарды айнытпай шығарады. 
Әу бастан-ақ қобыз бақсының, бақсылық жасаудың құралы деген пікір қалыптасқан болатын. Сондай бір түсінбеушіліктің себебінен қобыз жаңа заман көшіне ілесе алмай, ескіліктің қалдығы саналып жоғалып, жойылып кетудің алдында қалды дейді А. Затаевич. Осының салдарынан ХХ ғ. басында қобыз аспабына арналып шығармалар жазылмай сиреп ұмытыла бастады. «Әкеден балаға мұра» болып келе жатқан қасиетті өнеріміз, ұлттық салт-санамыз, отбасылық қобызшылық дәстүріміз үзіліп қалды. Классикалық қобыз музыкасының аты аңызға айналған ең соңғы хас шебері ХІХ ғ. ортасында дүниеге келген Ықылас Дүкенұлы.
Дегенмен жойылып кетуге жақын қалған қобыз ойнау өнерін өмірге қайта оралтып «шаң басқан уақыт» пернесін ашуға жасалған шаралар мен ізденістер, талпыныстар болмай қалмады. Осындай істің басында бірегей ірі қобызшылар Дәулет Мықтыбаев (1904-1976) пен Жаппас Қаламбаев (1909-1970) тұрды. Осы екі музыканттың зор еңбегі арқасында қобыз аспабының барлық құпиясы мен қасиетінің қыры мен сыры сақталып, өткеннің баға жетпес асыл мұрасы шашауы шықпай бүгінгі заманға дейін жетті. 
Қобызда ойнап, ең алғаш рет концерттік эстрадаға шыққан, 1968 ж. Алматы консерваториясында ашылған қылқобыз класына бірінші сабақ берген де осы екі тарлан.  

Қобыз аспабы жайлы аңыз
Қорқыттың қобыз аспабын ойлап табуы жөнінде мынадай аңыз бар: «Қорқыт жасынан өте ұғымтал, құйма құлақ болып өседі. Сол кездегі аспаптардың бәрінде ойнайды екен. Алайда ол оған қанағаттанбай, адам мен жануардың үнін, табиғаттағы құбылыстар мен дыбыстарды жеткізетін жаңа бір аспап жасағысы келеді. Он ойланып, тоғыз толғанады. Қарағай ағашын кесіп әкеліп, одан бір нәрсенің жобасын жасайды. Бірақ әрі қарай қалай., не істерін білмей қиналады. Күндер осылай өте береді. Бір күні шаршап отырып, көзі ілініп кетіп, түс көреді. Түсіне періште енеді. Ол балаға: «Қорқыт, жаққан қобызың 6 жасар нар атанның жілігіндей екен. Енді оған нар терісінен жасалған шанақ, ор текенің мүйізінен ойылған тиек, бесті айғырдың кұйрығынан тартылған қыл ішек жетпей тұр. Осылар болса, аспабың сайрағалы тұр екен» – деп кеңес береді. Қорқыт ұйқысынан ояна салып, осы айтылғандардың бәрін жасайды.
 Қарағайдың түбінен 
 Қайырып алған, қобызым. 
 Үйеңкінің түбінен
 Үйіріп алған қобызым.
 Желмаяның терісін
 Шанақ қылған, қобызым.
 Ортекенің мүйізін
 Тиек қылған, қобызым.
 Бесті айғырдың құйрығын
 Ішек қылған, қобызым. 
 Құлағыңды бұрайын
 Осы айтқаным болмаса,
Қайырып жерге ұрайын,- деп қобызды қолына алған кезде, аспап боздап қоя беріпті. Қобыз үнін бар табиғат, ұшқан құс, ескен жел, жүгірген аң – бәрі тоқтай қалып, құлақ түре тыңдапты»`
    },
    images: ['/instruments/kazakh/stringed/kobyz/1.png','/instruments/kazakh/stringed/kobyz/2.png','/instruments/kazakh/stringed/kobyz/3.png'],
    category: 'stringed'
  },
  {
    id: 'zhetygen',
    name: {
      en: 'Zhetygen',
      ru: 'Жетыген',
      kk: 'Жетіген'
    },
    description: {
      en: `Zhetygen
Zhetygen is an ancient many-stringed plucked musical instrument of the Kazakh people. There are no reliable sources about the history of the instrument, but still the appearance is roughly dated to the V-IV centuries BC, correlated with the formation of the ancient multi-string instruments.
Zhetygen has a special place and has a kind of history among the Kazakh people. Eminent researchers and travelers, among them A. Maslov, P. Pallas, I. Georgi, S. Bolotov, S. Gmelin, P. Rychkov mention this instrument in their writings. For example, researcher A. Maslov in an article for the magazine “Sibirsky vestnik” (1818) gives a detailed description of the instrument and writes: “The yataga is a musical instrument used by the Orenburg Kirghiz. The body is long, rectangular to the middle, oval on one side. The two side covers are solid, the other two are connected in two parts, the ratio is approximately 9:25...”. Researchers and travelers called the instrument “yatyga”, “yeltaga”, “jattygan”, etc. The ethnographer S. Bolotov compares its sound with the torban and writes: “In the hands of a skilled performer, you can enjoy listening to the sounds of the instrument”. One thing is known, the name of the instrument is similar to the name of the instruments of related peoples. Even the sound of zhetygen is similar with other many-string instruments.
In 1966, a master Orazgazy Beysembaev made zhetygen according to descriptions from the magazine “Sibirsky vestnik” of 1818. The re-creation of this particular zhetygen marked the beginning of the revival of the forgotten musical instruments of the Kazakh people.
Taking this sample as a basis, the performers on zhetygen performed traditional songs and kui, contributed to the promotion of the instrument among the people. In the 70s Talgat Sarybayev and Kaiyrzhan Makanov became the first performers. In the 80s Yedil Kusainov, Saule Merekeyeva, Shakhbanu Kylyshbaeva, Nurgul Zhakypbek were popularizing zhetygen.
Also worth noting are the works of the “Otyrar sazy” orchestra under the direction of N. Tlendiev, the folk and ethnographic ensembles “Sherter”, “Sazgen”, “Adyrna”, “Murager” in propaganda of zhetygen.

Making the instrument
Peculiar features have pegs and strings of the instrument. In the old days, the instrument was rather primitive, the strings were pulled from horsehair. Now they can be replaced by other materials.
Types of zhetygen strings:
a) horsehair;
b) intestines of the animal;
c) wire;
g) fishing line.

Legend about the zhetygen
In ancient times, an old man lived in one aul. He had seven sons. Once, in the cold winter, people were left without food because of jute (ice and massive cattle mortality), and grief settled in the old man's house. Death one by one claimed all the sons. After the death of the eldest son of Kania, a heartbroken old man hollowed out a piece of withered tree, pulled a string on it and placed a stand under it, performed kui “Karagym” (“My dear”), after the death of his second son Torealym, the old father pulled a second string and improvised kui “Kanat synar” (“Broken Wing ”), he composes to the third son Zhaikeldy kui “Kumarym” (“My Beloved”); to the fourth son Beken kui “Ot soner” (“Extinguished Flame”) was dedicated, to the fifth son Hauas composes “Bakyt koshti” (“Lost Happiness”), the sixth son Zhulzar – “Kun tutyldy” (“Eclipsing Sun”). After the loss of the last youngest son, Kiyas, the old man pulls the seventh string and performs the kui “Zheti Balamnan Aiyrylyp kusa boldym” (“Woe from the loss of seven sons”).
Extracting sounds full of sorrow from the instrument, the performer in images of various character melodies shows the images of his children. These improvised melodies were further developed and came to us in the form of instrumental pieces-kuis under the general name “Zhetygennyn zheteui” (“Seven kuis of zhetygen”).
*Kui – an instrumental music or melody without song, words.`,
      ru: `Жетыген 
Жетыген – древний многострунный щипковый музыкальный инструмент казахского народа. Достоверных источников об истории инструмента нет, но всё-таки появление примерно датируют V-IV вв. до н.э., соотносят с образованием древних многострунных инструментов.
Жетыген занимает особое место и имеет своеобразную историю у казахского народа. Об инструменте упоминают в своих трудах именитые исследователи и путешественники, среди которых А. Маслов, П. Паллас, И. Георги, С. Болотов, С. Гмелин, П. Рычков. Например, исследователь А. Маслов в статье для журнала «Сибирский вестник» (1818) даёт подробное описание инструмента и пишет: «Ятага – музыкальный инструмент, который используют Оренбургские киргизы. Корпус длинный, к середине прямоугольный, с одной стороны овальный. Боковые две крышки цельные, остальные два соединены из двух частей, соотношение примерно 9:25…». Исследователи и путешественники называли инструмент «ятыга», «елтага», «джаттыган» и т.д. Этнограф С. Болотов его звучание сравнивает с торбаном и пишет: «В руках искусного исполнителя можно с удовольствием слушать звуки инструмента». Известно одно, название инструмента схоже с названием инструментов родственных народов. Даже звучание жетыгена похоже с другими многострунными инструментами.
В 1966 г. Оразгазы Бейсембаев смастерил жетыген по описаниям из журнала «Сибирский вестник» 1818 года выпуска. Воссоздание именно этого жетыгена положило начало возрождению забытых временем музыкальных инструментов казахского народа.
Взяв за основу этот образец, исполнители на жетыгене исполняли традиционные песни и кюи, внесли вклад в пропаганду инструмента среди народа. В 70-х гг. первыми исполнителями стали Талгат Сарыбаев и Кайыржан Маканов. В 80-х гг. популяризацией жетыгена занимались Едиль Кусаинов, Сауле Мерекеева, Шахбану Кылышбаева, Нургуль Жакыпбек.
Также стоит отметить труды оркестра «Отырар сазы» под руководством Н. Тлендиева, фольклорно-этнографических ансамблей «Шертер», «Сазген», «Адырна», «Мурагер» в пропаганде жетыгена. 

Изготовление инструмента
Своеобразные особенности имеют колки и струны инструмента. В старину инструмент был довольно примитивным, струны натягивали из конских волос. Ныне их можно заменить другими материалами.
Виды струн жетыгена:
а) из конских волос;
б) из кишок животного;
в) струны из провода;
г) струны из лески. 

Легенда о жетыгене
В глубокой древности в одном ауле жил старик. Было у него семь сыновей. Однажды холодной зимой из-за джута (гололед и массовый падёж скота) люди остались без еды, и в доме старика поселилось горе. Смерть одного за другим унесла всех сыновей. После смерти старшего сына Кании убитый горем старик выдолбил кусок иссохшего дерева, натянул на него струну и поставив под нее подставку, исполнил кюй «Карагым» («Родной мой»), после смерти второго сына Тореалыма старый отец натягивает вторую струну и импровизирует кюй «Канат сынар» («Разбитое крыло»), третьему сыну Жайкелды он слагает кюй «Кумарым» («Любимый мой»); четвертому — Бекену посвящается кюй «От сонер» («Погасшее пламя»), пятому сыну Хауасу сочиняет «Бакыт кошти» («Утерянное счастье»), шестому сыну Жулзару — «Кун тутылды» («Затмившееся солнце»). После утраты последнего младшего сына Кияса старик натягивает седьмую струну и исполняет кюй «Жети баламнан айрылып куса болдым» («Горе от утраты семи сыновей»).
Извлекая из инструмента звуки полные скорби, исполнитель в различных по характеру мелодиях показывает образы своих детей. Эти импровизированные мелодии получили дальнейшее развитие и дошли до нас в форме инструментальных пьес-кюев под общим названием «Жетыгеннын жетеуы» («Семь кюев жетыгена»).`,
      kk: `Жетіген
Жетіген – қазақтың көнеден келе жатқан көп ішекті, шертпелі музыкалық аспабы. Оның шығу тарихы мен даму жолдары туралы нақтылы деректер болмағанымен, шамамен б.з.д. V–IV ғғ. пайда болған көне көп ішекті аспаптардың шығу тарихымен сәйкестендіріп болжам жасауға болады.
Көп ішекті аспаптардың шығу тегі қалыптасуын саралай келе, олардың қатарынан орын алатын қазақ этносының жетігенінің өзіндік тарихы бар екендігіне көз жеткізуге болады. Жетіген туралы А. Маслов, П. Паллас, И. Георги, С. Болотов, С. Гмелин, П. Рычков сияқты зерттеушілер мен саяхатшылар қазақ даласынан аспап әуенін естігендігін айтып, біршама пікірлер қалдырған. Мысалы, зерттеуші А. Маслов «Сибирский Вестик» (1818) журналында жарияланған мақаласында жетіген туралы анығырақ суреттеп, былай деген: «Ятага – Орынбор қырғыздары қолданатын музыкалық аспап. Шанағы ұзын, орта тұсы төртбұрышты, бір жағына қарай доғал бұрыштанып сәл иілген. Бүйіріндегі екі қақпағы тұтас, қалған екі қақпақтың әрқайсысы екі бөліктен біріктірілген, олардың бір-біріне қатынасы 9:25-ке қатынасындай...». Аталған пікір көрсеткендей зерттеушілер мен саяхатшылар аспапты «ятыга», «елтаға», «джаттыган» деген әртүрлі атаулармен атаған. Ал этнограф С. Болотов аспап үні жайында оны торбанмен салыстыра келіп, «шебер орындаушының қолында оның үнін рахаттана отырып тыңдайсың» деген құнды пікір келтіреді. Деректерден байқайтынымыз – аспап атауының сонау Түркі дәуірінен келе жатқан тамырлас халықтар аспаптарының атауымен сәйкес келетіндігі. Бұл ішектілердің шығу жолы бір болғандығын дәлелдей түседі. Жетігеннің әуезді үні де басқа көп ішекті аспаптардың үнімен әуендес келеді.
1966 жылы Оразғазы Бейсембаев «Сибирский вестник» журналында 1818 жылы суреттеп жазылуы бойынша жетіген аспабын жасады. Нақ осы жетігеннің бейнесін қайтадан өмірге келтіру көне аспаптарды қайта жасау ісінің бастамасы болды.
Аталған үлгіні негізге алған жетіген орындаушылары сахна төрінде дәстүрлі ән-күйлерді орындап, аспаптың халық арасында кең таралуына, әуенінің насихатталуына жол ашты. 70-жылдардан бастап алғаш орындаған орындаушылар Талғат Сарыбаев пен Қайыржан Мақанов болды. Ал 80-жылдардан бастап Еділ Құсайынов, Сауле Мерекеева, Шахбану Қылышбаева, Нұргүл Жақыпбек сияқты орындаушылар жетіген аспабының халық арасында нақты қалыптасуына атсалысты.
Осы жолда басқа фольклорлық аспаптармен қатар жетігенді де насихаттауда, күй өнерінің көрнекті көсемі Н. Тілендиевтің «Отырар сазы» оркестрімен қатар «Шертер», «Сазген», «Адырна», «Мұрагер» фольклорлық-этнографиялық ансамбльдері 1970–80 жж. бастап зор еңбек сіңірді.

Аспаптың жасалу технологиясы
Жетігеннің құлақ бұрауы мен оған тағылатын ішектердің өзіндік ерекшеліктері бар. Сондықтан ішектері қандай болған және қандай болуы тиіс екендігін қарастырып, талдап бірқалыпқа түсіру қажет. Аспаптың алғашқы үлгілері көне заманда өте қарапайым түрде жасалып, оның ішегі аттың қылынан тағылған болатын. Бірте-бірте ол басқа материалдармен алмастырыла бастады.
Жетіген аспабының ішек түрлері:
а) Аттың қылынан жасалған ішек түрлері;
ә) Мал ішегінен есіп жасалған ішектері;
б) Сымнан тағылған ішектер;
в) Қармақ жіптен тағылған ішектер. 
	
	Жетіген аспабы жайлы аңыз
«Жұрт әр түрлі ауруға, аштыққа жиі-жиі ұшырайтын өткен заманда, қаһарлы қыстың қақаған аязды күндерінің бірінде жұттан мал қырылып, ел қатты күйзеледі. Сол заманда өмір сүрген бір қарияның жеті ұлы болыпты. Көп қайғысының бір шеті қарияның шаңырағына да тап болады. Балалары бірінен соң бірі дүние салады, қайғы басқан қария кепкен қу ағашты ойып, аспап жасайды. Әр баласы қайтыс болған сайын аспаптың бетіне жылқы жылқы қылынан бір ішек жасап тағып сазды мұңға толы жоқтау әнін салады. Осы жеті ішектен жеті түрлі әуен шығарып, әр баласының мінез-құлқын, жүріс-тұрысын суреттегендей болады. Үлкен ұлы Қания қайтыс болғанда, шал «Қарағым» деген күйін шертеді. Екінші баласы Төреалымға – «Қанат сыңар», үшінші баласы Жайкелдіге «Құмарым», төртіншісі Бекенге – «От сөнер», бесінші Хауасқа – «Бақыт көшті, алтыншысы Жұлзарға – «Күн тұтылды» деген күйлерін арнайды. Қарт ең кіші баласы Қияс қайтыс болғанда ақырғы, жетінші күйін шертеді. Шалдың балаларына арнап шығарған жеті күйі одан әрі дамытылып, ел арасына «Жетігеннің жетеуі» деген атпен тарап кетеді». `
    },
    images: ['/instruments/kazakh/stringed/zhetygen/1.png'],
    category: 'stringed'
  },
  {
    id: 'sherter',
    name: {
      en: 'Sherter',
      ru: 'Шертер',
      kk: 'Шертер'
    },
    description: {
      en: `Sherter

Sherter is a three-stringed plucked musical instrument. It is one of the most common instruments of the Kazakh people. The instrument accompanied songs and poems, and shepherds widely used. According to the elders, the feature of the instrument is as follows: basically the shape and structure of the sherter is similar to dombra, the fingerboard is short, the strings are made of horsehair, the size is similar to kobyz. It has no frets. The three-stringed instrument is like the dombra of East Kazakhstan, it is pulled from above with a leather membrane like kobyz. It is easy to see that the structure of the sherter is more similar to kobyz: the neck is bent, there is no cap nut, the pegs are like that of kobyz.
In 1870, Augustus Eichgorn, a researcher of the musical heritage of the peoples of Central Asia, wrote about several types of kobyz with iron pendants and an instrument with two strings, with a leather membrane on a deck, without frets and with one peg. He calls this instrument “kobyz”, but in structure it is similar to the ancient sherter. Its length is 74 cm, the width of the case is 12 cm, and the depth is 6 cm.
Now the instrument has been improved, the frets were established, the size was increased. This increase has allowed to expand the sound. Since 1988, a special lecture class on playing sherter has been opened and is functioning at the Kazakh National Conservatory named after Kurmangazy.

Making the instrument
The instrument consists of three parts: the body, neck, head. The following parts are located on the case: deck, case (main), leather membrane, filly (stand for strings), hole. In the modernized types of instruments, the number of frets is 22 (they were absent in the ancient samples). There are three pegs for three strings.
At the bottom of the instrument there are three buttons, to which the strings are attached. The main feature of the sherter is that the skin is stretched on half of the deck, and depending on the quality of the skin, the sound is produced differently. Mainly goat and camel skin are used for membranes.`,
      ru: `Шертер

Шертер – один из самых распространённых инструментов казахского народа, трехструнный. Инструмент аккомпанировал песням и поэмам, широко использовали и пастухи. По словам старцев, особенность инструмента в следующем: в основном форма и строение шертера схоже с домброй, гриф короткий, струны из конских волос, размеров в кобыз. Не имеет ладов. Инструмент трёхструнный как домбры Восточного Казахстана, сверху натянули кожаной мембраной как у кобыза. Несложно заметить, что строение шертера более похоже на кобыз: гриф согнутый, нет верхнего порожка, колки как у кобыза.
В 1870 г. исследователь музыкального наследия народов Средней Азии Август Эйхгорн пишет о нескольких видах кыл кобыза с железными подвесками и об инструменте, у которого две струны, с кожаной мембраной на деке, без ладов и с одной колкой. Он называет данный инструмент «кобыз», но по строению он схож с древним шертером. Длина его – 74 см, ширина корпуса – 12 см, глубина – 6 см.
Ныне инструмент усовершенствован, установили лады, размер увеличили. Такое увеличение позволило расширить звук. С 1988 г. открыт и функционирует специальный лекционный класс по игре на шертер в Казахской национальной консерватории им. Курмангазы. 

Изготовление инструмента
Инструмент состоит из трёх частей: корпус, гриф, голова. Следующие части расположены на корпусе: дека, корпус (основной), кожаная мембрана, порожек (подставка под струны), отверстие. У модернизированных видов инструмента количество ладов 22 (в древних образцах они отсутствовали). Установлены три колка для трёх струн.
В нижней части инструмента установлены три кнопки, к которым крепят струны. Главная особенность шертера в том, что на половину деки натянута кожа, и в зависимости от качества кожи звук издаётся по-разному. В основном, используют для мембраны кожи козы и верблюда. `,
      kk: `Шертер

Ертеректе қазақ арасында тараған аспаптың бірі шертер – үш ішекті, шертіп ойнайтын, қазақтың аспаптық музыка мәдениетіндегі көне аспаптардың бірі. Шертер көбінесе ән-жыр, дастандарды қостауға арналған, бақташылар арасында кең таралған аспап. Қариялардың айтуына қарағанда бұл құралдың ерекшелігі мынада: шертердің құрылысы мен формасы негізінде домбыраға ұқсас болған, мойны, қысқа, қыл ішек тағылған, үлкендігі қобыздай. Қырғыздың комузы секілді шертер де пернесіз. Семей облысында кездесетін домбыралардай үш ішекті, беті қобыздағыдай көн терімен қапталған. Шертердің құрылысы қобызға көбірек ұқсас екенін байқау қиын емес. Мойны имектеу, басында шайтан тиегі жоқ, құлақтардың жасалуы да қобызға жақынырақ.
1870 жылдары Орта Азия халықтарының музыкалық мұраларын зерттеуші Август Эйхгорн темір сылдырмақтары бар қыл-қобыздың бірнеше түрлерін табумен қатар, екі ішекті шертіп ойналатын аспапты тауып, оның шанағының көн терімен қапталғанын, мойынында перне жоқ екенін, ал басында бір құлағы бар екенін суреттеп жазған. Бұл аспапты ғалым «қобыз» деп атап кеткенімен, құрылысы жөнінен көне шертерге өте ұқсас. Оның көлемі: ұзындығы – 74 см, шанағының ені – 12 см, тереңдігі – 6см.
Шертер аспабы өзінің шертіп ойнау ерекшелігімен Хакастың – хомыс, Алтайдың – топшуур, Туваның – допшулур чанзы, Якуттың – қырымпа, өзбектің – рубаб, Азербайжанның – тара аспаптарына ұқсас келеді. Осы аты аталған аспаптарға жалпы тән қасиет – бұл терімен қапталған шанақ. 
Қазіргі шертер аспабы жетілдірілген аспап, аспаптың мойынына перне тағылып, көлемі жөнінен де үлкейтіліп, барынша жетілдірілді. Аспаптың көлемінің үлкейтілуі дыбыс көлемінің ұлғайуына да мүмкіндік берді. 1988 жылдан бастап шертер аспабы Құрманғазы атындағы Қазақ ұлттық консерваториясында арнайы кәсіби дәріс беру класы болып ашылды. 

Аспаптың жасалу технологиясы
Шертерге үш ішек тағылады және ол мынадай негізгі үш бөлімнен тұрады: аспаптың шанағы, мойыны және басы. Шертердің шанағына жататын бөліктер мыналар: бет қақпағы, шанағы (кеудесі), тері, тиек және ойық. Жетілдірілген шертердің мойынында пернелер тізбегі саны 22 (ал көне шертерде пернелер болмаған). Аспаптың басында, үш ішекті болғандықтан, үш құлағы бар.
Шертер шанағының төменгі жағында үш түймесі бар, бұл түймелерге үш ішек бекітіледі. Шертердің ең негізгі ерекшелігі оның шанағының жартылай терімен қапталғандығында, осы терінің сапасына байланысты дыбыс тербелісі де әртүрлі болады. Шертерге ешкі мен түйенің терілері иленіп, өңделіп тартылады.
Шертер – орындаушыларымен қатар аспап жасаушы шеберлер үшін де әлі толық ашылмаған құпия сыр. Бұған дәлел әр кездегі өзгертіліп тұратын бет – пішіні. Жылдар өткен сайын шертердің формасы өзгеріп, дыбыстарына көп мән беріледі десе болады.`
    },
    images: ['/instruments/kazakh/stringed/sherter/1.png','/instruments/kazakh/stringed/sherter/2.png','/instruments/kazakh/stringed/sherter/3.png'],
    category: 'stringed'
  },
  {
    id: 'adyrna',
    name: {
      en: 'Adyrna',
      ru: 'Адырна',
      kk: 'Адырна'
    },
    description: {
      en: `Adyrna

Adyrna is an instrument with a peculiar technique of execution, a deep history.
This instrument is similar to one of the main weapons - the bow, and therefore was originally called as well. Over time, the appearance of adyrna has undergone changes - the instrument was made in the form of a deer, red deer, saiga, and antelope. The melody emanating from the strings of adyrna can affect the depth of hearts. Perhaps that is why the name of the instrument originates from a weapon that can aptly hurt. The base of the instrument resembles the irregularities of the Kazakh steppe, its hills and ravines. Also, its many strings as the bark of the earth - a kind of proof of its antiquity.
Adyrna is a multi-stringed plucked Kazakh musical instrument. On adyrna play placing it on knees or between the legs, or leaning on shoulders. On the front side tighten the skin, because the body is hollow. The view of the instrument is similar to the images of animals; therefore, numerous strings stretch between the horns and the tail. Strings are the language of the instrument, by them adyrna speaks; they touch the souls of the listeners. Strings are made of tendons or threads of camel hair. Making an instrument requires special skill and accuracy. With this instrument, folklore, that is, verbally reached, melodies or works, small instrumental pieces are performed, and sometimes can be found in the ensemble. 
Adyrna has pegs, in ancient times people believed that by these pegs an instrument can hear. The strings went through pegs. The instrument can be played with both hands. The main thing is the ability to play.`,
      ru: `Адырна
 
Адырна – инструмент, обладающий своеобразной техникой исполнения, глубокой историей. 
Данный инструмент схож с одним из основных оружий – луком, поэтому и изначально назывался также. С течением времени, внешний вид адырны подвергся изменениям, – инструмент делали в виде оленя, марала, сайги, антилопы. Мелодия, исходящая из струн адырны, способна затронуть глубь сердец. Возможно, поэтому название инструмента берёт начало от оружия, что может метко задеть. Основание инструмента напоминает неровности казахской степи, её холмы и овраги. Также, её многострунность как коры земли – своеобразное доказательство её старинности. 
Адырна – многострунный щипковый казахский музыкальный инструмент. На адырне играют, расположив её на колени или меж ног, либо опираясь на плечи. На лицевую сторону натягивают кожу, поскольку корпус полый. Вид инструмента схож с образами животных, поэтому между рогами и хвостом натягивают многочисленные струны. Струны – это язык инструмента, им адырна говорит, им затрагивают души слушателей. Делают струны из сухожилий или нитей из верблюжьей шерсти. Изготовление инструмента требует особого мастерства и аккуратности. С этим инструментом исполняют фольклорные, то есть дошедшие до нас устно, мелодии или произведения, небольшие инструментальные пьесы, а иногда встречается в составе ансамбля. 
У адырны есть колки, в древности верили, что так инструмент может слышать. Струны проходили через колки. На инструменте можно играть обеими руками. Главное – умение играть.`,
      kk: `Адырна 

Адырна – сан ғасырды артта қалдырып, тағдырдың талай тезінен өткен ерекше аспаптардың бірі. 
 Адырна аспабының тұрқы алғашқыды батырлардың басты қаруының бірі – садақ секілді болып, кейін келе бұғы, марал, киік, бөкен сынды аңдардың тұрқына ұқсатылып жасалды. Аспапта ойналған кез келген әуез адам жүрегінің нәзік иірімдерін дөп басып, көңіл күмбезіне орнайды. Сондықтан, қадалған жерін ойып түсер қарудың адуынын еске түсіргендіктен де осылай аталса керек. Аспаптың түбірінің өзі қазақ даласының біркелкі емес, адырлы, сай-жыралы екендігін еске салады. Сонымен қатар қыртысы мол жер қабатындай қаптаған көп ішекті болып келуі – оның көне заманнан бері келе жатқан ескінің сынығы, асылдың көзі екендігінің дәлелі.
Адырна – көп ішекті қазақтың шертпелі аспабы. Оны тізенің үстіне немесе екі аяқтың ортасына қойып, иыққа тіреп шертіп ойнайды. Адырнаның бетін көн терімен қаптайды, өйткені шанағы қуыс болып келеді. Жан-жануарлардың пішініне ұқсас болып келгендіктен мүйізі мен құйрығының екі ортасына көптеген ішектер жүргізеді. Ішектер – аспаптың тілі десек те болады. Сол арқылы ол сөйлейді, айналадағылардың күйін адам жанына жеткізе біледі. Аспаптың ішегін тарамыстан немесе шуда жіптен есіп тағады. Адырнаның жасалуының өзі асқан шеберлік пен ұқыптылықты талап етеді. Адырнамен фольклорлық, яғни ауызекі қолданыспен жеткен әуендер немесе шығармаларды, кейде шағын күйлерді, кейде тіпті бір күйдің жетегінде қосымша үн қосу үшін де пайдаланады.
Адырнаның құлақтары болады, сол арқылы оны ежелгі замандағылар ести білген деп сенген. Оның құлақтары арқылы ішектері жүргізіледі. Аспап ойнаушының қай қолмен тартатындығына көңіл бөлмейді, оны оңқай да, солақай да іліп тартып немесе шертіп те ойнай алады. Ең бастысы – аспаптың үнін бұзбай, шебер орындай білсе болғаны.`
    },
    images: ['/instruments/kazakh/stringed/adyrna/1.png','/instruments/kazakh/stringed/adyrna/2.png','/instruments/kazakh/stringed/adyrna/3.png'],
    category: 'stringed'
  },
  {
    id: 'dabyl',
    name: {
      en: 'Dabyl',
      ru: 'Дабыл',
      kk: 'Дабыл'
    },
    description: {
      en: `Dabyl

Dabyl – a percussion musical instrument of the Kazakh people. Since ancient times, it was a signal instrument. As the sound of the instrument is loud, it was used to signal the offensive of the enemy, to mobilize troops.
In oral Kazakh literature, it appears as one of the five main weapons of the Kazakh batyr. In the Kazakh epic poems, the ethnographic works of scholars of the 18th-19th centuries, oral narrations contain many references to the instrument.
Warriors used it during military campaigns or when they returned to the homeland from the battlefield. The instrument was made in different shapes, depending on the pitch. The dabyl with strong sound that is found in oral literature was especially large. It is also mentioned in epic poems of the XVI-XVII centuries.
In the Chinese sources there are two records, where it is said that the Huns honored the dabyl at banner level of the troops. From the Chinese source “Shi tszi”: “In 119 BC during the campaign of the Chinese troops on the Huns, the Chinese commander Ho Tsui-bin took away the banner and  dabyl from the prince of the eastern Datszyan” (V.S.Taskin. 1968). Also V.S.Taskin notes that in the records of this Chinese source it is said: “In the same year (119 BC), the Chinese army took away the flag and dabyl of the leader of the Huns of the Eastern Wing”. This fact clearly shows that it was a symbol of statehood and the nation; it was honored as well as the banner. Dabyl - spirit and soul of the army.
This type of instrument is preserved in some nations. For example: tabl – among the Azerbaijanis, doobul – among the Kirghiz, daul – among the Uzbeks, dowl – among the Armenians. This occurred because of the word “tawl”, it is the percussion instrument of the Arabs.

Making the instrument
The hull is made of willow, birch, poplar, folded into a circle and the skin of the calf or camel between two and six months of age are stretched. For convenience during transportation, a raw-belt or wooden handle is attached to it. The dabyl is played with a special hand club. The instrument was preserved in two samples. The first is a small species used in ensembles of ancient instruments for folklore purposes 1 m 56 cm in circumference; the second is a large marching dabyl 3 m 40 cm in circumference, 30 cm wide, 1.5 m high.
The use of animal skins and tensioning on the instrument is done through sophisticated techniques. To do this, the skin or belly is tensioned on a wooden hull. The wool of a freshly shredded animal is sheared and cleaned of meat. The wool of the animal's skin, which will be used for the instrument, is digested beforehand. There are two cleansing methods and both are complex techniques. The first is a leaven for the skin. In this technique, it is important that the sour sourdough sour does not soak into the skin. The second is to soak the skin and then shave the undercoat with a sharp razor. After a clean skin is washed until the acrid smell and sweat will be washed off. The cleared skin is used in a moist look.
In order to make the hull hard and to decorate it, the outside is upholstered with leather, and the method of burning is applied with ornaments. Folk craftsmen often attach horns, bones, feathers, fringe to the instrument. On the one side of the hull, a raw handle is attached. Dabyl is played with fingers or small hammers with a ball head. The sound depends on the thickness of the skin, the strength of the tension, the safety in a special box.
Marching dabyl is made in a large size. Total circumference – 3 m 40 cm, height – 1 m. The skin of two camels is used to stretch the skin on both sides of the instrument. The sound is heard at a distance of 3-4 kilometers.`,
      ru: `Дабыл 

Дабыл – ударный музыкальный инструмент казахского народа. С древних времён он был сигнальным инструментом. Поскольку звук инструмента был громким, его использовали для подачи сигнала о наступлении врага, для мобилизации войска.
В устной казахской литературе дабыл предстаёт как один из пяти главных оружий казахского батыра. В казахских эпических поэмах, этнографических трудах ученых XVIII-XIX вв., устных повествованиях встречается много упоминаний об инструменте.
Воины применяли дабыл во время военных походов или когда возвращались с поле боя в родные края. Инструмент делали разных форм, в зависимости от высоты звука. Дабыл с сильным звучанием, что встречается в устной литературе, был особо крупного размера. Он упоминается также в эпических поэмах XVI-XVII вв.
В китайских источниках есть две записи, где говорится, что дабыл гунны чтили на уровне знамя войска. Из китайского источника «Ши цзи»: «В 119 г. до н.э. во время похода китайских войск на гуннов китайский полководец Хо Цюй-бин отобрал знамя и дабыл у князя восточного дацзян» (В.С. Таскин. 1968). Также В.С. Таскин отмечает, что в записях этого китайского источника говорится: «В том же году (119 год до н.э.) китайское войско отобрало знамя и дабыл предводителя гуннов восточного крыла». Данный факт наглядно показывает, что дабыл был символом государственности и нации, его чтили также как и знамя. Дабыл – дух и душа армии. 
Этот вид инструмента сохранился у многих народов. Например: табль – у азербайджанцев, дообул – у киргиз, даул – у узбеков, доол – у армян, у арабов – тэвл.

Изготовление инструмента
Корпус дабыла делают из ивы, берёзы, тополя, сгибают в круг и натягивают кожу телёнка или верблюда  возрастом от двух до шести месяцев.  Для удобства при транспортировке к нему прикрепляют сыромятный ремень или деревянную рукоятку. Играют на дабыле специальной ручной дубиной. Сохранился инструмент в двух образцах. Первый – небольшой вид, применяемый в ансамблях древних инструментов в фольклорных целях 1 м 56 см в окружности, второй – большой походный дабыл 3 м 40 см в окружности, ширина 30 см, высота 1,5 м.
Использование шкуры животного и натягивание на инструмент происходит путём сложных методик. Для этого шкуру или брюхо натягивают деревянный корпус. Шерсть свежезаколотого животного стригут, очищают от мяса. Шерсть кожи животного, которое будет использовано для инструмента, заранее переваривают. Есть два способа очищения и обе они сложные методики. Первое – закваска для кожи. В данной методике важно, чтобы прокисший запах закваски не впитался в кожу. Второе – размочить кожу и затем острой бритвой сбривают подшерсток. После чистую шкуру промывают, пока не смоется едкий запах и пот. Очищенную кожу используют в полусухом виде.
Чтобы корпус был твёрдым и украсить его, снаружи обивают кожей, методом обжига наносят орнаменты. Народные мастера нередко прикрепляют к инструменту рога, кости, перья, бахрома. С одной стороны корпуса приделывают рукоять из сыромятины. На дабыле играют пальцами или небольшими молоточками с шаровой головкой. Звук зависит от толщины кожи, силы натягивания, сохранности в специальной коробке.
Походный дабыл – делают больших размеров. Общая окружность – 3м 40 см, высота – 1 м. Используется шкура двух верблюдов, чтобы натянуть кожу с обеих сторон инструмента. Звук слышен на расстоянии 3-4 километров.`,
      kk: `Дабыл 

Дабыл – қазақтың ұрмалы музыкалық аспабы. Дабыл ежелден дыбыс беру құралы болған. Дауысы зор болғандықтан дабылды ертеде жаугершілікте ел шетіне жау келгенін хабарлауға, жауға аттанар жасақты жиюға қолданған.
Қазақ ауыз әдебиетінде дабыл ер жігіттің негізгі бес қаруының бірі ретінде айтылады. XVIII-XIX ғғ. жататын батырлық жырлар мен дастандарда, ғалымдардың этнографиялық жазбаларында дабыл аспабы жайлы деректер жиі кездеседі.
Қытай деректерінде ғұн дәуірінде дабыл әскердің байрақ, туының дәрежесінде құрметтелетінін дәлелдейтін екі дерекке кез болдық. Қытайдың «Ши цзи» дерекнамасында: «Б.з.б. 119 жылы қытайдың қолы ғұндарға жорық жасаған кезде қытай әскерінің қолбасшысы Хо Цюй-бин ғұндардың шығыс дацзян князінің туы мен қоса дабылын тартып алды» (В.С.Таскин. 1968.) деген дерек қалдырыпты. Тағы да В.С.Таскиннің айтуынша аталмыш дерекнамада: «Сол жылы (б.з.б. 119 жылы) қытай қолы ғұндардың шығыс қанатының көсемінің туын, дабылын тартып алды» дейді. Ендеше бұл ежелгі дәуірден түркілер үшін дабыл аспабы елдіктің, ұлттың қасиетті символы болған тудың дәрежесінде құрметтелетінін көрсетеді. Дабыл – әскердің рухы, жаны, айбыны. Сондықтан да ту мен дабыл елдіктің, егемендіктің бір нышаны деудің еш артықтығы жоқ.
Дабылға ұқсас аспаптар көптеген халықтарда сақталған. Мысалы: әзербайжандарда – табль, қырғыздарда – дообул, өзбектерде – даул, армяндарда – доол, арабтарда – тэвл.

Аспаптың жасалу технологиясы
Дабылдың шанағы тал, қайың, тораңғы секілді ағаштардан дөңгелек шеңбер түрінде иіліп, оған тері қапталып жасалады. Алып жүруге ыңғайлы болуы үшін қайыс бау немесе ағаш тұтқы бекітіледі. Дабыл арнайы қол шоқпармен ұрып ойналады. Дабылдың екі түрлі үлгісі сақталған. Оның бірі – шеңбер аумағы 1 м 56 см-лік фольклорлық мақсатта көне аспаптар ансамблі үшін қолданылатын шағын түрі, екіншісі шеңбер аумағы 3 м 40 см, ені 30 см, биікт. 1 м 50 см болып келетін үлкен жорық дабылы.
Музыкалық аспаптарға арналған мал терісін пайдалану және оны қаптап жасау күрделі әдістермен атқарылады. Ол үшін мал терісін немесе қарнын дөңгелек ағаш шанаққа керіп қаптайды. Жаңа сойылған малдың жүнін қырқып алып, сары етін сыпырып алады. Аспаптарға қолданатын тері жарғақтың жүні жас кезінде жидітіп алынады. Тазартудың екі тәсілі бар және ол күрделі әдіспен игеріледі. Бірі – и салу тәсілі. Бүл тәсілде идің быршыған өткір иісін теріге сіңдірмей жасау маңызды. Екіншісінде – теріні жібітіп барып, өткір ұстарамен түгі сылынып алынады. Содан соң түксіз терінің шуашы мен шайыры кеткенше жуылады. Әбден тазарған кезде теріні шала кептіріп алып қолданады.
Шанағы төзімді әрі сәнді болу үшін сыртынан өн бойын қуалай айналдыра тері қаптап, оның сыртын күйдіру әдісімен өрнектер салып безендіреді. Халық шеберлері кейде шеңбер сыртына мүйіз, сүйек, үкі, шашақ салып та жасайды. Шанақтың бір бүйіріне қолға ұстайтын тұтқасы қайыстан өріп тағылады. Дабылды саусақпен немесе арнайы жасалатын басы жұмыр шағын таяқшамен ұрып ойнайды. Даусы – терінің жұқа немесе қалыңдығына, терінің қатты немесе орташа керілуіне және арнайы жасалған қорапта сақталуына байланысты болып келеді. Дабылдың шанағы тал, қайың, тораңғы секілді иілуге көнетін ағаштардан жасалады.
Жорық дабылы – үлкен етіп жасалады. Жалпы шеңбер аумағы – 3 метр 40 см, биігі – 1 метр болып келеді. Оның екі жағын қаптауға екі түйенің терісі жұмсалады. Даусы 3-4 шақырым жерге дейін естіледі, даусы күркіреген күндей зор. Мұны дайындау дабылды жасау әдіс-тәсілімен бірдей.`
    },
    images: ['/instruments/kazakh/percussion/dabyl/1.png','/instruments/kazakh/percussion/dabyl/2.png'],
    category: 'percussion'
  },
  {
    id: 'dauylpaz',
    name: {
      en: 'Dauylpaz',
      ru: 'Дауылпаз',
      kk: 'Дауылпаз'
    },
    description: {
      en: `Dauylpaz

Dauylpaz is an ancient percussion musical instrument of the Kazakh people. In the old days it was used during military campaigns, and afterwards in hunting.
Now two types of the instrument are known:
The first type - restored by ethnographic descriptions. The second is advanced for orchestras. This view was commissioned by the famous master craftsman K. Kasymov, composer A. Zhubanov, conductor Sh. Kazhigaliev in 1933-1934. In the improved look, special pegs are installed on the sides to regulate skin tension and pitch. 
In everyday life, this instrument was used to signal and during the hunt. Mention of the instrument can be found in poems and works by Murat Monkeuly, Akan seri Koramsauly, Shangerei Bukeev, Khusain Takezhanov and others. The ethnographic works of the last century also contain notes about dauylpaz. One of them says: “Tolumbas is a primitive view of the timpani”.
Dauylpaz, previously used primarily in hunting, was first used as a percussion musical instrument in the orchestra of Kazakh folk instruments named after Kurmangazy in 1934; was introduced by Akhmet Zhubanov. Its further improvement is closely related to the orchestra.

Making the instrument
Dauylpaz is a part of the group of percussion instruments of the Kazakh people. As it was played by striking and so that the instrument was durable, it was made of hard wood - maple, pine, birch.
Making an instrument is very hard work. The body is made of round wood, coreless. On the surface of the dry tanned skin. It has a belt for fixing the instrument on the neck or shoulder, also small hammers. The hull of the dauylpaz is decorated with bones, various stones and ornaments. Dauylpaz was used to signal the beginning and end of the Kazakh national games “Kyz kuu”, “Arkan tartu”, “Kazaksha kures” and others instead of dabyl.`,
      ru: `Дауылпаз
Дауылпаз – древний ударный музыкальный инструмент казахского народа. В старину его использовали во время военных походов, а после и в охоте.
Ныне известно два вида инструмента:
Первый вид – восстановленный по этнографическим описаниям. Второй – усовершенствованный для оркестров. Данный вид был сделан по заказу известного мастера ремесленника К. Касымова, композитора А. Жубанова, дирижёра Ш. Кажыгалиева в 1933-1934 гг. У усовершенствованного вида по бокам установлены специальные колки для регулирования натяжения кожи и высоту звука. У старых видов таких частей не имелось.
В быту этот инструмент использовали для подачи сигнала и во время охоты. Упоминания об инструменте встречаются в поэмах и произведениях Мурата Монкеулы, Акан серы Корамсаулы, Шангерея Букеева, Хусаина Такежанова и других. В этнографических трудах прошлого столетию также имеются заметки о дауылпаз. В одной из них говорится: «Толумбас – примитивный вид литавры».
Ранее применяемый в основном на охоте дауылпаз был впервые использован в качестве ударного музыкального инструмента в оркестре казахских народных инструментов имени Курмангазы в 1934 г и ввел его изветсный дирижер, академик Ахмет Жубанов. Дальнейшее его совершенствование тесно связано с оркестром.

Изготовление инструмента 
Дауылпаз входит в состав ударных инструментов казахского народа. Поскольку на нём играли ударяя, чтобы инструмент был выносливым, делали его из твёрдых пород деревьев – клёна, сосны, берёзы.
Изготовление инструмента очень кропотливая работа. Корпус инструмента делают из круглого леса, очищенной от сердцевины. На поверхность натягивают сухую выделанную кожу. Имеет ремень для закрепления инструмента на шее или плече, также небольшие молоточки. Корпус дауылпаза украшают костью, разными камнями и орнаментами. Дауылпаз использовали для подачи сигнала о начале и завершении казахских национальных игр «кыз куу», «аркан тарту», «казакша курес» и других вместо дабыла. `,
      kk: `Дауылпаз

Дауылпаз – қазақтың ұрып ойналатын көне саз аспабы. Ертеректе бұл аспап соғыс құралы ретінде айбар беріп, қыр көрсету үшін қолданған. Бертін келе дауылпазды аңшылық пен құсбегілікке де пайдаланатын болған.
Қазіргі таңда дауылпаздың екі түрі белгілі:
Оның бірі – этнографиялық сипаттамасы бойынша қалпына келтірілген түрі. Ал екіншісі – үлкен оркестрлер үшін жетілдіріп жасалған үлгісі. Ол 1933–34 жж. шамасында белгілі қолөнер шебері Қ.Қасымов, композитор А.Жұбанов, дирижер Ш.Қажығалиевтердің ұсыныстары бойынша жасалды. Жетілдірілген дауылпаздың жан-жағында терісін босатып не керіп тұратын, дыбысын жоғарылату немесе төмендету үшін жасалған арнаулы құлақтары бар. Ежелгі дауылпазда бұл бөлшектер болмаған. 
Халықтың тұрмысында бұл аспаптардың екеуі де дабыл қағып, сигнал беру үшін пайданылған. Олардың аңға шыққанда да көп пайдасы тиіп отырған. Дауылпаздың халық тұрмысында кеңінен пайданылғанын біздер Мұрат Мөңкеұлының, Ақан сері Қорамсаұлының, Шәңгерей Бөкеевтің, Хұсайын Тәкежановтың дастандарынан, басқа да көптеген ақындардың өлең-жырларынан көреміз. Дауылпаз өткен ғасырда жарияланған этнографиялық еңбектерде де жиі ұшырасады. Солардың бірінде: «Толумбас – литавраның қарадүрсін бір түрі» делінген.
Бұрынғы заманда негізінен аңшылықта қолданылған дауылпаз 1934 жылы тұңғыш рет дирижер, академик Ахмет Жұбановтың енгізуімен Құрманғазы атындағы қазақтың халық аспаптары оркестрінде ұрып ойналатын музыкалық аспап ретінде пайданылды. Аспаптың одан әрі жетілдірілуі осы оркестрмен байланысты болды.

Аспаптың жасалу технологиясы
Дауылпаз – қазақ ұрмалы аспаптарының қатарына кіреді. Оны ұрып қана қолданғандықтан, кез келген күшке шыдас беру үшін тұрпаты қатты үйеңкі, қарағай, қайың секілді ағаштардан тұтас ойып жасаған.
Дауылпаздың жасалу әдісі күрделі. Дауылпаздың шапаты – өзегі алынған сырты жұмыр бітеу ағаштан ойып жасалған. Беті әбден иленіп, кеңкей шыңылтыр терімен қапталады. Жайға байлап немесе мойынға, иыққа іліп алып жүруге арналған аспалы бауы мен ұрып ойнайтын шағын таяқшасы болады. Дауылпаздың шанағының сыртын мүйізбен, түрлі тастармен, ою-өрнекпен безендіріп, сәндеп жасайды. Аспапты ұлттық ойындарымыз «қыз қуу», «арқан тарту», «қазақша күрес» т.б. ойындарымыздың басталғаны мен аяқталғанын аңғарту үшін де дабыл орнына пайдаланған. `
    },
    images: ['/instruments/kazakh/percussion/dauylpaz/1.png'],
    category: 'percussion'
  },
  {
    id: 'shyndauyl',
    name: {
      en: 'Shyndauyl',
      ru: 'Шындауыл',
      kk: 'Шыңдауыл'
    },
    description: {
      en: `Shyndauyl

Shyndauyl is a percussion musical instrument. It is one of the types of dauylpaz. The size of shyndauyl is different. In the old days, hunters used shyndauyl. Nowadays, the improved shyndauyl is found in the composition of the folk orchestras and ensembles.
According to the academician of the Academy of Sciences of the Kazakh SSR A.Kh. Margulan, shyndauyl – one of the types of dauylpaz. On the application in everyday life the academician writes: “Basically, the dauylpaz was used in hunting with hunter birds, and shyndauyl had a military front line, was used during a driven hunt”.

Making the instrument
It is made of brass; the leather membrane is tighten on the one hand; from the bottom a ring for a dressing made of colored threads is attached. The metal case is decorated with ornaments. A performer hold the instrument at the side with a belt. The instrument has a kind of powerful sound and coloring.`,
      ru: `Шындауыл

Шындауыл – ударный музыкальный инструмент. Он один из видов дауылпаза. Размер шындауыла бывает разным. В старину шындауыл использовали охотники. Ныне усовершенствованный шындауыл встречается в составе народных оркестров и ансамблей.
По сведениям академика АН Казахской ССР А.Х. Маргулана, шындауыл – один из разновидностей дауылпаза. О применении в быту академик пишет: «В основном, дауылпаз использовался на охоте с ловчими птицами, а шындауыл – имел военно-парадную черту, применялся во время загонной охоты». 

  Изготовление инструмента
Делается из латуни, с одной стороны натягивают кожаную мембрану, снизу крепят кольцо для повязки из разноцветных нитей. Металлический корпус украшают орнаментами. Исполнитель держит  инструмент сбоку ремнём. Инструмент обладает своеобразным мощным звуком и окраской.`,
      kk: `Шыңдауыл

Шыңдауыл – ұрмалы музыкалық аспап. Шыңдауыл дауылпаздың бір түрі. 
Шыңдауыл көлемі жағынан әр түрлі болып келеді. Ертеректе шыңдауылды аңшылар пайдаланған. Қазіргі кезде шыңдауылдың жетілдіріліп жасалған түрі халық оркестрлері мен ансамбльдерде қолданылады.
Дауылпаз бен шыңдауыл қазақтардың ұрып ойналатын өзге аспаптарынан көп кейінірек қолданылудан қалған. 
Қазақ ССР-і Ғылым академиясының академигі Ә. Марғұлан шыңдауыл дауылпаздың бір түрі болып табылады деп,  тұрмыста қалай қолданылатыны жайында былай жазады: «Дауылпаз көбінесе қаршығамен аңға шыққанда қолданылса, ал шыңдауыл – әскери-парадтық сипат алып, аңдарды көптеп үйіріп, қаумалап аулау кезінде пайданылған».

Аспаптың жасалу технологиясы
Шыңдауылдың шанағы металдан жасалып, шанағының бір жағы көнмен қапталады, ал оның астыңғы жағында түрлі түсті жіптен тоқылған бау өткізетін шығыршығы болады. Металдан жасалған шанағы ою-өрнекпен безендіріледі. Шыңдауыл аспабын бүйір жағына бекітілген қайыстан ұстап тұрып, көн теріні ұрып ойнайтын болған. Шыңдауылдың өзіне тән дыбыс күші, бояуы бар.`
    },
    images: ['/instruments/kazakh/percussion/shyndauyl/1.png'],
    category: 'percussion'
  },
  {
    id: 'dangyra',
    name: {
      en: 'Dangyra',
      ru: 'Дангыра',
      kk: 'Даңғыра'
    },
    description: {
      en: `Dangyra

Dangyra is an ancient percussion-noisemaker instrument with a loud sound. This is round ring is skinned on one side, and rings and pendants are attached on the inside. Dangyra is an integral part of shamanistic traditions.
There are several similar instruments with dangyra. For example, among  the Chuvash – khangrma, the Altai and Kalmyks – dungurma, the Kirghiz and Tuvans – dungur, the Uzbeks – doira, at the Uigurs – dap.
The article “Shamanism and Shamans” fully describes what kind of sound dangyra makes with metal pendants. From the article: “Attached from the inside, the rusty ten pendants make a loud sound so much that the blow and the tenor of the shaman cannot be heard. When the sound of iron objects attached to the clothes of a shaman joined the sounds of a tambourine and pendants, a person fell into unconsciousness and muffled in the ears – this is the state the shaman needs”.`,
      ru: `Дангыра

Дангыра – древний казахский ударно-шумовой инструмент с громким звуком. Это круглое кольцо обтянутое с одной стороны кожей, а изнутри прикреплены кольца и подвески. Дангыра является неотъемлемой частью шаманских традиций.
Есть несколько схожих инструментов с дангырой. Например, у чувашей – хангрма, у алтайцев и калмыков – дунгурма, у киргиз и тувинцев – дунгур, у узбеков – дойра, у уйгур – дап.
В статье «Шаманизм и шаманы» полностью описывается, какой издаёт звук дангыра с металлическими подвесками. Из статьи: «Прикреплённые изнутри ржавые десять подвесок настолько сильно издают громкий звук, что не слышно и удара, и тенор шамана. Когда к звукам бубна и подвесок присоединялись звон железных предметов, прикреплённых к одежде шаман, человек впадал в беспамятство и в ушах закладывает – это то состояние нужное шаману».
  `,
      kk: `Даңғыра 
Даңғыра – қазақтың көне ұрмалы-сылдырмақты, қатты дыбысты музыкалық аспабы. Бұл бір жағы терімен қапталған, ішкі жағынан темір алқалар сақиналар мен сылдырмалар ілінген дөңгелек шығыршық. Даңғыра шамандық әдет-ғұрыптардың бөлінбес белгілемесі болып табылды.
Даңғыраның ұлттық ағайындас түрі көптеген халықтарда болған. Мысалы, чуваштар өздерінің мұндай аспабын – хангрма, алтайлықтар мен қалмақтар – дунгурма, қырғыздар мен тувалықтар – дунгур, өзбектер – дойра, ұйғырлар – дап деп атаған.
«Шамандық пен шамандар» деген мақалада металл сылдырмақтары бар даңғыраның даусы қалай шығатыны толық баяндалып жазылған. «Бубеннің ішіне жиекке айналдыра ілінген тот басқан он сылдырмақ, – делінген мақалада, – салдыр-гүлдір, қаңғыр-күңгір етіп, бубенге сартылдай соғылған дауысты да, сондай-ақ шаманның тенор үнін де естіртпей тастайды. Бубеннің және ондағы сылдырмақтардың даусы шаманның шекпеніне тұс-тұстан салпылдата ілінген түрлі темір-терсектердің шылдырына қосылғанда адамның басы мәңгіріп, екі құлағы тұнып қалады, шаманға керегі де осы».`
    },
    images: ['/instruments/kazakh/percussion/dangyra/1.png','/instruments/kazakh/percussion/dangyra/2.png'],
    category: 'percussion'
  },
  {
    id: 'kepshik',
    name: {
      en: 'Kepshik',
      ru: 'Кепшик',
      kk: 'Кепшік'
    },
    description: {
      en: `Kepshik

Kepshik is an ancient percussion musical instrument of the Kazakh people. Late refined views are made from round wood rings. 

Making the instrument
A puffy skin is attached with raw meat on the round wooden hull. After drying, the skin is stretched to the brim. Inside the tool is hollow, only on one side skin is stretched. Unlike dangyra – iron coins are not attached inside. The sound of the instrument is blatant, loud. Playing an instrument requires mobility and dexterity. Previously, girls and women used kepshik for domestic purposes to clean the crops. After it was began to use for accompanying dance, and shamans to accompany their songs during treatment. The use of a kepshik as a percussion musical instrument began with shamanism. Ancient samples of an instrument common to all Turkic peoples are kept in some museums of the country. Related to kepshik Uzbeks' instrument is called doira, among the Uigurs – dap, among Turks – tabla. Art critic B. Sarybaev was the first to revive forgotten musical instruments, voiced them and classified them into a drum group. `,
      ru: `Кепшик
Кепшик – древний ударный музыкальный инструмент казахского народа. Поздние усовершенствованные виды делают из круглого кольца дерева.

Изготовление инструмента
На круглый деревянный корпус крепят сыромятиной невыдубленную шкуру. После высыхания кожи её натягивают до краёв. Внутри инструмент полый, только с одной стороны натягивается кожа. Отличие от дангыры – внутри не крепятся железные монетки. Звук инструмента крикливый, зычный. Игра на инструменте требует подвижности и ловкости пальцев рук. Раньше девушки и женщины использовали кепшик в бытовых целях для чистки зерновых культур. После стали применять для аккомпанирования танцам, а шаманы для сопровождения своих песен во время лечения. Применение кепшика как ударного музыкального инструмента началось с камлания шаманов. Древние образцы общего для всех тюркоязычных народов инструмента хранятся в некоторых музеях страны. Родственные кепшику инструменты у узбеков называется – дойра, у уйгуров – дап, у турков – табла. Искусствовед Б. Сарыбаев был первым, кто возродил забытые музыкальные инструменты, озвучил их и классифицировал в группу ударных. `,
      kk: `Кепшік
Кепшік – қазақ халқының көне ұрмалы аспабы. Кепшікті тұтас ағаштан шауып жасаған. Кейінгі жетілдірілген түрлері тегенге ұқсас – дөңгелек шеңбер ағаш.
Кепшікте ойнау саусақ буындарының ептілігі мен икемділігін қажет етеді. Ертеде Кепшікті қыз-келіншектер бидай суырып, сұлы ұшырып, тары тазалау үшін тұрмыстық мақсатта қолданып келген. Кейін келе оны би ырғақтарын сүйемелдеуге, ал бақсы-балгерлер зікір салып, ауруларға ем жасағанда өз әуендерін сүйемелдеуге қолданатын болған. Музыкалық мақсат үшін соқпалы құрал ретінде пайдалану ісі осы бақсылардың өз дауыстарын сүйемелдеп зікір салу әрекетінен туындаған. Түркі тектес халықтардың барлығына ортақ бұл аспаптың көне нұсқалары еліміздің бірқатар мұражайларында сақталып отыр. Кепшіктің тектес түрі өзбектерде – дойра, ұйғырларда – дап, түріктерде – табла деп аталады. Ұмытылған көне аспаптарды қалпына келтіріп, алғаш дыбыстаған, ұрмалы аспаптар тобына жатқызған – аспаптанушы Б.Сарыбаев.

Аспаптың жасалу технологиясы
иіліп жасалған ағаш шеңберге иленбеген мал терісін айналдыра қайыс баумен байлап бекітеді. Тері әбден кепкен соң шеңбер кенересіне тартып қаптайды. Кепшіктің іші қуыс, бір жағы ғана көн терімен қапталады. Даңғыра аспабынан айырмашылығы шанағының ішіне темір теңгешелер ілінбейді. Дыбысы шаңқылдаған ащы. `
    },
    images: ['/instruments/kazakh/percussion/kepshik/1.png'],
    category: 'percussion'
  },
  {
    id: 'kos_dunkildek',
    name: {
      en: 'Kos dunkildek',
      ru: 'Кос дункилдек',
      kk: 'Қос дүңкілдек'
    },
    description: {
      en: `Kos dunkildek

Kos dunkildek is a percussion musical instrument of the Kazakh people. It is one of the complex structure instruments. 
The history of the instrument that the Kazakhs call “kos dunkildek”, the Uzbeks “kos naorga”, is common to the above named peoples. For example, the traveler of the last century V. Krestovsky left the following information about the instrument in his ethnographic works: “... After the conquest of Iran and Turan, Alexander the Great gathered 400 scientists and ordered to invent an instrument, the sound of which can be heard at a distance of several kilometers. Scientists have invented such an instrument and called it “kos dunkildek”. On the body, made in the form of a cauldron from ceramics, the skins of several roe deer were stretched. When it was hit with wooden hammers, the sound was heard from far away. The peculiarity of the instrument – when it was struck, the word “Iskander” was clearly heard. 

Making the instrument
The body inside is hollow, the calf skin is stretched. Masters on one side stretches thin, on the other side thicker skin. When they are hit, two different sounds are made. This method is designed to extract different sounds. The body is made of solid varieties of wood: birch, oak, pine. The core providing an echo is inserted. The instrument can be played in any position: horizontally, on the knees, on the neck.`,
      ru: `Кос дункилдек

Кос дункилдек – ударный музыкальный инструмент казахского народа. Один из инструментов со сложным строением. 
История инструмента, что у казахов называется «кос дункилдек», у узбеков «кос наорга», общая для вышеназванных народов. Например, путешественник прошлого века В. Крестовский оставил следующие сведения об инструменте в своих этнографических трудах: «… После завоевания Иран и Турана Александр Македонский собрал 400 ученых и приказал придумать инструмент, звук которого можно услышать на расстоянии нескольких километров. Ученые придумали такой инструмент и назвали «кос дункилдек». На корпус, сделанный в форме казана из керамики, натягивали шкуры нескольких косулей. Когда его ударяли деревянными молоточками, звук слышали из далека. Особенность инструмента – когда его ударяли, было чётко слышно слово «Искандер». 

Изготовление инструмента
Корпус внутри полый, натягивается шкура телёнка. Мастера с одной стороны натягивает тонкую, на другую сторону более толстую кожу. Если ударять по ним, то издаётся два разных звука. Этот метод предназначен для извлечения разных звуков. Корпус делают из твердых сортов дерева: берёзы, дуба, сосны. Вставляется сердцевина, обеспечивающая отзвук. Играют на инструменте в любом положении: горизонтально, на коленях, на шее.`,
      kk: `Қос дүңкілдек

Қос дүңкілдек – қазақ халқының соқпалы-шулы музыкалық аспабы. Қос дүңкілдек – сипаты мен жасалу әдіс-тәсілі жағынан күрделі аспаптың бірі. Екі шанақтан тұратын бұл аспап жай ғана дүңкілдек деп те аталады.
Қазақтар қос дүңкілдек, өзбектер «кос» деп аталатын соқпалы аспап тарихы екі елге де ортақ. Мәселен, өткен ғасырлардағы жиһангез-саяхатшылардың бірі В. Крестовский этнографиялық осы аспапқа байланысты мынадай деректер қалдырған: «...Александр (Ескендір Зұлқарнайын) Иран мен Тұран өлкесін жаулап алған кезде 400 ғалымды жинап алып дауысы бірнеше шақырым жерге дейін естілетін аспап ойлап табуды бұйырады. Мұндай аспап жасалып, оған «қос дүңкілдек» деген атау беріледі. Қос шанағы қазанға ұқсас етіп қыштан құйылған алып аспаптың беті бірнеше еліктің терісімен қапталған. Оны ағаштан жасалған бірнеше ұрғымен дүңкілдете соққанда аспап дауысы мен гуілі алысқа естілетін болған. Аспаптың ерекшелігі сол, оны соғып ойнағанда одан «Ескендір», «Искандер» деген сөз анық естілетін болған.

Аспаптың жасалу технологиясы
Шанақ іштері қуыс, беті бұзау терісімен қапталады. Шеберлер оның бір бетін жұқа терімен, екіншісін қалыңдау етіп керіп жасайды. Екі бетіндегі керілген тері-жарғақты ұрса, екеуінен екі түрлі дүңкілдеген үн шығады. Бұл әдіс аспаптан екі түрлі дыбыс беруге лайықталған. Шанақтары қайың, емен, қарағай секілді қатты ағаштардан жасалады. Дыбыс жаңғырығын қамтамасыз етіп отыратын өзегі салынады. Дүңкілдекті көлденең жатқызып та, тізеге қойып та, мойынға салып та ойнай береді.`
    },
    images: ['/instruments/kazakh/percussion/kos_dunkildek/1.png'],
    category: 'percussion'
  },
  {
    id: 'shyn',
    name: {
      en: 'Shyn',
      ru: 'Шын',
      kk: 'Шың'
    },
    description: {
      en: `Shyn

Shyn is an ancient musical instrument of the Kazakh people. If you hit a wooden mallet, it makes a ringing sound, and from this the name came. It is a percussion-noisemaker metal instrument with a slightly convex surface. It is used to scare away wild animals hunters with birds of prey.
The instrument is made of brass and bronze, decorated with various ornaments or fringe. Sometimes gold and silver edges are attached.
As part of orchestras and ensembles of folk instruments, it is used to simulate the sounds of natural phenomena.`,
      ru: `Шын

Шын – древний музыкальный инструмент казахского народа. Если ударять деревянным молоточком, издаёт звонкий звук, от этого и произошло название. Шын представляет собой ударно-шумовой металлический инструмент с чуть выпуклой поверхностью. Его применяют для отпугивания диких животных охотники с ловчими птицами.
Инструмент делают из латуни и бронзы, украшают различными орнаментами или бахрому. Иногда крепят края из золота и серебра.
В составе оркестров и ансамблей народных инструментов используется для имитации звуков природных явлений.   `,
      kk: `Шың

Шың – қазақтың көне музыка аспабы. Ол аты затына сай, ағаш қаққышпен соққанда шыңылдаған дыбыс шығаратын, беті сәл дөңес дөңгелек металл тәрізді ұрмалы-шулы аспап. Шыңды саятшылар түз тағыларын үркітуге қолданады.
Шыңның үні қазақ сарбаздарының сигналды белгісі болған. Сол арқылы жаудың келе жатқанын немесе өзге де ханның хабарын, жауға шабуыл секілді іс-әрекеттерді көп сөздің орнына ұқтырған. Сонымен қатар, шың табиғат құбылыстарының, ондағы жан-жануар, хайуанаттардың үнін айнытпай келтіре алады. Сол үні арқылы аңшылықпен айналысқан қауым ел аң-құстарды шақырып аулап, қорегін тапқан.
Шың аспабының жасалуы өте талғампаздықты талап еткенмен, оны ойнау аса қиын емес. Шың аспабының үні жаңғырықты болып келеді. Аспаптың да көлемі біркелкі болып келеді. Оның ең үлкенінің диаметрі 40-50 сантиметрді құраса, кіші 10-15 см аралығында жасалады.

Аспаптың жасалу технологиясы
Аспапты жез, қола секілді металдардан жасайды. Сыртын пайдалану қажетіне қарай түрлі ою-өрнектер жүргізіп безендіреді. Кейді күміс, алтын жиектер жапсырады. Сәнін әрлей түсу үшін шашақ тағып та қояды.`
    },
    images: ['/instruments/kazakh/percussion/shyn/1.png','/instruments/kazakh/percussion/shyn/2.png'],
    category: 'percussion'
  },
  {
    id: 'sazsyrnai',
    name: {
      en: 'Sazsyrnai',
      ru: 'Сазсырнай',
      kk: 'Сазсырнай'
    },
    description: {
      en: `Sazsyrnai

Sazsyrnai is a widespread and often used wind musical instrument after sybyzgy. During the excavations of the expedition by history teacher Asantai Alimov, various vessels, copper jugs, and clay tools with egg size and holes were found together with students from Temir station in the Turkestan region. Local elders specified it as sazsyrnai - a musical instrument made of clay. After this instrument passed into the hands of musicologist and scientist Bolat Sarybaev.
The scale, structure, and methods of manufacturing this instrument were determined by scientific researchers B. Sarybaev, K. Karabdalov.
Some musical instruments of the Kazakh people went a long thorny path, before they returned to the stage, they were deprived of the attention of specialists. Among wind instruments, sazsyrnai is an improved form that has melody, natural and pleasant sound. Now it is widely used in various orchestras and ensembles. Sazsyrnay harmoniously combines with other types of musical instruments.

Making the instrument
Nowadays, it is in demand among performers for its improved types with sound holes in 5-6 places, a circle circumference of 15-16 cm, a length of 10-12 cm. The instrument is made of broken clay and give a certain shape. After firing in a heated oven. Modern craftsmen decorate the instrument with various ornaments and cover with glaze.`,
      ru: `Сазсырнай

Сазсырнай – широко распространённый и часто используемый духовой музыкальный инструмент после сыбызгы. Во время раскопок экспедиции учителя истории Асантая Алимова совместно с учениками из станции Темир ныне Туркестанской области были найдены различные сосуды, медные кувшины, также глиняный инструмент с размером яйца и с отверстиями. Местные старцы уточнили его как сазсырнай – музыкальный инструмент из глины. После данный инструмент перешёл в руки музыковеда-ученого Болата Сарыбаева.
Звукоряд, строение, методы изготовления этого инструмента определили ученые-исследователи Б. Сарыбаев, К. Карабдалов.
Некоторые музыкальные инструменты казахского народа прошли долгий тернистый путь, прежде чем вернулись на сцену, они были обделены вниманием специалистов. Среди духовых инструментов сазсырнай является усовершенствованным видом, который обладает мелодичностью, природным и приятным на слух звучанием. Ныне широко используется в различных оркестрах и ансамблях. Сазсырнай гармонично сочетается с другими видами музыкальных инструментов.   

Изготовление инструмента
Ныне пользуется спросом среди исполнителей его усовершенствованные виды со звуковыми отверстиями в 5-6 местах, окружностью круга 15-16 см, длиной 10-12 см. Инструмент делают из битой глины и придают определенную форму. После обжигают в нагретой печи. Современные мастера украшают инструмент разными орнаментами и покрывают глазурью.
  `,
      kk: `Сазсырнай

Сазсырнай – үрмелі музыка аспаптарының сыбызғыдан кейінгі халық ішінде кең тараған, арасында қолданыста бар музыкалық аспап. Оңтүстік Қазақстан, Темір станциясының тарих пәнінің мұғалімі Асантай Әлімовтің оқушылармен болған экспедициясының қазба жұмысында көптеген құмыралар, мыс құмандармен бірге көлемі құстың жұмыртқасындай іші қуыс, қос ойығы бар қыштан жасалған аспап та тауып алады. Табылған дүниені жергілікті жердің көнекөз қарияларына көрсеткенде мұның саздан жасалған музыкалық аспап – сазсырнай екендігі айқындалды. Кейін бұл аспап музыка зерттеуші-ғалым Болат Сарыбаевтың қолына тиеді. 
Бұл аспаптың дыбыс қатарын, құрылысын, жасалу әдіс-тәсілін Б. Сарыбаев, Қ. Қарабдалов секілді зерттеуші-ғалымдар анықтады. 
Халқымыздың жекелеген көне саз аспаптарының сахнаға қайта оралу жолы бұралаң болып, ұзақ уақыт музыка мамандарының назарынан тыс қалып келді. Үрлеп ойналатын аспаптар тобының ішінде дыбыстық сапасының әуезділігі, қоюлығы және құлаққа жағымдылығымен тыңдаушысына берер әсері мол көне сазсырнай аспабы фольклорлық аспаптар ішіндегі өзіндік орны бар көне аспаптар ішіндегі жетілген түрі. Осы күндері академиялық халық аспапты оркестрінен бастап, көптеген ансамбльдерде қолданылып жүр. Сазсырнай үні жалғыз-аяқ орындалудан толыққанды терең үнге ауысып, қою да мағыналы бояуымен өзге аспаптармен жарасымды үйлесімділік тапты.   

Аспаптың жасалу технологиясы
Қазіргі кезде оның 5-6 жерден дыбыс ойықтары салынып, шеңбер аумағы 15-16 см, жалпы ұзындығы 10-12 см етіп дамыта жасалған нұсқалары орындаушылар арасында сұранысқа ие. Аспап сапалы саздан әбден иі қандырып иленген соң белгілі бір қалыпқа келтіріп кептіреді. Кейін белгілі температурада қыздырылған пешке салып күйдіріледі. Қазіргі кезде шеберлер оның сыртына ою-өрнек салып, сілтілік металдар ерітіндісі (глазурь) жағып жасайды.`
    },
    images: ['/instruments/kazakh/wind/sazsyrnai/1.png','/instruments/kazakh/wind/sazsyrnai/2.png','/instruments/kazakh/wind/sazsyrnai/3.png'],
    category: 'wind'
  },
  {
    id: 'uskirik',
    name: {
      en: 'Uskirik',
      ru: 'Ускирик',
      kk: 'Үскірік'
    },
    description: {
      en: `Uskirik

Uskirik is one of the ancient instruments of the Kazakh people. It belongs to the number of wind instruments along with sazsyrnai, kernei, zhelbuaz, sybyzgy. The name was due to the similarity of the sound with a piercing wind in the harsh winter. In some regions it is known as “uildek”.
The number of sound holes depends on the skill of the musician. Unfortunately, works performed on the uskirik have not survived to our days.`,
      ru: `Ускирик 

Ускирик – один из древних инструментов казахского народа. Относится к числу духовых инструментов наряду с сазсырнай, керней, желбуаз, сыбызгы. Название произошло из-за схожести звучания с пронизывающим ветром в суровую зиму. В некоторых регионах известен как «уульдек».
Количество звуковых отверстий зависит от мастерства музыканта. К сожалению, произведения, исполненные на ускирик, не сохранились до наших дней.
   `,
      kk: `Үскірік

Үскірік – қазақ халқының ертеден келе жатқан музыкалық аспаптарының бірі. Ол сазсырнай, керней, желбуаз, сыбызғы сияқты қазақтың ұлттық үрмелі аспаптарының қатарына жатады. Дауысы қаһарлы қыс мезгіліндегі ызғарлы желдің дыбысына ұқсағандықтан, оны ел арасында «үскірік» деп атап кеткен. Кейбір аймақтарда аспап «уілдек» деген атпен таралған.
Ойығының саны орындаушының ойнау шеберлігімен байланысты болған. Ойықтың біреуін үрлеп, қалғандарынан саусақтарымен түрлі дыбыс шығарып отырған. Бұл аспаптың өте шебер орындаушылары болған. Үскірікте тартылған күйлер сақталмаған.`
    },
    images: ['/instruments/kazakh/wind/uskirik/1.png','/instruments/kazakh/wind/uskirik/2.png'],
    category: 'wind'
  },
  {
    id: 'zhelbuaz',
    name: {
      en: 'Zhelbuaz',
      ru: 'Желбуаз',
      kk: 'Желбуаз'
    },
    description: {
      en: `Zhelbuaz

Zhelbuaz is one of the ancient wind musical instruments of the Kazakh people. The name zhelbuaz is a modern variation.
Al-Farabi in his work notes the wind instrument called “Kipchak” resembling a flute. Researcher P.Yudin in the ethnographic research “Kirghiz (Kazakhs)” gives interesting information about a musical instrument with a spectacular sound: “... two short reed tubes are inserted into an inflated belly. The sound emanating from these tubes is similar to the sound of “bagpipes” (This is indicated in the book by B.Sarybaev). In the travel records of the traveler Wen Sun, who was among the Turks of the Orkhon coast during the rule of the Tan dynasty, the instrument is mentioned. He writes: “At the funeral, the Turks sing mourning songs and weep, scratching faces. At this time, a man on a horse plays an instrument out of a leather bag with two tubes attached to it. From the sound becomes even sadder. The Turks call this instrument “tsushe”. Sinologist G.Karlgern, historian A.N. Bernshtam defined this hieroglyph as “tsushe” and restored as “kipchak”.
For several centuries, the Kazakhs have called this instrument “zhelbuaz”. The instrument described in the writings of al-Farabi, Wen Sun, P.Yudin was probably called “kipchak” in the period of the Turks.
Zhelbuaz was used as a mourning, lamenting instrument. For good reason in antiquity it was called kipchak. This is due to the first consumers. But not a single source that has come down to our days says that the Kipchaks used it. It is obvious that the Turks applied it first. This is understandable in appearance, the instrument looks like an animal. The instrument similar to zhelbuaz is now used in the orchestras of the Belarusians and the French. It's a shame that there is practically no information about it. It is known that at one time the zhelbuaz was accompanied by the “Otyrar sazy” orchestra under the direction of N.Tlendiev.
The zelbuaz mentioned in the writings of the second world teacher al-Farabi does not receive due attention. Such instruments are now very rare. The reason for this is the lack of a professional musician who plays the zhelbuaz, as well as the insufficiency of real masters.

Making the instrument
The structure of the instrument is complex. It is made of whole skin, attach two or more sound tubes. Each tube has a separate plug. For convenience in carrying strengthen leather belt. The total length of the instrument is 65-70 cm, width 32-35 cm. Instruments related zhelbuaz are found in many neighboring nations. The Poles, the Bulgarians, the Estonians and the Russians call the instrument “bagpipes”, while the Belarusians and the Ukrainians call the “dudu”. The word “dudu” is not in the lexicon of either the Belarusians or the Ukrainians. This word is not of Slavic origin. In Turkic and Mongolian languages means “song, melody”. Because this instrument was common in Europe after the entry of Slavic peoples into the empire of Juchi Khan (1240). This means that the instrument originates from the grooves.
Some researchers describe the appearance of the instrument as a box of a plant, others say that it looks like a decapitated sheep or goat, or a leather wineskin. Based on this, it is possible that the instrument was made in various forms. Among the people, it is also called “zhelkabyz”, “mes kobyz”, “zhelsaz”, “zhel kobyz” and etc. These names are associated with the appearance of the instrument.
Although the zhelbuaz rarely found in everyday life, but left a mark on history.`,
      ru: `Желбуаз

Желбуаз – один из древних духовых музыкальных инструментов казахского народа. Название желбуаз – это современная вариация.
Аль-Фараби в своем труде отмечает духовой инструмент под названием «кипчак» похожий на флейту. Исследователь П. Юдин в этнографическом исследовании «Киргизы (казахи)» приводит интересные сведения о музыкальном инструменте с эффектным звучанием: «...две коротких тростниковых трубочек вставляют в надутое брюхо. Звук, исходящий из этих трубочек, схож со звучанием «волынки». В путевых записях путешественника Вэн Сунь, который был среди тюрков побережья Орхон в период правления династии Тань, упоминается инструмент. Он пишет: «На похоронах тюрки поют траурные песни и плачут, царапаю лицо. В это время человек на коне играет на инструменте из кожаного мешка с двумя привязанными к нему трубками. От звука становится еще грустнее. Этот инструмент тюрки называют «цюше». Синолог Г. Карлгерн, историк А.Н. Бернштам определили этот иероглиф как «цюше» и восстановили как «кипчак».
Казахи этот инструмент на протяжении нескольких веков называют «желбуаз». Инструмент, описываемый в трудах аль-Фараби, Вэн Суня, П. Юдина возможно назывался «кипчак» в период тюрков.
Желбуаз использовали как траурный, оплакивающий инструмент. Неспроста в древности он назывался кипчаком. Это связано с первыми потребителями. Но ни в одном источнике, дошедшем до наших дней, не говорится, что его использовали кипчаки. Очевидно, что первыми его применяли тюрки. Это понятно по внешнему виду, инструмент похож на животное. Похожий на желбуаз инструмент и ныне используется в оркестрах белорусов, французов. Досадно, что сведений о нём практически нет. Известно, что в своё время желбуаз аккомпанировал в составе оркестра «Отырар сазы» под руководством Н. Тлендиева.
Упомянутый в трудах второго учителя мира аль-Фараби желбуаз не получает должного внимания. Такие инструменты сейчас встречаются очень редко. Причиной тому служат отсутствие профессионального музыканта, играющего на желбуаз, также недостаточность настоящих мастеров.

Изготовление инструмента 
Строение инструмента сложный. Делают его из цельной кожи, прикрепляют два или более звуковых трубочек. У каждой трубочки есть отдельная затычка. Для удобства в переноске крепят кожаный ремень. Общая длина инструмента 65-70 см, ширина 32-35 см.
Родственные желбуаз инструменты встречаются у многих соседних народов. У поляков, болгар, эстонцев и русских инструмент называется «волынка», у белорусов и украинцев – «дуду». Слово «дуду» не имеется в лексиконе ни у белорусов, ни у украинцев. Это слово не славянского происхождения. На тюркском и монгольском языках означает «песню, мелодию». Потому что этот инструмент был распространён в Европе после вхождения славянских народов в состав империи Джучи хана (1240 г.). Это означает, что инструмент берёт начало с желбуаз.
Одни исследователи описывают внешний вид инструмента как коробочку растения, другие говорят, что он похож на обезглавленную овцу или козу, или на кожаный бурдюк. Исходя из этого возможно, что инструмент делали различных форм. Среди народа его также называют «желкабыз», «мес кобыз», «желсаз», «жел кобыз» и др. эти наименования связаны с внешним видом инструмента.
Желбуаз хоть встречается редко в  быту, но оставил свой след в истории.`,
      kk: `Желбуаз
Желбуаз – қазақ халқының көне үрмелі музыкалық аспаптарының бірі. Желбуаз аспабының бұл аты – жаңа замандағы жаңарған атауы.
Флейталық үрлеп ойналатын «қыпшақ» деп аталатын саз аспабы туралы әл-Фараби өз еңбегінде атап өткен екен. Ал П. Юдин деген орыс зерттеушісі «Қырғыздар (қазақтар)» атты этнографиялық зерттеуінде әсерлі әуен шығаратын саз аспабы туралы қызықты ақпарат қалдырған. Онда: «…қысқа екі қамыс түтікше (най) үрлеген қарынның аузына қосып байланады. Сол най түтікшеден шығатын үн «волынканың» үніне ұқсас» деген дерек қалдырған. Таң дәуірінде Орхон түріктердің ортасында болған Вэн Сунь деген адамның қолжазбаларында мына бір дерек келтірілген: «Өлген адамның мүрдесін шығарғанда түріктер бетін жыртып қайғылы ән салып (жоқтау айтып) жылайды. Осы кезде ат үстінде тұрған адам тері дорбаның аузына екі түтікше байлаған саз аспабын ойнап тұрады. Оның себезгілете әуез шығарып, күрсіне боздаған қайғылы үні адамның қабырғасын қайыстырып, не бір аянышты сезімге жетелейді. Бұл аспапты түріктер «цюше» деп атайды екен». Синолог Г.Карлгерн, тарихшы А.Н.Бернштамдар  бұл атауды «қыпшақ» деп жаңғыртқан.
Ғасырлар бойы қазақ халқы қолданып келген бұл аспапты «желбуаз» деп те атайды. Әл-Фараби сөз еткен, Вэн Сунь, П. Юдиндер сипаттамасын жасаған осы желбуаз аспабын Көк түрік дәуірінде «қыпшақ» деп атаған болуы мүмкін.
Желбуаз – аза тұту, жоқтау аспабы ретінде де қолданылған. Желбуаздың кезінде қыпшақ деген атау алғаны тегін емес. Бұл оны алғаш жасап қолданушылар қыпшақтармен де байланысты. Бүгінге жеткен ешбір дереккөзде желбуазды ең алғаш қыпшақтар пайдаланды деген ақпарат жоқ. Аспаптың алғашқы қолданушылары түріктер екені анық. Оны аспаптың сыртқы түлікті елестететін тұрқынан көре алуға болады. Қазақтың желбуазына ұқсаған аспапты белорусь, француз халқы өздерінің ұлттық оркестрлерінде бүгінде қолданып келеді. Ең өкініштісі бұл киелі аспаптың желдей ұшып оркестрлер түгілі халқымыздағы дерегі жоқтың қасында жүргендігі. Кезінде желбуаз аспабын Н. Тілендиевтің жетелеуімен «Отырар сазы» оркестрінің құрамында сүйемелдік жасағаны белгілі.
Әлемдегі екінші ұстаз әл-Фарабидің еңбектерінен орын алған бұл аспап бүгінде өзінің биігіне шыға алмай келеді. Бұған сол аспапта ойнайтын маманның жоқтығы және осы аспаптың әуезін жатық етіп жасайтын нағыз шеберлердің аздығы да үлкен себеп.
Желбуаз тектес өзге де үрмелі саз аспаптары шетелдік көрші халықтарда да бар. Ол поляк, болгар, эстон, орыс халықтарында «волынка» деп аталса, белорусь, украин халықтарында «дуду» деп аталады. Жалпы «дуду» деген атау белорустарда да, украиндардың да лексиконында жоқ сөз. Бұл сөз түрік, моңғол тілдерінде «ән, әуен» деген мағына береді. Өйткені, Жошы империясының құрамына славян халықтары кіргеннен (1240 ж.) кейін ғана бұл аспап Еуропаға тараған болуы мүмкін.

Аспаптың жасалу технологиясы
Желбуаздың жасалуы өте күрделі. Аспапты тұтас көн теріден жасайды, негізгі дыбыс шығаратын екі немесе бірнеше түтігі болады. Әр түтікшенің өз тығыны болады. Мойынға асып жүру үшін ыңғайлы болу үшін қайыс бау тағады. Желбуаздың жалпы ұзындығы 65-70 см, ені 32-35 см болып келеді.
Желбуаздың сыртқы пішінін бір зерттеуші қауашақ секілді десе, енді бірі басы кесілген қой немесе ешкіге, енді бір жазбада меске ұқсайды дейді. Бұған қарағанда желбуаз аспабы бірнеше түрлі үлгіде жасалған секілді. Желбуазды ел арасында «желқабыз», «мес қобыз», «желсаз», «жел қобыз», т.б. секілді атаулары бар. Бұл оның сыртқы тұрқына да байланысты пайда болған атаулар секілді.
Желбуаз – халық арасына сирек танылғанмен, тарихта өзіндік қолтаңбасын қалдырған аспап. `
    },
    images: ['/instruments/kazakh/wind/zhelbuaz/1.png'],
    category: 'wind'
  },
  {
    id: 'kernei',
    name: {
      en: 'Kernei',
      ru: 'Керней',
      kk: 'Керней'
    },
    description: {
      en: `Kernei

Kernei is a wind musical instrument of the Kazakh people. The kernei was used in military campaigns, as a signaling tool and for the ceremonies of welcome of the Khan and military leaders. Scientifically proven grounds that the kernei was popular among the people, first cited by renowned art critic B. Sarybaev.
For the first time the instrument kernei was used by composer N. Tlendiev in the film “Kyz Zhibek”. Sonorous kernei is used as a military musical instrument among the peoples of Central Asia. Although different samples of kernei each people have similarities, but the names and methods of manufacture are differ. Uzbeks have karnai, Uigurs have surnai, nai.
In some legends and epics the instrument kernei is referred. But in the ethnographic works of the XVIII-XIX centuries no information about kernei. Kernai in the old days, like syrnai, were used in wartime to give a signal. For example, it is described in the poem “Kambar batyr”.
Kobyz player Zhappas Kalambaev in his memoirs mentions about kernei: “An old man lived in our village. In the evening, at a small hill near the aul, he played on kernei and called for residents. After they all talked for a long time. Until the morning, they could tell myths and legends, epics and fairy tales”.
The musician plays the instrument, moving in different directions, the sound is produced by blowing. Kernei as an ethnographic instrument is rarely found.

Making the instrument
Kernei was made in different forms. Large wood is divided exactly in half, cleaned from the core. After smoothing irregularities they are glued, inserted into the camel's esophagus. The sound holes aren’t made on the instrument. Outside the rounded body is decorated with horsehair fringe. Fringe attached to the special raw cheese.`,
      ru: `Керней

Керней – духовой музыкальный инструмент казахского народа. Использовали керней в военных походах, как сигнальный инструмент и для церемоний приветствия хана и военачальников. Научно доказанные основания, что керней был популярен среди народа, впервые приводит известный искусствовед Б. Сарыбаев.
Впервые инструмент керней использовал композитор Н. Тлендиев в фильме «Кыз Жибек». Звучный керней применяется как военный музыкальный инструмент у народов Средней Азии. Хоть различные образцы кернея у каждого народа внешне имеют сходство, но названия и методы изготовления отличаются. У узбеков – карнай, у уйгуров – сурнай, най.
В некоторых легендах и эпосах упоминается инструмент керней. Но в этнографических трудах XVIII-XIX вв. нет сведений о керней. Керней в старину использовали в военное время, для подачи сигнала. Например, так его описывают в поэме «Камбар батыр».
Кобызист Жаппас Каламбаев в своих воспоминаниях упоминает о керней: «Жил в нашем ауле один старик. Вечером у небольшого холма рядом с аулом он играл на керней и звал жителей. После они все долго беседовали. До утра могли рассказывать мифы и легенды, эпосы и сказки».
Музыкант играет на инструменте, двигаясь в разные стороны, путем вдувания. Керней как этнографический инструмент встречается редко. 

Изготовление инструмента
Керней делали разных форм. Крупный лес делят ровно пополам, очищают от сердцевины. После сглаживания неровностей их склеивают и обтягивают пищеводом верблюда. На инструменте не делают звуковых отверстий. Округлый корпус снаружи украшают бахромой из конских волос. Бахрома крепится к специальной сыромятине. `,
      kk: `Керней

Керней – қазақтың үрмелі музыкалық аспабы. Кернейді әскери жорықтарда атой шақырушы, хабар беруші ретінде, сондай-ақ, хандар мен әскербасыларын күтіп алу салтанаты кезінде қолданған. Керней аспабының ел арасында болғандығын белгілі аспаптанушы Б.Сарыбаев ең алғаш ғылыми негізде дәлелдеді.
Ең алғаш керней аспабын композитор И.Тілендиев «Қыз Жібек» фильмінде қолданды. Дыбысы зор керней Орта Азия халықтарында әскери музыкалық аспап ретінде тартылады. Әр халықтағы кернейлердің үлгі-нұсқасы ұқсас болғанымен аталуы, жасалуы бөлек. Өзбектерде – карнай, ұйғырларда – сурнай, най деп те аталады.
Халқымыздың кейбір аңыз-жырларында үрлеп ойналатын көне аспап – кернейдің аты аталады. XVIII–XIX ғғ. этнографиялық еңбектерде керней жайындағы мәлімет әзірше табылмай отыр. Бұрынғы заманда кернейді жорықтарда дабыл қағу үшін қолданған екен. Ертедегі дастандардың бірі «Қамбар батырда» да кездеседі.
Қылқобызшы Жаппас Қаламбаев ауылдан керней көргендігі жайында айта келіп былай дейді: «Ауылда бір қария бар еді, оның кәсібі күн батып кеш болысымен-ақ ауылдың іргесіндегі шағын төбенің басына шығады да кернейін аңырата тартып адамдарды өзіне шақырады. Содан кейін бір әңгіме-дүкен құрады. Небір аңыз-жырлар, қызық-қызық ертегілер таң атқанша таусылмайтын».
Музыкант оны жан-жағына бұрылып, қозғалып тұрып үрлеу арқылы дыбысын шығарып ойнайды. Керней этнографиялық аспап ретінде сирек кездеседі.

Аспаптың жасалу технологиясы
Керней әр түрлі көлемде жасалады. Жұмыр ағашты дәл ортасынан қақ бөліп, өзегі алынып, іші тегістеліп тазартылады. Тегістеліп болған соң, біріне-бірі желімделіп, сырты түйенің өңешімен қапталады, дыбыс ойықтары салынбайды. Жұмырланып келген шанағынын сырты жылқы қылынан жасалған шашақпен әшекейленеді. Шашақ арнайы жасалған қайысқа бекітіледі.`
    },
    images: ['/instruments/kazakh/wind/kernei/1.png'],
    category: 'wind'
  },
  {
    id: 'sybyzgy',
    name: {
      en: 'Sybyzgy',
      ru: 'Сыбызгы',
      kk: 'Сыбызғы'
    },
    description: {
      en: `Sybyzgy

Sybyzgy is a wind musical instrument of the Kazakh people. It is made from reeds and wood. It has a pleasant natural sound, the sound is soft. A hemp and jaunt were used for the manufacture. Hemp grows on the northern slope of a high mountain, a sisymbrium on the northern slope of the Altai, Tien Shan, where the deers live. Also, the instrument was made of wood without branches, from which unines are made, separated and cleaned from the core, then connected back.
In the ethnographic works of the XVIII-XIX centuries the instrument sybyzgy is often found. This fact proves that it was widely used in the everyday life of the people. In the book of I. Andreev published in 1795 there is information about sybyzgy. Also, the instrument is mentioned in the records of the famous researcher A. Levshin, as a widespread instrument. Ethnographer I. Lipaev writes: “You can see sybyzgy in the hands of Kyrgyz musicians of Semey region. It is made from willow bars or from another tree. To the edge, perhaps for beauty, they tied a thin rope. Inside the tube is well cleaned. There are three sound holes, during the playing they are in turn covered with a finger ”.
Sybyzgy was the favorite instrument of the shepherds. 
Ch. Valikhanov, A. Zhubanov, B. Sarybaev, A. Zataevich, B. Erzakovich, V. Belyaev, T. Bekkhozhina, A. Mukhambetova, S. Yelemanova, U. Bekenov, A. Raimybergenov, S. Amanova, also well-known writers M. Auezov, T. Alimkulov, A. Seydimbek, M. Magauin, S. Akataev wrote about the tradition of playing sybyzgy in their writings.

Making the instrument
Making it does not take a long time: an experienced master will make it in 10-15 minutes. To do this, cut a reed length of 500-700 mm, cut out holes in three or four places. To make the air flow easier, the end was sharp on one side. For a better sound, the instrument was wetted before the playing.
The traditional pattern is made from kurai. The performers often made their own instruments themselves, and each contributed their own technique, patterns. Use ripened and straight chickens. Some performers measure their eyes, others use a span and cut off a kurai 7-8 in length. This method is often used by Bashkir kuraiists.

Legend about the sybyzgy
Most wind instruments of the sybyzgy family made of cane can be found in many legends of the Turkic peoples. For example, the appearance of the Kazakh sybyzgy, the Bashkir kurai, the Turkmen tuiduk is associated with the legend of King Alexander the Great.
King Alexander the Great had two horns on his head. But no one knew about this. Because he chopped off the heads of everyone who cut his hair. The explanation for this is that in one dream, Alexander dreamed “If, in addition to his hairdresser, someone else finds out about his two horns, then he will lose his life”. After this, he executed everyone who dealt with his hair. After that, there was no good master left who could cut the Great King. Once the turn came to the son of his beloved man. Then Alexander ordered his subordinates to send to a distant, uninhabited place and leave him there. The boy searched for a long way back home. But one day next to the cliff he heard a sound from the reed. When he got to the sound, it became clear that the sound was coming from the reed in which the worm made a hole.
Every time a wind blows through a hole, the sound of a cliff breaks. The boy crossed the cliff and began to blow into the reed, then even more beautiful music came out. Having made sybyzgy from reed, he sang a melody. The hunters, having heard the music, found the boy and safely drove the child to their homeland. The boy told this story to the people. The mystery of the Great King was revealed; on the same day, Alexander the Great took leave of by this world.`,
      ru: `Сыбызгы 

Сыбызгы – духовой музыкальный инструмент казахского народа. Делали его из тростника и дерева. Обладает приятным природным звучанием, звук мягкий. Для изготовления использовали коноплю, гулявник. Конопля растет на северном склоне горы, гулявник на северном склоне Алтая, Тянь-Шаня, где водятся олени. Также инструмент делали из дерева без веток, из которого делают унины, разделяли и очищали от сердцевины, затем соединяли обратно. 
В этнографических трудах XVIII-XIX вв. инструмент сыбызгы часто встречается. Данный факт доказывает, что он был широко использован в быту народа. В выпущенной книге И. Андреева в 1795 г. есть сведения о сыбызгы. Также инструмент упоминается и в записях известного исследователя А. Левшина, как широко распространённый инструмент. Этнограф И. Липаев пишет: «Можно увидеть сыбызгы в руках киргизских музыкантов Семейской области. Делают его из прутков ивы или из другого дерева. К краю, возможно для красоты, привязывали тонкую веревку. Внутри трубка хорошо очищена. Звуковых отверстий три, во время игры их по очереди закрывают пальцем».
Сыбызгы был любимым инструментом пастухов. 
О традиции игры на сыбызгы в своих трудах писали Ч. Валиханов, А. Жубанов, Б. Сарыбаев, А. Затаевич, Б. Ерзакович, В. Беляев, Т. Бекхожина, А. Мухамбетова, С. Елеманова, У. Бекенов, А. Райымбергенов, С. Аманова, также известные писатели М. Ауезов, Т. Алимкулов, А. Сейдимбек, М. Магауин, С. Акатаев.

Изготовление инструмента 
Изготовление его не занимает долгого времени: опытный мастер смастерит его за 10-15 минут. Для этого срезают тростник длиной 500-700 мм, вырезают отверстия в трёх-четырёх местах. Чтобы поток воздуха легче распространялся, конец с одной стороны делали острым. Для лучшего звучания инструмент перед игрой смачивали.
Традиционный образец сыбызгы делают из курая. Исполнители зачастую сами мастерили себе инструмент, и каждый вносил свою технику, закономерности. Используют созревшие и прямые кураи. Некоторые исполнители мерят глазами, другие используют пядь и срезают курай длиной 7-8 пядей. Этот метод часто применяют башкирские кураисты. 

Легенда о сыбызгы
Большинство духовых инструментов семейства сыбызгы изготовленных из тростника можно найти во многих легендах тюркских народов. Например, о появлении казахского сыбызгы, башкирского курая, туркменского туюйдука связывают с легендой об Александре Македонском. 
У Александра Великого на голове было два рога. Но об этом никто не знал. Потому что он отрубал головы всем, кто стриг его волосы. Объяснение этому, что Александр в одном сне ему приснилось «Если кроме его парикмахера еще кто-то узнает о его двух рогах, то он лишиться своей жизни». После это он казнил, всех кто имел дело с его волосами. После этого не осталось хорошо мастера, кто бы мог постричь Великого корля. Однажды очередь дошла к сыну его любимого человека. Тогда Александр приказал своим подчиненным отправить в далекое безлюдное место и оставить его там. Мальчик долго искал обратный путь домой. Но в один день рядом с утесом он услышал звук из тростника. Когда он добрался до звука, то стало ясно, что звук издаётся из тростника, в котором червь сделал дыру. 
Каждый раз, когда ветер дует сквозь дыру, звук утеса ломается. Мальчик пересек утес и начал дуть в тростник, тогда еще более прекрасная музыка вышла. Сделав из тростника сыбызгы, он спел мелодию. Охотники услышав музыку нашли мальчика и благополучно повезли ребенка на родину.  Мальчик рассказал эту историю народу. Тайна Великого короля была раскрыта, в тот же день Александр Македонский навсегда распрощался этим миром.  `,
      kk: `Сыбызғы

Сыбызғы – қазақ халқының төл аспаптары қобыз, домбырамен қатар аталып сан ғасырлардан бері келе жатқан ұлттық үрмелі музыкалық аспабы. 
Сыбызғы аспабы ертеден қазақ халқының қайғысы мен қуанышын бөліскен жан серігі болғаны. Сыбызғы арқылы қазақ халқы өзінің арманын, мұң-мүддесін, сан-қилы өмір жолында болған оқиғаларын, наразылығын, биікке құлаш ұшқан қиялдарын, өмірге деген сүйіспеншілігін күй қылып тартып ұрпақтан-ұрпаққа жалғастырып асыл мұра ретінде қалдырып отырған. Сондай-ақ, сыбызғы бақташылардың ең сүйікті аспабы болған.
Сыбызғы көшпенді ел өміріне байланысты, негізінен қурайдан және ағаштан ойып жасалған. Сыбызғының дыбыстық бояуы кең, үні жұмсақ, құбылмалы дыбыстары мол, жағымды қоңыр үнді. Аспапты жасауға қара қурай, сары қурай және өгіз қурай деп аталатын қурайлар пайданылған. Қара қурай – биік таудың теріскейінде, сары қурай – Алтай, Тянь-Шань сықылды таулардың теріскей бетінде, бұғы жүретін  мекендерде өседі. Бұлардан басқа, уық жасайтын бұтақсыз талды кептіріп, ортасын қақ жарып, ішіндегі өзегін ойып алып, қайта қиюластыру арқылы да жасалған.
Б.з.д. 80-жылы ғұндардың тұтқыны болған қытайдың Хань династиясының елшісі: «Күн батып кеткеннен кейін ғұндардың сыбызғысының (Ху цзя.) үні зарлап, жылқылары кісінеп, сиырлары мөңіреп тыныштық бермей, ұйқы қашырады. («Алдыңғы Хань-наме. LІV»,1894.)» деп жазған. 
XVIII–XIX ғғ. Этнографиялық еңбектерде сыбызғы жиі ауызға алынады. Ал мұның өзі сыбызғының сол кезде халық тұрмысында кеңінен қолданылғанына дәлел. Сыбызғы жайында И. Андреевтің 1795 жылы жарық көрген кітабында айтылады. ХІХ ғасырдың екінші жартысына шейін сыбызғының барлық жерге кең тарағаны жайында белгілі зерттеуші А. Левшиннің жазбаларында да бар. Этнограф И. Липаевтың мәлімдеуі: «Семей облысындағы қырғыз музыканттардың қолынан сыбызғыны көресің, – деп жазды ол. – Сыбызғы тал шыбықтан немесе басқа да сондай ағаштан жасалады. Ұш жағына, тегінде сәндік үшін болса керек, терінің жұп-жұқа қыртысымен керілген жіңішке арқан жіп байланады. Түтіктің іші жақсылап ойылып, асқан шеберлікпен өңделген. Дыбыс шығаратын тесік үшеу ғана, ойнаған кезде саусақтың ұшымен ашылып жабылады».
Сыбызғышылық дәстүр республикамыздың шығыс және батыс өңірлерінде кең таралған.
Ш.Уалиханов, А.Жұбанов, Б.Сарыбаев, А.Затаевич, Б.Ерзакович, В.Беляев, Т.Бекхожина, А.Мұхамбетова, С.Елеманова, У.Бекенов, А.Райымбергенов пен С.Аманова, т.б. ғалымдар мен өнер зерттеушілердің еңбектерінде  және М.Әуезов, Т.Әлімқұлов, А.Сейдімбек, М.Мағауин, С.Ақатаев сынды көрнекті жазушылардың қаламынан туған әдеби аңыз-әңгімелер, тарихи деректерде сыбызғы өнері жайында біршама мағлұматтар беріледі.

Аспаптың жасалу технологиясы
Аспапты жасау көп уақыт алмайды: тәжірибелі шебер 10–15 минутта жасап алады. Бұл үшін ұзындығы 500–700 мм, қурай кесіп алынады, оның үш-төрт жерін тесіп ояды. Бірінші ойық түтіктің ұшынан алақанның еніндей жерден ойылады. Келесі ойықтың аралығы одан гөрі тарлау алынады, яғни бір-бірінен төрт елі қашықтықта болады. Алайда мұндай өлшем дыбыстын, анық шығуына жеткізбейді, сондықтан күйші ойнаған кезде дыбыстың тазалығын ерінді қимылдату арқылы реттеп отырған. Қурайдан немесе ағаштан жасалған. Ауа толқыны жақсырақ таралу үшін түтіктің кең үшын сүйірлеген. Даусы жақсы шығатын болуы үшін ойнар алдында сыбызғының ішін сулайды.

Сыбызғы аспабы жайлы аңыз
Сыбызғы тектес үрмелі аспаптардың көпшілігі қурайдан, қамыстан жасалатыны жайында түркі тілдес халықтардың аңыз-ертегілерінен көп кездестіруге болады. Мысалы, қазақтың сыбызғысы, башқұрттың қурайы, түркіменнің түйдігі сияқты аспаптарының пайда болуы жөнінде ортақ аңыз болуын Ескендір патшамен байланыстырып, былай деп сыр шертеді:
Әйгілі Ескендір патшаның басында қос мүйізі болса керек. Бірақ мұңы тірі жан білмейді екен. Себебі шашын алдырған адамның басын шаптырып тастап отырыпты. Мұның мәнісі, Ескендірдің түсінде «Егер шашыңды алушыдан басқа адам мүйізіңнің бар екенін білсе сол күні жарық дүниемен қоштасасың деп» – деп аян беріпті дейді. Осыдан кейін-ақ сақтық жасап, шашын алған адамның басын кесе берген деседі. Осылайша Ескендірдің төңірегінде қолының ебі барлары сирейді. Бір күні шаш алу кезегі патшаның жақсы көретін жақынының баласына келіпті. Сонда Ескендір сол жақынның баласына шашын алдыратын болғаннан кейін, уәзірлеріне: «Мына баланы йен далаға көзін байлап апарып тастаңдар, ит-құсқа жем болып немесе йен далада адасып өлсін» депті. Уәзірлер айтқан бұйрықты бұлжытпай орындап, сол күні-ақ баланың көзін байлап йен далаға апарып тастапты. Бала йен далада жол таба алмай қаңғырып жүргеніне біраз уақыт өтіпті. Күндердің күнінде баланың құлағына алыстан үзіліп-үзіліп шыққан дыбыс естіліпті. Дыбыс шыққан жаққа келсе судың жағасында өсіп тұрған қурайды өсімдік құрты тесіп кетіпті. Сол қурайдың тесігіне жел соғып үрлеген сайын, үзіліп-үзіліп қурайдың дыбысы шығып тұр екен. Бала қурайды кесіп алып өзі үрлеп қараса, одан да сазды әдемі әуен шығыпты. Қурайдан сыбызғы жасап алып сазды әуендерін тартып, елін-жерін іздеп жүрген баланы, аңшылар сыбызғының даусын естіп келіп тауып алыпты. Аңшылар баланы аман-есен еліне алып барып, бала басынан өткен хикаяны халыққа жариялап айтып беріпті. Құпиясы жария болған Ескендір жарық дүниемен сол күні қоштасыпты, баланың сыбызғымен тартқан сазы төрткүл дүниеге күй болып тарапты.`
    },
    images: ['/instruments/kazakh/wind/sybyzgy/1.png'],
    category: 'wind'
  },
  {
    id: 'bugyshak',
    name: {
      en: 'Bugyshak',
      ru: 'Бугышак',
      kk: 'Бұғышақ'
    },
    description: {
      en: `Bugyshak

Wind instruments made of bones and horns still exist. They are stored longer than wind instruments made of cane, kurai or wood. One of them is bugyshak. Its sound is similar to the sound of red deer and deer, so the bugyshak is used to gather animals together. Among the people, it is also called “deer attraction”, the “deer flute”. The hunters tried to tame the animals collected to the sound of the bugyshak.
Bugyshak is an ancient musical instrument. In the horns of the red deer or deer, made a notch and attached a tongue. The length is 28-30 cm. Altaians call it “abyrga”, Khakas “pyrgy”. 
There is information in which it is said that wind instruments of horns and bones of the 4th-3rd centuries BC were found near the Baikal Lake, after the X century other variations of the instrument were found and they used by herders. This shows that the instrument is associated with hunting and animal husbandry.
In the archaeological excavations of 1950-60 under the leadership of Academician Alkey Margulan in Central Kazakhstan, on the ancient settlement “Tasmola”, several types of wind instruments – sybyzgy, whistles and bugyshak, dated VII-V centuries BC were found. The discovery of these ancient instruments extremely changed the opinions that existed about wind instruments up to that time. For example, the bugyshak of a horn was hollow inside; the only sound hole was made transversely. This is the most ancient species of bugyshak, made of the horn of a deer-like animal.
Serik Nurmoldayev specializing in bugyshak about the instrument: “Basically, the Kazakh people used this instrument during military campaigns. The sound of it is very high, able to raise the warlike spirit. Therefore, the warlords in order to gather the army together used this instrument”.

Making the instrument
Bugyshak, similar to sybyzgy and having a single sound hole, is made of bone or horn. Sometimes a horn trumpet was attached to it to extract a loud sound. The difference between the instrument imitating the sounds of the red deer and deer is just the same in this. Masters give vent to fantasy – after cleaning the horns from the inside, the exterior can be decorated with various ornaments.`,
      ru: `Бугышак
Духовые инструменты, сделанные из костей и рогов, существуют и ныне. Они дольше хранятся, нежели духовые инструменты из тростника, курая или дерева. Один из них – бугышак. Звучание его схоже со звуками маралов и оленей, поэтому бугышак применяют, чтобы собрать животных вместе. Среди народа его также называют «привлекатель оленей», «флейта оленей». Собранных на звук бугышака животных охотники старались приручить.
Бугышак – древний музыкальный инструмент. В рогах марала или оленя делали выемку и прикрепляли язычок. Длина 28-30 см. Алтайцы называют его «абырга», хакасы «пыргы». 
Есть сведения, в которых говорится, что были найдены духовые инструменты из рога и костей IV-III вв. д.н.э. в районе озера Байкал, после в X в. были найдены и другие вариации инструмента и использовали их пастухи. Это показывает, что инструмент связан с охотничеством и  скотоводством.
В археологических раскопках 1950-60 гг. под руководством академика А.Х. Маргулана в Центральном Казахстане на древнем поселении «Тасмола» были найдены несколько видов духовых сыбызгы, свистулек и бугышак, датируемые VII-V вв. д.н.э. Находка этих древних инструментов крайне изменили мнения, бытовавшие о духовых инструментах до того времени. Например, бугышак из рога был внутри полым, единственное звуковое отверстие было сделано поперечно. Это – самый древний вид бугышака, сделанный из рога оленеподобного животного. 
Специализирующийся на бугышак Серик Нурмолдаев об инструменте: «В основном, этим инструментом казахский народ пользовался во время военных походов. Звук его очень высокий, способен поднять воинственный дух. Поэтому военачальники в целях собрать войско вместе применяли этот инструмент».

Изготовление инструмента
Бугышак, схожий с сыбызгы и имеющий единственное звуковое отверстие, делают из костя или рога. Иногда для извлечения громкого звука к нему прикрепляли раструб из рога. Отличие инструмента, имитирующего звуки марала, оленя как раз-таки в этом. Мастера дают волю фантазии, - после чистки рога изнутри, наружность могут украсить различными орнаментами. `,
      kk: `Бұғышақ
Үрмелі аспаптардың сүйек пен мүйізден жасалатын түрлері ертеден бері сақталған. Олар қамыс-қурай, ағаштан жасалатын үрлемелі аспаптарға қарағанда ұзақ сақталып бүгінге жетті. Соның бірі – бұғышақ. Аспаптың дыбысы марал мен бұғылардың даусына ұқсас болғандықтан жайылып жүрген маралдарды бір жерге жинау үшін қолданылған. Ел ішінде бұл аспапты «бұғы шақырғыш», «бұғы сыбызғы» деп те атайды. Оның даусы шыққан жерге жиналған маралдар мен бұғыларды аңшылар қолға үйретіп, асырайтын болған.
Бұғышақ – көне музыкалық аспап. Маралдың немесе бұғының мүйізін үңгіп, үрлейтін жағындағы ұшына дыбыс шығаратын тілше салынып жасалады. Ұзындығы 28–30 см. Алтайлықтар бұл аспапты «абырға», хакастар «пырғы» дейді.
Б.з.д. IV–III ғғ. (неолит) жататын мүйіз бен сүйектен жасалған үрмелі аспаптың Байкал өңірінен табылғаны, ал оның басқа да үлгі-нұсқалары б.з. Х ғасырында да табылып, бақташылар арасында қолданылғаны жайлы деректер кездеседі. Мұның өзі бұл аспаптың аңшылық, мал бағу кәсіптерімен тығыз байланыстылығын көрсетеді.
Академик Ә.Х. Марғұланның басшылығымен 1950-60 жылдары Орталық Қазақстан өңіріндегі «Тасмоланың» ежелгі қоныс орнына жүргізілген қазба жұмысы нәтижесінде б.з.д. VII-V ғғ. жататын, мүйіз бен сүйектен жасалған бірнеше нұсқадағы үрлемелі сыбызғылар, ысқырықтар мен бұғышақ аспаптары табылды. Көне дәуірлік бұл аспаптардың анықталуы үрлемелі аспаптар жайлы осы кезге дейін айтылып келген пікірлерге түбірімен өзгерістер әкелді. Мәселен, мүйізден жасалған бұғышақтың іші қуыс, жалғыз дыбыс ойық көлденең салынған. Бұл – бұғы секілді жануардың ұзынша болып келген мүйізінен жасалған бұғышақтың ең көне нұсқасы.
Бұғышақ аспабын меңгерген Серік Нұрмолдаев: «Бұл аспапты қазақ халқы, көбінесе, әскери жағдайда пайдаланған. Бұл аспаптың дыбысы өте жоғарғы және адамның рухын көтеретіндей. Сондықтан да әскербасылары өз әскерін жинау мақсатында және бір жерге шоғырландыру мақсатында осы аспапты қолданған» дейді.

Аспаптың жасалу технологиясы
Сыбызғыға ұқсайтын жалғыз ойығы бар бұғышақ аспабы сүйектен немесе мүйізден жасалады. Кейде дыбыс еркін, күшті шығу үшін аспаптың ұшына мүйіз түтік жалғайтын болған. Маралдың, бұғының дауысын келтіруге бейім бұғышақ үнінің өзгешелігі де осында. Жалпы, бұл аспапты шеберлер өз қиялымен түрлендіріп жасайды. Мүйіз ішін тазартып, сыртқы жағын оюлармен өрнектейді.`
    },
    images: ['/instruments/kazakh/wind/bugyshak/1.png'],
    category: 'wind'
  },
  {
    id: 'kamys_syrnai',
    name: {
      en: 'Kamys syrnai',
      ru: 'Камыс сырнай',
      kk: 'Қамыс сырнай'
    },
    description: {
      en: `Kamys syrnai

Kamys syrnai - wind instrument made from reed. A tongue is inserted inside the hollow reed and through it the instrument makes a sound. It has six sound holes. Previously, only young people were fond of playing on it. The range is one octave. The low sound is determined by the length of the reed and tongue.
Kamys syrnai has a peculiar timbre that distinguishes it from sybyzgy. Configured separately, the technique of execution and manufacturing is very complex. The sound is similar to the sounds of harmonies, despite its small size, the sound is open.
This instrument was revived by art historian Bolat Sarybayev. Now Edil Kusainov propagates.`,
      ru: `Камыс сырнай

Камыс сырнай – духовой инструмент, сделанный из камыша. Внутрь полого тростника вставлен язычок и через него инструмент издаёт звук. Имеет шесть звуковых отверстий. Раньше только молодежь увлекалась игрой на нём. Диапазон одна октава. Низкий звук определяется в зависимости от длины тростника и язычка.
Камыс сырнай обладает своеобразным тембром, отличающим его от сыбызгы. Настраивается отдельно, техника исполнения и изготовления очень сложны. Звучание похоже на звуки гармони, несмотря на небольшой размер, звук открытый.
Возродил этот инструмент искусствовед Болат Сарыбаев. Ныне пропагандирует Едиль Кусаинов.
 `,
      kk: `Қамыс сырнай

Қамыссырнай – қамыстан жасалған, үрлеп ойналатын музыка аспабы. Қамыс қуысының ішінде тілше бар. Соны үрлеу арқылы дыбыс шығады. Аспаптың әр түрлі дыбыс шығаратын алты тесігі бар. Бұрын бұл қамыс сырнайда ойнауға көбінен-көп жастар әуестенген. Диапазоны бір октава. Төменгі үні қуыстың ұзындығымен тілшеге байланысты белгіленеді.
Қамысcырнай – қазақтың үрмелі музыкалық аспабы. Өзегі қуыс қамыс түтігінен жасалған. Қамыс сырнайдың сыбызғыға ұқсамайтын өзіне тән тембрлі үні бар. Ол өз алдына жеке күйге келеді.
Қамыссырнай аспабын қалпына келтірген аспаптанушы Болат Сарыбаев. Бүгінде күйге келтіріп насихаттап жүрген Еділ Құсайынов. 

Аспаптың жасалу технологиясы
Жасалуы да, дыбысталуы да күрделі. Түтіктің іші жіңішке шыбықпен тазаланып тұрады. Ұшында ойылған тілшесі болады. Дыбыс қатары ойықтардың үн шығаратын тілшесіне байланысты, құлақ күйлері тілшеге негізделген. Үні гармонь, сырнай саздарына ұқсас, көлемі шағын болғанымен дыбысы ашық келеді.`
    },
    images: ['/instruments/kazakh/wind/kamys_syrnai/1.png','/instruments/kazakh/wind/kamys_syrnai/2.png'],
    category: 'wind'
  },
  {
    id: 'muiiz_syrnai',
    name: {
      en: 'Muiiz syrnai',
      ru: 'Муйиз сырнай',
      kk: 'Мүйіз сырнай'
    },
    description: {
      en: `Muiiz syrnai
Muiiz syrnay is an ancient wind musical instrument made of horns. It has three sound holes. The instrument has a wailing sound, used as a signaling tool.`,
      ru: `Муйиз сырнай 
Муйиз сырнай – древний духовой музыкальный инструмент из рога. Имеет три звуковых отверстия. Инструмент обладает причитающим звуком, применяли как сигнальный инструмент.  `,
      kk: `Мүйіз сырнай
Мүйіз сырнай – үш тесікті мүйізден жaсaлaты ескі үрмелі музыкалық аспап. Сыңсымaлы дыбысымен ерекшеленеді және жол сaпарлaрда хабар беруші аспап ретінде қолданылған.`
    },
    images: ['/instruments/kazakh/wind/muiiz_syrnai/1.png'],
    category: 'wind'
  },
  {
    id: 'asatayak',
    name: {
      en: 'Asatayak',
      ru: 'Асатаяк',
      kk: 'Асатаяқ'
    },
    description: {
      en: `Asatayak

Asatayak is an ancient musical instrument of the Kazakh people. Priests and shamans used it in their affairs. The shamans used it along with the sounds of kylkobyz and dangyra. The word “asa” in Uzbeks is pronounced “asoii”, in Uighurs “hassa”, and means stick. In general, the name was formed from two words, similar in meaning. When describing this tool, ethnographers used different names: “nosoh”, “wand”, “cane”, “crutch”, “flask”, “wasp”, “musa-wasp”.
The fact that asatayak was used by shamans in his affairs can be seen in ethnographic works. Famous researcher of folk music R.A. Pfenning wrote that when the shaman, during the “treatment” of a patient, was moaning in pain, he added to his voice the saber of the instrument. A research scientist first describes how a healer plays kobyz, and then about the use of asatayak as an instrument associated with ritual music. Pfenning writes: “These include the flask (asatayak — BS); bells or iron rings attached to a rectangular plate are also attached to it. With this instrument, the healer accompanies his voice”. 
Information about the instrument is found in the writings of the ethnographers-researchers G.M. Bronevsky, P. Beketov, R.A. Pfenning, Ch. Valikhanov, B. Sarybaev etc. 
Now the instrument is used in folk-ethnographic orchestras and ensembles “Otyrar sazy”, “Sazgen”, “Sherter”, etc.

Making the instrument
Depending on the manufacture, asatayak can be of a “dome”, “flat-headed”, “moon-shaped”, “snake-headed”, “oblong”, “shovel-shaped”. The instrument is played by clanging, shaking in rhythm. Asatayak is made from oak, maple, birch, and hawthorn. On the front side various pendants, rings are attached to extract sound.`,
      ru: `Асатаяк

Асатаяк – древний музыкальный инструмент казахского народа. Применяли его в своих делах жрецы и шаманы. Шаманы использовали его наряду со звуками кылкобыза и дангыры. Слово «аса» у узбеков произносится как «асоий», у уйгуров «һасса», и означает палку. Вообще, название образовалось от двух слов, схожих по значению. При описании данного инструмента этнографы использовали разные названия: «носох», «жезл», «трость», «костыль», «колба», «оса», «муса-оса».
О том, что асатаяк применяли в своих работах шаманы, можно увидеть в этнографических трудах. Известный исследователь народной музыки Р.А. Пфеннинг писал, что когда шаман во время «лечения» пациента стонал от боли, к своему голосу он добавлял бряцание инструмента. Учёный-исследователь сначала описывает как целитель играет на кобызе, а затем о применении асатаяка как инструмента, связанного с обрядовой музыкой. Пфеннинг пишет: «К ним относится и колба (асатаяк – Б.С.), к нему тоже прикрепляют колокольчики или железные кольца, подвешенные на прямоугольную дощечку. С этим инструментом целитель сопровождает свой голос».
Сведения об инструменте встречаются в трудах этнографов-исследователей Г.М. Броневского, П.Бекетова, Р.А. Пфеннинга, Ч.Валиханова,  Б.Сарыбаева и др. 
Сейчас инструмент используется в фольклорно-этнографических оркестрах и ансамблях «Отырар сазы», «Сазген», «Шертер» и др.

Изготовление инструмента
В зависимости от изготовления асатаяк бывает «купольного», «плоскоголового», «лунообразного», «змееголового», «продолговатого», «совкообразного» видов. Играют на инструменте методом бряцания, встряхивания в ритме. Делают асатаяк из дуба, клёна, берёзы, боярышника. На лицевую сторону прикрепляют различные подвески, кольца для извлечения звука. 
         `,
      kk: `Асатаяқ 
Асатаяқ – қазақ халқының ежелгі музыкалық аспабы. Асатаяқты абыздар мен бақсылар ұстанған. Бақсылар асатаяқты қылқобыз бен даңғыраның үніне қосып қолданатын болған. «Аса» деген сөз өзбектерде – «асоий», ұйғырларда – «һасса» делінеді, ол таяқ дегенді білдіреді. Тегінде, «асатаяқ» мағынасы бірдей екі сөзден қосылған болу керек. Этнографтар асатаяқты суреттеп жазған кездерінде оны «носох», «жезл», «трость», «костыль», «колба», «оса», «муса-оса» деп түрліше атаған.
Бұл аспаптың бақсылардың пайдаланғанын этнографиялық еңбектерден көреміз. Халық музыкасының белгілі зерттеушісі Р.А. Пфеннинг бақсының ауруларды «емдеп» сарнағанда көне асатаяқты өз дауысына қосып салдырлатқаны жайында жазады. Зерттеуші-ғалым әуелі бақсының қылқобызда қалай ойнағанын баяндайды, онан соң асатаяқтың салттық музыкамен тығыз байланыста ұрып ойналатын аспап ретінде қолданылғанын жазады. Пфенниг былай дейді: «Бұған колбаны да (асатаяқты – Б.С.) жатқызу керек, оның да ұшына қоңыраушылар немесе төрт бұрышты тақтайшаға бекітілген темір сақиналар ілінеді. Бұл аспаппен бақсы өз дауысын сүйемелдейді».
Асатаяқ туралы деректер Г.М. Броневский, П. Бекетов, Р.А. Пфеннинг, Ш. Уәлиханов, Б. Сарыбаев т.б. зерттеуші-этнографтардың еңбектерінде кездеседі. 
Асатаяқ қазіргі кезде «Отырар сазы», «Сазген», «Шертер» т.б. музыкалық фольклорлық-этнографиялық оркестрлер мен ансамбльдерде қолданады.

Аспаптың жасалу технологиясы
Асатаяқтың жасалу тәсіліне қарай «күмбезді», «жалпақ басты», «ай басты», «жылан басты», «сопақша», «қалақша», т.б. болып келеді. Оларды ырғақтатып, сілкіп, шайқап ойнайды. Асатаяқ емен, үйеңкі, қайың, долана секілді қатты ағаштардан жасалады. Бетіне әр түрлі шулы дыбыс беретін темір салпыншақтар, сақиналар, шығыршықтар тағылады.`
    },
    images: ['/instruments/kazakh/noisemaker/asatayak/1.png','/instruments/kazakh/noisemaker/asatayak/2.png'],
    category: 'noisemaker'
  },
  {
    id: 'konyrau',
    name: {
      en: 'Konyrau',
      ru: 'Конырау',
      kk: 'Қоңырау'
    },
    description: {
      en: `Konyrau

Konyrau is a symbol of novelty, the concept of change. This is a musical instrument often used in the past, accompanied folk songs and kui. Kobyz player, shankobyz player and shamans used it. Dombra players and kobyz players attached konyrau to the head, neck or inside the instrument. If at an appropriate time to shake the instrument, the bells ring and brighten up the music. And women shankobyz player put little bells on their fingers. The bells make a sound when they move the shankobyz tongue with a finger. Shamans attached bells to asatayak or kylkobyz, thereby applying them in the treatment. From time to time they would shake the bells to enhance the sound of the kylkobyz or their own voice.
Konyrau was often used in customs, religious traditions, holidays, and also in the life of the people. Ancestors did not always go after the cattle, they attached bells to them and allowed them to pasture. Thanks to this, the owners were confident that the predators would not attack the herd and could find them by the sound of the bell.
The konyrau is played together with other instruments; in other words, they form a duet. Women-shankobyz players women put little bells on their fingers. This method was first tried by Bolat Sarybaev in 1934 in the Kurmangazy Orchestra of Folk Instruments. Bells are now widely used in orchestras. There are improved six or seven bells.
To date, the sound of the bell continues to be used as music in the “Otyrar sazy”, “Sazgen” and etc. orchestras.

Making the instrument
This instrument was made of stainless materials: brass, bronze, nickel silver. Thanks to the tongue attached inside, the tool can show its capabilities. The pitch of the sound depends on the density of the material. Depending on the place of destination, it is decorated in different ways, for example, if they appear in front of honorary people, it is covered with gold or silver. The instrument has small sticks for the playing, it is also made of thin metal. The number of reeds is from one to several. According to external signs and structure, the instrument is called “zhylan bas” – snake-headed, “ushburyshty” – a triangular bell. The snake-headed bell is made as follows: a figure of a snake is cut out of a tree, several bells are attached and played with a brass stick.`,
      ru: `Конырау 

Конырау – символ новизны, понятие перемен. Это музыкальный инструмент, часто применяемый в прошлом, сопровождал народные песни и кюи. Использовали его кылкобызисты, шанкобызисты, также шаманы. Домбристы и кылкобызисты прикрепляли конырау к голове, грифу или внутрь инструмента. Если в подходящее время встряхнуть инструмент, колокольчики звенят и скрашивают музыку. А женщины шанкобызистки надевали на пальцы маленькие колокола. Тогда колокольчики издают звук, когда пальцем двигают язычок шанкобыза. Шаманы прикрепляли колокольчики на асатаяк или кылкобыз, тем самым применяя их в лечении. Время от времени они встряхивали колокольчики, чтобы усилить звук кылкобыза или свой собственный голос.
Конырау часто использовали в обычаях, религиозных традициях, праздниках, также и в быту народа. Предки не всегда ходили за скотом, они прикрепляли на них колокольчики и пускали на пастбище. Благодаря этому хозяева были уверенны, что на стадо не нападут хищники и могли их найти по звуку колокольчика.
На конырау играют вместе с другими инструментами, проще говоря, образуют дуэт. Женщины-шанкобызистки надевали на пальцы маленькие колокола. Этот метод впервые испробовал Болат Сарыбаев в 1934 году в оркестре народных инструментов имени Курмангазы. Колокольчики и ныне широко применяются в оркестрах. Встречаются усовершенствованные шесть-семь колоколов.
На сегодняшний день продолжается применение звука колокола как музыки в оркестрах «Отырар сазы», «Сазген» и др.     

Изготовление инструмента
Этот инструмент делали из нержавеющих материалов: латуни, бронзы, мельхиора. Благодаря прикрепленному внутрь язычку инструмент может показывать свои возможности. Высота звука зависит от плотности материала. В зависимости от места предназначения его украшают по-разному, например, если выступают перед почетными людьми, то покрывают золотом или серебром. Инструмент имеет небольшие палочки для игры, его также делают из тонкого металла. Язычок бывает от одного до нескольких. По внешним признакам и строению инструмент именуют «жылан бас» – змеиноголовый, «үшбұрышты қоңырау» – треугольный колокольчик. Змеиноголовый колокольчик делают следующим образом: из дерева вырезают образ змеи, крепят несколько колокольчиков и играют латунной палочкой.`,
      kk: `Қоңырау 

Қоңырау – жаңашылдықтың белгісі, өзгерістің ұғымы.Қоңырау – бұрын халық өнерпаздары көп қолданған музыкалық аспап. Ол халық әндері мен күйлерін сүйемелдеу үшін қолданылған. Оны қылқобызшылар, шаңқобызшылар сондай-ақ бақсылар да пайдаланып келген. Домбырашылар мен қылқобызшылар қоңырауды аспаптың басына, мойнына немесе шанақтың ішіне іліп қоятын болған. Керек кезінде музыкант аспапты сілкіп қалса болды қоңырау сыңғыр қағып қоя береді де музыканы құлпырта, түрлендіреді түседі. Ал шаңқобызда ойнаған әйелдер шағын қоңырауды саусақтарына іліп алатын болған. Мұндайда қоңыраудың даусы шаңқобыздың тілшесін тартқылап отырған саусақтың қимылына орай шығады. Бақсылар қоңырауды асатаяқ аен қылқобыздың басына ілген, сөйтіп, оны өздері емдік жораларын орындаған кезде қолданған. Олар ара-арасында қоңырауды сілкілей отырып қылқобыздың үнін немесе өзінің сарнаған даусын күшейте түсетін болған.
Қоңырау – ежелден келе жатқан сілкіп ойнайтын аспаптардың қатарынан. Оны тек жеке дара ғана емес, өзге аспаптарға қосымша үн үстеу үшін де қолданады. Қоңырауды бақсылар мен емшілер асатаяқ пен қылқобыз секілді дауалы аспаптарының басына іліп жын-шайтандарды аластаған. Қоңыраумен халық әндері мен күйлерін де жеке дара сүйемелдеген.
Қоңырау аспабы кезінде салт-жоралғы, діни әдет-ғұрыптар кезінде, мереке, мейрам шақтарында жиі қолданылған. Аспап қазақтардың күнделікті тұрмыс-тіршілігінде де кең қолданыс тапқан. Ата-бабамыз үнемі төрт түлігінің артынан жүріп отырмағандықтан олардың мойнына қоңырау іліп жайылымына жіберген. Ондағысы – қоңыраудың үніне ешқандай ит-құс секілді жыртқыш аңдар жолай алмайды, әрі малының қай жерде жүргенін қоңыраудың үнінен біліп, тауып алып отырған.
Қоңырау аспабын өзге аспаптармен селбестіре ойнайды. Бұл әдісті қазіргі тілімізде айтсақ дуэт дейміз. Сол сияқты шаңқобызшылар да саусақтарының бастарына қоңырауды іліп алып, шаңқобыз тартып ойнайды екен. Осы әдісті алғаш рет 1934 жылы Құрманғазы атындағы ұлт-аспаптар оркестріне Болат Сарыбаев қолданады. Қазіргі таңда да қоңырау кең қолданыстағы аспаптардың бірі. Қазіргі таңдағы қоңыраудың жетілдірілген түрінде тек жалғыз қоңырау емес алты-жеті қоңырауға дейін көбейгенін көреміз.
Бұл күнде қоңырау үнін музыка ретінде қолдану дәстүрін жаңғыртып, оны аспаптар ансамблінде кеңінен қолданып жүр. Аспап «Отырар сазы», «Сазген» т.б. ұлттық дәстүрді насихаттаған оркестрлерде қолданыста.

Аспаптың жасалу технологиясы
Қоңырау аспабын тот баспайтын жез, қола, мелхиор секілді металлдардан жасаған. Ерекше пішінге түскен аспаптың ішіне тілше қадаған. Осы тілшесі арқылы қоңырау өз қасиетін көрсете алған. Ал қоңырау үнінің жуан, жіңішкелігі оның металының қалың, жұқалығына байланысты болған. Аспапты пайдаланар орнына байланысты сыртын әсемдеген. Қадірменді орында пайдаланылатын қоңыраудың сыртын күмістеп немесе алтын жалата жасаған. Қоңыраудың соғып ойнар арнайы таяқшасы болған. Таяқшасы да жұқа металдан жасалған. Қоңыраудың ішінде тек жалғыз ғана тілшесі болмайды. Ол қоңыраудың үніне қарай бірнешеге дейін жетуі мүмкін. Аспаптың жасалу әдісі мен құрылысы, сыртқы тұрқына байланысты «Жылан бас», «үшбұрышты қоңырау» деп атайды. Жылан бас қоңыраудың тұрқы былайша келеді. Жыланның бейнесін ағаштан жасап алып, оған бірнеше қоңырау іліп жез таяқшамен қағып ойнайды.`
    },
    images: ['/instruments/kazakh/noisemaker/konyrau/1.png','/instruments/kazakh/noisemaker/konyrau/2.png'],
    category: 'noisemaker'
  },
  {
    id: 'tuyaktas',
    name: {
      en: 'Tuyaktas',
      ru: 'Туяктас',
      kk: 'Тұяқтас'
    },
    description: {
      en: `Tuyaktas

Tuyaktas is a primitive musical instrument in Kazakh life with a special sound. Often used in traditional ceremonies. Accompanied the lament of the bride in the farewell. The instrument makes incredible sounds: you can hear how the water flows, how the horse jumps.
Tuyaktas cannot be attributed to the number of missing or revived instruments, a kind of propaganda exists. Today, tuyaktas performs on a par with other instruments as part of orchestras and ensembles.

Making the instrument
Making the instrument is not difficult and does not require much time. It is usually made from horse hooves. Separated hooves are boiled until the shell is disengaged and the inner bone weakens. Then cleaned and dried in the sun. The finished instrument is decorated for every taste. Many performers gild, clad with silver, put various patterns. It only enhances the sound. Sometimes attached leather strap. For clarity, some masters make holes.`,
      ru: `Туяктас 

Туяктас – примитивный в казахском быту музыкальный инструмент с особым звучанием. Частенько применяли в традиционных обрядах. Аккомпанировал причитанию невесты в проводах. Инструмент издаёт невероятные звуки: можно услышать, как течет вода, как скачет конь.
Нельзя отнести туяктас к числу исчезнувших или возрожденных инструментов, – своеобразная пропаганда существует. На сегодняшний день туяктас выступает наравне с другими инструментами в составе оркестров и ансамблей.  

Изготовление инструмента не составит труда и не требует много времени. Обычно его делают из конских копыт. Отделённые копыта кипятят, пока не разъединяется оболочка и не слабеет внутренняя кость. Затем очищают и сушат на солнце. Готовый инструмент украшают на любой вкус. Многие исполнители золотят, плакируют серебром, наносят различные узоры. Это только усиливает звук. Иногда крепят кожаный ремешок. Для четкости звука некоторые мастера делают отверстия.`,
      kk: `Тұяқтас

Тұяқтас – қазақ тұрмыс салтында ежелден бар тұрпаты өте қарапайым, үні ерекше музыкалық аспап. Аспап қазақы салт-дәстүр, жоралғыларда кеңінен қолданылған. Кезінде ұзатылар қыздың сыңсу әніне сүйемел де болған. Елін қимай кетіп бара жатқан қыздың жүрек назын айқын жеткізіп, тыңдаған жанның сай-сүйегін сырқыратқан. Тұяқтас небір ғажайып үндерді туындатқан. Оның соғылуымен шауып келе жатқан аттың дүбірі келеді құлаққа. Оның сүйемелімен судың сылдырап аққан даусын ести аламыз.
Тұяқтас аспабын жоғалған немесе жаңарған аспаптардың қатарына жатқыза алмаймыз. Насихаты да жоқ емес. Аспап бүгінде ұлттық дәстүрлі ансамбльдер мен оркестрлерде бір аспаптай өнер көрсетіп, тамаша туындыларды сүйемелдеп келеді. Аспап тек аттың желісін ғана емес, бүкіл төрт түліктің тұяғының сартылы мен сыртылын, шабысы мен желіп жүргенін көз алдымызға келтіріп береді. 
Кезінде ауылдың алты ауызының сәні болған тұяқтас аспабы бүгінде жеке дара өнер көрсетпесе де, өзіндік үні бар аспап екенін біраз жерде дәлелдеп келеді.

Аспаптың жасалу технологиясы
Аспаптың жасалуы тәсілі қиындық тудырмайды. Аспапты көбіне тек жылқының тұяғынан, соның ішінде жаңадан сойылған жылқының тұяғынан жасайды. Тұяғы кесіліп алынған жылқы тұяғы ыстық суда тұяқтың ішкі сүйегі босап, сыртқы қабығы бөлектенгенше әбден қайнатылады. Қайнауы қанған тұяқтың ішін тазалап күн көзіне кептіреді. Аспаптың жасалуы өте көп уақытты да алмайды. Ойнауға дайын аспапты патша көңілді жандар қалай өрнектеп, әсемдеймін десе де өз еркілері. Көп өнерпаздар аспапқа күміс немесе алтын жалатып, жиек жасайды. Оның сыртын да қаптап жатады. Ол тұяқтастың үнін еселемесе кемітпейді. Кейде жоғалып қалмасын деген мақсатпен аспапқа қайыс бау да тағып қояды. Әр түрлі ою-өрнектер жүргізіледі. Тұяқтастың үні анық болу үшін кейбір шеберлер оның түбіне ойық та жасайды екен. `
    },
    images: ['/instruments/kazakh/noisemaker/tuyaktas/1.png'],
    category: 'noisemaker'
  },
  {
    id: 'sakpan',
    name: {
      en: 'Sakpan',
      ru: 'Сакпан',
      kk: 'Сақпан'
    },
    description: {
      en: `Sakpan

The instrument sakpan was appeared among the nomadic Kazakh people. Shepherds used it on the farm. Sometimes it is called “zyryldauyk”. Indeed, one can name zyryldauyk as the primary type of sakpan. On the basis of zyryldauyk, sakpan, shartyldauyk, zymyrauyk and others were appeared. Each instrument promoting folk art was appeared in connection with the steppe during the times of nomadic cattle breeding or farming.
Sakpan is one of the revered instruments of the Kazakh people. It is part of the shaken instruments.
The instrument is often found as part of the “Sazgen”, “Adyrna”, and “Otyrar sazy” orchestras. The sakpan was restored in the musical group by Nurgisa Tlendiev. He made his own contribution to complementing the orchestra with rare instances of musical culture.

Making the instrument
Sakpan is made from hard wood: cotoneaster, saxifrage, fruit trees. The technique of making the instrument is not complicated, but any composition accompanied by a sakpan can charm the hearing of any listener. Having its own symbol, the sakpan rose to the level of a musical instrument. Although the name of the instrument speaks for itself, but outwardly it is very primitive and simple. Length is 10-15 cm, width is only 2-3 cm. Production does not require special skill, any master can make it. Thin plates are cut out of wood and strung on a thread or wire. When they correspond to each other, a gap should remain between them. This improves sound quality.`,
      ru: `Сакпан

Инструмент сакпан появился у кочевого казахского народа. Его применяли пастухи в хозяйстве. Иногда его называют «зырылдауык». Действительно, можно назвать зырылдауык как первичный вид сакпана. На основе зырылдауык появились сакпан, шартылдауык, зымырауык и др. Каждый инструмент, пропагандирующий народное творчество, появился связанно со степью во времена кочевого скотоводства или земледелия.
Сакпан – один из почитаемых инструментов казахского народа. Он входит в состав встряхиваемых инструментов.
Инструмент часто встречается в составе оркестров «Сазген», «Адырна», «Отырар сазы». Восстановил сакпан в музыкальном коллективе – Нургиса Тлендиев. Он внёс собственный вклад в дополнении оркестра редчайшими экземплярами музыкальной культуры. 

Сакпан делают из твёрдых пород дерева: кизильника, камнеломки, плодовых деревьев. Техника изготовления инструмента не сложная, но любое произведение, сопровождаемое сакпаном, может услаждать слух любого слушателя. Имея собственный символ, сакпан поднялся до уровня музыкального инструмента. Хотя название инструмента говорит за себя, но внешне он очень примитивен и прост. Длина 10-15 см, ширина всего 2-3 см. Изготовление не требует особого мастерства, его может сделать любой мастер. Из дерева вырезают тонкие пластины и нанизывают на нить или проволоку. Когда они соответствуют друг другу, между ними должна остаться щель. Это способствует улучшению качества звука. `,
      kk: `Сақпан

Сақпан аспабы да көшпелі тұрмысты серік еткен, төрт түлікпен өмірін өткізген жайсаң қазақтың даласында пайда болған. Оны бақташылар мен малшы-шопандар мал қайыру мақсатында алғаш кәдеге жаратқан. Сақпан аспабын кейде зырылдауық деп атайды. Шындығында зырылдауық сақпанның ең алғашқы нұсқасы десе де болады. Зырылдауық арқылы сақпан, шартылдауық, зымырауық т.б. өзге де көптеген музыканың биігінен самғаған аспаптар дүниеге келді. Қазақтың дәстүрлі күй өнерін насихаттап, халыққа жеткізуде өзіндік шеберлігі мен қоңыр үні бар ұлттық аспаптардың қайсыбірін алсақ та, көшпелі мал шаруашылығында немесе егіншілік кезінде ұшы-қиыры жоқ кең атыраппен байланысты дүниеге келген.
Сақпан – қазақ үшін қастерлі аспаптардың бірі. Жалпы қазақ халқы ежелден асылын әспеттеуден танбаған халық. Сақпанның да ерекше үнін, өзіндік орнын белгілеген. Аспап сілкімелі музыкалық мұралардың қатарына кіреді.
Сақпан, жалпы сілкімелі аспаптардың көпшілігі қазір «Сазген», «Адырна», «Отырар сазы» секілді ұлттық дәстүрді насихаттаған оркестрлердің құрамында өнерін көрсетіп, сүйемелдік жасап келеді. Сақпан аспабын бүгінгі ұрпақпен қауыштырған – Нұрғиса Тілендиев еді. Қазақ сахарасын кезіп, осындай заты асыл өнер туындыларын іздеп тауып оркестрге енгізіп, қазақ музыкалық аспаптарының қатарын толықтыруға өзіндік үлесін қосқан болатын.

Аспаптың жасалу технологиясы
Сақпанды ырғай, бүк, тасжарған секілді қатты, өте шыдамды ағаштардан жасаған. Аспаптың жасалуы аса қиын да емес, бірақ оның сүйемелдеуімен орындалған кез келген күй тыңдаушысының құлақ құрышын қандырары ақиқат. Қоңыр тұрмыста күйбең тірлік кешкен қоңыр мінез қазақтың қоңыр үнді өзіндік таңбасы бар болғандықтан да сақпан аспап дәрежесіне көтерілген секілді. Аспаптың аты дардай болғанмен, оның сыртқы тұрқы өте қарапайым әрі шағын ғана. Ұзындығы бір қарыстай ғана болса, ені 2-3 қана сантиметрден құралған. Сақпан аспабын жасау үшін темірден түйін түйер аса шеберліктің қажеті де жоқ. Жұқа ағаштар кесіліп, бір жіпке я сымға тізіледі. Жұқа ағаштар бір-бірімен беттескен кезде араларында саңылау болуы керек. Бұл дыбыс жаңғырығының жақсы болуына ықпал етеді.  


         `
    },
    images: ['/instruments/kazakh/noisemaker/sakpan/1.png'],
    category: 'noisemaker'
  },
  {
    id: 'zyryldauyk',
    name: {
      en: 'Zyryldauyk',
      ru: 'Зырылдауык',
      kk: 'Зырылдауық'
    },
    description: {
      en: `Zyryldauyk

Zyryldauyk is one of the ancient musical instruments of the Kazakh people. In the old days, shepherds and cattle breeders used it to drive the flock back. Later, the types of this instrument “sakpan”, “shartyldauyk”, “zymyrauyk” became separate musical instruments. Today, these instruments are found in the compositions of the ensembles of the ancient instruments “Sazgen”, “Adyrna”, as well as in the famous orchestra “Otyrar sazy”.

Making the instrument
Making an instrument is very difficult and painstaking work, but the method of playing on it is very simple. It is used to perform the sudden sounds encountered in the compositions. 
Zyryldauyk was also a children's toy.`,
      ru: `Зырылдауык 

Зырылдауык – один из древних музыкальных инструментов казахского народа. В старину пастухи и скотоводы использовали его для загона стада обратно. Позже виды данного инструмента «сакпан», «шартылдауык», «зымырауык» стали отдельными музыкальными инструментами. Ныне эти инструменты встречаются в составе ансамблей древних инструментов «Сазген», «Адырна», а также в знаменитом оркестре «Отырар сазы». 

Изготовление инструмента
Изготовление инструмента очень сложная и кропотливая работа, но метод игры на нём очень прост. Его применяют для исполнения внезапных звуков, встречающихся в произведении. 
Зырылдауык также был детской игрушкой. `,
      kk: `Зырылдауық

Зырылдауық – қазақ халқының көне музыкалық аспаптарының бірі. Ертеде бұл аспапты малшылар мен бақташылар мал қайыру үшін қолданатын болған. Кейін зырылдауықтың «сақпан», «шартылдауық», «зымырауық» деген түрлері музыкалық аспаптарға айналды. Қазіргі кезде бұл аспаптар «Сазген», «Адырна» көне аспаптар ансамбльдері мен әйгілі «Отырар сазы» оркестрінде қолданылып жүр. 

Аспаптың жасалу технологиясы
Зырылдауық аспабының жасалу әдісі күрделі болғанымен, ойнау тәсілі өте қарапайым. Ол музыкалық шығармаларда кездесетін оқыс дыбыстарды ойнау үшін қолданылады. 
Зырылдауық әрі балалар ойыншығы болып табылады.`
    },
    images: ['/instruments/kazakh/noisemaker/zyryldauyk/1.png'],
    category: 'noisemaker'
  },
  {
    id: 'shartyldauyk',
    name: {
      en: 'Shartyldauyk',
      ru: 'Шартылдауык',
      kk: 'Шартылдауық'
    },
    description: {
      en: `Shartyldauyk

Shartyldauyk is an ancient musical instrument of the Kazakh people. The name comes from the strong sound that the instrument makes (chart-chart). This instrument was used by shepherds, and later used to accompany songs.

Making the instrument
For the manufacture of the instrument requires two raw-cloth tape with a length of 30-40 cm, width of 5-6 cm. They are stacked on top of each other and fastened with a clasp. Then an incision is made on a plank 12-14 cm long, 2-2.5 cm in diameter. The fastener is fixed on the cut, on top there is a metal tube and is attached to a previously prepared notch. Metal tube adds strength to the connection point and beauty. `,
      ru: `Шартылдауык 
Шартылдауык – древний музыкальный инструмент казахского народа. Название произошло от сильного звука, что издаёт инструмент (шарт-шарт). Данный инструмент использовали пастухи, а после применяли для сопровождения песен.

Для изготовления инструмента требуется две сыромятной ленты длиной 30-40 см, шириной 5-6 см. Их складывают слоями друг на друга и крепят застёжкой. Затем на дощечке длиной 12-14 см, диаметром 2-2,5 см делают разрез. Застежку крепят на разрез, сверху идёт металлическая трубочка и крепится к заранее приготовленной выемке. Металлическая трубочка придаёт прочности точке соединения и красоту. `,
      kk: `Шартылдауық

Шартылдауық – қазақтың көне музыкалық аспабы. Атауы «шарт–шарт» етіп дыбыс шығаратындықтан қалыптасқан. Шартылдауықты мал айналысқан қазақ халқы кеңінен пайдаланып, әнді сүйемелдеу үшін қолданған.

Аспаптың жасалу технологиясы
Шартылдауықты жасау үшін ұзындығы 30–40 см, жалпы 5–6 см болатын екі қайыс таспа тілінеді де, бір-біріне қабатталып, екі ұшы ажырап кетпес үшін металл қапсырмалармен бекітіледі. Одан кейін ұзындығы 12–14 см, дм 2–2,5 см ағаш жонылып, оған тілік жасалынады. Қапсырма жетесі тұтқадағы тілікке дәлдеп кигізіледі де, үстінен тұтқа диаметіріне сай металл түтікше кигізіліп, алдын ала тесілген тесік арқылы шегеленеді, тойтарылады. Металл түтікше қиылысқан буынға беріктік беріп, оның көркемдігін арттыра түседі. `
    },
    images: ['/instruments/kazakh/noisemaker/shartyldauyk/1.png'],
    category: 'noisemaker'
  },
  {
    id: 'dudyga',
    name: {
      en: 'Dudyga',
      ru: 'Дудыга',
      kk: 'Дудыға'
    },
    description: {
      en: `Dudyga

Dudyga is a percussion-noisemaker musical instrument of the Kazakh people. At one time, it was used by warlords and batyrs during military campaigns.
In the oral literature there are the lines: “Dudyga kagyp, syrnaiyn tartyp”, “Dudyga sіlkіp kagaiyn, Dushpanga oiran salaiyn”.

Making the instrument
Externally, the tool looks like a buckle. It consists of a long handle, octahedral oval body, oak pendants are attached from the outside tied to rawhide. The technique of manufacturing is very complicated, therefore it is rarely found in the life of the people. A tanned skin (often goat) is stretched onto a wooden case, and small rattles are fastened inside the case. Outside the case and handle also decorate, attach small pendants of oak. When the instrument is shaken, the pendants hit the leather case and it seems as if they are playing a few doubles.
     `,
      ru: `Дудыга 
Дудыга – ударно-шумовой музыкальный инструмент казахского народа. В своё время его использовали военачальники и батыры во время военных походов.
В устной литературе встречаются строки: «Дудыға қағып, сырнайын тартып», «Дудыға сілкіп қағайын, Дұшпанға ойран салайын».

Изготовление инструмента
Внешне инструмент похож на пряжку. Состоит из длинной рукояти, восьмигранного овального корпуса, снаружи прикрепляются дубовые подвески, привязанные к сыромятине. Техника изготовления очень сложная, поэтому редко встречается в быту народа. На деревянный корпус натягивается дубленая шкура (зачастую козлиная), внутрь корпуса крепятся маленькие погремушки. Снаружи корпус и рукоять также украшают, прикрепляют мелкие подвески из дуба. При встряхивании инструмента подвески ударяются о кожаный корпус и создаётся впечатление, как будто играют на нескольких дабылах.`,
      kk: `Дудыға
Дудыға – қазақтың соқпалы-шулы музыкалық аспабы. Әу баста бұл аспапты әскербасылар мен батырлар жорық кезінде ұстайтын болған.
Бұл туралы ауыз әдебиеті үлгілеріндегі: «Дудыға қағып, сырнайын тартып» немесе «Дудыға сілкіп қағайын, Дұшпанға ойран салайын», – деп келетін жыр жолдарынан аңғарылады.
«…Аспап атауы батырлардың ду-ду еткен шайқасты көрінісі мен «ду-дуға қосылды» деген ұғымнан туындаған»  дейді ақпар беруші О.Хаймолдин.

Аспаптың жасалу технологиясы
Дудығаның сырт пішіні кәдімгі ұршыққа ұқсас келеді, қолға ұстауға ыңғайлы ұзын сабы, сапқа бекітілген сегіз қырлы, күмбезді сопақша шанағы, шанақ сыртында қайысқа байланған, қатты ағаштан жасалған салпыншақ түймелері болады. Аспап шанағы малдың (көбінесе ешкі) шала иленген жұқа терісімен қапталады, шанақ ішіне ұсақ сылдырмақтар ілінеді. Сап пен шанақ сырты әшекейленіп, басына шашақ тағылады. Сілкіп ойнаған кезде тұтқасының екі жағына ілінген қаққыштары ерсілі-қарсылы керілген көнге соғылып, құдды бірнеше дабыл дүңкілдеп түрғандай дыбыс шығарады.

       `
    },
    images: ['/instruments/kazakh/noisemaker/dudyga/1.png'],
    category: 'noisemaker'
  },
  {
    id: 'tokyldak',
    name: {
      en: 'Tokyldak',
      ru: 'Токылдак',
      kk: 'Тоқылдақ'
    },
    description: {
      en: `Tokyldak

Tokyldak is a percussion musical instrument with a special sound. Like any other percussion instrument, it is made of solid wood and there are different forms depending on the application.
Tokyldak with its special sound accompanies many Kazakh compositions. For example, the “Otyrar sazy” orchestra founded by Nurgisa Tlendiev begins the kui “Ata tolgauy” with the echo of this instrument.

Making the instrument
Manufacturing technology is simple for craftsmen. The instrument, deepened on one side, at first completely ground, then dried. During drying, the sound and instrument echo are amplified. It has a special wand for the playing and a sound hole. Palm or fingers clicking on this hole can diversify and enhance the sound. The instrument is made from solid wood with a rounded end on top. The thinner the edges, the stronger the sound.`,
      ru: `Токылдак

Токылдак – ударный музыкальный инструмент с особым звуком. Как и любой другой ударный инструмент, его делают из твердых пород дерева и в зависимости области применения бывают разных форм.
Токылдак своим особенным звуком аккомпанирует многим казахским произведениям. Например, оркестр «Отырар сазы» под руководством Нургисы Тлендиева начинает кюй «Ата толғауы» отзвуком этого инструмента.       

Технология изготовления для мастеров проста. Углубленный с одной стороны инструмент сначала полностью шлифуют, затем сушат. Во время сушки звук и эхо инструмента усиливаются. Имеет специальную палочку для игры, звуковое отверстие. Ладонью или пальцами нажимая на это отверстие можно разнообразить и усилить звук. Делают инструмент из цельного дерева с округлым концом сверху. Чем тоньше края, тем сильнее звук.`,
      kk: `Тоқылдақ

Тоқылдақ – үні ерекше, жаңғырып шығатын, ұрмалы музыкалық аспап. Бір көлемді ғана емес, пайдалану мақсатына қарай аспап әр түрлі көлемде пішінін сақтай отырып, берік, қатты ағаштардан жасалады. 
Тоқылдақ өзінің ерекше үнімен көптеген күйлердің, ән-жырлардың сүйемелшісі болды. Мысалы, Нұрғиса Тілендиев ағамыздың «Отырар сазы» оркестріндегі «Ата толғауы» атты күй осы тоқылдақ аспабының жаңғырығымен басталып, ары қарай орындалып кетеді.

Аспаптың жасалу технологиясы
Тоқылдақ аспабының жасалуы аса қиын емес. Ағаштан бір жақ беті ойылған аспаптың бастапқы қалпында сырты түгел тегістеледі. Содан соң аспапты кептіріп қояды. Кепкен сайын аспаптың үні артып, жаңғырығы күшейе түседі. Аспаптың ұрып ойнайтын арнайы таяқшасы болады. Арнайы ойығы да бар. Алақанмен немесе саусақтың ұшымен сол ойықты ашып немесе жауып аспаптың үнін сан құбылтып, әсерлендіріп, жаңғырығын еселей түсуге болады. Аспапты тұтас ағаштан ойып, жоғарғы жағын доғалдау пішінмен жасайды. Тоқылдақтың ернеуі жұқа болған сайын дауысы екпінді, күшті болады. Тоқылдақ аспабын кез келген ағаштан жасай бермейді. Шеберлер арнайы ағашты тұтас жона отырып, дауысын анықтай келе аспапты талғампаздықпен жасайды. `
    },
    images: ['/instruments/kazakh/noisemaker/tokyldak/1.png','/instruments/kazakh/noisemaker/tokyldak/2.png'],
    category: 'noisemaker'
  },
  {
    id: 'muiiz_kakpa',
    name: {
      en: 'Muiiz kakpa',
      ru: 'Муйиз какпа',
      kk: 'Мүйіз қақпа'
    },
    description: {
      en: `Muiiz kakpa

Muiiz kakpa is a percussion instrument. It was made of a cow horn. Has a wooden drummer.`,
      ru: `Муйиз какпа

Муйиз какпа – ударный музыкальный инструмент. Изготовливается из коровьего рога. Имеет при себе деревянный ударник.`,
      kk: `Мүйіз қақпа

Мүйіз қақпа – ұрмалы музыкалық аспап. Сиыр мүйізінен жасалады. Ағаштан жасалған кішкене балғашығы болады.`
    },
    images: ['/instruments/kazakh/noisemaker/muiiz_kakpa/1.png'],
    category: 'noisemaker'
  },
  {
    id: 'shankobyz',
    name: {
      en: 'Shankobyz',
      ru: 'Шанкобыз',
      kk: 'Шаңқобыз'
    },
    description: {
      en: `Shankobyz

Shankobyz is an ancient musical instrument. In the center is a pointed tongue. The thread is tied to the instrument and with its help the tongue is activated and the instrument makes a sound. There are also iron samples of shankobyz. It was mostly played by women. The instrument setting depends on the length and thickness of the tongue.
Information about the instrument was found in the magazine “New Monthly Compositions” of 1795. Shankobyz was on the list of goods that nomadic Kazakhs buy in markets that opened near Semey in 1718.
At the beginning of the XIXth century scientist A.I. Levshin wrote: “While playing on the instrument, it is held between the teeth, moving a steel tongue mounted instead of strings”.
There is evidence that shankobyz in the second half of the XIXth century met in all regions of the country. For example, the Saratov merchant Zharkov, who visited the Horde (now West Kazakhstan region) in the early 1850s, in travel records, he wrote that women of this region play on shankobyz.
Shankobyz is common among Slavic and Turkic peoples. This was the reason for the long preservation of the instrument in Kazakhstan.
Formerly, shankobyz was an instrument for women and children. There are compositions to be performed on shankobyz “Kyz uzatu”, “Kyz zary”, “Kyz muny”, “Shankobyz tolgauy”.

Making the instrument
The design of the instrument is not complicated, make different sizes. Both ends are pointed, in the middle there is a tongue similar to the lyre. The end of the tongue is curved in the shape of a rectangle, it is designed to oscillate the tongue. The tongue is attached to the edges. During the playing, the cheeks serve as a resonator and amplify the sound.`,
      ru: `Шанкобыз

Шанкобыз – древний музыкальный инструмент. По центру находится остроконечный язычок. К инструменту привязывается нить и с её помощью язычок приводят в действие и инструмент издаёт звук. Существуют также железные образцы шанкобыза. На нём, в основном, играли женщины. Настройка инструмента зависит от длины и толщины язычка. 
Сведения об инструменте были найдены в журнале «Новые ежемесячные сочинения» 1795 г. Шанкобыз был в списке товаров, что покупают кочевые казахи на рынках, которые открылись вблизи Семея в 1718 г.
В начале ХIХ в. ученый А.И. Левшин писал: «Во время игры на инструменте его держат меж зубов, двигая стальной язычок, установленный вместо струн».
Есть сведения, что шанкобыз во второй половине ХIХ в. встречался во всех регионах страны. Например, саратовский торговец Жарков, посетивший Орду (ныне Западно-Казахстанская область) вначале 1850-х гг., в путевых записях писал, что женщины этого региона играют на шанкобызе.
Шанкобыз распространён у славянских и тюркоязычных народов. Это послужило причиной долгой сохранности инструмента в Казахстане.
Раньше шанкобыз был инструментом женщин и детей. Есть произведения для исполнения на шанкобызе «Қыз ұзату», «Қыз зары», «Қыз мұңы», «Шаңқобыз толғауы».

Конструкция инструмента не сложная, делают разных размеров. Оба конца заострены, посередине имеется язычок, похож на лиру. Конец язычка изогнут в форме прямоугольника, он предназначен для колебания язычка. Язычок прикреплён к краям. Во время игры щеки служат резонатором и усиливают звучание.`,
      kk: `Шаңқобыз

Шаңқобыз – бұл көне музыкалық аспап. Оның ортасында сүйір тілше болады. Шаңқобыз өңделген ағаш таспалардан жасалады. Шаңқобызға жіп байланып, сол жіпті серпіп тарту арқылы тілше тербеліске келтіріледі де, дыбыс шығады. Мұндай аспаптардың темір текшелерінен де жасалған түрлері бар. Бұл аспапта көбінде әйел адамдар ойнайтын болған. Аспапты күйге келтіру тілшенің ұзындығы мен қалыңдығына байланысты. 
Шаңқобыз жайындағы мәліметті 1795 жылы жарық көрген «Новые ежемесячные сочинения» журналынан кездестіруге болады. 1718 жылы Семейге таяу жерден ашылған сауда орнынан шаңқобыз көшпелі қазақтар сатып аталатын тауарлардың тізімінде аталған.
ХІХ ғасырдың басында ғалым А.И. Левшин былай деп жазған: «Аспапта ойнағанда оны тіске тақап тұрып, ішек орнына орнатылған болат тілшесі қозғалысқа келтіреді».
Шаңқобыз аспабы ХІХ ғасырдың екінші жартысында еліміздің әр өңірінде кездескендігі жөнінде дәлелдемелер бар. Мысалы, 1850 жылдардың басында Ордада қазіргі Орал облысы жерінде болған саратовтық саудагер Жарковтың жазбаларында батыс аудандардың әйелдері щаңқобызда ойнайтыны айтылған.
Шаңқобыз – көптеген ұлттарға тараған төл аспап: орыс, украин, татар, башқұрт, қалмақ, алтай, хакас, тува, якут, чуваш, мари, өзбек, ұйғыр, қарақалпақ, түркімен, дүңген, қырғыз халықтары арасына кеңінен тараған. Көршілес халықтарда кең тарауы оның Қазақстанда да көпке дейін сақталып келуіне себепші болған.
Ертеде шаңқобыз кішкентай балалар мен әйелдер аспабы болған. Шаңқобызға арналған «Қыз ұзату», «Қыз зары», «Қыз мұңы», «Шаңқобыз толғауы» сияқты шағын күйлер шығарылған. Шаңқобыз халық аспаптар оркестрінде, ансамбльдерде, жеке орындауда қолданылады.

Аспаптың жасалу технологиясы
Шаңқобыздың құрылысы күрделі емес. Оның көлемін әр түрлі етіп жасайды. Ол екі жақ ұшы сүйірленген, ортасында жіңішке тілі бар лираға ұқсайды. Тілшенің ұшы тік бұрыштала иілген, ол тілшені шалып тербеліске келтіруге арналған. Тілшенің екінші ұшы жиекке бекітілген. Тілшенің тербелуіне ештеңе бөгет жасамауы тиіс. Ойнау кезінде ауыздың екі ұрты резонатор қызметін атқарып, дыбысты күшейтеді.
Шаңқобыздың сирек кездесетін түрі – ағаш шаңқобыз. Үйеңкі, қайың, жеміс ағаштарынан жасалады. Ортадан кесілген ағаш ұштары екі жағынан тесіліп, жіп-бау тағылады. Аспап орындаушысы жіп-бауды тарта отырып, босату, тербету арқылы тілшені қозғалтады. Ағаш шаңқобызда жеңіл әндер мен шағын күйлер орындалады.
Аспапта ойнағанда сол қолдың бас бармағы, сұқ саусақ пен ортаңғы саусағы аспапты ұстап тұрады. Қалған екі саусақ жартылай бүгіледі де ортаңғы саусаққа тақалады. Алақан жартылай жұмылып қуыс жасайды, ол қуысқа аспаптың дыбысы шоғырланады да соның нәтижесінде дыбыс күшейеді.`
    },
    images: ['/instruments/kazakh/reed/shankobyz/1.png','/instruments/kazakh/reed/shankobyz/2.png','/instruments/kazakh/reed/shankobyz/3.png'],
    category: 'reed'
  },
];
