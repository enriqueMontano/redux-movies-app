import React from 'react'
import './Film.css'

const Film = ({ title, genre, deleteFilm, toggleViewedFilm, viewed }) => (
  <li>
    <h3>{title}</h3>
    <ul>{genre != null && genre.map((cv, idx) => <li key={idx}>{cv}</li>)}</ul>
    <div>
      <input type="checkbox" onClick={toggleViewedFilm} defaultChecked={viewed} />
      <label>Viewed</label>
    </div>
    <button onClick={deleteFilm}>Delete</button>
  </li>
)

export default Film
