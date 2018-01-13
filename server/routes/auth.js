import express from 'express';
import jwt from 'jsonwebtoken';

let router = express.Router();

router.post('/', (req, res) => {
  const user = {
    username: 'a',
    password: 'a'
  }
  const { username, password } = req.body;

  if(username == user.username && password == user.password) {
    const token = jwt.sign({
      username: user.username
    }, 'supersecret');
    res.json({ token });
  } else {
    res.status(401).json({ errors: { form: 'Invalid Credentials' } });
  }
});

export default router;
