# Filtro de Tarjetas

Este proyecto implementa una funcionalidad de búsqueda que filtra tarjetas en función del texto ingresado en un campo de búsqueda. A medida que el usuario escribe, las tarjetas se muestran o se ocultan según si coinciden con la búsqueda.

## Descripción del Código

El código permite al usuario buscar entre un conjunto de tarjetas (`.card`) utilizando un campo de entrada (`input`) con el id `search`. A medida que el usuario escribe, las tarjetas se actualizan en tiempo real para mostrar solo aquellas que contienen el texto ingresado.

### Estructura del Código

1. **Selección de Elementos**:
   - Se obtiene el elemento de búsqueda mediante `getElementById`.
   - Se seleccionan todas las tarjetas usando `querySelectorAll`.

2. **Evento de Teclado**:
   - Se agrega un listener para el evento `keyup` en el documento que verifica si el evento proviene del campo de búsqueda.
   - Si es así, se recorre cada tarjeta para verificar si su texto coincide con el valor de búsqueda.

3. **Filtrado de Tarjetas**:
   - Si el texto de la tarjeta no incluye el texto de búsqueda, se añade la clase `none` para ocultarla.
   - Si coincide, se elimina la clase `none` para mostrarla.

### Uso

1. Asegúrate de tener un HTML con un campo de entrada con el id `search` y elementos con la clase `card`.
2. Incluye este script al final de tu archivo HTML para que se ejecute después de cargar los elementos.
3. Comienza a escribir en el campo de búsqueda para ver cómo se filtran las tarjetas.

### Vista de la Página
![Landing][body.png]

### Ejemplo de HTML

```html
<input type="text" id="search" placeholder="Buscar...">

<div class="card">
    <h3>Título 1</h3>
    <!-- Contenido de la tarjeta -->
</div>
<div class="card">
    <h3>Título 2</h3>
    <!-- Contenido de la tarjeta -->
</div>
