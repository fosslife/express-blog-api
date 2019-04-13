const r = require('express').Router();
const db = require('../db');

r.post('/', (req, res, next) => {
    next();
}, async (req, res) => {
    const payload = req.body;
    await db.insert(payload);
    res.json({ status: 'Success!' });
});

r.get('/:slug', async (req, res) => {
    const searchCriteria = req.params;
    const doc = await db.findOne(searchCriteria);
    res.json(doc);
})

module.exports = r;