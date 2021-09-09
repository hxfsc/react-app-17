const faker = require("faker/locale/zh_CN")

module.exports = () => {
  const data = { users: [], advanced: [] }

  const users = Array.from({ length: 1000 }).map(() => ({
    name: `${faker.name.lastName()}${faker.name.firstName()}`,
    phone: faker.phone.phoneNumber(),
    age: faker.datatype.number(110),
    address: `${faker.address.secondaryAddress()} ${faker.address.country()} ${faker.address.streetAddress()}`
  }))

  data.users = users

  const advanced = Array.from({ length: 2000 }).map(() => ({
    name: `${faker.name.lastName()}${faker.name.firstName()}`,
    phone: faker.phone.phoneNumber(),
    age: faker.datatype.number(110),
    provined:faker.address.country(),
    city: faker.address.cityName(),
    address: `${faker.address.secondaryAddress()} ${faker.address.country()} ${faker.address.streetAddress()}`
  }))

  data.advanced = advanced

  return data
}
