const express = require('express')
const db = require('../src/db')
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(__dirname+'./../public/index.html')
})


router.get('/name-gender',  (req, res) => {
    const records =  db.getNameGender()
    res.json(records)

})
router.get('/name-gender-birth',  (req, res) => {
    const records = db.getNameGenderBirth()
    res.json(records)

})
router.get('/cpr-name-gender',  (req, res) => {
    const records = db.getCPRNameGender()
    res.json(records)

})
router.get('/cpr-name-gender-birth',  (req, res) => {
    const records =  db.getCPRNameGenderBirth()
    res.json(records)

})
router.get('/address', async (req, res) => {
    const connection = await db.connect();
    const addresses = await db.getAllAddresses(connection);
    const records = await db.getAddress(addresses)
    res.json(records)
    db.closeConnection(connection)

})
router.get('/phone', (req, res) => {
    const records =  db.getPhone()
    res.json(records)

})
router.get('/person', async (req, res) => {
    const records = await db.getPerson()
    res.json(records)

})
router.get('/persons/:n', async (req, res) => {
    const connection = await db.connect();
    const addresses = await db.getAllAddresses(connection);
    const address = db.getAddress(addresses)
    const cprNameGenderBirth = db.getCPRNameGenderBirth();
    const phone = db.getPhone();
    const records = await db.getPersons(req.params.n, cprNameGenderBirth, address, phone)
    
    
    res.json(records)

})

module.exports = router;