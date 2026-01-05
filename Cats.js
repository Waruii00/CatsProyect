document.addEventListener("DOMContentLoaded",
         () => {
            const menuToggle = document.getElementById("MenuToggle")
            const navLinks = document.getElementById("NavLinks")
            menuToggle.addEventListener("click", () => {
                navLinks.classList.toggle("show")
            })
         }
        )