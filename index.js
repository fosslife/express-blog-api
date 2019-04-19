const express = require('express');
const app = express();
const postRoute = require('./routes/post');
const author = require('./routes/author');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/post', postRoute);
app.use('/author', author);

app.listen(3001, () => {
    process.stdout.write('Server started at 3001\n\n\n\n');
})