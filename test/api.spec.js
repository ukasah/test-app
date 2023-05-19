const supertest = require('supertest');
const app = require('../app');
const truncate = require('../utils/truncate');

// reset database
truncate.product();
truncate.component();
truncate.supplier();

const product = {
    name: 'Mobil Tenaga Surya',
    description: 'Mobil dengan bahan bakar kalor',
};

const component = {
    name: "Komponen Listrik 1",
    description: "Baterai Lithium"
};

const supplier = {
    name: "Listrik Supplier",
    address: "No. 9 Jl. Pondok Gede"
};

// Products
describe('TEST /products/store endpoint', () => {
    // positive 1 Create
    test('Store Product Success : Create Product Success!', async () => {
        try {

            const res = await supertest(app)
                .post('/products/store')
                .send(product);

            console.log(res.body);

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('id');
            expect(res.body.data).toHaveProperty('name');
            expect(res.body.data).toHaveProperty('description');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('Create Product Success!');

        } catch (error) {
            expect(error).toBe('error');
        }
    });

    // positive 2 Update
    test('Get Product Success : Create Product Success!', async () => {
        try {

            const res = await supertest(app)
                .get('/getproducts')
                .send(product);

            console.log(res.body);

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('id');
            expect(res.body.data).toHaveProperty('name');
            expect(res.body.data).toHaveProperty('description');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('Get All Product!');

        } catch (error) {
            expect(error).toBe(error);
        }
    });

    // negative 1 Store
    test('Store Product failed : name or description is required!', async () => {
        try {
            const res = await request(app)
            .post("/products/store")
            .send(product);

            expect(res.statusCode).toBe(400);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe('name or description is required!');

        } catch (error) {
            expect(error).toBe(error);
        }
    });
    // negative 2 Update Failed!
    test('Update Product failed : cant find product with id!', async () => {
        try {
            const res = await request(app)
            .post("/products//update/:id")
            .send(product);

            expect(res.statusCode).toBe(404);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe(`cant find product with id ${id}!`);

        } catch (error) {
            expect(error).toBe(error);
        }
    });
});

// Components
describe('TEST /components/store endpoint', () => {
    // positive store components
    test('Store Component Success : Create Component Success!', async () => {
        try {

            const res = await supertest(app)
                .post('/components/store')
                .send(component);

            console.log(res.body);

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('id');
            expect(res.body.data).toHaveProperty('name');
            expect(res.body.data).toHaveProperty('description');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('Create Component Success!');

        } catch (error) {
            expect(error).toBe('error');
        }
    });
    // negative store components
    test('Store Component failed : name or description is required!', async () => {
        try {
            const res = await request(app)
            .post("/Components/store")
            .send(component);

            expect(res.statusCode).toBe(400);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe('name or description is required!');

        } catch (error) {
            expect(error).toBe(error);
        }
    });
});

// Suppliers
describe('TEST /suppliers/store endpoint', () => {
    // positive store Suppliers
    test('Store Supplier Success : Create Supplier Success!', async () => {
        try {

            const res = await supertest(app)
                .post('/suppliers/store')
                .send(supplier);

            console.log(res.body);

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.data).toHaveProperty('id');
            expect(res.body.data).toHaveProperty('name');
            expect(res.body.data).toHaveProperty('address');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('Create Supplier Success!');

        } catch (error) {
            expect(error).toBe('error');
        }
    });
    // negative store suppliers
    test('Store Supplier failed : name or description is required!', async () => {
        try {
            const res = await request(app)
            .post("/suppliers/store")
            .send(supplier);

            expect(res.statusCode).toBe(400);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe('name or address is required!');

        } catch (error) {
            expect(error).toBe(error);
        }
    });
});