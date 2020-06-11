let nextFilmId = 0

export const addFilm = title => ({
    type: "ADD_FILM",
    id: nextFilmId++,
    viewed: false,
    title
})

export const deleteFilm = id => ({
    type: "DELETE_FILM",
    id
})

export const viewedFilm = id => ({
    type: "VIEWED_FILM",
    id
})