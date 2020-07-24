import { BadRequestError } from "../../errors";
import { User } from "../../models";

export const signup = async (requestBody: any): Promise<any> => {
  _validateRequest(requestBody);

  let user = await User.findOne({
    where: {
      email: requestBody.email
    }
  })

  if (user) {
    throw new BadRequestError('This user email already exists!');
  }

  user = await User.findOne({
    where: {
      phone: requestBody.phone
    }
  })

  if (user) {
    throw new BadRequestError('This user phone already exists!');
  }

  user = await _createUser(requestBody);

  return Promise.resolve({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone
    }
  });
}

const _createUser = async (request: any) => {
  const { name, email, phone } = request;

  return await User.create({
    name,
    email,
    phone
  });
}

const _validateRequest = (request: any) => {
  if (!request.name) {
    throw new BadRequestError("Missing name attribute");
  }
  if (!request.email) {
    throw new BadRequestError("Missing email attribute");
  }
  if (!request.phone) {
    throw new BadRequestError("Missing phone attribute");
  }
  // if (!request.password) {
  //   throw new BadRequestError("Missing password attribute");
  // }
}