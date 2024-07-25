import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductListContainer from "./components/ProductListContainer";
import ProductDetailContainer from "./components/ProductDetailContainer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <h1>E-commerce</h1>
            <Navbar />
            <Routes>
                <Route path="/products" element={<ProductListContainer />} />
                <Route
                    path="/products/category/:categoryId"
                    element={<ProductListContainer />}
                />
                <Route
                    path="/product/detail/:productId"
                    element={<ProductDetailContainer />}
                />
            </Routes>
        </>
    );
}

export default App;
