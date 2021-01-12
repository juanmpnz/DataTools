const db = require("../db");
const FeatureErrors = require("./FeatureErrors");
const Tools = require("./Tools")
const User = require("./User")


FeatureErrors.belongsToMany(User , { through: "Votes" })
User.belongsToMany(FeatureErrors, { through: "Votes" });
/* 
User.belongsToMany(Tools, {through: "ToolsCreators"}) //pertenece a muchas
Tools.belongsTo(User, {through: "ToolsCreators"}) //pertenece a muchas */


module.exports={
    db,
    FeatureErrors,
    Tools,
    User,
}