const navBtn = document.querySelector(".nav__btn");
const navMenu = document.querySelector(".nav__ul");
const navMenuList = document.querySelectorAll(".nav__ul-li");
const removeBtn = document.querySelector(".nav__remove-btn");
const body = document.body;


const animatedList = () => {
    navMenuList.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navListAnimation 0.5s ease forwards ${
        index / 7 + 1
      }s`;
        }
    });
};

navBtn.addEventListener("click", () => {
    body.style.overflowY = "hidden";
    navMenu.classList.add("nav__ul-active");
    animatedList();
});
removeBtn.addEventListener("click", () => {
    body.style.overflowY = "visible";
    navMenu.classList.remove("nav__ul-active");
    animatedList();
});