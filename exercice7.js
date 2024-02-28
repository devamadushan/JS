let somme = 0
let i = 1 
while(i <10){

    let nombre = prompt("saisir un nombre"+ i+":" )
    nombre = parseInt(nombre)
    somme +=nombre
    
    let rep = prompt("Continuer ?")
    if (rep.toLowerCase() == "non"){
        break
    }
    i++
}

moyenne = somme / i 
document.write("la Moyenne : "+moyenne )
//document.write(somme +'<br>')
//document.write(i)