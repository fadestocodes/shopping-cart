import { useOutletContext } from 'react-router-dom'
import PropTypes from "prop-types";

const Checkout = () => {

    // Provide the Context
    const { cartObject, setCartObject } = useOutletContext();

    console.log(cartObject);

    // Count Function
    // const countOccurrences = (array, item) => {
    //     return array.reduce((count, currentItem) => {
    //         return currentItem === item ? count+1 : count;
    //     }, 0 );
    // }

    const incrementQuantity = (element) => {
        setCartObject( prevData => ({
            ...prevData,
            cartItems : prevData.cartItems.map( mappedItem => (
                mappedItem.itemObj.id === element.itemObj.id ?
                { ...mappedItem, quantity : mappedItem.quantity + 1 }
                :  mappedItem
            )  )
        }) )
    }

    const decrementQuantity = (element) => {
        
        
        
        setCartObject(prevData => ({
            ...prevData,
            cartItems : prevData.cartItems.map( mappedItem => (
           
                    mappedItem.itemObj.id === element.itemObj.id ?
                    { ...mappedItem, quantity : mappedItem.quantity - 1 }
                    : mappedItem
            ) ).filter( item => item.quantity > 0 )
        }))
    }

    
    return (
        <div className="checkout-container">
            <h2>Shopping Cart</h2>
            { cartObject.cartItems.map( element => (
                <div key={element.itemObj.id}>
                    {/* <img src={element.image} /> */}
                    <div className="product-info">
                        <div className="product-text">
                            <h3>{element.itemObj.title}</h3>
                            <div className="product-bottom">
                            </div>
                                <button onClick={()=>decrementQuantity(element)}>-</button>
                                {element.quantity}
                                <button onClick={()=>incrementQuantity(element)}>+</button>
                        </div>
                        <h3>{element.price}</h3>
                    </div>
                </div>
            ) ) }
        </div>
    );
}

Checkout.propTypes = {
    cartObject : PropTypes.object
}

export default Checkout;