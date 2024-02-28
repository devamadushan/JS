
let nombres = [];


let num1 = prompt("saisir un nombre")
nombres.push(num1);

let num2 = prompt("saisir un nombre")
nombres.push(num2);

let num3 = prompt("saisir un nombre")
nombres.push(num3);

for (let i = 0; i < nombres.length - 1; i++) {
    for (let j = 0; j < nombres.length - 1 - i; j++) {
        if (nombres[j] > nombres[j + 1]) {
            
            let temp = nombres[j];
            nombres[j] = nombres[j + 1];
            nombres[j + 1] = temp;
        }
    }
}


document.write("Les nombres dans l'ordre croissant : " + nombres[0] + ", " + nombres[1] + ", " + nombres[2]);

