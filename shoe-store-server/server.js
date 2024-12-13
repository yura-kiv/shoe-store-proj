require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const productsRoutes = require('./routes/productsRoutes');
const usersRoutes = require('./routes/usersRoutes');

connectDB();

const app = express();
const port = process.env.port || 3000;

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3001',
  })
);

app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'url: .../api/route_name' });
});
app.use('/api/products/', productsRoutes);
app.use('/api/user/', usersRoutes);
app.use('/img', express.static('./img'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
