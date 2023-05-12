import { SET_PRODUCT_LIST } from "./constants";
 
export const productData = (data = [], action) => {
    console.log(action);;
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return [...action.data,];


            // no case matched
            default:
            return data
    }
}

