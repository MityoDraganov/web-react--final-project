const jwt = require("jsonwebtoken");
const {secret} = require("../config")

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log(token)
  
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secret, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = decodedToken;
    next();
  });
};

module.exports = {authMiddleware};
