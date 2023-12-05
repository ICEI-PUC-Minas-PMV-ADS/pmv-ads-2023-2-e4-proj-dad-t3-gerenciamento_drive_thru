

const url = "https://localhost:7128/api/Produtos/";

async function getProdutos() {
  let data = await fetch(url);
  let produto = await data.json();

  alert(produto[2]);
}
alert("teste");
getProdutos();
