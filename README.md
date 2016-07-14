foreignKey
=======

attaches foreign key to string

```javascript
var foreignKey = require("@nathanfaucett/foreign_key");

                        // string, key, camelized, lowFirstLetter
var string = foreignKey("string", "id", false,      true);
// string === "string_id"

var string = foreignKey("string", "id", true,      true);
// string === "stringId"
```
