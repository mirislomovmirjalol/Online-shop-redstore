var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px"

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}

var ProcudtImg = document.getElementById("ProcudtImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function () {
    ProcudtImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function () {
    ProcudtImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function () {
    ProcudtImg.src = SmallImg[2].src
}
SmallImg[3].onclick = function () {
    ProcudtImg.src = SmallImg[3].src
}

//js for toggle form

var Indicator = document.getElementById("Indicator");

function register() {
    document.getElementById("RegForm").style.transform = "translatex(0px)";
    document.getElementById("LoginForm").style.transform = "translatex(0px)";
    document.getElementById("Indicator").style.transform = "translatex(150px)";
}

function login() {
    document.getElementById("RegForm").style.transform = "translatex(300px)";
    document.getElementById("LoginForm").style.transform = "translatex(300px)";
    document.getElementById("Indicator").style.transform = "translatex(50px)";
}
