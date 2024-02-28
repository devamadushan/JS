let nbr = prompt("saisir un nombre")
let diviseur = []

for(i =1; i<=nbr; i++){
    if (nbr % i == 0){
        diviseur.push(i)
        //document.write(i)
    }
}
document.write("Les diviseurs de " + nbr + " sont : ");
for (let i of diviseur){
    document.write(i+ " ")
}