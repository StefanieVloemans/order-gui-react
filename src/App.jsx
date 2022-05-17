import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateCustomerForm from "./components/CreateCustomerForm"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <BrowserRouter>
                        <Routes>
                            <Route exact path="/" element={<CreateCustomerForm/>}/>
                            <Route exact path="/create-customer" element={<CreateCustomerForm/>}/>
                            {/*<Route exact path="/setup-date" element={<SetupDate/>}/>*/}
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </BrowserRouter>
                    {/*<Outlet/>*/}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
