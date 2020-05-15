'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Products', // name of Source model
        'producer_id', // name of the key we're adding
        {
          type: Sequelize.UUID,
          references: {
            model: 'Producers', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'Products', // name of Source model
        'producer_id' // key we want to remove
    );
  }
};
