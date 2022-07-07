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
    await queryInterface.bulkInsert('Users', [{
      name: 'Владимир',
      pass: 123,
      email: 'vladimir@gteto.ru',
      city_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Лиза',
      pass: 123,
      email: 'liza@gteto.ru',
      city_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Кирил',
      pass: 123,
      email: 'kiril@gteto.ru',
      city_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Фрэд',
      pass: 123,
      email: 'fred@gteto.ru',
      city_id: 2,
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
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};
