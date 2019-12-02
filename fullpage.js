// kas näidata konsoolis debug kirjeid
_DEBUG = true

// esimene tseen mida näidatakse
const _ESIMENE_TSEEN = "arkamine"

// aeg, kaua loader ees seisab pärast lehe laadimist
const _TIME_TO_WAIT = 1000 * 1 // millisekundites
 
// köhi välja debug kirjed, kui vaja
function debug() {
    if (_DEBUG) { console.log(...arguments) }
}

// kogu mängu loogika
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

    // muuda suur pilt ära
    document.getElementById("suurPilt").src = STORY[id].pilt

    //muuda suur pealkiri ära
    document.getElementById("suurPealkiri").innerHTML = STORY[id].pealkiri

    //muuda väike pealkiri ära
    document.getElementById("väikePealkiri").innerHTML = STORY[id].pealkiri2

    // muuda ära story
    document.getElementById("jutt").innerHTML = STORY[id].story

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
            <img alt="image" src="'+ nupp.image + '" class="valikuimg">\
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
