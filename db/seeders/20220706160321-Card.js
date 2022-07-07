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
    await queryInterface.bulkInsert('Cards', [{
      title: 'Dream Halls',
      img: 'https://static.wikia.nocookie.net/mtg/images/8/8c/Dream_Halls.jpg/revision/latest?cb=20190814094218&path-prefix=ru',
      price: 100,
      status: true,
      condition_id: 2,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Oubliette',
      img: 'https://static.wikia.nocookie.net/mtg/images/9/96/Oubliette.jpg/revision/latest?cb=20201003173608&path-prefix=ru',
      price: 85,
      status: true,
      condition_id: 3,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Twisted Reflection',
      img: 'https://images.saymedia-content.com/.image/t_share/MTc0NDU3MjY5MzQ4OTM1MzAy/best-entwine-cards-mtg.jpg',
      price: 150,
      status: true,
      condition_id: 1,
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Subtlety',
      img: 'https://i.ebayimg.com/images/g/3tEAAOSw4zdhIM1j/s-l400.jpg',
      price: 50,
      status: true,
      condition_id: 3,
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Undercity Shade',
      img: 'https://mtgsale.ru/cardImage/RAV/ENG/110.jpg',
      price: 30,
      status: true,
      condition_id: 4,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Angler Turtle',
      img: 'https://media.wizards.com/2018/images/magic/G18/en_3hyvdFc69b.png',
      price: 200,
      status: true,
      condition_id: 1,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Cragplate Baloth',
      img: 'https://media.wizards.com/2020/znr/en_xO5b7Nbzm5.png',
      price: 300,
      status: true,
      condition_id: 1,
      user_id: 4,
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
     * await queryInterface.bulkDelete('Cards', null, {});
     */
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
