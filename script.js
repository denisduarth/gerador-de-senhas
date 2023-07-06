function gerarSenha() {
    var caracteres = "!@#$%^&*()+?><:{}[]";
    let numeros = "0123456789";
    let letras = "abcdefghijklmnopqrstuvwxyz";
    let letrasMaiusculas = letras.toUpperCase();
    let tudo = caracteres + numeros + letras + letrasMaiusculas; 
    
    var password = "";

    for (var i = 0; i < 15; i++) {
      var randomNumber = Math.floor(Math.random() * tudo.length);
      password += tudo.substring(randomNumber, randomNumber + 1);
    }
    
    document.getElementById('password').innerHTML = password;
}

function copiar(){
    let texto = document.getElementById('password').innerHTML;
    let avisoCopiado = document.getElementById('copiado');

    navigator.clipboard.writeText(texto);

    avisoCopiado.style.display = "block";
    avisoCopiado.innerText = "Copiado para a área de transferência";
    
    setTimeout(function(){
        avisoCopiado.style.display = "none";
    }, 2500);
}