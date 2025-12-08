const btnInicio = document.getElementById("btn-inicio");
const btnBuscar = document.getElementById("btn-buscar");
const inicioSection = document.getElementById("inicio-section");
const buscarSection = document.getElementById("buscar-section");
const volverInicio = document.getElementById("volver-inicio");
const searchBar = document.getElementById("searchBar");
const resultsGrid = document.querySelector(".results-grid");
const noResults = document.getElementById("no-results");
const items = document.querySelectorAll(".item");

btnInicio.addEventListener("click", () => {
    inicioSection.classList.remove("hidden");
    buscarSection.classList.add("hidden");
    searchBar.value = "";
});

btnBuscar.addEventListener("click", () => {
    inicioSection.classList.add("hidden");
    buscarSection.classList.remove("hidden");
    populateResults(); 
});

volverInicio.addEventListener("click", () => {
    inicioSection.classList.remove("hidden");
    buscarSection.classList.add("hidden");
    searchBar.value = "";
});

function populateResults() {
    resultsGrid.innerHTML = "";
    items.forEach(item => {
        const clone = item.cloneNode(true);
        clone.addEventListener("click", () => {
            const link = clone.getAttribute("data-link");
            if (link) window.open(link, "_blank");
        });
        resultsGrid.appendChild(clone);
    });
    noResults.classList.add("hidden");
}

searchBar.addEventListener("keyup", () => {
    const filter = searchBar.value.toLowerCase();
    let coincidencias = 0;
    resultsGrid.innerHTML = "";

    items.forEach(item => {
        const name = item.getAttribute("data-name").toLowerCase();
        if (name.includes(filter)) {
            coincidencias++;
            const clone = item.cloneNode(true);
            clone.addEventListener("click", () => {
                const link = clone.getAttribute("data-link");
                if (link) window.open(link, "_blank");
            });
            resultsGrid.appendChild(clone);
        }
    });

    if (coincidencias === 0) {
        noResults.classList.remove("hidden");
    } else {
        noResults.classList.add("hidden");
    }
});

items.forEach(item => {
    item.addEventListener("click", () => {
        const link = item.getAttribute("data-link");
        if (link) window.open(link, "_blank");
    });
});
