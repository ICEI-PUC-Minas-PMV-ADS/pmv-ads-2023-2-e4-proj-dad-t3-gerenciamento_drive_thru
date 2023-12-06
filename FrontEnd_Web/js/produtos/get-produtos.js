const listarProdutos = document.querySelector('#produtos');

async function consultaProdutos () {
    const retorno = await fetch('https://localhost:7128/api/Produtos');
    const produtos = retorno.json();
    preencheLista(produtos);
};

function preencheLista (produtos) {
    produtos.forEach(produto => {
        const novoProdutoHTML = `
        <div id="produtos" class="form-floating">
        <select id="selectProduct" class="form-select" id="floatingSelect" aria-label="Floating label select example">
        ${produto.nome}</select>
        <label for="floatingSelect">Produtos</label>
      </div>
      `
        
      listarProdutos.innerHTML = listarProdutos.innerHTML + novoProdutoHTML
    });
};

consultaProdutos();