credenciaisUsuario = JSON.parse(localStorage.getItem('usuario'))
tokenUsuario = localStorage.getItem('token')

function lerCredenciaisUsuario (credenciais){
    let usuarioFoto = document.getElementById("foto-usuario")
    let usuarioPerfil = document.getElementById("perfil-usuario")
    let usuarioEmail = document.getElementById("email-usuario")

    usuarioFoto.src = credenciais.foto
    usuarioPerfil.innerText = credenciais.perfil.descricao
    usuarioEmail.innerText = credenciais.email

}

lerCredenciaisUsuario(credenciaisUsuario)