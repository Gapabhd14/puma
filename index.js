// נושא מטופל
let arrSubject = ["פגיעות מכניות", "מיגונים", "פרטי מסגרות", "ווי גרירה", "תאי אחסון", "שקעי סער", "עשן מיידי", "כנות מקלעים", "פתח מילוי", "תאורה וצופר", "מדפים ואטמים", "תקינות פעולה", "מצברים",
    "ניקיון חוץ", "מנגנונים", "כסאות", " ריפודים ואטמים", " מגני המוטות", "לוח נהג", "לוח ספקטריניקס", " וילונות ופעולת פריסקופים", "ניקיון פנים", "ידית הילוכים", "סיבובי סרק", "וסת סיבובים", "קריאות מחוונים", "כמות הדלק",
    "מדומם מנוע", "גופים זרים", "מתיחת זחל", "נזילות", "מתלים", " גלגלי מרכוב", "גלגלי מתח", "גלגלי תמך", "זרי מניע", "טבורים", "חוליות זחל", "הידוק ברגים", " מזקו״מ ", " חט״כ וממסרת", "בדיקת מערכות שליטה"];
// שיטת ביצוע
let arrExecutaion = [`בדוק העדר פגיעות מכניות קשות בכלי`, "בדוק שלמות מודולי המיגון, מיגוני הצד הכבדים/קלים והידוקם לכלי", "בדוק שלמות והידוק הכנפיים, הרצפות החיצוניות, כבלי העליה ומדרגות הכלי",
    '1) בדוק תקינות ווי הגרירה הקדמיים/ אחוריים <br> 2) בדוק תקינות וו הגרירה האחורי מרכזי וכסויו בבד שעווה', 'בדוק תקינות תאי האחסון, הקופסאות התקני הזווד והידוקם לכלי', 'בדוק ניקיון פנים קופסת שקעי הסער',
    '1) ודא נקיון בתי המשגר הקסטות פיני המגע והעדר סדקים בבתים ובמשגרים <br> 2) ודא המצאות הפצצות ותקינות נעילת הקסטות <br> 3) ודא תקינות והדוק רתמות החשמל וכיסוי המשגרים <br> 4) ודא תקינות מערכת ההפעלה החשמלית באמצעות מנורת ביקורת', '1) ודא המצאות הכנות היעודיות ולוחיות הזיהוי <br> 2) בדוק שלמות ותקינות הכנות, הזרועות, הבסיסים, סגר מסע, טובלן הזרוע, גובלי צדוד, סרט כדורים ארגזי פעולה ובורג גובל הנמכה <br> 3) בדוק אבטחת בורג גובל הנמכה בכנות <br> 4) בדוק תקינות פין סגר מסע ופיני קביעת המאג במצבים השונים וקשירתם בשרשרת, ודא העדר חופשים בחבור המקלעים לעריסות <br> 5) ודא העדר חופשים בחבור המקלעים לעריסות <br> 6) ודא המצאות והידוק המישורים המשופעים להעלאת גובלי הצדוד לסיפון <br> 7) ודא נקיון בסיס הזרקאור',
    'בדוק תקינות מכסי פתח המילוי, הנשם ורשת הסינון',
    'בדוק שלימות הפנסים, הצופר והידוקם לכלי', 'בדוק תקינות האטמים, הדבקתם ונקיונם', 'בדוק פעולה תקינה של מערכת יציאת אוויר מפתחי הריקון והעדר רעשים בלתי רגילים',
    '1) בדוק תקינות ארגז המצברים <br> 2) בדוק תקינות חיבור נעלי הכבלים <br> 3) בדוק תקינות המצברים','בדוק ניקיון התובה, תא הלחימה והמזקו״מ', '1) בדוק ניקיון הטובלנים וחריצי הנעילה <br> 2) בדוק תנועה חופשית של כל הטובלנים וחדירתם המלאה לתוך חריצי הנעילה במצבי הפעולה השונים <br> 3) בדוק שמדפי מפקד, מקלען ופלסים אינם מתנדנדים במצב פתוח <br> 4) בדוק נעילת המדפים בכל המצבים', 'כסאות',
    "1)בדוק שלמות הריפודים והידוקם למדפים <br> 2)בדוק תקינות האטמים, הדבקתם ונקיונם", 'בדוק הידוק מגני המוטות לתובה',
    '1) בדוק קביעת המחברים ללוח ותקינות מתגי הפעולה <br> 2) הבא מתג כח ראשילמצב ״גע״ ובדוק הדלקות נורית האזהרה ותקינות משאבות הדלק והתחל <br> 3) לחץ על לחצן הבדיקה וודא הדלקות כל נוריות הסימון וכל מקטעי התחומים בלוח התצוגות באופן עוקב', '1) בדוק הידוק מכללי המערכת למקומם <br> 2) בדוק אבטחת ידית מחולל החירום <br> 3) בדוק ניקיון עדשות הגלאים, <br> 4) בדוק שלמות דיסקיות השבירה של לחצני החירום <br> 5) בדוק תקינות חשמלית של המערכת',
    '1) בדוק פעולה תקינה של הוילון במתח 24 ובחרום במתח 2.7 <br> 2) בדוק אי הופעת היבהובים, כתמים, צריבות, לכלוך אופטי מעבר למותר <br> 3)בדוק בהירות מסך <br> 4)בדוק תקינות פריסקופים ', 'בדוק ניקיון התובה, תא הלחימה ותא הנהג', 'בלבד "n" או "p" בדוק שניתן להניע את המנוע כאשר ידית ההילוכים נמצאת במצב', "בדוק סיבובי סרק תקינים של המנוע",
    "בדוק תקינות וסת סיבובי מנוע", "בדוק קיראות נכונות בלוח המכוונים", "בדוק המצאות כמות דלק מספקת במיכלים", "בדוק תקינות המדומם החשמלי והמכני", 'בדוק העדר גופים זרים במוטות השליטה',
    '1) בדוק תקינות מנגנוני מתח הידר׳ ומכני <br> 2) בדוק מתח זחל תקין <br> 3) בדוק ניקוי וכיסוי בורג המתחיחה בנייר שעווה', 'בדוק העדר נזילות ממכלי המזקו״מ',
    'בדוק העדר שברים/ סדרים בקפיצים, בפיני החיבור ובצלחות', 'בדוק תקינות גלגלי המרכוב ע״פ הקריטריונים', 'בדוק תקינות גלגלי המתח ע״פ הקריטריונים', 'בדוק תקינות גלגלי התמך ע״פ הקריטריונים', 'בדוק העדר סדקים/שברים בזרי מניע של ההינעים הסופיים',
    'בדוק תקינות טבור זר מניע ע״פ הקריטריונים', 'בדוק תקינות החוליות ע״פ הקריטריונים, תקינות הפינים והמצאות טבעות אבטחה/ תותבים', 'בדוק הידוק ברגי מכללי המזקו״מ לתובה, מקבעי החט״כ ותקינות אבטחות ברגי הצלבים',
    'מזקו״מ', 'חת״כ', '1) בדוק תפעול תקין (בהמלך תנועה קצרה של הכלי) של מערכת ההגוי, ההילוכים, המאיץ הבלום ובלם החניה. <br> 2) בדוק תפעול תקין של מאיץ יד' ];
// פרק
let arrSection = ["", "", "", ``, "", "", ``, "", "", "", "", "", ``, "","", ``, ""];
let arrExecutaionLong = [' 8) בדוק תקינות חישון כדור אחרון <br> 9) ודא תנועה תקינה של העמדה בכל תחומי הצדוד וההגבהה ותקינות הנועלים <br> 10) בדוק תקינות תיבת הבקרה, חיבורי הרתמות ונוריות הבקרה <br> 11) דרוך את המקלע עם הידית וודא חזרתה למקומה <br> 12) ודא אפשרות לדריכה חצונית ע"י ידית הדרכה <br> 13) ודא תקינות עגול הכנון ותאום הכוונות <br> 14) ודא הגבהת העמדה בזוית מירבית וקביעת נועליה']
// שמירה טפש ישן
// `העמד את הנגמ"ש על משטח ישר וקשיח`, `בדוק העדר פגיעות מכניות קשות בכלי, במידה ויש דווח עליה לממונים`,
//     `הוצא את זווד הנגמ"ש, נקה/החלף ציוד פגום.`, `נקה/שטוף את התובה, תא הלחימה והמזקו"מ`, `נקה חול וזיהומים מתוך קופסת שקעי הסער`, `נקז משקעי שמן ומים מבית הינע סופי`, `נקז משקעים שהצטברו בתובה דרך פתחי הנקוז ובמידת הצורך דרך מדפי המילוט, החזר/סגור את כל הפתחים ואבטיחם`, `נקה את תא הלחימה ותא הנהג באמצעות מטלית או מברשת עדינה תוך שימוש במי סבון`, `נקה את הנשק בהתאם להוראות קחש"ר הנוגעות`,
//     `הדק את מיגוני הצד הכבדים והקלים לכלי <br><b>הערה:</b> 24 קג"מ`, `הדק הכנפיים, הרצפות החיצוניות, כבלי העליה והמדרגות לכלי`, `הדק את תאי האחסון, הקופסאות והתקני הזווד לכלי`, `הדק את הפנסים הקדמיים/אחוריים והצופר לכלי`, `הדק את כל ברגי הספון למקומם`, `הדק את הסל לסיפון באמצעות כל הברגים, ואת ההתקנים לסל`,
//     `הרחק גופים זרים ממכללי המזקו"מ`, `1) בצע מתיחת זחל. <br> 2) נקה בורג המתיחה וכסה אותו בניר שעווה`, `החלף פנינים שבורים, והשלם טבעות אבטחה/תותבים`, `הדק באמצעות מפתח מומנט את ברגי / אומי ההידוק הבאים : <br> 1) ברגי מיתלים קידמיים <br><b>הערה:</b> 72 קג"מ <br> 2) ברגי חיבור בתי הינע סופי לתובה <br><b>הערה:</b> 30 קג"מ <br> 3) אומי חבור זרי מניע לתופים <br><b>הערה:</b> 32 קג"מ <br> 4) אומי חבור גלגלי המרכוב לטבורים <br><b>הערה:</b> 52 קג"מ `,
//     `רוקן משקעים ממסנני דלק הראשוני והמשני במנוע <br><b>הערה:</b> הו"ק-פומה/ג-3106. יבוצע ע"י דרג א' `,
//     `הדק ברגי מקבעי חט"כ אחוריים <br><b>הערה:</b> 52 קג"מ `,
//     `נקה את רשת הסינון בפתח מלוי דלק`,
//     `נקה את טובלני הנעילה ואת חריצי הנעילה שבזרועות מזיהומים (במידת הצורך הקהה פינות חדות באמצעות שופין עדין)`,
//     `הסר גופים זרים ממוטטות השליטה`, `הדק את מגיני מוטטות השליטה למקומם`,
//     'נקה את תא המצברים והמצברים מגופים זרים, לכלוך, שמנים וכו...',
//     'טיפול שבועי: טפל בתחמושת הנגמ"ש <br><b>הערה:</b> הו"ק תחמושת/ר - /6500 ט. שבועי <br> טיפול חודשי: טפל בתחמושת הנגמ"ש <br><b>הערה:</b> הו"ק תחמושת/ר - /6500 ט. חודשי ',
//     '1) ודא המצאות הכנות היעודיות ולוחיות הזיהוי <br> 2) בדוק שלמות ותקינות הכנות, הזרועות, הבסיסים, סגר מסע, טובלן הזרוע, גובלי צדוד, סרט כדורים ארגזי פעולה ובורג גובל הנמכה <br> 3) בדוק אבטחת בורג גובל הנמכה בכנות <br> 4) בדוק תקינות פין סגר מסע ופיני קביעת המאג במצבים השונים וקשירתם בשרשרת, ודא העדר חופשים בחבור המקלעים לעריסות <br> 5) ודא העדר חופשים בחבור המקלעים לעריסות <br> 6) ודא המצאות והידוק המישורים המשופעים להעלאת גובלי הצדוד לסיפון <br> 7) ודא נקיון בסיס הזרקאור',
//     '1)ודא העדר שברים, סדקים ותקינות מגן האבק <br> 2) ודא שאין עבוי לחות בראש הכוונת ונקיון החלונות <br> 3) בדוק תקינות מכללי הכנה הרותעת ואת רתיעתה <br> 4) ודא תקינות פיני הנשק, מגן התרמילים, ארגזי הפעולה, וסרט הכדורים <br> 5) ודא את תקינות הנדנד, המרפסת, והידוק הגובל הצורתי <br> 6) בדוק תקינות תופסני הכוונות האופטיות <br> 7) בדוק תקינות הניצרות וההדקים המכני והחשמלי ',
//     `1) ודא נקיון בתי המשגר הקסטות פיני המגע והעדר סדקים בבתים ובמשגרים <br> 2) ודא המצאות הפצצות ותקינות נעילת הקסטות <br> 3) ודא תקינות והידוק רתמות החשמל וכסויי המשגרים <br> 4) ודא תקינות מע' ההפעלה החשמלית באמצעות מנורת ביקורת`

let pumaVideoLength = [{ startVideoNum: 0, manyVideos: 1 }, { startVideoNum: 1, manyVideos: 2 }, { startVideoNum: 2, manyVideos: 4 }, { startVideoNum: 3, manyVideos: 2 }, { startVideoNum: 4, manyVideos: 1 }, { startVideoNum: 5, manyVideos: 1 }, { startVideoNum: 6, manyVideos: 0 }, { startVideoNum: 7, manyVideos: 0 }, { startVideoNum: 8, manyVideos: 0 }, { startVideoNum: 9, manyVideos: 2 }, { startVideoNum: 10, manyVideos: 1 }, { startVideoNum: 11, manyVideos: 0 }, { startVideoNum: 12, manyVideos: 1 }, { startVideoNum: 13, manyVideos: 4 }, { startVideoNum: 14, manyVideos: 1 }, { startVideoNum: 15, manyVideos: 1 }, { startVideoNum: 16, manyVideos: 1 }, { startVideoNum: 17, manyVideos: 0 }, { startVideoNum: 18, manyVideos: 1 }, { startVideoNum: 19, manyVideos: 0 }, { startVideoNum: 20, manyVideos: 0 }, { startVideoNum: 21, manyVideos: 2 }, { startVideoNum: 22, manyVideos: 0 }, { startVideoNum: 23, manyVideos: 0 }, { startVideoNum: 24, manyVideos: 0 }, { startVideoNum: 25, manyVideos: 0 }, { startVideoNum: 26, manyVideos: 1 }, { startVideoNum: 27, manyVideos: 0 }, { startVideoNum: 28, manyVideos: 1 }, { startVideoNum: 29, manyVideos: 1 }, { startVideoNum: 30, manyVideos: 1 }, { startVideoNum: 31, manyVideos: 0 }, { startVideoNum: 32, manyVideos: 0 }, { startVideoNum: 33, manyVideos: 0 }, { startVideoNum: 34, manyVideos: 0 }, { startVideoNum: 35, manyVideos: 0 }, { startVideoNum: 36, manyVideos: 0 }, { startVideoNum: 37, manyVideos: 0 }, { startVideoNum: 38, manyVideos: 5 }, { startVideoNum: 39, manyVideos: 2 }, { startVideoNum: 40, manyVideos: 3 }, { startVideoNum: 41, manyVideos: 0 }];

window.addEventListener("load", () => {
    // window.scrollTo(0, 1);

    document.getElementById("sheerClear").addEventListener("touchmove", start);
});

// explanation text
const start = (event) => {
    document.getElementById("treatmentpage").style.visibility = "hidden";
    document.getElementById("return").style.visibility = "hidden";
    document.getElementById("titlePuma").innerText = "פומה";
    document.getElementById("explantionPage").style.display = "inline-block";

    document.getElementById("aSide").classList.remove("aSide");
    document.getElementById("aSide").classList.add("aSideLittle");
    document.getElementById("sheerClear").removeEventListener("touchmove", start);
    document.getElementById("startPage").style.visibility = "hidden";
    document.getElementById("aSide").style.visibility = "hidden";
    document.getElementById("startBut").style.visibility = "visible";
    document.getElementById("explantionText").style.visibility = "visible";
    document.getElementById("titlePuma").classList.remove("titlePuma1");
    document.getElementById("titlePuma").classList.add("ExTitlePuma");
    document.getElementById("startBut").addEventListener("click", tretmentPage);
}

// tretment page
const tretmentPage = () => {
    document.getElementById("titlePuma").innerText = "שלבי טיפול";
    document.getElementById("explantionPage").style.display = "none";
    document.getElementById("treatmentpage").style.visibility = "visible";

    document.getElementById("return").style.visibility = "visible";
    document.getElementById("return").addEventListener("click", start);

    for (let i = 0; i < arrSubject.length; i++) {
        document.getElementById("itemList").innerHTML += `<div class="conteinerCheckBox" id="conteinerCheckBox"><span id="${i}" class="containerText">${arrSubject[i]}</span>
        <span class="checkmark" id="check-${i}">
            <div id="vi${i}"></div>
        </span>
      </div>`;
    }
    for (let j = 0; j < arrSubject.length; j++) {
        
        document.getElementById("videoFlex").innerHTML = "";
        let indexVideo = j;
        document.getElementById(`check-${j}`).addEventListener("click", () => {
            document.getElementById(`check-${j}`).classList.add("checkmark1");
            document.getElementById(`vi${j}`).classList.add("vi");
        });
        document.getElementById(`check-${j}`).addEventListener("click", () => {
            if (pumaVideoLength[j].manyVideos === 0) {
                document.getElementById("exBut").classList.remove("exBut");
                document.getElementById("exBut").classList.add("exButNoVideo");
                document.getElementById("playBtn").style.visibility = "hidden";
            }
            else{
                document.getElementById("playBtn").style.visibility = "visible";
                document.getElementById("exBut").classList.remove("exButNoVideo");
                document.getElementById("exBut").classList.add("exBut");
            }
            document.getElementById("return").style.visibility = "hidden";
            document.getElementById("aSide").style.visibility = "visible";
            document.getElementById("aSide").classList.add("aSideEnd");
            document.getElementById("aSide").classList.remove("aSideLittle");
            // second title
            if (-1 < j && j < 2) {
                document.getElementById("titlePuma").innerText = `${arrSection[0]}`;
            }
            else if (1 < j && j < 9) {
                document.getElementById("titlePuma").innerText = `${arrSection[1]}`;
            }
            else if (8 < j && j < 15) {
                document.getElementById("titlePuma").innerText = `${arrSection[2]}`;
                // document.getElementById("treatmentpageExTitle").classList.add("treatmentpageExTitleLong");
            }
            else if (14 < j && j < 19) {
                document.getElementById("titlePuma").innerText = `${arrSection[3]}`;
            }
            else if (18 < j && j < 21) {
                document.getElementById("titlePuma").innerText = `${arrSection[4]}`;
            }
            else if (20 < j && j < 22) {
                document.getElementById("titlePuma").innerText = `${arrSection[5]}`;
            }
            else if (21 < j && j < 23) {
                document.getElementById("titlePuma").innerText = `${arrSection[6]}`;
            }
            else if (22 < j && j < 25) {
                document.getElementById("titlePuma").innerText = `${arrSection[7]}`;
            }
            else if (24 < j && j < 26) {
                document.getElementById("titlePuma").innerText = `${arrSection[8]}`;
            }
            else if (25 < j && j < 27) {
                document.getElementById("titlePuma").innerText = `${arrSection[9]}`;
            }
            else if (26 < j && j < 30) {
                document.getElementById("titlePuma").innerText = `${arrSection[10]}`;
                // if (j === 28) {
                //     document.getElementById("treatmentpageEx").classList.remove("treatmentpageEx");
                //     document.getElementById("treatmentpageEx").classList.add("treatmentpageEx2");
                //     document.getElementById("next").style.visibility = "visible";
                //     document.getElementById("next").addEventListener("click", () => {
                //         document.getElementById("treatmentpageEx").innerHTML = arrExecutaionLong;
                //         document.getElementById("next").style.visibility = "hidden";
                //         document.getElementById("back").style.visibility = "visible";
                //         document.getElementById("back").addEventListener("click", () => {
                //             document.getElementById("treatmentpageEx").innerHTML = `${arrExecutaion[28]}`;
                //             document.getElementById("next").style.visibility = "visible";
                //             document.getElementById("back").style.visibility = "hidden";
                //         });
                //     });
                // }
            }
            else if (29 < j && j < 42) {
                document.getElementById("titlePuma").innerText = `${arrSection[11]}`;
            }
            document.getElementById("playBtn").addEventListener("click", () => {
                document.getElementById("videoFlex").innerHTML = "";
                document.getElementById("play").style.visibility = "visible";
                if (pumaVideoLength[j].manyVideos !== 0) {
                    if (pumaVideoLength[j].manyVideos === 1) {
                        document.getElementById("videoFlex").innerHTML = `<video preload="auto" width="427" height="240" controls id="videoExplain" class="videoBlack">
                                    <source id="srcVideo" src="assets/videos/C${j}.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                    </video>`;
                    }
                    if (pumaVideoLength[j].manyVideos > 1) {
                        for (let y = 1; y <= pumaVideoLength[j].manyVideos; y++) {
                            document.getElementById("videoFlex").innerHTML += `<video preload="auto" width="427" height="240" controls id="videoExplain" class="videoBlack">
                                    <source id="srcVideo" src="assets/videos/C${j}-${y}.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                    </video>`;
                            console.log(j, y);
                        }

                    }
                }


                document.getElementById("closeBut").addEventListener("click", () => {
                    document.getElementById("play").style.visibility = "hidden";
                });
            });
            document.getElementById("treatmentpage").style.visibility = "hidden";
            document.getElementById("treatmentpageEx").style.visibility = "visible";
            document.getElementById("treatmentpageExTitle").style.visibility = "visible";
            document.getElementById("treatmentpageExTitle").innerHTML = `${arrSubject[j]}`;
            document.getElementById("treatmentpageEx").innerHTML = `${arrExecutaion[j]}`;
            document.getElementById("exBut").style.visibility = "visible";
            document.getElementById("exBut").addEventListener("click", goBack);
        });
    }
}

const goBack = () => {
    document.getElementById("return").style.visibility = "visible";
    document.getElementById("aSide").style.visibility = "hidden";
    document.getElementById("aSide").classList.remove("aSideEnd");
    document.getElementById("aSide").classList.add("aSideLittle");
    document.getElementById("treatmentpage").style.visibility = "visible";
    document.getElementById("back").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("treatmentpageExTitle").style.visibility = "hidden";
    document.getElementById("treatmentpageEx").style.visibility = "hidden";
    document.getElementById("exBut").style.visibility = "hidden";
    document.getElementById("playBtn").style.visibility = "hidden";
    document.getElementById("titlePuma").innerText = "שלבי טיפול";
    // document.getElementById("treatmentpageExTitle").classList.remove("treatmentpageExTitleLong");
    document.getElementById("treatmentpageEx").classList.remove("treatmentpageEx2");
    document.getElementById("treatmentpageEx").classList.add("treatmentpageEx");
}

const modelMove = (event) => {
    const modelViewer = document.getElementById("orbit-demo");
    const orbitCycle = [
        '45deg 55deg 4m',
        '-60deg 110deg 2m',
        modelViewer.cameraOrbit
    ];

    const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
    modelViewer.cameraOrbit = orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
}
