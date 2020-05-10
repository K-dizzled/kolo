const logo = document.querySelector("#logo");


logo.addEventListener('click', function () {
    sessionStorage.setItem("toggle", 0);
    window.location="main.html";
});