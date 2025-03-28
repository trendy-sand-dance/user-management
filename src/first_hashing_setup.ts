import bcrypt from 'bcrypt';

class PWProtection
{
  // Number of salt rounds (computational complexity)
  private static SALT_ROUNDS: number = 12;
  static hashPassword(password: string): Promise<string>;
  static verifyPassword(password: string, hashedPassword: string): Promise<boolean>;
}

/**
 * Hash a plain text password
 * @param password Plain text password
 * @returns Hashed password
 */
PWProtection.hashPassword = async function(password: string): Promise<string> {
  // Validate password strength (optional but recommended)
  if (password.length < 8) {
	throw new Error('Password must be at least 8 characters long');
  }

  // Generate salt and hash
  return await bcrypt.hash(password, PWProtection.SALT_ROUNDS);
}

/**
 * Verify a password against its hash
 * @param password Plain text password
 * @param hashedPassword Stored hashed password
 * @returns Boolean indicating if password is correct
 */
PWProtection.verifyPassword = async function(
  password: string, 
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

export default PWProtection;