const Sequelize = require('sequelize');

const connection = new Sequelize('gear_list', 'username', 'password', {
  dialect: 'sqlite',
  storage: './src/gear_list.sqlite',
});

connection
  .authenticate()
  .then( () => {
    console.log('Connection has been established successfully.'); // eslint-disable-line
  })
  .catch( (err) => {
    console.error('Unable to connect to the database:', err); // eslint-disable-line
  });

const Item = connection.define('item', {
  name: Sequelize.STRING,
  packed: Sequelize.BOOLEAN,
});

connection.sync().then( () => {
  Item.create({
    name: 'Climbing harness 2',
    packed: false,
  });
});

connection.sync().then( () => {
  Item.findAll().then( (items) => {
    console.log('items ', items); // eslint-disable-line
  });
});


export default connection;
