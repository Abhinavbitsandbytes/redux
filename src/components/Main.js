import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function Main() {
    const dispatch = useDispatch();
    let data = useSelector((state)=> state.productData)
    console.log('data in main', data)
    useEffect(()=>{
dispatch(productList())
    }, [])
    return (
        <>
         <div>
               <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
        </div>
            <div>
                <button onClick={() => dispatch(productList())}>Call product list</button>
            </div>
            <div className='product-container'>
                {
                    data.map((item)=> <div className='product-item'>
<img src={item.photo} />
<div> Name : {item.name} </div>
<div> Color : {item.color} </div>
<div> Price : {item.price} </div>
<div> Category : {item.category} </div>
<div> Brand : {item.brand} </div>
<div>
    <button onClick={()=> dispatch(addToCart(item))}>Add to cart</button>
                            <button onClick={() => dispatch(removeToCart(item.id))}>Remove to cart</button>
</div>
                    </div>)
                }
            </div>
        </>
    );
}

export default Main;
