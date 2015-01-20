// ==UserScript==
// @name        BetterETR
// @namespace   matyas.mustoha
// @include     /^https://web[0-9]+.etr.u-szeged.hu/etr/KurzusFelvetel/Kurzuslista/
// @version     1
// @grant       none
// ==/UserScript==

//
// Összesített kredit és óraszám
//

var kurzus_tabla = document.getElementsByClassName("kurz_ul")[0];
var kurzusok = kurzus_tabla.children;

var kredit = 0;
var oraszam = 0;
for (var k = 0; k < kurzusok.length; k++) {
    var kurzus_str = kurzusok[k].children[0].rows[0].cells[3].innerHTML.split(" ");
    kredit += parseInt(kurzus_str[0]);
    oraszam += parseInt(kurzus_str[3]);
}

var osszesitett_str = document.createElement("div");
osszesitett_str.innerHTML = kredit + " kr / " + oraszam + " óra";
kurzus_tabla.parentNode.appendChild(osszesitett_str);
