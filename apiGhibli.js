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

async function personajesMasculinos(url) {
  const personajes = await peticion(url);
  personajes.forEach(function (personaje) {
    if (personaje.gender === "Male") {
      console.log(
        `Nombre: ${personaje.name} | Sexo: ${personaje.gender} / Masculino`
      );
    }
  });
}

async function personajesFemeninos(url) {
  const personajes = await peticion(url);
  personajes.forEach(function (personaje) {
    if (personaje.gender === "Female") {
      console.log(
        `Nombre: ${personaje.name} | Sexo: ${personaje.gender} / Femenino`
      );
    }
  });
}

async function traerLugaresPorPelicula(url, url2) {
  const places = await peticion(url);
  const films = await peticion(url2);

  const relacionLugarPelicula = [];

  places.forEach(function (place) {
    const placeId = place.films[0].split("/").pop();

    const pelicula = films.find((film) => film.id === placeId);

    if (pelicula) {
      relacionLugarPelicula.push({
        Lugar: place.name,
        pelicula: pelicula.title,
      });
    }
  });
  relacionLugarPelicula.forEach(function (item) {
    console.log(`Lugar: ${item.Lugar} | Pelicula: ${item.pelicula}`);
  });
}

async function climaLugares(url) {
  const lugares = await peticion(url);
  lugares.forEach(function (lugar) {
    console.log(`Nombre: ${lugar.name} | Clima: ${lugar.climate}`);
  });
}

async function terrenoDeLugares(url) {
  const lugares = await peticion(url);
  lugares.forEach(function (lugar) {
    console.log(`Nombre: ${lugar.name} | Terreno: ${lugar.terrain}`);
  });
}

async function traerSpecies(url) {
  const species = await peticion(url);
  species.forEach(function (specie) {
    console.log(`Nombre: ${specie.name} | Tipo: ${specie.classification}`);
  });
}

async function traerVehiculos(url) {
  const vehicles = await peticion(url);
  vehicles.forEach(function (vehicle) {
    console.log(`Nombre: ${vehicle.name} | Tipo: ${vehicle.vehicle_class}`);
  });
}

async function descripcionVehiculos(url) {
  const vehicles = await peticion(url);
  vehicles.forEach(function (vehicle) {
    console.log(
      `Nombre: ${vehicle.name} | Descripcion: ${vehicle.description}`
    );
  });
}

async function menu() {
  while (true) {
    try {
      const opt = Number(
        prompt(
          "Bienvenido a la Wiki de Studio Ghibli! \n 1. Peliculas \n 2. Personajes \n 3. Lugares \n 4. Especies \n 5. Vehiculos \n 0. Salir"
        )
      );

      if (isNaN(opt)) {
        throw new Error("Por favor, ingresa un número válido.");
      }

      if (opt === 1) {
        await menuPeliculas();
      } else if (opt === 2) {
        await menuPersonajes();
      } else if (opt === 3) {
        await menuLugares();
      } else if (opt === 4) {
        await menuEspecies();
      } else if (opt === 5) {
        await menuVehiculos();
      } else if (opt === 0) {
        alert("Adios...");
        break;
      } else {
        alert("Opción no válida. Intenta de nuevo.");
      }
    } catch (error) {
      alert(error.message);
    }
  }
}

async function menuPeliculas() {
  while (true) {
    try {
      const opt = Number(
        prompt(
          "1. Ver todas las peliculas \n 2. Ver Nombres originales de las peliculas \n 3. Mostrar directores \n 4. Mostrar prodcutores \n 5. Mostrar fechas de lanzamiento \n 6. Mostrar peliculas mejor puntuadas \n 7. Mostrar peliculas peor puntuadas \n 8. Peliculas de mayor duracion \n 9. Peliculas de menor duracion \n 0. Salir"
        )
      );

      if (isNaN(opt)) {
        throw new Error("Por favor, ingresa un número válido.");
      }

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
        await peliculasMayoresA100(urlFilms);
      } else if (opt === 9) {
        await peliculasMenoresA100(urlFilms);
      } else {
        alert("Opción no válida. Intenta de nuevo.");
      }
    } catch (error) {
      alert(error.message);
    }
  }
}

async function menuPersonajes() {
  while (true) {
    try {
      const opt = Number(
        prompt(
          "1. Ver personajes de las peliculas \n 2. Ver personajes mayores de 18 \n 3. Ver personajes menores de 18 \n 4. Ver personajes femeninos \n 5. Ver personajes masculinos \n 0. Salir"
        )
      );

      if (isNaN(opt)) {
        throw new Error("Por favor, ingresa un número válido.");
      }

      if (opt === 1) {
        await traerPersonajesPorPelicula(urlPeople, urlFilms);
      } else if (opt === 0) {
        alert("Adios...");
        break;
      } else if (opt === 2) {
        await personajesMayores(urlPeople);
      } else if (opt === 3) {
        await personajesMenores(urlPeople);
      } else if (opt === 4) {
        await personajesFemeninos(urlPeople);
      } else if (opt === 5) {
        await personajesMasculinos(urlPeople);
      } else {
        alert("Opción no válida. Intenta de nuevo.");
      }
    } catch (error) {
      alert(error.message);
    }
  }
}

async function menuLugares() {
  while (true) {
    try {
      const opt = Number(
        prompt(
          "1. Mostrar lugares de las peliculas \n 2. Mostrar el clima de los lugares \n 3. Mostrar el terreno de los lugares \n 0. Salir"
        )
      );

      if (isNaN(opt)) {
        throw new Error("Por favor, ingresa un número válido.");
      }

      if (opt === 1) {
        await traerLugaresPorPelicula(urlLocations, urlFilms);
      } else if (opt === 0) {
        alert("Adios...");
        break;
      } else if (opt === 2) {
        await climaLugares(urlLocations);
      } else if (opt === 3) {
        await terrenoDeLugares(urlLocations);
      } else {
        alert("Opción no válida. Intenta de nuevo.");
      }
    } catch (error) {
      alert(error.message);
    }
  }
}

async function menuEspecies() {
  while (true) {
    try {
      const opt = Number(
        prompt("1. Mostrar todas las especies de las peliculas \n 0. Salir")
      );

      if (isNaN(opt)) {
        throw new Error("Por favor, ingresa un número válido.");
      }

      if (opt === 1) {
        await traerSpecies(urlSpecies);
      } else if (opt === 0) {
        alert("Adios...");
        break;
      } else {
        alert("Opción no válida. Intenta de nuevo.");
      }
    } catch (error) {
      alert(error.message);
    }
  }
}

async function menuVehiculos() {
  while (true) {
    try {
      const opt = Number(
        prompt(
          "1. Mostrar todos los vehiculos \n 2. Mostrar descripcion de los vehiculos \n 0. Salir"
        )
      );

      if (isNaN(opt)) {
        throw new Error("Por favor, ingresa un número válido.");
      }

      if (opt === 1) {
        await traerVehiculos(urlVehicles);
      } else if (opt === 2) {
        await descripcionVehiculos(urlVehicles);
      } else if (opt === 0) {
        alert("Adios...");
        break;
      } else {
        alert("Opción no válida. Intenta de nuevo.");
      }
    } catch (error) {
      alert(error.message);
    }
  }
}

menu();
