// Quran
const surahContainer = document.querySelector(".surahs");

// for loop
for (let index = 0; index < 114; index++) {
    surahContainer.innerHTML += `
        <div class="surah">
            <h1 class="surahName">سورة ${surahs[index].name}</h1>
            <h2 class="surahOrder">رقم السورة ${index + 1}</h2>
            <h2 class="surahVerses">عدد الأيات ${surahs[index].verses}</h2>
            <h2 class="surahJuz">من الجزء ${quranData[index].fromJuz} الى الجزء ${quranData[index].toJuz}</h2>
            <h2 class="surahhizb">من الحزب ${quranData[index].fromHizb} الى الحزب ${quranData[index].toHizb}</h2>
            <h2 class="surahType">النزول: ${surahs[index].type}</h2>
            <button onclick="
            const newWindow = window.open('quran/${surahs[index].name}.html', '_blank', 'width=800,height=600');
            newWindow.document.title = 'quran/${surahs[index].name}'
            ">اقرأ</button>
        </div>
    `;
};

// Allah Names
const Allah_names = document.querySelector(".names");

for (let i = 0; i < 99; i++) {
    Allah_names.innerHTML += `<div class="name"><h1>الاسم: ${namesOfAllah[i].name}</h1><p>المعنى: ${namesOfAllah[i].meaning}</p></div>`
}