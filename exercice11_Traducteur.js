let mot , furbish

mot = prompt("saisir un mot en Français")
mot = mot.toLowerCase()

switch(mot){
    case "lumière":
        furbish = "a-loh"
        break
    case "manger" :
        furbish = "a-tay" 
        break
    case "faim":
        furbish ="a-tay"
        break
    case "regrdes":
        furbish = "ay-ay"
        break
    case "caresse" :
        furbish= "ah-may"
        break
    case "câlin" :
        furbish ="ah-may"
        break
    case "inquiet":
        furbish ="boh-bay"
        break
    default:
        furbish = "erreur"

}alert(furbish)
