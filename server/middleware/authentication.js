const {jwtVerify} = require('../helper/jwt');

module.exports = (req, res, next) => {
  console.log('auth');
  try {
    req.payload = jwtVerify(req.headers.token);
    next();
  } 
  catch(err) {
    next({
      code: 401,
      msg: err.message
    });
  }
}