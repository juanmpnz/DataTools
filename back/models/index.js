const db = require("../db");
const FeatureErrors = require("./FeatureErrors");
const Tools = require("./Tools")
const User = require("./User")


FeatureErrors.belongsToMany(User , { through: "Votes" })
User.belongsToMany(FeatureErrors, { through: "Votes" });

Tools.hasMany(FeatureErrors);
FeatureErrors.belongsTo(Tools);


module.exports={
    db,
    FeatureErrors,
    Tools,
    User,    
}