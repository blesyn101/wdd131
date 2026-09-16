const currentyear = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified");
const today = new Date();

currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;


const menubutton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menubutton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menubutton.classList.toggle("open");
});