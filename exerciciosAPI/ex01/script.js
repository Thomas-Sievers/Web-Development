async function listProducts() {
    const res = await fetch('https://682b74a0d29df7a95be37776.mockapi.io/productsAPI/v1/product');
    const products = await res.json();
    const ul = document.getElementById('product-list');
    ul.innerHTML = "";

    products.forEach (product => {
        const li = document.createElement('li');
        li.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        `;

        ul.appendChild(li);
    });
}

listProducts();