let nbrDepart = prompt("saisir un nombre")
nbrDepart = parseInt(nbrDepart)

for (i = 0; i<=10; i++){
    document.write(nbrDepart+ '<br>')
    nbrDepart++
    if (nbrDepart >50){
        break
    }
}