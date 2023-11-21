let uneTemperature = prompt("saisir une température")

uneTemperature = parseInt(uneTemperature)

let msg;

if (uneTemperature <0){
    msg = "L'eau est solide"
}

else if (uneTemperature<100){
    msg = "L'eau est liquide"
}

else {
    msg = "L'eau est sous forme gazeuse"
}

document.write(msg)