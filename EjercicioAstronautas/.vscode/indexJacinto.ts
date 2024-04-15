
let Saco:Set<string> = new Set<string>();
let Diccionario: Map<string, number> = new Map<string, number>();


document.getElementById("boton").addEventListener("click", dalotodo, false);
//document.getElementById("boton").addEventListener("click", function () { alert("hellooooo"); });
//document.getElementById("boton").addEventListener("click", () => alert("hellooooo"));
function dalotodo() {
    let texto=
}
function mostrar1() {
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
        elementoLista.textContent = elemento + valor;
        (<HTMLElement>document.getElementById("lista")).appendChild(elementoLista);

    

    }
     let porcentaje = (contadorDuplicados * 100) / (contadorDuplicados + misAstronautas.size);
    let elementoContenido = `<p>Duplicados: ${contadorDuplicados}</p>
                            <p>Nombres Introducidos: ${misAstronautas.size}</p>
                            <p>%  ${porcentaje}</p>`;

    (<HTMLElement>document.getElementById("p")).innerHTML = elementoContenido;

    
  

    
}