const { PrismaClient } = require('../node_modules/@prisma/client');
const prisma = new PrismaClient();

async function getTest(){
    try {
        console.log('this is a test');
        await prisma.doctor.create({
            data: {
                name: 'itay',
                email: 'fsa@adsf.com',
                password: '1234',
                phoneNumber: '123421',
            }
        })
        console.log('after this');
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = {
    getTest
}