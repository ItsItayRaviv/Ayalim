const express = require('express');
const fs = require('fs');
const test = require('./repositories/test')
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

test.getTest();

app.get('/api/events', (req, res) => {
    fs.readFile('../testing-data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error readiddng fiele');
            return;
        }
        res.send(JSON.parse(data));
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
