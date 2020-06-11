import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import rootReducer from './reducers'

import './index.css'

// import { deleteFilm } from './actions/film.actions'
import { viewedFilm } from './actions/film.actions'

const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()))

//DISPATCH
// store.dispatch(deleteFilm(1))
store.dispatch(viewedFilm(1))
store.dispatch(viewedFilm(2))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)