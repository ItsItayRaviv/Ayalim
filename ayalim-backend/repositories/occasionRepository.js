const { PrismaClient } = require('../node_modules/@prisma/client');
const prisma = new PrismaClient();

async function getOccasions() {
    console.log('starting get Occasions')
    try {
        console.log('trying to retrieve All Occasions from prisma')
        return await prisma.occasionTest1.findMany();
    } catch (error) {
        console.log('failed to use await prisma.occasionTest1.findMany()')
    }
}

module.exports = {
    getOccasions
}