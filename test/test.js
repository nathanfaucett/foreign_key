var assert = require("assert"),
    foreignKey = require("../src/index");


describe("foreignKey(string : String[, key : String[, camelized : Boolean[, lowFirstLetter : Boolean]]])", function() {
    it("should create foreignKey", function() {
        assert.equal(foreignKey("box"), "boxId");
        assert.equal(foreignKey("box", false), "box_id");
        assert.equal(foreignKey("box", false, true), "box_id");
        assert.equal(foreignKey("box", "key", false, true), "box_key");
        assert.equal(foreignKey("box", true, true), "boxId");
        assert.equal(foreignKey("box", true, false), "BoxId");
    });
});
