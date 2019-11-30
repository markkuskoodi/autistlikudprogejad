// Ainult story tekstid, ei kirjuta koodi siia raisk!!
// by Keeeenion, signed 29.11.19

// JSON struktuur
/*
{
    scene name: {       <-- Tseeni nimi, mida kutsutakse nuppudele vajutades
        story: ...      <-- Tekst mida kuvatakse jutuna enne nuppe
        buttons: [      <-- Selle tseeni võimalikud valikud
            image: ...  <-- Pildi route, mida kuvatakse nupu all
            text: ...   <-- Tekst, mida kuvatakse nupu juures
            action: ... <-- Viide järgmisele tseenile
        ]
    }
}
*/

const STORY = {
    onPedeVa: {
        story: "Varajane hommik.<br><br>\
            Veedad oma viimaseid minuteid pehmel padjal ja soojalt teki all, kuid unesegadusest ja palvetest hoolimata saad aru, et iga hetk hakkab äratuskell lõugama mis tähistab uue nädala algust.Oma viimastel vaikusemomentidel tunned suus eile Illegaardis joodud kokteilide maitseid ja veedad mõtetes veel paar hetke justkui paradiisis, milleks oli möödnud nädalavahetus.<br><br>\
            Äratus hakkab lõugama.<br><br>\
            Kriiskava äratuse saatel hakkab algava koolinädala karm reaalsus sulle järjest rohkem pähe kinnistuma, ning olenemata sellest, kui palju sa sellele 'Snooze' nupule vajutad, pead sa kunagi ikkagi ennast üles ajama.<br><br>\
            Järsku meenub sulle, et täna kell 12 on KM-is KT. Momentaarne ahastus seguneb paanikaga ja sa kargad voodis välja.<br><br>\
            <b>Mida ma nüüd teen?</b>",
        buttons: [
            {
                image: "img/sleep.jpg",
                text: "Ei lähe poodi",
                action: "eiOlePede"
            },
            {
                image: "img/library.jpg",
                text: "Miilits",
                action: "onPede"
            }
        ]
    },
    eiOlePede: {
        story: "pede",
        buttons: [
            {
                image: "img/library.jpg",
                text: "nuudel",
                action: "maugel"
            },
            {
                image: "img/breakfast.jpg",
                text: "kaun",
                action: "sein"
            }
        ]
    }
}   