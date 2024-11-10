
const db = require('../src/db')

test('check if phone method return 8 digits',  () => {
    expect(db.getPhone().phone.length).toBe(8)
})

    
test('check if cpr is 10 digits', () => {
        expect(db.getCPRNameGender().cpr.length).toBe(10)
   
    })





test('check if persons method can return 100 people', async () => {
    const connection = await db.connect();
    const addresses = await db.getAllAddresses(connection);
    const cprNameGenderBirth = db.getCPRNameGenderBirth();
    const phone = db.getPhone();
    const persons = await db.getPersons(100, cprNameGenderBirth, addresses, phone);
    expect(persons.length).toBe(100)
    db.closeConnection(connection)
})

test('check if persons method can return min. value which is 2', async () => {
    const connection = await db.connect();
    const addresses = await db.getAllAddresses(connection);
    const cprNameGenderBirth = db.getCPRNameGenderBirth();
    const phone = db.getPhone();
    const persons = await db.getPersons(2, cprNameGenderBirth, addresses, phone);
    expect(persons.length).toBe(2)
    db.closeConnection(connection)
})





