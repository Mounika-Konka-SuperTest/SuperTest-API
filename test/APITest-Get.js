import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://gorest.co.in/public/')
const TOKEN = '630c66f7ad21c572f05cee992e95a8f2b549ed2e7432da9d53de4927546cb2dd';

describe('Get - users', () => {
    it('GET request test', (done) => {
        request.get(
            `v2/users?access-token=${TOKEN}`).end((err, res) => {
            console.log(res.body); // Debug the response
            expect(res.status).to.equal(200);
            //expect(res.body).to.have.property('data');
            expect(res.body.data).to.not.be.empty;
            done();

             //     return request.get(
             //         `v2/users?access-token=${TOKEN}`).end((res) => {
             //         expect(res.body.data).to.not.be.empty;
             // });
        });
     });
   
    it('GET /users/ID test', () => {
        const url = `v2/users/7896432?access-token=${TOKEN}&page=1&gender=male&status=active`;
         request.get(url).then((res) => {
            //console.log(res.body); 
            expect(res.body.data).to.not.be.empty;
            expect(res.body.data.id).to.be.equal(7896432);
            
        });
     });

    it('GET /users with query parameters to test', () => {
        const url = `v2/users?access-token=${TOKEN}&page=1&gender=male&status=active`;
         request.get(url).then((res) => {
            //console.log(res.body); 
            expect(res.body.data).to.not.be.empty;
            res.body.data.forEach((user) => {
                expect(user.gender).to.equal('male')
                expect(user.status).to.equal('active')
            });
        });
    });
});

     
