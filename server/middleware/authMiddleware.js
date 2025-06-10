const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  try {
    const token = req.headers?.authorization?.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decodedToken.userId;

    next();
  } catch (err) {
    res.status(401).send({
      success: false,
      message: err.message,
    });
  }
};
