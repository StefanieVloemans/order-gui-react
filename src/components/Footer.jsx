import {React} from 'react';
import orderIcon from "../assets/images/order-icon.png";

function Footer() {
    return (

        <footer>
            <div className="text-center border-1 border-dark logo-group">
                <img src={orderIcon} alt="order-icon"/>
                <span className="logo-title">&Ouml;RDER</span>
            </div>
        </footer>
    );
}

export default Footer;