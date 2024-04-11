const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("light");
});


const hamburger = document.getElementById('hamburger');
const navItems= document.getElementById("navItems");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");
})

AOS.init();
