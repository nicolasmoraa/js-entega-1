// Declaración de variables, constantes y arrays
const tareas = [];
let opcion;

// Función para agregar una tarea
function agregarTarea() {
    const nuevaTarea = prompt("Ingresa la nueva tarea:");
    if (nuevaTarea) {
        tareas.push({ nombre: nuevaTarea, completada: false });
        alert("Tarea agregada con éxito.");
        actualizarListaTareas();
    } else {
        alert("No se ingresó ninguna tarea.");
    }
}

// Función para marcar una tarea como completada
function completarTarea() {
    if (tareas.length === 0) {
        alert("No hay tareas para completar.");
        return;
    }

    let listaTareas = "Selecciona una tarea para marcar como completada:\n";
    tareas.forEach((tarea, index) => {
        listaTareas += `${index + 1}. ${tarea.nombre} - ${tarea.completada ? "Completada" : "Pendiente"}\n`;
    });

    const seleccion = prompt(listaTareas);
    const indice = parseInt(seleccion) - 1;

    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
        alert(`Tarea "${tareas[indice].nombre}" marcada como completada.`);
        actualizarListaTareas();
    } else {
        alert("Selección inválida.");
    }
}

// Función para mostrar la lista de tareas
function mostrarTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas para mostrar.");
        return;
    }

    let listaTareas = "Lista de tareas:\n";
    tareas.forEach((tarea, index) => {
        listaTareas += `${index + 1}. ${tarea.nombre} - ${tarea.completada ? "Completada" : "Pendiente"}\n`;
    });

    alert(listaTareas);
}

// Función para actualizar la lista de tareas en el DOM
function actualizarListaTareas() {
    const listaTareas = document.getElementById("tareas-list");
    listaTareas.innerHTML = "";

    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.textContent = `${tarea.nombre} - ${tarea.completada ? "Completada" : "Pendiente"}`;
        if (tarea.completada) {
            li.classList.add("completada");
        }
        listaTareas.appendChild(li);
    });
}

// Ciclo principal del simulador
do {
    opcion = prompt(`Selecciona una opción:
    1. Agregar tarea
    2. Completar tarea
    3. Mostrar tareas
    4. Salir`);

    switch (opcion) {
        case "1":
            agregarTarea();
            break;
        case "2":
            completarTarea();
            break;
        case "3":
            mostrarTareas();
            break;
        case "4":
            alert("Saliendo del simulador...");
            break;
        default:
            alert("Opción inválida. Intenta de nuevo.");
    }
} while (opcion !== "4");