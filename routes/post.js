const r = require('express').Router();
const db = require('../db');

r.post('/', (req, res, next) => {
    next();
}, async (req, res) => {
    const payload = req.body;
    await db.insert(payload);
    res.json({ status: 'Success!' });
});

r.get('/', async (req, res) => {
    res.end('getting posts');
})

module.exports = r;