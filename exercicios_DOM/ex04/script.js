const input = document.getElementById('name');
input.value = sessionStorage.getItem("name") || "";

input.oninput = () => {
    sessionStorage.setItem("name", input.value);
}