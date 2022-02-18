import { BadRequestError, ResourceNotFoundError } from "../../errors";
import moment from "moment";
import { User } from "../../models";

export const signin = async (requestBody: any) => {
  _validateRequest(requestBody);

  const { phone } = requestBody;

  let user = await User.findOne({
    where: {
      phone,
    },
  });

  if (!user) {
    throw new ResourceNotFoundError("User");
  }

  if (user) {
    let otp = await user.createOtp({
      code: "331030",
    });

    if (otp) {
      console.log("OTP: ", otp.code);
      otp.sentAt = moment().toDate();
      await otp.save();
    }
  }

  return Promise.resolve(`OTP was sent to your phone.`);
};

const _validateRequest = (request: any) => {
  if (!request.phone) {
    throw new BadRequestError("Missing phone attribute");
  }
};
