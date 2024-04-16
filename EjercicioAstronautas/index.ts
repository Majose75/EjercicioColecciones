
let misAstronautas = new Set<string>();
let map = new Map<string, number>();
let contadorDuplicados = 0;
let boton = (<HTMLInputElement>document.getElementById("boton")).addEventListener("click", mostrar, false);
function mostrar() {
    let astronautaNuevo = (<HTMLInputElement>document.getElementById("nombre")).value;
    
    if (misAstronautas.has(astronautaNuevo)) {
        //alert("Nombre de Astronauta duplicado: " + astronautaNuevo);
        map.set(astronautaNuevo, Number(map.get(astronautaNuevo))+1);
        contadorDuplicados++;
        
    } else {
        misAstronautas.add(astronautaNuevo); 
        map.set(astronautaNuevo, 1);
       
        //let elementoLista = document.createElement("li");
        //elementoLista.textContent = astronautaNuevo + map.get(astronautaNuevo);
        //(<HTMLElement>document.getElementById("lista")).appendChild(elementoLista);
     
    }
    (<HTMLElement>document.getElementById("lista")).innerHTML = ""
    map.forEach(MostrarNombres);
    function MostrarNombres(valor:number,elemento:string,map:any) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = elemento + " " + valor + " veces";
        (<HTMLElement>document.getElementById("lista")).appendChild(elementoLista);
    }
    let porcentaje = (contadorDuplicados * 100) / (contadorDuplicados + misAstronautas.size);
    let elementoContenido = `<p>Duplicados: ${contadorDuplicados}</p>
                            <p>Nombres Introducidos: ${misAstronautas.size}</p>
                            <p>% Porcentaje  ${porcentaje}</p>`;

    (<HTMLElement>document.getElementById("p")).innerHTML = elementoContenido;



  

    
}