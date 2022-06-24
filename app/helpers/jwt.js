const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
module.exports = {

  jwtTokens(myData) {
    // faire un tri des données à garder dans le token ci-dessous
    const dataToken = { myData };
    return {
      access_token: jwt.sign(dataToken, process.env.ACCESS_TOKEN_SECRET, { algorithm: 'HS256', expiresIn: '5h' }),
      refresh_token: jwt.sign(dataToken, process.env.REFRESH_TOKEN_SECRET, { algorithm: 'HS256', expiresIn: '2h' }),
    };
  },
};
