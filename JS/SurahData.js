const surahs = [
	{ link: "https:/server6.mp3quran.net/qtm/001.mp3", Order: "001", verses: "007", name: "الفاتحة", type: "مكية", summary: "أم الكتاب، تتضمن الثناء على الله، طلب الهداية، والدعاء بالثبات على الصراط المستقيم." },
	{ link: "https:/server6.mp3quran.net/qtm/002.mp3", Order: "002", verses: "286", name: "البقرة", type: "مدنية", summary: "أطول سورة، تعالج أحكام الشريعة، القصص، الإيمان، التعاملات، والاختبار بالإيمان والعمل." },
	{ link: "https:/server6.mp3quran.net/qtm/003.mp3", Order: "003", verses: "200", name: "آل عمران", type: "مدنية", summary: "تؤكد أهمية الثبات في الإيمان، الدعوة، وحدة الأمة، وأحداث غزوة أحد." },
	{ link: "https:/server6.mp3quran.net/qtm/004.mp3", Order: "004", verses: "176", name: "النساء", type: "مدنية", summary: "تعالج قضايا الأسرة، الميراث، العدل، وحماية الحقوق." },
	{ link: "https:/server6.mp3quran.net/qtm/005.mp3", Order: "005", verses: "120", name: "المائدة", type: "مدنية", summary: "تتحدث عن العهود والمواثيق، الحلال والحرام، وأخلاقيات المعاملات." },
	{ link: "https:/server6.mp3quran.net/qtm/006.mp3", Order: "006", verses: "165", name: "الأنعام", type: "مكية", summary: "تركز على التوحيد، الدلائل الكونية، والرد على الشرك." },
	{ link: "https:/server6.mp3quran.net/qtm/007.mp3", Order: "007", verses: "206", name: "الأعراف", type: "مكية", summary: "قصص الأمم السابقة، الدعوة للإصلاح، وعواقب التكذيب." },
	{ link: "https:/server6.mp3quran.net/qtm/008.mp3", Order: "008", verses: "075", name: "الأنفال", type: "مدنية", summary: "تناقش الغنائم وأخلاقيات القتال." },
	{ link: "https:/server6.mp3quran.net/qtm/009.mp3", Order: "009", verses: "129", name: "التوبة", type: "مدنية", summary: "تُعنى بالمنافقين، الجهاد، والتحذير من الخيانة." },
	{ link: "https:/server6.mp3quran.net/qtm/010.mp3", Order: "010", verses: "109", name: "يونس", type: "مكية", summary: "دعوة للتوحيد، قصص الأنبياء، ووعد الله للمؤمنين." },
	{ link: "https:/server6.mp3quran.net/qtm/011.mp3", Order: "011", verses: "123", name: "هود", type: "مكية", summary: "تثبيت النبي بقصص الأنبياء السابقين." },
	{ link: "https:/server6.mp3quran.net/qtm/012.mp3", Order: "012", verses: "111", name: "يوسف", type: "مكية", summary: "قصة النبي يوسف عبرةً في الصبر والتوكل على الله." },
	{ link: "https:/server6.mp3quran.net/qtm/013.mp3", Order: "013", verses: "043", name: "الرعد", type: "مدنية", summary: "دلائل قدرة الله وتوحيده." },
	{ link: "https:/server6.mp3quran.net/qtm/014.mp3", Order: "014", verses: "052", name: "إبراهيم", type: "مكية", summary: "شكر النعم والتحذير من الكفر." },
	{ link: "https:/server6.mp3quran.net/qtm/015.mp3", Order: "015", verses: "099", name: "الحجر", type: "مكية", summary: "وعد الله بالحفظ، وتحذير المكذبين." },
	{ link: "https:/server6.mp3quran.net/qtm/016.mp3", Order: "016", verses: "128", name: "النحل", type: "مكية", summary: "نعم الله، توحيده، وتثبيت النبي." },
	{ link: "https:/server6.mp3quran.net/qtm/017.mp3", Order: "017", verses: "111", name: "الإسراء", type: "مكية", summary: "الإسراء والمعراج، الأخلاقيات، وأحكام فردية." },
	{ link: "https:/server6.mp3quran.net/qtm/018.mp3", Order: "018", verses: "110", name: "الكهف", type: "مكية", summary: "قصص الفتية، الكنز، موسى والخضر، وذي القرنين." },
	{ link: "https:/server6.mp3quran.net/qtm/019.mp3", Order: "019", verses: "098", name: "مريم", type: "مكية", summary: "قصة مريم، عيسى، وزكريا." },
	{ link: "https:/server6.mp3quran.net/qtm/020.mp3", Order: "020", verses: "135", name: "طه", type: "مكية", summary: "قصة موسى وفرعون، وأهمية القرآن." },
	{ link: "https:/server6.mp3quran.net/qtm/021.mp3", Order: "021", verses: "112", name: "الأنبياء", type: "مكية", summary: "قصص الأنبياء، الحساب، وعظمة الخالق." },
	{ link: "https:/server6.mp3quran.net/qtm/022.mp3", Order: "022", verses: "078", name: "الحج", type: "مدنية", summary: "عبودية الله وأحكام الحج." },
	{ link: "https:/server6.mp3quran.net/qtm/023.mp3", Order: "023", verses: "118", name: "المؤمنون", type: "مكية", summary: "صفات المؤمنين، الخلق، والحساب." },
	{ link: "https:/server6.mp3quran.net/qtm/024.mp3", Order: "024", verses: "064", name: "النور", type: "مدنية", summary: "أحكام اجتماعية وآداب الاستئذان." },
	{ link: "https:/server6.mp3quran.net/qtm/024.mp3", Order: "024", verses: "064", name: "النور", type: "مدنية", summary: "أحكام اجتماعية وآداب الاستئذان." },
	{ link: "https:/server6.mp3quran.net/qtm/025.mp3", Order: "025", verses: "077", name: "الفرقان", type: "مكية", summary: "الفرق بين المؤمنين والكافرين." },
	{ link: "https:/server6.mp3quran.net/qtm/026.mp3", Order: "026", verses: "227", name: "الشعراء", type: "مكية", summary: "قصص الأنبياء والدعوة." },
	{ link: "https:/server6.mp3quran.net/qtm/027.mp3", Order: "027", verses: "093", name: "النمل", type: "مكية", summary: "قصة سليمان، وملكة سبأ." },
	{ link: "https:/server6.mp3quran.net/qtm/028.mp3", Order: "028", verses: "088", name: "القصص", type: "مكية", summary: "قصة موسى وفرعون." },
	{ link: "https:/server6.mp3quran.net/qtm/029.mp3", Order: "029", verses: "069", name: "العنكبوت", type: "مكية", summary: "الابتلاءات وثبات المؤمنين." },
	{ link: "https:/server6.mp3quran.net/qtm/030.mp3", Order: "030", verses: "060", name: "الروم", type: "مكية", summary: "أحداث تاريخية ودلائل الإيمان." },
	{ link: "https:/server6.mp3quran.net/qtm/031.mp3", Order: "031", verses: "034", name: "لقمان", type: "مكية", summary: "الحكمة والنصائح للأبناء." },
	{ link: "https:/server6.mp3quran.net/qtm/032.mp3", Order: "032", verses: "030", name: "السجدة", type: "مكية", summary: "دلائل البعث وتوحيد الله." },
	{ link: "https:/server6.mp3quran.net/qtm/033.mp3", Order: "033", verses: "073", name: "الأحزاب", type: "مدنية", summary: "غزوة الأحزاب وأحكام اجتماعية." },
	{ link: "https:/server6.mp3quran.net/qtm/034.mp3", Order: "034", verses: "054", name: "سبأ", type: "مكية", summary: "النعم وشكرها." },
	{ link: "https:/server6.mp3quran.net/qtm/035.mp3", Order: "035", verses: "045", name: "فاطر", type: "مكية", summary: "عظمة خلق الله." },
	{ link: "https:/server6.mp3quran.net/qtm/036.mp3", Order: "036", verses: "083", name: "يس", type: "مكية", summary: "دلائل القدرة الإلهية." },
	{ link: "https:/server6.mp3quran.net/qtm/037.mp3", Order: "037", verses: "182", name: "الصافات", type: "مكية", summary: "توحيد الله وقصص الأنبياء." },
	{ link: "https:/server6.mp3quran.net/qtm/038.mp3", Order: "038", verses: "088", name: "ص", type: "مكية", summary: "دعوة للتوحيد وعاقبة المكذبين." },
	{ link: "https:/server6.mp3quran.net/qtm/039.mp3", Order: "039", verses: "075", name: "الزمر", type: "مكية", summary: "الإخلاص في العبادة." },
	{ link: "https:/server6.mp3quran.net/qtm/040.mp3", Order: "040", verses: "085", name: "غافر", type: "مكية", summary: "العاقبة للمتقين." },
	{ link: "https:/server6.mp3quran.net/qtm/041.mp3", Order: "041", verses: "054", name: "فصلت", type: "مكية", summary: "دلائل الوحي والتوحيد." },
	{ link: "https:/server6.mp3quran.net/qtm/042.mp3", Order: "042", verses: "053", name: "الشورى", type: "مكية", summary: "أهمية الشورى." },
	{ link: "https:/server6.mp3quran.net/qtm/043.mp3", Order: "043", verses: "089", name: "الزخرف", type: "مكية", summary: "الحياة الدنيا وزخرفها." },
	{ link: "https:/server6.mp3quran.net/qtm/044.mp3", Order: "044", verses: "059", name: "الدخان", type: "مكية", summary: "التحذير من يوم القيامة." },
	{ link: "https:/server6.mp3quran.net/qtm/045.mp3", Order: "045", verses: "037", name: "الجاثية", type: "مكية", summary: "عاقبة المكذبين." },
	{ link: "https:/server6.mp3quran.net/qtm/046.mp3", Order: "046", verses: "035", name: "الأحقاف", type: "مكية", summary: "قصص عاد وثمود." },
	{ link: "https:/server6.mp3quran.net/qtm/047.mp3", Order: "047", verses: "038", name: "محمد", type: "مدنية", summary: "الجهاد وأخلاق المسلمين." },
	{ link: "https:/server6.mp3quran.net/qtm/048.mp3", Order: "048", verses: "029", name: "الفتح", type: "مدنية", summary: "صلح الحديبية." },
	{ link: "https:/server6.mp3quran.net/qtm/049.mp3", Order: "049", verses: "018", name: "الحجرات", type: "مدنية", summary: "آداب المجتمع." },
	{ link: "https:/server6.mp3quran.net/qtm/050.mp3", Order: "050", verses: "045", name: "ق", type: "مكية", summary: "البعث والحساب." },
	{ link: "https:/server6.mp3quran.net/qtm/051.mp3", Order: "051", verses: "060", name: "الذاريات", type: "مكية", summary: "عاقبة المتقين." },
	{ link: "https:/server6.mp3quran.net/qtm/052.mp3", Order: "052", verses: "049", name: "الطور", type: "مكية", summary: "دلائل التوحيد." },
	{ link: "https:/server6.mp3quran.net/qtm/053.mp3", Order: "053", verses: "062", name: "النجم", type: "مكية", summary: "معجزة المعراج." },
	{ link: "https:/server6.mp3quran.net/qtm/054.mp3", Order: "054", verses: "055", name: "القمر", type: "مكية", summary: "أحداث يوم القيامة." },
	{ link: "https:/server6.mp3quran.net/qtm/055.mp3", Order: "055", verses: "078", name: "الرحمن", type: "مدنية", summary: "نعم الله المتكررة." },
	{ link: "https:/server6.mp3quran.net/qtm/056.mp3", Order: "056", verses: "096", name: "الواقعة", type: "مكية", summary: "أهوال يوم القيامة." },
	{ link: "https:/server6.mp3quran.net/qtm/057.mp3", Order: "057", verses: "029", name: "الحديد", type: "مدنية", summary: "الإنفاق في سبيل الله." },
	{ link: "https:/server6.mp3quran.net/qtm/058.mp3", Order: "058", verses: "022", name: "المجادلة", type: "مدنية", summary: "أحكام اجتماعية." },
	{ link: "https:/server6.mp3quran.net/qtm/059.mp3", Order: "059", verses: "024", name: "الحشر", type: "مدنية", summary: "تطهير المجتمع." },
	{ link: "https:/server6.mp3quran.net/qtm/060.mp3", Order: "060", verses: "013", name: "الممتحنة", type: "مدنية", summary: "العلاقات مع غير المسلمين." },
	{ link: "https:/server6.mp3quran.net/qtm/061.mp3", Order: "061", verses: "014", name: "الصف", type: "مدنية", summary: "الجهاد والوحدة." },
	{ link: "https:/server6.mp3quran.net/qtm/062.mp3", Order: "062", verses: "011", name: "الجمعة", type: "مدنية", summary: "أهمية صلاة الجمعة." },
	{ link: "https:/server6.mp3quran.net/qtm/063.mp3", Order: "063", verses: "011", name: "المنافقون", type: "مدنية", summary: "أخلاق المنافقين." },
	{ link: "https:/server6.mp3quran.net/qtm/064.mp3", Order: "064", verses: "018", name: "التغابن", type: "مدنية", summary: "الإيمان بالله واليوم الآخر." },
	{ link: "https:/server6.mp3quran.net/qtm/065.mp3", Order: "065", verses: "012", name: "الطلاق", type: "مدنية", summary: "أحكام الطلاق." },
	{ link: "https:/server6.mp3quran.net/qtm/066.mp3", Order: "066", verses: "012", name: "التحريم", type: "مدنية", summary: "أخلاقيات الأسرة." },
	{ link: "https:/server6.mp3quran.net/qtm/067.mp3", Order: "067", verses: "030", name: "الملك", type: "مكية", summary: "ملك الله وقدرته." },
	{ link: "https:/server6.mp3quran.net/qtm/068.mp3", Order: "068", verses: "052", name: "القلم", type: "مكية", summary: "الأخلاق والآداب." },
	{ link: "https:/server6.mp3quran.net/qtm/069.mp3", Order: "069", verses: "052", name: "الحاقة", type: "مكية", summary: "أهوال يوم القيامة." },
	{ link: "https:/server6.mp3quran.net/qtm/070.mp3", Order: "070", verses: "044", name: "المعارج", type: "مكية", summary: "عاقبة المكذبين." },
	{ link: "https:/server6.mp3quran.net/qtm/071.mp3", Order: "071", verses: "028", name: "نوح", type: "مكية", summary: "قصة النبي نوح ودعوته." },
	{ link: "https:/server6.mp3quran.net/qtm/072.mp3", Order: "072", verses: "028", name: "الجن", type: "مكية", summary: "إيمان الجن بالقرآن." },
	{ link: "https:/server6.mp3quran.net/qtm/073.mp3", Order: "073", verses: "020", name: "المزمل", type: "مكية", summary: "أوامر للنبي في العبادة." },
	{ link: "https:/server6.mp3quran.net/qtm/074.mp3", Order: "074", verses: "056", name: "المدثر", type: "مكية", summary: "الدعوة والإعداد لها." },
	{ link: "https:/server6.mp3quran.net/qtm/075.mp3", Order: "075", verses: "040", name: "القيامة", type: "مكية", summary: "البعث والحساب." },
	{ link: "https:/server6.mp3quran.net/qtm/076.mp3", Order: "076", verses: "031", name: "الإنسان", type: "مدنية", summary: "جزاء المتقين." },
	{ link: "https:/server6.mp3quran.net/qtm/077.mp3", Order: "077", verses: "050", name: "المرسلات", type: "مكية", summary: "إنذار يوم القيامة." },
	{ link: "https:/server6.mp3quran.net/qtm/078.mp3", Order: "078", verses: "040", name: "النبأ", type: "مكية", summary: "أهوال يوم القيامة." },
	{ link: "https:/server6.mp3quran.net/qtm/079.mp3", Order: "079", verses: "046", name: "النازعات", type: "مكية", summary: "دلائل البعث." },
	{ link: "https:/server6.mp3quran.net/qtm/080.mp3", Order: "080", verses: "042", name: "عبس", type: "مكية", summary: "إهمال النبي للأعمى." },
	{ link: "https:/server6.mp3quran.net/qtm/081.mp3", Order: "081", verses: "029", name: "التكوير", type: "مكية", summary: "أهوال القيامة." },
	{ link: "https:/server6.mp3quran.net/qtm/082.mp3", Order: "082", verses: "019", name: "الإنفطار", type: "مكية", summary: "دلائل يوم الحساب." },
	{ link: "https:/server6.mp3quran.net/qtm/083.mp3", Order: "083", verses: "036", name: "المطففين", type: "مكية", summary: "التحذير من الغش." },
	{ link: "https:/server6.mp3quran.net/qtm/084.mp3", Order: "084", verses: "025", name: "الإنشقاق", type: "مكية", summary: "دلائل الآخرة." },
	{ link: "https:/server6.mp3quran.net/qtm/085.mp3", Order: "085", verses: "022", name: "البروج", type: "مكية", summary: "التحذير من عاقبة الظلم." },
	{ link: "https:/server6.mp3quran.net/qtm/086.mp3", Order: "086", verses: "017", name: "الطارق", type: "مكية", summary: "دلائل قدرة الله." },
	{ link: "https:/server6.mp3quran.net/qtm/087.mp3", Order: "087", verses: "019", name: "الأعلى", type: "مكية", summary: "الحث على التذكر والتسبيح." },
	{ link: "https:/server6.mp3quran.net/qtm/088.mp3", Order: "088", verses: "026", name: "الغاشية", type: "مكية", summary: "الحساب." },
	{ link: "https:/server6.mp3quran.net/qtm/089.mp3", Order: "089", verses: "030", name: "الفجر", type: "مكية", summary: "عاقبة الطغاة." },
	{ link: "https:/server6.mp3quran.net/qtm/090.mp3", Order: "090", verses: "020", name: "البلد", type: "مكية", summary: "التحديات في الحياة." },
	{ link: "https:/server6.mp3quran.net/qtm/091.mp3", Order: "091", verses: "015", name: "الشمس", type: "مكية", summary: "أهمية تزكية النفس." },
	{ link: "https:/server6.mp3quran.net/qtm/092.mp3", Order: "092", verses: "021", name: "الليل", type: "مكية", summary: "العمل في الدنيا." },
	{ link: "https:/server6.mp3quran.net/qtm/093.mp3", Order: "093", verses: "011", name: "الضحى", type: "مكية", summary: "فضل الله على النبي." },
	{ link: "https:/server6.mp3quran.net/qtm/094.mp3", Order: "094", verses: "008", name: "الشرح", type: "مكية", summary: "تخفيف العبء عن النبي." },
	{ link: "https:/server6.mp3quran.net/qtm/095.mp3", Order: "095", verses: "008", name: "التين", type: "مكية", summary: "خلق الإنسان في أحسن تقويم." },
	{ link: "https:/server6.mp3quran.net/qtm/096.mp3", Order: "096", verses: "019", name: "العلق", type: "مكية", summary: "بداية الوحي." },
	{ link: "https:/server6.mp3quran.net/qtm/097.mp3", Order: "097", verses: "005", name: "القدر", type: "مكية", summary: "ليلة القدر." },
	{ link: "https:/server6.mp3quran.net/qtm/098.mp3", Order: "098", verses: "008", name: "البينة", type: "مدنية", summary: "الفرق بين الحق والباطل." },
	{ link: "https:/server6.mp3quran.net/qtm/099.mp3", Order: "099", verses: "008", name: "الزلزلة", type: "مدنية", summary: "أحداث يوم القيامة." },
	{ link: "https:/server6.mp3quran.net/qtm/100.mp3", Order: "100", verses: "011", name: "العاديات", type: "مكية", summary: "صفة الخيل في الجهاد." },
	{ link: "https:/server6.mp3quran.net/qtm/101.mp3", Order: "101", verses: "011", name: "القارعة", type: "مكية", summary: "أهوال يوم القيامة." },
	{ link: "https:/server6.mp3quran.net/qtm/102.mp3", Order: "102", verses: "008", name: "التكاثر", type: "مكية", summary: "التحذير من حب المال." },
	{ link: "https:/server6.mp3quran.net/qtm/103.mp3", Order: "103", verses: "003", name: "العصر", type: "مكية", summary: "أهمية الوقت." },
	{ link: "https:/server6.mp3quran.net/qtm/104.mp3", Order: "104", verses: "009", name: "الهمزة", type: "مكية", summary: "عاقبة السخرية." },
	{ link: "https:/server6.mp3quran.net/qtm/105.mp3", Order: "105", verses: "005", name: "الفيل", type: "مكية", summary: "حادثة الفيل." },
	{ link: "https:/server6.mp3quran.net/qtm/106.mp3", Order: "106", verses: "004", name: "قريش", type: "مكية", summary: "فضل قريش." },
	{ link: "https:/server6.mp3quran.net/qtm/107.mp3", Order: "107", verses: "007", name: "الماعون", type: "مكية", summary: "أفعال المنافقين." },
	{ link: "https:/server6.mp3quran.net/qtm/108.mp3", Order: "108", verses: "003", name: "الكوثر", type: "مكية", summary: "نعمة الكوثر." },
	{ link: "https:/server6.mp3quran.net/qtm/109.mp3", Order: "109", verses: "006", name: "الكافرون", type: "مكية", summary: "البراءة من الشرك." },
	{ link: "https:/server6.mp3quran.net/qtm/110.mp3", Order: "110", verses: "003", name: "النصر", type: "مدنية", summary: "وعد النصر." },
	{ link: "https:/server6.mp3quran.net/qtm/111.mp3", Order: "111", verses: "005", name: "المسد", type: "مكية", summary: "مصير أبي لهب." },
	{ link: "https:/server6.mp3quran.net/qtm/112.mp3", Order: "112", verses: "004", name: "الإخلاص", type: "مكية", summary: "توحيد الله." },
	{ link: "https:/server6.mp3quran.net/qtm/113.mp3", Order: "113", verses: "005", name: "الفلق", type: "مكية", summary: "الاستعاذة." },
	{ link: "https:/server6.mp3quran.net/qtm/114.mp3", Order: "114", verses: "006", name: "الناس", type: "مكية", summary: "الاستعاذة من الوسواس." }
];

const namesOfAllah = [
	{ name: "ٱلرَّحْمَٰن", meaning: "الَّذِي يَرْحَمُ جَمِيعَ مَخْلُوقَاتِهِ بِرَحْمَةٍ وَاسِعَةٍ، لَا تَقْتَصِرُ عَلَى الْمُؤْمِنِينَ فَقَطْ" },
	{ name: "ٱلرَّحِيم", meaning: "الَّذِي يَرْحَمُ الْمُؤْمِنِينَ بِرَحْمَةٍ خَاصَّةٍ، وَيَغْفِرُ لَهُمْ" },
	{ name: "ٱلْمَلِك", meaning: "ٱلْمَالِكُ وَٱلْمُتَصَرِّفُ فِي مُلْكِهِ، لَيْسَ لِأَحَدٍ غَيْرُهُ" },
	{ name: "ٱلْقُدُّوس", meaning: "ٱلطَّاهِرُ ٱلْمُنَزَّهُ عَنْ كُلِّ نَقْصٍ أَوْ عَيْبٍ" },
	{ name: "ٱلسَّلَام", meaning: "ٱلَّذِي سَلِمَ مِنْ كُلِّ عَيْبٍ، وَهُوَ مَصْدَرُ ٱلسَّلَامِ وَٱلأَمَانِ" },
	{ name: "ٱلْمُؤْمِن", meaning: "ٱلَّذِي يُصَدِّقُ وَيُطْمَئِنُّ قَلْبَ عِبَادِهِ ٱلْمُؤْمِنِينَ" },
	{ name: "ٱلْمُهَيْمِن", meaning: "ٱلَّذِي يُرَاقِبُ كُلَّ شَيْءٍ، وَهُوَ ٱلْحَافِظُ لِخَلْقِهِ" },
	{ name: "ٱلْعَزِيز", meaning: "ٱلَّذِي لَا يُقْهَرُ وَلَا يُغْلَبُ" },
	{ name: "ٱلْجَبَّار", meaning: "ٱلَّذِي يَقْهَرُ كُلَّ شَيْءٍ، وَيَجْبُرُ عِبَادَهُ" },
	{ name: "ٱلْمُتَكَبِّر", meaning: "ٱلَّذِي يَتَعَالَى عَنْ جَمِيعِ ٱلْمَخْلُوقَاتِ، وَلَا يُنَازِعُهُ أَحَدٌ فِي عَظَمَتِهِ" },
	{ name: "ٱلْخَالِق", meaning: "ٱلَّذِي يَخْلُقُ كُلَّ شَيْءٍ مِنَ ٱلْعَدَمِ" },
	{ name: "ٱلْبَارِئ", meaning: "ٱلَّذِي يَخْلُقُ ٱلْأَشْيَاءَ كَمَا يُرِيدُ، وَيُبْدِعُ خَلْقَهُ" },
	{ name: "ٱلْمُصَوِّر", meaning: "ٱلَّذِي يَخْلُقُ ٱلْمَخْلُوقَاتِ بِأَشْكَالٍ مُخْتَلِفَةٍ، وَيُصَوِّرُهَا بِمَا يَشَاءُ" },
	{ name: "ٱلْغَفَّار", meaning: "ٱلَّذِي يَغْفِرُ ٱلذُّنُوبَ وَيَرْحَمُ ٱلْخَطَايَا" },
	{ name: "ٱلْقَهَّار", meaning: "ٱلَّذِي يَقْهَرُ جَمِيعَ ٱلْخَلَائِقِ وَلَا يُعْجِزُهُ شَيْءٌ" },
	{ name: "ٱلْوَهَّاب", meaning: "ٱلَّذِي يَهَبُ ٱلْعَطَايَا وَٱلْبَرَكَاتِ بِلَا حِسَابٍ" },
	{ name: "ٱلرَّزَّاق", meaning: "ٱلَّذِي يَرْزُقُ جَمِيعَ مَخْلُوقَاتِهِ مِنْ دُونِ ٱنْقِطَاعٍ" },
	{ name: "ٱلْفَتَّاح", meaning: "ٱلَّذِي يَفْتَحُ ٱلْأَبْوَابَ ٱلْمُغْلَقَةَ وَيُوَفِّرُ ٱلْفُرَصَ" },
	{ name: "ٱلْعَلِيم", meaning: "ٱلَّذِي يَعْلَمُ كُلَّ شَيْءٍ، لَا يَخْفَى عَلَيْهِ شَيْءٌ فِي ٱلْأَرْضِ أَوِ ٱلسَّمَاءِ" },
	{ name: "ٱلْقَابِض", meaning: "ٱلَّذِي يَقْبِضُ ٱلْأَرْزَاقَ وَٱلْأَرْوَاحَ عِنْدَمَا يَشَاءُ" },
	{ name: "ٱلْبَاسِط", meaning: "ٱلَّذِي يُبْسِطُ ٱلرِّزْقَ وَيُوَسِّعُ عَلَى عِبَادِهِ" },
	{ name: "ٱلْخَافِض", meaning: "ٱلَّذِي يُخَفِّضُ مَنْ يَشَاءُ مِنْ خَلْقِهِ" },
	{ name: "ٱلرَّافِع", meaning: "ٱلَّذِي يَرْفَعُ مَنْ يَشَاءُ وَيُعْلِي شَأْنَهُ" },
	{ name: "ٱلْمُعِز", meaning: "ٱلَّذِي يُعِزُّ مَنْ يَشَاءُ وَيَمْنَحُهُ ٱلْمَكَانَةَ ٱلْعَالِيَةَ" },
	{ name: "ٱلْمُذِل", meaning: "ٱلَّذِي يُذِلُّ مَنْ يَشَاءُ وَيُخَفِّضُ مَكَانَتَهُ" },
	{ name: "ٱلسَّمِيع", meaning: "ٱلَّذِي يَسْمَعُ كُلَّ شَيْءٍ، لَا يَخْفَى عَلَيْهِ كَلَامٌ وَلَا صَوْتٌ" },
	{ name: "ٱلْبَصِير", meaning: "ٱلَّذِي يَرَى كُلَّ شَيْءٍ، لَا يَعْزُبُ عَنْهُ شَيْءٌ فِي ٱلْأَرْضِ أَوِ ٱلسَّمَاءِ" },
	{ name: "ٱلْحَكَم", meaning: "ٱلَّذِي يَحْكُمُ بَيْنَ عِبَادِهِ بِٱلْعَدْلِ وَيُعْطِي كُلَّ ذِي حَقٍّ حَقَّهُ" },
	{ name: "ٱلْعَدْل", meaning: "ٱلَّذِي لَا يَجُورُ أَبَدًا وَيُعْطِي كُلَّ شَيْءٍ حَقَّهُ" },
	{ name: "ٱللَّطِيف", meaning: "ٱلَّذِي يَلْطُفُ بِعِبَادِهِ بِرَحْمَةٍ وَرِقَّةٍ، وَيَعْطِفُ عَلَيْهِمْ" },
	{ name: "ٱلْخَبِير", meaning: "ٱلَّذِي يَعْلَمُ كُلَّ شَيْءٍ بِدِقَّةٍ، وَيَعْرِفُ مَا فِي ٱلْقُلُوبِ وَٱلْأَسْرَارِ" },
	{ name: "ٱلْحَلِيم", meaning: "ٱلَّذِي يَتَأَنَّى فِي مُعَاقَبَةِ عِبَادِهِ وَلَا يُعَجِّلُ بِهِمْ" },
	{ name: "ٱلْعَظِيم", meaning: "ٱلَّذِي عَظَمَتُهُ لَا تُحَدُّ وَلَا تُدْرَكُ" },
	{ name: "ٱلْغَفُور", meaning: "ٱلَّذِي يَغْفِرُ ٱلذُّنُوبَ جَمِيعًا وَلَا يُيْئَسُ عِبَادُهُ مِنْ رَحْمَتِهِ" },
	{ name: "ٱلشَّكُور", meaning: "ٱلَّذِي يَشْكُرُ عِبَادَهُ عَلَى أَعْمَالِهِمُ ٱلصَّالِحَةِ وَيُثِيبُهُمْ عَلَيْهَا" },
	{ name: "ٱلْعَلِيّ", meaning: "ٱلَّذِي هُوَ أَعْلَى مِنْ كُلِّ شَيْءٍ، وَلَا يُعْلَى عَلَيْهِ" },
	{ name: "ٱلْكَبِير", meaning: "ٱلَّذِي هُوَ أَعْظَمُ مِنْ كُلِّ شَيْءٍ فِي ٱلْوُجُودِ" },
	{ name: "ٱلْحَفِيظ", meaning: "ٱلَّذِي يَحْفَظُ عِبَادَهُ مِنَ ٱلشُّرُورِ وَٱلْأَذَى" },
	{ name: "ٱلْمُقِيت", meaning: "ٱلَّذِي يُقِيتُ ٱلْأَرْوَاحَ وَٱلْأَرْزَاقَ" },
	{ name: "ٱلْحسِيب", meaning: "ٱلَّذِي يَكْفِي عِبَادَهُ وَيُحَاسِبُهُمْ" },
	{ name: "ٱلْجَلِيل", meaning: "ٱلَّذِي لَهُ ٱلْعَظَمَةُ وَٱلْجَلَالُ فِي صِفَاتِهِ وَأَفْعَالِهِ" },
	{ name: "ٱلْكَرِيم", meaning: "ٱلَّذِي يُكْرِمُ عِبَادَهُ بِنِعَمِهِ، وَيَتَجَاوَزُ عَنْ زَلَّاتِهِمْ" },
	{ name: "ٱلرَّقِيب", meaning: "ٱلَّذِي يَرْقُبُ عِبَادَهُ وَيَعْلَمُ أَحْوَالَهُمْ" },
	{ name: "ٱلْمُجِيب", meaning: "ٱلَّذِي يُجِيبُ دُعَاءَ عِبَادِهِ وَيُلَبِّي حَاجَاتِهِمْ" },
	{ name: "ٱلْوَاسِع", meaning: "ٱلَّذِي وَسِعَ عِلْمُهُ وَرَحْمَتُهُ كُلَّ شَيْءٍ" },
	{ name: "ٱلْحَكِيم", meaning: "ٱلَّذِي يَضَعُ ٱلْأُمُورَ فِي مَوَاضِعِهَا بِحِكْمَةٍ" },
	{ name: "ٱلْوَدُود", meaning: "ٱلَّذِي يُحِبُّ عِبَادَهُ وَيُحِبُّونَهُ" },
	{ name: "ٱلْمَجِيد", meaning: "ٱلَّذِي لَهُ ٱلْمَجْدُ وَٱلْعَظَمَةُ فِي ذَاتِهِ وَأَفْعَالِهِ" },
	{ name: "ٱلْبَاعِث", meaning: "ٱلَّذِي يَبْعَثُ ٱلْخَلَائِقَ بَعْدَ ٱلْمَوْتِ" },
	{ name: "ٱلشَّهِيد", meaning: "ٱلَّذِي لَا يَغِيبُ عَنْهُ شَيْءٌ وَهُوَ شَاهِدٌ عَلَى كُلِّ شَيْءٍ" },
	{ name: "ٱلْحَقّ", meaning: "ٱلَّذِي حَقِيقَتُهُ وَعِبَادَتُهُ وَوَعْدُهُ حَقٌّ" },
	{ name: "ٱلْوَكِيل", meaning: "ٱلَّذِي يَتَوَكَّلُ عَلَيْهِ ٱلْعِبَادُ فِي تَدْبِيرِ شُؤُونِهِمْ" },
	{ name: "ٱلْقَوِيّ", meaning: "ٱلَّذِي لَا يُعْجِزُهُ شَيْءٌ فِي ٱلسَّمَاوَاتِ وَٱلْأَرْضِ" },
	{ name: "ٱلْمَتِين", meaning: "ٱلَّذِي لَا يَتَزَعْزَعُ فِي قُوَّتِهِ، وَلَا يَضْعُفُ" },
	{ name: "ٱلْوَلِيّ", meaning: "ٱلَّذِي يَتَوَلَّى أُمُورَ عِبَادِهِ بِرِعَايَةٍ وَحِمَايَةٍ" },
	{ name: "ٱلْحَمِيد", meaning: "ٱلَّذِي يَسْتَحِقُّ ٱلْحَمْدَ مِنْ جَمِيعِ خَلْقِهِ" },
	{ name: "ٱلْمُحْصِي", meaning: "ٱلَّذِي يُحْصِي كُلَّ شَيْءٍ فِي ٱلْكَوْنِ وَيَعْلَمُهُ بِدِقَّةٍ" },
	{ name: "ٱلْمُبْدِئ", meaning: "ٱلَّذِي يَبْدَأُ خَلْقَهُ مِنَ ٱلْعَدَمِ" },
	{ name: "ٱلْمُعِيد", meaning: "ٱلَّذِي يُعِيدُ ٱلْخَلْقَ بَعْدَ مَوْتِهِمْ" },
	{ name: "ٱلْمُحْيِي", meaning: "ٱلَّذِي يُحْيِي ٱلْأَحْيَاءَ وَيَبْعَثُهُمْ" },
	{ name: "ٱلْمُمِيت", meaning: "ٱلَّذِي يُمِيتُ ٱلْخَلَائِقَ عِنْدَ ٱنْتِهَاءِ أَجَلِهِمْ" },
	{ name: "ٱلْحَيّ", meaning: "ٱلَّذِي لَا يَمُوتُ، وَهُوَ دَائِمُ ٱلْبَقَاءِ" },
	{ name: "ٱلْقَيُّوم", meaning: "ٱلَّذِي يَقُومُ عَلَى حِفْظِ وَإِدَارَةِ ٱلْكَوْنِ، لَا يَغْفُلُ عَنْ شَيْءٍ" },
	{ name: "ٱلْوَاجِد", meaning: "ٱلَّذِي يَجِدُ كُلَّ شَيْءٍ، لَا يُعْجِزُهُ شَيْءٌ" },
	{ name: "ٱلْمَاجِد", meaning: "ٱلَّذِي لَهُ ٱلْمَجْدُ وَٱلْعَظَمَةُ فِي ذَاتِهِ وَصِفَاتِهِ" },
	{ name: "ٱلْوَاحِد", meaning: "ٱلَّذِي لَا شَرِيكَ لَهُ فِي مُلْكِهِ وَأُلُوهِيَّتِهِ" },
	{ name: "ٱلْأَحَد", meaning: "ٱلَّذِي لَا مَثِيلَ لَهُ وَلَا شَبِيهَ" },
	{ name: "ٱلصَّمَد", meaning: "ٱلَّذِي يُصْمَدُ إِلَيْهِ فِي كُلِّ حَاجَةٍ وَلَا يَرُدُّ أَحَدًا" },
	{ name: "ٱلْقَادِر", meaning: "ٱلَّذِي لَهُ ٱلْقُدْرَةُ ٱلْمُطْلَقَةُ عَلَى كُلِّ شَيْءٍ" },
	{ name: "ٱلْمُقْتَدِر", meaning: "ٱلَّذِي يَقْدِرُ عَلَى كُلِّ شَيْءٍ بِلَا حُدُودٍ" },
	{ name: "ٱلْمُقَدِّم", meaning: "ٱلَّذِي يُقَدِّمُ مَا يَشَاءُ وَيَضَعُهُ فِي مَكَانِهِ" },
	{ name: "ٱلْمُؤَخِّر", meaning: "ٱلَّذِي يُؤَخِّرُ مَا يَشَاءُ بِحِكْمَتِهِ" },
	{ name: "ٱلْأَوَّل", meaning: "ٱلَّذِي لَيْسَ قَبْلَهُ شَيْءٌ" },
	{ name: "ٱلْآخِر", meaning: "ٱلَّذِي لَيْسَ بَعْدَهُ شَيْءٌ" },
	{ name: "ٱلظَّاهِر", meaning: "ٱلَّذِي ظَهَرَ فَوْقَ كُلِّ شَيْءٍ" },
	{ name: "ٱلْبَاطِن", meaning: "ٱلَّذِي لَا يَخْفَى عَلَيْهِ شَيْءٌ فِي بَاطِنِ ٱلْأُمُورِ" },
	{ name: "ٱلْوَالِي", meaning: "ٱلَّذِي يَتَوَلَّى أُمُورَ ٱلْخَلَائِقِ بِتَدْبِيرٍ وَحُكْمٍ" },
	{ name: "ٱلْمُتَعَالِي", meaning: "ٱلَّذِي تَعَالَى عَنْ كُلِّ عَيْبٍ وَنَقْصٍ" },
	{ name: "ٱلْبَرّ", meaning: "ٱلَّذِي يَحْسُنُ إِلَى عِبَادِهِ بِرَحْمَةٍ وَإِحْسَانٍ" },
	{ name: "ٱلتَّوَّاب", meaning: "ٱلَّذِي يَقْبَلُ تَوْبَةَ عِبَادِهِ وَيُرَجِّعُهُمْ إِلَى طَاعَتِهِ" },
	{ name: "ٱلْمُنْتَقِم", meaning: "ٱلَّذِي يَنْتَقِمُ مِنَ ٱلظَّالِمِينَ بِعَدْلِهِ" },
	{ name: "ٱلْعَفُوّ", meaning: "ٱلَّذِي يَعْفُو عَنْ ٱلذُّنُوبِ وَيَتَجَاوَزُ عَنِ ٱلْمُسِيئِينَ" },
	{ name: "ٱلرَّءُوف", meaning: "ٱلَّذِي يَرْأَفُ بِعِبَادِهِ وَيَرْحَمُهُمْ" },
	{ name: "ٱلْمَالِكُ ٱلْمُلْك", meaning: "ٱلَّذِي يَمْلِكُ ٱلْمُلْكَ كُلَّهُ وَلَا يُنَازِعُهُ فِيهِ أَحَدٌ" },
	{ name: "ذُو ٱلْجَلَالِ وَٱلْإِكْرَام", meaning: "ٱلَّذِي لَهُ ٱلْعَظَمَةُ وَٱلْكَرَامَةُ فِي ذَاتِهِ" },
	{ name: "ٱلْمُقْسِط", meaning: "ٱلَّذِي يَعْدِلُ فِي أَحْكَامِهِ بَيْنَ خَلْقِهِ" },
	{ name: "ٱلْجَامِع", meaning: "ٱلَّذِي يَجْمَعُ ٱلْخَلَائِقَ يَوْمَ ٱلْقِيَامَةِ لِلْحِسَابِ" },
	{ name: "ٱلْغَنِيّ", meaning: "ٱلَّذِي لَا يَحْتَاجُ إِلَى شَيْءٍ وَكُلُّ شَيْءٍ يَحْتَاجُ إِلَيْهِ" },
	{ name: "ٱلْمُغْنِي", meaning: "ٱلَّذِي يُغْنِي عِبَادَهُ وَيَكْفِيهِمْ بِفَضْلِهِ" },
	{ name: "ٱلْمَانِع", meaning: "ٱلَّذِي يَمْنَعُ مَا يَشَاءُ مِنَ ٱلْخَيْرِ وَٱلرِّزْقِ" },
	{ name: "ٱلضَّارّ", meaning: "ٱلَّذِي يَضُرُّ مَنْ يَشَاءُ بِإِذْنِهِ" },
	{ name: "ٱلنَّافِع", meaning: "ٱلَّذِي يَنْفَعُ عِبَادَهُ بِكُلِّ مَا هُوَ خَيْرٌ" },
	{ name: "ٱلنُّور", meaning: "ٱلَّذِي هُوَ نُورُ ٱلسَّمَاوَاتِ وَٱلْأَرْضِ، يَهْدِي بِهِ عِبَادَهُ" },
	{ name: "ٱلْهَادِي", meaning: "ٱلَّذِي يَهْدِي ٱلنَّاسَ إِلَى ٱلطَّرِيقِ ٱلصَّحِيحِ" },
	{ name: "ٱلْبَدِيع", meaning: "ٱلَّذِي يُبْدِعُ خَلْقَهُ بِأَجْمَلِ صُورَةٍ" },
	{ name: "ٱلْبَاقِي", meaning: "ٱلَّذِي لَا يَفْنَى وَلَا يَزُولُ" },
	{ name: "ٱلْوَارِث", meaning: "ٱلَّذِي يَرِثُ كُلَّ شَيْءٍ فِي هَذَا ٱلْكَوْنِ" },
	{ name: "ٱلرَّشِيد", meaning: "ٱلَّذِي يَهْدِي عِبَادَهُ إِلَى ٱلطَّرِيقِ ٱلْمُسْتَقِيمِ" },
	{ name: "ٱلصَّبُور", meaning: "ٱلَّذِي يَتَحَلَّى بِٱلصَّبْرِ فِي ٱلتَّعَامُلِ مَعَ عِبَادِهِ" }
];

// Wrappers
const findsurah = document.querySelector(".surahInputWrapper")
const SurahsWrapper = document.querySelector(".surahs")

// Statues
const Status = document.querySelector(".status")

// Show And Hide Surahs Buttons
const showall = document.querySelector(".showall")
const clear = document.querySelector(".Clear")

// Alerts
const alert1 = document.querySelector(".alert1")
const alertText = document.querySelector(".alert1 h1")

// Player
const Player = document.querySelector("audio")

// Additions
var number = 0

// Make All Surahs
function makeSurahs(bool) {
	if (bool) {
		for (let i = 0; i < 114; i++) {
			SurahsWrapper.innerHTML += `<div class="surah">
				<h3 class="surahName">سورة ${surahs[i].name}</h3>
				<h3 class="surahOrder">رقم السورة: ${surahs[i].Order}</h3>
				<h3 class="surahVerses">عدد الآيات: ${surahs[i].verses}</h3>
				<h3 class="surahVerses">النزول: ${surahs[i].type}</h3>
				<button style="margin-bottom: 10px;" onclick= "window.open('quran/${surahs[i].name}.html')">اقرأ</button>
				<button onclick="alert1.showModal();alertText.innerHTML = '${surahs[i].summary}'">التفسير</button>
				<div class="listen">
					<button onclick="MakeSurahSoundPlayPause('${surahs[i].link}' ,true)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="24" height="24" fill="CurrentColor"><path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg></button>
					<button onclick="MakeSurahSoundPlayPause('${surahs[i].link}' ,false)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" height="24" fill="CurrentColor"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></button>
				</div>
			</div>
			`
			clear.addEventListener("click", () => { SurahsWrapper.innerHTML = "" })
			Status.innerHTML = `تم إظهار جميع السور`
		}
	}
	else {
		SurahsWrapper.innerHTML = ""
	}
}
function MakeSurahSoundPlayPause(path, IsPause) {
	// Create a new audio element
	var audio = new Audio(path);
	audio.src = path

	if (!IsPause) {
		// Play the audio
		audio.play();
	}
	else {
		audio.pause();
	}
}



function gridSurahs() {
	number += 1

	if (innerWidth > 910) {
		// set the Surahs to a grid by it`s number
		SurahsWrapper.style.gridTemplateColumns = `repeat(${number},1fr)`
		if (number > 3) {
			number = 3
			SurahsWrapper.style.gridTemplateColumns = `repeat(${number},1fr)`
		}
	}
	else if (innerHeight > 685) {
		// set the Surahs to a grid by it`s number
		SurahsWrapper.style.gridTemplateColumns = `repeat(${number},1fr)`
		if (number > 2) {
			number = 2
			SurahsWrapper.style.gridTemplateColumns = `repeat(${number},1fr)`
		}
	}
}

function findObject() {
	var surahfinder = document.querySelector(".surahfinder").value;
	if (surahfinder) {
		gridSurahs()
		window.addEventListener("resize", gridSurahs)

		// Declering Two New Contant
		const foundObject = surahs.find(obj => obj.name === surahfinder);

		// Check if the object is found
		if (foundObject) {
			// make the surahs disappear
			makeSurahs(false);

			// make the surah wrapper appear With The Contents inside it
			SurahsWrapper.innerHTML += `<div class="surah">
				<h3 class="surahName">سورة ${foundObject.name}</h3>
				<h3 class="surahOrder">رقم السورة: ${foundObject.Order}</h3>
				<h3 class="surahVerses">عدد الآيات: ${foundObject.verses}</h3>
				<h3 class="surahVerses">النزول: ${foundObject.type}</h3>
				<button style="margin-bottom: 10px;" onclick= "window.open('quran/${foundObject.name}.html')">اقرأ</button>
				<button onclick="alert1.showModal();alertText.innerHTML = '${foundObject.summary}'">التفسير</button>
				<div class="listen">
					<button onclick="MakeSurahSoundPlayPause('${foundObject.link}' ,true)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="24" height="24" fill="CurrentColor"><path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg></button>
					<button onclick="MakeSurahSoundPlayPause('${foundObject.link}' ,false)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" height="24" fill="CurrentColor"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></button>
				</div>
			</div>`;

			// Clear The Surahs Contents If Needed
			clear.addEventListener("click", () => { SurahsWrapper.innerHTML = "" })
			Status.innerHTML = `تم العثور على سورة ${surahfinder}`
			surahfinder = null;
		}
		else {
			Status.innerHTML = `لم يتم العثور على: ${surahfinder}`
		}
	} else {
		Status.innerHTML = `برجاء إدخال أى سورة`
	}
}

// Events Listeners
findsurah.addEventListener("submit", e => { e.preventDefault(); findObject(); })
showall.addEventListener("click", () => { SurahsWrapper.innerHTML = ""; makeSurahs(true) })

// أسماء الله الحسنى
const Allah_names = document.querySelector(".names");
for (let i = 0; i < namesOfAllah.length; i++) {
	Allah_names.innerHTML += `<div class="name"><h1>الاسم: ${namesOfAllah[i].name}</h1><p>المعنى: ${namesOfAllah[i].meaning}</p></div>`
}