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


  const statistic = Array.from({length:4}).map(()=>({
    value: faker.finance.amount(),
    name: faker.internet.userName()
  }))

  data.statistic = statistic


  const live = ({
    cpu: faker.random.number({max:110}),
    meun: faker.random.number({max:1000}),
    address: `${faker.address.secondaryAddress()} ${faker.address.country()} ${faker.address.streetAddress()}`,
    remark: faker.hacker.verb(),
    version: "v0.1"
  })

  data.live = live

  return data
}
