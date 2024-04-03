import passport from "passport";
import passportJWT from "passport-jwt";

import config from "./config";
import { User } from "./src/models";

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const strategy = new JwtStrategy(
  {
    secretOrKey: config.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
  },
  (jwt_payload, next) => {
    User.findOne({
      where: {
        id: jwt_payload.id,
      },
    }).then((user) => {
      if (user) {
        next(null, user);
      } else {
        next(null, false);
      }
    });
  }
);

passport.use(strategy);

export { passport };
