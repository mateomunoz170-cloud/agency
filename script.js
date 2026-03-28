const autos = [
  {nombre:"BMW M4", precio:75000, img:"images/08497539f693eb146e4f457d8dab9769.jpg"},
  {nombre:"Audi R8", precio:120000, img:"images/61d2be1bb8a2e2a4136edee6c40ee968.jpg"},
  {nombre:"AMG GT", precio:95000, img:"images/8e95f297654859ff17f95db59b897ace.jpg"}
];

const contenedor = document.getElementById("autos-container");

function renderAutos(lista){
  contenedor.innerHTML = "";

  lista.forEach(auto => {
    contenedor.innerHTML += `
      <div class="auto-card">
        <img src="${auto.img}">
        <div class="auto-info">
          <h3>${auto.nombre}</h3>
          <p>$${auto.precio}</p>
        </div>
      </div>
    `;
  });
}

document.getElementById("inputBusqueda").addEventListener("input", e=>{
  let texto = e.target.value.toLowerCase();

  let filtrados = autos.filter(a =>
    a.nombre.toLowerCase().includes(texto)
  );

  renderAutos(filtrados);
});

renderAutos(autos);