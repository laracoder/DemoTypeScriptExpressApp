"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET users listing.
 */
var express = require("express");
var greeter_1 = require("./../src/greeter");
var router = express.Router();
router.get('/', function (req, res) {
    var Person = { 'firstName': 'Daniel', 'lastName': 'Schmelz' };
    res.send(greeter_1.greeter(Person));
});
exports.default = router;
//# sourceMappingURL=user.js.map