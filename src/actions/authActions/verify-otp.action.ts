import moment from "moment";
import * as jwt from "jsonwebtoken";

import { BadRequestError } from "../../errors";
import { User } from "../../models";
import config from "../../../config";

export const verifyOtp = async (requestBody: any) => {

  _validateRequest(requestBody);

  const { phone, code } = requestBody;

  let user = await User.findOne({
    where: {
      phone
    }
  });

  if (!user) {
    throw new BadRequestError("Please check phone number entered!");
  }

  let otps = await user.getOtps({
    where: {
      code
    },
    order: [
      ['createdAt', 'DESC']
    ]
  });
  if (otps.length == 0) {
    throw new BadRequestError("OTP entrered was incorrect!");
  }
  if (otps[0].sentAt && moment().diff(moment(otps[0].sentAt), 'seconds') > 300) {
    throw new BadRequestError("OTP has expired!");
  }

  let jwtPayload = {
    id: user.id
  };

  let token = jwt.sign(jwtPayload, config.secret);

  return Promise.resolve({
    token: `JWT ${token}`,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      profilePic: user.profilePic,
      role: user.role
    }
  });
}

const _validateRequest = (request: any) => {
  if (!request.phone) {
    throw new BadRequestError("Missing phone attribute");
  }
  if (!request.code) {
    throw new BadRequestError("Missing code attribute");
  }
}