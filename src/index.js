import app from './app.js';
import morgan from 'morgan';
import sequelize from './database/database.js';

async function main() {
  try {
    await sequelize.sync({force: false})
    app.use(morgan('dev'))
    app.listen(4000)
    console.log('listen on port 4000')
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();