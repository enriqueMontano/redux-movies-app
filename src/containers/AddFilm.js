import React, { useState } from "react"
import { connect } from "react-redux"
import { addFilm } from "../actions/film.actions"

const AddFilm = ({ addFilm }) => {
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [genres, setGenres] = useState([])

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && genre) {
            setGenre('')
            setGenres(genres.concat(genre))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && genres.length) {
            setTitle('')
            setGenres([])
            addFilm(title, genres)
        }
    }

    return (
        <form onSubmit={handleSubmit} onKeyPress={e => e.key === "Enter" && e.preventDefault()}>
            <label>
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Write a movie you like!"
                />
            </label>
            <label>
                Genre:
                <input
                    type="text"
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="What genre does it belong to?"
                />
            </label>
            <input type="submit" value="Submit" />
            <div>
                <ul>
                    {genres != null && genres.map((genre, idx) => <li key={idx}>{genre}</li>)}
                </ul>
            </div>
        </form>
    )
}

export default connect(null, { addFilm })(AddFilm)
