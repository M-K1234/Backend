const { Sequelize, DataTypes } = require("sequelize")
const { connect, getAddress, getAllAddresses } = require("../../src/db")

    
describe('Get address',  () => {
  

    test('create connection',async () => {
      const connection = await connect();
      const  addresses =  await getAllAddresses(connection)
      const address = getAddress(addresses);
            expect(connection instanceof Sequelize).toBe(true)

             
    })
    test('get addresses', async () => { 
      const connection = await connect();
const  addresses =  await getAllAddresses(connection)
const address = getAddress(addresses);
      expect(typeof address.street).toBe("string")
  })

   
})