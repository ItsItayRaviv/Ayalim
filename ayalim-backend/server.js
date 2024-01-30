const express = require('express');
const app = express();

const fs = require('fs');

const { getOccasions } = require('./repositories/occasionRepository')

const cors = require('cors');
app.use(cors());


const port = 3000;


//const test = require('./repositories/test')
//test.getTest();

app.get('/occasions', async (req, res) => {
    try {
        console.log('using get occasions');
        const occasions = await getOccasions();
        console.log('after get occasions');
        res.json(occasions);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});

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
