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
// Elementos Perfil
const btnPerfil = document.getElementById("btn-perfil");
const perfilSection = document.getElementById("perfil-section");

const loginContainer = document.getElementById("login-container");
const signupContainer = document.getElementById("signup-container");

const goSignup = document.getElementById("go-signup");
const goLogin = document.getElementById("go-login");

const volverInicio2 = document.getElementById("volver-inicio2");

// Mostrar perfil
btnPerfil.addEventListener("click", () => {
    inicioSection.classList.add("hidden");
    buscarSection.classList.add("hidden");
    perfilSection.classList.remove("hidden");
});

// Volver
volverInicio2.addEventListener("click", () => {
    perfilSection.classList.add("hidden");
    inicioSection.classList.remove("hidden");
});

// Cambiar entre LOGIN ↔ SIGNUP
goSignup.addEventListener("click", () => {
    loginContainer.classList.add("hidden");
    signupContainer.classList.remove("hidden");
});

goLogin.addEventListener("click", () => {
    signupContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
});

// LOGIN (simulación simple)
document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("login-email").value;
    const pass = document.getElementById("login-password").value;

    if (email === "" || pass === "") {
        alert("Completa todos los campos.");
        return;
    }

    alert("Sesión iniciada como: " + email);
});

// SIGNUP (simulación simple)
document.getElementById("signup-btn").addEventListener("click", () => {
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const pass = document.getElementById("signup-password").value;

    if (name === "" || email === "" || pass === "") {
        alert("Completa todos los campos.");
        return;
    }

    alert("Cuenta creada para: " + name);
});
// GOOGLE LOGIN
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "TU_CLIENT_ID_AQUI",
        callback: handleGoogleLogin
    });

    google.accounts.id.renderButton(
        document.getElementById("google-login"),
        { theme: "outline", size: "large" }
    );
};

function handleGoogleLogin(response) {
    const data = JSON.parse(atob(response.credential.split('.')[1]));
    const nombre = data.name;
    const email = data.email;

    alert("Sesión iniciada con Google:\n" + nombre + "\n" + email);
}
