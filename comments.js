//Create web server
const express = require('express');
const app = express();
app.use(express.json());

//Create a list of comments
const comments = [
    {message: 'Hello'},
    {message: 'Hi'}
];

//Create a get request to get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

//Create a get request to get a comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments[req.params.id];
    res.send(comment);
});

//Create a post request to add a comment
app.post('/comments', (req, res) => {
    const comment = {message: req.body.message};
    comments.push(comment);
    res.send(comment);
});

//Create a put request to update a comment by id
app.put('/comments/:id', (req, res) => {
    const comment = comments[req.params.id];
    comment.message = req.body.message;
    res.send(comment);
});

//Create a delete request to delete a comment by id
app.delete('/comments/:id', (req, res) => {
    comments.splice(req.params.id, 1);
    res.send(comments);
});

//Run the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});