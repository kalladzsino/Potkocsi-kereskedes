// Navbar & Header

fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    let el = document.getElementById("jsHeader");
    if (el) { 
        el.innerHTML = data;

        const mobileMenuButton = document.getElementById("mobile-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");
        const hamburgerIcon = document.getElementById("hamburger-icon");
        const closeIcon = document.getElementById("close-icon");

        if(mobileMenuButton){
          mobileMenuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            hamburgerIcon.classList.toggle("hidden");
            closeIcon.classList.toggle("hidden");
          });
        }
    }
  })
  .catch(error => console.error("Hiba a menü betöltődésekor!", error));

fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    let el = document.getElementById("jsFooter")
    if (el) { el.innerHTML = data };
  })
  .catch(error => console.error("Hiba a lábléc betöltődésekor!", error));


// Kép behúzás

let allatszallito = document.querySelector("#allatszallito");

allatszallito.style.backgroundImage = "url('./img/allatszallito_kicsi.jfif')";
