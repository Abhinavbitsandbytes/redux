import { PRODUCT_LIST } from "./constants";
 
export const productData = (data = [], action) => {
    console.log(action);;
    switch (action.type) {
        case PRODUCT_LIST:
            return [action.data, ...data];
            // no case matched
            default:
            return data
    }
}

