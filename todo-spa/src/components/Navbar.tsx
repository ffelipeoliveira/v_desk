import "../assets/css/Navbar.css";
import BellIcon from "../assets/icons/BellIcon";
import InfoIcon from "../assets/icons/InfoIcon";

function Navbar() {
    return (
        <header>
            <a className="Home">
                <h1 className="V">V</h1><h1>desk</h1>
            </a>
            <nav>
                <ul>
                    <li>
                        <BellIcon></BellIcon>
                    </li>
                    <li className="Info">
                        <InfoIcon></InfoIcon>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;