import React from "react"
import Film from "../components/Film"
import { connect } from "react-redux"

const FilmList = ({ films }) => {
    return (
        <ul>
            {films != null && films.map(film => <Film key={film.id} {...film} />)}
        </ul>
    )
}

const mapStateToProps = state => ({ films: state.films })

export default connect(mapStateToProps)(FilmList)
