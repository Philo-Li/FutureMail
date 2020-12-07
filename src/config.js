import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', '/.env') });

// console.log('ENV', path.resolve(__dirname, '../.env'), process.env.PORT);

export default {
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  wsLink: process.env.WSLINK,
  graphqlUri: process.env.GRAPHQL_URI,
};
