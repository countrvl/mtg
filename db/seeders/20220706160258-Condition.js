module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Сonditions', [{
      condition_name: 'new',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      condition_name: 'middle',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      condition_name: 'old',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      condition_name: 'antiques',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Conditions', null, {});
     */
    await queryInterface.bulkDelete('Сonditions', null, {});
  },
};
