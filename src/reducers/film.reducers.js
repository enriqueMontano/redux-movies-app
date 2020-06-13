const initialState = [
    {
        id: 1,
        viewed: true,
        title: "Otto e mezzo",
        genre: ["Drama", "Comedy"]
    },
    {
        id: 2,
        viewed: true,
        title: "The Apartment",
        genre: ["Comedy", "Romance", "Drama"]
    },
    {
        id: 3,
        viewed: false,
        title: "La dolce vita",
        genre: ["Drama", "Comedy"]
    },
]

const films = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FILM":
            return [
                ...state,
                {
                    id: action.id,
                    viewed: false,
                    title: action.title,
                    genre: action.genre
                }
            ]
        case "DELETE_FILM": {
            const index = state.findIndex((n) => n.id === action.id)
            state.splice(index, 1)
            return [...state]
        }
        case "TOGGLE_VIEWED_FILM":
            return state.map(film => film.id === action.id ? { ...film, viewed: !film.viewed } : film)
        default:
            return state
    }
}
export default films