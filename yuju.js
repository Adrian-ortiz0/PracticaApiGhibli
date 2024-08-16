const cabeceras = new Headers();
cabeceras.set("Content-Type", "application/json");
cabeceras.set("Content-Encoding", "br");



let urlCategorias = "https://ghibliapi.vercel.app/films/";



async function peticion(url) {
  const respuesta = await fetch(url);
  if (respuesta.ok) {
    const info = await respuesta.json();
    return info;
  } else {
    return [];
  }
}

async function traerCategorias(url) {
  const categorias = await peticion(url);
  console.log(categorias)
}

traerCategorias(urlCategorias)