let valeur = prompt("Saisir une valeur");
valeur = parseInt(valeur)



if (valeur < 0){
    valeur = valeur * -1
}
document.write(valeur)