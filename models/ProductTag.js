const { Model, DataTypes } = require("sequelize")

const sequelize = require("../config/connection")
const Product = require("./Product")
const Tag = require("./Tag")
class ProductTag extends Model {}
// product_id: 1,
// tag_id: 6,
ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "id",
      },
    },

    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
)

module.exports = ProductTag
