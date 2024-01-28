const { PrismaClient } = require('../node_modules/@prisma/client');
const prisma = new PrismaClient();

async function getTest(){
    try {
        console.log('this is a test');
        await prisma.occasionTest1.create({
            data: {
                name:   'itays 2',
                location:   'my house',
                password:   '12441',
                phoneNumber:    '123212323'
            }
        })
        console.log('after calling to create instance');
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = {
    getTest
}