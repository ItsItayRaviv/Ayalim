const { PrismaClient } = require('../node_modules/@prisma/client');
const prisma = new PrismaClient();

async function getOccasions() {
    try {
        return await prisma.occasionTest2.findMany();
    } catch (error) {
        console.log('failed to use get occasions ' + error)
    }
}

async function createOccasion(name, location, date, hour) {
    try {
        const newOccasion = await prisma.occasionTest2.create({
            data: {
                name: name,
                location: location,
                date: date,
                hour: hour
            }
        })
        console.log(newOccasion);
    } catch (error) {
        
    }
}

module.exports = {
    getOccasions,
    createOccasion
}