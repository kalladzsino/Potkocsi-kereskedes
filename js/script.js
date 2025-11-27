// Navbar & Header


fetch("navbar.html") 
.then(response => response.text()) 
.then(data => {
let el = document.getElementById("jsHeader")
if(el){el.innerHTML = data};
})
.catch(error => console.error("Hiba a menü betöltődésekor!", error));


fetch("footer.html") 
.then(response => response.text()) 
.then(data => {
let el = document.getElementById("jsFooter")
if(el){el.innerHTML = data};
})
.catch(error => console.error("Hiba a lábléc betöltődésekor!", error));

// Kép behúzás

let allatszallito = document.querySelector("#allatszallito");

allatszallito.style.backgroundImage = "url('./img/allatszallito_kicsi.jfif')";