import React, { useState } from "react"
import { connect } from "react-redux"
import { addFilm } from "../actions/film.actions"

const AddFilm = ({ addFilm }) => {
    const [value, setValue] = useState('')

    const handleOnChange = (e) => {
        setValue(e.target.value)
    }

    const handleAdd = () => {
        if (value) {
            setValue('')
            addFilm(value)
        }
    }

    return (
        <>
            <input type="text" onChange={handleOnChange} value={value} placeholder="Write a movie you like..." />
            <button onClick={handleAdd}>Add</button>
        </>
    )
}

export default connect(null, { addFilm })(AddFilm)
