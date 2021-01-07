const db = require("../db");
const FeatureErrors = require("./FeatureErrors");
const Tools = require("./Tools")

Tools.belongsTo(FeatureErrors)
FeatureErrors.hasMany(Tools)

module.exports={
    db,
    FeatureErrors,
    Tools,
}