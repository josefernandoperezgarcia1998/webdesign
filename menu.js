const menuIcon = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const cruz = document.getElementById('#icronCross');

menuIcon.addEventListener("click", () => {
    console.log("burger"+navbar.classList.toggle("change"));
});


