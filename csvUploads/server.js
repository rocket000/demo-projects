const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const multer = require('multer');
const fileModel = require('./src/models/fileModel');
const indexRoute = require('./src/routes/indexRoute');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views','./src/views');
app.set('views',path.join(__dirname,'./src/views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware to handle file uploads
app.use(upload.single('csvFile'));

// Routes
app.use('/', indexRoute);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
