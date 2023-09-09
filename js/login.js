let loginInputEmail = document.getElementById('input-email')
let loginInputSenha = document.getElementById('input-senha')
let loginBotaoEntrar = document.getElementById('login-botao-entrar')

loginInputEmail.addEventListener('focus', () => {
    if (loginInputEmail.value == "exemplo@dominio.com"){
        loginInputEmail.value = ""
    }
})

loginInputEmail.addEventListener('focusout',() =>{
    if (loginInputEmail.value == ""){
        loginInputEmail.value = "exemplo@dominio.com"
    }
})

loginBotaoEntrar.addEventListener('click', () =>{
    if (loginInputEmail.value == "" || loginInputSenha.value == ""){
        modalAvisoAbrir("Os campos de E-mail e Senha são obrigatórios!")
        return
    }
    loginAutenticarUsuario(loginInputEmail.value,loginInputSenha.value)
})


function loginAutenticarUsuario (email,senha){
    const urlBase = 'http://localhost:3400'
    fetch(`${urlBase}/login`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, senha})
        })
        .then(response => response = response.json())
        .then(response => {
            if(!!response.mensagem){
                modalAvisoAbrir(response.mensagem)
                return
            } else{
                modalAvisoAbrir("Login efetuado com sucesso!")
                salvarTokenUsuario(response.token)
                salvarEmailUsuario(response.usuario)
                window.open('cliente.html', '_self')
            }
        })
}

