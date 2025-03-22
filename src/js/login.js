// Capturar el formulario
const form = document.getElementById("login-form");

// Procesar los datos
form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log("Usuario:", username);
    console.log("Contraseña:", password);

    fetch("../js/database.json")
        .then(response => {
            if (!response.ok) {  
                throw new Error("No se puede cargar el archivo JSON");
            }
            return response.json();  
        })
        .then(usuarios => {
            let usuarioValido = usuarios.find(user =>
                 user.username === username && user.password === password);

            if (usuarioValido) {
                document.getElementById("message").textContent = "Inicio de sesión exitoso.";
                localStorage.setItem("usuario", username);
                setTimeout(() => {
                    window.location.href = "../pages/pages.html"; 
                }, 1000);
            } else {
                document.getElementById("message").textContent = "Usuario o contraseña incorrectos.";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("message").textContent = "Error al cargar los datos.";
        });
});
