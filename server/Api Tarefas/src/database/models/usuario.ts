'use strict';
const {
  Model
} = require('sequelize');
import cpfEhValido from "../../utils/validaCpfHelper.ts"

module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuario.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 30],
          msg: "O campo nome deve ter no minímo 3 caracteres"
        }
      },
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Formato de email inválido!"
        }
      },
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        cpfEhValido(cpf) {
          if (!cpfEhValido(cpf)) throw new Error("Número do CPF inválido");
        }
      }
    },
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};