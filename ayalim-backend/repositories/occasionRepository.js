const { PrismaClient } = require('../node_modules/@prisma/client');
const prisma = new PrismaClient();

async function getOccasions() {
    console.log('occ rep -> get occasions');
    try {
        console.log('trying to get occasions');
        return await prisma.occasionTest1502.findMany();
        console.log('after get occasions');
    } catch (error) {
        console.log('failed to use get occasions ' + error)
    }
}

async function createOccasion(name, location, date, description) {
    try {
        const newOccasion = await prisma.occasionTest1502.create({
            data: {
                name: name,
                location: location,
                dateInput: date,
                description: description
            }
        })
        console.log('created new occasion: ');
        console.log(newOccasion);
    } catch (error) {
        
    }
}

module.exports = {
    getOccasions,
    createOccasion
}