let visitas = parseInt(localStorage.getItem("visitas")) || 0;
visitas++;
localStorage.setItem("visitas", visitas);
document.body.innerHTML += `
Visitas: ${visitas}

`;