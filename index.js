// נושא מטופל
let arrSubject = ["העמדה", "פגיעות מכניות", "זווד", "ניקוי חיצוני", "קופסת סער", "בית הינע סופי", "משקעים בתובה", "נקוי פנימי", "נשק", "מיגונים", "פריטי מסגרות",
    "תאי אחסון והתקנים", "תאורה וצופר", "סיפון", "סל זווד חיצוני", "גופים זרים", "מתיחת זחל", "חוליות זחל", "הדוק ברגים", "מסנני דלק", 'מקבעי חט"כ',
    "פתח מילוי", "מנגנונים", "גופים זרים", "מגיני מוטטות", "מצברים", "תחמושת", "כנות מקלעים", "עמדת מקלען",
    "עשן מיידי", `חט"כ`, "הינע סופי ומפרקים", `מזקו"מ`, "וו גרירה אחורי", "מדפים", "כסאות", "כנות מקלעים", "עשן מיידי"];
// שיטת ביצוע
let arrExecutaion = [`העמד את הנגמ"ש על משטח ישר וקשיח`, `בדוק העדר פגיעות מכניות קשות בכלי, במידה ויש דווח עליה לממונים`,
    `הוצא את זווד הנגמ"ש, נקה/החלף ציוד פגום.`, `נקה/שטוף את התובה, תא הלחימה והמזקו"מ`, `נקה חול וזיהומים מתוך קופסת שקעי הסער`, `נקז משקעי שמן ומים מבית הינע סופי`, `נקז משקעים שהצטברו בתובה דרך פתחי הנקוז ובמידת הצורך דרך מדפי המילוט, החזר/סגור את כל הפתחים ואבטיחם`, `נקה את תא הלחימה ותא הנהג באמצעות מטלית או מברשת עדינה תוך שימוש במי סבון`, `נקה את הנשק בהתאם להוראות קחש"ר הנוגעות`,
    `הדק את מיגוני הצד הכבדים והקלים לכלי`, `הדק הכנפיים, הרצפות החיצוניות, כבלי העליה והמדרגות לכלי`, `הדק את תאי האחסון, הקופסאות והתקני הזווד לכלי`, `הדק את הפנסים הקדמיים/אחוריים והצופר לכלי`, `הדק את כל ברגי הספון למקומם`, `הדק את הסל לסיפון באמצעות כל הברגים, ואת ההתקנים לסל`,
    `הרחק גופים זרים ממכללי המזקו"מ`, `1) בצע מתיחת זחל. <br> 2) נקה בורג המתיחה וכסה אותו בניר שעווה`, `החלף פנינים שבורים, והשלם טבעות אבטחה/תותבים`, `הדק באמצעות מפתח מומנט את ברגי / אומי ההידוק הבאים : <br> 1) ברגי מיתלים קידמיים <br> 2) ברגי חיבור בתי הינע סופי לתובה <br> 3) אומי חבור זרי מניע לתופים, <br> 4) אומי חבור גלגלי המרכוב לטבורים`,
    `רוקן משקעים ממסנני דלק הראשוני והמשני במנוע`,
    `הדק ברגי מקבעי חט"כ אחוריים`,
    `נקה את רשת הסינון בפתח מלוי דלק`,
    `נקה את טובלני הנעילה ואת חריצי הנעילה שבזרועות מזיהומים (במידת הצורך הקהה פינות חדות באמצעות שופין עדין)`,
    `הסר גופים זרים ממוטטות השליטה`, `הדק את מגיני מוטטות השליטה למקומם`,
    'נקה את תא המצברים והמצברים מגופים זרים, לכלוך, שמנים וכו...',
    'טפל בתחמושת הנגמ"ש',
    '1) ודא המצאות הכנות היעודיות ולחיות הזיהוי <br> 2) בדוק שלמות ותקינות הכנות, הזרועות, הבסיסים, סגר מסע, טובלן הזרוע, גובלי צדוד, סרט כדורים ארגזי פעולה ובורג גובל הנמכה <br> 3) בדוק אבטחת בורג גובל הנמכה בכנות <br> 4) בדוק תקינות פין סגר מסע ופיני קביעת המאג במצבים השונים וקשירתם בשרשרת, ודא המצאות והידוק המישורים המושפעים להעלאת גובלי הצדוד לסיפון <br> 7) ודא נקיון בסיס הזרקאור',
    '1)ודא העדר שברים, סדקים ותקינות מגן האבק <br> 2) ודא שאין עבוי לחות בראש הכוונת ונקיון החלונות <br> 3) סדוק תקינות מכללי הכנה הרותעת ואת רעיתה <br> 4) ודא תקינות פיני הנשק, מגן התרמילים, ארגזי הפעולה, וסרט הכדורים <br> 5) ודא את תקינות הנדנד, המרפסת, והידוק הגובל הצורתי <br> 6) בדוק תקינות תופסני הכוונות האופטיות <br> 7) בדוק תקינות הניצרות וההדקים המכני והחשמלי <br> 8) בדוק תקינות חישון כדור אחרון <br> 9) ודא תנועה תקינה של העמדה בכל תחומי הצדוד והגבהה ותקינות הנועלים <br> 10) בדוק תקינות תיבת הבקרה, חיבורי הרתמות ונוריות הבקרה <br> 11) דרוך את המקלע עם הידית וודא חזרתה למקומה <br> 12) ודא אפשרות לדריכה חצונית ע"י ידית הדרכה <br> 13) ודא תקינות עגול הכנון ותאום הכוונות <br> 14) ודא הגבהת העמדה בזוית מירבית וקביעת נועליה',
    `1) ודא נקיון בתי המשגר הקסטות פיני המגע והעדר סדקים בבתים ובמשגרים <br> 2) ודא המצאות הפצצות ותקינות נעילת הקסטות <br> 3) ודא תקינות והידוק רתמות החשמל וכסויי המשגרים <br> 4) תקינות מע' ההפעלה החשמלית באמצעות מנורת ביקורת`,
    `1) בדוק מפלס שמן מנוע והוסף במידת הצורך <br> 2) בדוק מפלס שמן ממסרת, והוסף במידת הצורך <br> 3) סוך את פיני הנעילה וצירי מיכסי מילוי שמן מנוע וממסרת`,
    `1) בדוק מפלס שמן בהינעים הסופיים, והוסף במידת הצורך <br> 2) סוך את המפרקים (צלבים)`,
    `1) סוך ציר זרוע גלגל מרכוב <br> 2) סוך פין חבור בחטיבת הקפיצים <br> 3) סוך תמך גלגל תמך כפול (ודא כי 4 הקדחים נקיים מבוץ/לכלוך) <br> 4) סוך גלגל תמך בודד קדמי <br> 5) סוך גלגל תמך בודד אחורי <br> 6) סוך מנגנון מתיחת זחל מכני <br> 7) סוך טבור גלגל מתח <br> 8) סוך פיני חבור משכך זעזועים <br> 9) בדוק מפלס מנגנון מתיחת זחל הדראולי, והוסף שמן במידת הצורך`,
    `סוך את ציר וו הגרירה האחורי מרכזי`,
    `1) סוך את צירי הסבוב והטובלן של מדף נהג <br> 2) סוך את צירי הסבוב וטובלני הנעילה של מדף מפקד, מקלען <br> 3) סוך את צירי הסיבוב ואת בית מנגנון הנעילה של מדף הפלסים`,
    `סוך/רסס בשכבת שמן דקה את הצירים, טובלנים, מיסבים ומסילות`,
    `נקה וסוך חלקים משוחמים בכנות`,
    `נקה וסוך את בסיס הקסטות ואת בסיס בתי המשגרים`];
// פרק
let arrSection = ["כללי", "נקוי", "דיגום חיצוני תובה/ תא לחימה", `מזקו"מ`, `חט"כ`, "דלק", "מדפים", "מערכות שליטה", "חשמל", "תחמושת", "נשק", "סיכה"];


window.addEventListener("load", () => {
    document.getElementById("body").addEventListener("touchmove", start);
});

const start = () => {
    document.getElementById("body").removeEventListener("touchmove", start);
    document.getElementById("startPage").style.visibility = "hidden";
    document.getElementById("startBut").style.visibility = "visible";
    document.getElementById("explantionText").style.visibility = "visible";
    document.getElementById("titlePuma").classList.remove("titlePuma1");
    document.getElementById("titlePuma").classList.add("ExTitlePuma");
    document.getElementById("startBut").addEventListener("click", tretmentPage);
}
const tretmentPage = () => {
    document.getElementById("titlePuma").innerText = "שלבי טיפול";
    document.getElementById("explantionPage").style.display = "none";
    document.getElementById("treatmentpage").style.visibility = "visible";
    for (let i = 0; i < arrSubject.length; i++) {
        // const p = document.createElement("p");
        // document.getElementById("itemList").appendChild(p);
        document.getElementById("itemList").innerHTML += `<label class="container"><span id="${i}" class="containerText">${arrSubject[i]}</span>
        <input type="checkbox" >
        <span class="checkmark"></span>
      </label>`;
    }
    for (let j = 0; j < arrSubject.length; j++) {
      document.getElementById(j).addEventListener("click", () => {
           document.getElementById("titlePuma").innerText = `${arrSection[j]}`;
           document.getElementById("treatmentpage").style.visibility = "hidden";
           document.getElementById("treatmentpageEx").style.visibility = "visible";
           document.getElementById("treatmentpageExTitle").style.visibility = "visible";
           document.getElementById("treatmentpageExTitle").innerHTML = `${arrSubject[j]}`;
           document.getElementById("treatmentpageEx").innerHTML = `${arrExecutaion[j]}`;
      });
    }
}
