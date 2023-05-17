import { Sequelize } from "sequelize";
import connection from '../config/db.js';
import bcrypt from 'bcrypt';

const Dog = connection.define(
    'dog',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey:true
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        breed: {
            type: Sequelize.STRING,
            allowNull: false
        },
        size: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        vaccinated: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        castrated: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
       
    },
    {
        hooks: {
            beforeCreate: async (user) => {
                if(user.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a')
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            },
            beforeUpdate: async () => {
                if(user.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a')
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            }
        }
    }
)

Dog.belongsTo(User, {
    foreignKey: 'idUser'
});

export default User;