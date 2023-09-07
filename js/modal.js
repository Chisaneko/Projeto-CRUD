let modalAviso = document.getElementById('modal-aviso')
let modalAvisoMensagem = document.getElementById('modal-aviso-mensagem')
let modalAvisoBotaoFechar = document.getElementById('modal-aviso-fechar')
let modalGrande = document.getElementById('modal-grande')
let modalGrandeTitulo = document.getElementById('modal-grande-titulo')
let modalGrandeMensagem = document.getElementById('modal-grande-mensagem')
let modalGrandeBotaoFechar = document.getElementById('modal-grande-fechar')

modalAvisoBotaoFechar.addEventListener('click', () => {
    modalAvisoFechar()
})

modalGrandeBotaoFechar.addEventListener('click', () => {
    modalGrandeFechar()
    
})


function modalAvisoAbrir(mensagem){
    modalAvisoMensagem.textContent = mensagem
    modalAviso.style.display = "block"
}

function modalGrandeAbrir(titulo){
    modalGrandeTitulo.textContent = titulo
    modalGrande.style.display = "block"
}

function modalGrandeFechar(){
    modoEdicao = false
    modalGrande.style.display = "none"
}

function modalAvisoFechar(){
    modalAviso.style.display = "none"
}
