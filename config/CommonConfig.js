import supertest from 'supertest';
import DevEnv from '../config/DevEnv.js';
const request = supertest(DevEnv.baseUrl);
export default request;