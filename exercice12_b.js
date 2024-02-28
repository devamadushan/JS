let animal , rep

animal = prompt("saisir le nom d'un animal")
anumal = animal.toLowerCase()

switch (animal){
    case "ecureuil" :
    case "chien" :
    case "lérot":
        rep = "Mammifère"
        break

    case "kangourou" :
    case "wombat" :
    case "opossum":
        rep = "Marsupiale"
        break

    default:
       rep = "Animal non reconnu";
}alert(rep)