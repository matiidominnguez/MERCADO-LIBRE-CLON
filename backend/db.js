const { Pool } = require('pg');

// Este es el puente entre Node.js y PostgreSQL
const pool = new Pool({
  user: 'postgres',           // Usuario por defecto
  host: 'localhost',          // La DB está en sus propias compus
  database: 'postgres',       // Nombre de la base de datos
  password: 'PONER_ACA_TU_CONTRASEÑA', // <--- ¡OJO! Cada uno pone la suya
  port: 5432,                 // Puerto estándar de Postgres
});

module.exports = pool;