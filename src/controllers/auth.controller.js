const {ADMIN_USER, ADMIN_PASSWORD_HASH, SECRET_KEY} = process.env

import jwt from 'jsonwebtoken'
import crypto from 'crypto'

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

export const loginAdminUser = async (req, res) => {

  const { user, password } = req.body;
  const hashedPassword = hashPassword(password)

  if (user === ADMIN_USER && hashedPassword === ADMIN_PASSWORD_HASH) {
    const token = jwt.sign({ user }, SECRET_KEY, { expiresIn: "2h" });
    return res.json({ token });
  }

  res.status(401).json({ message: "Credenciales incorrectas" });
}