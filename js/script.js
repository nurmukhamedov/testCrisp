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

function change1() {
    document.getElementById('picture1').src = 'image/product1.svg';
    document.getElementById('picture2').src = 'image/product2.svg';
    document.getElementById('picture3').src = 'image/product3.svg';
    document.getElementById('picture4').src = 'image/product3.svg';
    document.getElementById('picture5').src = 'image/product1.svg';
}

function change2() {
    document.getElementById('picture1').src = 'image/product1-blue.svg';
    document.getElementById('picture2').src = 'image/product2-blue.svg';
    document.getElementById('picture3').src = 'image/product3-blue.svg';
    document.getElementById('picture4').src = 'image/product3-blue.svg';
    document.getElementById('picture5').src = 'image/product1-blue.svg';

}

function change3() {
    document.getElementById('picture1').src = 'image/product1-purple.svg';
    document.getElementById('picture2').src = 'image/product2-purple.svg';
    document.getElementById('picture3').src = 'image/product3-purple.svg';
    document.getElementById('picture4').src = 'image/product3-purple.svg';
    document.getElementById('picture5').src = 'image/product1-purple.svg';
}

function change4() {
    document.getElementById('picture1').src = 'image/product1-gray.svg';
    document.getElementById('picture2').src = 'image/product2-gray.svg';
    document.getElementById('picture3').src = 'image/product3-gray.svg';
    document.getElementById('picture4').src = 'image/product3-gray.svg';
    document.getElementById('picture5').src = 'image/product1-gray.svg';
}