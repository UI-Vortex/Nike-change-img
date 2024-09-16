import './header.css'
import jumpLogo from "../images/jump..png"

export default function Header() {
    return (
        <div>
            <header>
                <nav className="header_nav">
                    <a href="#!" className="img-link">
                        <img src={jumpLogo} alt="" />
                    </a>

                    <ul className="list-item">
                        <li className="items">
                            <a href="#!" className="item-link">Home</a>
                        </li>
                        <li className="items">
                            <a href="#!" className="item-link">Man</a>
                        </li>
                        <li className="items">
                            <a href="#!" className="item-link">Women</a>
                        </li>
                        <li className="items">
                            <a href="#!" className="item-link">Kids</a>
                        </li>
                        <li className="items">
                            <a href="#!" className="item-link">Sales</a>
                        </li>
                    </ul>

                    <div className="search-input">
                        <input type="text" placeholder='Search here...' />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>

                </nav>
            </header>
        </div>
    )
}