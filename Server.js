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






//------------------------------Claims------------------------------------------//


const claimSchema = new mongoose.Schema({
  clientName: String,
  email: String,
  messages: String
});

const Claim = mongoose.model("Claim", claimSchema);

// POST endpoint to handle form submission
app.post("/api/Claim", async (req, res) => {
  try {
    const { clientName, email, messages } = req.body;
    
    // Validation
    if (!clientName || !email || !messages) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newClaim = new Claim({
      clientName,
      email,
      messages
    });

    await newClaim.save();

    res.status(201).json({ message: "Claim added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});




//-----------------------------------Caim Details--------------------------//


let claims = [];

app.use(express.json());

app.post('/api/Claim', (req, res) => {
  const { clientName, email, messages } = req.body;
  const newClaim = { id: claims.length + 1, clientName, email, messages };
  claims.push(newClaim);
  res.status(201).json({ message: "Claim submitted successfully!" });
});

app.get('/api/Claim', (req, res) => {
  res.status(200).json(claims);
});

















//------------------------------------------------Contracts Details------------------------------//


const contractSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});

// Création du modèle basé sur le schéma
const Contract = mongoose.model('Contract', contractSchema);

// Route POST pour créer un nouveau contrat
app.post('/contracts', async (req, res) => {
  const { name, email, description, startDate, endDate } = req.body;
  try {
    const newContract = new Contract({ name, email, description, startDate, endDate });
    await newContract.save();
    res.status(201).json(newContract);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



app.get('/contracts', async (req, res) => {
  try {
    const contracts = await Contract.find();
    res.status(200).json(contracts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

















app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});