import { expect } from 'chai';
import request from '../config/CommonConfig.js';
const TOKEN = '630c66f7ad21c572f05cee992e95a8f2b549ed2e7432da9d53de4927546cb2dd';

describe('API Test Users-Test Optimization', () => {
    let userID;
    describe('POST - Users', () => {
        it('Post request test/ Creating Newuser', () => {
        const data= {
            name: `ChittiMK${Math.floor(Math.random() * 1000)}`,
            email: `chittiMK${Math.floor(Math.random() * 9999)}@example.com`,
            gender: 'female',
            status: 'active'
          }
        return request.
        post('v2/users').
        set('Authorization', `Bearer ${TOKEN}`).
        send(data).
        then((res) => {
            console.log(res.body); // Debug the response
            expect(res.body).to.deep.include(data)
            userID = res.body.id; // Store the user ID for later use
            console.log(userID); // Debug the user ID
        });
        });
    
    });
    describe('GET - Users', () => {
        it('GET request test/ Verifying ID to the newly created user', () => {
        const url = `v2/users/${userID}?access-token=${TOKEN}`;
        return request.get(url).then((res) => {
            console.log(res.body); // Debug the response
            expect(res.body).to.not.be.empty;
            expect(res.body.id).to.be.equal(userID);
        });
        });
    });
    describe('PUT - users', () => {
        it('Put request test/ Modifying the data for the existing new user', () => {
                const data= {
                    name: `NewMK${Math.floor(Math.random() * 1000)}`,
                    email: `newchittiMK${Math.floor(Math.random() * 9999)}@example.com`,
                    gender: 'female',
                    status: 'inactive'
                }
                return request.
                put(`v2/users/${userID}`).
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
    describe('DELETE - users', () => {
        it('Delete request test/ Deleting the user', () => {
                return request.
                delete(`v2/users/${userID}`).
                set('Authorization', `Bearer ${TOKEN}`).
                then((res) => {
                console.log(res.body); // Debug the response
                console.log(expect(res.body).to.deep.equal({}));
                });
    });
    });
});