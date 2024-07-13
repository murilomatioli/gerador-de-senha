
window.addEventListener("DOMContentLoaded", () => {
    let copyMsg = document.getElementById("copy-msg");

    copyMsg.style.visibility = "hidden"
    let rangeInput = document.getElementById("passwordStrength")
    let numberVisor = document.getElementById("manualInput")
    
    rangeInput.addEventListener('change', function() {
        console.log("Mexeu")
        numberVisor.value = rangeInput.value
    })
})
function limitar() {
    let inputLimiter = document.getElementById("manualInput");
    if(inputLimiter.value > 50){
        inputLimiter.value = 50
    }
    if(inputLimiter.value < 3){
        inputLimiter.value = 3
    }
    
}
/*function teste(){
    let numberInput = document.getElementById("manualInput")

    numberInput.addEventListener("keydown", function(e) {
        e.preventDefault()
        if(e.key == "Enter"){
            gerarSenha()
        }
    })
}*/

function gerarSenha (){
    let size = document.getElementById("passwordStrength")
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const specials = "*/@#$;+-";
    let manualSize = document.getElementById("manualInput").value    

    if(manualSize){
        size = manualSize;
    }else{
        size = Number(size.value)
    }
    let senhaGerada = ""
    let senha = [];
    
    for(let i = 0; i < size; i++){
        let teste = Math.random() * 51;
        teste = teste.toFixed(0);
        senha.push(characters[teste]);
    }

    let isSpecialChecked = checkSpecial();
    let isNumbersChecked = checkNumber();

    if(isSpecialChecked == 1){
        let chance

        let pickSpecial = 0;
        let hasSpecial
        while(hasSpecial != 1){
            senhaGerada = ""
            for(i = 0; i < size; i++){
                chance = Math.random() * 100;
                chance = chance.toFixed(0);
                pickSpecial = Math.random() * 7;
                pickSpecial = pickSpecial.toFixed(0);
                if(chance <= 25){
                    senha[i] = specials[pickSpecial];
                    hasSpecial = 1;
                    
                }
                
            }
        }
    }
    
    if(isNumbersChecked == 1){
        let chance
        let hasNumber
        let pickNumber, verificador;

        while(hasNumber != 1){
            senhaGerada = ""
            for(i = 0; i < size; i++){
                verificador = true;
                chance = Math.random() * 100;
                chance = chance.toFixed(0);
                pickNumber = Math.random() * 9
                pickNumber = pickNumber.toFixed(0)
                if(chance <= 25){
                    for(let j = 0; j < 8; j++){
                        if(senha[i] == specials[j]){
                            verificador = false;
                        }
                    }
                    if(verificador == true){
                        senha[i] = pickNumber
                        hasNumber = 1;                     
                    }

                }
            }
        }
    }
    for(i = 0; i < size; i++){
        console.log("Senha:" + senha[i])
        senhaGerada = senhaGerada + senha[i]
    }
    document.getElementById("template").innerHTML = senhaGerada;
}

function checkSpecial() {
    let checkSpe = document.getElementById("specialCaracter");
    if(checkSpe.checked == true){
        return 1
    } else {
        return 0
    }
}
function checkNumber() {
    let checkNum = document.getElementById("hasNumbers");
    if(checkNum.checked == true){
        return 1
    } else {
        return 0
    }
}
function copyToClipboard() {
    let copiedMsg = document.getElementById("copy-msg")
    copiedMsg.style.visibility = "visible"
    let textoCopiado = document.getElementById("template").innerText;
    function hideMsg(){
        copiedMsg.style.visibility = "hidden"
    }
    setTimeout(hideMsg, 2500)
    navigator.clipboard.writeText(textoCopiado)
    
}