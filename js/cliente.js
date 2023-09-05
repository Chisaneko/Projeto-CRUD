const url = 'http://localhost:3400/clientes'

//====================================================

let modoEdicao = false
let clientFetchData = []
let tableBody = document.getElementById('tabela-body')

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

function editarCliente(clientId){
    modalGrandeAbrir("Editar Cliente",clientId)
   // modalAvisoAbrir(`Editando o cliente nº ${clientId}`)
}

function excluirCliente(clienteId){

}

// CRUD ==============================================

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
