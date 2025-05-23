let annotations = JSON.parse(localStorage.getItem("annotations")) || [];

function renderAnnotations(){
    const ul = document.getElementById("annotations-list");
    ul.innerHTML = "";

    annotations.forEach((annotation, i) => {
        const li = document.createElement("li");
        li.innerHTML = `
        ${annotation.name} 
        ${annotation.date} 
        <button onclick='deleteAnnotation(${i})'>Excluir</button>`;
        ul.appendChild(li);
    })
}

renderAnnotations();

document.getElementById('form-annotations').onsubmit = function (e){
    e.preventDefault();
    const input = document.getElementById('input-annotation');
    annotations.push({
        name: input.value,
        date: new Date().toLocaleString('pt-BR', {
            day:'2-digit',
            month:'2-digit',
            year: 'numeric',
            hour:'2-digit',
            minute: '2-digit',
            hour12: false
        })
    });
    localStorage.setItem("annotations", JSON.stringify(annotations));
    input.value = "";

    renderAnnotations();
}

function deleteAnnotation(i){
    annotations.splice(i, 1);
    localStorage.setItem("annotations", JSON.stringify(annotations));
    renderAnnotations();
}

function deleteAll(){
    const confirmation = confirm("Tem certeza que deseja deletar tudo?")
    if(confirmation){
        annotations = [];
        localStorage.clear();
        renderAnnotations();
    }
}