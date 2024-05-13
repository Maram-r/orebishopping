const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');







const app = express();
const port = 5000;

app.use(cors()); // Autoriser toutes les origines (à des fins de développement)
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define user schema
const userSchema = new mongoose.Schema({
  clientName: String,
  email: String,
  phone: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

// Handle sign-up request
app.post('/Signup', async (req, res) => {
  const { clientName, email, phone, password } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    // Create new user
    const newUser = new User({ clientName, email, phone, password });
    await newUser.save();
    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ error: 'Server error' });
  }
});






//-------------------------------------Sign in-------------------------------//


// Exemple de route pour la connexion utilisateur dans votre serveur backend (server.js)
app.post('/SignIn', async (req, res) => {
  const { email, password } = req.body;

  // Vérifier les informations d'identification dans la base de données MongoDB
  const user = await User.findOne({ email, password });

  if (user) {
    // Utilisateur trouvé, connexion réussie
    res.json({ message: 'Login successful', user });
  } else {
    // Utilisateur non trouvé, connexion échouée
    res.status(401).json({ error: 'Invalid email or password' });
  }
})








































app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});