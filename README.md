# Moviemania

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6 y mediante el consumo de [The Movie DB](https://developer.themoviedb.org/) usando el endpoint [discover/movie](https://developer.themoviedb.org/reference/discover-movie).

## Funcionalidades

El usuario puede elegir el tipo de ordenamiento según popularidad o votos y los filtros según géneros se obtienen también de TMDB mediante el endpoint [genres](https://developer.themoviedb.org/reference/genre-movie-list), a partir de cuya respuesta se generan los botones.

Adicionalmente, el usuario puede visualizar los detalles de la película elegida dando click en la portada, generando una nueva pestaña para la visualización del póster, sinópsis, año de lanzamiento, votos e información adicional. Esta funcionalidad está apoyada en el endpoint [details](https://developer.themoviedb.org/reference/movie-details).
