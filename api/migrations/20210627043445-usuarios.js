'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Developer',{
      id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
      },
      name:{
        allowNull:false,
        type:Sequelize.STRING(100)
      },
      sex:{
        allowNull:false,
        type:Sequelize.CHAR(1)

      },
      
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
