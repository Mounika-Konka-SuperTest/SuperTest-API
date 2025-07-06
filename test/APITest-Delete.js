import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://gorest.co.in/public/')
const TOKEN = '630c66f7ad21c572f05cee992e95a8f2b549ed2e7432da9d53de4927546cb2dd';

describe('DELETE - users', () => {
    it('Delete request test', () => {
            return request.
            delete('v2/users/7985402').
            set('Authorization', `Bearer ${TOKEN}`).
            then((res) => {
            //const res = await request.put(url).send(payload);
             console.log(res.body); // Debug the response
            //  expect(res.body).to.not.be.undefined;
            //  expect(res.body).to.deep.include(data);
            // expect(res.body).to.deep.include(data)
            expect(res.body).to.deep.equal({});
            });
});
});