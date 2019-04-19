const r = require('express').Router();
const db = require('../db');
const validateRequest = require('../utils/validateRequests');

r.post('/', async (req, res) => {
    const payload = req.body;
    await db.createPost(payload);
    res.json({ status: 'Success!' });
});

// r.get('/tags', async (req, res) => {
//     const doc = await db.findAll();
//     const tags = doc.reduce((acc, curr) => [...acc, ...curr.tags], [])
//         .reduce((acc, curr) => {
//             (curr in acc) ? acc[curr]++ : acc[curr] = 1
//             return acc;
//         }, { });
// res.json(tags);
// })

r.get('/author/:author', (req, res) => {
    const searchCriteria = req.params; // { author: "Spark" }
    const doc = db.findAuthorByName().all(searchCriteria.author);
    console.log(doc);
    res.json(doc);
});

// r.get('/tag/:tag', async (req, res) => {
//     const tags = req.params.tag;
//     const doc = await db.find({ tags: { $in: [tags] } });
//     res.json(doc);
// });

// r.get('/:slug', async (req, res) => {
//     const searchCriteria = req.params;
//     const doc = await db.findOne(searchCriteria);
//     res.json(doc);
// })

module.exports = r;