const url = 'http://localhost:3400/clientes'


function salvarTokenUsuario(token) {
    localStorage.setItem('token', token)
}

function salvarEmailUsuario(usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario))
}

function obterToken(){
    return localStorage.getItem("token")
}

function obterUsuario(){
    return localStorage.getItem("usuario") || "{}"
}

function sairDoSistema(){
    localStorage.removeItem("token")
    localStorage.removeItem("usuario")
    
}

function direcionarTelaLogin(){
    window.open("login.html", "_self")
}

function usuarioEstaLogado(){
    let token = obterToken()
    return !!token
}

function validarUsuarioAutenticado(){
    let logado = usuarioEstaLogado()
    if(window.location.pathname ==  "/login.html"){
        if (logado){
            window.open("cliente.html", "_self")
        }
    } else if(!logado && window.location.pathname == "/cliente.html"){
        direcionarTelaLogin()
    }
}

validarUsuarioAutenticado()