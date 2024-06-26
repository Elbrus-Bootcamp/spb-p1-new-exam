'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Cars',
      [
        {
          model: 'Maserati quattroporte',
          max_speed: 240,
        },
        {
          model: 'Audi R8',
          max_speed: 300,
        },
        {
          model: 'Ferrari Enzo',
          max_speed: 320,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cars', null, {});
  },
};
