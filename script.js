function gerarSenha (){
    let size = document.getElementById("passwordStrength")
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const specials = "*/@#$;+-";
    size = Number(size.value)

    let senhaGerada = ""
    let senha = [];
    
    for(let i = 0; i < size; i++){
        let teste = Math.random() * 51;
        teste = teste.toFixed(0);
        senha.push(characters[teste]);
        senhaGerada = senhaGerada + senha[i]
    }

    let isSpecialChecked = checar();
    
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
                console.log(`Pickspecial: ${pickSpecial}`)
                if(chance <= 25){
                    senha[i] = specials[pickSpecial];
                    console.log( i + "inserir caractere")
                    hasSpecial = 1;
                    
                }
                senhaGerada = senhaGerada + senha[i]
            }
        }


    }
    document.getElementById("template").innerHTML = senhaGerada;

}

function ativar(){
    let valor = document.getElementById("passwordStrength")
    valor = valor.value
    document.getElementById("strengthValue").innerHTML = valor;

}

function checar() {
    let especial = document.getElementById("specialCaracter");
    if(especial.checked == true){
        return 1
    } else {
        return 0
    }
}