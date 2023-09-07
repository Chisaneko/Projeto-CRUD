credenciaisUsuario = JSON.parse(localStorage.getItem('usuario'))
tokenUsuario = localStorage.getItem('token')

function lerCredenciaisUsuario (credenciais){
    let usuarioNome = document.getElementById("nome-usuario")
    let usuarioFoto = document.getElementById("foto-usuario")
    let usuarioEmail = document.getElementById("email-usuario")

    usuarioFoto.src = credenciais.foto
    usuarioEmail.innerText = credenciais.email
    usuarioNome.innerText = credenciais.nome

}

lerCredenciaisUsuario(credenciaisUsuario)