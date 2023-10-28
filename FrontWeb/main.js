// Importar o Axios
const axios = require('axios');
const express = require('express');
const app = express();
const port = 7128;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// Função para realizar uma requisição GET

document.getElementById('get-button').addEventListener('click', fazerRequisicaoGet);

function fazerRequisicaoGet() {
    axios.get('https://localhost:7128/api/produtos')
        .then(response => {

            console.log('Resposta GET:', response.data);
        })
        .catch(error => {
            // Lidar com erros
            console.error('Erro GET:', error);
        });
}

// Função para realizar uma requisição PUT (UPDATE)

document.getElementById('update-button').addEventListener('click', fazerRequisicaoPut);

function fazerRequisicaoPut() {
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const preco = document.getElementById('preco').value;

    const data = {
        nome: nome,
        descricao: descricao,
        preco: preco
    };

    axios.put('https://localhost:7128/api/produtos/', data)
        .then(response => {
 
            console.log('Resposta PUT:', response.data);
        })
        .catch(error => {
            // Lidar com erros
            console.error('Erro PUT:', error);
        });
}

// Função para realizar uma requisição DELETE

document.getElementById('delete-button').addEventListener('click', fazerRequisicaoDelete);

function fazerRequisicaoDelete() {
    axios.delete('https://localhost:7128/api/produtos/')
        .then(response => {

            console.log('Resposta DELETE:', response.data);
        })
        .catch(error => {
            // Lidar com erros
            console.error('Erro DELETE:', error);
        });
}

// Capturar o evento de envio do formulário (POST)
document.getElementById('create-button').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const preco = document.getElementById('preco').value;

    const data = {
        nome: nome,
        descricao: descricao,
        preco: preco
    };

    // Realizar a requisição POST usando Axios
    axios.post('https://localhost:7128/api/produtos', data)
        .then(response => {
 
            console.log('Resposta POST:', response.data);
        })
        .catch(error => {
            // Lidar com erros
            console.error('Erro POST:', error);
        });
});


// Função para preencher o select com os produtos
function carregarProdutos() {
    var select = document.getElementById('floatingSelect');

    produtos.forEach(function (produto) {
        var option = document.createElement('option');
        option.value = produto.id;
        option.textContent = produto.nome;
        select.appendChild(option);
    });
}

// Chame a função para carregar os produtos quando a página carregar
document.addEventListener('DOMContentLoaded', carregarProdutos);