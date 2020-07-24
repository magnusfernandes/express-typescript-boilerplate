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
exports.deleteRestaurantTable = void 0;
const errors_1 = require("../../../errors");
exports.deleteRestaurantTable = (currentUser, targetRestaurant, reqParams) => __awaiter(void 0, void 0, void 0, function* () {
    if (currentUser.role !== 'superadmin') {
        throw new errors_1.NotAuthorizedError('You\'re not authorized to perform this function.');
    }
    if (!reqParams.restaurantTableId) {
        throw new errors_1.BadRequestError('Missing restaurant table ID attribute.');
    }
    let tables = yield targetRestaurant.getTables({
        where: {
            id: reqParams.restaurantTableId
        }
    });
    if (!(tables && tables.length > 0)) {
        throw new errors_1.ResourceNotFoundError("Restaurant table");
    }
    yield tables[0].destroy();
    return Promise.resolve('Table deleted successfully.');
});
