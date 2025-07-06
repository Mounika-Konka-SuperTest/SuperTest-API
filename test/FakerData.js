import { expect } from 'chai';
import { faker } from '@faker-js/faker';// Importing the faker library to generate random data
import request from '../config/CommonConfig.js';
import { createRandomUser ,createRandomUserwithFakerLibrary } from '../helpers/userApi_helper.js'; 
// const TOKEN = '630c66f7ad21c572f05cee992e95a8f2b549ed2e7432da9d53de4927546cb2dd';
import dotenv from 'dotenv';
dotenv.config();// Load environment variables from .env file
const TOKEN = process.env.USER_TOKEN; // Using environment variable for the token

describe('API -Faker data using for test Users', () => {
    let userID ,postID;
    before('Before tests start' ,async() => {
        // userID = await createRandomUser()
        userID = await createRandomUserwithFakerLibrary(); // Using the new function to create a user with Faker
         console.log('Created user before hook '+userID); // Debug the user ID
            });
    
    describe('POST - Creating a User with Faker libarary', () => {
        it('create a post for that user', async() => {
            // 2. Create post for that user
            const postData= {
                 user_id: Number(userID), // Use the user ID from the previous step
                 title: faker.lorem.sentence(), // Generate a random title      
                 body: faker.lorem.paragraph(), // Generate a random body,
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
            await request.
            get(`v2/posts`).
            set('Authorization', `Bearer ${TOKEN}`).
            expect(200);
            
           });
        });
});