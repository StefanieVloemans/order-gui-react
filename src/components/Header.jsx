import {React} from 'react';

function Header() {

    return (
        <header>
            <div className="logo-group">
                <img src="../../assets/images/order-icon.png" alt="order-icon" />
                    <span className="logo-title">&Ouml;RDER</span>
            </div>
            <nav role="navigation">
                <a href='#'>Customers</a>
                <a href='#'>Nav #2</a>
                <a href='#'>Nav #3</a>
                <a href='#'>Nav #4</a>
            </nav>
        </header>);
}

    export default Header;