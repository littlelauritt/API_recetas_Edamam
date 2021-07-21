
// SELECCIONAMOS LOS ELEMENTOS DEL HTML
const main = document.querySelector('main');
const resultadosBusqueda = document.getElementById('resultado-busqueda');

export const renderizarHTML = (recetas) => {
    main.classList.remove('inicial');
    let resultadosDibujados = [];

    recetas.forEach( ( receta ) => {
        resultadosDibujados +=      `<div class="item">
                                        <img src=${(receta.recipe.image) ? (receta.recipe.image) : ('./img/imgerror.jpg')} alt="">
                                        <div class="flex-container">
                                            <h2>${receta.recipe.label}</h2>
                                            <a href="${receta.recipe.url}" target="_blank" class="btn-receta">Ir a la receta</a>
                                        </div>
                                        <p class="datos-receta">Calorías: ${Math.floor(receta.recipe.calories)} kCal</p>
                                        <p class="datos-receta">Tipo de cocina: ${ (receta.recipe.cuisineType) ? (receta.recipe.cuisineType) : ('No hay información')}</p>
                                        <p class="datos-receta">Tipo de comida: ${ (receta.recipe.mealType) ? (receta.recipe.mealType) : ('No hay información')}</p>
                                    </div>`
    });
    resultadosBusqueda.innerHTML = resultadosDibujados;


    


}