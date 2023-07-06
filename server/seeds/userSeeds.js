const mongoose = require('mongoose');
const User = require('../models/User');

const userSeed = [
  {
    userName: 'root',
    firstName: 'root',
    lastName: 'root',
    email: 'root@root.com',
    password: 'root12345',
  },
  {
    userName: 'BrandonRocks',
    firstName: 'Charles',
    lastName: 'Kilgore',
    email: 'brandon@test.com',
    password: 'Testpass123',
  },
  {
    userName: 'AwesomeLillian',
    firstName: 'Lillian',
    lastName: 'Hughes',
    email: 'Lillian@test.com',
    password: 'Testpass234',
  },
  {
    userName: 'RaiyaSunshine',
    firstName: 'Raiya',
    lastName: 'Young',
    email: 'Raiya@test.com',
    password: 'Testpass345',
  },
  {
    userName: 'CoolEthan',
    firstName: 'Ethan',
    lastName: 'Hilston',
    email: 'Ethan@test.com',
    password: 'Testpass456',
  },
];

module.exports = userSeed;
