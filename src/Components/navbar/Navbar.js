import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar(){
    return (
        <>
        <nav id="head">
            <Link to="/" id="title">Home</Link>
        </nav>
        </>
    )
}
export default Navbar;