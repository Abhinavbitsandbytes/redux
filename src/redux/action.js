import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants"

export const addToCart = (data) =>{
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removeToCart = (data) => {
    return {
        type: REMOVE_FROM_CART,
        data: data
    }
}

export const emptyCart = () => {
    return {
        type: EMPTY_CART,
    }
}

// Similarly we can make a function for removeToCart