function gerarSenha (){
    let size = document.getElementById("passwordStrength")
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz*/@#$;+-"
    const specials = "";
    size = Number(size.value)
    console.log(size)
    
    
    let isChecked = checar()
    if(isChecked == 1){
        aux = 59;
    }else{
        aux = 51;
    }

    let senhaGerada = ""
    let senha = [];
    
    for(let i = 0; i < size; i++){
        let teste = Math.random() * aux;
        teste = teste.toFixed(0);
        senha.push(characters[teste]);
        senhaGerada = senhaGerada + senha[i]
    }


    document.getElementById("template").innerHTML = senhaGerada;

}
function checar() {
    let especial = document.getElementById("specialCaracter");
    if(especial.checked == true){
        return 1
    } else {
        return 0
    }
}