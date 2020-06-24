import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addFilm } from '../actions/film.actions'

import './AddFilm.css'

const AddFilm = ({ addFilm }) => {
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [genres, setGenres] = useState([])

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && genre && !genres.includes(genre.toLowerCase())) {
      setGenre('')
      setGenres(genres.concat(genre.toLowerCase()))
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
    <div className="form-container">
      <form onSubmit={handleSubmit} onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()} className="form">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Genre"
        />
        <input type="submit" value="Submit" />
      </form>
      <ul>{genres != null && genres.map((genre, idx) => <li key={idx}>{genre}</li>)}</ul>
    </div>
  )
}

export default connect(null, { addFilm })(AddFilm)
