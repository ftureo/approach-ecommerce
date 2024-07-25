import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <Link to="/products/category/men's clothing">
                        Men&apos;s Clothing
                    </Link>
                </li>
                <li>
                    <Link to="/products/category/women's clothing">
                        Women&apos;s Clothing
                    </Link>
                </li>
                <li>
                    <Link to="/products/category/jewelery">Jewelery</Link>
                </li>
                <li>
                    <Link to="/products/category/electronics">Electronics</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
