var isString = require("is_string"),
    isBoolean = require("is_boolean"),
    camelize = require("camelize"),
    underscore = require("underscore");


module.exports = foreignKey;


function foreignKey(string, key, camelized, lowFirstLetter) {
    if (isBoolean(key)) {
        lowFirstLetter = camelized;
        camelized = key;
        key = "id";
    }

    key = isString(key) ? key : "id";

    if (camelized !== false) {
        return camelize(string + "_" + key, lowFirstLetter);
    } else {
        return underscore(string + "_" + key);
    }
}
