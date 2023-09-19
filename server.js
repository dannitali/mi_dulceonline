// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/users', async (req, res) => {
  try {
    // Aquí haremos una solicitud a una API ficticia para obtener datos de usuarios
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
