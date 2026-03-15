document.addEventListener("DOMContentLoaded", () => {
    fetch("menu.html")
        .then(response => response.text())
        .then(menu => {
            document.getElementById("menu").innerHTML = menu;
        });
});