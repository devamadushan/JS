let ville, distance


ville= prompt("saisir une ville :")
ville =  ville.toLowerCase()
switch (ville){
    case "amsterdam":
        distance = "711 km"
        break
    case "tokyo":
        distance = "979 km"
        break
    case "london" :
        distance= "746 km"
        break
    case "lisbonne":
        distance= "1511 km "
        break
    case "prague":
        distance = " 750 km"
        break
    case "new york":
        distance =  "6211 km"
        break
    case "papeete":
        distance = "1611 km" 
        break
    default:
        distance = "erreur"
}alert(distance)