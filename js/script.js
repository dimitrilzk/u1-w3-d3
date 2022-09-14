function sommaAnniFamiglia(membro1, membro2, membro3, membro4) {
  if (
    typeof membro1 === "number" &&
    typeof membro2 === "number" &&
    typeof membro3 === "number" &&
    typeof membro4 === "number"
  ) {
    let risultato = membro1 + membro2 + membro3 + membro4;
    return risultato;
  } else {
    console.error("Puoi inserire solo caratteri numerici!");
  }
}
let famigliaCheNonHaCapito = sommaAnniFamiglia("due", "quattro", "uno", 5);
console.log(famigliaCheNonHaCapito);
let famigliaBianchi = sommaAnniFamiglia(15, 20, 50, 52);
console.log(famigliaBianchi);
let famigliaRossi = sommaAnniFamiglia(12, 17, 47, 48);
console.log(famigliaRossi);
console.log(famigliaBianchi == famigliaRossi);
console.log(famigliaBianchi <= famigliaRossi);
console.log(famigliaBianchi >= famigliaRossi);
let anziani = famigliaBianchi > famigliaRossi ? "PIU ANZIANI" : "PIU GIOVANI";
console.log(anziani);
let anziani2 = famigliaBianchi < famigliaRossi ? "PIU ANZIANI" : "PIU GIOVANI";
console.log(anziani2);
