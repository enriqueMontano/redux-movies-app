import React from "react"

const Film = ({ title, onClick }) => (
    <React.Fragment>
        <li>{title}</li>
        <button onClick={onClick}>Delete</button>
    </React.Fragment>
)

export default Film
