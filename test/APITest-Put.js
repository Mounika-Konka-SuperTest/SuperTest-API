import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://gorest.co.in/public/')
const TOKEN = '630c66f7ad21c572f05cee992e95a8f2b549ed2e7432da9d53de4927546cb2dd';

describe('PUT - users', () => {
    it('Put request test', () => {
            const data= {
                name: `ChittiMK${Math.floor(Math.random() * 1000)}`,
                email: `chittiMK${Math.floor(Math.random() * 9999)}@example.com`,
                gender: 'female',
                status: 'inactive'
            }
            return request.
            put('v2/users/7985404').
            set('Authorization', `Bearer ${TOKEN}`).
            send(data).
            then((res) => {
            //const res = await request.put(url).send(payload);
             console.log(res.body); // Debug the response
             expect(res.body).to.not.be.undefined;
             expect(res.body).to.deep.include(data);
            expect(res.body).to.deep.include(data)
            });
});
});