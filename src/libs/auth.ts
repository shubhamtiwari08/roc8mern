import { sign, verify, SignOptions } from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key'; // Change this to a strong secret in production

interface UserPayload {
  name: string;
  email: string;
  password: string;
  // Add more user properties as needed
}

// Define type for options parameter in sign function
interface SignOptionsWithExpires extends SignOptions {
  expiresIn: string | number;
}

export const generateToken = (userPayload: UserPayload): string => {
  const options: SignOptionsWithExpires = { expiresIn: '1h' };
  return sign(userPayload, SECRET_KEY, options);
};

export const verifyToken = (token: string): UserPayload | null => {
  try {
    const decoded = verify(token, SECRET_KEY) as UserPayload;
    return decoded;
  } catch (error) {
    return null;
  }
};
