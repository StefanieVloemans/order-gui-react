import client from './Client';

export async function createCustomer(newCustomer) {
    await client.post('/customers', newCustomer)
}