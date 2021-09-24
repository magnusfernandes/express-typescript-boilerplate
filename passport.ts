import passport from 'passport';
import passportJWT from 'passport-jwt';
import { User } from './src/models';
import config from './config';

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

let jwtOptions: passportJWT.StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT")
};
jwtOptions.secretOrKey = config.secret;

const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  User.findOne({
    where: {
      id: jwt_payload.id
    }
  }).then((user) => {
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
  });
});

passport.use(strategy);

export { passport };
