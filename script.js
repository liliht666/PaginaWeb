const API_KEY = "xyqlVVeR86yygyGuvDvVYbGIux9LXPj6wF8oHx8C5kNP3EqLLyPdtrjo";
const API_URL = "https://api.pexels.com/v1/search";

// Listas base para géneros y artistas
const generos = [
    "Impresionismo", "Cubismo", "Arte Digital", "Surrealismo",
    "Realismo", "Barroco", "Futurismo", "Abstracto",
    "Romanticismo", "Gótico", "Renacimiento", "Expresionismo"
];

const artistas = [
    "Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Salvador Dalí",
    "Frida Kahlo", "Rembrandt", "Leonardo da Vinci", "Gustav Klimt"
];

// Funciones de carga
function cargarGeneros() {
    const cont = document.getElementById("grid-generos");
    cont.innerHTML = "";

    generos.slice(0, 35).forEach(nombre => {
        solicitarImagen(nombre, url => {
            cont.innerHTML += `
                <div class="item">
                    <img src="${url}">
                    <p class="label">${nombre}</p>
                </div>
            `;
        });
    });
}

function cargarArtistas() {
    const cont = document.getElementById("grid-artistas");
    cont.innerHTML = "";

    artistas.slice(0, 35).forEach(nombre => {
        solicitarImagen(nombre, url => {
            cont.innerHTML += `
                <div class="item">
                    <img src="${url}">
                    <p class="label">${nombre}</p>
                </div>
            `;
        });
    });
}

// Solicitar imágenes desde Pexels
function solicitarImagen(termino, callback) {
    fetch(`${API_URL}?query=${encodeURIComponent(termino)}&per_page=1`, {
        headers: { Authorization: API_KEY }
    })
    .then(r => r.json())
    .then(data => {
        if (data.photos.length > 0) {
            callback(data.photos[0].src.medium);
        } else {
            callback("img/no-disponible.jpg");
        }
    });
}

// Modal de Login/Signup
function mostrarLogin() {
    document.getElementById("auth-modal").style.display = 'flex';
    document.getElementById("signup-form").style.display = 'none';
    document.getElementById("login-form").style.display = 'block';
}

document.getElementById("close-modal").onclick = () => {
    document.getElementById("auth-modal").style.display = 'none';
};

// Login con Google
function loginWithGoogle() {
    gapi.auth2.getAuthInstance().signIn().then((googleUser) => {
        const profile = googleUser.getBasicProfile();
        alert('Bienvenido, ' + profile.getName());
    });
}

// Lógica de Login y Signup
function signup() {
    const firstname = document.getElementById("signup-firstname").value;
    const lastname = document.getElementById("signup-lastname").value;
    const email = document.getElementById("signup-email").value;
    const birthyear = document.getElementById("signup-birthyear").value;
    const password = document.getElementById("signup-password").value;

    alert("Registro exitoso!");
}

function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    alert("Bienvenido de nuevo!");
}

function mostrarSignup() {
    document.getElementById("login-form").style.display = 'none';
    document.getElementById("signup-form").style.display = 'block';
}

document.addEventListener("DOMContentLoaded", () => {
    cargarGeneros();
    cargarArtistas();
});
 