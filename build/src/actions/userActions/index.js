"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserActions = void 0;
const get_profile_action_1 = require("./get-profile.action");
const get_all_users_action_1 = require("./get-all-users.action");
const create_new_user_action_1 = require("./create-new-user.action");
const get_single_user_action_1 = require("./get-single-user.action");
const update_user_action_1 = require("./update-user.action");
const delete_user_action_1 = require("./delete-user.action");
const UserActions = {
    getProfile: get_profile_action_1.getProfile,
    getAllUsers: get_all_users_action_1.getAllUsers,
    createNewUser: create_new_user_action_1.createNewUser,
    getSingleUser: get_single_user_action_1.getSingleUser,
    updateUser: update_user_action_1.updateUser,
    deleteUser: delete_user_action_1.deleteUser
};
exports.UserActions = UserActions;
