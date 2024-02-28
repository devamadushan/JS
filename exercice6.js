
let nb = null ;


    do {
        if (nb == null){
            nb = prompt("Saisir un nombre possitif")
            nb = parseInt(nb)
        }
                
        if (nb <0){
            nb = prompt("Ce n'est pas un nombre positif...")
            nb = parseInt(nb)
        }

        if (nb == 0){
            nb = prompt("Saisir un nombre plus que 0")
            nb = parseInt(nb)
        }

    }while(nb<=0)
    


let somme =0;
let i = 1
while(i <= nb){

somme+=i
document.write(i + '<br>')
i=i+1
}
document.write("La some est : "+somme)