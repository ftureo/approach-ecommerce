import { useState, useEffect } from "react";

import ProductList from "./ProductList";
import { getProducts } from "../services/productService";

const ProductListContainer = () => {
    const [products, setProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    /**
     * @function loadProducts
     * @description Carga los productos de la API de FakeStoreAPI invocando a getProducts, resolviendo la promesa y actualiza el estado de products a través de setProducts
     * @returns {Array} Retorna un array con los productos
     */
    const loadProducts = async () => {
        const productsData = await getProducts();

        setProducts(productsData);
        // setIsLoading(false);
    };

    useEffect(() => {
        loadProducts();
    }, []);
    return (
        <>
            <h1>Acá renderizamos el acumulado de productos</h1>
            {/* Rendering with one condition - wip: add loading */}
            {/* {products.length === 0 && <h1>Todavía no tenemos los productos</h1>} */}
            <ProductList products={products} />
        </>
    );
};

export default ProductListContainer;
