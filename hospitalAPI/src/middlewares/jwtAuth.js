// Please don't change the pre-written code
// Import the necessary modules here
import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
  // Write your code here
  // 1. Read the token.
  const token = req.cookies.jwtToken;

  // 2. if no token, return the error.
  if(!token){
      return res.status(401).send({ success: false, msg: error });
  }
  // 3. check if token is valid.
  try{
      const payload = jwt.verify(
          token,
          "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz"
      );
  } catch(err){
      // 4. return error.
      console.log(token);
      console.log(err);
      return res.status(401).send({ success: false, msg: error });
  }

  // 5. call next middleware.
  next();
};

export default jwtAuth;
