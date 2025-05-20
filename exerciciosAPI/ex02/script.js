async function listProducts(){
    const res = await fetch('https://682b74a0d29df7a95be37776.mockapi.io/productsAPI/v1/product');
    const products = await res.json();
    const ul = document.getElementById('product-list');
    ul.innerHTML = "";

    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
        <img src="${product.image}">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        `;
        ul.appendChild(li);
    });
}

listProducts()

 document.getElementById('save-product').onclick = async (e) => {
    e.preventDefault();
    const name = document.getElementById('product-name').value.trim();
    const price = document.getElementById('product-price').value.trim();
    const image = document.getElementById('product-image').value.trim();

    try{
        const res = await fetch('https://682b74a0d29df7a95be37776.mockapi.io/productsAPI/v1/product',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                price,
                image
            })
        })
        if(res.status === 201){
            alert("Produto cadastrado com sucesso!");
            name.value = "";
            price.value = 0;
            image.value = "";
            listProducts();
        }
        else{
            alert("Erro ao cadastrar produto");
        }
    }
    catch(error){
        console.log(error);
    }
}
