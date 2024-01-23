let Parti1 = 0
let Parti2 = 0
let Partier = ["Arbeiderpartiet", "Høyre", "Senterpartiet", "Fremskrittspartiet", "Miljøpartiet De Grønne"]
let Partistemmer = []
let StemmeNummer = 0
let StemmeNummerLISTE = []

StartOpp()

function StartOpp()
{
    for (let i = 0; i < Partier.length; i++) {
        Partistemmer.push(0);
        let nr=i+1
        document.getElementById("Parti" + nr).innerHTML = String(Partier[i])
        console.log(i, Partistemmer);
    }
}

function Stem(partiNummer) {

    partiNummer = partiNummer - 1;

    if (StemmeNummerLISTE.includes(StemmeNummer) == false)
    {
        Partistemmer[partiNummer]++;
        StemmeNummerLISTE.push(StemmeNummer);
        console.log("partinummer: " + partiNummer);
        console.log(Partistemmer);
    }
    else {
        alert("Du har allerede stemt!");
    }
}

function LagreData(){
    localStorage.setItem("PartiStemmer", Partistemmer);
    localStorage.setItem("PartiNavn", Partier);
}

function HentData(Vis, Overskriv){

    if (Vis == true)
    {
        alert("LAGREDE DATA:\n" + 
        "PARTISTEMMER = " + localStorage.getItem("PartiStemmer")
        );
    }

    if (Overskriv == true)
    {
    Partistemmer = localStorage.getItem("PartiStemmer")
    }
}
function SlettData(){
    Parti1 = 0
    Parti2 = 0
    Partistemmer = []
    StemmeNummer = 0
    StemmeNummerLISTE = []
    localStorage.removeItem("PartiStemmer");
    StartOpp()
}
function Neste(){
    if ((StemmeNummer + 1) != StemmeNummerLISTE.length)
    {
        alert("DU MÅ STEMME FØRST");
    }
    else {

        StemmeNummer++
    }
}
function ResultatSide(side, dialog){
    if (localStorage.getItem("PartiStemmer") == null){
        alert(dialog);
    }
    if (localStorage.getItem("PartiStemmer") != null){
        window.location.href=side;
    }
}