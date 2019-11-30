// kas näidata konsoolis debug kirjeid
_DEBUG = true

// esimene tseen mida näidatakse
_ESIMENE_TSEEN = "onPedeVa"

// aeg, kaua loader ees seisab pärast lehe laadimist
_TIME_TO_WAIT = 1000 * 1 // millisekundites
 
// köhi välja debug kirjed, kui vaja
function debug() {
    if (_DEBUG) { console.log(...arguments) }
}

// kogu mängu loogika
// ez as that
// lemon squeeze
function naitaTeksti(id) {
    // kui id ei sobi, pane funktsioon kinni
    if (!id) {
        return;
    }

    // kui me ei leia objektist uut lugu, saada kasutaja perse
    if (!STORY[id]) {
        alert("Arendajad on viletsad ja pole seda valikut veel lisanud")
        return
    }

    // debug tekstid

    debug("leitud tseen", STORY[id])

    // kustuta kõik vanad nupud
    document.getElementById("valikud").innerHTML = ""

    // muuda ära story
    document.getElementById("meme").innerHTML = STORY[id].story

    // tee nii palju nuppe, kui on vaja
    for (let i in STORY[id]["buttons"]) {
        // defineeri nupp
        let nupp = STORY[id]["buttons"][i]

        // köhi konsooli object
        debug("nupp", nupp)

        // loo uus element
        let div = document.createElement("div")

        // pane külge vajalikud klassid
        div.classList.add("valikucontainer")

        // ulme nupu elemendi kood
        // xss turvaauk aga keda huvitab eks...
        div.innerHTML = '\
            <img id="pede" alt="image" src="'+ nupp.image + '" class="valikuimg">\
            <div id="nupu-tekst" class="overlay">\
                <a class="overlaytext" href="#" onclick="naitaTeksti(\''+ nupp.action + '\');return false;">' + nupp.text + '</a>\
            </div>\
        '

        // näita loodud nuppu
        document.getElementById("valikud").appendChild(div)
    }
}

// alusta mängu näidatest esimest tseeni
document.addEventListener('DOMContentLoaded', function () {
    naitaTeksti(_ESIMENE_TSEEN)
    setTimeout(function() {
        document.getElementById("loader").outerHTML = ""
    }, _TIME_TO_WAIT) // oota n sekundit
}, false)
