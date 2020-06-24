import React from 'react'
import Film from '../components/Film'
import { connect } from 'react-redux'
import { deleteFilm } from '../actions/film.actions'
import { toggleViewedFilm } from '../actions/film.actions'

import './FilmList.css'

const FilmList = ({ films, deleteFilm, toggleViewedFilm }) => {
  return (
    <ul>
      {films != null &&
        films.map((film) => (
          <Film
            key={film.id}
            {...film}
            deleteFilm={() => deleteFilm(film.id)}
            toggleViewedFilm={() => toggleViewedFilm(film.id)}
          />
        ))}
    </ul>
  )
}

const mapStateToProps = (state) => ({ films: state.films })

const mapDispatchToProps = (dispatch) => ({
  deleteFilm: (id) => dispatch(deleteFilm(id)),
  toggleViewedFilm: (id) => dispatch(toggleViewedFilm(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmList)
