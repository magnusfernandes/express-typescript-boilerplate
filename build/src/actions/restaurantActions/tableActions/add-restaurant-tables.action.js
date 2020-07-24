"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRestaurantTables = void 0;
const errors_1 = require("../../../errors");
exports.addRestaurantTables = (requestBody, currentUser, targetRestaurant) => __awaiter(void 0, void 0, void 0, function* () {
    if (currentUser.role != 'superadmin') {
        throw new errors_1.NotAuthorizedError("You're not authorized to perform this function.");
    }
    _validateRequest(requestBody);
    const tables = requestBody.tables;
    let tablesGenerated = [];
    for (let i = 0; i < tables.length; i++) {
        const { nickname } = tables[i];
        let table = yield targetRestaurant.createTable({
            nickname,
            code: generateCode(6)
        });
        tablesGenerated.push({
            id: table.id,
            code: table.code,
            nickname: table.nickname,
            status: table.status
        });
    }
    return Promise.resolve({
        tables: tablesGenerated
    });
});
const _validateRequest = (request) => {
    if (!(request.tables && request.tables instanceof Array)) {
        throw new errors_1.BadRequestError("Missing tables attribute");
    }
};
const generateCode = (length) => {
    let result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
