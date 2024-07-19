/* eslint-disable react/prop-types */
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
    console.log({ product });
    return (
        <div className="product-card">
            <img
                src={product.image}
                alt={product.title}
                className="product-image"
            />
            <div className="product-details">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-price">${product.price}</p>
                <p className="product-description">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
