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

// Models
const Item = connection.define('item', { // eslint-disable-line
  name: Sequelize.STRING,
  packed: Sequelize.BOOLEAN,
});


// Actions/queries

// connection.sync().then( () => {
//   // console.log('datastore, this: ', this);
//   Item.create({
//     name: 'Climbing harness 2',
//     packed: false,
//   });
// });

// connection.sync().then( () => {
//   Item.findAll().then( (items) => {// eslint-disable-line
//     // allItems.push(items);
//     // console.log('items ', items); // eslint-disable-line
//   });
// });


export default connection;
