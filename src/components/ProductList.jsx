/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
    return (
        <>
            <h2>Acá mapeamos los productos</h2>
            {products.map((product) => {
                console.log({ product });

                return <ProductCard key={product.id} product={product} />;
            })}
        </>
    );
};

export default ProductList;
