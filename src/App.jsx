import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductListContainer from "./components/ProductListContainer";
import ProductDetailContainer from "./components/ProductDetailContainer";

function App() {
    return (
        <>
            <h1>E-commerce</h1>
            <Routes>
                <Route path="/products" element={<ProductListContainer />} />
                <Route
                    path="/product/detail"
                    element={<ProductDetailContainer />}
                />
            </Routes>
        </>
    );
}

export default App;
