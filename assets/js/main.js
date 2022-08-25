// Namen eingeben und ausgeben

let fullname = document.getElementById("name");

function showName() {
    console.log(fullname.value);
    document.getElementById("vorname").innerHTML=fullname.value;
}
// Geburtsjahr eingeben

let geburtsJahr = document.getElementById("birthday2");

function showBirthyear() {
    console.log(geburtsJahr.value);
    document.getElementById("geburtsJahr").innerHTML=geburtsJahr.value;
    let neuesJahr = geburtsJahr.value - 23
    console.log("Neues Jahr: "+neuesJahr);
}



// Geburtstag eingeben

let geburtsTag = document.getElementById("birthday");

function showAge() {
    console.log(geburtsTag.value);
    document.getElementById("geburtsTag").innerHTML=geburtsTag.value
}

// Alter anzeigen mit Geburtsjahr

// aktuelles Datum ausgeben
let heute = new Date();
console.log(heute);
document.getElementById("todayTag").innerHTML=heute

let heuteJahr = heute.getFullYear();
console.log(heuteJahr);
document.getElementById("todayJahr").innerHTML=heuteJahr

// Alter anzeigen



function berechneAlter() {
    let alter1 = heuteJahr - Number(geburtsJahr.value)
    console.log("Alter1: "+alter1);
    document.getElementById("alter").innerHTML=alter1
}