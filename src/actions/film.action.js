let nextFilmId = 0

export const addFilm = title => ({
    type: "ADD_FILM",
    id: nextFilmId++,
    title
})