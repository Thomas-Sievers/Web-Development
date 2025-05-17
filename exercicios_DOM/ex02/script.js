let acesses = parseInt(localStorage.getItem("Acesses")) || 0;
acesses++;

localStorage.setItem("acesses", acesses);
document.body.InnerHTML += `Visitas: ${acesses}`;