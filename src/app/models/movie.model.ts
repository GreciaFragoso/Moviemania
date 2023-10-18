export interface APIresponse {
    results: Movie[],
}

export interface Movie {
    id: number;
    title: string;
    genre: string;
}


// aquí defino las interfaces (estructura de un objeto, sólo define la forma) o clases