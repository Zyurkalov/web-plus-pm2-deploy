// export const { JWT_SECRET = 'JWT_SECRET' } = process.env;
// export const { DB_ADDRESS = 'mongodb://localhost:27017/mestodb' } = process.env;
import dotenv from 'dotenv';
dotenv.config({ path: '../.env'});

const { JWT_SECRET, DB_ADDRESS } = process.env;

if (!JWT_SECRET || !DB_ADDRESS) {
  console.error('Ошибка: Переменные окружения JWT_SECRET или DB_ADDRESS не заданы');
  process.exit(1);
}

export { JWT_SECRET, DB_ADDRESS }
