const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configuración de la base de datos
const pool = new Pool({
  connectionString: "postgres://gruasjack_user:3PzFTzvShGDIBrwDvThBLfDRJVL4VFXE@dpg-cl9vhplo7jlc73fk4okg-a.oregon-postgres.render.com/gruasjack",
  ssl: {
    rejectUnauthorized: false
  }
});

// Ruta para obtener todos los usuarios en formato JSON
app.get('/usuarios', async (req, res) => {
  try {
    const client = await pool.connect();

    // Ejecutar la consulta SQL
    const result = await client.query('SELECT * FROM public.usuarios');

    // Liberar el cliente de la conexión
    client.release();

    // Devolver los resultados en formato JSON
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Ruta para obtener todos los usuarios en formato JSON
app.get('/conductores', async (req, res) => {
  try {
    const client = await pool.connect();

    // Ejecutar la consulta SQL
    const result = await client.query('SELECT * FROM public.conductores');

    // Liberar el cliente de la conexión
    client.release();

    // Devolver los resultados en formato JSON
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Ruta para obtener todos los usuarios en formato JSON
app.get('/servicios', async (req, res) => {
  try {
    const client = await pool.connect();

    // Ejecutar la consulta SQL
    const result = await client.query('SELECT * FROM public.servicios');

    // Liberar el cliente de la conexión
    client.release();

    // Devolver los resultados en formato JSON
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Ruta para obtener todos los usuarios en formato JSON
app.get('/historial_viajes', async (req, res) => {
  try {
    const client = await pool.connect();

    // Ejecutar la consulta SQL
    const result = await client.query('SELECT * FROM public.historial_viajes');

    // Liberar el cliente de la conexión
    client.release();

    // Devolver los resultados en formato JSON
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Ruta para obtener todos los usuarios en formato JSON
app.get('/gruas', async (req, res) => {
  try {
    const client = await pool.connect();

    // Ejecutar la consulta SQL
    const result = await client.query('SELECT * FROM public.gruas');

    // Liberar el cliente de la conexión
    client.release();

    // Devolver los resultados en formato JSON
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Ruta principal
app.use((req, res) => {
  res.status(200).send(`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Listados en formato JSON</title>
</head>
<body>

  <div class="container mt-4">
    <h1>Listados en formato JSON</h1>

    <ul class="list-group">
      <li class="list-group-item"><a href="/usuarios">Usuarios</a></li>
      <li class="list-group-item"><a href="/conductores">Conductores</a></li>
      <li class="list-group-item"><a href="/gruas">Grúas</a></li>
      <li class="list-group-item"><a href="/servicios">Servicios</a></li>
      <li class="list-group-item"><a href="/historial_viajes">Historial de Viajes</a></li>
    </ul>
  </div>

  <!-- Bootstrap JS and dependencies -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</body>
</html>
  `);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
