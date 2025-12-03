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


// Rendelés ellenőrzés
  let emailInput = document.getElementById("email");
  let nev = document.getElementById("email");
  let gomb = document.getElementById("kiberlem");
  let uzenet = document.getElementById("uzenet");
  let tel = document.getElementById("telefon");
  let potkocsi_tipus = document.getElementById("potkocsi_tipus")
  let igaz = true
    if (emailInput && tel && potkocsi_tipus && nev && gomb && uzenet)
        {
            igaz = true;
        }
    else{
            igaz = false;
        };
        
      if (igaz = true) {
        gomb.disabled = false;
      } 
      else {
        gomb.disabled = true;
        uzenet.textContent = "Nem minden adatot töltött ki!";
        uzenet.style.color = "red";
      } 
     

    gomb.addEventListener("click", () => {
      alert("Köszönjük rendelését!");
      gomb.disabled = true;
  });

