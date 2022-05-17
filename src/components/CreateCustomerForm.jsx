import {React} from 'react';

function CreateCustomerForm() {
    return ( <>
        <main>
            <section>
                <h3 className="section-title">Create Customer</h3>
                <form>
                    <div className="row">
                        <div className="col-1">
                            <label className="form-label" htmlFor="firstName">Firstname</label>
                            <input className="form-control" id="firstName" type="text"/>
                        </div>
                        <div className="col-1">
                            <label className="form-label" htmlFor="lastName">Lastname</label>
                            <input className="form-control" id="lastName" type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input className="form-control" id="email" type="email"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <label className="form-label" htmlFor="phoneNumber">Phone number (mobile)</label>
                            <input className="form-control" id="phoneNumber" type="tel"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label" htmlFor="street">Street</label>
                            <input className="form-control" id="street" type="text"/>
                        </div>
                        <div className="col-1">
                            <label className="form-label" htmlFor="number">Number</label>
                            <input className="form-control" id="number" type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <label className="form-label" htmlFor="postalCode">Postalcode</label>
                            <input className="form-control" id="postalCode" type="text"/>
                        </div>
                        <div className="col-1">
                            <label className="form-label" htmlFor="country">Country</label>
                            <select id="country" className="form-select">
                                <option>Belgium</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <button className="col-4 btn btn-create" type="submit">CREATE</button>
                        <button className="col-1 btn">CANCEL</button>
                    </div>
                </form>
            </section>
        </main>
        </>
    );
}

export default CreateCustomerForm;