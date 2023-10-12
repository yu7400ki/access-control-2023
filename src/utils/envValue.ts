import dotenv from 'dotenv';

dotenv.config({
  path: './.env',
});

const API_BASE_PATH = process.env.API_BASE_PATH ?? '/api';
const API_ORIGIN = process.env.API_ORIGIN ?? 'http://localhost:8080';

export { API_BASE_PATH, API_ORIGIN };
