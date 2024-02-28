let lesSemaines = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

let semaine = prompt("Pour quand voulez-vous réserver ?");
semaine = semaine.toLowerCase(); 

let prix;

let age = prompt("Quel est votre âge ?");

age = parseInt(age); 

for (let i = 0; i < lesSemaines.length-2; i++) {
    prix = 20;

    if (lesSemaines[i] == semaine && age < 14) {
        prix -= prix * 0.5; 
        document.write("Le prix est de : " + prix);
        break; 
    }

    if (lesSemaines[i] == semaine && age > 14 && age < 16) {
        prix -= prix * 0.25; 
        document.write("Le prix est de : " + prix);
        break; 
    }
    if ( lesSemaines[i] == semaine && age > 16){
        document.write("Le prix est de : " + prix);
        break;
    }


}

for (let i = 5; i < lesSemaines.length; i++) {
    prix = 40;

    if (lesSemaines[i] == semaine && age < 14) {
        prix -= prix * 0.5; 
        document.write("Le prix est de : " + prix);
        break; 
    }

    if (lesSemaines[i] == semaine && age > 14 && age < 16) {
        prix -= prix * 0.25; 
        document.write("Le prix est de : " + prix);
        break; 
    }
    if ( lesSemaines[i] == semaine && age > 16){
        document.write("Le prix est de : " + prix);
        break;
    }
   


}




if (prix === undefined) {
    document.write("Aucune réduction appliquée. Le prix est de : " + prix);
}
