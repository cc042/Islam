const surahs = [
    { link: "https://server11.mp3quran.net/yasser/001.mp3", Order: "001", verses: "007", name: "الفاتحة", type: "مكية", summary: "أم الكتاب، تتضمن الثناء على الله، طلب الهداية، والدعاء بالثبات على الصراط المستقيم." },
    { link: "https://server11.mp3quran.net/yasser/002.mp3", Order: "002", verses: "286", name: "البقرة", type: "مدنية", summary: "أطول سورة، تعالج أحكام الشريعة، القصص، الإيمان، التعاملات، والاختبار بالإيمان والعمل." },
    { link: "https://server11.mp3quran.net/yasser/003.mp3", Order: "003", verses: "200", name: "آل عمران", type: "مدنية", summary: "تؤكد أهمية الثبات في الإيمان، الدعوة، وحدة الأمة، وأحداث غزوة أحد." },
    { link: "https://server11.mp3quran.net/yasser/004.mp3", Order: "004", verses: "176", name: "النساء", type: "مدنية", summary: "تعالج قضايا الأسرة، الميراث، العدل، وحماية الحقوق." },
    { link: "https://server11.mp3quran.net/yasser/005.mp3", Order: "005", verses: "120", name: "المائدة", type: "مدنية", summary: "تتحدث عن العهود والمواثيق، الحلال والحرام، وأخلاقيات المعاملات." },
    { link: "https://server11.mp3quran.net/yasser/006.mp3", Order: "006", verses: "165", name: "الأنعام", type: "مكية", summary: "تركز على التوحيد، الدلائل الكونية، والرد على الشرك." },
    { link: "https://server11.mp3quran.net/yasser/007.mp3", Order: "007", verses: "206", name: "الأعراف", type: "مكية", summary: "قصص الأمم السابقة، الدعوة للإصلاح، وعواقب التكذيب." },
    { link: "https://server11.mp3quran.net/yasser/008.mp3", Order: "008", verses: "075", name: "الأنفال", type: "مدنية", summary: "تناقش الغنائم وأخلاقيات القتال." },
    { link: "https://server11.mp3quran.net/yasser/009.mp3", Order: "009", verses: "129", name: "التوبة", type: "مدنية", summary: "تُعنى بالمنافقين، الجهاد، والتحذير من الخيانة." },
    { link: "https://server11.mp3quran.net/yasser/010.mp3", Order: "010", verses: "109", name: "يونس", type: "مكية", summary: "دعوة للتوحيد، قصص الأنبياء، ووعد الله للمؤمنين." },
    { link: "https://server11.mp3quran.net/yasser/011.mp3", Order: "011", verses: "123", name: "هود", type: "مكية", summary: "تثبيت النبي بقصص الأنبياء السابقين." },
    { link: "https://server11.mp3quran.net/yasser/012.mp3", Order: "012", verses: "111", name: "يوسف", type: "مكية", summary: "قصة النبي يوسف عبرةً في الصبر والتوكل على الله." },
    { link: "https://server11.mp3quran.net/yasser/013.mp3", Order: "013", verses: "043", name: "الرعد", type: "مدنية", summary: "دلائل قدرة الله وتوحيده." },
    { link: "https://server11.mp3quran.net/yasser/014.mp3", Order: "014", verses: "052", name: "إبراهيم", type: "مكية", summary: "شكر النعم والتحذير من الكفر." },
    { link: "https://server11.mp3quran.net/yasser/015.mp3", Order: "015", verses: "099", name: "الحجر", type: "مكية", summary: "وعد الله بالحفظ، وتحذير المكذبين." },
    { link: "https://server11.mp3quran.net/yasser/016.mp3", Order: "016", verses: "128", name: "النحل", type: "مكية", summary: "نعم الله، توحيده، وتثبيت النبي." },
    { link: "https://server11.mp3quran.net/yasser/017.mp3", Order: "017", verses: "111", name: "الإسراء", type: "مكية", summary: "الإسراء والمعراج، الأخلاقيات، وأحكام فردية." },
    { link: "https://server11.mp3quran.net/yasser/018.mp3", Order: "018", verses: "110", name: "الكهف", type: "مكية", summary: "قصص الفتية، الكنز، موسى والخضر، وذي القرنين." },
    { link: "https://server11.mp3quran.net/yasser/019.mp3", Order: "019", verses: "098", name: "مريم", type: "مكية", summary: "قصة مريم، عيسى، وزكريا." },
    { link: "https://server11.mp3quran.net/yasser/020.mp3", Order: "020", verses: "135", name: "طه", type: "مكية", summary: "قصة موسى وفرعون، وأهمية القرآن." },
    { link: "https://server11.mp3quran.net/yasser/021.mp3", Order: "021", verses: "112", name: "الأنبياء", type: "مكية", summary: "قصص الأنبياء، الحساب، وعظمة الخالق." },
    { link: "https://server11.mp3quran.net/yasser/022.mp3", Order: "022", verses: "078", name: "الحج", type: "مدنية", summary: "عبودية الله وأحكام الحج." },
    { link: "https://server11.mp3quran.net/yasser/023.mp3", Order: "023", verses: "118", name: "المؤمنون", type: "مكية", summary: "صفات المؤمنين، الخلق، والحساب." },
    { link: "https://server11.mp3quran.net/yasser/024.mp3", Order: "024", verses: "064", name: "النور", type: "مدنية", summary: "أحكام اجتماعية وآداب الاستئذان." },
    { link: "https://server11.mp3quran.net/yasser/025.mp3", Order: "025", verses: "077", name: "الفرقان", type: "مكية", summary: "الفرق بين المؤمنين والكافرين." },
    { link: "https://server11.mp3quran.net/yasser/026.mp3", Order: "026", verses: "227", name: "الشعراء", type: "مكية", summary: "قصص الأنبياء والدعوة." },
    { link: "https://server11.mp3quran.net/yasser/027.mp3", Order: "027", verses: "093", name: "النمل", type: "مكية", summary: "قصة سليمان، وملكة سبأ." },
    { link: "https://server11.mp3quran.net/yasser/028.mp3", Order: "028", verses: "088", name: "القصص", type: "مكية", summary: "قصة موسى وفرعون." },
    { link: "https://server11.mp3quran.net/yasser/029.mp3", Order: "029", verses: "069", name: "العنكبوت", type: "مكية", summary: "الابتلاءات وثبات المؤمنين." },
    { link: "https://server11.mp3quran.net/yasser/030.mp3", Order: "030", verses: "060", name: "الروم", type: "مكية", summary: "أحداث تاريخية ودلائل الإيمان." },
    { link: "https://server11.mp3quran.net/yasser/031.mp3", Order: "031", verses: "034", name: "لقمان", type: "مكية", summary: "الحكمة والنصائح للأبناء." },
    { link: "https://server11.mp3quran.net/yasser/032.mp3", Order: "032", verses: "030", name: "السجدة", type: "مكية", summary: "دلائل البعث وتوحيد الله." },
    { link: "https://server11.mp3quran.net/yasser/033.mp3", Order: "033", verses: "073", name: "الأحزاب", type: "مدنية", summary: "غزوة الأحزاب وأحكام اجتماعية." },
    { link: "https://server11.mp3quran.net/yasser/034.mp3", Order: "034", verses: "054", name: "سبأ", type: "مكية", summary: "النعم وشكرها." },
    { link: "https://server11.mp3quran.net/yasser/035.mp3", Order: "035", verses: "045", name: "فاطر", type: "مكية", summary: "عظمة خلق الله." },
    { link: "https://server11.mp3quran.net/yasser/036.mp3", Order: "036", verses: "083", name: "يس", type: "مكية", summary: "دلائل القدرة الإلهية." },
    { link: "https://server11.mp3quran.net/yasser/037.mp3", Order: "037", verses: "182", name: "الصافات", type: "مكية", summary: "توحيد الله وقصص الأنبياء." },
    { link: "https://server11.mp3quran.net/yasser/038.mp3", Order: "038", verses: "088", name: "ص", type: "مكية", summary: "دعوة للتوحيد وعاقبة المكذبين." },
    { link: "https://server11.mp3quran.net/yasser/039.mp3", Order: "039", verses: "075", name: "الزمر", type: "مكية", summary: "الإخلاص في العبادة." },
    { link: "https://server11.mp3quran.net/yasser/040.mp3", Order: "040", verses: "085", name: "غافر", type: "مكية", summary: "العاقبة للمتقين." },
    { link: "https://server11.mp3quran.net/yasser/041.mp3", Order: "041", verses: "054", name: "فصلت", type: "مكية", summary: "دلائل الوحي والتوحيد." },
    { link: "https://server11.mp3quran.net/yasser/042.mp3", Order: "042", verses: "053", name: "الشورى", type: "مكية", summary: "أهمية الشورى." },
    { link: "https://server11.mp3quran.net/yasser/043.mp3", Order: "043", verses: "089", name: "الزخرف", type: "مكية", summary: "الحياة الدنيا وزخرفها." },
    { link: "https://server11.mp3quran.net/yasser/044.mp3", Order: "044", verses: "059", name: "الدخان", type: "مكية", summary: "التحذير من يوم القيامة." },
    { link: "https://server11.mp3quran.net/yasser/045.mp3", Order: "045", verses: "037", name: "الجاثية", type: "مكية", summary: "عاقبة المكذبين." },
    { link: "https://server11.mp3quran.net/yasser/046.mp3", Order: "046", verses: "035", name: "الأحقاف", type: "مكية", summary: "قصص عاد وثمود." },
    { link: "https://server11.mp3quran.net/yasser/047.mp3", Order: "047", verses: "038", name: "محمد", type: "مدنية", summary: "الجهاد وأخلاق المسلمين." },
    { link: "https://server11.mp3quran.net/yasser/048.mp3", Order: "048", verses: "029", name: "الفتح", type: "مدنية", summary: "صلح الحديبية." },
    { link: "https://server11.mp3quran.net/yasser/049.mp3", Order: "049", verses: "018", name: "الحجرات", type: "مدنية", summary: "آداب المجتمع." },
    { link: "https://server11.mp3quran.net/yasser/050.mp3", Order: "050", verses: "045", name: "ق", type: "مكية", summary: "البعث والحساب." },
    { link: "https://server11.mp3quran.net/yasser/051.mp3", Order: "051", verses: "060", name: "الذاريات", type: "مكية", summary: "عاقبة المتقين." },
    { link: "https://server11.mp3quran.net/yasser/052.mp3", Order: "052", verses: "049", name: "الطور", type: "مكية", summary: "دلائل التوحيد." },
    { link: "https://server11.mp3quran.net/yasser/053.mp3", Order: "053", verses: "062", name: "النجم", type: "مكية", summary: "معجزة المعراج." },
    { link: "https://server11.mp3quran.net/yasser/054.mp3", Order: "054", verses: "055", name: "القمر", type: "مكية", summary: "أحداث يوم القيامة." },
    { link: "https://server11.mp3quran.net/yasser/055.mp3", Order: "055", verses: "078", name: "الرحمن", type: "مدنية", summary: "نعم الله المتكررة." },
    { link: "https://server11.mp3quran.net/yasser/056.mp3", Order: "056", verses: "096", name: "الواقعة", type: "مكية", summary: "أهوال يوم القيامة." },
    { link: "https://server11.mp3quran.net/yasser/057.mp3", Order: "057", verses: "029", name: "الحديد", type: "مدنية", summary: "الإنفاق في سبيل الله." },
    { link: "https://server11.mp3quran.net/yasser/058.mp3", Order: "058", verses: "022", name: "المجادلة", type: "مدنية", summary: "أحكام اجتماعية." },
    { link: "https://server11.mp3quran.net/yasser/059.mp3", Order: "059", verses: "024", name: "الحشر", type: "مدنية", summary: "تطهير المجتمع." },
    { link: "https://server11.mp3quran.net/yasser/060.mp3", Order: "060", verses: "013", name: "الممتحنة", type: "مدنية", summary: "العلاقات مع غير المسلمين." },
    { link: "https://server11.mp3quran.net/yasser/061.mp3", Order: "061", verses: "014", name: "الصف", type: "مدنية", summary: "الجهاد والوحدة." },
    { link: "https://server11.mp3quran.net/yasser/062.mp3", Order: "062", verses: "011", name: "الجمعة", type: "مدنية", summary: "أهمية صلاة الجمعة." },
    { link: "https://server11.mp3quran.net/yasser/063.mp3", Order: "063", verses: "011", name: "المنافقون", type: "مدنية", summary: "أخلاق المنافقين." },
    { link: "https://server11.mp3quran.net/yasser/064.mp3", Order: "064", verses: "018", name: "التغابن", type: "مدنية", summary: "الإيمان بالله واليوم الآخر." },
    { link: "https://server11.mp3quran.net/yasser/065.mp3", Order: "065", verses: "012", name: "الطلاق", type: "مدنية", summary: "أحكام الطلاق." },
    { link: "https://server11.mp3quran.net/yasser/066.mp3", Order: "066", verses: "012", name: "التحريم", type: "مدنية", summary: "أخلاقيات الأسرة." },
    { link: "https://server11.mp3quran.net/yasser/067.mp3", Order: "067", verses: "030", name: "الملك", type: "مكية", summary: "ملك الله وقدرته." },
    { link: "https://server11.mp3quran.net/yasser/068.mp3", Order: "068", verses: "052", name: "القلم", type: "مكية", summary: "الأخلاق والآداب." },
    { link: "https://server11.mp3quran.net/yasser/069.mp3", Order: "069", verses: "052", name: "الحاقة", type: "مكية", summary: "أهوال يوم القيامة." },
    { link: "https://server11.mp3quran.net/yasser/070.mp3", Order: "070", verses: "044", name: "المعارج", type: "مكية", summary: "عاقبة المكذبين." },
    { link: "https://server11.mp3quran.net/yasser/071.mp3", Order: "071", verses: "028", name: "نوح", type: "مكية", summary: "قصة النبي نوح ودعوته." },
    { link: "https://server11.mp3quran.net/yasser/072.mp3", Order: "072", verses: "028", name: "الجن", type: "مكية", summary: "إيمان الجن بالقرآن." },
    { link: "https://server11.mp3quran.net/yasser/073.mp3", Order: "073", verses: "020", name: "المزمل", type: "مكية", summary: "أوامر للنبي في العبادة." },
    { link: "https://server11.mp3quran.net/yasser/074.mp3", Order: "074", verses: "056", name: "المدثر", type: "مكية", summary: "الدعوة والإعداد لها." },
    { link: "https://server11.mp3quran.net/yasser/075.mp3", Order: "075", verses: "040", name: "القيامة", type: "مكية", summary: "البعث والحساب." },
    { link: "https://server11.mp3quran.net/yasser/076.mp3", Order: "076", verses: "031", name: "الإنسان", type: "مدنية", summary: "جزاء المتقين." },
    { link: "https://server11.mp3quran.net/yasser/077.mp3", Order: "077", verses: "050", name: "المرسلات", type: "مكية", summary: "إنذار يوم القيامة." },
    { link: "https://server11.mp3quran.net/yasser/078.mp3", Order: "078", verses: "040", name: "النبأ", type: "مكية", summary: "أهوال يوم القيامة." },
    { link: "https://server11.mp3quran.net/yasser/079.mp3", Order: "079", verses: "046", name: "النازعات", type: "مكية", summary: "دلائل البعث." },
    { link: "https://server11.mp3quran.net/yasser/080.mp3", Order: "080", verses: "042", name: "عبس", type: "مكية", summary: "إهمال النبي للأعمى." },
    { link: "https://server11.mp3quran.net/yasser/081.mp3", Order: "081", verses: "029", name: "التكوير", type: "مكية", summary: "أهوال القيامة." },
    { link: "https://server11.mp3quran.net/yasser/082.mp3", Order: "082", verses: "019", name: "الإنفطار", type: "مكية", summary: "دلائل يوم الحساب." },
    { link: "https://server11.mp3quran.net/yasser/083.mp3", Order: "083", verses: "036", name: "المطففين", type: "مكية", summary: "التحذير من الغش." },
    { link: "https://server11.mp3quran.net/yasser/084.mp3", Order: "084", verses: "025", name: "الإنشقاق", type: "مكية", summary: "دلائل الآخرة." },
    { link: "https://server11.mp3quran.net/yasser/085.mp3", Order: "085", verses: "022", name: "البروج", type: "مكية", summary: "التحذير من عاقبة الظلم." },
    { link: "https://server11.mp3quran.net/yasser/086.mp3", Order: "086", verses: "017", name: "الطارق", type: "مكية", summary: "دلائل قدرة الله." },
    { link: "https://server11.mp3quran.net/yasser/087.mp3", Order: "087", verses: "019", name: "الأعلى", type: "مكية", summary: "الحث على التذكر والتسبيح." },
    { link: "https://server11.mp3quran.net/yasser/088.mp3", Order: "088", verses: "026", name: "الغاشية", type: "مكية", summary: "الحساب." },
    { link: "https://server11.mp3quran.net/yasser/089.mp3", Order: "089", verses: "030", name: "الفجر", type: "مكية", summary: "عاقبة الطغاة." },
    { link: "https://server11.mp3quran.net/yasser/090.mp3", Order: "090", verses: "020", name: "البلد", type: "مكية", summary: "التحديات في الحياة." },
    { link: "https://server11.mp3quran.net/yasser/091.mp3", Order: "091", verses: "015", name: "الشمس", type: "مكية", summary: "أهمية تزكية النفس." },
    { link: "https://server11.mp3quran.net/yasser/092.mp3", Order: "092", verses: "021", name: "الليل", type: "مكية", summary: "العمل في الدنيا." },
    { link: "https://server11.mp3quran.net/yasser/093.mp3", Order: "093", verses: "011", name: "الضحى", type: "مكية", summary: "فضل الله على النبي." },
    { link: "https://server11.mp3quran.net/yasser/094.mp3", Order: "094", verses: "008", name: "الشرح", type: "مكية", summary: "تخفيف العبء عن النبي." },
    { link: "https://server11.mp3quran.net/yasser/095.mp3", Order: "095", verses: "008", name: "التين", type: "مكية", summary: "خلق الإنسان في أحسن تقويم." },
    { link: "https://server11.mp3quran.net/yasser/096.mp3", Order: "096", verses: "019", name: "العلق", type: "مكية", summary: "بداية الوحي." },
    { link: "https://server11.mp3quran.net/yasser/097.mp3", Order: "097", verses: "005", name: "القدر", type: "مكية", summary: "ليلة القدر." },
    { link: "https://server11.mp3quran.net/yasser/098.mp3", Order: "098", verses: "008", name: "البينة", type: "مدنية", summary: "الفرق بين الحق والباطل." },
    { link: "https://server11.mp3quran.net/yasser/099.mp3", Order: "099", verses: "008", name: "الزلزلة", type: "مدنية", summary: "أحداث يوم القيامة." },
    { link: "https://server11.mp3quran.net/yasser/100.mp3", Order: "100", verses: "011", name: "العاديات", type: "مكية", summary: "صفة الخيل في الجهاد." },
    { link: "https://server11.mp3quran.net/yasser/101.mp3", Order: "101", verses: "011", name: "القارعة", type: "مكية", summary: "أهوال يوم القيامة." },
    { link: "https://server11.mp3quran.net/yasser/102.mp3", Order: "102", verses: "008", name: "التكاثر", type: "مكية", summary: "التحذير من حب المال." },
    { link: "https://server11.mp3quran.net/yasser/103.mp3", Order: "103", verses: "003", name: "العصر", type: "مكية", summary: "أهمية الوقت." },
    { link: "https://server11.mp3quran.net/yasser/104.mp3", Order: "104", verses: "009", name: "الهمزة", type: "مكية", summary: "عاقبة السخرية." },
    { link: "https://server11.mp3quran.net/yasser/105.mp3", Order: "105", verses: "005", name: "الفيل", type: "مكية", summary: "حادثة الفيل." },
    { link: "https://server11.mp3quran.net/yasser/106.mp3", Order: "106", verses: "004", name: "قريش", type: "مكية", summary: "فضل قريش." },
    { link: "https://server11.mp3quran.net/yasser/107.mp3", Order: "107", verses: "007", name: "الماعون", type: "مكية", summary: "أفعال المنافقين." },
    { link: "https://server11.mp3quran.net/yasser/108.mp3", Order: "108", verses: "003", name: "الكوثر", type: "مكية", summary: "نعمة الكوثر." },
    { link: "https://server11.mp3quran.net/yasser/109.mp3", Order: "109", verses: "006", name: "الكافرون", type: "مكية", summary: "البراءة من الشرك." },
    { link: "https://server11.mp3quran.net/yasser/110.mp3", Order: "110", verses: "003", name: "النصر", type: "مدنية", summary: "وعد النصر." },
    { link: "https://server11.mp3quran.net/yasser/111.mp3", Order: "111", verses: "005", name: "المسد", type: "مكية", summary: "مصير أبي لهب." },
    { link: "https://server11.mp3quran.net/yasser/112.mp3", Order: "112", verses: "004", name: "الإخلاص", type: "مكية", summary: "توحيد الله." },
    { link: "https://server11.mp3quran.net/yasser/113.mp3", Order: "113", verses: "005", name: "الفلق", type: "مكية", summary: "الاستعاذة." },
    { link: "https://server11.mp3quran.net/yasser/114.mp3", Order: "114", verses: "006", name: "الناس", type: "مكية", summary: "الاستعاذة من الوسواس." }
];

// Wrappers
const findersurah = document.querySelector(".surahInputWrapper")
const SurahsWrapper = document.querySelector(".surahs")
const surahfinder = document.querySelector(".surahfinder")
const surahslength = document.querySelector(".length")

// Show And Hide Surahs Buttons
const showall = document.querySelector(".showall")
const clear = document.querySelector(".Clear")

// Show All Surahs
class Surahs {
    constructor() {
        this.number = 0;
    }

    // Show All Surahs
    ShowAllSurahs() {
        this.DeleteAllSurah()
        gridResposive(SurahsWrapper)
        for (let i = 0; i < surahs.length; i++) {
            this.number += 1
            SurahsWrapper.innerHTML += `<div class="surah"><h1 class="surahName">${surahs[i].name}</h1><h2 class="surahType">${surahs[i].type}</h2><h2 class="surahOrder">${surahs[i].Order}</h2><h2 class="surahVerses">${surahs[i].verses}</h2><button class="read" onclick="new Surahs().GoToSurah('${surahs[i].name}')">اقرأ</button><button class="tafser" style="margin-bottom:0px;" onclick="new Surahs().GoToTafser('${surahs[i].summary}')">التفسير</button></div>`
            surahslength.innerHTML = this.number
        }
    }

    // Delete All Surahs
    DeleteAllSurah() {
        this.number = 0
        surahslength.innerHTML = this.number
        SurahsWrapper.innerHTML = ""
        clear.disabled = true
        navigator.vibrate(200, 1, 200)
    }

    // Clear The Entire Surahs
    Clear() {
        if (!SurahsWrapper.innerHTML) {
            clear.disabled = true;
            return false;
        } else {
            SurahsWrapper.style.opacity = 0;
            SurahsWrapper.style.height = 0;
            window.scrollBy(0, -window.scrollY);
            SurahsWrapper.addEventListener("transitionend", () => {
                this.DeleteAllSurah()
                SurahsWrapper.style.opacity = 1;
                SurahsWrapper.style.height = "max-content";
            });
        }
    }

    // Open the Surah
    GoToSurah(surah) { open(`quran/${surah}.html`, "_blank"); }

    // Open the surah Tafser
    GoToTafser(tafser) { findoff(tafser, "التفسير") }
}

class findl {
    constructor() {
        this.number = 0;
        this.searchbar = surahfinder.value.toLowerCase();
    }

    findsurahwithletter() {
        if (this.searchbar) {
            SurahsWrapper.innerHTML = "";
            this.number = 0;
            surahs.find(finder => {
                if (finder.name.includes(this.searchbar)) { this.find(finder); }
                if (this.searchbar.includes(finder.type)) { this.find(finder); }
                clear.disabled = false;
            });
        } else {
            findoff("أدخل أسم السورة", "تنبيه");
        }
    }

    find(finder) {
        this.number += 1;
        this.number === 1 ? SurahsWrapper.style.gridTemplateColumns = "repeat(1, 1fr)" : gridResposive(SurahsWrapper);
        surahslength.innerHTML = this.number;
        SurahsWrapper.innerHTML += `
        <div class="surah">
            <h1 class="surahName">${finder.name}</h1>
            <h2 class="surahType">${finder.type}</h2>
            <h2 class="surahOrder">${finder.Order}</h2>
            <h2 class="surahVerses">${finder.verses}</h2>
            <button class="read" onclick="new findl().GoToSurah('${finder.name}')">اقرأ</button>
            <button class="tafser" onclick="new findl().GoToTafser('${finder.summary}')">التفسير</button>
            <div class="listen">
                <button class="stop" onclick="new findl().pauseSurah(this)" disabled><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="24" height="24" fill="currentColor"><path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg></button>
                <button class="play" onclick="new findl().playSurah('${finder.link}', this)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" height="24" fill="currentColor"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></button>
            </div>
        </div>`;
    }

    // Open the Surah
    GoToSurah(surah) { open(`quran/${surah}.html`, "_blank"); }

    // Open the surah Tafser
    GoToTafser(tafser) { findoff(tafser, "التفسير"); }

    // Pause the Surah
    pauseSurah(button) {
        if (this.audio && !this.audio.paused) {
            this.audio.pause(); // Pause the audio
            this.isPlaying = false;
            button.disabled = true; // Disable the pause button
            if (this.currentButton) {
                this.currentButton.disabled = false; // Re-enable the play button
            }
        }
    }

    // Play the surah
    playSurah(path, button) {
        // Get the parent container of the clicked button (the surah div)
        const surahContainer = button.closest('.surah');

        // Disable all play buttons within the same surah container
        const playButtons = surahContainer.querySelectorAll('.play');
        const stopButtons = surahContainer.querySelectorAll('.stop');
        playButtons.forEach(btn => btn.disabled = true);
        stopButtons.forEach(btn => btn.disabled = true);

        // If another audio is playing, pause it
        if (this.audio && !this.audio.paused) {
            this.audio.pause();
            stopButtons.forEach(btn => btn.disabled = true);
            this.isPlaying = false;
        }

        // If the same surah is being played, resume from the paused point
        if (this.audio && this.audio.src === path) {
            this.audio.play(); // Resume from the paused point
            playButtons.forEach(btn => btn.disabled = true);
        } else {
            // Load new audio
            this.audio = new Audio(path);
            this.audio.play(); // Start playing the new audio
            playButtons.forEach(btn => btn.disabled = true);
        }

        // Enable the pause button for the current surah
        const pauseButton = surahContainer.querySelector('.stop');
        pauseButton.disabled = false;

        // Re-enable the play button when the audio ends
        this.audio.onended = () => {
            playButtons.forEach(btn => btn.disabled = false);
            stopButtons.forEach(btn => btn.disabled = true);
        };
    }
}

clear.addEventListener("click", () => { new Surahs().Clear() })
showall.addEventListener("click", () => { new Surahs().ShowAllSurahs() })

surahfinder.addEventListener("input", validateArabicInput)
findersurah.addEventListener("submit", e => { e.preventDefault(); new findl().findsurahwithletter() })