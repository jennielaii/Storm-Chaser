'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        firstName: 'Jake',
        lastName: 'Arnquist',
        email: 'test1@test.com',
        region: 'Mid-West',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Luis',
        lastName: 'Lopez',
        email: 'test2@test.com',
        region: 'North West',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jennie',
        lastName: 'Lai',
        email: 'test3@test.com',
        region: 'West',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Muttalip',
        lastName: 'Aydemir',
        email: 'test4@test.com',
        region: 'South West',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Deanna',
        lastName: 'Whitfield',
        email: 'test5@test.com',
        region: 'South East',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Hein',
        lastName: 'Min Tun',
        email: 'test6@test.com',
        region: 'Mid-Atlantic',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
