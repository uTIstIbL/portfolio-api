const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('aaron_portfolio', 'postgres', 'postgres', {
  host: '127.0.0.1',
  dialect: 'postgres',
});

const About = sequelize.define(
    'Abouts',
    {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      linkRel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      linkHref: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      linkAction: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     }
  )


//  同步資料表
// async function asyncDB() {
//   try {
//       await About.sync({ force: true });
//       console.log( "資料表同步成功！")
//   } catch (error) {
//       console.error(error,"資料表同步失敗！")
//   }
// } 
// asyncDB();