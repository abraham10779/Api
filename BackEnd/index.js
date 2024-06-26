const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '10mb' }));

app.use('/api/auth', authRoutes);
app.use('/api/usuarios', userRoutes);

app.get('/', (req, res) => {
  res.send('hola desde tu primera ruta de la Api');
});

app.listen(4000, () => console.log('hola soy el servidor'));
