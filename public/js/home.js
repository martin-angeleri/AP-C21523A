const obtenerPublicaciones = async () => {
    const response = await fetch('/publicaciones')
    const data = await response.json()
    return data;
}

const mostrarPublicaciones = (publicaciones, elementoHtml) => {

    let secciones = "";

    // Método para recorrer los registros
    publicaciones.forEach(publicacion => {
        secciones += `
            <section class="d-flex gap-2">

            <div class="card mb-3" style="max-width: 640px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${publicacion.url_imagen}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${publicacion.titulo}</h5>
                            <p class="card-text">${publicacion.descripcion}</p>      
                            <p class="text-center pt-2">${publicacion.fecha}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <a href="./admin/${publicacion.id}" class="btn btn-light">Editar</a>
                            <button type="button" class="btn btn-danger" onclick="setIdBorrar(${publicacion.id})"
                                data-bs-toggle="modal" data-bs-target="#modal">Eliminar</button> 
                        </div>
                    </div>
                </div>
            </div>

            </section>
        `
    })
    secciones += `
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Eliminar publicación?</h1>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="btnCancelar()">Cancelar</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="btnBorrar()">Si</button>
        </div>
      </div>
    </div>
  </div>
    
    
    `

    // Se crea la lista
    elementoHtml.innerHTML = secciones;

}



document.addEventListener('DOMContentLoaded', () => {
    initPublicaciones();

})

let idBorrar;

function btnCancelar() {
    idBorrar = null;
}

function setIdBorrar(id) {
    idBorrar = id;
}

async function initPublicaciones() {
    const publicaciones = await obtenerPublicaciones()


    // Modificar el DOM para mostrar las publicaciones
    const main = document.querySelector('#lista-publicaciones')
    mostrarPublicaciones(publicaciones, main)

}

function btnBorrar() {
    if (idBorrar == null) return;
    borrarPublicacion(idBorrar)
}

const borrarPublicacion = async (id) => {
    const response = await fetch(`/publicacion/${id}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const data = await response.json();
    initPublicaciones();
}