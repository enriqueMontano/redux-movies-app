import React from "react"
import { connect } from "react-redux"
import { addFilm } from "../actions/film.actions"

const AddFilm = ({ dispatch }) => {

    const handleInputChange = (e) => {
        // console.log(e.target.value)
    }

    const handleInputKeyPress = e => {
        if (e.key === 'Enter' && e.target.value !== "") {
            dispatch(addFilm(e.target.value))
            document.querySelector("input").value = ""
        }
    }

    return (
        <React.Fragment>
            <input type="text" onChange={handleInputChange} onKeyPress={handleInputKeyPress} />
        </React.Fragment>
    )
}

export default connect()(AddFilm)
