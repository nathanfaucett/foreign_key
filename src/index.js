var isString = require("@nathanfaucett/is_string"),
    isBoolean = require("@nathanfaucett/is_boolean"),
    camelize = require("@nathanfaucett/camelize"),
    underscore = require("@nathanfaucett/underscore");


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
