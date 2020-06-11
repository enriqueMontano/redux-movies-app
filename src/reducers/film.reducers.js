const initialState = [
    {
        id: 1,
        title: "8 1/2"
    },
    {
        id: 2,
        title: "The Apartment"
    }
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
        default:
            return state
    }
}
export default films