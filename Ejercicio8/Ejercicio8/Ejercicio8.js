"use strict";
let coleccionPersona = new Set();
let coleccionPersonaMap = new Map();
let sumaEdades = 0;
let edadMedia = 0;
let sumaEdades1 = 0;
let edadMedia1 = 0;
let experienciaAcumulada = 0;
let miPersona;
let boton = document.getElementById("boton").addEventListener("click", mostrarDatos, false);
let boton1 = document.getElementById("boton1").addEventListener("click", MostrarDatosMap, false);
let vaciar1 = document.getElementById("vaciar1").addEventListener("click", VaciarElementosHTMLMap, false);
let btnempleados = document.getElementById("btnempleados").addEventListener("click", MostrarEmpleados, false);
class Persona {
    constructor(nombre, edad) {
        this.nombre = "";
        this.edad = 0;
        this.nombre = nombre;
        this.edad = edad;
    }
}
function mostrarDatos() {
    let textoNombre = document.getElementById("nombre").value;
    let textoEdad = Number(document.getElementById("edad").value);
    miPersona = new Persona(textoNombre, textoEdad);
    coleccionPersona.add(miPersona);
    sumaEdades += textoEdad;
    edadMedia = sumaEdades / coleccionPersona.size;
    let elementoContenido = `<p>Edad Media: ${edadMedia}</p>`;
    document.getElementById("p").innerHTML = elementoContenido;
}
class empleado extends Persona {
    constructor(nombre, edad, experiencia) {
        super(nombre, edad);
        this.experiencia = 0;
        this.experiencia = experiencia;
    }
}
let miEmpleado;
function MostrarDatosMap() {
    let textoNombre1 = document.getElementById("nombre1").value;
    let textoEdad1 = Number(document.getElementById("edad1").value);
    let textoExperiencia = Number(document.getElementById("experiencia1").value);
    let textoId = document.getElementById("id1").value;
    miEmpleado = new empleado(textoNombre1, textoEdad1, textoExperiencia);
    if (coleccionPersonaMap.has(textoId)) {
        alert("���ERRORRRRRR!!!");
    }
    else {
        coleccionPersonaMap.set(textoId, miEmpleado);
        experienciaAcumulada += textoExperiencia;
        sumaEdades1 += textoEdad1;
        edadMedia1 = sumaEdades1 / coleccionPersonaMap.size;
        let elementoContenido1 = `<p>Edad Media Empleados: ${edadMedia1.toFixed(2)} Experiencia Acumulada: ${experienciaAcumulada}</p>`;
        document.getElementById("p1").innerHTML = elementoContenido1;
    }
}
function MostrarEmpleados() {
    let listaEmpleadosHTML = "<ul>";
    coleccionPersonaMap.forEach((miEmpleado, textoId) => {
        listaEmpleadosHTML += `<li>${textoId}: de nombre ${miEmpleado.nombre}, Edad: ${miEmpleado.edad}, Experiencia: ${miEmpleado.experiencia}</li>`;
    });
    listaEmpleadosHTML += '</ul>';
    document.getElementById("listaEmpleados").innerHTML = listaEmpleadosHTML;
}
function VaciarElementosHTMLMap() {
    document.getElementById("nombre1").value = "";
    document.getElementById("edad1").value = "";
    document.getElementById("experiencia1").value = "";
    document.getElementById("id1").value = "";
}
//# sourceMappingURL=Ejercicio8.js.map