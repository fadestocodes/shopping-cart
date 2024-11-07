import PropTypes from 'prop-types';
import { ShoppingCart } from 'lucide-react';
import styles from "../styles/navbar.module.css"
import { useOutletContext } from 'react-router-dom'

const Navbar =  () => {

    const { cartObject, setCartObject } = useOutletContext();

    return(
        <nav>
            <div className={styles["cart-container"]}>
                <ShoppingCart />{cartObject.cartNumber}
            </div>
        </nav>

    )
}

//--------------Prop Types----------------------//
Navbar.propTypes = {
    cartObject : PropTypes.object
}

export default Navbar;