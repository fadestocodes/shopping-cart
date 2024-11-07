import { useOutletContext } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Navbar from "./navbar";
import ProductCard from "./productCard";

const Homepage = () => {

    const { productList, cartObject, handleClick } = useOutletContext();

    return (
        <div className="homepage-container">
            <Link to = "/checkout" >
                < Navbar cartObject={cartObject}/>
            </Link>
            < ProductCard productList = {productList} handleClick={handleClick}/>
        </div>
    );
}

Homepage.propTypes = {
    productList : PropTypes.array,
    cartObject : PropTypes.object,
    handleClick : PropTypes.func

};

export default Homepage;