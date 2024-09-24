import Sequelize from "sequelize";
import createNotes from "./Notes.js"; // Обратите внимание на измененный импорт

const sequelize = new Sequelize("reactjs", "root", "root", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

const Notes = createNotes(sequelize);

export default {
  sequelize: sequelize,
  notes: Notes,
};
