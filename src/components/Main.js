import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux';

function Main() {
    const dispatch = useDispatch();
    const product = {
        name: 'Iphone',
        type: 'mobile',
        price: 10000,
        color: 'red'
    }
    return (
        <>
        <div>
               <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
        </div>
         <div>
               <button onClick={() => dispatch(removeToCart(product.name))}>Remove from cart</button>
        </div>
         <div>
               <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
        </div>
        </>
    );
}

export default Main;
