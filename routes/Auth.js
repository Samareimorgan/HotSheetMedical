const Router = require('express').Router;
const db = require("../models");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = Router();

const createToken = () => {
  return jwt.sign({}, 'secret', { expiresIn: '1h' });
};

router.post('/login', (req, res, next) => {
  const email = req.body.email;
  const pw = req.body.password;
  // Is login valid? 
  // then create token 
  const token = createToken();
  // res.status(200).json({ token: token, user: { email: 'dummy@dummy.com' } });
  res
    .status(401)
    .json({ message: 'Authentication failed, invalid username or password.' });
});

router.post('/signup', (req, res, next) => {
  const email = req.body.email;
  const pw = req.body.password;
  // Hash password and then store in database=> Encryption at Rest
  bcrypt
    .hash(pw, 12)
    .then(hashedPW => {
      // Store hashedPW in database
      db.getdb()
        .db()
        .collection("users")
        .insertOne({
            email:email,
            password:hashedPW
        })
        .then(result=> {
            console.log(result + "Success");
            const token = createToken();
            res.status(201).json({token: token, user: {email:email}})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'User Did Not Get Created.' });
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'User Did Not Get Created.' });
      });
  // Add user to database
});

module.exports = router;