const initialState = [
    {
        id: 1,
        viewed: false,
        title: "8 1/2"
    },
    {
        id: 2,
        viewed: false,
        title: "The Apartment"
    },
    {
        id: 3,
        viewed: false,
        title: "La dolce vita"
    },
]

const films = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FILM":
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title
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