import {useOutletContext} from 'react-router-dom'
import PropTypes from "prop-types";
import styles from "../styles/productCard.module.css";




const ProductCard = ( ) => {


    const {productList, handleClick} = useOutletContext();

    // Return
    return (
        <div className={styles["all-products"]}>
            { productList.map( element => (
                <div key={element.id} className={styles["product-container"]}>
                    <div className={styles["product-top"]}><img src={element.image} /></div>
                    <div className={styles["product-bottom"]}>
                        <div className={styles["product-info"]}>
                            <h3>{element.title}</h3>
                            <p>{element.price}</p>
                            <button type="button" className={styles["add-to-cart"]} onClick={()=> handleClick(element)} >Add to Cart</button>
                        </div>
                    </div>
                </div>                    
            )  ) }
        </div>
    );
};

//-------------------------Prop Types---------------------------//
ProductCard.propTypes = {
    productList : PropTypes.array,
    handleClick : PropTypes.func
}

export default ProductCard; 