const btn = document.querySelector('#cadastrar');

btn.addEventListener('click', () => {
    //capturar os dados do formulario
    const produto = getDadosForm();

    //enviar os dados para a api
    enviarDadosAPI(produto);
});

function getDadosForm () {
    const inputNome = document.querySelector('#name');
    const inputPreco = document.querySelector('#preco');
    const inputDescricao = document.querySelector('#descricao');
    const inputImg = document.querySelector('#imagem');

    if (inputNome.value === null || inputPreco === null || inputDescricao === null || inputImg === null) {

        console.log('Campos Vazios!');

        return 
    }

    const produto = {
        nome: inputNome.value,
        preco: inputPreco.value,
        descricao: inputDescricao.value,
        imagem: inputImg.value
    };

    return produto;
};

async function enviarDadosAPI (produto) {

    try {
        const resposta = await fetch('https://localhost:7128/api/Produtos', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(produto)
        })

        if (resposta.status === 201) {
            limparCampos();
            window.location.href = 'produtos.html';
        } else {
            console.log('Erro ao adicionar produto')
        }
    } catch (erro) {
        console.error(erro);
    }
}

function limparCampos() {
    document.querySelector('#name').value = '',
    document.querySelector('#preco').value = '',
    document.querySelector('#descricao').value = '',
    document.querySelector('#imagem').value = ''
};