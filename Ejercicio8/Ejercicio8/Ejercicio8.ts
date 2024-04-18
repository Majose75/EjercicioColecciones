let coleccionPersona: Set<Persona> = new Set<Persona>();
let coleccionPersonaMap: Map<string, empleado> = new Map<string, empleado>();

let sumaEdades = 0;
let edadMedia = 0;
let sumaEdades1 = 0;
let edadMedia1 = 0;
let experienciaAcumulada = 0;
let miPersona: Persona;

let boton=(<HTMLInputElement>document.getElementById("boton")).addEventListener("click", mostrarDatos, false);
let boton1 = (<HTMLInputElement>document.getElementById("boton1")).addEventListener("click", MostrarDatosMap, false);
let vaciar1 = (<HTMLInputElement>document.getElementById("vaciar1")).addEventListener("click", VaciarElementosHTMLMap, false);
let btnempleados = (<HTMLInputElement>document.getElementById("btnempleados")).addEventListener("click", MostrarEmpleados, false);

class Persona {
    nombre: string = "";
    edad: number = 0;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

function mostrarDatos() {
    let textoNombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    let textoEdad = Number((<HTMLInputElement>document.getElementById("edad")).value);
    
    miPersona = new Persona(textoNombre, textoEdad);
    coleccionPersona.add(miPersona);
    sumaEdades += textoEdad;
    edadMedia = sumaEdades / coleccionPersona.size;
    let elementoContenido = `<p>Edad Media: ${edadMedia}</p>`;
    (<HTMLElement>document.getElementById("p")).innerHTML = elementoContenido;

}


class empleado extends Persona {
    experiencia: number=0;
    constructor(nombre:string,edad:number,experiencia:number) {
        super(nombre, edad);
        this.experiencia = experiencia;
    }
}

let miEmpleado: empleado;

function MostrarDatosMap() {
    
    let textoNombre1 = (<HTMLInputElement>document.getElementById("nombre1")).value;
    let textoEdad1 = Number((<HTMLInputElement>document.getElementById("edad1")).value);
    let textoExperiencia = Number((<HTMLInputElement>document.getElementById("experiencia1")).value);
    let textoId = (<HTMLInputElement>document.getElementById("id1")).value;

    miEmpleado = new empleado(textoNombre1, textoEdad1, textoExperiencia);

    if (coleccionPersonaMap.has(textoId)) {
        alert("¡¡¡ERRORRRRRR!!!");
    } else {
        coleccionPersonaMap.set(textoId, miEmpleado);
        experienciaAcumulada += textoExperiencia;
        sumaEdades1 += textoEdad1;
        edadMedia1 = sumaEdades1 / coleccionPersonaMap.size;
        let elementoContenido1 = `<p>Edad Media Empleados: ${edadMedia1.toFixed(2) } Experiencia Acumulada: ${experienciaAcumulada}</p>`;
        (<HTMLElement>document.getElementById("p1")).innerHTML = elementoContenido1;
    }
 
}

function MostrarEmpleados() {
    let listaEmpleadosHTML = "<ul>";
    coleccionPersonaMap.forEach((miEmpleado, textoId) => {
        listaEmpleadosHTML += `<li>${textoId}: cuyo nombre es ${miEmpleado.nombre}, con edad: ${miEmpleado.edad} y experiencia de: ${miEmpleado.experiencia}</li>`;
    });
    listaEmpleadosHTML += '</ul>';
    document.getElementById("listaEmpleados")!.innerHTML = listaEmpleadosHTML;

}


function VaciarElementosHTMLMap() {

   (<HTMLInputElement>document.getElementById("nombre1")).value="";
    (<HTMLInputElement>document.getElementById("edad1")).value="";
    (<HTMLInputElement>document.getElementById("experiencia1")).value="";
    (<HTMLInputElement>document.getElementById("id1")).value="";
}