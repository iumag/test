'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: "test",
      description: "123",
      price: 12,
      producer_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        name: "product2",
        description: "12345",
        price: 1,
        producer_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
