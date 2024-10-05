import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' } // Token expires in 1 hour
  );
};

const verifyJWT = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

export { generateToken, verifyJWT };
