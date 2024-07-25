import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductList from "./ProductList";
import { getProducts } from "../services/productService";

const ProductListContainer = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        /**
         * @function loadProducts
         * @description Carga los productos de la API de FakeStoreAPI invocando a getProducts, resolviendo la promesa y actualiza el estado de products a través de setProducts
         * @returns {Array} Retorna un array con los productos
         */
        const loadProducts = async () => {
            const productsData = await getProducts();

            // setProducts(productsData);
            // Como ahora tengo categoria, en lugar de setear siempre todos los productos que vengan en la respuesta, filtro por categoria
            if (categoryId) {
                const filteredProducts = productsData.filter(
                    (product) => product.category === categoryId
                );

                setProducts(filteredProducts);
            } else {
                setProducts(productsData);
            }

            setIsLoading(false);
        };
        loadProducts();
    }, [categoryId]);
    return (
        <>
            <h1>Acá renderizamos el acumulado de productos</h1>
            {/* Rendering with one condition - wip: add loading */}
            {/* {products.length === 0 && <h1>Todavía no tenemos los productos</h1>} */}
            {isLoading ? (
                <h2>Cargando productos...</h2>
            ) : products.length === 0 ? (
                <h2>No tenemos productos disponibles para mostrar</h2>
            ) : (
                <ProductList products={products} />
            )}
        </>
    );
};

export default ProductListContainer;
