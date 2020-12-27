export const initialState = {
    basket: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_BASKET': // Logic for adding items to basket
            break
        case 'REMOVE_FROM_BASKET': // Logic for removing items from basket
            break
        default:
            return state
    }
}

export default reducer