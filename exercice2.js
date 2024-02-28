let ville = prompt("Saisir la ville où souhaitez-vous aller ");
ville = ville.toLowerCase();
let direction;

if (ville == "orleans" || ville == "isdes" ) {
    direction = "D51";
} else if (ville == "sully" || ville == "paris") {
    direction = "D948";
} else {
    direction = "Erreur";
}

document.write(direction);
