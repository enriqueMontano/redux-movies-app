import React from "react"
import Film from "../components/Film"
import { connect } from "react-redux"
import { deleteFilm } from "../actions/film.actions"

const FilmList = ({ films, deleteFilm }) => {
    return (
        <ul>
            {films != null && films.map(film => <Film key={film.id} {...film} onClick={() => deleteFilm(film.id)} />)}
        </ul>
    )
}

const mapStateToProps = state => ({ films: state.films })

const mapDispatchToProps = dispatch => ({
    deleteFilm: id => dispatch(deleteFilm(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmList)
