const r = require('express').Router();
const db = require('../db');
const validateRequest = require('../utils/validateRequests');

r.post('/', (req, res, next) => {

}, async (req, res) => {
    const payload = req.body;
    await db.insert(payload);
    res.json({ status: 'Success!' });
});

r.get('/tags', async (req, res) => {
    const doc = await db.findAll();
    const tags = doc.reduce((acc, curr) => [...acc, ...curr.tags], [])
        .reduce((acc, curr) => {
            if (curr in acc) {
                acc[curr]++;
            } else {
                acc[curr] = 1;
            }
            return acc
        }, {});
    res.json(tags);
})

r.get('/author/:author', async (req, res) => {
    const searchCriteria = req.params;
    const doc = await db.find(searchCriteria);
    res.json(doc);
});

r.get('/tag/:tag', async (req, res) => {
    const tags = req.params.tag;
    const doc = await db.find({ tags: { $in: [tags] } });
    res.json(doc);
});

r.get('/:slug', async (req, res) => {
    const searchCriteria = req.params;
    const doc = await db.findOne(searchCriteria);
    res.json(doc);
})

module.exports = r;