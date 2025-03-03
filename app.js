// 1️ Declaramos un array vacío para almacenar los nombres de los amigos
let amigos = [];

// 2️ Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturamos el valor del input
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminamos espacios en blanco extra

    // Validamos que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salimos de la función si no hay nombre
    }

    // Agregamos el nombre al array de amigos
    amigos.push(nombre);

    // Limpiamos el campo de entrada
    input.value = "";

    // Mostramos en consola para verificar que funciona
    console.log("Lista de amigos:", amigos);
}

// 3️ Función para actualizar la lista de amigos en la pantalla
function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista antes de actualizar
    lista.innerHTML = "";

    // Iterar sobre el arreglo amigos y crear elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo al <li>
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}

// 4️ Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return; // Salimos de la función si la lista está vacía
    }

    // Generar un índice aleatorio dentro del rango del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado usando el índice generado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    document.getElementById("resultado").innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉`;
}


