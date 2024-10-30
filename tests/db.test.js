const db = require('../src/db')

test('check if phone method return 8 digits',  () => {
    expect(db.getPhone().phone.length).toBe(8)
})

test('check if cpr is 10 digits', () => {
    expect(db.getCPRNameGender().cpr.length).toBe(10)
})

test('check if persons method can return 100 people', async () => {
    const persons = await db.getPersons(100);
    expect(persons.length).toBe(100)
})

test('check if persons method can return min. value which is 2', async () => {
    const persons = await db.getPersons(2);
    expect(persons.length).toBe(2)
})





