require("dotenv").config();
const jwt = require("jsonwebtoken");

// const privateKey = process.env.JWT_PRIVATE_KEY;
// console.log(privateKey)
privateKey = 'fahadishere'
const generateAuthToken = ({  email,name }) =>
  jwt.sign({ email,name }, privateKey);

const verifyAuthToken = (token) => jwt.verify(token, privateKey);

module.exports = {
  generateAuthToken,
  verifyAuthToken,
};
