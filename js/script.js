const navBtn = document.querySelector(".nav__btn");
const navMenu = document.querySelector(".nav__ul");
const navMenuList = document.querySelectorAll(".nav__ul-li");
const removeBtn = document.querySelector(".nav__remove-btn");
const body = document.body;
const btnBlue = document.querySelector(".product__buttons-blue");
const btnGreen = document.querySelector(".product__buttons-green");
const btnPurple = document.querySelector(".product__buttons-purple");
const btnGray = document.querySelector(".product__buttons-gray");
const blueImage = document.querySelectorAll(".product__grid-item img");

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

blueImage.forEach(element => {
    btnGreen.addEventListener("click", () => {
        element.classList.remove(
            "product__content-image-blue",
            "product__content-image-purple",
            "product__content-image-gray"
        );
        element.classList.add("product__content-image");
    });
    btnBlue.addEventListener("click", () => {
        element.classList.remove(
            "product__content-image-purple",
            "product__content-image-gray"
        );
        element.classList.add("product__content-image-blue");
    });
    btnPurple.addEventListener("click", () => {
        element.classList.remove(
            "product__content-image-gray",
            "product__content-image-blue"
        );
        element.classList.add("product__content-image-purple");
    });

    btnGray.addEventListener("click", () => {
        element.classList.remove(
            "product__content-image-blue",
            "product__content-image-purple"
        );
        element.classList.add("product__content-image-gray");
    });
});

const validation = () => {
    const form = document.getElementById("form");
    const email = document.getElementById("email").value;
    const text = document.getElementById("text");
    const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is Valid";
        text.style.color = "#44AE6F";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter Valid Email Address!";
        text.style.color = " #c92727";
    }
};