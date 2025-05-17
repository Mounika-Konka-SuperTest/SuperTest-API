import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://gorest.co.in/public/')
const TOKEN = '527246668dcc146507572d9f41a43963bf066f080f8b7fea9c9b2b989d040d6b';

describe('API - users', () => {
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