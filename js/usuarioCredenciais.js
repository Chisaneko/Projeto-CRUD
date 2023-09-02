credenciaisUsuario = JSON.parse(localStorage.getItem('usuario'))
tokenUsuario = localStorage.getItem('token')

function lerCredenciaisUsuario (credenciais,token){
    let usuarioFoto = document.getElementById("foto-usuario")
    let usuarioId = document.getElementById("id-usuario")
    let usuarioNome = document.getElementById("nome-usuario")
    let usuarioPerfil = document.getElementById("perfil-usuario")
    let usuarioEmail = document.getElementById("email-usuario")
    let usuarioDataCadastro = document.getElementById("data-cadastro-usuario")
    let usuarioToken = document.getElementById("token-usuario")

    usuarioFoto.src = credenciais.foto
    usuarioId.innerText = credenciais.id
    usuarioNome.innerText = credenciais.nome
    usuarioPerfil.innerText = credenciais.perfil.descricao
    usuarioEmail.innerText = credenciais.email
    usuarioDataCadastro.innerText = credenciais.dataCadastro
    usuarioToken.innerText = token

}

lerCredenciaisUsuario(credenciaisUsuario,tokenUsuario)