let nextFilmId = 4

export const addFilm = (title, genre) => ({
  type: 'ADD_FILM',
  id: nextFilmId++,
  viewed: false,
  title,
  genre,
})

export const deleteFilm = (id) => ({
  type: 'DELETE_FILM',
  id,
})

export const toggleViewedFilm = (id) => ({
  type: 'TOGGLE_VIEWED_FILM',
  id,
})
