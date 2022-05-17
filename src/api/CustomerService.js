import client from './Client';

export async function addCustomer(newCustomer) {
    await client.post('/customers', newCustomer)
}