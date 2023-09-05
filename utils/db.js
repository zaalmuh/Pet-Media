const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/aliza', { useNewParser: true, useUnifiedTopology: true, useCreateIndex: true });
