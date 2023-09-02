let modalAviso = document.getElementById('modal-aviso')
let modalAvisoMesagem = document.getElementById('modal-aviso-mensagem')
let modalBotaoFechar = document.getElementById('modal-aviso-botao-fechar')

modalBotaoFechar.addEventListener('click', () => {
    modalAvisoFechar()
})

function modalAvisoAbrir(mensagem){
    modalAvisoMesagem.textContent = mensagem
    modalAviso.style.display = "block"
}

function modalAvisoFechar(){
    modalAviso.style.display = "none"
    modalAvisoMesagem.textContent = ""
}
