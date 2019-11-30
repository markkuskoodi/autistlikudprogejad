// Ainult story tekstid
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
                image: "img/magama/piim.jpg",
                text: "Piim ja siis krõbinad",
                action: "piimKrõbinad"
            }
        ]
    },
    raamatukogu: {
        pealkiri: "Raamatukogus",
        pealkiri2: "Mõni tund enne tööd",
        pilt: "img/raamatukogu/raamatukogu2.jpg",
        story: "Paanikaga segunenud ahastus viib su mõtted ühe koha peale, mis sind eelnevatest\
                akadeemilistest probleemidest nii mitmel korral välja aidanud on - raamatukogu.<br><br>\
                Korjad oma laiali oleva paberimajanduse kokku, viskad kõik ruttu koos läpakaga kotti,\
                lööd mütsi pähe ja sead sammud raamatukogu poole.<br><br>\
                Jõudes raamatukokku paned oma viimase euroga riided riidehoidu ja kiirustad üles. Avad ukse\
                ja leiad ennast saali keskelt lolli näoga oma kursakaaslasest crushi jõllitamast ning jälle seisad valiku ees.\
                Üle oma möllavate hormoonide on mõtteis vaikselt kuulda ka häält, mis kõlab kahtlaselt kaine mõistuse moodi.<br><br>\
                <b>Mida sa teed?</b><br><br>\
                Kordad mataks koos oma crushiga, teades, et emotsioonid võivad segada õppetööd, kuid samas kaks pead on kaks pead.<br><br>\
                VÕI<br><br>\
                Kordad mataks üksi, lootes oma individuaalsele tarkusele, mida pole just palju, kuid saad vähemalt keskenduda.<br><br>",
        buttons: [
            {
                image: "img/raamatukogu/Üksi1.jpg",
                text: "Kordan ise",
                action: "kordanIse"
            },
            {
                image: "img/raamatukogu/crush.jpg",
                text: "Istun oma kursakaaslasest crushi juurde",
                action: "istunMusiJuurde"
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
    istunMusiJuurde:{
        pealkiri: "Raamatukogus",
        pealkiri2: "Mõni tund enne tööd",
        pilt: "img/raamatukogu/integraalMain.jpg",
        story: "Hormoonid saavad siiski kainest mõistusest võitu ja istud oma silmarõõmu juurde. Tänu ta osavatele seletustele mõistad peagi, et teema ei olegi nii raske kui emsapilgul tundus.\
                Küll aga tihtipeale ei suuda sa hoida oma mõtteid vaos ning avastad ennast ikka ja jälle matemaatika asemel unistamast teist kahest koos hobusel päikseloojangusse kappamas.\
                Kui teemaks tuleb päratu integraal hakkab teie vahel tüliõun kerkima.See oli küll ainuke asi millest sa enda arvates tunnis perfektselt aru said.<br><br>\
                Olgugi, et see tund oli üksainus praks, milles sa natukene tähele panna viitsid.Su kergelt ärritunud silmarõõm kirjutab tahvlile järgmise integraali ja laseb sul seda lahendada.<br><br>\
                <img src='img/raaamatukogu/integraal.png'><br><br>\
                Vaidlete tükk aega selle lahenduse üle ja olukord läheb konsensuse puudumise tõttu järjest pingelisemaks.\
                Sa ei teadnudki, et tal selline pool on.<br><br>\
                Lõpuks paned oma jala maha ja jääd kindlaks ühele vastusele.<br><br>",
        buttons: [
            {
                image: "img/raamatukogu/integraalMain.jpg",
                text: "10π",
                action: "kordanIse",
            },
            {
                image: "img/raamatukogu/integraalMain.jpg",
                text: "6π - 7",
                action: "kordanIse"
            }
        ]
    },
    kordanIse: {
        pealkiri: "Raamatukogus",
        pealkiri2: "Mõni tund enne tööd",
        pilt: "img/raamatukogu/raamatukogu2.jpg",
        story: "Sead on akadeemilise edu hormoonidest tähtsamaks ja otsustad üksi korrata, olgugi, et jääd ainult oma naturaalsele intelligetnsile lootma.",
        buttons: [
            {
                image: "img/raamatukogu/kondoom.jpg",
                text: "tekst",
                action: "istunMusiJuurde",
            },
            {
                image: "img/raamatukogu/kondoom.jpg",
                text: "tekst",
                action: "istunMusiJuurde",
            }
        ]
    }
}   