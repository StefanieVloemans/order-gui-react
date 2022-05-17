import {React} from 'react';
import orderIcon from "../assets/images/order-icon.png";

function Header() {

    return (
        <header>
            <div className="row">
                <div className="col-4 logo-group">
                    <img className="img-fluid" src={orderIcon} alt="order-icon"/>
                    <span className="display-4 logo-title mt-5">&Ouml;RDER</span>
                </div>
                <div className="col-8">
                    <nav className="navbar navbar-expand-log container
            navbar-light bg-light mt-5" role="navigation">
                        <a href='/'>Customers</a>
                        {/*<a href='#'>Nav #2</a>*/}
                        {/*<a href='#'>Nav #3</a>*/}
                        {/*<a href='#'>Nav #4</a>*/}
                    </nav>
                </div>
            </div>
        </header>);
}

export default Header;