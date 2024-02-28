let txt = prompt("saisir un text :")

for(i =0; i<= txt.length-1; i++){
   
    if (txt[i] == "."){
        break
    }
    
    document.write(txt[i])
}