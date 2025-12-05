const botones = document.querySelectorAll("button");

botones.forEach(btn => {
    btn.classList.add("btn-anim");

    btn.addEventListener("click", () => {
        btn.classList.add("click-bounce");
        
        setTimeout(() => {
            btn.classList.remove("click-bounce");
        }, 200);
    });
});

const imagenes = document.querySelectorAll(".grid-item img");

imagenes.forEach(img => {
    img.classList.add("img-anim");
});