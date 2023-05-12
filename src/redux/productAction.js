import { PRODUCT_LIST, } from "./constants"

export const productList = () => {
    let data = "hello"
    return {
        type: PRODUCT_LIST,
        data: data
    }
}