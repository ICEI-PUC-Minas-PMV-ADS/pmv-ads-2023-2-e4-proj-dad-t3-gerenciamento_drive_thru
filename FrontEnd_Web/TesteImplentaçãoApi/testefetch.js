const fetchApi = (value) => {
  const result = fetch(`https://localhost:7128/api/Produtos/${value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });

  return result;
};

fetchApi(1);

// https://rickandmortyapi.com/api/character/${value}
// https://localhost:7128/api/Produtos/${value}
