import { Model, DataTypes, Sequelize } from 'sequelize';
import cpfEhValido from "../../utils/validaCpfHelper";

export class Usuario extends Model {
  public id!: number;
  public nome!: string;
  public email!: string;
  public cpf!: string;
  public senha!: string;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    // Defina associações aqui
  }
}

export default (sequelize: Sequelize) => {
  Usuario.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 30],
          msg: "O campo nome deve ter no mínimo 3 caracteres"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Formato de email inválido!"
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        cpfEhValido(cpf: string) {
          if (!cpfEhValido(cpf)) throw new Error("Número do CPF inválido");
        }
      }
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios', // Nome da tabela no banco de dados
    timestamps: true, // Ativa os campos createdAt e updatedAt
  });

  return Usuario;
};
