//Configurando CORS e Axios
const express = require('express');
const app = express();

app.listen(7128, () => console.log('Servidor rodando'));

app.use(express.json());
app.use(cors());

//Requisição Get 
get("https://localhost:7128/api/Produtos")
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });

//Requisição Post
post("https://localhost:7128/api/Produtos", data)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
