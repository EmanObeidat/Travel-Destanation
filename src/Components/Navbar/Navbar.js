import { Link } from "react-router-dom";
import Home from "../Home/Home";
function Navbar() {
    return (
        <nav>
            <Link to="/"> {Home}</Link>
        </nav>
    )
}
export default Navbar