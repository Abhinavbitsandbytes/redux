import {takeEvery, put} from "redux-saga/effects"
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from "./constants"

function* getProducts() {
    let data = yield fetch('http://localhost:3000/products');
    data = yield data.json();
    console.log(data)
    yield put({type: SET_PRODUCT_LIST, data})

}

function* searchProducts(data) {
    console.log(`http://localhost:3000/products?q=${data.querry}`)
    let result = yield fetch(`http://localhost:3000/products?q=${data.querry}`);
    result = yield result.json();
    console.log(data)
    yield put({ type: SET_PRODUCT_LIST, data: result })

}

function* productSaga()
 { 
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)


}

export default productSaga