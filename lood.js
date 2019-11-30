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
    magama: {
        pealkiri: "Hommik",
        pealkiri2: "Tund enne tööd",
        pilt: "img/magama/lambi.jpg",
        story: "Matemaatikast tulenenud paanikahoog hääbub vaikselt enda jaoks loodud vabandustesse, millest suurema osa moodustavad\
                'väga ei viitsi' ja 'magamata laps on loll laps'.Ilmselt tõusid liiga kiiresti püsti ja uni naaseb kättemaksuga.<br><br>\
                'Panen korra pea padjale tagasi'<br><br>\
                Pärast kaht tundi und ärkad süümepiinadega, aga mis tehtud see tehtud.<br><br>\
                Nüüd, kus unepuudus on järgi andnud, kergitab kaloripuudus pead. Sead sammud toidukapi poole, kust sulle vaatab vastu\
                laiutav tühjus. Leiad üksnes kapi nurgas asetsevad hommikuhelbeid. Jällegi ilmutab ennast uus peadmurdev valik.<br><br>\
                <b>Mida ma nüüd teen?</b>",
        buttons: [
            {
                image: "img/magama/helbed.jpg",
                text: "Krõbinad ja siis piim",
                action: "kõrbinadPiim"
            },
            {
                image: "img/magama/helbed.jpg",
                text: "Piim ja siis krõbinad",
                action: "piimKrõbinad"
            }
        ]
    },
    raamatukogu: {
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