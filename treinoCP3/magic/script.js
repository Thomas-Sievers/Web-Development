const form = document.getElementById('card-form');

form.onsubmit = async function (e) {
    e.preventDefault();

    const cardName = document.getElementById('card-input').value.trim();
    const info = document.getElementById('card-info');

    if(!cardName){
        alert("Coloque uma carta válida!")
        return;
    }

    try{
        const res = await fetch(`https://api.magicthegathering.io/v1/cards?name=${encodeURIComponent(cardName)}`)
        const data = await res.json();
        const card = data.cards[0];

        info.innerHTML = `
        <p>Nome: ${card.name}</p>
        <p>Tipo: ${card.type}</p>
        <p>Texto: ${card.text}</p>
        <img src="${card.imageUrl}>
        `
    }
    catch(error){
        console.log(error);
    }
}