const cabeceras = new Headers();
cabeceras.set("Content-Type", "application/json");
cabeceras.set("Content-Encoding", "br");

let urlFilms = "https://ghibliapi.vercel.app/films/";
let urlPeople = "https://ghibliapi.vercel.app/people";
let urlLocations = "https://ghibliapi.vercel.app/locations";
let urlSpecies = "https://ghibliapi.vercel.app/species";
let urlVehicles = "https://ghibliapi.vercel.app/vehicles";

async function peticion(url) {
  const respuesta = await fetch(url);
  if (respuesta.ok) {
    const info = await respuesta.json();
    return info;
  } else {
    return [];
  }
}

async function traerFilmes(url) {
  const filmes = await peticion(url);
  filmes.forEach(function (film) {
    console.log(`Titulo: ${film.title}`);
  });
}
async function traerNombresEnJapones(url) {
  const filmes = await peticion(url);
  filmes.forEach(function (film) {
    console.log(`Titulo: ${film.original_title_romanised}`);
  });
}

async function traerDirectores(url) {
  const filmes = await peticion(url);
  filmes.forEach(function (film) {
    console.log(`Titulo: ${film.title} | Director: ${film.director}`);
  });
}

async function traerProductores(url) {
  const filmes = await peticion(url);
  filmes.forEach(function (film) {
    console.log(`Titulo: ${film.title} | Productor: ${film.producer}`);
  });
}

async function traerFechaDeLanzamiento(url) {
  const filmes = await peticion(url);
  filmes.forEach(function (film) {
    console.log(`Titulo: ${film.title} | Productor: ${film.release_date}`);
  });
}
async function traerPuntuacionDeLaPelicula(url) {
  const filmes = await peticion(url);
  filmes.forEach(function (film) {
    console.log(
      `Titulo: ${film.title} | Puntuacion de la critica: ${film.rt_score}%`
    );
  });
}

async function menu() {
  while (true) {
    const opt = Number(
      prompt(
        "Bienvenido a la wiki de Studio Ghibli! \n 1. Ver Nombre de peliculas \n 2. Ver Nombres en Japones \n 3. Ver directores \n 4. Ver productores \n 5. Ver año de lanzamiento \n 6. Puntuacion de la pelicula en metacritic \n 0. Salir"
      )
    );
    if (opt === 1) {
      await traerFilmes(urlFilms);
    } else if (opt === 0) {
      alert("Adios...");
      break;
    } else if (opt === 2) {
      await traerNombresEnJapones(urlFilms);
    } else if (opt === 3) {
      await traerDirectores(urlFilms);
    } else if (opt === 4) {
      await traerProductores(urlFilms);
    } else if (opt === 5) {
      await traerFechaDeLanzamiento(urlFilms);
    } else if (opt === 6) {
      await traerPuntuacionDeLaPelicula(urlFilms);
    }
  }
}
