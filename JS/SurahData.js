const surahs = [
	{ Order: 1, name: "الفاتحة", verses: 7, type: "مكية", summary: "أم الكتاب، تتضمن الثناء على الله، طلب الهداية، والدعاء بالثبات على الصراط المستقيم." },
	{ Order: 2, name: "البقرة", verses: 286, type: "مدنية", summary: "أطول سورة، تعالج أحكام الشريعة، القصص، الإيمان، التعاملات، والاختبار بالإيمان والعمل." },
	{ Order: 3, name: "آل عمران", verses: 200, type: "مدنية", summary: "تؤكد أهمية الثبات في الإيمان، الدعوة، وحدة الأمة، وأحداث غزوة أحد." },
	{ Order: 4, name: "النساء", verses: 176, type: "مدنية", summary: "تعالج قضايا الأسرة، الميراث، العدل، وحماية الحقوق." },
	{ Order: 5, name: "المائدة", verses: 120, type: "مدنية", summary: "تتحدث عن العهود والمواثيق، الحلال والحرام، وأخلاقيات المعاملات." },
	{ Order: 6, name: "الأنعام", verses: 165, type: "مكية", summary: "تركز على التوحيد، الدلائل الكونية، والرد على الشرك." },
	{ Order: 7, name: "الأعراف", verses: 206, type: "مكية", summary: "قصص الأمم السابقة، الدعوة للإصلاح، وعواقب التكذيب." },
	{ Order: 8, name: "الأنفال", verses: 75, type: "مدنية", summary: "تناقش الغنائم وأخلاقيات القتال." },
	{ Order: 9, name: "التوبة", verses: 129, type: "مدنية", summary: "تُعنى بالمنافقين، الجهاد، والتحذير من الخيانة." },
	{ Order: 10, name: "يونس", verses: 109, type: "مكية", summary: "دعوة للتوحيد، قصص الأنبياء، ووعد الله للمؤمنين." },
	{ Order: 11, name: "هود", verses: 123, type: "مكية", summary: "تثبيت النبي بقصص الأنبياء السابقين." },
	{ Order: 12, name: "يوسف", verses: 111, type: "مكية", summary: "قصة النبي يوسف عبرةً في الصبر والتوكل على الله." },
	{ Order: 13, name: "الرعد", verses: 43, type: "مدنية", summary: "دلائل قدرة الله وتوحيده." },
	{ Order: 14, name: "إبراهيم", verses: 52, type: "مكية", summary: "شكر النعم والتحذير من الكفر." },
	{ Order: 15, name: "الحجر", verses: 99, type: "مكية", summary: "وعد الله بالحفظ، وتحذير المكذبين." },
	{ Order: 16, name: "النحل", verses: 128, type: "مكية", summary: "نعم الله، توحيده، وتثبيت النبي." },
	{ Order: 17, name: "الإسراء", verses: 111, type: "مكية", summary: "الإسراء والمعراج، الأخلاقيات، وأحكام فردية." },
	{ Order: 18, name: "الكهف", verses: 110, type: "مكية", summary: "قصص الفتية، الكنز، موسى والخضر، وذي القرنين." },
	{ Order: 19, name: "مريم", verses: 98, type: "مكية", summary: "قصة مريم، عيسى، وزكريا." },
	{ Order: 20, name: "طه", verses: 135, type: "مكية", summary: "قصة موسى وفرعون، وأهمية القرآن." },
	{ Order: 21, name: "الأنبياء", verses: 112, type: "مكية", summary: "قصص الأنبياء، الحساب، وعظمة الخالق." },
	{ Order: 22, name: "الحج", verses: 78, type: "مدنية", summary: "عبودية الله وأحكام الحج." },
	{ Order: 23, name: "المؤمنون", verses: 118, type: "مكية", summary: "صفات المؤمنين، الخلق، والحساب." },
	{ Order: 24, name: "النور", verses: 64, type: "مدنية", summary: "أحكام اجتماعية وآداب الاستئذان." },
	{ Order: 25, name: "الفرقان", verses: 77, type: "مكية", summary: "الفرق بين المؤمنين والكافرين." },
	{ Order: 26, name: "الشعراء", verses: 227, type: "مكية", summary: "قصص الأنبياء والدعوة." },
	{ Order: 27, name: "النمل", verses: 93, type: "مكية", summary: "قصة سليمان، وملكة سبأ." },
	{ Order: 28, name: "القصص", verses: 88, type: "مكية", summary: "قصة موسى وفرعون." },
	{ Order: 29, name: "العنكبوت", verses: 69, type: "مكية", summary: "الابتلاءات وثبات المؤمنين." },
	{ Order: 30, name: "الروم", verses: 60, type: "مكية", summary: "أحداث تاريخية ودلائل الإيمان." },
	{ Order: 31, name: "لقمان", verses: 34, type: "مكية", summary: "الحكمة والنصائح للأبناء." },
	{ Order: 32, name: "السجدة", verses: 30, type: "مكية", summary: "دلائل البعث وتوحيد الله." },
	{ Order: 33, name: "الأحزاب", verses: 73, type: "مدنية", summary: "غزوة الأحزاب وأحكام اجتماعية." },
	{ Order: 34, name: "سبأ", verses: 54, type: "مكية", summary: "النعم وشكرها." },
	{ Order: 35, name: "فاطر", verses: 45, type: "مكية", summary: "عظمة خلق الله." },
	{ Order: 36, name: "يس", verses: 83, type: "مكية", summary: "دلائل القدرة الإلهية." },
	{ Order: 37, name: "الصافات", verses: 182, type: "مكية", summary: "توحيد الله وقصص الأنبياء." },
	{ Order: 38, name: "ص", verses: 88, type: "مكية", summary: "دعوة للتوحيد وعاقبة المكذبين." },
	{ Order: 39, name: "الزمر", verses: 75, type: "مكية", summary: "الإخلاص في العبادة." },
	{ Order: 40, name: "غافر", verses: 85, type: "مكية", summary: "العاقبة للمتقين." },
	{ Order: 41, name: "فصلت", verses: 54, type: "مكية", summary: "دلائل الوحي والتوحيد." },
	{ Order: 42, name: "الشورى", verses: 53, type: "مكية", summary: "أهمية الشورى." },
	{ Order: 43, name: "الزخرف", verses: 89, type: "مكية", summary: "الحياة الدنيا وزخرفها." },
	{ Order: 44, name: "الدخان", verses: 59, type: "مكية", summary: "التحذير من يوم القيامة." },
	{ Order: 45, name: "الجاثية", verses: 37, type: "مكية", summary: "عاقبة المكذبين." },
	{ Order: 46, name: "الأحقاف", verses: 35, type: "مكية", summary: "قصص عاد وثمود." },
	{ Order: 47, name: "محمد", verses: 38, type: "مدنية", summary: "الجهاد وأخلاق المسلمين." },
	{ Order: 48, name: "الفتح", verses: 29, type: "مدنية", summary: "صلح الحديبية." },
	{ Order: 49, name: "الحجرات", verses: 18, type: "مدنية", summary: "آداب المجتمع." },
	{ Order: 50, name: "ق", verses: 45, type: "مكية", summary: "البعث والحساب." },
	{ Order: 51, name: "الذاريات", verses: 60, type: "مكية", summary: "عاقبة المتقين." },
	{ Order: 52, name: "الطور", verses: 49, type: "مكية", summary: "دلائل التوحيد." },
	{ Order: 53, name: "النجم", verses: 62, type: "مكية", summary: "معجزة المعراج." },
	{ Order: 54, name: "القمر", verses: 55, type: "مكية", summary: "أحداث يوم القيامة." },
	{ Order: 55, name: "الرحمن", verses: 78, type: "مدنية", summary: "نعم الله المتكررة." },
	{ Order: 56, name: "الواقعة", verses: 96, type: "مكية", summary: "أهوال يوم القيامة." },
	{ Order: 57, name: "الحديد", verses: 29, type: "مدنية", summary: "الإنفاق في سبيل الله." },
	{ Order: 58, name: "المجادلة", verses: 22, type: "مدنية", summary: "أحكام اجتماعية." },
	{ Order: 59, name: "الحشر", verses: 24, type: "مدنية", summary: "تطهير المجتمع." },
	{ Order: 60, name: "الممتحنة", verses: 13, type: "مدنية", summary: "العلاقات مع غير المسلمين." },
	{ Order: 61, name: "الصف", verses: 14, type: "مدنية", summary: "الجهاد والوحدة." },
	{ Order: 62, name: "الجمعة", verses: 11, type: "مدنية", summary: "أهمية صلاة الجمعة." },
	{ Order: 63, name: "المنافقون", verses: 11, type: "مدنية", summary: "أخلاق المنافقين." },
	{ Order: 64, name: "التغابن", verses: 18, type: "مدنية", summary: "الإيمان بالله واليوم الآخر." },
	{ Order: 65, name: "الطلاق", verses: 12, type: "مدنية", summary: "أحكام الطلاق." },
	{ Order: 66, name: "التحريم", verses: 12, type: "مدنية", summary: "أخلاقيات الأسرة." },
	{ Order: 67, name: "الملك", verses: 30, type: "مكية", summary: "ملك الله وقدرته." },
	{ Order: 68, name: "القلم", verses: 52, type: "مكية", summary: "الأخلاق والآداب." },
	{ Order: 69, name: "الحاقة", verses: 52, type: "مكية", summary: "أهوال يوم القيامة." },
	{ Order: 70, name: "المعارج", verses: 44, type: "مكية", summary: "عاقبة المكذبين." },
	{ Order: 71, name: "نوح", verses: 28, type: "مكية", summary: "قصة النبي نوح ودعوته." },
	{ Order: 72, name: "الجن", verses: 28, type: "مكية", summary: "إيمان الجن بالقرآن." },
	{ Order: 73, name: "المزمل", verses: 20, type: "مكية", summary: "أوامر للنبي في العبادة." },
	{ Order: 74, name: "المدثر", verses: 56, type: "مكية", summary: "الدعوة والإعداد لها." },
	{ Order: 75, name: "القيامة", verses: 40, type: "مكية", summary: "البعث والحساب." },
	{ Order: 76, name: "الإنسان", verses: 31, type: "مدنية", summary: "جزاء المتقين." },
	{ Order: 77, name: "المرسلات", verses: 50, type: "مكية", summary: "إنذار يوم القيامة." },
	{ Order: 78, name: "النبأ", verses: 40, type: "مكية", summary: "أهوال يوم القيامة." },
	{ Order: 79, name: "النازعات", verses: 46, type: "مكية", summary: "دلائل البعث." },
	{ Order: 80, name: "عبس", verses: 42, type: "مكية", summary: "إهمال النبي للأعمى." },
	{ Order: 81, name: "التكوير", verses: 29, type: "مكية", summary: "أهوال القيامة." },
	{ Order: 82, name: "الإنفطار", verses: 19, type: "مكية", summary: "دلائل يوم الحساب." },
	{ Order: 83, name: "المطففين", verses: 36, type: "مكية", summary: "التحذير من الغش." },
	{ Order: 84, name: "الإنشقاق", verses: 25, type: "مكية", summary: "دلائل الآخرة." },
	{ Order: 85, name: "البروج", verses: 22, type: "مكية", summary: "التحذير من عاقبة الظلم." },
	{ Order: 86, name: "الطارق", verses: 17, type: "مكية", summary: "دلائل قدرة الله." },
	{ Order: 87, name: "الأعلى", verses: 19, type: "مكية", summary: "الحث على التذكر والتسبيح." },
	{ Order: 88, name: "الغاشية", verses: 26, type: "مكية", summary: "الحساب." },
	{ Order: 89, name: "الفجر", verses: 30, type: "مكية", summary: "عاقبة الطغاة." },
	{ Order: 90, name: "البلد", verses: 20, type: "مكية", summary: "التحديات في الحياة." },
	{ Order: 91, name: "الشمس", verses: 15, type: "مكية", summary: "أهمية تزكية النفس." },
	{ Order: 92, name: "الليل", verses: 21, type: "مكية", summary: "العمل في الدنيا." },
	{ Order: 93, name: "الضحى", verses: 11, type: "مكية", summary: "فضل الله على النبي." },
	{ Order: 94, name: "الشرح", verses: 8, type: "مكية", summary: "تخفيف العبء عن النبي." },
	{ Order: 95, name: "التين", verses: 8, type: "مكية", summary: "خلق الإنسان في أحسن تقويم." },
	{ Order: 96, name: "العلق", verses: 19, type: "مكية", summary: "بداية الوحي." },
	{ Order: 97, name: "القدر", verses: 5, type: "مكية", summary: "ليلة القدر." },
	{ Order: 98, name: "البينة", verses: 8, type: "مدنية", summary: "الفرق بين الحق والباطل." },
	{ Order: 99, name: "الزلزلة", verses: 8, type: "مدنية", summary: "أحداث يوم القيامة." },
	{ Order: 100, name: "العاديات", verses: 11, type: "مكية", summary: "صفة الخيل في الجهاد." },
	{ Order: 101, name: "القارعة", verses: 11, type: "مكية", summary: "أهوال يوم القيامة." },
	{ Order: 102, name: "التكاثر", verses: 8, type: "مكية", summary: "التحذير من حب المال." },
	{ Order: 103, name: "العصر", verses: 3, type: "مكية", summary: "أهمية الوقت." },
	{ Order: 104, name: "الهمزة", verses: 9, type: "مكية", summary: "عاقبة السخرية." },
	{ Order: 105, name: "الفيل", verses: 5, type: "مكية", summary: "حادثة الفيل." },
	{ Order: 106, name: "قريش", verses: 4, type: "مكية", summary: "فضل قريش." },
	{ Order: 107, name: "الماعون", verses: 7, type: "مكية", summary: "أفعال المنافقين." },
	{ Order: 108, name: "الكوثر", verses: 3, type: "مكية", summary: "نعمة الكوثر." },
	{ Order: 109, name: "الكافرون", verses: 6, type: "مكية", summary: "البراءة من الشرك." },
	{ Order: 110, name: "النصر", verses: 3, type: "مدنية", summary: "وعد النصر." },
	{ Order: 111, name: "المسد", verses: 5, type: "مكية", summary: "مصير أبي لهب." },
	{ Order: 112, name: "الإخلاص", verses: 4, type: "مكية", summary: "توحيد الله." },
	{ Order: 113, name: "الفلق", verses: 5, type: "مكية", summary: "الاستعاذة." },
	{ Order: 114, name: "الناس", verses: 6, type: "مكية", summary: "الاستعاذة من الوسواس." }
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

const findsurah = document.querySelector(".surahInputWrapper")
const Status = document.querySelector(".status")
const SurahsWrapper = document.querySelector(".surahs")
const alert1 = document.querySelector(".alert1")
const alertText = document.querySelector(".alert1 h1")
const surahWrapper = document.createElement("div")
surahWrapper.className = "surah"

function resize() {
	const screen = window.innerWidth
	if (screen > 910) SurahsWrapper.style.gridTemplateColumns = "repeat(3, 1fr)"
	if (screen < 910) SurahsWrapper.style.gridTemplateColumns = "repeat(2, 1fr)"
	if (screen < 685) SurahsWrapper.style.gridTemplateColumns = "repeat(1, 1fr)"
}

function makeSurahs(bool) {
	if (bool) {
		SurahsWrapper.innerHTML = ""
		for (let i = 0; i < 114; i++) {
			SurahsWrapper.innerHTML += `<div class="surah">
				<h3 class="surahName">سورة ${surahs[i].name}</h3>
				<h3 class="surahOrder">رقم السورة: ${surahs[i].Order}</h3>
				<h3 class="surahVerses">عدد الآيات: ${surahs[i].verses}</h3>
				<h3 class="surahVerses">النزول: ${surahs[i].type}</h3>
				<button style="margin-bottom: 10px;" onclick= "window.open('quran/${surahs[i].name}.html')">اقرأ</button>
				<button onclick="alert1.showModal();alertText.innerHTML = '${surahs[i].summary}'">التفسير</button>
			</div>
			`
			document.querySelector(".surah").style.width = "100%"
		}
	}
	else {
		SurahsWrapper.innerHTML = ""
	}
}

function makesurah(foundObject, surahfinder) {
	for (let l = 0; l > 2; l++) {
		SurahsWrapper.innerHTML = null
	}

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
			</div>`;

	// Clear The Surahs Contents If Needed
	document.querySelector(".Clear").addEventListener("click", () => {
		SurahsWrapper.innerHTML = ""
	})
	Status.innerHTML = `تم العثور على سورة ${surahfinder}`

	surahfinder = "";
}

function makeError(surahfinder) {
	SurahsWrapper.innerHTML = null
	Status.innerHTML = `لا توجد  ${surahfinder}`
	makeSurahs(true)
}

function findObject() {
	// make the surahs disappers
	makeSurahs(false)

	// Declering Two New Contant
	const surahfinder = document.querySelector(".surahfinder").value;
	const foundObject = surahs.find(obj => obj.name === surahfinder);

	// Check if the object is found
	if (foundObject) {
		makesurah(foundObject, surahfinder)
	}
	else {
		makeError(surahfinder)
	}
}

// Events Listeners
resize()
findsurah.addEventListener("submit", e => { e.preventDefault(); findObject(); })
window.addEventListener("resize", resize)

// أسماء الله الحسنى
const Allah_names = document.querySelector(".names");
for (let i = 0; i < namesOfAllah.length; i++) {
	Allah_names.innerHTML += `<div class="name"><h1>الاسم: ${namesOfAllah[i].name}</h1><p>المعنى: ${namesOfAllah[i].meaning}</p></div>`
}