let num = prompt("saisir un nombre")
num = parseInt(num)
document.write('<h1>'+"Table de "+num +'</h1>')
for(let i = 0; i<=10; i++){
 let rep =i *num 
 document.write(i +" * "+num+" = "+ rep+'<br>' )
}