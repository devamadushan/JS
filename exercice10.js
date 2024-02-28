let mot = prompt("saisir un mot : ");
mot = mot.toLowerCase()
let voyelles = 0

for (let i = 0; i < mot.length; i++) {
    let lettre = mot[i]

    if (lettre == 'a' || lettre == 'e' || lettre == 'i' || lettre == 'o' || lettre == 'u' || lettre == 'y') {
        
        voyelles++
    }
}


document.write("Le mot '" + mot + "' contient " + voyelles + " voyelles.");
