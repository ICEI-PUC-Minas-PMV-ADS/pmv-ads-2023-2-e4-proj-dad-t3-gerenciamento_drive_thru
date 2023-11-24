//GETBYID

// GET

axios.get("https://localhost:7128/api/produtos").then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.log(error);
});


// POST

const data = {
    nome: "Xburguer",
    preco: 12.99,
    descricao: "pao, carne e queijo",
    tipo: 0
}

axios.post("https://localhost:7128/api/produtos", data)
.then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.log(error);
});

//UPDATE

//DELETE