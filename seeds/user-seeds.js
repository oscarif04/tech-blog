const { User } = require('../models');

const userData = [
    {
        username: "person1",
        email: "person@gmail.com",
        password: "person1"
    },
    {
        username: "person2",
        email: "person2@gmail.com",
        password: "person2"
    }  
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;