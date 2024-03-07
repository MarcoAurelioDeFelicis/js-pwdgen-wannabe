let name = prompt('inserisci il tuo nome') //string - null

let secondname = prompt('inserisci il tuo cognome') //string - null
console.log ('ciao' + name + secondname)

let color = prompt('inserisci il tuo colore preferito') //string - null
console.log ('il tuo colore preferito è il' + color)
 
let randomfloat = Math.floor(Math.random() *100) +1 //number 1 - 100

const passward = name + secondname + color + randomfloat //string
console.log ('la tua passward è :' + passward)

    
