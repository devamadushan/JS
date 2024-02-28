let somme = prompt("Quelle est votre somme initiale de '1 janvier 2021' : ")
somme = parseInt(somme)
let montant= somme
let taux = 0.0075
let annee = 2021

for (let i =1 ; i<=11;i++){
    
    
    document.write("le 1er Janvier "+annee +":"+montant+"€"+ '<br>')
    montant = montant+ montant*taux 
    annee++
}