// const gt500 = require('../gt500.jpg')
// const vette = require('../vette.jpg')

exports.seed = function(knex, Promise) {
  return knex('cars').del()
    .then(function () {
      return knex('cars').insert([
        {
          vin: 11111,
          year: 2008,
          make: 'Ford',
          model: 'Shelby GT500',
          car_img_url: 'https://i.imgur.com/DwaI0F8.jpg'
        },
        {
          vin: 222222,
          year: 1985,
          make: 'Chevrolet',
          model: 'Corvette',
          car_img_url: 'https://i.imgur.com/YdexObs.jpg'
        },
      ]);
    });
};
