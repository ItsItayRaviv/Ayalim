const express = require('express');
const app = express();

const fs = require('fs');

const { getOccasions, createOccasion } = require('./repositories/occasionRepository')

const cors = require('cors');
app.use(cors());


const port = 3000;


//const test = require('./repositories/test')
//test.getTest();
createOccasion('tester2', 'my place', new Date(24, 2, 4, 20, 45), '11:30');

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
