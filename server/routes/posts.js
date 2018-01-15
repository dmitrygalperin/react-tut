import express from 'express';

let router = express.Router();

var posts = [];

router.get('/', (req, res) => {
  res.json({posts: posts});
});

router.post('/', (req, res) => {
  posts.push(req.body);
  res.json({ success: true });
});

export default router;
