import { useSelector, useDispatch } from "react-redux"
import { productSearch } from "../redux/productAction"
const Header = () =>{
const result = useSelector((state)=>state.cartData)
const dispatch = useDispatch()
console.log("data in header", result)
    return(
        <div className="header">
            <div className="search-box">
                <input type="text" onChange={(event) => dispatch(productSearch(event.target.value))} placeholder="search product" />
            </div>
            <div className="cart-div">
                <span>{result.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" />
            </div>

        </div>
    )
}
export default Header