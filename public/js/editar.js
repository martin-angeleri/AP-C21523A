
// Referencia al elemento de formulario html
const formGuardar = document.querySelector("#form-guardar")

const obtenerPublicacion = async (id) => {
    const response = await fetch(`/publicacion/${id}`)
    const data = await response.json()
    return data;
}

document.addEventListener('DOMContentLoaded', async () => {
    const id = formGuardar.dataset.id
    const publicacion = await obtenerPublicacion(id);

    const titulo = document.querySelector('#titulo-post')
    const descripcion = document.querySelector('#detalle-post')
    const url_imagen = document.querySelector('#url-img')
    const fecha = document.querySelector('#fecha')


    titulo.value = publicacion.titulo;
    descripcion.value = publicacion.descripcion;
    url_imagen.value = publicacion.url_imagen;
    fecha.value = publicacion.fecha;


})


formGuardar.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Se capturan los datos del formulario
    const titulo = document.querySelector('#titulo-post').value;
    const descripcion = document.querySelector('#detalle-post').value;
    const url_imagen = document.querySelector('#url-img').value;
    const fecha = document.querySelector('#fecha').value;

    // Enviar al servidor
    const response = await fetch(`/publicacion/${id}`, {
        method: 'put',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ titulo, descripcion, url_imagen, fecha})
    })
    const data = await response.json();

    alert(data.msg);
    location.href = "/"

})