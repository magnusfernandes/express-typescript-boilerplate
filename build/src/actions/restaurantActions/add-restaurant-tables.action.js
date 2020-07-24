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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRestaurantTables = void 0;
var errors_1 = require("../../errors");
exports.addRestaurantTables = function (requestBody, currentUser, targetRestaurant) { return __awaiter(void 0, void 0, void 0, function () {
    var tables, tablesGenerated, i, nickname, table;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (currentUser.role != 'superadmin') {
                    throw new errors_1.NotAuthorizedError("You're not authorized to perform this function.");
                }
                _validateRequest(requestBody);
                tables = requestBody.tables;
                tablesGenerated = [];
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < tables.length)) return [3 /*break*/, 4];
                nickname = tables[i].nickname;
                return [4 /*yield*/, targetRestaurant.createTable({
                        nickname: nickname,
                        code: generateCode(6)
                    })];
            case 2:
                table = _a.sent();
                tablesGenerated.push({
                    id: table.id,
                    code: table.code,
                    nickname: table.nickname,
                    status: table.status
                });
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/, Promise.resolve({
                    tables: tablesGenerated
                })];
        }
    });
}); };
var _validateRequest = function (request) {
    if (!(request.tables && request.tables instanceof Array)) {
        throw new errors_1.BadRequestError("Missing tables attribute");
    }
};
var generateCode = function (length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
