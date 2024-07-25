import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { getProductById } from "../services/productService";

const ProductDetailContainer = () => {
    const [productDetail, setProductDetail] = useState(null);
    const { productId } = useParams();
    console.log({ productId });

    useEffect(() => {
        const loadProductDetail = async () => {
            const productDetailData = await getProductById(productId);
            setProductDetail(productDetailData);
        };
        loadProductDetail();
    }, [productId]);

    return (
        <div>
            <h3>Product Detail Container</h3>
            {!productDetail ? (
                <h2>Cargando detalle del producto...</h2>
            ) : (
                <ProductDetail product={productDetail} />
            )}
        </div>
    );
};

export default ProductDetailContainer;
