const characters = 
["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const passwordLength = 10 

function newPassword(){
    const input = document.getElementById('element')
    input.textContent = randomPassword()
   
}

function randomCharacter(){
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]  
}

function randomPassword(){
    let randomPassword = ""
    for(let i = 0; i < passwordLength; i++){
        randomPassword += randomCharacter()
    }
    return randomPassword
}

