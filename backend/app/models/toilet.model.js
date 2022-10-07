module.exports = (sequelize, Sequelize) => {
  const Toilet = sequelize.define("paperdb",
    {
      number: { // ex) 1_1, 1_2, ... 2_1, 2_2
        type: Sequelize.STRING
      },
      valid: {
        type: Sequelize.BOOLEAN
      },
      published: {  // for test id
        type: Sequelize.BOOLEAN
      }
    },
    // options
    {
      // timestamps: false,
      freezeTableName: true,
      tableName: 'paperdb'
    }
  );
  return Toilet;
};