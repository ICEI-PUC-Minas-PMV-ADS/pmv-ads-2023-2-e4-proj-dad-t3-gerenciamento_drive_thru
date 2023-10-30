const getProducts = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:7128/api/Produtos`)
        .then(({ data: response }) => {
          resolve(response?.data);
        })
        .catch(reject);
    });

    // return [
    //     {
    //         id:1,
    //         nome: "comida"
    //     },
    //     {
    //         id:2,
    //         nome: "bebida"
    //     },
    //     {
    //         id:3,
    //         nome: "pizza"
    //     }
    // ]
  };
  