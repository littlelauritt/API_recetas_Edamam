// IMPORTAMOS EL CSS
import './css/style.css';

// IMPORTAMOS LAS FUNCIONES
import { paginacion } from './js/paginacion';

//ELEMENTOS DEL DOM
const form = document.querySelector('form');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnStart = document.getElementById('btn-start');
const btnEnd = document.getElementById('btn-end');

// VARIABLES PARA LA PAGINACION
let paginaActual = 1;
let totalPaginas;


// EVENTOS
form.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    totalPaginas = await paginacion(paginaActual);
    console.log(totalPaginas);
})
btnNext.addEventListener('click', () => {
    // Deshabilitamos el boton para que el usuario no haga click mas de una vez
    btnNext.disabled = true;
    // Cuando avanzamos página queremos sumar una página más a paginaActual
    paginaActual++;
    paginacion(paginaActual);
    btnNext.disabled = false;
})
btnPrev.addEventListener('click', () => {
    // Deshabilitamos el boton para que el usuario no haga click mas de una vez
    btnPrev.disabled = true;
    // Cuando retrocedemos página queremos restar una página a paginaActual
    paginaActual--;
    paginacion(paginaActual);
    btnPrev.disabled = false;
})

btnStart.addEventListener('click', () => {
    btnStart.disabled = true;
    paginaActual = 1;
    paginacion(paginaActual);
    btnStart.disabled = false;
})

btnEnd.addEventListener('click', () => {
    btnEnd.disabled = true;
    paginaActual = totalPaginas;
    paginacion(paginaActual);
    btnEnd.disabled = false;
})