const { DataTypes } = require('sequelize');
const db = require('./../../src/db')

test ('get address obj with 6 properties', async () => {
    const result = await db.getAddress();
    expect(Object.keys(result).length).toBe(6)
})