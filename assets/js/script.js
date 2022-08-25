let fullname = document.getElementById("name");
let birthday = document.getElementById("birthday");
let birthday2 = document.getElementById("birthday2");

console.log(birthday.value);
console.log(birthday2.value);

let birthJahr = birthday.value.split("-", 1);
console.log("Geburtsjahr: " + birthJahr);
/* 
let birthMonat = birthday.value.split("-", 2);
console.log(birthMonat);

let birthTag = birthday.value.split("-", 3);
console.log(birthTag); */
function showAge() {
  console.log("Geburtstag: " + birthday.value);
}
function showBirthyear() {}

// let birthJahr = (birthday).getFullYear();
// let birthMonat = birthday.getMonth()+1;
// // let birthTag = birthday.getDate();
// console.log(birthJahr);
// console.log(birthMonat);
// console.log(birthTag);

const heute = new Date();
let todayJahr = heute.getFullYear();
/* let todayMonat = heute.getMonth() + 1;
let todayTag = heute.getDate(); */
console.log("Jahr heute: " + todayJahr);
/* console.log("Monat heute: " + todayMonat);
console.log("Tag heute: " + todayTag); */

function showName() {
  console.log(fullname.value);
}
alter = todayJahr - birthJahr;
alter2 = todayJahr - birthday2;
console.log("Alter: " + alter);
console.log("Alter2: " + alter2);
function berechneAlter() {
  document.getElementById("alter").innerHTML =
    "Du bist " + alter + " Jahre alt";
  document.getElementById("alter2").innerHTML =
    "2Du bist " + alter2 + " Jahre alt";
}
