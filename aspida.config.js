import { config } from 'dotenv';

config({ path: './.env' });

module.exports = {
  input: './src/api/',
  baseURL: `${process.env.API_ORIGIN ?? ''}${process.env.API_BASE_PATH ?? ''}`,
};
