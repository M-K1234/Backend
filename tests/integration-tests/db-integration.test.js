const { Sequelize } = require("sequelize")
const db = require("../../src/db")

    
describe('Get address',  () => {
  

    test('create connection',async () => {
      const connection = await db.connect();
      expect(connection instanceof Sequelize).toBe(true)
      db.closeConnection(connection)
    })
    test('get addresses', async () => { 
      const connection = await db.connect();
      const  addresses =  await db.getAllAddresses(connection)
      const address = db.getAddress(addresses);
      expect(typeof address.street).toBe("string")
      db.closeConnection(connection)
  })

   
})