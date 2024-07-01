"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = require("express");
var typeorm_1 = require("typeorm");
var ormconfig_1 = require("./config/ormconfig");
var body_parser_1 = require("body-parser");
var productRoutes_1 = require("./routes/productRoutes");
var userRoutes_1 = require("./routes/userRoutes");
var errorHandler_1 = require("./middlewares/errorHandler");
(0, typeorm_1.createConnection)(ormconfig_1.default).then(function () {
    var app = (0, express_1.default)();
    app.use(body_parser_1.default.json());
    app.use('/api', productRoutes_1.default);
    app.use('/api', userRoutes_1.default);
    app.use(errorHandler_1.errorHandler);
    var port = process.env.PORT || 3000;
    app.listen(port, function () {
        console.log("Server is running on port ${port}");
    });
}).catch(function (error) { return console.log(error); });
