// IMPORTAMOS LAS FUNCIONES
import { conexionAPI } from './http-provider';
import { renderizarHTML } from './render-html';
// ELEMENTOS DEL DOM
const input = document.getElementById('input');
const paginacionHTML = document.getElementById('paginacion');
const pagina = document.getElementById('pagina');

// VARIABLES PARA LA LOGICA
let numeroPaginas;
const elementosPorPagina = 10;



export const paginacion = async (paginaActual) => {
    if (paginaActual < 1 || paginaActual > numeroPaginas){
        return
    }
    let from = (paginaActual * elementosPorPagina) - elementosPorPagina;
    let to = from + elementosPorPagina;

    const datosApi = await conexionAPI(input.value, from, to);
    numeroPaginas = Math.ceil (datosApi.count / elementosPorPagina);
    // A la API solo le dejo mostrar 100 resultados
    (numeroPaginas > 10) ? (numeroPaginas = 10) : (numeroPaginas);
    renderizarHTML(datosApi.hits);
    paginacionHTML.classList.remove('hidden');
    pagina.innerHTML = `Página ${paginaActual} de ${numeroPaginas}`;

    return numeroPaginas;    
}


   