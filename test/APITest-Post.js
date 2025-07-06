import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://gorest.co.in/public/')
const TOKEN = '630c66f7ad21c572f05cee992e95a8f2b549ed2e7432da9d53de4927546cb2dd';

describe('Post - users', () => {
    it('POST request test', () => {
        const data= {
            name: 'Mounica Gupta',
            email: 'mounicaG@example.com',
            gender: 'female',
            status: 'inactive'
        }
        return request.
        post('v2/users').
        set('Authorization', `Bearer ${TOKEN}`).
        send(data).
        then((res) => {
            // console.log(res.body); // Debug the response
            // expect(res.status).to.eq(data);
            // expect(res.body.email).to.eq(data.email);
            // expect(res.body.name).to.eq(data.name); 
            // expect(res.body.gender).to.eq(data.gender) 
            expect(res.body.data).to.deep.include(data)
        });
    });
});