import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import rootReducer from './reducers'

import './index.css'

import { addFilm, deleteFilm, toggleViewedFilm } from './actions/film.actions'

const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()))

//DISPATCH
// store.dispatch(deleteFilm(1))
// store.dispatch(toggleViewedFilm(1))
// store.dispatch(toggleViewedFilm(2))
store.dispatch(addFilm(
    "Der Name der Rose",
    ["Mistery", "Drama"]
))
store.dispatch(addFilm(
    "Trainspotting",
    ["Drama"]
))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)