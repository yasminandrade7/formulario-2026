'Use strict'

//const teste = 'https://viacep.com.br/ws/18135300/json/'

//console.log(teste)

async function preencherFormulario ({target}) {
    const cep = target.value
    const url = `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(url)
    const data = await response.json()

    document.getElementById('endereco').value = data.logradouro
    document.getElementById('bairro').value = data.bairro
    document.getElementById('cidade').value = data.localidade
    document.getElementById('estado').value = data.estado

    console.log(data)


}

document.getElementById('cep').addEventListener('focusout', preencherFormulario)
