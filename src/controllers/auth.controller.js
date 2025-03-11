const {ADMIN_USER, ADMIN_PASSWORD, SECRET_KEY} = process.env

import jwt from 'jsonwebtoken'

export const loginAdminUser = async (req, res) => {

  const { user, password } = req.body;

  if (user === ADMIN_USER && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ user }, SECRET_KEY, { expiresIn: "2h" });
    return res.json({ token });
  }

  res.status(401).json({ message: "Credenciales incorrectas" });
}