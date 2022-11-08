const config = require('dotenv').config();
const Wise = require('transferwise');

const options = {
  sandboxApiTokenKey: config.parsed.TOKEN_API_KEY
};

export const WISE_CLIENT = new Wise(options);