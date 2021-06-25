const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_FAVOURITE':
            const isAdded = state.myList.some(item => item.id === action.payload.id)
            if (!isAdded) {
                return {
                    ...state,
                    myList: [...state.myList, action.payload]
                }
            } else {
                return state
            }
        case 'DELETE_FAVOURITE':
            return {
                ...state,
                myList: state.myList.filter(item => item.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default reducer