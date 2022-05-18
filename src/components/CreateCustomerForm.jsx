import React, {useState} from 'react';
import {createCustomer} from "../api/CustomerService";

function CreateCustomerForm() {
    const EMPTY_FORM = {
        firstName: '',
        lastName: '',
        emailFirstPart: '',
        emailSecondPart: '',
        phoneCountryCode: '',
        phoneNumber: '',
        streetName: '',
        houseNumber: '',
        postalCode: '',
        country: ''
    };

    const [formValue, setFormValue] = useState(EMPTY_FORM);

    const handleChange = (event) => {
        const {value, name} = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        })
    }

    const clearForm = () => setFormValue(EMPTY_FORM);


    const handleSubmit = () => createCustomer({...formValue})
            .then(clearForm);


    return (<>
            <main>
                <section className="container">
                    <h3 className="section-title mt-3 mb-3">Create Customer</h3>
                    <form name="addCustomerForm needs-validation">
                        <div className="row mb-3">
                            <div className="col-6 ">
                                <label className="form-label" htmlFor="firstName">Firstname</label>
                                <input className="form-control mb-3 rounded-0" id="firstName" type="text" name="firstName" value={formValue.firstName} onChange={handleChange} required />
                                <div className="invalid-feedback">
                                    Please provide a first name
                                </div>
                            </div>
                            <div className="col-6 ">
                                <label className="form-label" htmlFor="lastName">Lastname</label>
                                <input className="form-control mb-3 rounded-0" id="lastName" type="text" name="lastName" value={formValue.lastName} onChange={handleChange} required />
                                <div className="invalid-feedback">
                                    Please provide a last name
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-group-prepend">
                                <label className="form-label" htmlFor="email">Email</label>
                                <div className="input-group">
                                    <input className="form-control mb-3 rounded-0"
                                           aria-label="email" id="email" type="text" name="emailFirstPart" value={formValue.emailFirstPart} onChange={handleChange} required  />
                                    <div className="invalid-feedback">
                                        Please provide an email address
                                    </div>
                                    <span className="input-group-text mb-3 rounded-0">@</span>
                                    <input className="form-control mb-3 rounded-0"
                                           aria-label="server" id="server" type="text" name="emailSecondPart" value={formValue.emailSecondPart} onChange={handleChange} required  />
                                    <div className="invalid-feedback">
                                        Please provide an email address
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <label className="form-label" htmlFor="phoneNumber">Phone number (mobile)</label>
                            <div className="col-3 ">
                                <div className="input-group">
                                    <span className="input-group-text mb-3 rounded-0">+</span>
                                    <input className="form-control mb-3 rounded-0" id="phoneCountryCode" type="tel" name="phoneCountryCode" value={formValue.phoneCountryCode} onChange={handleChange} required  />
                                    <div className="invalid-feedback">
                                        Please provide a phone number
                                    </div>
                                </div>
                            </div>
                            <div className="col-9">
                                <input className="form-control mb-3 rounded-0" id="phoneNumber" type="tel" name="phoneNumber" value={formValue.phoneNumber} onChange={handleChange} required  />
                                <div className="invalid-feedback">
                                    Please provide a phone number
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-9">
                                <label className="form-label" htmlFor="street">Street</label>
                                <input className="form-control mb-3 rounded-0" id="street" type="text" name="streetName" value={formValue.streetName} onChange={handleChange} required  />
                                <div className="invalid-feedback">
                                    Please provide a street name
                                </div>
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="number">Number</label>
                                <input className="form-control mb-3 rounded-0" id="number" type="text" name="houseNumber" value={formValue.houseNumber} onChange={handleChange} required  />
                                <div className="invalid-feedback">
                                    Please provide a house number
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5">
                                <label className="form-label" htmlFor="postalCode">Postalcode</label>
                                <input className="form-control mb-3" id="postalCode" type="text" name="postalCode" value={formValue.postalCode} onChange={handleChange} required  />
                                <div className="invalid-feedback">
                                    Please provide a postal code
                                </div>
                            </div>
                            <div className="col-7">
                                <label className="form-label" htmlFor="country">Country</label>
                                <select id="country" className="form-select mb-3" name="country" value={formValue.country} onChange={handleChange} required >
                                    <option selected disabled value="">Select a country</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a country
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <button className="col-8 btn btn-lg btn-primary" onClick={handleSubmit} type="button">CREATE</button>
                            <button className="col-2 offset-1 btn btn-lg btn-secondary">CANCEL</button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}

export default CreateCustomerForm;