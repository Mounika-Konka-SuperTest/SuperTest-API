import supertest from 'supertest';
import { expect } from 'chai';
import { createRandomUser } from '../helpers/userApi_helper.js'; 
const request = supertest('https://gorest.co.in/public/')
const TOKEN = '630c66f7ad21c572f05cee992e95a8f2b549ed2e7432da9d53de4927546cb2dd';

describe('API Posts test Users -Negative test', () => {
    let userID ,postID;
    before('Before tests' ,async() => {
         userID = await createRandomUser()
         console.log('Created user before hook '+userID); // Debug the user ID
            });
    
    describe('POST - Creating a User', () => {
        it('create a post for that user', async() => {
            // 2. Create post for that user
            const postData= {
                 user_id: Number(userID), // Use the user ID from the previous step
                 title: `My test title is newChittiMK`,
                 body: `This is a test post by newChittiMK`,
                }
            const postResponse= await request.
            post('v2/posts').
            set('Authorization', `Bearer ${TOKEN}`).
            send(postData);
            expect(postResponse.body).to.deep.include({
                user_id: Number(userID),
                title: postData.title,
                 body: postData.body
            });
                postID = postResponse.body.id; // Store the post ID for later use
                console.log(postID); // Debug the post ID
           });
        });
    describe('GET - Verifying the User',() => {
        it('GET request test/ Verifying ID to the newly created user', async() => {
            //    const url = `v2/posts/${userID}?access-token=${TOKEN}`;
            //    await request.get(url).then((res) => {
            //        expect(res.body).to.not.be.empty;
            //        expect(res.body.id).to.be.equal(userID);
            //        console.log(res.body.id); 
            await request.
            get(`v2/posts`).
            set('Authorization', `Bearer ${TOKEN}`).
            expect(200);
            
           });
        });
    describe('Negative Tests',() => {
        it('401 authentication failed', async() => {
            const postData= {
                 user_id: Number(userID), // Use the user ID from the previous step
                 title: `My test title is newChittiMK`,
                 body: `This is a test post by newChittiMK`,
                }
            const postResponse= await request.
            post('v2/posts').
            send(postData);
            expect(postResponse.status).to.equal(401);
            expect(postResponse.body.message).to.equal("Authentication failed");
           });  
        });
});