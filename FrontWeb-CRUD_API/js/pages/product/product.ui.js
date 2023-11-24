const loadSelecData = async () => {
    const todos = await getProducts();
    let selectContext = "";
    todos.forEach((product, index) => {
      selectContext += `      
      <option value="${product.id}">${product.nome}</option>
      `;
    });

    $("#selectProduct").empty();
    $("#selectProduct").append(selectContext);
  };