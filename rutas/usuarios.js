const express = require('express');
const router = express.Router();
const User = require('../dbs_modelos/usuarios');
const bcrypt = require('bcryptjs');

// POST /usuarios/registro
router.post('/registro', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existe = await User.findOne({ email });
    if (existe) return res.status(400).json({ message: 'El correo ya está registrado' });

    const hash = await bcrypt.hash(password, 10);
    const nuevoUsuario = new User({ username, email, password: hash });
    await nuevoUsuario.save();

    res.status(201).json({ message: 'Usuario creado', usuario: { username, email } });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
});

// POST /usuarios/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await User.findOne({ email });
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });

    const valido = await bcrypt.compare(password, usuario.password);
    if (!valido) return res.status(401).json({ message: 'Contraseña incorrecta' });

    res.json({ message: 'Login exitoso', usuario: { id: usuario._id, username: usuario.username } });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
});

module.exports = router;