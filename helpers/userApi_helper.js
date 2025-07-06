import supertest from 'supertest';
const request = supertest('https://gorest.co.in/public/')
const TOKEN = '630c66f7ad21c572f05cee992e95a8f2b549ed2e7432da9d53de4927546cb2dd';
import { faker } from '@faker-js/faker';

export const createRandomUser = async () => {
    // 1. Create user every time before running the tests
            const userData= {
                    name: `ChittiMK${Math.floor(Math.random() * 1000)}`,
                    email: `chittiMK${Math.floor(Math.random() * 9999)}@example.com`,
                    gender: 'female',
                    status: 'active'
                  }
            const userResponse= await request.
                post('v2/users').
                set('Authorization', `Bearer ${TOKEN}`).
                send(userData);
                return userResponse.body.id; // return the user ID for later use
}
export const createRandomUserwithFakerLibrary = async () => {
    // 1. Create user every time before running the tests
            const userData= {
                    name: faker.person.fullName(),
                    email: faker.internet.email(),
                    gender: 'female',
                    status: 'active'
                  }
            const userResponse= await request.
                post('v2/users').
                set('Authorization', `Bearer ${TOKEN}`).
                send(userData);
                console.log(userResponse.body); // Debug the response
                return userResponse.body.id; // return the user ID for later use
}