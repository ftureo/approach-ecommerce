/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
    console.log({ product });
    return (
        <>
            <div>
                <h2>Acá renderizamos la card de un producto</h2>
                <h3>{product?.title}</h3>
                <p>{product.description}</p>
                <img src={product.image} alt={product.title} />
                <p>${product.price}</p>
            </div>
        </>
    );
};

export default ProductCard;
