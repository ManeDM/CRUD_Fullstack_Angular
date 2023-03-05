import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('products_inventory', 'root', '1RedRoc2357', {
    host: 'localhost',
    dialect: 'mysql'

})

export default sequelize;