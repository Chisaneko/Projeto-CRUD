const url = 'http://localhost:3400/clientes'

class Cliente{
    constructor(obj) {
        obj = obj || {}

        this.id = obj.id
        this.nome = obj.nome
        this.cpfOuCnpj = obj.cpfOuCnpj
        this.email = obj.email
        this.telefone = obj.telefone
        this.dataCadastro = obj.dataCadastro
    }
}

//====================================================

let modoEdicao = false
let clientFetchData = []
let tableBody = document.getElementById('tabela-body')
let modalId       = document.getElementById('modalclientid')
let modalEmail    = document.getElementById('modalclientemail') 
let modalNome     = document.getElementById('modalclientnome')
let modalCpf      = document.getElementById('modalclientcpf')  
let modalTelefone = document.getElementById('modalclientphone')

//TABELA =============================================

function updateClientTableRow(clientData){
    tableBody.textContent = ""
    clientData.forEach(cliente => {
        addClientTableRow(cliente)
    })
}

function addClientTableRow(clientes){
    let tr = document.createElement('tr')
    let tdId = document.createElement('td')
    let tdNome = document.createElement('td')
    let tdCpf = document.createElement('td')
    let tdEmail = document.createElement('td')
    let tdTelefone = document.createElement('td')
    let tdData = document.createElement('td')
    let tdBotoes = document.createElement('td')

    tdId.textContent = clientes.id
    tdNome.textContent = clientes.nome
    tdCpf.textContent = clientes.cpfOuCnpj
    tdEmail.textContent = clientes.email
    tdTelefone.textContent = clientes.telefone
    tdData.textContent = clientes.dataCadastro
    tdBotoes.innerHTML = `<button class="botao-tabela" onclick="editarCliente(${clientes.id})">Editar</button> <button class="botao-tabela" onclick="excluirCliente(${clientes.id})">Excluir </button>`

    tr.appendChild(tdId)
    tr.appendChild(tdNome)
    tr.appendChild(tdCpf)
    tr.appendChild(tdEmail)
    tr.appendChild(tdTelefone)
    tr.appendChild(tdData)
    tr.appendChild(tdBotoes)

    tableBody.appendChild(tr)
}


// BOTÕES ============================================

function adcionarCliente(){
    modoEdicao = false
    limparModalCliente()
    modalGrandeAbrir("Adcionar Cliente")

}

function pegarClienteModal(){
    return new Cliente({
        id: modalId.value,
        nome: modalNome.value,
        email: modalEmail.value,
        telefone: modalTelefone.value,
        cpfOuCnpj:modalCpf.value,
    })
}

function salvarCliente(){
    let cliente = pegarClienteModal()
    if (!cliente.email || !cliente.nome || !cliente.cpfOuCnpj || !cliente.telefone){
        modalAvisoAbrir("Todos os campos são obrigatórios")
        return
    }
    if (modoEdicao == true){
        return
    }
    adcionarClienteBackend(cliente)

}
function editarCliente(clientId){
    modoEdicao = true
    modalGrandeAbrir("Editar Cliente")
    let cliente = clientFetchData.find(cliente => cliente.id == clientId)
    atualizarModalCliente(cliente)
}

function excluirCliente(clienteId){

}


function limparModalCliente(){
    modalId.value = ""
    modalEmail.value = ""
    modalNome.value = ""
    modalCpf .value = ""
    modalTelefone.value = ""
}

function atualizarModalCliente(cliente){
    modalId.value = cliente.id
    modalEmail.value = cliente.email
    modalNome.value =  cliente.nome 
    modalCpf.value =  cliente.cpfOuCnpj
    modalTelefone.value = cliente.telefone
}


// CRUD ==============================================

function adcionarClienteBackend(cliente){
    cliente.dataCadastro = new Date().toISOString()

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Aurhorization': "token"
        },
        body: JSON.stringify(cliente)
    })
    .then(response => response.json())
    .then(response => {
        let novoCliente = new Cliente(response)
        clientFetchData.push(novoCliente)
        updateClientTableRow(clientFetchData)
        modalGrandeFechar()
    })
    .catch(error => {
        console.log(error)
    })
}

function obterClientes(){
    fetch(url, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(clientes => {
        clientFetchData = clientes
        updateClientTableRow(clientes)
    })
}

//====================================================
obterClientes()
