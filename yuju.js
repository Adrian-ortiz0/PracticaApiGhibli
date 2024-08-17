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
async function mejorPuntuadas(url) {
  const filmes = await peticion(url);
  filmes.forEach(function (film) {
    if (film.rt_score > 80) {
      console.log(
        `Titulo: ${film.title} | Puntuacion de la critica: ${film.rt_score}%`
      );
    }
  });
}

async function peorPuntuadas(url) {
  const filmes = await peticion(url);
  filmes.forEach(function (film) {
    if (film.rt_score < 80) {
      console.log(
        `Titulo: ${film.title} | Puntuacion de la critica: ${film.rt_score}%`
      );
    }
  });
}

async function traerPersonajesPorPelicula(url, url2) {
  const characters = await peticion(url);
  const films = await peticion(url2);

  const relacionPersonajePelicula = [];

  characters.forEach(function (personaje) {
    const peliculaId = personaje.films[0].split("/").pop();

    const pelicula = films.find((film) => film.id === peliculaId);

    if (pelicula) {
      relacionPersonajePelicula.push({
        personaje: personaje.name,
        pelicula: pelicula.title,
      });
    }
  });

  relacionPersonajePelicula.forEach(function (item) {
    console.log(`Personaje : ${item.personaje} | Pelicula: ${item.pelicula}`);
  });
}

async function peliculasMayoresA100(url) {
  const filmes = await peticion(url);
  filmes.forEach(function (film) {
    if (film.running_time > 100) {
      console.log(
        `Titulo: ${film.title} | Duracion: ${film.running_time} minutos`
      );
    }
  });
}
async function peliculasMenoresA100(url) {
  const filmes = await peticion(url);
  filmes.forEach(function (film) {
    if (film.running_time < 100) {
      console.log(
        `Titulo: ${film.title} | Duracion: ${film.running_time} minutos`
      );
    }
  });
}

async function personajesMenores(url) {
  const personajes = await peticion(url);
  personajes.forEach(function (personaje) {
    if (personaje.age < 18) {
      console.log(`Nombre: ${personaje.name} | Edad: ${personaje.age}`);
    }
  });
}

async function personajesMayores(url) {
  const personajes = await peticion(url);
  personajes.forEach(function (personaje) {
    if (personaje.age > 18) {
      console.log(`Nombre: ${personaje.name} | Edad: ${personaje.age}`);
    }
  });
}

personajesMayores(urlPeople);

async function menu() {
  while (true) {
    const opt = Number(
      prompt(
        "Bienvenido a la wiki de Studio Ghibli! \n 1. Ver Nombre de peliculas \n 2. Ver Nombres en Japones \n 3. Ver directores \n 4. Ver productores \n 5. Ver año de lanzamiento \n 6. Peliculas mejor puntuadas \n 7. Peliculas peor puntuadas \n 8. Personajes de las peliculas \n 9. Ver peliculas con mayor duracion \n 10. Ver peliculas de menor duracion \n 11. Personajes menores de 18 \n 12. Personajes mayores de 18 0. Salir"
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
      await mejorPuntuadas(urlFilms);
    } else if (opt === 7) {
      await peorPuntuadas(urlFilms);
    } else if (opt === 8) {
      await traerPersonajesPorPelicula(urlPeople, urlFilms);
    } else if (opt === 9) {
      await peliculasMayoresA100(urlFilms);
    } else if (opt === 10) {
      await peliculasMenoresA100(urlFilms);
    } else if (opt === 11) {
      await personajesMenores(urlPeople);
    } else if (opt === 12) {
      await personajesMayores(urlPeople);
    }
  }
}
