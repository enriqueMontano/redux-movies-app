const initialState = [
  {
    id: 1,
    viewed: false,
    title: 'Otto e mezzo',
    genre: ['drama', 'comedy'],
  },
  {
    id: 2,
    viewed: false,
    title: 'The Apartment',
    genre: ['comedy', 'romance', 'drama'],
  },
  {
    id: 3,
    viewed: false,
    title: 'La dolce vita',
    genre: ['drama', 'comedy'],
  },
]

const films = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FILM':
      return [
        ...state,
        {
          id: action.id,
          viewed: false,
          title: action.title,
          genre: action.genre,
        },
      ]
    case 'DELETE_FILM': {
      const index = state.findIndex((n) => n.id === action.id)
      state.splice(index, 1)
      return [...state]
    }
    case 'TOGGLE_VIEWED_FILM':
      return state
        .map((film) => (film.id === action.id ? { ...film, viewed: !film.viewed } : film))
        .sort((a, b) => a.id - b.id)
    default:
      return state
  }
}
export default films
