export const initialState = {
    basket: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_BASKET': return {
            ...state,
            basket: [...state.basket, action.item]
        }
        case 'REMOVE_FROM_BASKET':
            let updatedBasket = [...state.basket]
            let index = state.basket.findIndex(function (value) {
                return value.id === action.item.id;
            })

            if (index < 0)
                console.warn(`Cannot remove product with ID: ${action.item.id} as it was not found`)
            else
                updatedBasket.splice(index, 1)

            console.log(updatedBasket)
            return {
                ...state,
                basket: updatedBasket
            }
        default:
            return state
    }
}

export default reducer