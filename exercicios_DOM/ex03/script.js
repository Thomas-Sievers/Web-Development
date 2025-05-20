if (localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
};

document.getElementById("theme").onclick = () => {
    document.body.classList.toggle("dark");
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "white";
    localStorage.setItem("theme", currentTheme);
}