const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    let token = req.header("x-auth-token");
    if (!token) return res.status(401).json({ msg: "Sesión no iniciada" });

    let verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified)
      if (!token) return res.status(401).json({ msg: "Sesión no iniciada" });

    // console.log(verified);
    req.user = verified.id;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = auth;
