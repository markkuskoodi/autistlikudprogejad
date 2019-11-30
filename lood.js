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
        pilt: "img/magama/krobinadSuur.jpg",
        story: "Matemaatikast tulenenud paanikahoog hääbub vaikselt enda jaoks loodud vabandustesse, millest suurema osa moodustavad\
                'väga ei viitsi' ja 'magamata laps on loll laps'.Ilmselt tõusid liiga kiiresti püsti ja uni naaseb kättemaksuga.<br><br>\
                'Panen korra pea padjale tagasi'<br><br>\
                Pärast kaht tundi und ärkad süümepiinadega, aga mis tehtud see tehtud.<br><br>\
                Nüüd, kus unepuudus on järgi andnud, kergitab kaloripuudus pead. Sead sammud toidukapi poole, kust sulle vaatab vastu\
                laiutav tühjus. Leiad üksnes kapi nurgas asetsevad hommikuhelbeid. Jällegi ilmutab ennast uus peadmurdev valik.<br><br>\
                <b>Mida ma nüüd teed?</b>",
        buttons: [
            {
                image: "img/magama/helbed.jpg",
                text: "Krõbinad ja siis piim",
                action: "krõbinadPiim"
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
    },
    krõbinadPiim: {
        pealkiri: "Hommik",
        pealkiri2: "Tund enne tööd",
        pilt: "img/magama/krobinadSuur.jpg",
        story: "Valad kausi krõbinaid täis ning valad piima peale, mille peale tunned ennast imelikult, justkui\
                universum oleks sind tänanud.<br><br>\
                Olenemata faktist, et nende krõbinate säilivustähtaeg oli eilseni, maitsevad need esmaklassiliselt.\
                Lased lusikal välkuda ning varsti on kauss tühi, aga näljatunne on ainult natukene taandunud.<br><br>\
                Oled endale just uut kausitäit krõbinaid valamas kui meenub, et see semester jäid napilt stipinimekirjast välja.<br><br>\
                Kas see mahub sulle eelarvesse?<br><br>\
                <b>Mida sa nüüd teed?</b>",
        buttons: [
            {
                image: "img/magama/veelKrobinaid.jpg",
                text: "Veel krõbinaid",
                action: "veelKrõbinaid"
            },
            {
                image: "img/magama/aitabKrobinad.jpg",
                text: "Aitab kah",
                action: "aitab"
            }
        ]
    },
    piimKrõbinad: {
        pealkiri: "Hommik",
        pealkiri2: "Tund enne tööd",
        pilt: "img/magama/krobinadSuur.jpg",
        story: "Nüüd sa tead miks sinu elus kõik alati valesti läheb. Kõige kriitilisematel hetkedel suudad sa ikkagi langetada vale otsuse.<br><br>\
                Sel hetkel, kui piimajuga kaussi voolab, tabab sind justkui välk selgest taevast - ilmutus, mis näitab sulle kõiki su elus tehtud valesid otsuseid.\
                Kangas mis hoiab universumi koos, rebeneb.\
                Aatomite vahelised sidemed hajuvad, elektronkatted lagunevad, elektronid lendlevad sihitult universumis ringi.<br><br>\
                Järgmistel, igavikuna tunduvatel momentidel, kõik, mis eksisteeris, suubub unustusse.<br><br>\
                Miks?\
                Kes paneb piima enne krõbinaid?<br><br>\
                <b>Mida sa nüüd teed?</b>",
        buttons: [
            {
                image: "img/raamatukogu/valevastusMain2.jpg",
                text: "Proovi uuesti",
                action: "magama"
            },
        ]
    },
    veelKrõbinaid: {
        pealkiri: "Hommik",
        pealkiri2: "Tund enne tööd",
        pilt: "img/magama/krobinadSuur.jpg",
        story: "Valad kausi krõbinaid täis ning valad piima peale, mille peale tunned ennast imelikult, justkui\
                universum oleks sind tänanud.<br><br>\
                Olenemata faktist, et nende krõbinate säilivustähtaeg oli eilseni, maitsevad need esmaklassiliselt.\
                Lased lusikal välkuda ning varsti on kauss tühi, aga näljatunne on ainult natukene taandunud.<br><br>\
                Oled endale just uut kausitäit krõbinaid valamas kui meenub, et see semester jäid napilt stipinimekirjast välja.<br><br>\
                Kas see mahub sulle eelarvesse?<br><br>\
                <b>Mida sa nüüd teed?</b>",
        buttons: [
            {
                image: "img/magama/veelKrobinaid.jpg",
                text: "Veel krõbinaid",
                action: "veelKrõbinaid"
            },
            {
                image: "img/magama/aitabKrobinad.jpg",
                text: "Aitab kah",
                action: "aitab"
            }
        ]
    },
    aitab: {
        pealkiri: "Hommik",
        pealkiri2: "Pool tundi enne tööd",
        pilt: "img/magama/krobinadSuur.jpg",
        story: "Valad kausi krõbinaid täis ning valad piima peale, mille peale tunned ennast imelikult, justkui\
                universum oleks sind tänanud.<br><br>\
                Olenemata faktist, et nende krõbinate säilivustähtaeg oli eilseni, maitsevad need esmaklassiliselt.\
                Lased lusikal välkuda ning varsti on kauss tühi, aga näljatunne on ainult natukene taandunud.<br><br>\
                Oled endale just uut kausitäit krõbinaid valamas kui meenub, et see semester jäid napilt stipinimekirjast välja.<br><br>\
                Kas see mahub sulle eelarvesse?<br><br>\
                <b>Mida sa nüüd teed?</b>",
        buttons: [
            {
                image: "img/magama/veelKrobinaid.jpg",
                text: "Veel krõbinaid",
                action: "veelKrõbinaid"
            },
            {
                image: "img/magama/aitabKrobinad.jpg",
                text: "Aitab kah",
                action: "aitab"
            }
        ]
    },
}   