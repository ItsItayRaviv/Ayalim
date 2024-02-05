const express = require('express');
const app = express();
app.use(express.json());

const fs = require('fs');

const { getOccasions, createOccasion } = require('./repositories/occasionRepository')

const cors = require('cors');
app.use(cors());


const port = 3000;


//const test = require('./repositories/test')
//test.getTest();
//createOccasion('with 4', 'the pub', new Date(2024, 2, 11, 12, 15), 'jut some random textcome lolol');

app.get('/occasions', async (req, res) => {
    try {
        const occasions = await getOccasions();
        res.json(occasions);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
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

app.post('/add-occasion', async (req, res) => {
    console.log('got occation/add');
    const data = req.body;
    try {
        createOccasion(data.name, data.location, new Date(data.dateTime), data.description);
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
