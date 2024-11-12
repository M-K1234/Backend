// @flow
const { Sequelize, DataTypes } = require('sequelize')
const persons = require('./../src/persons')
//sss
const phoneDigits = [
  '2', '30', '31', '40', '41', '42', '50', '51', '52', '53', '60', '61', '71', '81', '91', '92', '93', '342', 
  '344', '345', '346', '347', '348', '349', '356', '357', '359', '362', '365', '366', '389', '398', '431', 
  '441', '462', '466', '468', '472', '474', '476', '478', '485', '486', '488', '489', '493', '494', '495', 
  '496', '498', '499', '542', '543', '545', '551', '552', '556', '571', '572', '573', '574', '577', '579', 
  '584', '586', '587', '589', '597', '598', '627', '629', '641', '649', '658', '662', '663', '664', '665', 
  '667', '692', '693', '694', '697', '771', '772', '782', '783', '785', '786', '788', '789', '826', '827', '829'
];

const connect = async ( ) => {
    try {
      const sequelize = new Sequelize('addresses', 'root', 'ali1234', {
        host: 'localhost',
        dialect: 'mysql'
      });
        await sequelize.authenticate();
        return sequelize;
      } catch (error) {
        return error;
      }
}

 
const closeConnection = (connection) => {
    connection.close()
}




const getAllAddresses = async (connection) => {
  const postalCode = connection.define(
    'postal_code',
    {
      cPostalCode: {
        type: DataTypes.INTEGER
      },
      cTownName: {
        type: DataTypes.STRING
      }
    },
    {freezeTableName: true}
  )
  const postalCodes = await postalCode.findAll({
    attributes: ['cPostalCode', 'cTownName']
  })

  return postalCodes;
}

const getNameGender = () => {
var obj = {};
        const json = JSON.stringify(persons.personData)
      const randomPerson = JSON.parse(json);
        const randomNumber = Math.floor(Math.random() * 536);
        const person = randomPerson.persons[randomNumber]
        obj = {
          firstname: person.name,
          lastname: person.surname,
          gender: person.gender
        }
        return obj;
  }

  const getNameGenderBirth = () => {

    var dd = 0;
    var mm = 0;
    var yy = 0;
    var date =new Date();
    var year4digitNumber = 0;
    var year2digitsString = "";
    var obj = {};

    // months with 31 days
    const unevenMonths = ['01', '03','05','07','08','10','12']

    const json = JSON.stringify(persons.personData)
    const randomPerson = JSON.parse(json);
    const randomNumber = Math.floor(Math.random() * 536);
    const person = randomPerson.persons[randomNumber];

 
      dd = Math.floor((Math.random() * 31))+1;
      mm = Math.floor((Math.random() * 12))+1;
      if(mm < 10)
        {
          mm = '0' + mm;
        }
    

      year4digitNumber = Math.floor((Math.random() * (new Date().getFullYear() - 1930)) ) +1930;
      year2digitsString = year4digitNumber.toString().slice(-2);
      yy = parseInt(year2digitsString)
      date = new Date(year4digitNumber+'/'+dd+'/'+mm);   
      
      for(let i = 0; i<unevenMonths.length;i++)
      {
        if(mm.toString().localeCompare(unevenMonths[i]) == 0)
        {

          if(dd < 10)
            {
              dd = '0'+dd;
            }

          

          obj = {
            firstname: person.name,
            lastname: person.surname,
            birth: dd.toString()+mm.toString()+yy.toString()
          }

          return obj;
        }
      }

     

      if(dd == 31)
      {
        dd = dd-1;
      }

      if(dd < 10)
        {
          dd = '0'+dd;
        }
    
    obj = {
      firstname: person.name,
      lastname: person.surname,
      birth: dd.toString()+mm.toString()+yy.toString()
    }

    return obj;
}

const getCPRNameGender = () => {
  const nameGender = getNameGender();
  const getBirth = getNameGenderBirth();
  var obj = {};
  var cpr4Digits = 0;
  var cpr = '';

  while(true)
  {
    cpr4Digits = Math.floor(Math.random() * (9999-1000)+1000);

    if(cpr4Digits % 2 == 0 && nameGender.gender == 'female')
    {
      cpr = getBirth.birth + cpr4Digits;
      break;
    } else if(cpr4Digits % 2 !== 0 && nameGender.gender == 'male')
    {
      cpr = getBirth.birth + cpr4Digits;
      break;
    }
  }

  obj = {
    cpr: cpr,
    firstname: nameGender.firstname,
    lastname: nameGender.lastname,
    gender: nameGender.gender
  }
  return obj;
}

const getCPRNameGenderBirth = () => {
  const nameGender = getNameGender();
  const getBirth = getNameGenderBirth();
  var obj = {};
  var cpr4Digits = 0;
  var cpr = '';

  while(true)
  {
    cpr4Digits = Math.floor(Math.random() * (9999-1000))+1000;

    if(cpr4Digits % 2 == 0 && nameGender.gender == 'female')
    {
      cpr = getBirth.birth + cpr4Digits;
      break;
    } else if(cpr4Digits % 2 !== 0 && nameGender.gender == 'male')
    {
      cpr = getBirth.birth + cpr4Digits;
      break;
    }
  }

  obj = {
    cpr: cpr,
    firstname: nameGender.firstname,
    lastname: nameGender.lastname,
    gender: nameGender.gender,
    birth: getBirth.birth
  }
  return obj;
}
//dssdfds
const getAddress =  (addresses) => {
  const characters  = ['q', 'w', 'e','r','t','y','u','i','o','p']
  var randomText = '';
  const randomLength = Math.floor(Math.random() * (20-10))+10;
  const number = Math.floor(Math.random() * (999-1))+1;
  const numberWithLetter = number + characters[Math.floor(Math.random() * characters.length)].toUpperCase();
  var floor = '';
  const randomFloorNumber = Math.floor(Math.random() * 99);
  var door = '';
  const doorOption1 = ['tv','mf','th']
  const doorOption2 = Math.floor(Math.random() * 50)+1;
  const doorOption3LetterChoice = Math.floor(Math.random() * characters.length);
  const doorOption3 = characters[doorOption3LetterChoice].toString() + (Math.floor(Math.random() * 999)+1).toString();
  const randomDoorChoice = Math.floor(Math.random() * 3);
  var postal_code = 0;
  var town = '';
  const randomAddressChoice = Math.floor(Math.random() * addresses.length);
  var obj = {};

  //floor
  if(randomFloorNumber == 0)
  {
    floor = 'st'
  }else{
    floor = randomFloorNumber;
  }

  //door
  if(randomDoorChoice == 0)
  {
    door = doorOption1[Math.floor(Math.random() * 3)]
  } else if(randomDoorChoice == 1)
  {
    door = doorOption2;
  } else {
    door = doorOption3;
  }

  // street
  for(let i = 0; i < randomLength; i++)
  {
    const randomNumber = Math.floor(Math.random()*characters.length)
    randomText = randomText + characters[randomNumber];
  }

  // postal code and town
  postal_code = addresses[randomAddressChoice].cPostalCode;
  town = addresses[randomAddressChoice].cTownName;

  obj = {
    street: randomText,
    number: numberWithLetter,
    door: door,
    floor: floor,
    postal_code: postal_code,
    town: town
  }

  return obj;
}

const getPhone = () => {
  var phoneNumber = '';
  var obj = {}
  var loop2Iterations = 0;

  for(let i = 0; i < 2; i++)
  {
    phoneNumber= phoneNumber+phoneDigits[Math.floor(Math.random() * phoneDigits.length)].toString();
  }
 
  loop2Iterations= 8 - phoneNumber.length;
 
  for(let i = 0; i < loop2Iterations; i++)
    {
    phoneNumber = phoneNumber + Math.floor(Math.random() * 9).toString();
  }

  obj = {
    phone: phoneNumber
  };

  return obj;
}

const getPerson = async (address, cprNameGenderBirth, phone) => {
  var obj = {};


  obj = {
    firstname: cprNameGenderBirth.firstname,
    lastname: cprNameGenderBirth.surname,
    gender: cprNameGenderBirth.gender,
    cpr: cprNameGenderBirth.cpr,
    birth: cprNameGenderBirth.birth,
    address: {
      street: address.street,
      number: address.number,
      floor: address.floor,
      door: address.door,
      postalCode: address.postal_code,
      town: address.town
    },
    phone: phone.phone,

  }
  return obj;
}

const getPersons = async (quantity, cprNameGenderBirth, address, phone) => {
  var obj = {};
  var persons = [];

  for(let i = 0; i < quantity; i++)
  {
    obj = {
      firstname: cprNameGenderBirth.firstname,
      lastname: cprNameGenderBirth.lastname,
      gender: cprNameGenderBirth.gender,
      cpr: cprNameGenderBirth.cpr,
      birth: cprNameGenderBirth.birth,
      address: {
        street: address.street,
        number: address.number,
        floor: address.floor,
        door: address.floor,
        postalCode: address.postal_code,
        town: address.town
      },
      phone: phone.phone,
  
    };
    persons[i] = obj;
  }

  return persons;
}

module.exports = {
  connect: connect,
    closeConnection: closeConnection,
    getNameGender: getNameGender,
    getNameGenderBirth: getNameGenderBirth,
    getCPRNameGender: getCPRNameGender,
    getCPRNameGenderBirth: getCPRNameGenderBirth,
    getAddress: getAddress,
    getAllAddresses: getAllAddresses,
    getPhone: getPhone,
    getPerson: getPerson,
    getPersons: getPersons
}
  