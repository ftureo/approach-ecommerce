/* eslint-disable react/prop-types */
const ProductDetail = ({ product }) => {
    return (
        <>
            <h4>Product Detail</h4>
            <div>
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p>${product.price}</p>
            </div>
        </>
    );
};

export default ProductDetail;
