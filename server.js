const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');


const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');


dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/masin" ).then(() => console.log('✅ MongoDB connected'));

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));