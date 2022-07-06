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
     *
    */
    await queryInterface.bulkInsert('Cities', [{
      city_name: 'Москва',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      city_name: 'Сочи',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      city_name: 'Саратов',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      city_name: 'Краснодар',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      city_name: 'Омск',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      city_name: 'Уфа',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    // **
    //  * Add commands to revert seed here.
    //  *
    //  * Example:
    await queryInterface.bulkDelete('Cities', null, {});
  },
};
