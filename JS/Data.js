const namesOfAllah = [
    { Name: "الرحمن", name: "ٱلرَّحْمَٰن", meaning: "الَّذِي يَرْحَمُ جَمِيعَ مَخْلُوقَاتِهِ بِرَحْمَةٍ وَاسِعَةٍ، لَا تَقْتَصِرُ عَلَى الْمُؤْمِنِينَ فَقَطْ" },
    { Name: "الرحيم", name: "ٱلرَّحِيم", meaning: "الَّذِي يَرْحَمُ الْمُؤْمِنِينَ بِرَحْمَةٍ خَاصَّةٍ، وَيَغْفِرُ لَهُمْ" },
    { Name: "الملك", name: "ٱلْمَلِك", meaning: "ٱلْمَالِكُ وَٱلْمُتَصَرِّفُ فِي مُلْكِهِ، لَيْسَ لِأَحَدٍ غَيْرُهُ" },
    { Name: "القدوس", name: "ٱلْقُدُّوس", meaning: "ٱلطَّاهِرُ ٱلْمُنَزَّهُ عَنْ كُلِّ نَقْصٍ أَوْ عَيْبٍ" },
    { Name: "السلام", name: "ٱلسَّلَام", meaning: "ٱلَّذِي سَلِمَ مِنْ كُلِّ عَيْبٍ، وَهُوَ مَصْدَرُ ٱلسَّلَامِ وَٱلأَمَانِ" },
    { Name: "المؤمن", name: "ٱلْمُؤْمِن", meaning: "ٱلَّذِي يُصَدِّقُ وَيُطْمَئِنُّ قَلْبَ عِبَادِهِ ٱلْمُؤْمِنِينَ" },
    { Name: "المهيمن", name: "ٱلْمُهَيْمِن", meaning: "ٱلَّذِي يُرَاقِبُ كُلَّ شَيْءٍ، وَهُوَ ٱلْحَافِظُ لِخَلْقِهِ" },
    { Name: "العزيز", name: "ٱلْعَزِيز", meaning: "ٱلَّذِي لَا يُقْهَرُ وَلَا يُغْلَبُ" },
    { Name: "الجبار", name: "ٱلْجَبَّار", meaning: "ٱلَّذِي يَقْهَرُ كُلَّ شَيْءٍ، وَيَجْبُرُ عِبَادَهُ" },
    { Name: "المتكبر", name: "ٱلْمُتَكَبِّر", meaning: "ٱلَّذِي يَتَعَالَى عَنْ جَمِيعِ ٱلْمَخْلُوقَاتِ، وَلَا يُنَازِعُهُ أَحَدٌ فِي عَظَمَتِهِ" },
    { Name: "الخالق", name: "ٱلْخَالِق", meaning: "ٱلَّذِي يَخْلُقُ كُلَّ شَيْءٍ مِنَ ٱلْعَدَمِ" },
    { Name: "البارئ", name: "ٱلْبَارِئ", meaning: "ٱلَّذِي يَخْلُقُ ٱلْأَشْيَاءَ كَمَا يُرِيدُ، وَيُبْدِعُ خَلْقَهُ" },
    { Name: "المصور", name: "ٱلْمُصَوِّر", meaning: "ٱلَّذِي يَخْلُقُ ٱلْمَخْلُوقَاتِ بِأَشْكَالٍ مُخْتَلِفَةٍ، وَيُصَوِّرُهَا بِمَا يَشَاءُ" },
    { Name: "الغفار", name: "ٱلْغَفَّار", meaning: "ٱلَّذِي يَغْفِرُ ٱلذُّنُوبَ وَيَرْحَمُ ٱلْخَطَايَا" },
    { Name: "القهار", name: "ٱلْقَهَّار", meaning: "ٱلَّذِي يَقْهَرُ جَمِيعَ ٱلْخَلَائِقِ وَلَا يُعْجِزُهُ شَيْءٌ" },
    { Name: "الوهاب", name: "ٱلْوَهَّاب", meaning: "ٱلَّذِي يَهَبُ ٱلْعَطَايَا وَٱلْبَرَكَاتِ بِلَا حِسَابٍ" },
    { Name: "الرزاق", name: "ٱلرَّزَّاق", meaning: "ٱلَّذِي يَرْزُقُ جَمِيعَ مَخْلُوقَاتِهِ مِنْ دُونِ ٱنْقِطَاعٍ" },
    { Name: "الفتاح", name: "ٱلْفَتَّاح", meaning: "ٱلَّذِي يَفْتَحُ ٱلْأَبْوَابَ ٱلْمُغْلَقَةَ وَيُوَفِّرُ ٱلْفُرَصَ" },
    { Name: "العليم", name: "ٱلْعَلِيم", meaning: "ٱلَّذِي يَعْلَمُ كُلَّ شَيْءٍ، لَا يَخْفَى عَلَيْهِ شَيْءٌ فِي ٱلْأَرْضِ أَوِ ٱلسَّمَاءِ" },
    { Name: "القابض", name: "ٱلْقَابِض", meaning: "ٱلَّذِي يَقْبِضُ ٱلْأَرْزَاقَ وَٱلْأَرْوَاحَ عِنْدَمَا يَشَاءُ" },
    { Name: "الباسط", name: "ٱلْبَاسِط", meaning: "ٱلَّذِي يُبْسِطُ ٱلرِّزْقَ وَيُوَسِّعُ عَلَى عِبَادِهِ" },
    { Name: "الخافض", name: "ٱلْخَافِض", meaning: "ٱلَّذِي يُخَفِّضُ مَنْ يَشَاءُ مِنْ خَلْقِهِ" },
    { Name: "الرافع", name: "ٱلرَّافِع", meaning: "ٱلَّذِي يَرْفَعُ مَنْ يَشَاءُ وَيُعْلِي شَأْنَهُ" },
    { Name: "المعز", name: "ٱلْمُعِز", meaning: "ٱلَّذِي يُعِزُّ مَنْ يَشَاءُ وَيَمْنَحُهُ ٱلْمَكَانَةَ ٱلْعَالِيَةَ" },
    { Name: "المذل", name: "ٱلْمُذِل", meaning: "ٱلَّذِي يُذِلُّ مَنْ يَشَاءُ وَيُخَفِّضُ مَكَانَتَهُ" },
    { Name: "السميع", name: "ٱلسَّمِيع", meaning: "ٱلَّذِي يَسْمَعُ كُلَّ شَيْءٍ، لَا يَخْفَى عَلَيْهِ كَلَامٌ وَلَا صَوْتٌ" },
    { Name: "البصير", name: "ٱلْبَصِير", meaning: "ٱلَّذِي يَرَى كُلَّ شَيْءٍ، لَا يَعْزُبُ عَنْهُ شَيْءٌ فِي ٱلْأَرْضِ أَوِ ٱلسَّمَاءِ" },
    { Name: "الحكم", name: "ٱلْحَكَم", meaning: "ٱلَّذِي يَحْكُمُ بَيْنَ عِبَادِهِ بِٱلْعَدْلِ وَيُعْطِي كُلَّ ذِي حَقٍّ حَقَّهُ" },
    { Name: "العدل", name: "ٱلْعَدْل", meaning: "ٱلَّذِي لَا يَجُورُ أَبَدًا وَيُعْطِي كُلَّ شَيْءٍ حَقَّهُ" },
    { Name: "اللطيف", name: "ٱللَّطِيف", meaning: "ٱلَّذِي يَلْطُفُ بِعِبَادِهِ بِرَحْمَةٍ وَرِقَّةٍ، وَيَعْطِفُ عَلَيْهِمْ" },
    { Name: "الخبير", name: "ٱلْخَبِير", meaning: "ٱلَّذِي يَعْلَمُ كُلَّ شَيْءٍ بِدِقَّةٍ، وَيَعْرِفُ مَا فِي ٱلْقُلُوبِ وَٱلْأَسْرَارِ" },
    { Name: "الحليم", name: "ٱلْحَلِيم", meaning: "ٱلَّذِي يَتَأَنَّى فِي مُعَاقَبَةِ عِبَادِهِ وَلَا يُعَجِّلُ بِهِمْ" },
    { Name: "العظيم", name: "ٱلْعَظِيم", meaning: "ٱلَّذِي عَظَمَتُهُ لَا تُحَدُّ وَلَا تُدْرَكُ" },
    { Name: "الغفور", name: "ٱلْغَفُور", meaning: "ٱلَّذِي يَغْفِرُ ٱلذُّنُوبَ جَمِيعًا وَلَا يُيْئَسُ عِبَادُهُ مِنْ رَحْمَتِهِ" },
    { Name: "الشكور", name: "ٱلشَّكُور", meaning: "ٱلَّذِي يَشْكُرُ عِبَادَهُ عَلَى أَعْمَالِهِمُ ٱلصَّالِحَةِ وَيُثِيبُهُمْ عَلَيْهَا" },
    { Name: "العلى", name: "ٱلْعَلِيّ", meaning: "ٱلَّذِي هُوَ أَعْلَى مِنْ كُلِّ شَيْءٍ، وَلَا يُعْلَى عَلَيْهِ" },
    { Name: "الكبير", name: "ٱلْكَبِير", meaning: "ٱلَّذِي هُوَ أَعْظَمُ مِنْ كُلِّ شَيْءٍ فِي ٱلْوُجُودِ" },
    { Name: "الحفيظ", name: "ٱلْحَفِيظ", meaning: "ٱلَّذِي يَحْفَظُ عِبَادَهُ مِنَ ٱلشُّرُورِ وَٱلْأَذَى" },
    { Name: "المقيت", name: "ٱلْمُقِيت", meaning: "ٱلَّذِي يُقِيتُ ٱلْأَرْوَاحَ وَٱلْأَرْزَاقَ" },
    { Name: "الحسيب", name: "ٱلْحسِيب", meaning: "ٱلَّذِي يَكْفِي عِبَادَهُ وَيُحَاسِبُهُمْ" },
    { Name: "الجليل", name: "ٱلْجَلِيل", meaning: "ٱلَّذِي لَهُ ٱلْعَظَمَةُ وَٱلْجَلَالُ فِي صِفَاتِهِ وَأَفْعَالِهِ" },
    { Name: "الكريم", name: "ٱلْكَرِيم", meaning: "ٱلَّذِي يُكْرِمُ عِبَادَهُ بِنِعَمِهِ، وَيَتَجَاوَزُ عَنْ زَلَّاتِهِمْ" },
    { Name: "الرقيب", name: "ٱلرَّقِيب", meaning: "ٱلَّذِي يَرْقُبُ عِبَادَهُ وَيَعْلَمُ أَحْوَالَهُمْ" },
    { Name: "المجيب", name: "ٱلْمُجِيب", meaning: "ٱلَّذِي يُجِيبُ دُعَاءَ عِبَادِهِ وَيُلَبِّي حَاجَاتِهِمْ" },
    { Name: "الواسع", name: "ٱلْوَاسِع", meaning: "ٱلَّذِي وَسِعَ عِلْمُهُ وَرَحْمَتُهُ كُلَّ شَيْءٍ" },
    { Name: "الحكيم", name: "ٱلْحَكِيم", meaning: "ٱلَّذِي يَضَعُ ٱلْأُمُورَ فِي مَوَاضِعِهَا بِحِكْمَةٍ" },
    { Name: "الودود", name: "ٱلْوَدُود", meaning: "ٱلَّذِي يُحِبُّ عِبَادَهُ وَيُحِبُّونَهُ" },
    { Name: "المجيد", name: "ٱلْمَجِيد", meaning: "ٱلَّذِي لَهُ ٱلْمَجْدُ وَٱلْعَظَمَةُ فِي ذَاتِهِ وَأَفْعَالِهِ" },
    { Name: "الباعث", name: "ٱلْبَاعِث", meaning: "ٱلَّذِي يَبْعَثُ ٱلْخَلَائِقَ بَعْدَ ٱلْمَوْتِ" },
    { Name: "الشهيد", name: "ٱلشَّهِيد", meaning: "ٱلَّذِي لَا يَغِيبُ عَنْهُ شَيْءٌ وَهُوَ شَاهِدٌ عَلَى كُلِّ شَيْءٍ" },
    { Name: "الحق", name: "ٱلْحَقّ", meaning: "ٱلَّذِي حَقِيقَتُهُ وَعِبَادَتُهُ وَوَعْدُهُ حَقٌّ" },
    { Name: "الوكيل", name: "ٱلْوَكِيل", meaning: "ٱلَّذِي يَتَوَكَّلُ عَلَيْهِ ٱلْعِبَادُ فِي تَدْبِيرِ شُؤُونِهِمْ" },
    { Name: "القوى", name: "ٱلْقَوِيّ", meaning: "ٱلَّذِي لَا يُعْجِزُهُ شَيْءٌ فِي ٱلسَّمَاوَاتِ وَٱلْأَرْضِ" },
    { Name: "المتين", name: "ٱلْمَتِين", meaning: "ٱلَّذِي لَا يَتَزَعْزَعُ فِي قُوَّتِهِ، وَلَا يَضْعُفُ" },
    { Name: "الولى", name: "ٱلْوَلِيّ", meaning: "ٱلَّذِي يَتَوَلَّى أُمُورَ عِبَادِهِ بِرِعَايَةٍ وَحِمَايَةٍ" },
    { Name: "الحميد", name: "ٱلْحَمِيد", meaning: "ٱلَّذِي يَسْتَحِقُّ ٱلْحَمْدَ مِنْ جَمِيعِ خَلْقِهِ" },
    { Name: "المحصى", name: "ٱلْمُحْصِي", meaning: "ٱلَّذِي يُحْصِي كُلَّ شَيْءٍ فِي ٱلْكَوْنِ وَيَعْلَمُهُ بِدِقَّةٍ" },
    { Name: "المبدئ", name: "ٱلْمُبْدِئ", meaning: "ٱلَّذِي يَبْدَأُ خَلْقَهُ مِنَ ٱلْعَدَمِ" },
    { Name: "المعيد", name: "ٱلْمُعِيد", meaning: "ٱلَّذِي يُعِيدُ ٱلْخَلْقَ بَعْدَ مَوْتِهِمْ" },
    { Name: "المحيى", name: "ٱلْمُحْيِي", meaning: "ٱلَّذِي يُحْيِي ٱلْأَحْيَاءَ وَيَبْعَثُهُمْ" },
    { Name: "المميت", name: "ٱلْمُمِيت", meaning: "ٱلَّذِي يُمِيتُ ٱلْخَلَائِقَ عِنْدَ ٱنْتِهَاءِ أَجَلِهِمْ" },
    { Name: "الحى", name: "ٱلْحَيّ", meaning: "ٱلَّذِي لَا يَمُوتُ، وَهُوَ دَائِمُ ٱلْبَقَاءِ" },
    { Name: "القيوم", name: "ٱلْقَيُّوم", meaning: "ٱلَّذِي يَقُومُ عَلَى حِفْظِ وَإِدَارَةِ ٱلْكَوْنِ، لَا يَغْفُلُ عَنْ شَيْءٍ" },
    { Name: "الواحد", name: "ٱلْوَاجِد", meaning: "ٱلَّذِي يَجِدُ كُلَّ شَيْءٍ، لَا يُعْجِزُهُ شَيْءٌ" },
    { Name: "الماجد", name: "ٱلْمَاجِد", meaning: "ٱلَّذِي لَهُ ٱلْمَجْدُ وَٱلْعَظَمَةُ فِي ذَاتِهِ وَصِفَاتِهِ" },
    { Name: "الواحد", name: "ٱلْوَاحِد", meaning: "ٱلَّذِي لَا شَرِيكَ لَهُ فِي مُلْكِهِ وَأُلُوهِيَّتِهِ" },
    { Name: "الأحد", name: "ٱلْأَحَد", meaning: "ٱلَّذِي لَا مَثِيلَ لَهُ وَلَا شَبِيهَ" },
    { Name: "الصمد", name: "ٱلصَّمَد", meaning: "ٱلَّذِي يُصْمَدُ إِلَيْهِ فِي كُلِّ حَاجَةٍ وَلَا يَرُدُّ أَحَدًا" },
    { Name: "القادر", name: "ٱلْقَادِر", meaning: "ٱلَّذِي لَهُ ٱلْقُدْرَةُ ٱلْمُطْلَقَةُ عَلَى كُلِّ شَيْءٍ" },
    { Name: "المقتدر", name: "ٱلْمُقْتَدِر", meaning: "ٱلَّذِي يَقْدِرُ عَلَى كُلِّ شَيْءٍ بِلَا حُدُودٍ" },
    { Name: "المقدم", name: "ٱلْمُقَدِّم", meaning: "ٱلَّذِي يُقَدِّمُ مَا يَشَاءُ وَيَضَعُهُ فِي مَكَانِهِ" },
    { Name: "المؤخر", name: "ٱلْمُؤَخِّر", meaning: "ٱلَّذِي يُؤَخِّرُ مَا يَشَاءُ بِحِكْمَتِهِ" },
    { Name: "الأول", name: "ٱلْأَوَّل", meaning: "ٱلَّذِي لَيْسَ قَبْلَهُ شَيْءٌ" },
    { Name: "الأخر", name: "ٱلْآخِر", meaning: "ٱلَّذِي لَيْسَ بَعْدَهُ شَيْءٌ" },
    { Name: "الظاهر", name: "ٱلظَّاهِر", meaning: "ٱلَّذِي ظَهَرَ فَوْقَ كُلِّ شَيْءٍ" },
    { Name: "الباطن", name: "ٱلْبَاطِن", meaning: "ٱلَّذِي لَا يَخْفَى عَلَيْهِ شَيْءٌ فِي بَاطِنِ ٱلْأُمُورِ" },
    { Name: "الوالى", name: "ٱلْوَالِي", meaning: "ٱلَّذِي يَتَوَلَّى أُمُورَ ٱلْخَلَائِقِ بِتَدْبِيرٍ وَحُكْمٍ" },
    { Name: "المتعالى", name: "ٱلْمُتَعَالِي", meaning: "ٱلَّذِي تَعَالَى عَنْ كُلِّ عَيْبٍ وَنَقْصٍ" },
    { Name: "البر", name: "ٱلْبَرّ", meaning: "ٱلَّذِي يَحْسُنُ إِلَى عِبَادِهِ بِرَحْمَةٍ وَإِحْسَانٍ" },
    { Name: "التواب", name: "ٱلتَّوَّاب", meaning: "ٱلَّذِي يَقْبَلُ تَوْبَةَ عِبَادِهِ وَيُرَجِّعُهُمْ إِلَى طَاعَتِهِ" },
    { Name: "المنتقم", name: "ٱلْمُنْتَقِم", meaning: "ٱلَّذِي يَنْتَقِمُ مِنَ ٱلظَّالِمِينَ بِعَدْلِهِ" },
    { Name: "العفو", name: "ٱلْعَفُوّ", meaning: "ٱلَّذِي يَعْفُو عَنْ ٱلذُّنُوبِ وَيَتَجَاوَزُ عَنِ ٱلْمُسِيئِينَ" },
    { Name: "الرءوف", name: "ٱلرَّءُوف", meaning: "ٱلَّذِي يَرْأَفُ بِعِبَادِهِ وَيَرْحَمُهُمْ" },
    { Name: "الماللك الملك", name: "ٱلْمَالِكُ ٱلْمُلْك", meaning: "ٱلَّذِي يَمْلِكُ ٱلْمُلْكَ كُلَّهُ وَلَا يُنَازِعُهُ فِيهِ أَحَدٌ" },
    { Name: "ذو الجلال و الإكرام", name: "ذُو ٱلْجَلَالِ وَٱلْإِكْرَام", meaning: "ٱلَّذِي لَهُ ٱلْعَظَمَةُ وَٱلْكَرَامَةُ فِي ذَاتِهِ" },
    { Name: "المقسط", name: "ٱلْمُقْسِط", meaning: "ٱلَّذِي يَعْدِلُ فِي أَحْكَامِهِ بَيْنَ خَلْقِهِ" },
    { Name: "الجامع", name: "ٱلْجَامِع", meaning: "ٱلَّذِي يَجْمَعُ ٱلْخَلَائِقَ يَوْمَ ٱلْقِيَامَةِ لِلْحِسَابِ" },
    { Name: "الغنى", name: "ٱلْغَنِيّ", meaning: "ٱلَّذِي لَا يَحْتَاجُ إِلَى شَيْءٍ وَكُلُّ شَيْءٍ يَحْتَاجُ إِلَيْهِ" },
    { Name: "المغنى", name: "ٱلْمُغْنِي", meaning: "ٱلَّذِي يُغْنِي عِبَادَهُ وَيَكْفِيهِمْ بِفَضْلِهِ" },
    { Name: "المانع", name: "ٱلْمَانِع", meaning: "ٱلَّذِي يَمْنَعُ مَا يَشَاءُ مِنَ ٱلْخَيْرِ وَٱلرِّزْقِ" },
    { Name: "الضار", name: "ٱلضَّارّ", meaning: "ٱلَّذِي يَضُرُّ مَنْ يَشَاءُ بِإِذْنِهِ" },
    { Name: "النافع", name: "ٱلنَّافِع", meaning: "ٱلَّذِي يَنْفَعُ عِبَادَهُ بِكُلِّ مَا هُوَ خَيْرٌ" },
    { Name: "النور", name: "ٱلنُّور", meaning: "ٱلَّذِي هُوَ نُورُ ٱلسَّمَاوَاتِ وَٱلْأَرْضِ، يَهْدِي بِهِ عِبَادَهُ" },
    { Name: "الهادى", name: "ٱلْهَادِي", meaning: "ٱلَّذِي يَهْدِي ٱلنَّاسَ إِلَى ٱلطَّرِيقِ ٱلصَّحِيحِ" },
    { Name: "البديع", name: "ٱلْبَدِيع", meaning: "ٱلَّذِي يُبْدِعُ خَلْقَهُ بِأَجْمَلِ صُورَةٍ" },
    { Name: "البافى", name: "ٱلْبَاقِي", meaning: "ٱلَّذِي لَا يَفْنَى وَلَا يَزُولُ" },
    { Name: "الوارث", name: "ٱلْوَارِث", meaning: "ٱلَّذِي يَرِثُ كُلَّ شَيْءٍ فِي هَذَا ٱلْكَوْنِ" },
    { Name: "الرشيد", name: "ٱلرَّشِيد", meaning: "ٱلَّذِي يَهْدِي عِبَادَهُ إِلَى ٱلطَّرِيقِ ٱلْمُسْتَقِيمِ" },
    { Name: "الصبور", name: "ٱلصَّبُور", meaning: "ٱلَّذِي يَتَحَلَّى بِٱلصَّبْرِ فِي ٱلتَّعَامُلِ مَعَ عِبَادِهِ" }
];

// DOM Elements
const Allah_names = document.querySelector(".names");
const Allah_names_input = document.querySelector(".NameInput"); // The input field
const Show_All_Names = document.querySelector(".showallNames");
const Allah_Names_Length = document.querySelector(".Nameslength");
const NamesClear = document.querySelector(".ClearNames");
const NameFinderBtn = document.querySelector(".Namefinder"); // This is the search button

class FinderName {
    constructor() {
        this.number = 0;
        this.isClearing = false;
        this.transitionTimeout = null;
        this.initElements();
        this.initEventListeners();
    }

    initElements() {
        this.Allah_names = document.querySelector(".names");
        this.Allah_names_input = document.querySelector(".NameInput");
        this.Show_All_Names = document.querySelector(".showallNames");
        this.Allah_Names_Length = document.querySelector(".Nameslength");
        this.NamesClear = document.querySelector(".ClearNames");
        this.NameFinderBtn = document.querySelector(".Namefinder");
    }

    initEventListeners() {
        if (this.NameFinderBtn) {
            this.NameFinderBtn.addEventListener("click", () => this.findNamewithletter());
        }
        if (this.Show_All_Names) {
            this.Show_All_Names.addEventListener("click", () => this.ShowAllNames());
        }
        if (this.NamesClear) {
            this.NamesClear.addEventListener("click", () => this.clear());
        }
        if (this.Allah_names_input) {
            this.Allah_names_input.addEventListener("input", this.validateArabicInput);
        }
    }

    validateArabicInput(e) {
        const arabicRegex = /^[\u0600-\u06FF\s]+$/;
        if (!arabicRegex.test(e.target.value) && e.target.value !== "") {
            e.target.value = e.target.value.slice(0, -1);
        }
    }

    findNamewithletter() {
        if (this.isClearing || !this.Allah_names) return;

        const searchTerm = this.Allah_names_input.value.trim().toLowerCase();
        if (searchTerm) {
            this.DeleteAllNames();
            let hasResults = false;

            namesOfAllah.forEach(finder => {
                if (finder.Name.toLowerCase().includes(searchTerm) ||
                    finder.name.toLowerCase().includes(searchTerm)) {
                    this.number++;
                    this.Allah_names.innerHTML += `
                        <div class="name">
                            <h1>${this.number}. ${finder.name}</h1>
                            <p>المعنى: ${finder.meaning}</p>
                        </div>
                    `;
                    hasResults = true;
                }
            });

            if (this.Allah_Names_Length) {
                this.Allah_Names_Length.innerHTML = this.number;
            }

            if (!hasResults) {
                this.showNoResults();
            } else if (this.NamesClear) {
                this.NamesClear.disabled = false;
            }
        } else {
            this.showAlert("الرجاء إدخال اسم للبحث", "تنبيه");
        }
    }

    ShowAllNames() {
        if (this.isClearing || !this.Allah_names) return;

        this.DeleteAllNames();
        namesOfAllah.forEach((name, index) => {
            this.number = index + 1;
            if (this.Allah_Names_Length) {
                this.Allah_Names_Length.innerHTML = this.number;
            }
            this.Allah_names.innerHTML += `
                <div class="name">
                    <h1>${this.number}. ${name.name}</h1>
                    <p>المعنى: ${name.meaning}</p>
                </div>
            `;
        });
        if (this.NamesClear) {
            this.NamesClear.disabled = false;
        }
    }

    showNoResults() {
        if (!this.Allah_names) return;
        this.Allah_names.innerHTML = `
            <div class="no-results">
                <p>لا توجد نتائج تطابق بحثك</p>
            </div>
        `;
        if (this.NamesClear) {
            this.NamesClear.disabled = false;
        }
    }

    DeleteAllNames() {
        this.number = 0;
        if (this.Allah_Names_Length) {
            this.Allah_Names_Length.innerHTML = this.number;
        }
        if (this.Allah_names) {
            this.Allah_names.innerHTML = "";
        }
        if (this.NamesClear) {
            this.NamesClear.disabled = true;
        }
    }

    clear() {
        if (!this.Allah_names || !this.Allah_names.innerHTML || this.isClearing) {
            return;
        }

        this.isClearing = true;
        this.Allah_names.style.opacity = 0;
        this.Allah_names.style.height = `${this.Allah_names.scrollHeight}px`;

        // Force reflow
        void this.Allah_names.offsetHeight;

        this.Allah_names.style.height = "0";

        const transitionEndHandler = () => {
            this.DeleteAllNames();
            this.Allah_names.style.opacity = 1;
            this.Allah_names.style.height = "";
            this.Allah_names.removeEventListener("transitionend", transitionEndHandler);
            this.isClearing = false;
        };

        this.Allah_names.addEventListener("transitionend", transitionEndHandler);

        // Fallback timeout
        if (this.transitionTimeout) clearTimeout(this.transitionTimeout);
        this.transitionTimeout = setTimeout(transitionEndHandler, 500);
    }

    showAlert(message, title) {
        alert(`${title}: ${message}`);
    }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const nameFinder = new FinderName();
});

// Event Listeners
NameFinderBtn.addEventListener("click", () => {
    nameFinder.findNamewithletter();
});

Show_All_Names.addEventListener("click", () => {
    nameFinder.ShowAllNames();
});

NamesClear.addEventListener("click", () => {
    nameFinder.clear();
});