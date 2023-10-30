// GET

axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.log(error);
});


// POST

const data = {
    title: "Titulo",
    content: "Conteudo",
    userId: 1
}

axios.post("https://jsonplaceholder.typicode.com/posts", data)
.then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.log(error);
});

