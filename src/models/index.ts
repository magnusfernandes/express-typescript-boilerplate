import { UserOtp } from "./user-otp.model";
import { User } from "./user.model";

User.hasMany(UserOtp, {
  sourceKey: "id",
  foreignKey: "userId",
  as: "otps",
});

UserOtp.belongsTo(User, {
  targetKey: "id",
  foreignKey: "userId",
});

export { User, UserOtp };
