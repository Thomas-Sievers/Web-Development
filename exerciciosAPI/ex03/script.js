async function listProducts(){
    const res = await fetch('https://682b74a0d29df7a95be37776.mockapi.io/productsAPI/v1/product');
    const products = await res.json();
    const ul = document.getElementById('product-list');
    ul.innerHTML = "";

    products.forEach(product => {
        try{
            const li = document.createElement('li');
            li.innerHTML = `
            <img ${product.image}>
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <button onclick="deleteProduct(${product.id})">Deletar produto</button>
            `;

        ul.appendChild(li);
        }
        catch(error){
            console.log(error);
        }
    });
}

listProducts();

const btnAdd = document.getElementById('save-product');

btnAdd.onclick = async (e) => {
    e.preventDefault();
    const name = document.getElementById('product-name').value.trim();
    const image = document.getElementById('product-image').value.trim();
    const price = document.getElementById('product-price').value.trim();

    try{
        const res = await fetch('https://682b74a0d29df7a95be37776.mockapi.io/productsAPI/v1/product',{
            method: 'POST',
            headers: {'Content-Type': 'aplication/json'},
            body: JSON.stringify({
                name,
                price,
                image
            })
        })
        if(res.status === 201){
            alert('Produto cadastrado com sucesso');
            name.value = '';
            price.value = '';
            image.value = '';
        }
        else{
            alert('Erro ao cadastrar o produto')
        }
    }
    catch(error){
        console.log(error);
    }
}

listProducts();

const deleteProduct = async (product) => {
    try{
        const confirmation = confirm('Você tem certeza que deseja deletar o produto?')
        if(confirmation){
            const res = await fetch(`https://682b74a0d29df7a95be37776.mockapi.io/productsAPI/v1/product/${product}`, {
                method: "DELETE",
            })
            if(res.status === 200){
                alert("Produto deletado com sucesso");
                listProducts();
            }
            else{
                alert("Erro ao deletar o produto");
            }
        }
    }
    catch(error){
        console.log(error);
    }
}