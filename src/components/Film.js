import React from "react"

const Film = ({ title, deleteFilm, toggleViewedFilm, viewed }) => (
    <li>
        <h3>{title}</h3>
        <div>
            <input type="checkbox" onClick={toggleViewedFilm} defaultChecked={viewed} />
            <label >Viewed</label>
        </div>
        <button onClick={deleteFilm}>Delete</button>
    </li>
)

export default Film
