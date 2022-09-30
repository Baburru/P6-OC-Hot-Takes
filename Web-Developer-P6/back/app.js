const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors')

const userRoutes = require('./routes/user')
const saucesRoutes = require('./routes/sauces')

const path = require('path')

const app = express();
app.use(express.json());
app.use(cors())
app.use('/images', express.static(path.join(__dirname, 'images')))


mongoose
  .connect(
    "mongodb+srv://Baburru:bubblejam@cluster0.ucho7s5.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
.then(() => console.log("Connexion à MongoDB réussie !"))
.catch(() => console.log("Connexion à MongoDB échouée !"));


app.use('/api/auth', userRoutes)
app.use('/api/auth', userRoutes)

app.use('/api/sauces', saucesRoutes)
app.post('/api/sauces', saucesRoutes)

app.use('/api/sauces/:id', saucesRoutes)
app.put('/api/sauces/:id', saucesRoutes)
app.delete('/api/sauces/:id', saucesRoutes)

app.post('/api/sauces/:id/like', saucesRoutes)

module.exports = app;
