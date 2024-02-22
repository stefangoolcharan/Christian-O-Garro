menu = document.querySelector(".menu");
menu.onclick = function () {
    navBar = document.querySelector(".nav-items");
    navBar.classList.toggle("active");
}


document.addEventListener("click", function (event) {
    if (!menu.contains(event.target)) {
        navBar.classList.remove("active");
    }
});


const inputs = document.querySelectorAll(".contact-input");

inputs.forEach((ipt) => {
    ipt.addEventListener("focus", () => {
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
    });
    ipt.addEventListener("blur", () => {
        if (ipt.value == "") {
            ipt.parentNode.classList.remove("not-empty");
        }
        ipt.parentNode.classList.remove("focus");
    });
});

