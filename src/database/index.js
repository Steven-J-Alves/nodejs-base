import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Test from '../models/Test';
// import model from '../models/model';
// import model from '../models/model';

const models = [Test];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
