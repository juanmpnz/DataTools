const db = require("../db");
const FeatureErrors = require("./FeatureErrors");
const Tools = require("./Tools")
const User = require("./User")

Tools.belongsTo(FeatureErrors)
FeatureErrors.hasMany(Tools)

module.exports={
    db,
    FeatureErrors,
    Tools,
    User,
}