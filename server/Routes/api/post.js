const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// Add Post
router.post('/', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    Name: req.body.name,
    Date: new Date()
  });
  res.status(201).send();
});

// Delete Post
router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send({});
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    // 'mongodb://abc123:rEvoxHQ1FHDERIZT',
    'mongodb+srv://abc123:rEvoxHQ1FHDERIZT@cluster0.bob59.mongodb.net/doctors?retryWrites=true&w=majority',
    {
      useNewUrlParser: true
    }
  );

  return client.db('doctors').collection('doctors');
}

module.exports = router;