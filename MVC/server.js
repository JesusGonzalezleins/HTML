const express = require('express');
const cors = require('cors');
const path = require('path');
const { obtenerMensaje } = require('./Controller/mensajeController');
const app = express()
const PORT = 3000

// HABILITAR CORS
app.use(cors());

// ruta de html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'index.html')); 
});

// ruta API 
app.get('/api/mensaje', obtenerMensaje);

app.listen(PORT, () => {
    console.log(`Server funcionando en http://localhost:${PORT}`); 
});
